/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
