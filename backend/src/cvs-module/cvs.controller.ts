import { Body, Controller, Post, Res } from "@nestjs/common";
import type { Response } from "express";

import { CvsService } from "./cvs.service";
import { CreateCVDto } from "./dto/create-cv.dto";

@Controller("cvs")
export class CvsController {
  constructor(private readonly cvsService: CvsService) {}

  @Post("preview")
  createCVPreview(@Body() createCVDto: CreateCVDto): string {
    return this.cvsService.createCVPreview(createCVDto);
  }

  @Post("pdf")
  async createCVPdf(
    @Body() createCVDto: CreateCVDto,
    @Res() res: Response,
  ): Promise<void> {
    const pdfBuffer = await this.cvsService.createCVPdf(createCVDto);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=${createCVDto.cVName}.pdf`,
      "Content-Length": pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }
}
