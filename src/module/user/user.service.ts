import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
    constructor (
        private readonly aouthService: AuthService
    ) {

    }


}
