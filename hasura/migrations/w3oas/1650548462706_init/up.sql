SET check_function_bodies = false;
CREATE TABLE public."user" (
    id integer NOT NULL,
    discord_id text NOT NULL,
    discord_user_name text NOT NULL,
    discord_avatar text NOT NULL,
    discord_email text NOT NULL
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_discord_id_key UNIQUE (discord_id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
