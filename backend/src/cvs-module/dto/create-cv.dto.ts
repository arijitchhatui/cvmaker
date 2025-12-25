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

class CreateCVEducationDto {
  @ApiProperty()
  @IsString()
  public institution: string;

  @ApiProperty()
  @IsString()
  public degree: string;

  @ApiProperty()
  @IsString()
  public fieldOfStudy: string;

  @ApiProperty()
  @IsString()
  public startDate: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public endDate: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public grade: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public description: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public location: string | null;
}

class CreateCVExperienceDto {
  @ApiProperty()
  @IsString()
  public company: string;

  @ApiProperty()
  @IsString()
  public position: string;

  @ApiProperty()
  @IsString()
  public startDate: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public endDate: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public responsibilities: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public location: string | null;
}

class CreateCVSkillDto {
  @ApiProperty()
  @IsString()
  public name: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public level: string | null;
}

class CreateCVProjectDto {
  @ApiProperty()
  @IsString()
  public name: string;

  @ApiProperty()
  @IsString()
  public description: string;

  @ApiProperty()
  @IsString()
  public startDate: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public endDate: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public link: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public location: string | null;
}

class CreateCVCertificationDto {
  @ApiProperty()
  @IsString()
  public name: string;

  @ApiProperty()
  @IsString()
  public issuingOrganization: string;

  @ApiProperty()
  @IsString()
  public issueDate: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public expirationDate: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public credentialID: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public credentialURL: string | null;
}

class CreateCVLanguageDto {
  @ApiProperty()
  @IsString()
  public name: string;

  @ApiProperty()
  @IsString()
  public proficiency: string;
}

class CreateCVHobbyDto {
  @ApiProperty()
  @IsString()
  public description: string;
}

class CreateCVOtherExperienceDto {
  @ApiProperty()
  @IsString()
  public title: string;

  @ApiProperty()
  @IsString()
  public description: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public startDate: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public endDate: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public location: string | null;
}

class CreateCVReferenceDto {
  @ApiProperty()
  @IsString()
  public name: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public relationship: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public contactInfo: string | null;
}

class CreateCVLinkDto {
  @ApiProperty()
  @IsString()
  public label: string;

  @ApiProperty()
  @IsString()
  public url: string;
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

  @ApiProperty({
    type: CreateCVEducationDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVEducationDto)
  public education: CreateCVEducationDto[];

  @ApiProperty({
    type: CreateCVExperienceDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVExperienceDto)
  public experience: CreateCVExperienceDto[];

  @ApiProperty({
    type: CreateCVSkillDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVSkillDto)
  public skills: CreateCVSkillDto[];

  @ApiProperty({
    type: CreateCVProjectDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVProjectDto)
  public projects: CreateCVProjectDto[];

  @ApiProperty({
    type: CreateCVCertificationDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVCertificationDto)
  public certifications: CreateCVCertificationDto[];

  @ApiProperty({
    type: CreateCVLanguageDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVLanguageDto)
  public languages: CreateCVLanguageDto[];

  @ApiProperty({
    type: CreateCVHobbyDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVHobbyDto)
  public hobbies: CreateCVHobbyDto[];

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  public additionalInfo: string | null;

  @ApiProperty({
    type: CreateCVOtherExperienceDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVOtherExperienceDto)
  public otherExperiences: CreateCVOtherExperienceDto[];

  @ApiProperty({
    type: CreateCVReferenceDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVReferenceDto)
  public references: CreateCVReferenceDto[];

  @ApiProperty({
    type: CreateCVLinkDto,
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateCVLinkDto)
  public links: CreateCVLinkDto[];

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
