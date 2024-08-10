import { Controller, Get } from '@nestjs/common';
import { GetCategoryService } from './getcategory.service';

@Controller('category')
export class GetCategoryController {
  constructor(private getCategoryService: GetCategoryService) {}
  @Get()
  async findAll() {
    return await this.getCategoryService.getCategory();
  }
}
