"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserManager {
    users = [];
    addUser(user) {
        this.users.push(user);
        console.log(`User added: ${user.username} (${user.role})`);
    }
    getUserByRole(role) {
        return this.users.filter(u => u.role === role);
    }
}
const manager = new UserManager();
manager.addUser({ id: 1, username: 'Shrishti05juyal', role: 'qa' });
const qas = manager.getUserByRole('qa');
console.log('Found QA users:', qas);
//# sourceMappingURL=day1-basics.js.map