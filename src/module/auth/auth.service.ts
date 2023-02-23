import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    generateToken (): string {
        return 'Ok'
    }
}
