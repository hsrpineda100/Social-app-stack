import { pgTable, text, serial, timestamp, jsonb, integer, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  supabase_id: text("supabase_id").unique().notNull(),
  email: text("email").unique(),
  username: text("username").unique(),
  avatar_url: text("avatar_url"),
  social_links: jsonb("social_links").$type<Record<string, string>>(),
  connected_accounts: jsonb("connected_accounts").$type<Record<string, any>>(),
  theme_preference: text("theme_preference").default('system'),
  created_at: timestamp("created_at").defaultNow(),
  last_sign_in: timestamp("last_sign_in"),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  analytics: many(analytics)
}));

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  user_id: text("user_id").notNull().references(() => users.supabase_id),
  content: text("content").notNull(),
  source: text("source"),
  likes: integer("likes").default(0),
  shares: integer("shares").default(0),
  created_at: timestamp("created_at").defaultNow()
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export const postsRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.user_id],
    references: [users.supabase_id],
  })
}));

export const analytics = pgTable("analytics", {
  id: serial("id").primaryKey(),
  user_id: text("user_id").notNull().references(() => users.supabase_id),
  platform: text("platform").notNull(),
  follower_count: integer("follower_count").default(0),
  engagement_rate: integer("engagement_rate").default(0),
  post_count: integer("post_count").default(0),
  recorded_at: timestamp("recorded_at").defaultNow()
});

export type Analytics = typeof analytics.$inferSelect;
export type NewAnalytics = typeof analytics.$inferInsert;
export const insertAnalyticsSchema = createInsertSchema(analytics);
export const selectAnalyticsSchema = createSelectSchema(analytics);

export const analyticsRelations = relations(analytics, ({ one }) => ({
  user: one(users, {
    fields: [analytics.user_id],
    references: [users.supabase_id],
  }),
}));