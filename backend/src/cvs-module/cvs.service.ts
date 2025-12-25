import { Injectable } from "@nestjs/common";
import puppeteer from "puppeteer";
import { cvExample1Template } from "src/templates/examples/example1";

import { CreateCvDto } from "./dto/create-cv.dto";

@Injectable()
export class CvsService {
  createCVPreview(createCvDto: CreateCvDto): string {
    createCvDto.additionalInfo = "";

    const htmlPreview = cvExample1Template();

    return htmlPreview;
  }

  async createCVPdf(
    createCvDto: CreateCvDto,
  ): Promise<Uint8Array<ArrayBufferLike>> {
    createCvDto.additionalInfo = "";

    const html = cvExample1Template();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    await browser.close();

    return pdfBuffer;
  }
}
