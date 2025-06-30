"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText, Phone, DollarSign, Rocket, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Оставьте заявку",
    description: "Заполните простую форму ниже с вашими контактными данными",
    details: "Укажите ваше имя, компанию, город и контактные данные. Это займет всего 2 минуты.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Phone,
    number: "02",
    title: "Мы свяжемся с вами",
    description: "Обсудим условия и предложим лучшие позиции для вашего бизнеса",
    details: "Наш менеджер свяжется с вами в течение 24 часов для обсуждения деталей сотрудничества.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: DollarSign,
    number: "03",
    title: "Получите прайс",
    description: "Получите актуальный прайс-лист и все материалы для успешного старта",
    details: "Вы получите полный каталог продукции, прайс-лист и маркетинговые материалы.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Начните продавать",
    description: "Ваша точка уже скоро продаёт топовые жидкости и POD-системы!",
    details: "Оформляем первый заказ и начинаем успешное партнерство с постоянной поддержкой.",
    color: "from-orange-400 to-red-500",
  },
]

export function HowToBecome() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="partnership" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
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
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Как стать оптовым{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              партнёром
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Простой процесс в 4 шага для начала успешного сотрудничества
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="absolute top-24 left-0 right-0 h-1 bg-gray-800 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-orange-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onHoverStart={() => setActiveStep(index)}
                  onHoverEnd={() => setActiveStep(null)}
                >
                  {/* Step Circle */}
                  <motion.div
                    className={`relative w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center cursor-pointer`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-black" />

                    {/* Pulse effect - теперь бесконечный */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Step Number */}
                  <div className="text-center mb-4">
                    <span
                      className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                      isActive ? "border-green-400/50 shadow-2xl shadow-green-400/20" : "border-gray-700/50"
                    }`}
                    animate={{ y: isActive ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 rounded-xl transition-opacity duration-300 ${
                        isActive ? "opacity-10" : ""
                      }`}
                    />

                    <div className="relative z-10 text-center space-y-3">
                      <h3
                        className={`text-xl font-semibold transition-colors duration-300 ${
                          isActive ? "text-green-400" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                      {/* Expanded details on hover */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-gray-700/50">
                          <p className="text-gray-300 text-xs">{step.details}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line - теперь с бесконечной анимацией */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-800 rounded-full">
              <motion.div
                className="w-full bg-gradient-to-b from-green-400 via-blue-400 via-purple-400 to-orange-400 rounded-full"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon

                return (
                  <motion.div
                    key={index}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-black" />

                      {/* Pulse effect - теперь бесконечный */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300`}
                        />

                        <div className="relative z-10 space-y-3">
                          <div className="flex items-center space-x-3">
                            <span
                              className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                            >
                              {step.number}
                            </span>
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          </div>

                          <p className="text-gray-400 leading-relaxed">{step.description}</p>

                          <p className="text-gray-300 text-sm">{step.details}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400/20 to-purple-500/20 rounded-full border border-green-400/30">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Готовы начать? Заполните форму ниже!</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
