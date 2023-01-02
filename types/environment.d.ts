declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE: string;
      OPEN_WEATHER: string;
    }
  }
}

export {};
