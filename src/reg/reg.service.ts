import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RegService {
  constructor(private usersService: UsersService) {}
  async reg(username: string, email: string, pass: string) {
    if (!(await this.usersService.getUserByEmail(email))) {
      await this.usersService.addUser(username, email, pass);
    } else {
      return 'User is exist';
    }
  }
}
