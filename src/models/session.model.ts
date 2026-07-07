export type SessionMode = 'focus' | 'break';

export interface FocusSession {
  id: string;
  mode: SessionMode;
  durationMinutes: number;
  startedAt: string;   
  completedAt: string | null;
  note: string | null;
}