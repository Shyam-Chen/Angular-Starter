import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  message(): string {
    return 'Hello, World!';
  }
}
