import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';
import { PrismaService } from './prisma.service';
import { FileController } from './file.controller';

@Module({
    controllers: [FileController],
    providers: [FileResolver, FileService, PrismaService],
})
export class FileModule {}
