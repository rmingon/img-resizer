import {Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {randomUUID} from "crypto";

@Controller('files')
export class FilesController {

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './pictures',
      filename: (req, file, cb) => {
        cb(null, `${randomUUID()}_${file.originalname}`)
      }
    })
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

}