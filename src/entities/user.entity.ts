import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {  
  @PrimaryGeneratedColumn()//主键装饰器
  id: number;

  @Column({type:'varchar', name: 'name'}) // 要跟数据库对应
  name: string;
}