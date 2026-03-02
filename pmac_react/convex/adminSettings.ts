import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getAdminKey = query({
    args: {},
    handler: async (ctx) => {
        const setting = await ctx.db
            .query("adminSettings")
            .first();
        return setting?.key ?? null;
    },
});

export const updateAdminKey = mutation({
    args: { newKey: v.string() },
    handler: async (ctx, args) => {
        const existingList = await ctx.db
            .query("adminSettings")
            .collect();

        for (const record of existingList) {
            await ctx.db.delete(record._id);
        }

        await ctx.db.insert("adminSettings", {
            key: args.newKey,
        });
    },
});
