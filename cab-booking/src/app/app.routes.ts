import { Routes } from '@angular/router';
import { CabSearchComponent } from './cab/components/cab-search/cab-search.component';
import { CabDetailsComponent } from './cab/components/cab-details/cab-details.component';
import { CabBookingComponent } from './cab/components/cab-booking/cab-booking.component';
import {CabHomeComponent} from './cab/components/cab-home/cab-home.component';
import{CabManageComponent}from './cab/components/cab-manage/cab-manage.component';
import{BookingHistoryComponent}from './cab/components/cab-history/cab-history.component';
import{DemoComponent}from './cab/components/demo/demo.component';
import { AdminDriverCommunicationComponent}from './cab/components/admin-driver-communication/admin-driver-communication.component';
import{AdminManageBookingsComponent}from './cab/components/admin-manage-bookings/admin-manage-bookings.component';
import{AdminDashboardComponent}from './cab/components/admin-dashboard/admin-dashboard.component';
import{CabServiceProviderComponent}from './cab/components/cab-service-provider/cab-service-provider.component'

export const routes: Routes =[
{
  path: "",
  component: DemoComponent
},
{
  path: 'cab',
  children: [
    {
      path: 'home',
      component: CabHomeComponent
    },
    {
      path: 'cab-search',
      component: CabSearchComponent
    },
    {
      path: 'cab-details/:id',
      component: CabDetailsComponent
    },
    {
      path: 'manage-bookings/:id',
      component: CabManageComponent
    },
    {
      path: 'booking-history',
      component: BookingHistoryComponent
    },
    {
      path: 'cab-booking/:id',
      component: CabBookingComponent
    }
  ]
},
{
  path: 'admin',
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: AdminDashboardComponent
    },
    {
      path: 'communication',
      component: AdminDriverCommunicationComponent
    },
    {
      path: 'admin-manage',
      component: AdminManageBookingsComponent
    }
  ]
},
{
path: 'service',
children: [
  {
    path: 'cab-service',
    component: CabServiceProviderComponent
  }
  ]
}
]