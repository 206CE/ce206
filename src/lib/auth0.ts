import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  // v4 automatically reads AUTH0_DOMAIN, AUTH0_CLIENT_ID, etc. from .env
  // But if you have a custom audience, define it here:
  /* authorizationParameters: {
    audience: 'https://your-api-identifier',
    scope: 'openid profile email'
  } */
});
