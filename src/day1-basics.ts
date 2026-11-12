interface UserProfile {
  id: number;
  username: string;
  role: 'admin' | 'guest' | 'qa';
  lastLogin?: Date;
}

class UserManager {
  private users: UserProfile[] = [];

  public addUser(user: UserProfile): void {
    this.users.push(user);
    console.log(`User added: ${user.username} (${user.role})`);
  }

  public getUserByRole(role: 'admin' | 'guest' | 'qa'): UserProfile[] {
    return this.users.filter(u => u.role === role);
  }
}

const manager = new UserManager();
manager.addUser({ id: 1, username: 'Shrishti05juyal', role: 'qa' });

const qas = manager.getUserByRole('qa');
console.log('Found QA users:', qas);
