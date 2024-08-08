import { Controller, Get, Headers } from '@nestjs/common';

@Controller('getNewToken')
export class GetNewTokenController {
  @Get()
  async findAll(@Headers('authorization') authorization: string) {
    if (typeof authorization === 'string' &&) {
      const newToken = await getNewToken(token);
      return { newToken };
    } else {
      return 'Permission denied';
    }
  }
}
