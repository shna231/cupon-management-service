import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Type {
  All = 'all',
  Delivery = 'delivery',
  Percent = 'percent',
  Absolute = 'absolute',
}

@Entity()
export class CuponType {
  @PrimaryGeneratedColumn({ comment: '쿠폰 타입 아이디' })
  id: number;

  @Column({ comment: '쿠폰 타입 이름', type: 'varchar', length: '20' })
  name: string;

  @Column({ comment: '쿠폰 타입', type: 'enum', enum: Type })
  type: Type;

  @Column({ comment: '할인비율 또는 할인액', default: null })
  price: number;

  @CreateDateColumn({ comment: '생성일자' })
  createdAt: Date;

  @Column({ comment: '만료일자' })
  expirationAt: Date;
}

@Entity()
export class IssuedCupon {
  @PrimaryGeneratedColumn({ comment: '발급된 쿠폰 코드' })
  id: string;

  @ManyToOne(() => CuponType)
  cupon: CuponType;

  @ManyToOne(() => User)
  user: User;

  @Column({ comment: '할인 금액' })
  price: number;

  @CreateDateColumn({ comment: '발급일자' })
  createdAt: Date;

  @DeleteDateColumn({ comment: '사용일자' })
  deleteAt: Date;
}
