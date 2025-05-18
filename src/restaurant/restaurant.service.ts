import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Restaurant } from './entities/restuarant.entity';

import { CreateRestaurantDTO } from './dto/create-resturant.dto';
import { UpdateRestaurantDTO } from './dto/update-resturant.dto';
import { convertToInstance } from 'src/utils/dto-validator';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private repository: Repository<Restaurant>,
  ) {}

  getAllRestaurants() {
    return this.repository.find();
  }

  async createRestaurant(body: CreateRestaurantDTO) {
    var restaurant = new Restaurant();
    restaurant.name = body.name;
    return this.repository.save(restaurant);
  }

  async updateRestaurant(id: number, body: UpdateRestaurantDTO) {
    // var update = new UpdateRestaurantDTO();
    // var updateRestaurantDto = UpdateRestaurantDTO.convertToInstance(body);
    // if (updateRestaurantDto == undefined) return false;
    var updateRestaurantDto = convertToInstance(UpdateRestaurantDTO, body);
    return updateRestaurantDto;
  }

  async deleteRestaurant(id: number) {
    return this.repository.delete({
      id: id,
    });
  }
}
