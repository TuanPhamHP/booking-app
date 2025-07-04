import { Post } from 'src/modules/posts/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => User, (user) => user.id)
  posts: Post[];
}
