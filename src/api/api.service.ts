import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  root(): string {
    return 'Hello World!';
  }
}
