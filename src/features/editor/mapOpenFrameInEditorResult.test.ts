import { describe, expect, it } from "vitest"
import { mapOpenFrameInEditorResult } from "./mapOpenFrameInEditorResult"

describe("mapOpenFrameInEditorResult", () => {
  it("maps success to idle", () => {
    expect(mapOpenFrameInEditorResult({ success: true, uri: "cursor://..." })).toEqual({
      status: "idle",
      errorMsg: ""
    })
  })

  it("maps missing_project_root to settings", () => {
    expect(
      mapOpenFrameInEditorResult({
        success: false,
        error: "Configure the project path",
        reason: "missing_project_root"
      })
    ).toEqual({ status: "settings", errorMsg: "" })
  })

  it("maps parse_failed to error with message", () => {
    expect(
      mapOpenFrameInEditorResult({
        success: false,
        error: "Could not parse",
        reason: "parse_failed"
      })
    ).toEqual({ status: "error", errorMsg: "Could not parse" })
  })
})
