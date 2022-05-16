import type { UserFieldsFragment } from '../../graphql/generated/graphql'

export interface UserWithNftMembership {
  user: UserFieldsFragment
  isOwningMembershipNft?: boolean
}
