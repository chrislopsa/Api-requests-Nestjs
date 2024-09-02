import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateRequestDto  {

  @IsNotEmpty({ message: 'date is required' })
  @IsString()
  date: string;
}
