"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Award, Package, RefreshCw, Headphones, Rocket, Zap, Atom, Beaker, Sparkles } from "lucide-react"

const experiments = [
  {
    icon: Award,
    title: "Лицензия Rick & Morty",
    shortTitle: "Официальная лицензия",
    description: "Да, мы договорились с самим Риком! Официальные права на персонажей культового мультсериала.",
    formula: "R&M + ZEF = 💥",
    color: "from-green-400 via-emerald-500 to-teal-400",
    glowColor: "shadow-green-400/50",
    position: { top: "15%", left: "10%" },
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
    position: { top: "15%", right: "10%" },
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
    position: { bottom: "25%", left: "8%" },
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
    position: { bottom: "25%", right: "8%" },
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
    position: { top: "60%", left: "50%", transform: "translateX(-50%)" },
    bubbles: ["📈", "💼", "🎯"],
    portalColor: "#14b8a6",
  },
]

export function WhyChooseUsPortal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeExperiment, setActiveExperiment] = useState<number | null>(null)
  const [portalActive, setPortalActive] = useState(false)
  const [energyFlow, setEnergyFlow] = useState(0)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([])

  // Генерация частиц
  useEffect(() => {
    if (isInView) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ["#22c55e", "#3b82f6", "#a855f7", "#f97316", "#14b8a6"][Math.floor(Math.random() * 5)],
      }))
      setParticles(newParticles)
    }
  }, [isInView])

  // Энергетический поток
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setEnergyFlow((prev) => (prev + 1) % 100)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Космический фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />

      {/* Звездное небо */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Плавающие энергетические частицы */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: particle.color,
              left: particle.x + "%",
              top: particle.y + "%",
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Энергетическая сетка */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Заголовок лаборатории */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-gray-800/50 rounded-full border border-green-400/30 backdrop-blur-sm"
            animate={{
              boxShadow: isInView
                ? [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                  ]
                : "none",
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Atom className="w-6 h-6 text-green-400" />
            </motion.div>
            <span className="text-green-400 font-bold text-lg">МЕЖПРОСТРАНСТВЕННАЯ ЛАБОРАТОРИЯ</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Beaker className="w-6 h-6 text-green-400" />
            </motion.div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              ПОРТАЛ
            </span>
            <br />
            <span className="text-white">ПРЕИМУЩЕСТВ</span>

            {/* Энергетические молнии */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Zap className="w-8 h-8 text-yellow-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -15, 15, 0],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Добро пожаловать в межпространственную лабораторию преимуществ!
            <br />
            Каждый портал ведет к новому уровню сотрудничества.
            <br />
            <span className="text-green-400 font-semibold">Wubba Lubba Dub Dub! 🌀</span>
          </p>
        </motion.div>

        {/* Центральный портал */}
        <div className="relative max-w-7xl mx-auto h-[800px] lg:h-[900px]">
          {/* Главный портал в центре */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            onHoverStart={() => setPortalActive(true)}
            onHoverEnd={() => setPortalActive(false)}
          >
            <div className="relative w-40 h-40 lg:w-48 lg:h-48">
              {/* Внешние кольца портала */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute inset-${i * 2} rounded-full border-2`}
                  style={{
                    borderColor: ["#22c55e", "#3b82f6", "#a855f7", "#f97316"][i],
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    boxShadow: portalActive
                      ? `0 0 ${30 + i * 10}px ${["rgba(34, 197, 94, 0.5)", "rgba(59, 130, 246, 0.5)", "rgba(168, 85, 247, 0.5)", "rgba(249, 115, 22, 0.5)"][i]}`
                      : `0 0 ${10 + i * 5}px ${["rgba(34, 197, 94, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(168, 85, 247, 0.3)", "rgba(249, 115, 22, 0.3)"][i]}`,
                  }}
                  transition={{
                    rotate: { duration: 8 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    boxShadow: { duration: 0.3 },
                  }}
                />
              ))}

              {/* Центр портала */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center overflow-hidden"
                animate={{
                  scale: portalActive ? [1, 1.1, 1] : 1,
                  background: [
                    "linear-gradient(45deg, #22c55e, #3b82f6, #a855f7)",
                    "linear-gradient(90deg, #3b82f6, #a855f7, #22c55e)",
                    "linear-gradient(135deg, #a855f7, #22c55e, #3b82f6)",
                    "linear-gradient(180deg, #22c55e, #3b82f6, #a855f7)",
                  ],
                }}
                transition={{
                  scale: { duration: 0.3 },
                  background: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                {/* Вихрь в центре */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <div className="relative text-center text-black font-bold z-10">
                  <div className="text-lg lg:text-xl">ZEF</div>
                  <div className="text-sm lg:text-base">VAPE</div>
                </div>
              </motion.div>

              {/* Энергетические волны */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-green-400/20"
                  animate={{
                    scale: [1, 3, 4],
                    opacity: [0.8, 0.3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.8,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Энергетические связи */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {experiments.map((experiment, index) => {
              const centerX = 50
              const centerY = 50

              let targetX, targetY
              if (experiment.position.left) {
                targetX = Number.parseFloat(experiment.position.left) + 8
              } else if (experiment.position.right) {
                targetX = 100 - Number.parseFloat(experiment.position.right) - 8
              } else {
                targetX = 50
              }

              if (experiment.position.top) {
                targetY = Number.parseFloat(experiment.position.top) + 8
              } else if (experiment.position.bottom) {
                targetY = 100 - Number.parseFloat(experiment.position.bottom) - 8
              } else {
                targetY = 50
              }

              return (
                <motion.path
                  key={index}
                  d={`M ${centerX}% ${centerY}% Q ${(centerX + targetX) / 2}% ${(centerY + targetY) / 2 - 15}% ${targetX}% ${targetY}%`}
                  stroke={`url(#energyGradient${index})`}
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="15,10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? {
                          pathLength: 1,
                          opacity: activeExperiment === index ? 1 : 0.6,
                          strokeDashoffset: [-50, 0],
                        }
                      : {}
                  }
                  transition={{
                    pathLength: { duration: 2, delay: 1 + index * 0.2 },
                    opacity: { duration: 0.3 },
                    strokeDashoffset: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  }}
                />
              )
            })}
            <defs>
              {experiments.map((experiment, index) => (
                <linearGradient key={index} id={`energyGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={experiment.portalColor} />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor={experiment.portalColor} />
                </linearGradient>
              ))}
            </defs>
          </svg>

          {/* Экспериментальные порталы */}
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon
            const isActive = activeExperiment === index

            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer group"
                style={{
                  ...experiment.position,
                  zIndex: isActive ? 30 : 10,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                onHoverStart={() => setActiveExperiment(index)}
                onHoverEnd={() => setActiveExperiment(null)}
              >
                {/* Мини-портал */}
                <motion.div
                  className="relative w-24 h-24 lg:w-28 lg:h-28"
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    y: isActive ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Внешнее кольцо портала */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-3"
                    style={{ borderColor: experiment.portalColor }}
                    animate={{
                      rotate: 360,
                      boxShadow: isActive
                        ? `0 0 30px ${experiment.portalColor}80`
                        : `0 0 15px ${experiment.portalColor}40`,
                    }}
                    transition={{
                      rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      boxShadow: { duration: 0.3 },
                    }}
                  />

                  {/* Внутреннее кольцо */}
                  <motion.div
                    className="absolute inset-2 rounded-full border-2"
                    style={{ borderColor: experiment.portalColor }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  {/* Центр портала */}
                  <motion.div
                    className={`absolute inset-4 rounded-full bg-gradient-to-r ${experiment.color} flex items-center justify-center overflow-hidden`}
                    animate={{
                      background: isActive
                        ? [
                            `linear-gradient(45deg, ${experiment.portalColor}, #ffffff, ${experiment.portalColor})`,
                            `linear-gradient(90deg, #ffffff, ${experiment.portalColor}, #ffffff)`,
                            `linear-gradient(135deg, ${experiment.portalColor}, #ffffff, ${experiment.portalColor})`,
                          ]
                        : undefined,
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {/* Вихрь */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-30"
                      style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.8), transparent)",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-black relative z-10" />
                  </motion.div>

                  {/* Энергетические кольца */}
                  {isActive &&
                    [...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: `${experiment.portalColor}40` }}
                        animate={{
                          scale: [1, 2, 3],
                          opacity: [0.8, 0.4, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                </motion.div>

                {/* Информационная панель */}
                <motion.div
                  className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 w-80 lg:w-96 p-6 bg-gray-900/95 backdrop-blur-sm rounded-2xl border-2 shadow-2xl"
                  style={{ borderColor: isActive ? experiment.portalColor : "rgba(75, 85, 99, 0.5)" }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                    scale: isActive ? 1 : 0.8,
                    boxShadow: isActive ? `0 0 40px ${experiment.portalColor}40` : "none",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{ background: `linear-gradient(135deg, ${experiment.portalColor}40, transparent)` }}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Формула эксперимента */}
                    <div className="text-center">
                      <motion.div
                        className="inline-block px-4 py-2 bg-black/70 rounded-full border-2"
                        style={{ borderColor: experiment.portalColor }}
                        animate={{
                          boxShadow: [
                            `0 0 10px ${experiment.portalColor}60`,
                            `0 0 20px ${experiment.portalColor}80`,
                            `0 0 10px ${experiment.portalColor}60`,
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <span className="font-mono text-lg font-bold" style={{ color: experiment.portalColor }}>
                          {experiment.formula}
                        </span>
                      </motion.div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-white text-center">{experiment.title}</h3>

                    <p className="text-gray-300 text-center leading-relaxed">{experiment.description}</p>

                    {/* Эмодзи эффекты */}
                    <div className="flex justify-center space-x-4">
                      {experiment.bubbles.map((bubble, i) => (
                        <motion.span
                          key={i}
                          className="text-2xl"
                          animate={{
                            y: [0, -15, 0],
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
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

                    {/* Кнопка активации */}
                    <motion.button
                      className="w-full py-3 rounded-xl font-bold text-black transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${experiment.portalColor}, #ffffff, ${experiment.portalColor})`,
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      АКТИВИРОВАТЬ ПОРТАЛ
                    </motion.button>
                  </div>
                </motion.div>

                {/* Подпись */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                  <motion.span
                    className="text-sm lg:text-base font-bold"
                    style={{ color: experiment.portalColor }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      textShadow: [
                        `0 0 5px ${experiment.portalColor}40`,
                        `0 0 15px ${experiment.portalColor}60`,
                        `0 0 5px ${experiment.portalColor}40`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {experiment.shortTitle}
                  </motion.span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Результаты экспериментов */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-500/20 rounded-full border-2 border-green-400/30 backdrop-blur-sm"
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
            <span className="text-green-400 font-bold text-xl">
              Порталы активированы! Готовы к межпространственному сотрудничеству?
            </span>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
