import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

/* ---SWAGGER ----*/
class Address {

    @ApiProperty({
        name: 'city',
        type: 'string',
        required: true,
        example: 'Toshloq'
    })

    readonly city: string;

    @ApiProperty({
        name: 'district',
        type: 'string',
        required: true,
        example: 'Tundra'
    })
    readonly district: string;
}


export class CreateDto {

    @ApiProperty({
        name: 'userName',
        type: 'string',
        required: true,
        example: 'Eshmatjon'
    })

    @Length(3, 15)

    @IsString()
    readonly userName: string;



    @ApiProperty({
        name: 'age',
        type: 'number',
        required: false,
        example: 25
    })

    readonly age?: number;

    @ApiProperty({
        type: Address,
        name:'Address'
    })
    readonly address: Address;
}
