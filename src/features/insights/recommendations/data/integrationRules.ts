import type { PatternRule } from "../patternRule"

export const INTEGRATION_RULES: PatternRule[] = [
  {
    patterns: ["enotfound"],
    text: "DNS could not resolve the external service hostname. Check the URL, DNS, and network connectivity.",
    specificity: 0.9
  },
  {
    patterns: ["502", "bad gateway"],
    text: "Bad Gateway (502). The proxy/load balancer could not reach upstream. Check target service health.",
    specificity: 0.85
  },
  {
    patterns: ["503", "service unavailable"],
    text: "Service unavailable (503). The external service is under maintenance or overloaded. Implement retries with backoff.",
    specificity: 0.85
  },
  {
    patterns: ["rate limit"],
    text: "Rate limit hit. Add throttling, exponential backoff, or raise the limit with the provider.",
    specificity: 0.9
  },
  {
    patterns: ["too many requests"],
    text: "Too many requests (429). Add throttling, exponential backoff, or reduce call frequency.",
    specificity: 0.9
  },
  {
    patterns: ["429"],
    text: "Rate limit hit (429). Add throttling, exponential backoff, or raise the limit with the provider.",
    specificity: 0.85
  },
  {
    patterns: ["ssl", "certificate"],
    text: "SSL certificate error. Check certificate validity, CA trust store, and hostname match.",
    specificity: 0.85
  },
  {
    patterns: ["cors"],
    text: "CORS error. Configure Access-Control-Allow-Origin, Methods, and Headers on the server.",
    specificity: 0.9
  }
]
