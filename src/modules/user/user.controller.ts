import { Controller, HttpStatus, Post, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Req() req: any, @Res() res: any) {
        const name = req.body.name
        // console.debug(this.userService);
        const message = this.userService.create(name);
        res.status(HttpStatus.OK).send({
            message,
        })
    }
}