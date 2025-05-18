import { IsOptional, IsString } from 'class-validator';
import { Restaurant } from 'src/restaurant/entities/restuarant.entity';

export class UpdateRestaurantDTO implements Partial<Restaurant> {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  avatarImage?: string;

  @IsString()
  @IsOptional()
  bannerImage?: string;
}
