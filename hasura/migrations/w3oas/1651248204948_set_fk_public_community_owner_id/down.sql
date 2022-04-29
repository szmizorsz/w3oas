alter table "public"."community" drop constraint "community_owner_id_fkey",
  add constraint "community_owner_id_fkey"
  foreign key ("owner_id")
  references "public"."user"
  ("id") on update restrict on delete restrict;
