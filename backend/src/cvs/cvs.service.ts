import { Injectable } from "@nestjs/common";
import puppeteer from "puppeteer";
import cvTemplates from "src/templates";

import { CreateCVDto } from "./dto/create-cv.dto";

@Injectable()
export class CvsService {
  createCVPreview(createCVDto: CreateCVDto): string {
    const htmlPreview = cvTemplates(createCVDto);

    return htmlPreview;
  }

  async createCVPdf(
    createCVDto: CreateCVDto,
  ): Promise<Uint8Array<ArrayBufferLike>> {
    const html = cvTemplates(createCVDto);

    const pdfBuffer = await this.createPDFfromStatic(html);

    return pdfBuffer;
  }

  async createPDFfromStatic(
    content: string,
  ): Promise<Uint8Array<ArrayBufferLike>> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(content, {
      waitUntil: "networkidle0",
    });

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    await browser.close();

    return pdfBuffer;
  }
}
