import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Newsletter subscription model
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: text("subscribed_at").notNull(),
  agreedToTerms: boolean("agreed_to_terms").notNull(),
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
  agreedToTerms: true,
});

// Study preferences model
export const studyPreferences = pgTable("study_preferences", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  learningStyle: text("learning_style").notNull(),
  attentionSpan: integer("attention_span").notNull(),
  studyTime: text("study_time").notNull(),
  breakFrequency: text("break_frequency").notNull(),
  environment: text("environment").notNull(),
  motivationRewards: boolean("motivation_rewards").notNull(),
  motivationGoals: boolean("motivation_goals").notNull(),
  motivationProgress: boolean("motivation_progress").notNull(),
  motivationSocial: boolean("motivation_social").notNull(),
  distraction: text("distraction").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertStudyPreferencesSchema = createInsertSchema(studyPreferences).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
export type InsertStudyPreferences = z.infer<typeof insertStudyPreferencesSchema>;
export type StudyPreferences = typeof studyPreferences.$inferSelect;
