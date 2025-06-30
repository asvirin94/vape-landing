"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    city: "",
    contact: "",
    comments: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-12 tablet:py-16 laptop:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12 tablet:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-6">
            Готов стать официальным{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              оптовым партнёром?
            </span>
          </h2>
          <p className="text-lg tablet:text-xl text-gray-300 max-w-3xl mx-auto">
            Заполни форму — наш менеджер свяжется с тобой для подробной консультации. Обещаем, будет интересно! 😎
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 tablet:space-y-8">
            {/* First row */}
            <div className="grid tablet:grid-cols-2 gap-6 tablet:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3"
              >
                <label className="block text-base tablet:text-lg font-medium text-white">
                  Имя <span className="text-green-400">*</span>
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 tablet:h-14 text-base tablet:text-lg bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                  placeholder="Как тебя зовут?"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3"
              >
                <label className="block text-base tablet:text-lg font-medium text-white">Компания</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 tablet:h-14 text-base tablet:text-lg bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                  placeholder="Название твоей компании"
                />
              </motion.div>
            </div>

            {/* Second row */}
            <div className="grid tablet:grid-cols-2 gap-6 tablet:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3"
              >
                <label className="block text-base tablet:text-lg font-medium text-white">
                  Город/регион <span className="text-green-400">*</span>
                </label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="h-12 tablet:h-14 text-base tablet:text-lg bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                  placeholder="Откуда ты?"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-3"
              >
                <label className="block text-base tablet:text-lg font-medium text-white">
                  Контактный телефон или Telegram <span className="text-green-400">*</span>
                </label>
                <Input
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="h-12 tablet:h-14 text-base tablet:text-lg bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                  placeholder="+7 (999) 123-45-67 или @username"
                  required
                />
              </motion.div>
            </div>

            {/* Comments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-3"
            >
              <label className="block text-base tablet:text-lg font-medium text-white">Расскажи о себе</label>
              <Textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="min-h-[120px] tablet:min-h-[150px] text-base tablet:text-lg bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 resize-none"
                placeholder="Расскажи о своем бизнесе, планах и вопросах. Какой у тебя опыт в продаже вейп-продукции? Какие объемы планируешь закупать? Мы хотим знать тебя лучше! 🚀"
              />
            </motion.div>

            {/* Submit button */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 text-black font-bold px-12 tablet:px-16 py-4 tablet:py-6 text-lg tablet:text-xl rounded-xl shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105"
              >
                Отправить заявку 🔥
              </Button>
              <p className="text-gray-400 text-xs tablet:text-sm mt-4">
                Нажимая кнопку, ты соглашаешься на обработку персональных данных
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
