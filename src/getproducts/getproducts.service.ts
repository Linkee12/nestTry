import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class GetproductsService {
  constructor(private prisma: PrismaClient) {}
  async getProducts(id: number) {
    const products = await this.prisma.products.findMany({
      where: {
        id: id,
      },
    });
    return products;
  }
}
