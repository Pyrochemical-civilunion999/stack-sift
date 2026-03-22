import type { PatternRule } from "../patternRule"

export const TIMEOUT_RULES: PatternRule[] = [
  {
    patterns: ["etimedout"],
    text: "TCP connection timed out. Check DNS, firewalls, security groups, and whether the target service is reachable.",
    specificity: 0.9
  },
  {
    patterns: ["econnaborted"],
    text: "Connection aborted. The request exceeded the configured timeout. Consider raising the timeout or optimizing the endpoint.",
    specificity: 0.85
  },
  {
    patterns: ["socket hang up"],
    text: "The connection was dropped before a response. Possible downstream crash, proxy timeout, or expired keep-alive.",
    specificity: 0.85
  },
  {
    patterns: ["deadline exceeded"],
    text: "gRPC deadline exceeded. Increase the client deadline or optimize the called service's response time.",
    specificity: 0.9
  },
  {
    patterns: ["request timed out"],
    text: "Operation timed out. Check downstream service health and consider adding a circuit breaker.",
    specificity: 0.75
  },
  {
    patterns: ["operation timed out"],
    text: "Operation timed out. Check downstream service health and consider adding a circuit breaker.",
    specificity: 0.75
  },
  {
    patterns: ["econnrefused"],
    text: "Connection refused. The target service is not listening on the expected port. Verify it is running.",
    specificity: 0.85
  }
]
