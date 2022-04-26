import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "community" */
export type Community = {
  __typename?: 'community';
  description?: Maybe<Scalars['String']>;
  discord_id: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  owner: User;
  owner_id: Scalars['Int'];
};

/** aggregated selection of "community" */
export type Community_Aggregate = {
  __typename?: 'community_aggregate';
  aggregate?: Maybe<Community_Aggregate_Fields>;
  nodes: Array<Community>;
};

/** aggregate fields of "community" */
export type Community_Aggregate_Fields = {
  __typename?: 'community_aggregate_fields';
  avg?: Maybe<Community_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Community_Max_Fields>;
  min?: Maybe<Community_Min_Fields>;
  stddev?: Maybe<Community_Stddev_Fields>;
  stddev_pop?: Maybe<Community_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Community_Stddev_Samp_Fields>;
  sum?: Maybe<Community_Sum_Fields>;
  var_pop?: Maybe<Community_Var_Pop_Fields>;
  var_samp?: Maybe<Community_Var_Samp_Fields>;
  variance?: Maybe<Community_Variance_Fields>;
};


/** aggregate fields of "community" */
export type Community_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Community_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Community_Avg_Fields = {
  __typename?: 'community_avg_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "community". All fields are combined with a logical 'AND'. */
export type Community_Bool_Exp = {
  _and?: InputMaybe<Array<Community_Bool_Exp>>;
  _not?: InputMaybe<Community_Bool_Exp>;
  _or?: InputMaybe<Array<Community_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  discord_id?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<User_Bool_Exp>;
  owner_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "community" */
export enum Community_Constraint {
  /** unique or primary key constraint */
  CommunityPkey = 'community_pkey'
}

/** input type for incrementing numeric columns in table "community" */
export type Community_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "community" */
export type Community_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  discord_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<User_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Community_Max_Fields = {
  __typename?: 'community_max_fields';
  description?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Community_Min_Fields = {
  __typename?: 'community_min_fields';
  description?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "community" */
export type Community_Mutation_Response = {
  __typename?: 'community_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Community>;
};

/** on_conflict condition type for table "community" */
export type Community_On_Conflict = {
  constraint: Community_Constraint;
  update_columns?: Array<Community_Update_Column>;
  where?: InputMaybe<Community_Bool_Exp>;
};

/** Ordering options when selecting data from "community". */
export type Community_Order_By = {
  description?: InputMaybe<Order_By>;
  discord_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<User_Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: community */
export type Community_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "community" */
export enum Community_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "community" */
export type Community_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  discord_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Community_Stddev_Fields = {
  __typename?: 'community_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Community_Stddev_Pop_Fields = {
  __typename?: 'community_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Community_Stddev_Samp_Fields = {
  __typename?: 'community_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Community_Sum_Fields = {
  __typename?: 'community_sum_fields';
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "community" */
export enum Community_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** aggregate var_pop on columns */
export type Community_Var_Pop_Fields = {
  __typename?: 'community_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Community_Var_Samp_Fields = {
  __typename?: 'community_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Community_Variance_Fields = {
  __typename?: 'community_variance_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "community" */
  delete_community?: Maybe<Community_Mutation_Response>;
  /** delete single row from the table: "community" */
  delete_community_by_pk?: Maybe<Community>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "community" */
  insert_community?: Maybe<Community_Mutation_Response>;
  /** insert a single row into the table: "community" */
  insert_community_one?: Maybe<Community>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "community" */
  update_community?: Maybe<Community_Mutation_Response>;
  /** update single row of the table: "community" */
  update_community_by_pk?: Maybe<Community>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_CommunityArgs = {
  where: Community_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Community_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CommunityArgs = {
  objects: Array<Community_Insert_Input>;
  on_conflict?: InputMaybe<Community_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Community_OneArgs = {
  object: Community_Insert_Input;
  on_conflict?: InputMaybe<Community_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CommunityArgs = {
  _inc?: InputMaybe<Community_Inc_Input>;
  _set?: InputMaybe<Community_Set_Input>;
  where: Community_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Community_By_PkArgs = {
  _inc?: InputMaybe<Community_Inc_Input>;
  _set?: InputMaybe<Community_Set_Input>;
  pk_columns: Community_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "community" */
  community: Array<Community>;
  /** fetch aggregated fields from the table: "community" */
  community_aggregate: Community_Aggregate;
  /** fetch data from the table: "community" using primary key columns */
  community_by_pk?: Maybe<Community>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootCommunityArgs = {
  distinct_on?: InputMaybe<Array<Community_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Order_By>>;
  where?: InputMaybe<Community_Bool_Exp>;
};


export type Query_RootCommunity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Order_By>>;
  where?: InputMaybe<Community_Bool_Exp>;
};


export type Query_RootCommunity_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "community" */
  community: Array<Community>;
  /** fetch aggregated fields from the table: "community" */
  community_aggregate: Community_Aggregate;
  /** fetch data from the table: "community" using primary key columns */
  community_by_pk?: Maybe<Community>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootCommunityArgs = {
  distinct_on?: InputMaybe<Array<Community_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Order_By>>;
  where?: InputMaybe<Community_Bool_Exp>;
};


export type Subscription_RootCommunity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Order_By>>;
  where?: InputMaybe<Community_Bool_Exp>;
};


export type Subscription_RootCommunity_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  discord_avatar?: Maybe<Scalars['String']>;
  discord_email?: Maybe<Scalars['String']>;
  discord_id: Scalars['String'];
  discord_user_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  wallet_address?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  discord_avatar?: InputMaybe<String_Comparison_Exp>;
  discord_email?: InputMaybe<String_Comparison_Exp>;
  discord_id?: InputMaybe<String_Comparison_Exp>;
  discord_user_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  wallet_address?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserDiscordIdKey = 'user_discord_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserWalletAddressKey = 'user_wallet_address_key'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  discord_avatar?: InputMaybe<Scalars['String']>;
  discord_email?: InputMaybe<Scalars['String']>;
  discord_id?: InputMaybe<Scalars['String']>;
  discord_user_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  wallet_address?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  discord_avatar?: Maybe<Scalars['String']>;
  discord_email?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  discord_user_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  wallet_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  discord_avatar?: Maybe<Scalars['String']>;
  discord_email?: Maybe<Scalars['String']>;
  discord_id?: Maybe<Scalars['String']>;
  discord_user_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  wallet_address?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  discord_avatar?: InputMaybe<Order_By>;
  discord_email?: InputMaybe<Order_By>;
  discord_id?: InputMaybe<Order_By>;
  discord_user_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  wallet_address?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  DiscordAvatar = 'discord_avatar',
  /** column name */
  DiscordEmail = 'discord_email',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  DiscordUserName = 'discord_user_name',
  /** column name */
  Id = 'id',
  /** column name */
  WalletAddress = 'wallet_address'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  discord_avatar?: InputMaybe<Scalars['String']>;
  discord_email?: InputMaybe<Scalars['String']>;
  discord_id?: InputMaybe<Scalars['String']>;
  discord_user_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  wallet_address?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  DiscordAvatar = 'discord_avatar',
  /** column name */
  DiscordEmail = 'discord_email',
  /** column name */
  DiscordId = 'discord_id',
  /** column name */
  DiscordUserName = 'discord_user_name',
  /** column name */
  Id = 'id',
  /** column name */
  WalletAddress = 'wallet_address'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type AvailableCommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableCommunitiesQuery = { __typename?: 'query_root', community: Array<{ __typename?: 'community', description?: string | null, discord_id: string, icon?: string | null, id: number, name: string, owner: { __typename?: 'user', id: number, discord_id: string, discord_email?: string | null, discord_user_name?: string | null, discord_avatar?: string | null } }> };

export type CommunityFieldsFragment = { __typename?: 'community', description?: string | null, discord_id: string, icon?: string | null, id: number, name: string, owner: { __typename?: 'user', id: number, discord_id: string, discord_email?: string | null, discord_user_name?: string | null, discord_avatar?: string | null } };

export type UpsertUserMutationVariables = Exact<{
  discord_id: Scalars['String'];
  discord_email?: InputMaybe<Scalars['String']>;
  discord_user_name?: InputMaybe<Scalars['String']>;
  discord_avatar?: InputMaybe<Scalars['String']>;
}>;


export type UpsertUserMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename?: 'user', id: number } | null };

export type UpdateWalletForUserByIdMutationVariables = Exact<{
  user_id: Scalars['Int'];
  address: Scalars['String'];
}>;


export type UpdateWalletForUserByIdMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename?: 'user', wallet_address?: string | null } | null };

export const CommunityFieldsFragmentDoc = gql`
    fragment CommunityFields on community {
  description
  discord_id
  icon
  id
  name
  owner {
    id
    discord_id
    discord_email
    discord_user_name
    discord_avatar
  }
}
    `;
export const AvailableCommunitiesDocument = gql`
    query AvailableCommunities {
  community {
    ...CommunityFields
  }
}
    ${CommunityFieldsFragmentDoc}`;

/**
 * __useAvailableCommunitiesQuery__
 *
 * To run a query within a React component, call `useAvailableCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAvailableCommunitiesQuery(baseOptions?: Apollo.QueryHookOptions<AvailableCommunitiesQuery, AvailableCommunitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableCommunitiesQuery, AvailableCommunitiesQueryVariables>(AvailableCommunitiesDocument, options);
      }
export function useAvailableCommunitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableCommunitiesQuery, AvailableCommunitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableCommunitiesQuery, AvailableCommunitiesQueryVariables>(AvailableCommunitiesDocument, options);
        }
export type AvailableCommunitiesQueryHookResult = ReturnType<typeof useAvailableCommunitiesQuery>;
export type AvailableCommunitiesLazyQueryHookResult = ReturnType<typeof useAvailableCommunitiesLazyQuery>;
export type AvailableCommunitiesQueryResult = Apollo.QueryResult<AvailableCommunitiesQuery, AvailableCommunitiesQueryVariables>;
export const UpsertUserDocument = gql`
    mutation upsertUser($discord_id: String!, $discord_email: String, $discord_user_name: String, $discord_avatar: String) {
  insert_user_one(
    object: {discord_avatar: $discord_avatar, discord_email: $discord_email, discord_id: $discord_id, discord_user_name: $discord_user_name}
    on_conflict: {constraint: user_discord_id_key, update_columns: [discord_email, discord_id, discord_user_name, discord_avatar]}
  ) {
    id
  }
}
    `;
export type UpsertUserMutationFn = Apollo.MutationFunction<UpsertUserMutation, UpsertUserMutationVariables>;

/**
 * __useUpsertUserMutation__
 *
 * To run a mutation, you first call `useUpsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserMutation, { data, loading, error }] = useUpsertUserMutation({
 *   variables: {
 *      discord_id: // value for 'discord_id'
 *      discord_email: // value for 'discord_email'
 *      discord_user_name: // value for 'discord_user_name'
 *      discord_avatar: // value for 'discord_avatar'
 *   },
 * });
 */
export function useUpsertUserMutation(baseOptions?: Apollo.MutationHookOptions<UpsertUserMutation, UpsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertUserMutation, UpsertUserMutationVariables>(UpsertUserDocument, options);
      }
export type UpsertUserMutationHookResult = ReturnType<typeof useUpsertUserMutation>;
export type UpsertUserMutationResult = Apollo.MutationResult<UpsertUserMutation>;
export type UpsertUserMutationOptions = Apollo.BaseMutationOptions<UpsertUserMutation, UpsertUserMutationVariables>;
export const UpdateWalletForUserByIdDocument = gql`
    mutation UpdateWalletForUserById($user_id: Int!, $address: String!) {
  update_user_by_pk(pk_columns: {id: $user_id}, _set: {wallet_address: $address}) {
    wallet_address
  }
}
    `;
export type UpdateWalletForUserByIdMutationFn = Apollo.MutationFunction<UpdateWalletForUserByIdMutation, UpdateWalletForUserByIdMutationVariables>;

/**
 * __useUpdateWalletForUserByIdMutation__
 *
 * To run a mutation, you first call `useUpdateWalletForUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWalletForUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWalletForUserByIdMutation, { data, loading, error }] = useUpdateWalletForUserByIdMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUpdateWalletForUserByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWalletForUserByIdMutation, UpdateWalletForUserByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWalletForUserByIdMutation, UpdateWalletForUserByIdMutationVariables>(UpdateWalletForUserByIdDocument, options);
      }
export type UpdateWalletForUserByIdMutationHookResult = ReturnType<typeof useUpdateWalletForUserByIdMutation>;
export type UpdateWalletForUserByIdMutationResult = Apollo.MutationResult<UpdateWalletForUserByIdMutation>;
export type UpdateWalletForUserByIdMutationOptions = Apollo.BaseMutationOptions<UpdateWalletForUserByIdMutation, UpdateWalletForUserByIdMutationVariables>;