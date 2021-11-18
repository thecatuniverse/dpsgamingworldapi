import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../domain/entities/profile.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findAll(options?: object): Promise<Profile[]> {
    return this.profileRepository.find(options);
  }

  findOne(id: string, options?: FindOneOptions<Profile>): Promise<Profile> {
    return this.profileRepository.findOne(id, options);
  }

  create(profile: Profile): Promise<Profile> {
    return this.profileRepository.save(profile);
  }
}
