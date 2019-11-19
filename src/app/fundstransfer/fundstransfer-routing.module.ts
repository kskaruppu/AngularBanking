import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferlandingComponent } from './transferlanding.component';
import { QuicktransferComponent } from './quicktransfer/quicktransfer.component';


const routes: Routes = [
  {
    path: 'paymenttransferlanding.htm', component: TransferlandingComponent,
    data: { breadcrumb: 'Transfer' }
  },
  { path: 'quicktransfer.htm', component: QuicktransferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundstransferRoutingModule { }
