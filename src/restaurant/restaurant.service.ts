import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restuarant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantDTO } from './dto/resturant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private repository: Repository<Restaurant>,
  ) {}

  getAllRestaurants() {
    return this.repository.find();
  }

  async createRestaurant(body: RestaurantDTO) {
    var restaurant = new Restaurant();
    restaurant.name = body.name;
    return this.repository.save(restaurant);
  }

  async deleteRestaurant(id: number) {
    return this.repository.delete({
      id: id,
    });
  }
}
