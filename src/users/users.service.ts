import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getUserByEmail(email: string): Promise<users | null> {
    const user = await this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    return user;
  }
  async addUser(username: string, email: string, pass: string) {
    await this.prisma.users.create({
      data: {
        username: username,
        email: email,
        password: pass,
        salt: await bcrypt.genSalt();
      
      },
    });
  }
}
