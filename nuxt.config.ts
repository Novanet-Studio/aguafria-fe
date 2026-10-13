// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      metricoolHash: '' // Overridden by NUXT_PUBLIC_METRICOOL_HASH env var
    }
  },
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/css/materialdesignicons.min.css',
    '~/assets/libs/@iconscout/unicons/css/line.css',
    '~/assets/css/jarallax.min.css'
  ],

  app: {
    head: {
      title: 'Agua Fría Coffee',
      titleTemplate: 'Agua Fría Coffee- Café de Especialidad',
      htmlAttrs: { class: 'light scroll-smooth', dir: 'ltr' },
      bodyAttrs: {
        class: 'font-saira text-base text-slate-900 dark:text-white dark:bg-slate-900',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          // rel: 'stylesheet',
          // href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
        },

      ],
      script: [
        {
          innerHTML: 'function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"4fa467da1f57fb0a0551f9a5e7a936a7"})});'
        }
      ]
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-10-13'
})