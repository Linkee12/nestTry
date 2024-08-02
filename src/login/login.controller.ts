import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { userBodyDto } from './userBodyDto';
import { LoginService } from './login.service';
import { users } from '@prisma/client';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  @HttpCode(200)
  async create(@Body() userBody: userBodyDto): Promise<users | null> {
    const user = await this.loginService.getUserByEmail(userBody.email);
    console.log(user?.id);
    return user;
  }
}
