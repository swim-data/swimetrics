import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class File {
    @Field(() => ID, {
        description: 'The unique plattform identifier of the file.',
    })
    id: string;

    @Field(() => String, { description: 'The name of the file.' })
    fileName: string;

    @Field(() => String, { description: 'The original name of the file.' })
    originalName: string;

    @Field(() => String, { description: 'The mime type of the file.' })
    mimeType: string;

    @Field(() => Int, { description: 'The size of the file in bytes.' })
    size: number;

    @Field(() => String, { description: 'The path to the file in the bucket.' })
    bucketPath: string;

    @Field(() => String, { description: 'The name of the bucket.' })
    bucketName: string;

    @Field(() => Date, {
        description: 'The date when the object was created.',
    })
    createdAt: Date;

    @Field(() => Date, {
        description: 'The date when the object was last updated.',
    })
    updatedAt: Date;
}
