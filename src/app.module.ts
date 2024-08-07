import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { LoginController } from './login/login.controller';
import { RegistrationController } from './registration/registration.controller';
import { RegController } from './reg/reg.controller';
import { RegService } from './reg/reg.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { RegModule } from './reg/reg.module';

@Module({
  imports: [
    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    RegModule,
  ],
  controllers: [AppController, LoginController, RegistrationController, RegController],
  providers: [AppService, PrismaService, RegService, UsersService],
})
export class AppModule {}
