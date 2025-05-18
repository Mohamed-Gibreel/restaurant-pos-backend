import { IsString } from 'class-validator';
import { Restaurant } from 'src/restaurant/entities/restuarant.entity';

export class CreateRestaurantDTO implements Omit<Restaurant, 'id'> {
  @IsString()
  name: string;

  @IsString()
  avatarImage: string;

  @IsString()
  bannerImage: string;
}
