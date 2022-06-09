This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Cloud environment

The application is available:
https://w3oas.vercel.app/

You can read about it:
https://medium.com/@szmizorsz/full-stack-web3-for-semi-dapps-web3-onboarding-as-a-service-cfbb70fa9d54

## Set up your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Generate a secret for the JWT token signing, go to https://generate-secret.now.sh/32
And set it in the NEXTAUTH_SECRET variable.

Set up a new discord application with Oauth2 settings on the Discord Developer portal (https://discord.com/developers/applications)
Set the redirect URL:
http://localhost:3000/api/auth/callback/discord

Add details for the Discord provider from your Discord application:

- NEXT_PUBLIC_DISCORD_CLIENT_ID
- DISCORD_CLIENT_SECRET

Configure your local Hasura environment with the followings

- HASURA_GRAPHQL_ADMIN_SECRET
- HASURA_GRAPHQL_JWT_SECRET='{"type": "HS256", "key": "<NEXTAUTH_SECRET>"}' - replace the NEXTAUTH_SECRET with the previously generated secret

Create an Openzeppelin Defender Relay project (https://defender.openzeppelin.com/#/) and set the client id:
NEXT_PUBLIC_WEB3AUTH_CLIENTID=

Create an Alchemy application and set the Key:
NEXT_PUBLIC_RPC_TARGET=https://polygon-mumbai.g.alchemy.com/v2/<KEY>

Deploy the w3oas contracts (https://github.com/szmizorsz/w3oas-contracts) and set the community NFT factory contract:
NEXT_PUBLIC_COMMUNITY_NFT_FACTORY_CONTRACT_ADDRESS=

## Run locally

Start the docker images:

```
docker-compose --env-file .env.local up -d
```

Configure the database in the Hasura console:
http://localhost:8080/console
Set a new database connection in Data tab/Connect database

- database name: w3oas
- database URL:postgres://postgres:postgrespassword@postgres:5432/postgres

All metadata and migration (stored in hasura/metadata and hasura/migration) is applied automatically at the docker image start up

Run the development server with:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
