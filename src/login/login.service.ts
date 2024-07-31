import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { users,Prisma } from '@prisma/client';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async getUserByEmail(email: string): Promise<users | null> {
    return this.prisma.
  }
}