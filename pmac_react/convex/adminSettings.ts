import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getAdminKey = query({
    args: {},
    handler: async (ctx) => {
        const setting = await ctx.db
            .query("adminSettings")
            .filter((q) => q.eq(q.field("key"), "admin_key"))
            .first();
        return setting?.key ?? null;
    },
});

export const updateAdminKey = mutation({
    args: { newKey: v.string() },
    handler: async (ctx, args) => {
        const existing = await ctx.db
            .query("adminSettings")
            .filter((q) => q.eq(q.field("key"), "admin_key"))
            .first();

        if (existing) {
            await ctx.db.delete(existing._id);
        }

        await ctx.db.insert("adminSettings", {
            key: args.newKey,
        });
    },
});
