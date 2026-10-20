import dotenv from "dotenv";
dotenv.config();
import { cert, initializeApp } from "firebase-admin/app";

const serviceAccount = {
  type: process.env.GOOGLE_SERVICE_TYPE,
  project_id: process.env.GOOGLE_SERVICE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_SERVICE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY
    ?.replace(/^"|"$/g, "")
    .replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_SERVICE_CLINTE_EMAIL,
  client_id: process.env.GOOGLE_SERVICE_CLINTE_ID,
  auth_uri: process.env.GOOGLE_SERVICE_AUTH_URI,
  token_uri: process.env.GOOGLE_SERVICE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_SERVICE_AUTH_PROVIDER_X509_CERT_URL,
  universe_domain: process.env.GOOGLE_SERVICE_UNIVERSE_DOMAIN,
};

export const app = initializeApp({
  credential: cert(serviceAccount),
});