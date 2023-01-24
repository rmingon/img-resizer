import { Injectable } from '@nestjs/common';
import sharp from 'sharp'

type Size = {
  height: number;
  width: number;
}

type Format = "png" | "jpeg"

@Injectable()
export class SharpService {
  resize(img_location: string, {width, height}: Size, format: Format) {
    sharp(img_location)
      .resize(width, height)
      .toFile('output.webp', (err, info) => {
        throw err
      });
  }
}
