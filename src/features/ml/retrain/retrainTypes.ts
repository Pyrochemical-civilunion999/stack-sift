import type { TrainResult } from "../tfModel/trainTypes"

export interface RetrainProgress {
  epoch: number
  totalEpochs: number
  loss: number
  accuracy: number
}

export type RetrainResult =
  | {
      success: true
      trainResult: TrainResult
      totalExamples: number
      feedbackCount: number
    }
  | {
      success: false
      error: string
    }
