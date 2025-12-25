import type { CreateCVDto } from "src/cvs/dto/create-cv.dto";

import { cvExample1Template } from "./examples/example1";

export default function cvTemplates(dto: CreateCVDto): string {
  switch (dto.templateId) {
    case "example1":
      return cvExample1Template(dto);

    default:
      return cvExample1Template(dto);
  }
}
