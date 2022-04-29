alter table "public"."member" drop constraint "member_community_id_fkey",
  add constraint "member_community_id_fkey"
  foreign key ("community_id")
  references "public"."community"
  ("id") on update restrict on delete restrict;
