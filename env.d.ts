declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      JWT_SECRET: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_SYNC: string;
      NODE_ENV: string;
      BASE_URL: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET;
      JWT_TOKEN_EXPIRY: string;
      OTP_EXPIRY_MINUTE: string;
    }
  }
}

export {};
