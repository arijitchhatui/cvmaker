import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

class CreateCVContactsDto {
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public email: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public phone: string | null;
}

export class CreateCVDto {
  @ApiProperty()
  @IsString()
  public templateId: string;

  @ApiProperty()
  @IsString()
  public id: string;

  @ApiProperty()
  @IsString()
  public cVName: string;

  @ApiProperty()
  @IsString()
  public firstName: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public middleName: string | null;

  @ApiProperty()
  @IsString()
  public lastName: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public nickname: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public avatar: string | null;

  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateCVContactsDto)
  @IsObject()
  public contacts: CreateCVContactsDto;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public address: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public summary: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public objectives: string | null;

  @ApiProperty({ type: [Object] })
  @IsArray()
  public education: Array<{
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string | null;
    grade: string | null;
    description: string | null;
    location: string | null;
  }>;

  public experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string | null;
    responsibilities: string | null;
    location: string | null;
  }>;

  public skills: Array<{
    name: string;
    level: string | null;
  }>;

  public projects: Array<{
    name: string;
    description: string;
    startDate: string;
    endDate: string | null;
    link: string | null;
    location: string | null;
  }>;

  public certifications: Array<{
    name: string;
    issuingOrganization: string;
    issueDate: string;
    expirationDate: string | null;
    credentialID: string | null;
    credentialURL: string | null;
  }>;

  public languages: Array<{
    name: string;
    proficiency: string;
  }>;

  public hobbies: Array<{
    description: string;
  }>;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public additionalInfo: string | null;

  public otherExperiences: Array<{
    title: string;
    description: string;
    startDate: string | null;
    endDate: string | null;
    location: string | null;
  }>;

  public references: Array<{
    name: string;
    relationship: string | null;
    contactInfo: string | null;
  }>;

  public links: Array<{
    label: string;
    url: string;
  }>;

  @ApiProperty({
    example: Date.now(),
  })
  @IsNumber()
  public createdAt: number;

  @ApiProperty({
    example: Date.now(),
  })
  @IsNumber()
  public updatedAt: number;
}
