import { Body,Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags, ApiNotFoundResponse, ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger/dist';
import { CreateDto } from '../dto/create.dto';


@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(){

    }

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
    userPost(@Body() body: CreateDto) {
    }
}
