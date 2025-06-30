"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid laptop:grid-cols-3 gap-12 mb-12">
          <motion.div
            className="space-y-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">
                <span className="text-white">ZEF</span>
                <span className="text-green-400 ml-2">VAPE</span>
              </div>
              <div className="text-sm text-gray-400">& Tasty LAB</div>
            </div>
            <p className="text-gray-400 leading-relaxed text-center">
              Инновационные жидкости и POD-системы с узнаваемым дизайном Rick & Morty. Делаем вейпинг крутым с 2019
              года! 🚀
            </p>
          </motion.div>
          <motion.div
            className="space-y-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">География работы</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Работаем по всей России</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Доставка в страны СНГ</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="space-y-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">Гарантии качества</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Официальная дистрибуция</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Сертификаты качества</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Маркировка "Честный Знак"</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© 2024 ZEF VAPE & Tasty LAB. Все права защищены.</p>
          <p className="text-sm text-gray-500 mt-2">Rick and Morty™ & © Adult Swim. Используется по лицензии.</p>
        </motion.div>
      </div>
    </footer>
  )
}
