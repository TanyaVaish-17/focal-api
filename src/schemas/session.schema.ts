import { z } from 'zod';

export const createSessionSchema = z.object({
  mode: z.enum(['focus', 'break'], {
    error: (issue) =>
      issue.input === undefined
        ? "mode is required"
        : "mode must be either 'focus' or 'break'",
  }),
  durationMinutes: z
    .number({ error: 'durationMinutes must be a number' })
    .int('durationMinutes must be a whole number')
    .min(1, 'durationMinutes must be at least 1')
    .max(120, 'durationMinutes cannot exceed 120'),
  note: z.string().trim().max(280, 'note cannot exceed 280 characters').optional(),
});

export const updateSessionSchema = z.object({
  completedAt: z
    .string()
    .datetime({ error: 'completedAt must be a valid ISO timestamp' })
    .optional(),
  note: z.string().trim().max(280, 'note cannot exceed 280 characters').optional(),
});

export const sessionIdParamSchema = z.object({
  id: z.string().uuid('id must be a valid UUID'),
});

export type CreateSessionInput = z.infer<typeof createSessionSchema>;
export type UpdateSessionInput = z.infer<typeof updateSessionSchema>;