import { Header } from "@/components/header"
import { OptimizedHeroBanner } from "@/components/optimized-hero-banner"
import { AboutBrand } from "@/components/about-brand"
import { WhyChooseUsClean } from "@/components/why-choose-us-clean"
import { CollectionsRedesigned } from "@/components/collections-redesigned"
import { HowToBecome } from "@/components/how-to-become"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const dynamic = "force-static"
export const revalidate = false
export const runtime = "nodejs"

export const metadata: Metadata = {
  title: "ZEF VAPE - Оптовое партнёрство Rick & Morty VAPE | Официальный дистрибьютор #1 в России",
  description:
    "Станьте партнёром #1 бренда Rick & Morty VAPE! ⚡ 30+ уникальных вкусов, маржинальность до 150%, официальная лицензия Adult Swim. Быстрая доставка по РФ и СНГ. Заявка за 2 минуты! 🚀",
  keywords:
    "rick and morty vape оптом, зеф вейп партнерство, жидкости для вейпа оптом россия, официальный дистрибьютор rick morty, tasty lab оптовые поставки, вейп бизнес франшиза, pod системы оптом москва",
  openGraph: {
    title: "ZEF VAPE - Rick & Morty VAPE оптом | Партнёрство #1 бренда в России",
    description:
      "30+ вкусов Rick & Morty VAPE оптом! Маржинальность до 150%, официальная лицензия, быстрая доставка. Заявка за 2 минуты!",
    url: "https://zefvape.com",
    images: [
      {
        url: "/images/og-rick-morty-vape.jpg",
        width: 1200,
        height: 630,
        alt: "ZEF VAPE Rick & Morty - оптовое партнёрство в России",
      },
    ],
  },
  alternates: {
    canonical: "https://zefvape.com",
  },
}

const staticPageData = {
  hero: {
    title: "Стань оптовым партнёром легендарного бренда",
    subtitle: "Жидкости и POD-системы, которые знают все!",
    cta: "Стать партнёром",
  },
  stats: {
    flavors: "30+",
    lines: "4",
    support: "24/7",
    license: "100%",
  },
  benefits: [
    "30+ вкусов, которые сносят крышу",
    "4 линейки продукции для любого настроения",
    "100% легально и с гарантией качества",
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Главная",
                item: "https://zefvape.com",
              },
            ],
          }),
        }}
      />

      {/* Основной контент страницы */}
      <Header />
      <OptimizedHeroBanner staticData={staticPageData.hero} />
      <AboutBrand staticData={staticPageData.stats} />
      <WhyChooseUsClean />
      <CollectionsRedesigned />
      <HowToBecome />
      <ContactForm />
      <Footer />
    </>
  )
}
