import type { IncidentCategory } from "~/shared/types/incident"
import type { MLFeatures } from "~/features/ml/types"
import type { FeedbackExample, FeedbackStore } from "./types"

const STORAGE_KEY = "stack-sift-feedback"

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export function buildFingerprint(features: MLFeatures): string {
  const title = features.titleText.trim().slice(0, 120)
  const stack = features.stackText.trim().slice(0, 200)
  return `${title}::${stack}`
}

async function readStore(): Promise<FeedbackStore> {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEY)
    const store = result[STORAGE_KEY] as FeedbackStore | undefined
    return store ?? { examples: [] }
  } catch {
    return { examples: [] }
  }
}

async function writeStore(store: FeedbackStore): Promise<void> {
  await chrome.storage.local.set({ [STORAGE_KEY]: store })
}

export async function getExactFeedback(
  features: MLFeatures
): Promise<FeedbackExample | null> {
  const store = await readStore()
  const fp = buildFingerprint(features)
  return store.examples.find((ex) => ex.fingerprint === fp) ?? null
}

export async function saveFeedback(
  features: MLFeatures,
  category: IncidentCategory
): Promise<FeedbackExample> {
  const store = await readStore()
  const fp = buildFingerprint(features)

  const existingIdx = store.examples.findIndex((ex) => ex.fingerprint === fp)
  if (existingIdx >= 0) {
    store.examples[existingIdx].category = category
    store.examples[existingIdx].timestamp = Date.now()
    await writeStore(store)
    return store.examples[existingIdx]
  }

  const example: FeedbackExample = {
    id: generateId(),
    fingerprint: fp,
    features,
    category,
    timestamp: Date.now()
  }
  store.examples.push(example)
  await writeStore(store)
  return example
}

export async function getAllFeedback(): Promise<FeedbackExample[]> {
  const store = await readStore()
  return store.examples
}

export async function getFeedbackCount(): Promise<number> {
  const store = await readStore()
  return store.examples.length
}

export async function clearFeedback(): Promise<void> {
  await writeStore({ examples: [] })
}

export async function exportFeedbackAsTrainingJSON(): Promise<string> {
  const store = await readStore()
  const exported = store.examples.map((ex) => ({
    features: Object.fromEntries(
      Object.entries(ex.features).filter(
        ([k]) => !["concatenatedText", "titleText", "stackText", "tagText"].includes(k)
      )
    ),
    correctedCategory: ex.category
  }))
  return JSON.stringify(exported, null, 2)
}
