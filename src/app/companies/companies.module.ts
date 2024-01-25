import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PoModule } from '@po-ui/ng-components';
import { SmartUIComponentsModule } from '@smart-ui/ng-components';

import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  declarations: [
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    SmartUIComponentsModule,
    PoModule,
    CompaniesRoutingModule
  ],
  providers: [
    
  ]
})
export class CompaniesModule { }
