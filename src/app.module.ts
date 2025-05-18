import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
} from 'src/utils/constants';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RestaurantModule } from './restaurant/restaurant.module';
import { Restaurant } from 'src/restaurant/entities/restuarant.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const host = configService.get(POSTGRES_HOST);
        const databaseName = configService.get(POSTGRES_DB);
        const username = configService.get(POSTGRES_USER);
        const password = configService.get(POSTGRES_PASSWORD);

        return {
          type: 'postgres',
          host: host,
          port: 5432,
          username: username,
          password: password,
          database: databaseName,
          entities: [Restaurant],
          synchronize: true,
        };
      },
    }),
    ConfigModule.forRoot(),
    RestaurantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
