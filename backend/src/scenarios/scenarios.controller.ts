import { Controller, Get, Param } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';

@Controller('scenarios') //every route in this class starts with /scenarios.
export class ScenariosController {
    constructor(private readonly scenariosService: ScenariosService) {}

    @Get() //This marks the next method as the handler for GET /scenarios.
    findAll() {
        return this.scenariosService.findAll();
    }

    @Get(':id') //This handles GET /scenarios/something. 
    //The : makes id a route parameter, a placeholder for whatever is in that part of the URL. For example, /scenarios/jamming gives id = 'jamming'.
    findOne(@Param('id') id: string) {
        return this.scenariosService.findOne(id);
    }
}
