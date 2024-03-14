import { mutation, query } from './_generated/server';
import { ConvexError, v } from 'convex/values';

export const createProfile = mutation({
  args: { businessName: v.string(), industry: v.string() },
  handler: async (ctx, { businessName, industry }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError('you must logged in');
    }
    await ctx.db.insert('profile', { businessName, industry });
  },
});

export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    return ctx.db.query('profile').collect();
  },
});
