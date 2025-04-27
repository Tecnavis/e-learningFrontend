import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function StarRating({
  maxRating = 5,
  defaultRating = 0,
  size = "md",
  color = "gold",
  onRatingChange,
  onSubmit,
  allowHalfStars = false,
  showRatingValue = true,
  title = "Rate Your Experience",
  subtitle = "Let us know how we did",
}) {
  const [rating, setRating] = useState(defaultRating)
  const [hoverRating, setHoverRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Size and color mappings
  const sizeMap = {
    sm: { star: "w-5 h-5", container: "max-w-xs" },
    md: { star: "w-8 h-8", container: "max-w-sm" },
    lg: { star: "w-10 h-10", container: "max-w-md" },
  }

  const colorMap = {
    gold: "text-amber-400",
    red: "text-red-500",
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  }

  const starColor = colorMap[color] || "text-amber-400"

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating)
    if (onRatingChange) {
      onRatingChange(selectedRating)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    if (onSubmit) {
      onSubmit(rating)
    }
  }

  const handleCloseDialog = () => {
    setIsSubmitted(false)  // Close the dialog by setting isSubmitted back to false
  }

  const renderStar = (position) => {
    const isFilled = (hoverRating || rating) >= position

    return (
      <motion.div
        key={position}
        className="relative cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleStarClick(position)}
        onMouseEnter={() => setHoverRating(position)}
        onMouseLeave={() => setHoverRating(0)}
      >
        <Star
          className={`${sizeMap[size].star} ${isFilled ? starColor : "text-gray-300"} transition-colors duration-200`}
          fill={isFilled ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      </motion.div>
    )
  }

  return (
    <div className={`${sizeMap[size].container} mx-auto p-6 rounded-xl bg-white shadow-lg`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6 text-center">{subtitle}</p>

        {/* Show stars only if not submitted */}
        {!isSubmitted && (
          <div className="flex space-x-2 mb-4">{Array.from({ length: maxRating }, (_, i) => renderStar(i + 1))}</div>
        )}

        {/* Show rating value if rating > 0 */}
        {showRatingValue && rating > 0 && !isSubmitted && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-lg font-medium text-gray-700 mt-2"
          >
            Your rating: {rating} of {maxRating}
          </motion.p>
        )}

        {/* Submit button */}
        {!isSubmitted && rating > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4"
          >
            <Button
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600"
              onClick={handleSubmit}
            >
              Submit Rating
            </Button>
          </motion.div>
        )}

        {/* Thank You Dialog */}
        <AnimatePresence>
          {isSubmitted && (
            <Dialog open={true} onOpenChange={handleCloseDialog}>
              <DialogContent className="sm:max-w-md">
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                  >
                    <ThumbsUp className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">We appreciate your feedback. It helps us improve our service.</p>
                  <Button onClick={handleCloseDialog} className="mt-4 bg-green-500 hover:bg-green-600">
                    Close
                  </Button>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
