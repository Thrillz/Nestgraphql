import { Field, InputType } from '@nestjs/graphql';
import { CoffeeType } from 'src/common/enums/coffee-type.enum';

@InputType({ description: 'create coffee input object type' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A new coffee name' })
  name: string;
  brand: string;
  flavors: string[];
  type: CoffeeType;
}
