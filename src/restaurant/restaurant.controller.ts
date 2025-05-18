import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDTO } from './dto/create-resturant.dto';
import { UpdateRestaurantDTO } from 'src/restaurant/dto/update-resturant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly service: RestaurantService) {}

  @Get('/')
  async getAllResturants() {
    return await this.service.getAllRestaurants();
  }

  @Post()
  async createRestaurant(@Body() body: CreateRestaurantDTO) {
    return await this.service.createRestaurant(body);
  }

  @Patch(':id')
  async updateRestaurant(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateRestaurantDTO,
  ) {
    return await this.service.updateRestaurant(id, body);
    return true;
  }

  @Delete(':id')
  async deleteRestaurant(@Param('id') id: string) {
    return await this.service.deleteRestaurant(+id);
  }
}
