import type { PatternRule } from "../patternRule"

export const AUTH_RULES: PatternRule[] = [
  {
    patterns: ["token expired"],
    text: "Token expired. Check configured TTL, refresh-token flow, and server clock skew.",
    specificity: 0.9
  },
  {
    patterns: ["jwt expired"],
    text: "Token expired. Check configured TTL, refresh-token flow, and server clock skew.",
    specificity: 0.9
  },
  {
    patterns: ["invalid token"],
    text: "Invalid or malformed token. Verify the signature, secret/key used, and that the token was not corrupted.",
    specificity: 0.9
  },
  {
    patterns: ["token invalid"],
    text: "Invalid or malformed token. Verify the signature, secret/key used, and that the token was not corrupted.",
    specificity: 0.9
  },
  {
    patterns: ["jwt malformed"],
    text: "Malformed JWT. Verify signature, secret/key, and that the token was not corrupted in transit.",
    specificity: 0.9
  },
  {
    patterns: ["forbidden"],
    text: "Forbidden (403). The user is authenticated but lacks permission. Check roles, policies, and ACLs.",
    specificity: 0.8
  },
  {
    patterns: ["unauthorized"],
    text: "Not authenticated (401). The token was not sent or is invalid. Check the Authorization header and login flow.",
    specificity: 0.8
  },
  {
    patterns: ["permission denied"],
    text: "Permission denied. Check resource permissions, user roles, and access policies.",
    specificity: 0.85
  },
  {
    patterns: ["access denied"],
    text: "Access denied. Check resource permissions, user roles, and access policies.",
    specificity: 0.85
  }
]
