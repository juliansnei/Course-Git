import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const nombre: string = 'julian';
    return 'Hello World!';
  }
}
