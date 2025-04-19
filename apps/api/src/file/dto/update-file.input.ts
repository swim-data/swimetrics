import { CreateFileInput } from './create-file.input';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFileInput extends PartialType(CreateFileInput) {
    @Field(() => ID, {
        description: 'The unique plattform identifier of the file.',
    })
    id: string;
}
