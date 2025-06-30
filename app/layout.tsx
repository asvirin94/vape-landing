import type React from "react"
import type { Metadata } from "next"
import { Unbounded } from "next/font/google"
import "./globals.css"
import { PageLoader } from "@/components/page-loader"

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zefvape.com"),
  title: {
    default: "ZEF VAPE - Оптовое партнёрство Rick & Morty VAPE | Официальный дистрибьютор в России",
    template: "%s | ZEF VAPE - Rick & Morty VAPE оптом",
  },
  description:
    "🔥 Станьте оптовым партнёром #1 бренда Rick & Morty VAPE в России! ⚡ 30+ уникальных вкусов, 4 линейки продукции, маржинальность до 150%. Официальная лицензия, быстрая доставка по РФ и СНГ. Заявка за 2 минуты!",
  keywords: [
    // Основные ключевые слова
    "rick and morty vape оптом",
    "зеф вейп оптовые поставки",
    "жидкости для вейпа оптом россия",
    "pod системы оптом",
    "вейп партнерство официальное",
    "rick morty жидкости дистрибьютор",

    // Коммерческие запросы
    "купить rick and morty vape оптом",
    "стать партнером zef vape",
    "оптовые цены rick morty vape",
    "дистрибьютор вейп продукции",
    "франшиза вейп магазина",

    // Региональные запросы
    "вейп оптом москва",
    "вейп оптом спб",
    "вейп оптом екатеринбург",
    "вейп оптом новосибирск",
    "вейп оптом казань",

    // Продуктовые запросы
    "tasty lab жидкости оптом",
    "bad trip bad acid оптом",
    "rick morty pod системы",
    "лицензионные вейп жидкости",

    // Бизнес запросы
    "как открыть вейп магазин",
    "вейп бизнес с нуля",
    "поставщик вейп продукции",
    "оптовая торговля электронными сигаретами",
  ].join(", "),
  authors: [{ name: "ZEF VAPE & Tasty LAB", url: "https://zefvape.com" }],
  creator: "ZEF VAPE & Tasty LAB",
  publisher: "ZEF VAPE & Tasty LAB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://zefvape.com",
    siteName: "ZEF VAPE - Rick & Morty VAPE оптом",
    title: "🔥 ZEF VAPE - Оптовое партнёрство Rick & Morty VAPE | Официальный дистрибьютор",
    description:
      "Станьте партнёром #1 бренда Rick & Morty VAPE! 30+ вкусов, маржинальность до 150%, официальная лицензия. Быстрая доставка по России и СНГ. Заявка за 2 минуты!",
    images: [
      {
        url: "/images/og-rick-morty-vape.jpg",
        width: 1200,
        height: 630,
        alt: "ZEF VAPE Rick & Morty - оптовое партнёрство, жидкости и POD-системы",
        type: "image/jpeg",
      },
      {
        url: "/images/products-1.png",
        width: 1200,
        height: 800,
        alt: "Rick & Morty BAD TRIP - коллекция вейп жидкостей ZEF VAPE",
        type: "image/png",
      },
      {
        url: "/images/products-2.png",
        width: 1200,
        height: 800,
        alt: "Rick & Morty BAD ACID - коллекция вейп жидкостей ZEF VAPE",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zefvape",
    creator: "@zefvape",
    title: "🔥 ZEF VAPE - Rick & Morty VAPE оптом | Официальный партнёр",
    description:
      "30+ вкусов Rick & Morty VAPE оптом! Маржинальность до 150%, быстрая доставка по РФ. Заявка за 2 минуты!",
    images: ["/images/og-rick-morty-vape.jpg"],
  },
  alternates: {
    canonical: "https://zefvape.com",
    languages: {
      "ru-RU": "https://zefvape.com",
      "en-US": "https://zefvape.com/en",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "facebook-domain-verification": "facebook-verification-code",
    },
  },
  category: "business",
  classification: "Wholesale Vaping Products",
  referrer: "origin-when-cross-origin",
  generator: "Next.js 14",
  other: {
    "google-site-verification": "google-verification-code",
    "yandex-verification": "yandex-verification-code",
    "msvalidate.01": "bing-verification-code",
  },
}

// Расширенная JSON-LD разметка для максимального SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zefvape.com/#organization",
      name: "ZEF VAPE & Tasty LAB",
      alternateName: ["ZEF VAPE", "Tasty LAB", "ЗЕФ ВЕЙП"],
      description:
        "Официальный дистрибьютор Rick & Morty VAPE продукции в России и СНГ. Оптовые поставки жидкостей и POD-систем.",
      url: "https://zefvape.com",
      logo: {
        "@type": "ImageObject",
        url: "https://zefvape.com/images/zef-vape-logo.png",
        width: 400,
        height: 100,
      },
      image: "https://zefvape.com/images/og-rick-morty-vape.jpg",
      telephone: "+7-800-555-0199",
      email: "partnership@zefvape.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "RU",
        addressRegion: "Москва",
        addressLocality: "Москва",
      },
      sameAs: [
        "https://t.me/zefvape",
        "https://vk.com/zefvape",
        "https://instagram.com/zefvape",
        "https://youtube.com/@zefvape",
      ],
      foundingDate: "2019",
      numberOfEmployees: "50-100",
      areaServed: ["RU", "KZ", "BY", "UA", "AM", "KG", "MD"],
      knowsAbout: [
        "Вейп продукция",
        "Rick and Morty лицензия",
        "Оптовые поставки",
        "POD системы",
        "Электронные сигареты",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://zefvape.com/#website",
      url: "https://zefvape.com",
      name: "ZEF VAPE - Rick & Morty VAPE оптом",
      description: "Официальный сайт ZEF VAPE для оптового партнёрства",
      publisher: {
        "@id": "https://zefvape.com/#organization",
      },
      inLanguage: "ru-RU",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://zefvape.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://zefvape.com/#webpage",
      url: "https://zefvape.com",
      name: "ZEF VAPE - Оптовое партнёрство Rick & Morty VAPE",
      description:
        "Станьте оптовым партнёром ZEF VAPE. 30+ вкусов Rick & Morty, высокая маржинальность, официальная лицензия.",
      isPartOf: {
        "@id": "https://zefvape.com/#website",
      },
      about: {
        "@id": "https://zefvape.com/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://zefvape.com/images/og-rick-morty-vape.jpg",
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://zefvape.com",
          },
        ],
      },
    },
    {
      "@type": "Product",
      "@id": "https://zefvape.com/#product",
      name: "Rick & Morty VAPE - Оптовое партнёрство",
      description: "Оптовые поставки официальных Rick & Morty VAPE жидкостей и POD-систем",
      brand: {
        "@type": "Brand",
        name: "Rick & Morty VAPE by ZEF VAPE",
        logo: "https://zefvape.com/images/rick-morty-logo.png",
      },
      manufacturer: {
        "@id": "https://zefvape.com/#organization",
      },
      category: "Вейп продукция оптом",
      image: ["https://zefvape.com/images/products-1.png", "https://zefvape.com/images/products-2.png"],
      offers: {
        "@type": "Offer",
        description: "Оптовые поставки Rick & Morty VAPE продукции",
        businessFunction: "http://purl.org/goodrelations/v1#Sell",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2025-12-31",
        areaServed: ["RU", "KZ", "BY", "UA"],
        eligibleRegion: ["RU", "KZ", "BY", "UA"],
        seller: {
          "@id": "https://zefvape.com/#organization",
        },
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Количество вкусов",
          value: "30+",
        },
        {
          "@type": "PropertyValue",
          name: "Линейки продукции",
          value: "4",
        },
        {
          "@type": "PropertyValue",
          name: "Лицензия",
          value: "Официальная Rick & Morty",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://zefvape.com/#service",
      name: "Оптовое партнёрство ZEF VAPE",
      description: "Комплексные услуги оптового партнёрства: поставки, маркетинговая поддержка, обучение",
      provider: {
        "@id": "https://zefvape.com/#organization",
      },
      areaServed: ["RU", "KZ", "BY", "UA"],
      serviceType: "Оптовые поставки вейп продукции",
      offers: {
        "@type": "Offer",
        description: "Партнёрская программа ZEF VAPE",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://zefvape.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Как стать партнёром ZEF VAPE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Заполните форму на сайте, наш менеджер свяжется с вами в течение 24 часов для обсуждения условий партнёрства.",
          },
        },
        {
          "@type": "Question",
          name: "Какая минимальная сумма заказа?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Минимальная сумма первого заказа составляет 50 000 рублей. Для постоянных партнёров действуют индивидуальные условия.",
          },
        },
        {
          "@type": "Question",
          name: "Есть ли официальная лицензия на Rick & Morty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, у нас есть официальная лицензия на использование персонажей и брендинга Rick & Morty от Adult Swim.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" dir="ltr">
      <head>
        {/* Preconnect для ускорения загрузки */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />

        {/* DNS prefetch для внешних ресурсов */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//mc.yandex.ru" />

        {/* Preload критических ресурсов */}
        <link rel="preload" href="/images/products-1.png" as="image" type="image/png" />
        <link rel="preload" href="/images/products-2.png" as="image" type="image/png" />

        {/* Favicon и иконки */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Тема для браузеров */}
        <meta name="theme-color" content="#22c55e" />
        <meta name="color-scheme" content="dark light" />

        {/* Geo теги */}
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия" />
        <meta name="ICBM" content="55.7558, 37.6176" />

        {/* Бизнес информация */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />

        {/* JSON-LD структурированные данные */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Google Analytics (замените на ваш ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'ZEF VAPE Partnership',
                page_location: 'https://zefvape.com',
                content_group1: 'Partnership',
                content_group2: 'Wholesale'
              });
            `,
          }}
        />

        {/* Яндекс.Метрика (замените на ваш ID) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(YANDEX_METRIKA_ID, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                trackHash:true
              });
            `,
          }}
        />
      </head>
      <body className={unbounded.className} suppressHydrationWarning>
        <PageLoader />
        <main role="main" id="main-content">
          {children}
        </main>

        {/* Noscript для Яндекс.Метрики */}
        {/*<noscript>*/}
        {/*  <div>*/}
        {/*    <img*/}
        {/*      src="https://mc.yandex.ru/watch/YANDEX_METRIKA_ID"*/}
        {/*      style={{ position: "absolute", left: "-9999px" }}*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</noscript>*/}
      </body>
    </html>
  )
}
