import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Role } from '@Role/schemas/role.schema';
import { Pet } from '@Pet/schemas/pet.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: Types.ObjectId, ref: 'Role' })
  role: Role;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Pet' }] })
  pet: Pet[];

  @Prop()
  name: string;

  @Prop()
  dni: number;

  @Prop()
  birthday: Date;

  @Prop()
  picture: string;

  @Prop([String])
  phone: string[];

  @Prop()
  email: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email_verified: boolean;

  @Prop(
    raw({
      city: { type: String },
      address: { type: String },
    }),
  )
  address: Record<string, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);
