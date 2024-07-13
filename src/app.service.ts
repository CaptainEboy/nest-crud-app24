//Tutorial Link
//https://medium.com/@ebimeneagent/creating-a-nest-js-crud-application-with-typescript-explained-51c3918ba1e5
//http://localhost:3000/

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
