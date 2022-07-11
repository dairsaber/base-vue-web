type EnvConfigType = {
  isDev: boolean
  isProduction: boolean
}
export function getEnvConfig(): EnvConfigType {
  return {
    isDev: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  }
}
export const envConfig = getEnvConfig()
