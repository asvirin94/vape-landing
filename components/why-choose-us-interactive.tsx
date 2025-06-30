"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Package, RefreshCw, Headphones, Rocket, CheckCircle } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Оригинальный дизайн и лицензия Rick & Morty",
    description:
      "Официальная лицензия на использование персонажей культового мультсериала. Да, мы договорились с самим Риком!",
    benefits: ["Узнаваемый бренд", "Официальная лицензия", "Культовые персонажи"],
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-400/10 to-orange-500/10",
  },
  {
    icon: Package,
    title: "Максимально широкий ассортимент",
    description: "30+ уникальных вкусов в четырех крупных линейках. От классики до безумных экспериментов — есть всё!",
    benefits: ["30+ уникальных вкусов", "4 линейки продукции", "Полная линейка"],
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-400/10 to-emerald-500/10",
  },
  {
    icon: RefreshCw,
    title: "Постоянное обновление вкусов и коллекций",
    description: "Регулярные новинки и лимитированные выпуски. Скучно не будет — обещаем!",
    benefits: ["Регулярные новинки", "Лимитированные выпуски", "Всегда актуально"],
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-400/10 to-pink-500/10",
  },
  {
    icon: Headphones,
    title: "Оперативная отгрузка и поддержка партнёров",
    description: "Быстрая доставка и круглосуточная поддержка. Мы всегда на связи, как хороший друг.",
    benefits: ["Быстрая доставка", "Поддержка 24/7", "Личный менеджер"],
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-400/10 to-cyan-500/10",
  },
  {
    icon: Rocket,
    title: "Помогаем с запуском и рекламными материалами",
    description: "Предоставляем маркетинговые материалы и поддержку при запуске. Делаем ваш успех своим приоритетом!",
    benefits: ["Маркетинговые материалы", "Помощь в запуске", "Обучение персонала"],
    color: "from-red-400 to-pink-500",
    bgColor: "from-red-400/10 to-pink-500/10",
  },
]

export function WhyChooseUsInteractive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">нас</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Мы не просто продаем вейп — мы создаем опыт! Вот почему партнеры остаются с нами надолго 🚀
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isActive = activeCard === index

            return (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <motion.div
                  className={`relative p-6 lg:p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 transition-all duration-300 overflow-hidden ${
                    isActive ? "border-green-400/50 shadow-2xl shadow-green-400/10" : "hover:border-gray-600/50"
                  }`}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    y: isActive ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.bgColor} opacity-0 transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "group-hover:opacity-50"
                    }`}
                  />

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/3 rounded-full blur-xl" />

                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center shadow-lg`}
                      animate={{
                        rotate: isActive ? 360 : 0,
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-black" />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className={`text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-green-400" : "text-white group-hover:text-green-400"
                      }`}
                    >
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{reason.description}</p>

                    {/* Benefits List */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: isActive ? 1 : 0.7 }}
                      transition={{ duration: 0.3 }}
                    >
                      {reason.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                          initial={{ x: -10, opacity: 0 }}
                          animate={isInView ? { x: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.1 + benefitIndex * 0.1 }}
                        >
                          <motion.div
                            animate={{
                              scale: isActive ? 1.2 : 1,
                              rotate: isActive ? 360 : 0,
                            }}
                            transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                          >
                            <CheckCircle className={`w-4 h-4 text-green-400 ${isActive ? "drop-shadow-lg" : ""}`} />
                          </motion.div>
                          <span
                            className={`text-sm lg:text-base transition-colors duration-300 ${
                              isActive ? "text-gray-200" : "text-gray-300"
                            }`}
                          >
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div
                      className={`w-0 h-1 bg-gradient-to-r ${reason.color} rounded-full transition-all duration-500 ${
                        isActive ? "w-full shadow-lg" : "group-hover:w-1/2"
                      }`}
                    />
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? [1, 1.5, 1] : 1,
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      scale: { duration: 1, repeat: Number.POSITIVE_INFINITY },
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "30+", label: "Уникальных вкусов" },
            { value: "4", label: "Линейки продукции" },
            { value: "24/7", label: "Поддержка партнеров" },
            { value: "100%", label: "Официальная лицензия" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-green-400/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
