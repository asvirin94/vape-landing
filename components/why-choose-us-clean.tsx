"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Package, RefreshCw, Headphones, Rocket } from "lucide-react"

const experiments = [
  {
    icon: Award,
    title: "Лицензия Rick & Morty",
    shortTitle: "Официальная лицензия",
    description: "Да, мы договорились с самим Риком! Официальные права на персонажей культового мультсериала.",
    formula: "R&M + ZEF = 💥",
    color: "from-green-400 via-emerald-500 to-teal-400",
    glowColor: "shadow-green-400/50",
    bubbles: ["🧪", "⚗️", "🔬"],
    portalColor: "#22c55e",
  },
  {
    icon: Package,
    title: "30+ Уникальных вкусов",
    shortTitle: "Широкий ассортимент",
    description: "4 линейки продукции. От классики до безумных экспериментов — химия вкуса в действии!",
    formula: "30+ = ∞ вкусов",
    color: "from-blue-400 via-cyan-500 to-sky-400",
    glowColor: "shadow-blue-400/50",
    bubbles: ["🌈", "💫", "✨"],
    portalColor: "#3b82f6",
  },
  {
    icon: RefreshCw,
    title: "Постоянные обновления",
    shortTitle: "Новинки каждый месяц",
    description: "Регулярные новинки и лимитированные выпуски. Наша лаборатория не спит!",
    formula: "Новинки × ∞",
    color: "from-purple-400 via-pink-500 to-rose-400",
    glowColor: "shadow-purple-400/50",
    bubbles: ["🔄", "🚀", "⭐"],
    portalColor: "#a855f7",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    shortTitle: "Всегда на связи",
    description: "Быстрая доставка и круглосуточная поддержка. Мы как Рик — всегда готовы к приключениям!",
    formula: "24/7 = ♾️",
    color: "from-orange-400 via-red-500 to-pink-400",
    glowColor: "shadow-orange-400/50",
    bubbles: ["📞", "💬", "🎧"],
    portalColor: "#f97316",
  },
  {
    icon: Rocket,
    title: "Помощь в запуске",
    shortTitle: "Маркетинговая поддержка",
    description: "Предоставляем все материалы и поддержку. Делаем ваш успех своим экспериментом!",
    formula: "Поддержка = 🚀",
    color: "from-teal-400 via-green-500 to-emerald-400",
    glowColor: "shadow-teal-400/50",
    bubbles: ["📈", "💼", "🎯"],
    portalColor: "#14b8a6",
  },
]

export function WhyChooseUsClean() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeExperiment, setActiveExperiment] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Почему выбирают{' '}
            </span>
            нас
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Мы не просто продаем вейп — мы создаем опыт!
            <br />
            Вот почему партнеры остаются с нами надолго.
            <br />
            <span className="text-green-400 font-semibold">Wubba Lubba Dub Dub! 🌀</span>
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon
            const isActive = activeExperiment === index

            return (
              <motion.div
                key={index}
                className="cursor-pointer tablet:w-[60%] laptop:w-[30%]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setActiveExperiment(index)}
                onHoverEnd={() => setActiveExperiment(null)}
              >
                <motion.div
                  className="p-6 bg-gray-900/95 backdrop-blur-sm rounded-2xl border-2 shadow-2xl h-[380px] w-full"
                  style={{ borderColor: isActive ? experiment.portalColor : "rgba(75, 85, 99, 0.5)" }}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    y: isActive ? -10 : 0,
                    boxShadow: isActive ? `0 0 40px ${experiment.portalColor}40` : "0 10px 25px rgba(0,0,0,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{ background: `linear-gradient(135deg, ${experiment.portalColor}40, transparent)` }}
                  />

                  <div className="relative z-10 space-y-4 h-full flex flex-col">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${experiment.color} rounded-xl flex items-center justify-center shadow-lg mx-auto`}
                      animate={{
                        rotate: isActive ? [0, 5, -5, 0] : 0,
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-black" />
                    </motion.div>
                    <div className="text-center">
                      <motion.div
                        className="inline-block px-4 py-2 bg-black/70 rounded-full border-2"
                        style={{ borderColor: experiment.portalColor }}
                        animate={{
                          boxShadow: isActive
                            ? [
                                `0 0 10px ${experiment.portalColor}60`,
                                `0 0 20px ${experiment.portalColor}80`,
                                `0 0 10px ${experiment.portalColor}60`,
                              ]
                            : `0 0 5px ${experiment.portalColor}40`,
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <span className="font-mono text-lg font-bold" style={{ color: experiment.portalColor }}>
                          {experiment.formula}
                        </span>
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-white text-center leading-tight">{experiment.title}</h3>

                    <p className="text-gray-300 text-center leading-relaxed flex-grow text-sm">
                      {experiment.description}
                    </p>

                    <div className="flex justify-center space-x-4 mt-auto">
                      {experiment.bubbles.map((bubble, i) => (
                        <motion.span
                          key={i}
                          className="text-2xl"
                          animate={{
                            y: isActive ? [0, -15, 0] : [0, -5, 0],
                            rotate: isActive ? [0, 15, -15, 0] : [0, 5, -5, 0],
                            scale: isActive ? [1, 1.2, 1] : [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        >
                          {bubble}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-500/20 rounded-full border-2 border-green-400/30 backdrop-blur-sm"
            animate={{
              boxShadow: [
                "0 0 30px rgba(34, 197, 94, 0.3)",
                "0 0 50px rgba(59, 130, 246, 0.4)",
                "0 0 30px rgba(168, 85, 247, 0.3)",
                "0 0 30px rgba(34, 197, 94, 0.3)",
              ],
              borderColor: [
                "rgba(34, 197, 94, 0.5)",
                "rgba(59, 130, 246, 0.5)",
                "rgba(168, 85, 247, 0.5)",
                "rgba(34, 197, 94, 0.5)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            {/* Mobile Layout - Icons above and below text */}
            <div className="flex flex-col items-center space-y-4 tablet:hidden">
              <motion.span
                className="text-3xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                🌀
              </motion.span>
              <span className="text-green-400 font-bold text-xl">Готовы к сотрудничеству?</span>
              <motion.span
                className="text-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -360],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🚀
              </motion.span>
            </div>

            {/* Desktop Layout - Icons on sides */}
            <div className="hidden tablet:flex items-center space-x-4">
              <motion.span
                className="text-3xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                🌀
              </motion.span>
              <span className="text-green-400 font-bold text-xl">Готовы к сотрудничеству?</span>
              <motion.span
                className="text-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -360],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🚀
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}