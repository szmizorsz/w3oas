import { getApolloClientWithAdminSecret } from './DBUtil'
import {
  SetNftContractAddressByIdMutation,
  SetNftContractAddressByIdMutationVariables,
  SetNftContractAddressByIdDocument,
} from '../../graphql/generated/graphql'

export async function setNftContractAddressByCommunityIdInDB(
  id: number,
  address: string
) {
  try {
    const client = getApolloClientWithAdminSecret()

    const { data } = await client.mutate<
      SetNftContractAddressByIdMutation,
      SetNftContractAddressByIdMutationVariables
    >({
      mutation: SetNftContractAddressByIdDocument,
      variables: {
        id,
        nft_contract_address: address,
      },
    })

    return data?.update_community_by_pk?.nft_contract_address
  } catch (error) {
    console.error(error)
  }
}
