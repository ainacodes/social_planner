import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  profile: defineTable({
    businessName: v.string(),
    industry: v.string(),
  }),
});
