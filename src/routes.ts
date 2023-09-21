import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/section-sales/section-sales.component';
import { SectionOrderComponent } from './app/section-order/section-order.component';
import { SectionHealthComponent } from './app/section-health/section-health.component';

export const appRoutes= [
    {path: 'sales',component: SectionSalesComponent },
    {path: 'order',component: SectionOrderComponent },
    {path: 'health',component: SectionHealthComponent},

    {path: '', redirectTo: '/sales',pathMatch:'full'},

];