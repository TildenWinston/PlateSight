import { RouterModule } from "@angular/router";
import { PlateDatabaseComponent } from "./plate-database/plate-database.component";

const routes = [
    { path: 'platesearch',  component: PlateDatabaseComponent },
    { path: 'platesearch/:id',      component: PlateDatabaseComponent },
    { path: '', component: PlateDatabaseComponent},
    { path: '**', component: PlateDatabaseComponent},

];

export const routing = RouterModule.forRoot(routes);