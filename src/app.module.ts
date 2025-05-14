import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RestaurantModule } from './restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const host = 'localhost';
        const databaseName = configService.get('POSTGRES_DB');
        const username = configService.get('POSTGRES_USER');
        const password = configService.get('POSTGRES_PASSWORD');
        return {
          type: 'postgres',
          host: host,
          port: 5432,
          username: username,
          password: password,
          database: databaseName,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
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
