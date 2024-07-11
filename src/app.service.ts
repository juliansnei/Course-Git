import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const saludo: string = 'hello';
    return 'Hello World!';
  }
}
