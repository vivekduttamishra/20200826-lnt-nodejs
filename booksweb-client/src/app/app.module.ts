import { NgModule } from "@angular/core";
import { BooksWebAppComponent} from "./books-web-app.component";
import { BrowserModule} from '@angular/platform-browser';


@NgModule({

    imports:[
        BrowserModule  //most important angular module to enable component rendering
    ],

    declarations:[ //list all the components and other elements related to current module
        BooksWebAppComponent
    ],

    exports:[
        BooksWebAppComponent
    ],
    
    bootstrap:[  //startup compoent for the module
        BooksWebAppComponent
    ]
})
export class AppModule{

}