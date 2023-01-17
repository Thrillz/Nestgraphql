import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'drink interface' })
export abstract class Drink {
  @Field()
  name: string;
}
