import { RouterModule } from "@angular/router";
import { PlateDatabaseComponent } from "./plate-database/plate-database.component";
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes = [
    { path: 'platesearch',  component: PlateDatabaseComponent },
    { path: 'platesearch/:id',      component: PlateDatabaseComponent },
    { path: 'profile',      component: ProfileEditComponent },
    { path: '', component: PlateDatabaseComponent},
    //{ path: '**', component: PlateDatabaseComponent},

];

export const routing = RouterModule.forRoot(routes);