import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getContacts = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query("contacts")
            .order("desc")
            .collect();
    },
});

export const submitContact = mutation({
    args: {
        fullName: v.string(),
        companyName: v.optional(v.string()),
        businessEmail: v.string(),
        phoneNumber: v.string(),
        message: v.optional(v.string()),
        location: v.optional(v.string()),
        requirement: v.optional(v.string()),
        source: v.string(),
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("contacts", {
            ...args,
            createdAt: Date.now(),
        });
        return id;
    },
});
