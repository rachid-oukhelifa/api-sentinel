import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Api } from './entities/api.entity';

@Injectable()
export class ApisService {
  constructor(
    @InjectRepository(Api)
    private readonly repo: Repository<Api>,
  ) {}

  create(dto: CreateApiDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    const api = await this.repo.findOneBy({ id });
    if (!api) throw new NotFoundException(`API ${id} introuvable`);
    return api;
  }

  async update(id: string, dto: UpdateApiDto) {
    const api = await this.findOne(id);
    Object.assign(api, dto);
    return this.repo.save(api);
  }

  async remove(id: string) {
    const api = await this.findOne(id);
    await this.repo.remove(api);
  }
}
