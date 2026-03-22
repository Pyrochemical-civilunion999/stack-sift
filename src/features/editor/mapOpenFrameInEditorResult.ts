import type { OpenFrameFailureReason, OpenFrameInEditorResult } from "./openFrameInEditor"

export type OpenInEditorAfterAttemptState = {
  status: "idle" | "settings" | "error"
  errorMsg: string
}

type FailedResult = Extract<OpenFrameInEditorResult, { success: false }>

const failureToState: Record<
  OpenFrameFailureReason,
  (failure: FailedResult) => OpenInEditorAfterAttemptState
> = {
  missing_project_root: () => ({ status: "settings", errorMsg: "" }),
  parse_failed: (failure) => ({
    status: "error",
    errorMsg: failure.error || "Unknown error"
  })
}

export function mapOpenFrameInEditorResult(
  result: OpenFrameInEditorResult
): OpenInEditorAfterAttemptState {
  if (result.success) {
    return { status: "idle", errorMsg: "" }
  }
  return failureToState[result.reason](result)
}
