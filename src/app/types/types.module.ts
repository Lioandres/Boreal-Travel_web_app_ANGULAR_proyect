import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorealComponent } from './boreal/boreal.component';
import { CircleComponent } from './circle/circle.component';
import { AirportComponent } from './airport/airport.component';
import { BusComponent } from './bus/bus.component';
import { LakeComponent } from './lake/lake.component';
import { TemplatesModule } from '../templates/templates.module';




@NgModule({
  declarations: [
    BusComponent,
    BorealComponent,
    CircleComponent,
    AirportComponent,
    LakeComponent,
    
  
 

  ],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class TypesModule { }
