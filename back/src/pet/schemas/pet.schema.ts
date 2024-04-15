import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PetDocument = HydratedDocument<Pet>;

@Schema()
export class Pet {
  @Prop()
  name: string;

  // @Prop({ type: Types.ObjectId, ref: 'User' })
  // owner: Types.ObjectId;

  // @Prop({ type: Types.ObjectId, ref: 'User' })
  // caretaker?: Types.ObjectId;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
