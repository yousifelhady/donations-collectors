
import { Injectable } from "@nestjs/common";

export interface User {
    id: number;
    name: string;
}

@Injectable()
export class UserService {
    private users: User[] = [];
    private nextId = 1;

    create(name: string): User {
        const user: User = { id: this.nextId++, name };
        this.users.push(user);
        return user;
    }

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    update(id: number, name: string): User | undefined {
        const user = this.findOne(id);
        if (user) {
            user.name = name;
        }
        return user;
    }

    remove(id: number): boolean {
        const idx = this.users.findIndex(u => u.id === id);
        if (idx !== -1) {
            this.users.splice(idx, 1);
            return true;
        }
        return false;
    }
}