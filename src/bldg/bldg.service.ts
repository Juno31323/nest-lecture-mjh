import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bldg } from './bldg.entity';

@Injectable()
export class BldgService {
    constructor( 
        @InjectRepository(Bldg)
        private bldgRepository: Repository<Bldg>,
    ) {} 

    async findAll(): Promise<Bldg[]> {
        return this.bldgRepository.find();
    }

    async findNearby(x: number, y: number, radius: number) : Promise<Bldg[]> {
        return this.bldgRepository
            .createQueryBuilder('bldg')
            .select()
            .where(
                `ST_DISTANCE(
                    ST_SetSRID(ST_MakePoint(:x, :y), 4326)::geography,
                    bldg.bldg_geom::geography
                    ) <= :radius`,
                { x, y, radius },
            )
            .getMany();
    }
}