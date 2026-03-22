import type { PatternRule } from "../patternRule"

export const DATABASE_RULES: PatternRule[] = [
  {
    patterns: ["duplicate key"],
    text: "Likely race condition. Consider ON CONFLICT (upsert) or optimistic locking to avoid duplicate inserts.",
    specificity: 0.9
  },
  {
    patterns: ["deadlock"],
    text: "Two transactions competing for locks. Review table access order and consider narrowing transaction scope.",
    specificity: 0.9
  },
  {
    patterns: ["connection refused"],
    text: "Database unreachable. Check the connection pool, connection limits, and database server health.",
    specificity: 0.85
  },
  {
    patterns: ["too many connections"],
    text: "Connection limit exceeded. Shrink the pool size or increase max_connections on the database.",
    specificity: 0.85
  },
  {
    patterns: ["relation does not exist"],
    text: "Table or column not found. Confirm migrations were applied in the correct environment.",
    specificity: 0.9
  },
  {
    patterns: ["queryfailederror", "typeorm"],
    text: "TypeORM error. Review the generated query, column types, and migration state.",
    specificity: 0.7
  },
  {
    patterns: ["queryfailederror"],
    text: "SQL query failed. Check query syntax, constraints, and data integrity.",
    specificity: 0.6
  },
  {
    patterns: ["prisma"],
    text: "Prisma error. Review schema.prisma, run prisma generate, and check for pending migrations.",
    specificity: 0.7
  },
  {
    patterns: ["sequelize"],
    text: "Sequelize error. Review the model, matching migration, and database connection.",
    specificity: 0.7
  }
]
