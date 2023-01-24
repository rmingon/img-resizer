import { Injectable } from '@nestjs/common';
import sharp from 'sharp'

type Size = {
  height: number;
  width: number;
}

type Format = "png" | "jpeg"

@Injectable()
export class SharpService {

}
