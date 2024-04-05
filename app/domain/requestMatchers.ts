import { db } from "../db/database";
import { createRequestMatcherSchema } from "./requestMatchers.common";

export async function createRequestMatcher(
  requestMatcher: Zod.infer<typeof createRequestMatcherSchema>
) {
  return db
    .insertInto("requestMatchers")
    .returning("id")
    .values(requestMatcher)
    .executeTakeFirstOrThrow();
}

export async function getRequestMatcher({ id }: { id: string }) {
  return db
    .selectFrom("requestMatchers")
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirstOrThrow();
}

export async function fetchRequestMatchers() {
  return db.selectFrom("requestMatchers").selectAll().execute();
}

export async function updateRequestMatcher({
  requestMatcher,
  id,
}: {
  requestMatcher: Zod.infer<typeof createRequestMatcherSchema>;
  id: string;
}) {
  return db
    .updateTable("requestMatchers")
    .set(requestMatcher)
    .where("id", "=", id)
    .executeTakeFirstOrThrow();
}
//
