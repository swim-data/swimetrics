import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { MinioClientService } from '../minio/minio-client/minio-client.service';

@Injectable()
export class FileService {
    private readonly logger = new Logger(FileService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly minioClientService: MinioClientService,
    ) {}

    findAll() {
        return this.prisma.file.findMany();
    }

    async findOne(id: string) {
        return await this.prisma.file.findUnique({
            where: { id: id },
        });
    }

    async findOneFileUrl(id: string) {
        const fileDetails = await this.prisma.file.findUnique({
            where: { id: id },
        });

        if (!fileDetails) {
            throw new NotFoundException(`File with ID ${id} not found`);
        }

        const downloadUrl = await this.minioClientService.getFileUrl(
            fileDetails.bucketPath,
        );
        return downloadUrl;
    }

    async uploadFile(file: Express.Multer.File) {
        // Ensure unique filename to prevent collisions
        const objectName = `${Date.now()}-${file.originalname}`;

        // Upload to MinIO
        await this.minioClientService.uploadObject(
            objectName,
            file.buffer,
            file.size,
            { 'Content-Type': file.mimetype },
        );

        // Save to database using Prisma
        return this.prisma.file.create({
            data: {
                fileName: objectName,
                originalName: file.originalname,
                mimeType: file.mimetype,
                size: file.size,
                bucket: 'files',
                bucketPath: objectName,
            },
        });
    }
}
