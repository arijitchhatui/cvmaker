import { Body, Controller, Post, Res } from "@nestjs/common";
import type { Response } from "express";

import { CvsService } from "./cvs.service";
import { CreateCvDto } from "./dto/create-cv.dto";

@Controller("cvs")
export class CvsController {
  constructor(private readonly cvsService: CvsService) {}

  @Post("preview")
  createCVPreview(@Body() createCvDto: CreateCvDto): string {
    return this.cvsService.createCVPreview(createCvDto);
  }

  @Post("pdf")
  async createCVPdf(
    @Body() createCvDto: CreateCvDto,
    @Res() res: Response,
  ): Promise<void> {
    const pdfBuffer = await this.cvsService.createCVPdf(createCvDto);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=${createCvDto.cVName}.pdf`,
      "Content-Length": pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }
}
