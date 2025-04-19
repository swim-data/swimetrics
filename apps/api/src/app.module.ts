import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from './file/file.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { MinioModule } from './minio/minio.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env', '../../.env'],
        }),
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
            context: ({ req }: { req: Request }) => {
                return { req };
            },
        }),
        MinioModule,
        FileModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
