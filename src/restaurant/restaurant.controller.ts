import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantDTO } from './dto/resturant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly service: RestaurantService) {}

  @Get('/')
  async getAllResturants() {
    return await this.service.getAllRestaurants();
  }

  @Post()
  async createRestaurant(@Body() body: RestaurantDTO) {
    return await this.service.createRestaurant(body);
  }

  @Delete(':id')
  async deleteRestaurant(@Param('id') id: string) {
    return await this.service.deleteRestaurant(+id);
  }
}
