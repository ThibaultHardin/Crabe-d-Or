import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import {AtelierComponent} from "./atelier/atelier.component";
import {BassinsComponent} from "./bassins/bassins.component";
import {CollinesComponent} from "./collines/collines.component";

const routes: Routes = [
    { path: "atelier", component: AtelierComponent },
    { path: "bassins", component: BassinsComponent },
    { path: "collines", component: CollinesComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
