import { v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";

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
        return await ctx.db.insert("contacts", {
            ...args,
            createdAt: Date.now(),
        });
    },
});

export const internalSubmitContact = internalMutation({
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
        return await ctx.db.insert("contacts", {
            ...args,
            createdAt: Date.now(),
        });
    },
});
