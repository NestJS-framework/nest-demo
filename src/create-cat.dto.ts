// DTO (Data Transfer Object) schema
// A DTO is an object that defines how the data will be sent over the network. We could determine the DTO schema by using TypeScript interfaces, or by simple classes.

export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
  }