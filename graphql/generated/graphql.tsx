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
  /** An array relationship */
  members: Array<Member>;
  /** An aggregate relationship */
  members_aggregate: Member_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  owner: User;
  owner_id: Scalars['Int'];
};


/** columns and relationships of "community" */
export type CommunityMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "community" */
export type CommunityMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
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
  members?: InputMaybe<Member_Bool_Exp>;
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
  members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "community" */
export type Community_Obj_Rel_Insert_Input = {
  data: Community_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Community_On_Conflict>;
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
  members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
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

/** columns and relationships of "member" */
export type Member = {
  __typename?: 'member';
  /** An object relationship */
  community: Community;
  community_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "member" */
export type Member_Aggregate = {
  __typename?: 'member_aggregate';
  aggregate?: Maybe<Member_Aggregate_Fields>;
  nodes: Array<Member>;
};

/** aggregate fields of "member" */
export type Member_Aggregate_Fields = {
  __typename?: 'member_aggregate_fields';
  avg?: Maybe<Member_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Member_Max_Fields>;
  min?: Maybe<Member_Min_Fields>;
  stddev?: Maybe<Member_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Sum_Fields>;
  var_pop?: Maybe<Member_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Var_Samp_Fields>;
  variance?: Maybe<Member_Variance_Fields>;
};


/** aggregate fields of "member" */
export type Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "member" */
export type Member_Aggregate_Order_By = {
  avg?: InputMaybe<Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Max_Order_By>;
  min?: InputMaybe<Member_Min_Order_By>;
  stddev?: InputMaybe<Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Member_Sum_Order_By>;
  var_pop?: InputMaybe<Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Member_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "member" */
export type Member_Arr_Rel_Insert_Input = {
  data: Array<Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** aggregate avg on columns */
export type Member_Avg_Fields = {
  __typename?: 'member_avg_fields';
  community_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "member" */
export type Member_Avg_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type Member_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Bool_Exp>>;
  _not?: InputMaybe<Member_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Bool_Exp>>;
  community?: InputMaybe<Community_Bool_Exp>;
  community_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "member" */
export enum Member_Constraint {
  /** unique or primary key constraint */
  MemberPkey = 'member_pkey',
  /** unique or primary key constraint */
  MemberUserIdCommunityIdKey = 'member_user_id_community_id_key'
}

/** input type for incrementing numeric columns in table "member" */
export type Member_Inc_Input = {
  community_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "member" */
export type Member_Insert_Input = {
  community?: InputMaybe<Community_Obj_Rel_Insert_Input>;
  community_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Member_Max_Fields = {
  __typename?: 'member_max_fields';
  community_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "member" */
export type Member_Max_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Min_Fields = {
  __typename?: 'member_min_fields';
  community_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "member" */
export type Member_Min_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member" */
export type Member_Mutation_Response = {
  __typename?: 'member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member>;
};

/** on_conflict condition type for table "member" */
export type Member_On_Conflict = {
  constraint: Member_Constraint;
  update_columns?: Array<Member_Update_Column>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** Ordering options when selecting data from "member". */
export type Member_Order_By = {
  community?: InputMaybe<Community_Order_By>;
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member */
export type Member_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "member" */
export enum Member_Select_Column {
  /** column name */
  CommunityId = 'community_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "member" */
export type Member_Set_Input = {
  community_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Member_Stddev_Fields = {
  __typename?: 'member_stddev_fields';
  community_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "member" */
export type Member_Stddev_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Member_Stddev_Pop_Fields = {
  __typename?: 'member_stddev_pop_fields';
  community_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "member" */
export type Member_Stddev_Pop_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Member_Stddev_Samp_Fields = {
  __typename?: 'member_stddev_samp_fields';
  community_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "member" */
export type Member_Stddev_Samp_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Member_Sum_Fields = {
  __typename?: 'member_sum_fields';
  community_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "member" */
export type Member_Sum_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "member" */
export enum Member_Update_Column {
  /** column name */
  CommunityId = 'community_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Member_Var_Pop_Fields = {
  __typename?: 'member_var_pop_fields';
  community_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "member" */
export type Member_Var_Pop_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Member_Var_Samp_Fields = {
  __typename?: 'member_var_samp_fields';
  community_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "member" */
export type Member_Var_Samp_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Member_Variance_Fields = {
  __typename?: 'member_variance_fields';
  community_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "member" */
export type Member_Variance_Order_By = {
  community_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "community" */
  delete_community?: Maybe<Community_Mutation_Response>;
  /** delete single row from the table: "community" */
  delete_community_by_pk?: Maybe<Community>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<Member_Mutation_Response>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<Member>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "community" */
  insert_community?: Maybe<Community_Mutation_Response>;
  /** insert a single row into the table: "community" */
  insert_community_one?: Maybe<Community>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<Member_Mutation_Response>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<Member>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "community" */
  update_community?: Maybe<Community_Mutation_Response>;
  /** update single row of the table: "community" */
  update_community_by_pk?: Maybe<Community>;
  /** update data of the table: "member" */
  update_member?: Maybe<Member_Mutation_Response>;
  /** update single row of the table: "member" */
  update_member_by_pk?: Maybe<Member>;
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
export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_By_PkArgs = {
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
export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_OneArgs = {
  object: Member_Insert_Input;
  on_conflict?: InputMaybe<Member_On_Conflict>;
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
export type Mutation_RootUpdate_MemberArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_By_PkArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  pk_columns: Member_Pk_Columns_Input;
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
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
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


export type Query_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_By_PkArgs = {
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
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
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


export type Subscription_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_By_PkArgs = {
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
  /** An array relationship */
  members: Array<Member>;
  /** An aggregate relationship */
  members_aggregate: Member_Aggregate;
  wallet_address?: Maybe<Scalars['String']>;
};


/** columns and relationships of "user" */
export type UserMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
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
  members?: InputMaybe<Member_Bool_Exp>;
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
  members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
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
  members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
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


export type AvailableCommunitiesQuery = { __typename?: 'query_root', community: Array<{ __typename?: 'community', description?: string | null, discord_id: string, icon?: string | null, id: number, name: string, owner: { __typename?: 'user', id: number, discord_id: string, discord_email?: string | null, discord_user_name?: string | null, discord_avatar?: string | null }, members_aggregate: { __typename?: 'member_aggregate', aggregate?: { __typename?: 'member_aggregate_fields', count: number } | null } }> };

export type CommunityFieldsFragment = { __typename?: 'community', description?: string | null, discord_id: string, icon?: string | null, id: number, name: string, owner: { __typename?: 'user', id: number, discord_id: string, discord_email?: string | null, discord_user_name?: string | null, discord_avatar?: string | null }, members_aggregate: { __typename?: 'member_aggregate', aggregate?: { __typename?: 'member_aggregate_fields', count: number } | null } };

export type MemberFieldsFragment = { __typename?: 'community', members: Array<{ __typename?: 'member', id: number, user: { __typename?: 'user', discord_id: string, discord_user_name?: string | null, wallet_address?: string | null } }> };

export type GetCommunityByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCommunityByIdQuery = { __typename?: 'query_root', community_by_pk?: { __typename?: 'community', description?: string | null, discord_id: string, icon?: string | null, id: number, name: string, owner: { __typename?: 'user', id: number, discord_id: string, discord_email?: string | null, discord_user_name?: string | null, discord_avatar?: string | null }, members_aggregate: { __typename?: 'member_aggregate', aggregate?: { __typename?: 'member_aggregate_fields', count: number } | null }, members: Array<{ __typename?: 'member', id: number, user: { __typename?: 'user', discord_id: string, discord_user_name?: string | null, wallet_address?: string | null } }> } | null };

export type UpdateCommunityByIdMutationVariables = Exact<{
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
}>;


export type UpdateCommunityByIdMutation = { __typename?: 'mutation_root', update_community_by_pk?: { __typename?: 'community', id: number } | null };

export type DeleteCommunityByIdMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCommunityByIdMutation = { __typename?: 'mutation_root', delete_community_by_pk?: { __typename?: 'community', id: number } | null };

export type InsertCommunityMutationVariables = Exact<{
  description?: InputMaybe<Scalars['String']>;
  discord_id: Scalars['String'];
  name: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  owner_id: Scalars['Int'];
}>;


export type InsertCommunityMutation = { __typename?: 'mutation_root', insert_community_one?: { __typename?: 'community', description?: string | null, discord_id: string, icon?: string | null, id: number, name: string, owner: { __typename?: 'user', id: number, discord_id: string, discord_email?: string | null, discord_user_name?: string | null, discord_avatar?: string | null }, members_aggregate: { __typename?: 'member_aggregate', aggregate?: { __typename?: 'member_aggregate_fields', count: number } | null } } | null };

export type GetExistingCommunitiesByDiscordIdsQueryVariables = Exact<{
  discord_ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetExistingCommunitiesByDiscordIdsQuery = { __typename?: 'query_root', community: Array<{ __typename?: 'community', description?: string | null, discord_id: string, icon?: string | null, id: number, name: string, owner: { __typename?: 'user', id: number, discord_id: string, discord_email?: string | null, discord_user_name?: string | null, discord_avatar?: string | null }, members_aggregate: { __typename?: 'member_aggregate', aggregate?: { __typename?: 'member_aggregate_fields', count: number } | null } }> };

export type InsertMemberMutationVariables = Exact<{
  community_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
}>;


export type InsertMemberMutation = { __typename?: 'mutation_root', insert_member_one?: { __typename?: 'member', id: number } | null };

export type DeleteMemberMutationVariables = Exact<{
  community_id: Scalars['Int'];
  user_id: Scalars['Int'];
}>;


export type DeleteMemberMutation = { __typename?: 'mutation_root', delete_member?: { __typename?: 'member_mutation_response', returning: Array<{ __typename?: 'member', id: number }> } | null };

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
  members_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const MemberFieldsFragmentDoc = gql`
    fragment MemberFields on community {
  members {
    id
    user {
      discord_id
      discord_user_name
      wallet_address
    }
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
export const GetCommunityByIdDocument = gql`
    query getCommunityById($id: Int!) {
  community_by_pk(id: $id) {
    ...CommunityFields
    ...MemberFields
  }
}
    ${CommunityFieldsFragmentDoc}
${MemberFieldsFragmentDoc}`;

/**
 * __useGetCommunityByIdQuery__
 *
 * To run a query within a React component, call `useGetCommunityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommunityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommunityByIdQuery, GetCommunityByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommunityByIdQuery, GetCommunityByIdQueryVariables>(GetCommunityByIdDocument, options);
      }
export function useGetCommunityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunityByIdQuery, GetCommunityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommunityByIdQuery, GetCommunityByIdQueryVariables>(GetCommunityByIdDocument, options);
        }
export type GetCommunityByIdQueryHookResult = ReturnType<typeof useGetCommunityByIdQuery>;
export type GetCommunityByIdLazyQueryHookResult = ReturnType<typeof useGetCommunityByIdLazyQuery>;
export type GetCommunityByIdQueryResult = Apollo.QueryResult<GetCommunityByIdQuery, GetCommunityByIdQueryVariables>;
export const UpdateCommunityByIdDocument = gql`
    mutation UpdateCommunityById($id: Int!, $name: String, $description: String, $icon: String) {
  update_community_by_pk(
    pk_columns: {id: $id}
    _set: {description: $description, icon: $icon, name: $name}
  ) {
    id
  }
}
    `;
export type UpdateCommunityByIdMutationFn = Apollo.MutationFunction<UpdateCommunityByIdMutation, UpdateCommunityByIdMutationVariables>;

/**
 * __useUpdateCommunityByIdMutation__
 *
 * To run a mutation, you first call `useUpdateCommunityByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommunityByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommunityByIdMutation, { data, loading, error }] = useUpdateCommunityByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useUpdateCommunityByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommunityByIdMutation, UpdateCommunityByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommunityByIdMutation, UpdateCommunityByIdMutationVariables>(UpdateCommunityByIdDocument, options);
      }
export type UpdateCommunityByIdMutationHookResult = ReturnType<typeof useUpdateCommunityByIdMutation>;
export type UpdateCommunityByIdMutationResult = Apollo.MutationResult<UpdateCommunityByIdMutation>;
export type UpdateCommunityByIdMutationOptions = Apollo.BaseMutationOptions<UpdateCommunityByIdMutation, UpdateCommunityByIdMutationVariables>;
export const DeleteCommunityByIdDocument = gql`
    mutation DeleteCommunityById($id: Int!) {
  delete_community_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteCommunityByIdMutationFn = Apollo.MutationFunction<DeleteCommunityByIdMutation, DeleteCommunityByIdMutationVariables>;

/**
 * __useDeleteCommunityByIdMutation__
 *
 * To run a mutation, you first call `useDeleteCommunityByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommunityByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommunityByIdMutation, { data, loading, error }] = useDeleteCommunityByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommunityByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommunityByIdMutation, DeleteCommunityByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommunityByIdMutation, DeleteCommunityByIdMutationVariables>(DeleteCommunityByIdDocument, options);
      }
export type DeleteCommunityByIdMutationHookResult = ReturnType<typeof useDeleteCommunityByIdMutation>;
export type DeleteCommunityByIdMutationResult = Apollo.MutationResult<DeleteCommunityByIdMutation>;
export type DeleteCommunityByIdMutationOptions = Apollo.BaseMutationOptions<DeleteCommunityByIdMutation, DeleteCommunityByIdMutationVariables>;
export const InsertCommunityDocument = gql`
    mutation InsertCommunity($description: String, $discord_id: String!, $name: String!, $icon: String, $owner_id: Int!) {
  insert_community_one(
    object: {description: $description, discord_id: $discord_id, icon: $icon, name: $name, owner_id: $owner_id, members: {data: {user_id: $owner_id}}}
  ) {
    ...CommunityFields
  }
}
    ${CommunityFieldsFragmentDoc}`;
export type InsertCommunityMutationFn = Apollo.MutationFunction<InsertCommunityMutation, InsertCommunityMutationVariables>;

/**
 * __useInsertCommunityMutation__
 *
 * To run a mutation, you first call `useInsertCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommunityMutation, { data, loading, error }] = useInsertCommunityMutation({
 *   variables: {
 *      description: // value for 'description'
 *      discord_id: // value for 'discord_id'
 *      name: // value for 'name'
 *      icon: // value for 'icon'
 *      owner_id: // value for 'owner_id'
 *   },
 * });
 */
export function useInsertCommunityMutation(baseOptions?: Apollo.MutationHookOptions<InsertCommunityMutation, InsertCommunityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCommunityMutation, InsertCommunityMutationVariables>(InsertCommunityDocument, options);
      }
export type InsertCommunityMutationHookResult = ReturnType<typeof useInsertCommunityMutation>;
export type InsertCommunityMutationResult = Apollo.MutationResult<InsertCommunityMutation>;
export type InsertCommunityMutationOptions = Apollo.BaseMutationOptions<InsertCommunityMutation, InsertCommunityMutationVariables>;
export const GetExistingCommunitiesByDiscordIdsDocument = gql`
    query GetExistingCommunitiesByDiscordIds($discord_ids: [String!]) {
  community(where: {discord_id: {_in: $discord_ids}}) {
    ...CommunityFields
  }
}
    ${CommunityFieldsFragmentDoc}`;

/**
 * __useGetExistingCommunitiesByDiscordIdsQuery__
 *
 * To run a query within a React component, call `useGetExistingCommunitiesByDiscordIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExistingCommunitiesByDiscordIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExistingCommunitiesByDiscordIdsQuery({
 *   variables: {
 *      discord_ids: // value for 'discord_ids'
 *   },
 * });
 */
export function useGetExistingCommunitiesByDiscordIdsQuery(baseOptions?: Apollo.QueryHookOptions<GetExistingCommunitiesByDiscordIdsQuery, GetExistingCommunitiesByDiscordIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExistingCommunitiesByDiscordIdsQuery, GetExistingCommunitiesByDiscordIdsQueryVariables>(GetExistingCommunitiesByDiscordIdsDocument, options);
      }
export function useGetExistingCommunitiesByDiscordIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExistingCommunitiesByDiscordIdsQuery, GetExistingCommunitiesByDiscordIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExistingCommunitiesByDiscordIdsQuery, GetExistingCommunitiesByDiscordIdsQueryVariables>(GetExistingCommunitiesByDiscordIdsDocument, options);
        }
export type GetExistingCommunitiesByDiscordIdsQueryHookResult = ReturnType<typeof useGetExistingCommunitiesByDiscordIdsQuery>;
export type GetExistingCommunitiesByDiscordIdsLazyQueryHookResult = ReturnType<typeof useGetExistingCommunitiesByDiscordIdsLazyQuery>;
export type GetExistingCommunitiesByDiscordIdsQueryResult = Apollo.QueryResult<GetExistingCommunitiesByDiscordIdsQuery, GetExistingCommunitiesByDiscordIdsQueryVariables>;
export const InsertMemberDocument = gql`
    mutation InsertMember($community_id: Int, $user_id: Int) {
  insert_member_one(object: {community_id: $community_id, user_id: $user_id}) {
    id
  }
}
    `;
export type InsertMemberMutationFn = Apollo.MutationFunction<InsertMemberMutation, InsertMemberMutationVariables>;

/**
 * __useInsertMemberMutation__
 *
 * To run a mutation, you first call `useInsertMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMemberMutation, { data, loading, error }] = useInsertMemberMutation({
 *   variables: {
 *      community_id: // value for 'community_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useInsertMemberMutation(baseOptions?: Apollo.MutationHookOptions<InsertMemberMutation, InsertMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertMemberMutation, InsertMemberMutationVariables>(InsertMemberDocument, options);
      }
export type InsertMemberMutationHookResult = ReturnType<typeof useInsertMemberMutation>;
export type InsertMemberMutationResult = Apollo.MutationResult<InsertMemberMutation>;
export type InsertMemberMutationOptions = Apollo.BaseMutationOptions<InsertMemberMutation, InsertMemberMutationVariables>;
export const DeleteMemberDocument = gql`
    mutation DeleteMember($community_id: Int!, $user_id: Int!) {
  delete_member(
    where: {_and: {community_id: {_eq: $community_id}, user_id: {_eq: $user_id}}}
  ) {
    returning {
      id
    }
  }
}
    `;
export type DeleteMemberMutationFn = Apollo.MutationFunction<DeleteMemberMutation, DeleteMemberMutationVariables>;

/**
 * __useDeleteMemberMutation__
 *
 * To run a mutation, you first call `useDeleteMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberMutation, { data, loading, error }] = useDeleteMemberMutation({
 *   variables: {
 *      community_id: // value for 'community_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useDeleteMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMemberMutation, DeleteMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMemberMutation, DeleteMemberMutationVariables>(DeleteMemberDocument, options);
      }
export type DeleteMemberMutationHookResult = ReturnType<typeof useDeleteMemberMutation>;
export type DeleteMemberMutationResult = Apollo.MutationResult<DeleteMemberMutation>;
export type DeleteMemberMutationOptions = Apollo.BaseMutationOptions<DeleteMemberMutation, DeleteMemberMutationVariables>;
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