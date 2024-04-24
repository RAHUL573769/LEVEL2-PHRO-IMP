declare namespace NodeJs {
  export type ProcessEnv = {
    DB_URL_CLOUD: string;
    DB_URL_LOCAL: string;
    PORT: number;
    NODE_ENV: string;
  };
}
