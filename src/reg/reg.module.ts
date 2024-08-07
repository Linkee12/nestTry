import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegService } from './reg.service';

@Module({
  imports: [UsersService],
  exports: [RegService],
})
export class RegModule {}
