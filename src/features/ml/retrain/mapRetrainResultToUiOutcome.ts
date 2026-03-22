import type { RetrainResult } from "./retrainTypes"

export type RetrainUiOutcome =
  | { ok: true; resultMsg: string; feedbackCount: number }
  | { ok: false; errorMsg: string }

const toUiOutcome: {
  true: (result: Extract<RetrainResult, { success: true }>) => RetrainUiOutcome
  false: (result: Extract<RetrainResult, { success: false }>) => RetrainUiOutcome
} = {
  true: (result) => {
    const acc = Math.round(result.trainResult.finalAccuracy * 100)
    return {
      ok: true,
      resultMsg: `Accuracy: ${acc}%`,
      feedbackCount: result.feedbackCount
    }
  },
  false: (result) => ({
    ok: false,
    errorMsg: result.error || "Unknown error"
  })
}

export function mapRetrainResultToUiOutcome(
  result: RetrainResult
): RetrainUiOutcome {
  return result.success
    ? toUiOutcome.true(result)
    : toUiOutcome.false(result)
}
