import { ApiProperty} from '@nestjs/swagger'
import { IsString } from 'class-validator';

/* ---LOGIN---*/

export class LoginDto {

    @ApiProperty({
        name:'username',
        type:'string',
        required: true,
        example:'akhror_02'
    })
    @IsString()
    readonly username: string;

    @ApiProperty({
        name:'password',
        type:'string',
        required: true,
        example:'nakhror05'
    })
    @IsString()
    readonly password: string;

}