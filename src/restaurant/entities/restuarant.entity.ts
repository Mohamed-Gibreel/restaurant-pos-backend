import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  avatarImage: string;

  @Column()
  @Expose()
  bannerImage: string;

  // @Column()
  // @Expose()
  // address_line: string;
  //
  // @Column()
  // @Expose()
  // city: string;
  //
  // @Column()
  // @Expose()
  // postal_code: string;
  //
  // @Column()
  // @Expose()
  // latitude: string;
  //
  // @Column()
  // @Expose()
  // longitude: string;
}
