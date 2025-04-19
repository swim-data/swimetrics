import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { Logger } from '@nestjs/common';
import { File } from './entities/file.entity';

@Resolver(() => File)
export class FileResolver {
    private readonly logger = new Logger(FileResolver.name);

    constructor(private readonly fileService: FileService) {}

    @Query(() => [File], { name: 'files' })
    async findAll() {
        const files = await this.fileService.findAll();
        this.logger.log(files);
        return files;
    }

    @Query(() => File, { name: 'fileById' })
    findOne(@Args('id', { type: () => String }) id: string) {
        return this.fileService.findOne(id);
    }
}
