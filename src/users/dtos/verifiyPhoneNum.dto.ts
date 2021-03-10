import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Verification } from '../entities/verification.entity';

@ObjectType()
export class VerifyPhoneNumOutput extends CoreOutput {}

@InputType()
export class VerifyPhoneNumInput extends PickType(Verification, ['code']) {}
