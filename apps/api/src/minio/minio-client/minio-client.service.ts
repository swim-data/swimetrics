import { Inject, Injectable } from '@nestjs/common';
import { MINIO_TOKEN } from '../minio.decorator';
import { Client } from 'minio';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MinioClientService {
    constructor(
        @Inject(MINIO_TOKEN) private readonly minioClient: Client,
        private readonly configService: ConfigService,
    ) {}

    async onModuleInit() {
        await this.ensureBucketExists(
            this.configService.getOrThrow('MINIO_DEFAULT_BUCKET'),
        );
    }

    async ensureBucketExists(bucketName: string): Promise<void> {
        try {
            const bucketExists =
                await this.minioClient.bucketExists(bucketName);
            if (!bucketExists) {
                await this.minioClient.makeBucket(
                    bucketName,
                    this.configService.get('MINIO_REGION', 'us-east-1'),
                );
                console.log(`Bucket '${bucketName}' created successfully`);
            } else {
                console.log(`Bucket '${bucketName}' already exists`);
            }
        } catch (error) {
            console.error(`Error ensuring bucket exists: ${error}`);
            throw error;
        }
    }

    async uploadObject(
        objectName: string,
        buffer: Buffer,
        size: number,
        metaData?: Record<string, string>,
    ): Promise<void> {
        try {
            await this.minioClient.putObject(
                this.configService.getOrThrow('MINIO_DEFAULT_BUCKET'),
                objectName,
                buffer,
                size,
                metaData,
            );
        } catch (error) {
            console.error(`Error uploading object: ${error}`);
            throw error;
        }
    }
}
