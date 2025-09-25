import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    create(name: string): string {
        return `user ${name} is created!`;
    }
}