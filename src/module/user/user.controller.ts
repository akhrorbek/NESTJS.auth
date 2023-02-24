import { Body,Controller, HttpCode, HttpStatus, Headers, Post, Get } from '@nestjs/common';
import { ApiTags, ApiNotFoundResponse, ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger/dist';
import { CreateDto } from '../dto/create.dto';
import { LoginDto } from '../dto/login.dto';
import { UserService } from './user.service';


@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({
        schema:{
            example:'Success! User created'
        }
    })
    @ApiBadRequestResponse({
        description:'Invalid'
    })
    @Post('/create')
    createUser(@Body() body: CreateDto):void {
        this.userService.createUser(body)
    }

    @Post('/login')
    userLogin(@Body() login:LoginDto) {

        this.userService.loginUser(login)
    }

    @Get('/token/decode')
    getVerifyToken(@Headers('access_token') token: string):any {
        return this.userService.verifyToken(token)
    }
}
