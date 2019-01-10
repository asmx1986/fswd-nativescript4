import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NoticiasService } from "../domain/noticias.service";
import { SearchFormComponent } from "./search-form.component";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SearchComponent,
        SearchFormComponent
    ],
    // providers: [NoticiasService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }