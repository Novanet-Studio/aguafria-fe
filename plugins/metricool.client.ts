import { defineNuxtPlugin, useRuntimeConfig, useRouter } from '#app'
import { nextTick } from 'vue'

declare global {
  interface Window {
    beTracker?: {
      t: (options: { hash: string }) => void
    }
  }
}

export default defineNuxtPlugin(() => {
  // Only execute on the client side
  if (!import.meta.client) return

  const config = useRuntimeConfig()
  const hash = config.public.metricoolHash

  if (!hash) {
    console.warn('[Metricool] Hash is missing. Please set NUXT_PUBLIC_METRICOOL_HASH or runtimeConfig.public.metricoolHash in nuxt.config.ts.')
    return
  }

  // Load the Metricool tracking script
  const loadScript = () => {
    return new Promise<void>((resolve, reject) => {
      if (window.beTracker) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://tracker.metricool.com/resources/be.js'
      script.async = true

      script.onload = () => resolve()
      script.onerror = (err) => reject(err)

      document.head.appendChild(script)
    })
  }

  let lastTrackedUrl = ''

  const trackPageView = () => {
    if (!window.beTracker) return

    const currentUrl = window.location.href
    // Prevent duplicate tracking calls for the same URL (e.g., initial hydration / route setup)
    if (currentUrl === lastTrackedUrl) return
    lastTrackedUrl = currentUrl

    window.beTracker.t({ hash })
  }

  // Load and initialize tracking
  loadScript()
    .then(() => {
      // Initial tracking call
      trackPageView()

      // Track subsequent page views on route changes
      const router = useRouter()
      router.afterEach(() => {
        nextTick(() => {
          trackPageView()
        })
      })
    })
    .catch((err) => {
      console.error('[Metricool] Failed to load tracking script:', err)
    })
})
