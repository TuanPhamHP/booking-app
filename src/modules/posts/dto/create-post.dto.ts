import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsUUID()
  @IsNotEmpty()
  userId!: string;
}
