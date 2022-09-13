import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'varchar', length: '20' })
  id: string;

  @Column({ type: 'varchar', length: '20' })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
