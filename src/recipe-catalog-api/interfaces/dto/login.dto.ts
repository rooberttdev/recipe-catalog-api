import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin@admin.com' })
  email: string;

  @ApiProperty({ example: 'admin', minLength: 4 })
  password: string;
}
