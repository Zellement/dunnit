import { defineNuxtConfig } from 'nuxt/config'
import eslintVitePlugin from 'vite-plugin-eslint'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Fix for issue - https://github.com/nuxt-modules/tailwindcss/issues/480
    devServerHandlers: [],

    ssr: true,

    nitro: {
        compressPublicAssets: true,
        minify: true
    },

    modules: [
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/svg-sprite',
        'nuxt-viewport',
        '@nuxt/fonts'
    ],

    svgSprite: {
        input: '~/assets/icons/svg',
        output: '~/assets/icons/sprites'
    },

    tailwindcss: {
        cssPath: '~/assets/scss/app.scss'
    },

    css: ['@/assets/scss/app.scss'],

    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],

    viewport: {
        breakpoints: {
            initial: 0,
            '3xs': 21 * 16, // 336px
            '2xs': 23 * 16, // 368px
            xs: 25.625 * 16, // 410px
            sm: 30 * 16, // 480px
            'sm-md': 35 * 16, // 560px
            md: 43.125 * 16, // 690px
            lg: 54.875 * 16, // 878px
            xl: 79.6875 * 16, // 1275px
            '2xl': 90 * 16, // 1440px
            '3xl': 100 * 16, // 1600px
            max: 1848 // 1848px
        },
        fallbackBreakpoint: 'initial'
    },

    // Allows for local testing on devices
    devServer: {
        port: 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    name: 'description',
                    content: 'something'
                },
                { hid: 'og-type', property: 'og:type', content: 'website' }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.png'
                }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    runtimeConfig: {
        public: {
            WEBSITE_URL: import.meta.env.WEBSITE_URL,
            MARKER_ID: import.meta.env.MARKER_ID,
            MARKER_ENABLED: import.meta.env.MARKER_ENABLED,
            COOKIE_YES_ID: import.meta.env.COOKIE_YES_ID,
            GTM_ID: import.meta.env.GTM_ID
        }
    },

    vite: {
        plugins: [
            eslintVitePlugin({
                fix: true,
                include: ['./**/*.vue', './**/*.ts', './**/*.js']
            })
        ]
    },

    typescript: {
        typeCheck: true,
        strict: true,
        tsConfig: {
            compilerOptions: {
                strict: true
            },
            include: [
                '@pinia/nuxt',
                '@types/node',
                '@nuxt/image',
                '@nuxt/types',
                '**/*.d.ts'
            ]
        }
    },

    devtools: { enabled: true },

    compatibilityDate: '2024-08-08'
})
