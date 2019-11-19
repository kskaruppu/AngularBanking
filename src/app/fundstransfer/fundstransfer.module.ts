import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundstransferRoutingModule } from './fundstransfer-routing.module';
import { TransferlandingComponent } from './transferlanding.component';
import { QuicktransferComponent } from './quicktransfer/quicktransfer.component';


@NgModule({
  declarations: [TransferlandingComponent, QuicktransferComponent],
  imports: [
    CommonModule,
    FundstransferRoutingModule
  ]
})
export class FundstransferModule { }
