import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { CuponController } from './cupon.controller';
import { CuponType, IssuedCupon } from './cupon.entity';
import { CuponService } from './cupon.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, CuponType, IssuedCupon])],
  controllers: [CuponController],
  providers: [CuponService],
})
export class CuponModule {}
