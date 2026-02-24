import type { ModuleOptions } from 'nuxt-gtag'

declare module 'nuxt/schema' {
  interface NuxtConfig {
    gtag?: ModuleOptions
  }
  interface NuxtOptions {
    gtag?: ModuleOptions
  }
}

export {}

