import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly authService: AuthService,
    ) {}

    createUser (body: any):void {
        ///
    }

    loginUser(login:any) :void {

        this.authService.generateToken(login)

    }

    verifyToken(token:any):any {
        this.authService.verifyToken(token)
    }
}
