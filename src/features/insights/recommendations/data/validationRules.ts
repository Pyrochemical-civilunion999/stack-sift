import type { PatternRule } from "../patternRule"

export const VALIDATION_RULES: PatternRule[] = [
  {
    patterns: ["unprocessable entity"],
    text: "Entity rejected by validation. Check class-validator decorators or entity schema rules.",
    specificity: 0.85
  },
  {
    patterns: ["class-validator", "validate"],
    text: "class-validator validation failed. Review entity decorators and submitted data.",
    specificity: 0.8
  },
  {
    patterns: ["bad request"],
    text: "Invalid request (400). Check body, headers, and expected content-type for the endpoint.",
    specificity: 0.7
  },
  {
    patterns: ["zod"],
    text: "Zod schema rejected the payload. Compare the object sent with the expected schema (.parse or .safeParse).",
    specificity: 0.85
  },
  {
    patterns: ["schema"],
    text: "Schema validation failed. Ensure the data shape matches the expected schema.",
    specificity: 0.5
  },
  {
    patterns: ["invalid email"],
    text: "Invalid email format. Check formatting rules applied to the input.",
    specificity: 0.8
  },
  {
    patterns: ["invalid format"],
    text: "Invalid field format. Check formatting rules (email, phone, national IDs, etc.) applied to the input.",
    specificity: 0.8
  },
  {
    patterns: ["required field"],
    text: "Required field missing. Ensure the payload includes all required fields for the endpoint.",
    specificity: 0.8
  },
  {
    patterns: ["missing field"],
    text: "Required field missing. Ensure the payload includes all required fields for the endpoint.",
    specificity: 0.8
  }
]
