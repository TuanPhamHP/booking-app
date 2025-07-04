import { User } from 'src/modules/users/entities/users.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ type: 'uuid' })
  userId!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  // define relation with users
  @ManyToOne(() => User, (user) => user.posts)
  user!: User;
}
