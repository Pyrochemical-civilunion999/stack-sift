import type { PatternRule } from "../patternRule"

export const RUNTIME_RULES: PatternRule[] = [
  {
    patterns: ["cannot read properties of undefined"],
    text: "Accessing a property on undefined. Add optional chaining (?.) or ensure data is loaded before render.",
    specificity: 0.9
  },
  {
    patterns: ["cannot read properties of null"],
    text: "Accessing a property on null. Check that the DOM node exists or that API data is not null.",
    specificity: 0.9
  },
  {
    patterns: ["is not a function"],
    text: "Called something that is not a function. Check imports, named vs default exports, and dependency versions.",
    specificity: 0.85
  },
  {
    patterns: ["is not defined"],
    text: "Variable not defined in scope. Possible missing import, typo, or out-of-scope variable.",
    specificity: 0.8
  },
  {
    patterns: ["undefined is not an object"],
    text: "Attempted to use undefined as an object (Safari). Same idea as 'cannot read properties of undefined'—add null guards.",
    specificity: 0.85
  },
  {
    patterns: ["maximum call stack"],
    text: "Stack overflow from infinite recursion. Check recursive loops, useEffect dependencies, or infinite re-renders.",
    specificity: 0.9
  },
  {
    patterns: ["loading chunk"],
    text: "Failed to load JS chunk. A recent deploy may have invalidated chunks. Consider retries or a forced reload.",
    specificity: 0.85
  },
  {
    patterns: ["chunk", "failed to fetch"],
    text: "Failed to load JS chunk. A recent deploy may have invalidated chunks. Consider retries or a forced reload.",
    specificity: 0.8
  }
]
