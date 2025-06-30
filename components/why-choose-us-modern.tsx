"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Package, RefreshCw, Headphones, Rocket, CheckCircle, ArrowRight } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Оригинальный дизайн и лицензия Rick & Morty",
    shortTitle: "Официальная лицензия",
    description:
      "Официальная лицензия на использование персонажей культового мультсериала. Да, мы договорились с самим Риком!",
    benefits: ["Узнаваемый бренд", "Официальная лицензия", "Культовые персонажи"],
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-400/10 to-orange-500/10",
    borderColor: "border-yellow-400/30",
    glowColor: "shadow-yellow-400/20",
  },
  {
    icon: Package,
    title: "Максимально широкий ассортимент",
    shortTitle: "30+ уникальных вкусов",
    description: "30+ уникальных вкусов в четырех крупных линейках. От классики до безумных экспериментов — есть всё!",
    benefits: ["30+ уникальных вкусов", "4 линейки продукции", "Полная линейка"],
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-400/10 to-emerald-500/10",
    borderColor: "border-green-400/30",
    glowColor: "shadow-green-400/20",
  },
  {
    icon: RefreshCw,
    title: "Постоянное обновление вкусов и коллекций",
    shortTitle: "Регулярные новинки",
    description: "Регулярные новинки и лимитированные выпуски. Скучно не будет — обещаем!",
    benefits: ["Регулярные новинки", "Лимитированные выпуски", "Всегда актуально"],
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-400/10 to-pink-500/10",
    borderColor: "border-purple-400/30",
    glowColor: "shadow-purple-400/20",
  },
  {
    icon: Headphones,
    title: "Оперативная отгрузка и поддержка партнёров",
    shortTitle: "Поддержка 24/7",
    description: "Быстрая доставка и круглосуточная поддержка. Мы всегда на связи, как хороший друг.",
    benefits: ["Быстрая доставка", "Поддержка 24/7", "Личный менеджер"],
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-400/10 to-cyan-500/10",
    borderColor: "border-blue-400/30",
    glowColor: "shadow-blue-400/20",
  },
  {
    icon: Rocket,
    title: "Помогаем с запуском и рекламными материалами",
    shortTitle: "Маркетинговая поддержка",
    description: "Предоставляем маркетинговые материалы и поддержку при запуске. Делаем ваш успех своим приоритетом!",
    benefits: ["Маркетинговые материалы", "Помощь в запуске", "Обучение персонала"],
    color: "from-red-400 to-pink-500",
    bgColor: "from-red-400/10 to-pink-500/10",
    borderColor: "border-red-400/30",
    glowColor: "shadow-red-400/20",
  },
]

export function WhyChooseUsModern() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Почему выбирают{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">нас</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Мы не просто продаем вейп — мы создаем опыт! Вот почему партнеры остаются с нами надолго 🚀
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Простая сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isActive = activeCard === index

            return (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
              >
                {/* Main card */}
                <motion.div
                  className={`relative p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border ${reason.borderColor} transition-all duration-300 h-full ${
                    isActive ? `${reason.glowColor} shadow-2xl` : "hover:shadow-xl"
                  }`}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    y: isActive ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.bgColor} opacity-0 transition-opacity duration-500 rounded-2xl ${
                      isActive ? "opacity-100" : "group-hover:opacity-70"
                    }`}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center shadow-lg`}
                      animate={{
                        rotate: isActive ? [0, 5, -5, 0] : 0,
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-black" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                      {reason.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>

                    {/* Benefits list */}
                    <div className="space-y-2">
                      {reason.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                          initial={{ x: -10, opacity: 0 }}
                          animate={isActive ? { x: 0, opacity: 1 } : { x: 0, opacity: 0.7 }}
                          transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <motion.div
                      className={`w-0 h-1 bg-gradient-to-r ${reason.color} rounded-full transition-all duration-500 ${
                        isActive ? "w-full shadow-lg" : "group-hover:w-3/4"
                      }`}
                    />

                    {/* Hover indicator */}
                    <motion.div
                      className="flex items-center text-gray-400 text-sm pt-2"
                      animate={{
                        x: isActive ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Узнать больше</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Expanded overlay panel */}
                <motion.div
                  className={`absolute inset-0 p-6 bg-gray-900/95 backdrop-blur-sm rounded-2xl border-2 shadow-2xl ${
                    reason.borderColor
                  } ${isActive ? reason.glowColor : ""}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{ background: `linear-gradient(135deg, ${reason.color.split(" ")[1]}, transparent)` }}
                  />

                  <div className="relative z-10 space-y-4 h-full flex flex-col">
                    {/* Icon and title */}
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{reason.title}</h3>
                    </div>

                    <p className="text-gray-300 leading-relaxed flex-grow">{reason.description}</p>

                    {/* Benefits list */}
                    <div className="space-y-2">
                      {reason.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                          initial={{ x: -10, opacity: 0 }}
                          animate={isActive ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                          transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action button */}
                    <motion.button
                      className={`w-full py-3 rounded-xl font-bold text-black bg-gradient-to-r ${reason.color} transition-all duration-300 hover:shadow-lg mt-auto`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Узнать больше
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: "30+", label: "Уникальных вкусов", color: "text-green-400" },
            { value: "4", label: "Линейки продукции", color: "text-blue-400" },
            { value: "24/7", label: "Поддержка партнеров", color: "text-purple-400" },
            { value: "100%", label: "Официальная лицензия", color: "text-yellow-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
