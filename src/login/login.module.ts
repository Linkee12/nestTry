import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { CONFIG } from 'src/config';

@Module({})
@Module({
  imports: [
    LoginModule,
    JwtModule.register({
      global: true,
      secret: CONFIG.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [LoginService, PrismaService],
  exports: [LoginService],
})
export class LoginModule {}
