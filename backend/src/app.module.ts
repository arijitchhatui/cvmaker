import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { join } from "path";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import envGlobal from "./configs/env.global";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envGlobal],
      envFilePath: [join(process.cwd(), "..", ".env")],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
