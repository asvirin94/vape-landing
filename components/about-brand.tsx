"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"

export function AboutBrand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    "30+ вкусов, которые сносят крышу",
    "4 линейки продукции для любого настроения",
    "100% легально и с гарантией качества",
  ]

  const stats = [
    { value: "30+", label: "Уникальных вкусов", color: "text-green-400" },
    { value: "4", label: "Линейки продукции", color: "text-purple-400" },
    { value: "100%", label: "Сертифицированное качество", color: "text-blue-400" },
    { value: "∞", label: "Узнаваемость бренда", color: "text-pink-400" },
  ]

  return (
    <section
      id="about"
      className="py-12 tablet:py-16 laptop:py-20 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.header
          className="text-center mb-12 tablet:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="about-heading" className="text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-6">
            О{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">бренде</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
        </motion.header>

        <div className="grid laptop:grid-cols-2 gap-8 tablet:gap-12 desktop:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            className="space-y-6 tablet:space-y-8 laptop:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg tablet:text-xl desktop:text-2xl text-gray-300 leading-relaxed">
                <span className="text-green-400 font-semibold">ZEF VAPE & Tasty LAB</span> — это не просто жидкости, это
                целая вселенная Rick & Morty в твоем кармане! Мы делаем вейпинг крутым с 2019 года.
              </p>

              <p className="text-base tablet:text-lg text-gray-400 leading-relaxed">
                Наша продукция — это микс высочайшего качества, безумного дизайна по официальной лицензии и технологий,
                которые даже Рик одобрил бы. Ну, почти 😎
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-3 tablet:p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:bg-gray-800/70"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 tablet:w-6 tablet:h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200 text-sm tablet:text-base desktop:text-lg font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative laptop:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative p-6 tablet:p-8 desktop:p-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-purple-500/10 rounded-2xl" />

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-60" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-60" />

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 tablet:gap-8 text-center">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2 p-4 rounded-lg bg-black/20 border border-gray-700/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`text-2xl tablet:text-3xl desktop:text-4xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-300 text-sm tablet:text-base desktop:text-lg font-medium leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <p className="text-green-400 font-semibold text-sm tablet:text-base">
                    Официальная лицензия Rick & Morty™ — да, мы крутые! 🔥
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
