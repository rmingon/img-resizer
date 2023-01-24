import {Global, Module} from '@nestjs/common';
import { SharpService } from './sharp.service';

@Global()
@Module({
  providers: [SharpService]
})
export class SharpModule {}
