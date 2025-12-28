import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import type { Response } from "express";

import { CvsController } from "./cvs.controller";
import { CvsService } from "./cvs.service";
import type { CreateCVDto } from "./dto/create-cv.dto";

const cvDefaultMockData: CreateCVDto = {
  id: "1",
  templateId: "template1",
  locale: "en",
  cVName: "John's CV",
  firstName: "John",
  lastName: "Doe",
  middleName: null,
  nickname: null,
  contacts: {
    email: null,
    phone: null,
  },
  address: null,
  avatar: null,
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  hobbies: [],
  summary: null,
  additionalInfo: null,
  links: [],
  objectives: null,
  otherExperiences: [],
  references: [],
  createdAt: Date.now(),
  updatedAt: Date.now(),
};
describe("CvsController", () => {
  let controller: CvsController;
  let service: CvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvsController],
      providers: [CvsService],
    }).compile();

    controller = module.get<CvsController>(CvsController);
    service = module.get<CvsService>(CvsService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("createCVPreview", () => {
    it("should call CvsService.createCVPreview with correct parameters", () => {
      const spyCreateCVPreview = jest.spyOn(service, "createCVPreview");

      controller.createCVPreview(cvDefaultMockData);

      expect(spyCreateCVPreview).toHaveBeenCalledWith(cvDefaultMockData);
    });

    it("should return the CV preview HTML", () => {
      const mockHtmlPreview = "<html>CV Preview</html>";

      jest
        .spyOn(service, "createCVPreview")
        .mockReturnValueOnce(mockHtmlPreview);

      const result = controller.createCVPreview(cvDefaultMockData);

      expect(result).toBe(mockHtmlPreview);
    });
  });

  describe("createCVPdf", () => {
    it("should call CvsService.createCVPdf with correct parameters", async () => {
      const spyCreateCVPdf = jest.spyOn(service, "createCVPdf");
      const mockResponse = {
        set: jest.fn(),
        end: jest.fn(),
      } as unknown as Response;

      await controller.createCVPdf(cvDefaultMockData, mockResponse);

      expect(spyCreateCVPdf).toHaveBeenCalledWith(cvDefaultMockData);
    });
  });

  describe("createPDFfromStatic", () => {
    it("should call CvsService.createPDFfromStatic with correct parameters", async () => {
      const mockFileBuffer = Buffer.from("<html>Static CV</html>");

      const mockMulterFile = {
        fieldname: "file",
        originalname: "template.html",
        encoding: "7bit",
        mimetype: "text/html",
        size: mockFileBuffer.length,
        buffer: mockFileBuffer,
      } as Express.Multer.File;

      const mockResponse = {
        set: jest.fn(),
        end: jest.fn(),
      } as unknown as Response;

      const spyCreatePDFfromStatic = jest.spyOn(service, "createPDFfromStatic");

      await controller.createPDFfromStatic(mockMulterFile, mockResponse);

      expect(spyCreatePDFfromStatic).toHaveBeenCalledWith(
        mockMulterFile.buffer.toString(),
      );
    });
  });
});
