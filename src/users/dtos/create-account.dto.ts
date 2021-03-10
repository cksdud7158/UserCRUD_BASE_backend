import {
  InputType,
  IntersectionType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@InputType()
class CreateAccountInput_1 extends PickType(User, [
  'email',
  'password',
  'role',
]) {}

@InputType()
class CreateAccountInput_2 extends PartialType(
  PickType(User, ['snsUrls', 'phoneNum']),
) {}

@InputType()
export class CreateAccountInput extends IntersectionType(
  CreateAccountInput_1,
  CreateAccountInput_2,
) {}

@ObjectType()
export class CreateAccountOutput extends CoreOutput {}
