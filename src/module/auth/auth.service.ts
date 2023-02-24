import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { sign, verify } from 'jsonwebtoken'
@Injectable()
export class AuthService {


    generateToken (login: LoginDto): any {

        const token = sign({ password: login.password, username: login.username}, '1a2b3c')
        /*----SHOW ACCESS TOEKN--- */
        console.log(token);
        return {
            access_token: token
        }
    }

    verifyToken(token:any):any {

        const verifyToken = verify(String(token), '1a2b3c')
        /*---OPTIONAL VERIFY-TOKEN--- CONSOLE.LOG--- */
        console.log(verifyToken);
        return verifyToken;
    }
}
