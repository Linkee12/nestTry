import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegBodyDto {
  username: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
