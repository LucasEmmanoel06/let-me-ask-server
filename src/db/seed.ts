import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

// Remove audioChunks from schema for seeding as vector columns are not supported
// biome-ignore lint/correctness/noUnusedVariables: audioChunks is intentionally removed from seeding
const { audioChunks, ...seedSchema } = schema

await reset(db, seedSchema)

await seed(db, seedSchema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 20,
    },
  }
})

await sql.end()

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log('Database seeded')
