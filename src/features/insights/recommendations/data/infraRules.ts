import type { PatternRule } from "../patternRule"

export const INFRA_RULES: PatternRule[] = [
  {
    patterns: ["heap out of memory"],
    text: "JavaScript heap exhausted. Raise --max-old-space-size, reduce memory usage, or scale vertically.",
    specificity: 0.95
  },
  {
    patterns: ["out of memory"],
    text: "Out of memory. Raise memory limits, optimize usage, or scale vertically.",
    specificity: 0.9
  },
  {
    patterns: ["enomem"],
    text: "ENOMEM error. The OS could not allocate memory. Add more RAM.",
    specificity: 0.9
  },
  {
    patterns: ["enospc"],
    text: "Disk full (ENOSPC). Clear logs/temp files or expand storage.",
    specificity: 0.9
  },
  {
    patterns: ["no space left"],
    text: "Disk full. Clear logs/temp files or expand storage.",
    specificity: 0.9
  },
  {
    patterns: ["eacces"],
    text: "Filesystem permission denied (EACCES). Check owner, group, and file/directory permissions in the container.",
    specificity: 0.8
  },
  {
    patterns: ["oom"],
    text: "Process killed by OOM killer. The container exceeded its memory limit. Raise the resource limit or optimize.",
    specificity: 0.85
  },
  {
    patterns: ["segmentation fault"],
    text: "Segfault in native module. Check native dependency compatibility with container arch/OS.",
    specificity: 0.9
  },
  {
    patterns: ["sigsegv"],
    text: "SIGSEGV received. Possible native-module crash. Check compatibility with the container architecture.",
    specificity: 0.9
  }
]
