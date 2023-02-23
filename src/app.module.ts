import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { AuthService } from './module/auth/auth.service';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  providers: [AuthService],
})
export class AppModule {}
