import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWorld(): string {
    return 'Hola Mundo!';
  }
}
