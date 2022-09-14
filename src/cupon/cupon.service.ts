import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CuponType, IssuedCupon, Type } from './cupon.entity';

@Injectable()
export class CuponService {
  constructor(
    @InjectRepository(CuponType)
    private readonly cuponTypeRepository: Repository<CuponType>,

    @InjectRepository(IssuedCupon)
    private readonly issuedCuponRepository: Repository<IssuedCupon>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * 쿠폰 타입을 모두 조회합니다.
   * 쿠폰 타입 : all | delivery | percent | absolute
   *  */
  async getCuponType(type: Type) {
    try {
      if (type == Type.All) {
        const cuponTypes = await this.cuponTypeRepository.find();

        return Object.assign({
          date: cuponTypes,
          statusCode: 200,
          message: '모든 쿠폰 타입을 조회하였습니다.',
        });
      } else {
        const cuponTypes = await this.cuponTypeRepository.findBy({
          type: type,
        });

        return Object.assign({
          date: cuponTypes,
          statusCode: 200,
          message: type + '에 해당하는 쿠폰 타입을 조회하였습니다.',
        });
      }
    } catch (NotFoundException) {
      throw NotFoundException;
    }
  }

  /**
   * 발급된 쿠폰을 조회합니다.
   * 필터링 가능 항목은 다음과 같습니다.
   *
   * - 특정 사용자 : 아이디 등
   * - 쿠폰 타입 : all | delivery | percent | absolute
   * - 사용 가능 여부 : 사용한 쿠폰 | 사용하지 않은 쿠폰 | 만료된 쿠폰
   * - 할인된 금액 액수 : 사용한 쿠폰에 한해 검색 가능
   *  */
  async getIssuedCupon() {
    try {
      await this.issuedCuponRepository.find();
    } catch (NotFoundException) {
      throw NotFoundException;
    }
  }
}
