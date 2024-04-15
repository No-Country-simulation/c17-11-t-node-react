import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './schemas/pet.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDTO, UpdatePetDTO } from './dto/pet.dto';
import { UserService } from '@User/user.service';

@Injectable()
export class PetService {
  constructor(
    @InjectModel(Pet.name) private petModel: Model<Pet>,
    private userService: UserService,
  ) {}
  async create(data: CreatePetDTO, userId: string) {
    try {
      const pet = await this.petModel.create(data);
      await this.userService.addToPetUser(userId, pet._id.toString());
      return pet;
    } catch (error) {
      throw new Error(`Error creating pet: ${error.message}`);
    }
  }
  async findAll() {
    try {
      return this.petModel.find().exec();
    } catch (error) {
      throw new Error(`Error finding all pets: ${error.message}`);
    }
  }
  async findById(id: string) {
    try {
      return this.petModel.findById(id);
    } catch (error) {
      throw new Error(`Error finding pet by id: ${error.message}`);
    }
  }

  async update(id: string, data: UpdatePetDTO) {
    try {
      return this.petModel.findByIdAndUpdate(id, data, { new: true }).exec();
    } catch (error) {
      throw new Error(`Error updating pet: ${error.message}`);
    }
  }

  async delete(petId: string, userId: string) {
    try {
      const deletedPet = await this.petModel.findByIdAndDelete(petId).exec();
      if (!deletedPet) {
        throw new NotFoundException('Pet not found');
      }
      await this.userService.removePetFromUser(userId, petId);
      return deletedPet;
    } catch (error) {
      throw new Error(`Error deleting pet: ${error.message}`);
    }
  }
}
