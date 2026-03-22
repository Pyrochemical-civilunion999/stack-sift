import { useState } from "react"
import type { IncidentCategory } from "~/shared/types/incident"
import { ALL_FEEDBACK_CATEGORIES } from "./constants"

export function FeedbackPanel({
  currentCategory,
  onFeedback,
  feedbackSaved,
  existingCategory
}: {
  currentCategory: IncidentCategory
  onFeedback: (category: IncidentCategory) => void
  feedbackSaved: boolean
  existingCategory: IncidentCategory | null
}) {
  const [isOpen, setIsOpen] = useState(false)

  if (feedbackSaved) {
    return (
      <div className="ss-feedback-saved">
        Feedback saved! The classifier will learn from this.
      </div>
    )
  }

  if (existingCategory && !isOpen) {
    return (
      <div className="ss-feedback-existing">
        <span>
          Previously corrected as{" "}
          <strong>{existingCategory}</strong>
        </span>
        <button
          className="ss-feedback-redo"
          onClick={() => setIsOpen(true)}>
          Change
        </button>
      </div>
    )
  }

  if (!isOpen) {
    return (
      <button
        className="ss-feedback-trigger"
        onClick={() => setIsOpen(true)}>
        Correct category
      </button>
    )
  }

  return (
    <div className="ss-feedback-panel">
      <p className="ss-feedback-label">What is the correct category?</p>
      <div className="ss-feedback-options">
        {ALL_FEEDBACK_CATEGORIES.filter((c) => c !== currentCategory).map((cat) => (
          <button
            key={cat}
            className="ss-feedback-option"
            onClick={() => {
              onFeedback(cat)
              setIsOpen(false)
            }}>
            {cat}
          </button>
        ))}
      </div>
      <button
        className="ss-feedback-cancel"
        onClick={() => setIsOpen(false)}>
        Cancel
      </button>
    </div>
  )
}
