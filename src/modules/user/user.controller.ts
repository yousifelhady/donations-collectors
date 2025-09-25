import { Controller, Get, Post, Put, Delete, Param, Body, HttpStatus, Res } from "@nestjs/common";
import { UserService, User } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body('name') name: string, @Res() res: any) {
        const user = this.userService.create(name);
        res.status(HttpStatus.CREATED).send(user);
    }

    @Get()
    findAll(@Res() res: any) {
        res.status(HttpStatus.OK).send(this.userService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string, @Res() res: any) {
        const user = this.userService.findOne(Number(id));
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.NOT_FOUND).send({ message: 'User not found' });
        }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body('name') name: string, @Res() res: any) {
        const user = this.userService.update(Number(id), name);
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.NOT_FOUND).send({ message: 'User not found' });
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Res() res: any) {
        const success = this.userService.remove(Number(id));
        if (success) {
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send({ message: 'User not found' });
        }
    }
}