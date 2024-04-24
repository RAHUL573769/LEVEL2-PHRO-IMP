declare namespace NodeJs {
  export type ProcessEnv = {
    PORT: number;
    DATABASE_URL: string;
    NODE_ENV: string;
  };
}
