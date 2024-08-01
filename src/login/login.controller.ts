import { Body, Controller, Post } from '@nestjs/common';
import { userBodyDto } from './userBodyDto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  async create(@Body() userBody: userBodyDto) {
    const user = await this.loginService.getUserByEmail(userBody.email);
    return user;
  }
}
