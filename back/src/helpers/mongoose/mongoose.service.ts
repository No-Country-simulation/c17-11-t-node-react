import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class MongooseService {
  stringToObjectId(
    id: string | string[],
  ): Types.ObjectId | Types.ObjectId[] | undefined {
    if (id == undefined || id == null) return undefined;
    if (id instanceof Array) {
      const ids = id.map((id) => new Types.ObjectId(id));
      return ids;
    }
    return new Types.ObjectId(id);
  }
}
