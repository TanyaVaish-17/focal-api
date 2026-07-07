import { FocusSession, SessionMode } from '../models/session.model';
import { sessionRepository } from '../repositories/session.repository';
import { generateId } from '../utils/id';
import { CreateSessionInput, UpdateSessionInput } from '../schemas/session.schema';

export const sessionService = {
  listSessions(): FocusSession[] {
    return sessionRepository.findAll();
  },

  getSession(id: string): FocusSession | undefined {
    return sessionRepository.findById(id);
  },

  startSession(input: CreateSessionInput): FocusSession {
    const session: FocusSession = {
      id: generateId(),
      mode: input.mode as SessionMode,
      durationMinutes: input.durationMinutes,
      startedAt: new Date().toISOString(),
      completedAt: null,
      note: input.note ?? null,
    };

    return sessionRepository.create(session);
  },

  updateSession(id: string, input: UpdateSessionInput): FocusSession | undefined {
    return sessionRepository.update(id, input);
  },

  deleteSession(id: string): boolean {
    return sessionRepository.delete(id);
  },
};