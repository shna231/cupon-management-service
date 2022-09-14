import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CuponType {
  @PrimaryGeneratedColumn({ comment: '쿠폰 타입 아이디' })
  id: number;

  @Column({ comment: '쿠폰 타입 이름', type: 'varchar', length: '20' })
  name: string;

  @CreateDateColumn({ comment: '생성 시각' })
  createdAt: Date;

  @Column({ comment: '만료 시각' })
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

  @CreateDateColumn({ comment: '발급 시각' })
  createdAt: Date;

  @DeleteDateColumn({ comment: '사용 시각' })
  deleteAt: Date;
}
