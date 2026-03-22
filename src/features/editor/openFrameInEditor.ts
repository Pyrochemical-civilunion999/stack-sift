import { buildEditorUri } from "./buildEditorUri"
import { parseFrame } from "./frameParser/parseFrame"
import { mapToSourcePath } from "./pathMapper/mapToSourcePath"
import { getEditorSettings } from "./settings"

export type OpenFrameFailureReason = "parse_failed" | "missing_project_root"

export type OpenFrameInEditorResult =
  | { success: true; uri: string }
  | {
      success: false
      error: string
      reason: OpenFrameFailureReason
    }

export async function openFrameInEditor(
  frameString: string
): Promise<OpenFrameInEditorResult> {
  const parsed = parseFrame(frameString)
  if (!parsed) {
    return {
      success: false,
      error: "Could not parse stack frame",
      reason: "parse_failed"
    }
  }

  const settings = await getEditorSettings()
  if (!settings.projectRoot) {
    return {
      success: false,
      error: "Configure the project path to open in the editor",
      reason: "missing_project_root"
    }
  }

  const relativePath = mapToSourcePath(parsed.filePath)

  const uri = buildEditorUri({
    editor: settings.editor,
    projectRoot: settings.projectRoot,
    relativePath,
    line: parsed.line,
    column: parsed.column
  })

  window.open(uri, "_blank")

  return { success: true, uri }
}
