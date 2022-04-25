import {ADAPTER_EVENTS, CHAIN_NAMESPACES} from '@web3auth/base';
import {ethers} from 'ethers';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import {blockchainNetworkMetadata} from '@/config/config';

import type {Web3Auth} from '@web3auth/web3auth';

declare let window: any;

export interface IWeb3Context {
  provider: ethers.providers.Web3Provider | null
  isLoading: boolean
  walletType: string
  walletState: string

  login: (
    loginMethod: ELoginMethod
  ) => Promise<
    { provider: ethers.providers.Web3Provider; walletType: string } | undefined
  >
  logout: () => Promise<void>
}

export const Web3Context = createContext<IWeb3Context>({
  provider: null,
  isLoading: false,
  walletType: '',
  walletState: '',
  login: (async () => {}) as any,
  logout: async () => {}
});

export function useWeb3 (): IWeb3Context {
  return useContext(Web3Context);
}

// eslint-disable-next-line no-restricted-syntax
export enum ELoginMethod {
  Web3Auth = 'Web3Auth',
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
}

export const Web3Provider: React.FC = ({children}) => {
  const [walletState, setWalletState] = useState('');
  const [walletType, setWalletType] = useState('');

  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3Auth>();

  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  if (
    !process.env.NEXT_PUBLIC_RPC_TARGET ||
    !process.env.NEXT_PUBLIC_NETWORK ||
    !process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID
  ) {
    throw new Error('Missing env vars');
  }

  const getWeb3AuthWalletType = useCallback(
    async (_web3Auth?: Web3Auth) => {
      if (!web3AuthInstance) return;
      if (!_web3Auth) return;

      const userInfo = await (web3AuthInstance || _web3Auth).getUserInfo();

      return `web3auth_${userInfo.typeOfLogin}`;
    },
    [web3AuthInstance]
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {Web3Auth} = await import('@web3auth/web3auth');
      const web3auth = new Web3Auth({
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          rpcTarget: process.env.NEXT_PUBLIC_RPC_TARGET as string,
          ...blockchainNetworkMetadata[
            process.env.NEXT_PUBLIC_NETWORK as string
          ]
        },
        clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID as string
      });

      // Listening to modal events, on successful login, `CONNECTED` event will be emitted.
      web3auth.on(ADAPTER_EVENTS.CONNECTED, async () => {
        if (web3auth.provider) {
          setProvider(new ethers.providers.Web3Provider(web3auth.provider));

          const wt = await getWeb3AuthWalletType(web3auth);

          if (!wt) return console.error('Could not get walletType');
          setWalletType(wt);
        }

        setWalletState(ADAPTER_EVENTS.CONNECTED);
      });
      web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        setWalletState(ADAPTER_EVENTS.CONNECTING);
      });
      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        setProvider(null);
        setWalletType('');

        setWalletState(ADAPTER_EVENTS.DISCONNECTED);
      });
      web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.error('web3auth error', error);
        setWalletState(ADAPTER_EVENTS.ERRORED);
      });

      // Initiate the modal
      await web3auth.initModal();
      setWeb3AuthInstance(web3auth);

      setIsLoading(false);
    })();

    return () => {};
  }, []);

  const login = async (loginMethod: ELoginMethod) => {
    if (loginMethod === ELoginMethod.Web3Auth) {
      if (!web3AuthInstance) {
        console.log('web3auth not initialized yet');

        return;
      }

      // Info: The state provider will be set in web3auth event callback for "ADAPTER_EVENTS.CONNECTED"
      const localProvider = await web3AuthInstance.connect();

      if (!localProvider) throw new Error('Could not get provider!');

      const wt = await getWeb3AuthWalletType(web3AuthInstance);

      if (!wt) throw new Error('Could not get walletType');

      return {
        provider: new ethers.providers.Web3Provider(localProvider),
        walletType: wt
      };
    }

    if (loginMethod === ELoginMethod.Injected) {
      if (!window.ethereum) {
        console.log('window.ethereum not available');

        return;
      }

      let injectedProvider = window.ethereum;

      // Edge case if MM and CBW are both installed, use first one
      if (window.ethereum.providers?.length) {
        injectedProvider = window.ethereum.providers[0];
      }

      const localProvider = new ethers.providers.Web3Provider(injectedProvider);

      await localProvider.send('eth_requestAccounts', []);

      setProvider(localProvider);
      setWalletType(loginMethod);
      setWalletState(ADAPTER_EVENTS.CONNECTED);

      return {
        provider: localProvider,
        walletType: loginMethod
      };
    }

    if (loginMethod === ELoginMethod.WalletConnect) {
      const {default: WalletConnectProvider} = await import(
        '@walletconnect/web3-provider'
      );

      const walletConnectProvider = new WalletConnectProvider({
        rpc: {
          [parseInt(
            blockchainNetworkMetadata[process.env.NEXT_PUBLIC_NETWORK as string]
              .chainId,
            16
          )]: process.env.NEXT_PUBLIC_RPC_TARGET as string
        }
      });

      //  Enable session (triggers QR Code modal)
      await walletConnectProvider.enable();

      const localProvider = new ethers.providers.Web3Provider(
        walletConnectProvider
      );

      setProvider(localProvider);
      setWalletType(loginMethod);
      setWalletState(ADAPTER_EVENTS.CONNECTED);

      return {
        provider: localProvider,
        walletType: loginMethod
      };
    }

    throw new Error(`Login Method ${loginMethod} not implemented!`);
  };

  const logout = async () => {
    if (!web3AuthInstance) {
      console.log('web3auth not initialized yet');

      return;
    }

    await web3AuthInstance.logout();
  };

  const contextProvider = {
    provider,
    isLoading,
    walletType,
    walletState,
    login,
    logout
  };

  return (
    <Web3Context.Provider value={contextProvider}>
      {children}
    </Web3Context.Provider>
  );
};
