"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const handleTelegramClick = () => {
    window.open("https://t.me/+9OgsiUfn-SVhMTE6", "_blank")
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-green-400/30 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-400/5 to-purple-500/10" />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10 bg-black/20 rounded-full hover:bg-black/40"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 text-center space-y-6">
              {/* Success icon */}
              <motion.div
                className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
              >
                <motion.span
                  className="text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  ✅
                </motion.span>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Заявка отправлена!
              </motion.h3>

              {/* Message */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-semibold">Менеджер свяжется с вами в течении 24 часов!</span>
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  А пока, подпишитесь на телеграмм канал{" "}
                  <span className="text-blue-400 font-semibold">hooska land</span>, чтобы в числе первых узнать о новых производителях и поставщиков рынка
                </p>
              </motion.div>

              {/* Telegram button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={handleTelegramClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Перейти в канал
                </Button>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="flex justify-center space-x-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {["🚀", "💼", "📈"].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="text-xl"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}