// DTO (Data Transfer Object) schema
// A DTO is an object that defines how the data will be sent over the network. We could determine the DTO schema by using TypeScript interfaces, or by simple classes.
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsNotEmpty()
  @IsString()
  breed: string;
}
