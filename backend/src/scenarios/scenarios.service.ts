import { Injectable, NotFoundException } from '@nestjs/common';
import { SCENARIOS } from './scenarios.data';
import { Scenario } from './scenario.types';

@Injectable()
export class ScenariosService {
    findAll(): Scenario[] {
        return SCENARIOS;
    }

    findOne(id : string): Scenario {
        const scenario = SCENARIOS.find((s) => s.id === id);
        if (!scenario) {
            throw new NotFoundException(`Scenario "${id}" not found`);
        }
        return scenario;
    }
}
