import { NoticeDetailsComponent } from './notice-details/notice-details.component';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'notices', pathMatch: 'full' },
    { path: 'notices', component: NoticeListComponent },
    { path: 'add', component: CreateNoticeComponent },
    { path: 'details', component: NoticeDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }