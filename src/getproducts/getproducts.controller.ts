import { Body, Controller, Post } from '@nestjs/common';
import { GetproductsService } from './getproducts.service';

@Controller('getproducts')
export class GetproductsController {
  constructor(private getProductsService: GetproductsService) {}
  @Post()
  async create(@Body() id: number) {
    const products = this.getProductsService.getProducts(id);

    return products;
  }
}
