/* eslint-disable @typescript-eslint/no-empty-function */
import { CHAIN_NAMESPACES } from '@web3auth/base'
import { ethers } from 'ethers'
import React, { createContext, useContext, useEffect, useState } from 'react'

import { blockchainNetworkMetadata } from '../config/config'

import type { Web3Auth, Web3AuthOptions } from '@web3auth/web3auth'

export interface IWeb3Context {
  web3Provider: ethers.providers.Web3Provider | null
  web3Loading: boolean
  connectWallet: () => Promise<string[] | undefined>
  disconnectWallet: () => Promise<void>
  getUserInfo: () => Promise<void>
  getAccounts: () => Promise<string[] | undefined>
}

export const Web3Context = createContext<IWeb3Context>({
  web3Provider: null,
  web3Loading: false,
  connectWallet: async () => {
    return []
  },
  disconnectWallet: async () => {},
  getUserInfo: async () => {},
  getAccounts: async () => {
    return []
  },
})

export function useWeb3(): IWeb3Context {
  return useContext(Web3Context)
}

type Props = {
  children?: React.ReactNode
}

export const Web3Provider: React.FC<Props> = ({ children }) => {
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3Auth | null>(
    null
  )
  const [web3Provider, setWeb3Provider] =
    useState<ethers.providers.Web3Provider | null>(null)

  const [web3Loading, setIsWeb3Loading] = useState(false)

  if (
    !process.env.NEXT_PUBLIC_RPC_TARGET ||
    !process.env.NEXT_PUBLIC_NETWORK ||
    !process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID
  ) {
    throw new Error('Missing env vars')
  }

  useEffect(() => {
    const init = async () => {
      setIsWeb3Loading(true)
      try {
        const web3AuthCtorParams = {
          clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID as string,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            rpcTarget: process.env.NEXT_PUBLIC_RPC_TARGET as string,
            ...blockchainNetworkMetadata[
              process.env.NEXT_PUBLIC_NETWORK as string
            ],
          },
        }

        const { Web3Auth } = await import('@web3auth/web3auth')
        const web3AuthInstance = new Web3Auth(
          web3AuthCtorParams as Web3AuthOptions
        )
        setWeb3AuthInstance(web3AuthInstance)
        await web3AuthInstance.initModal()
        setIsWeb3Loading(false)
      } catch (error) {
        console.error(error)
      }
    }

    init()
  }, [])

  const connectWallet = async () => {
    if (!web3AuthInstance) {
      console.log('web3auth not initialized yet')
      return
    }
    const provider = await web3AuthInstance.connect()
    if (!provider) {
      console.log('web3provider not initialized')
      return
    }
    const web3ProviderFromWeb3Auth = new ethers.providers.Web3Provider(provider)
    const accounts = await web3ProviderFromWeb3Auth.listAccounts()
    setWeb3Provider(web3ProviderFromWeb3Auth)
    return accounts
  }

  const getUserInfo = async () => {
    if (!web3AuthInstance) {
      console.log('web3auth not initialized yet')
      return
    }
    const user = await web3AuthInstance.getUserInfo()
    console.log('User info', user)
  }

  const disconnectWallet = async () => {
    if (!web3AuthInstance) {
      console.log('web3auth not initialized yet')
      return
    }
    await web3AuthInstance.logout()
    setWeb3Provider(null)
  }

  const getAccounts = async () => {
    if (!web3Provider) {
      console.log('provider not initialized yet')
      return
    }
    try {
      const accounts = await web3Provider.listAccounts()
      console.log('accounts ' + accounts)
      return accounts
    } catch (error: unknown) {
      console.error((error as Error).message)
      throw error
    }
  }

  const contextProvider = {
    web3Provider,
    web3Loading,
    connectWallet,
    disconnectWallet,
    getUserInfo,
    getAccounts,
  }

  return (
    <Web3Context.Provider value={contextProvider}>
      {children}
    </Web3Context.Provider>
  )
}
