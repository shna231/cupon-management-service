import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Type } from './cupon.entity';
import { CuponService } from './cupon.service';

@Controller('api/v1/cupon')
@ApiTags('쿠폰')
export class CuponController {
  constructor(private readonly cuponService: CuponService) {}

  @Get()
  @ApiOperation({
    summary: '쿠폰 타입 조회 API',
    description: '쿠폰 타입을 조회합니다. 타입으로 필터링이 가능합니다.',
  })
  @ApiQuery({ name: 'type', enum: Type })
  async getCuponType(@Query('type') type: Type) {
    return await this.cuponService.getCuponType(type);
  }
}
