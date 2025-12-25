import { Injectable } from "@nestjs/common";
import puppeteer from "puppeteer";
import { cvExample1Template } from "src/templates/examples/example1";

import { CreateCVDto } from "./dto/create-cv.dto";

@Injectable()
export class CvsService {
  createCVPreview(createCVDto: CreateCVDto): string {
    const htmlPreview = cvExample1Template(createCVDto);

    return htmlPreview;
  }

  async createCVPdf(
    createCVDto: CreateCVDto,
  ): Promise<Uint8Array<ArrayBufferLike>> {
    const html = cvExample1Template(createCVDto);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    await browser.close();

    return pdfBuffer;
  }
}
