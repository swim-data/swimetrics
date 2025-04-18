import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private configService: ConfigService) {}

    getHello(): string {
        return this.configService.get('MINIO_ROOT_PASSWORD') ?? 'Hello World!';
    }
}
