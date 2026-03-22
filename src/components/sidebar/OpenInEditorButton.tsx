import { useCallback, useState } from "react"
import { mapOpenFrameInEditorResult } from "~/features/editor/mapOpenFrameInEditorResult"
import { openFrameInEditor } from "~/features/editor/openFrameInEditor"
import { EditorSettingsPanel } from "./EditorSettingsPanel"

export function OpenInEditorButton({ frame }: { frame: string }) {
  const [status, setStatus] = useState<
    "idle" | "settings" | "opening" | "error"
  >("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleClick = useCallback(async () => {
    setStatus("opening")
    const result = await openFrameInEditor(frame)
    const ui = mapOpenFrameInEditorResult(result)
    setStatus(ui.status)
    setErrorMsg(ui.errorMsg)
  }, [frame])

  if (status === "settings") {
    return (
      <EditorSettingsPanel
        onSave={() => setStatus("idle")}
        frame={frame}
      />
    )
  }

  return (
    <div className="ss-open-editor">
      <button
        className="ss-open-editor-btn"
        onClick={handleClick}
        disabled={status === "opening"}>
        {status === "opening" ? "Opening..." : "Open in editor"}
      </button>
      <button
        className="ss-open-editor-config"
        onClick={() => setStatus("settings")}
        title="Editor settings">
        ⚙
      </button>
      {status === "error" && (
        <span className="ss-open-editor-error">{errorMsg}</span>
      )}
    </div>
  )
}
