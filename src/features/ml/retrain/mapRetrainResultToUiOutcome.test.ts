import { describe, expect, it } from "vitest"
import { mapRetrainResultToUiOutcome } from "./mapRetrainResultToUiOutcome"

describe("mapRetrainResultToUiOutcome", () => {
  it("maps success to accuracy message and feedback count", () => {
    expect(
      mapRetrainResultToUiOutcome({
        success: true,
        trainResult: {
          finalLoss: 0.1,
          finalAccuracy: 0.876,
          epochs: 20
        },
        totalExamples: 100,
        feedbackCount: 3
      })
    ).toEqual({
      ok: true,
      resultMsg: "Accuracy: 88%",
      feedbackCount: 3
    })
  })

  it("maps failure to error message", () => {
    expect(
      mapRetrainResultToUiOutcome({
        success: false,
        error: "Training failed"
      })
    ).toEqual({ ok: false, errorMsg: "Training failed" })
  })

  it("uses fallback when error is empty", () => {
    expect(
      mapRetrainResultToUiOutcome({
        success: false,
        error: ""
      })
    ).toEqual({ ok: false, errorMsg: "Unknown error" })
  })
})
