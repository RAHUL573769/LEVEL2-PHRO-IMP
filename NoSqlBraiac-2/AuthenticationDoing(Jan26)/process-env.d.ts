declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number
    DATABASE_URL_LOCAL: string
    DATABASE_URL: string
    NODE_ENV: string
    JWT_SECRET: string
    JWT_EXPIRES_IN: string
    BCRYPT_SALT_ROUND: number
  }
}