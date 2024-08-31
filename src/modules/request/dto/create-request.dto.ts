import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty({ message: 'id_property is required' })
  @IsNumber({}, { message: 'Id is a number' })
  id_property: number;

  @IsNotEmpty({ message: 'id_client is required' })
  @IsNumber({}, { message: 'Id is a number' })
  id_client: number;

  @IsNotEmpty({ message: 'id_state is required' })
  @IsNumber({}, { message: 'Id is a number' })
  id_state: number;

  @IsNotEmpty({ message: 'id_requestType is required' })
  @IsNumber({}, { message: 'Id is a number' })
  id_requestType: number;

  @IsNotEmpty({ message: 'id_owner is required' })
  @IsNumber({}, { message: 'Id is a number' })
  id_owner: number;

  @IsNotEmpty({ message: 'id_role is required' })
  @IsNumber({}, { message: 'Id is a number' })
  id_role: number;

  @IsNotEmpty({ message: 'date is required' })
  @IsNumber({}, { message: 'Id is a number' })
  date: string;
}
