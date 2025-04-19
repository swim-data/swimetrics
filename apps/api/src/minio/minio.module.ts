import { Global, Module } from '@nestjs/common';
import { MinioClientService } from './minio-client/minio-client.service';
import { MinioProvider2 } from './minio.provider';

@Global()
@Module({
    providers: [MinioProvider2, MinioClientService],
    exports: [MinioProvider2, MinioClientService],
})
export class MinioModule {}
