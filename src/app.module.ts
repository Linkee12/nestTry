import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { LoginController } from './login/login.controller';
import { RegController } from './reg/reg.controller';
import { UsersService } from './users/users.service';
import { GetNewTokenController } from './get-new-token/get-new-token.controller';

@Module({
  imports: [
    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, LoginController, RegController, GetNewTokenController],
  providers: [AppService, PrismaService, UsersService],
})
export class AppModule {}
