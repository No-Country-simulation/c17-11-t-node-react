import { Pet } from '@Pet/schemas/pet.schema';
import { Service } from '@Service/schemas/service.schema';
import { User } from '@User/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CaretakerDocument = HydratedDocument<Caretaker>;

@Schema()
export class Caretaker {
  @Prop({ type: Types.ObjectId, ref: 'User', unique: true })
  user: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Service' }] })
  services: Service[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Pet' }] })
  pets: Pet[];

  @Prop({ default: 0 })
  active_requests: number;

  @Prop()
  description: string;
}

export const CaretakerSchema = SchemaFactory.createForClass(Caretaker);
