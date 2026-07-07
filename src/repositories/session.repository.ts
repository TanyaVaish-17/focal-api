import { FocusSession } from '../models/session.model';

class SessionRepository {
  private sessions: FocusSession[] = [];

  findAll(): FocusSession[] {
    return this.sessions;
  }

  findById(id: string): FocusSession | undefined {
    return this.sessions.find((session) => session.id === id);
  }

  create(session: FocusSession): FocusSession {
    this.sessions.push(session);
    return session;
  }

  update(id: string, updates: Partial<FocusSession>): FocusSession | undefined {
    const session = this.findById(id);
    if (!session) return undefined;

    Object.assign(session, updates);
    return session;
  }

  delete(id: string): boolean {
    const index = this.sessions.findIndex((session) => session.id === id);
    if (index === -1) return false;

    this.sessions.splice(index, 1);
    return true;
  }
}

export const sessionRepository = new SessionRepository();