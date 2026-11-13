/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional form backend URL (e.g. https://formspree.io/f/xxxx). */
  readonly VITE_FORM_ENDPOINT?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
