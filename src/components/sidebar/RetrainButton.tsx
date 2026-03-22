import { useCallback, useEffect, useState } from "react"
import { getFeedbackCount } from "~/features/feedback/storage"
import {
  mapRetrainResultToUiOutcome,
  retrainWithFeedback,
  type RetrainProgress
} from "~/features/ml/retrain"

export function RetrainButton() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState<
    "idle" | "training" | "done" | "trained" | "error"
  >("idle")
  const [progress, setProgress] = useState<RetrainProgress | null>(null)
  const [resultMsg, setResultMsg] = useState("")
  const [trainedCount, setTrainedCount] = useState(0)

  useEffect(() => {
    getFeedbackCount().then(setCount).catch(() => setCount(0))
  }, [])

  const handleRetrain = useCallback(async () => {
    setStatus("training")
    setProgress(null)

    const result = await retrainWithFeedback((p) => setProgress(p))
    const outcome = mapRetrainResultToUiOutcome(result)

    if (outcome.ok) {
      setResultMsg(outcome.resultMsg)
      setTrainedCount(outcome.feedbackCount)
      setStatus("done")
      setTimeout(() => setStatus("trained"), 3000)
    } else {
      setResultMsg(outcome.errorMsg)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }, [])

  if (count === 0 && status === "idle") return null

  if (status === "training") {
    return (
      <div className="ss-retrain">
        <div className="ss-retrain-progress">
          Training...{" "}
          {progress && (
            <span>
              Epoch {progress.epoch}/{progress.totalEpochs} — Loss:{" "}
              {progress.loss.toFixed(3)}
            </span>
          )}
        </div>
        <div className="ss-retrain-bar">
          <div
            className="ss-retrain-bar-fill"
            style={{
              width: progress
                ? `${(progress.epoch / progress.totalEpochs) * 100}%`
                : "0%"
            }}
          />
        </div>
      </div>
    )
  }

  if (status === "done") {
    return (
      <div className="ss-retrain">
        <span className="ss-retrain-done">Model updated! {resultMsg}</span>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="ss-retrain">
        <span className="ss-retrain-error">{resultMsg}</span>
      </div>
    )
  }

  const hasNewFeedbacks = count > trainedCount

  if (status === "trained" && !hasNewFeedbacks) {
    return (
      <div className="ss-retrain">
        <div className="ss-retrain-trained">
          Model trained on {trainedCount} feedback item{trainedCount > 1 ? "s" : ""}. {resultMsg}
        </div>
        <button
          className="ss-retrain-btn ss-retrain-btn-secondary"
          onClick={handleRetrain}>
          Retrain again
        </button>
      </div>
    )
  }

  return (
    <div className="ss-retrain">
      {trainedCount > 0 && (
        <div className="ss-retrain-trained">
          Model trained on {trainedCount} feedback item{trainedCount > 1 ? "s" : ""}.{" "}
          {count - trainedCount} new item{count - trainedCount > 1 ? "s" : ""} available.
        </div>
      )}
      <button className="ss-retrain-btn" onClick={handleRetrain}>
        {trainedCount > 0
          ? `Retrain with ${count} feedback items`
          : `Train model (${count} feedback item${count > 1 ? "s" : ""})`}
      </button>
    </div>
  )
}
