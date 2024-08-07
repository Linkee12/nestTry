import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegBodyDto } from './regBodyDto';
import { UsersService } from 'src/users/users.service';

@Controller('reg')
export class RegController {
  constructor(private usersService: UsersService) {}
  @Post()
  @HttpCode(200)
  async create(@Body() regBody: RegBodyDto): Promise<string> {
    if (!(await this.usersService.getUserByEmail(regBody.email))) {
      await this.usersService.addUser(
        regBody.username,
        regBody.email,
        regBody.password,
      );
      return 'Registration is successful';
    } else {
      return 'User is exist';
    }
  }
}
