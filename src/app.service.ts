import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Record<string, string> {
    return {
      message: 'ini pesan dari backend',
    };
  }
}
