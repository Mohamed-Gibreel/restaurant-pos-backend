import { MaxLength, MinLength } from 'class-validator';

export class RestaurantDTO {
  @MinLength(5)
  @MaxLength(10)
  name: string;
}
