import { IsIn, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateApiDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsIn(['dev', 'staging', 'prod'])
  environment?: string;

  @IsUrl({ require_tld: false })
  baseUrl: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  specUrl?: string;
}
