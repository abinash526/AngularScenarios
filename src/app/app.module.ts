import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Component1Component } from './Scenario3/component1/component1.component';
import { Component2Component } from './Scenario3/component2/component2.component';
import { ComponentiComponent } from './Scenario4/componenti/componenti.component';
import { ComponentiiComponent } from './Scenario4/componentii/componentii.component';
import { CompiiComponent } from './scenario5/compii/compii.component';
import { CompiiiComponent } from './scenario5/compiii/compiii.component';
import { CompiComponent } from './scenario5/compi/compi.component';
import { Comp1Component } from './scenario6/comp1/comp1.component';
import { Comp2Component } from './scenario6/comp2/comp2.component';
import { Comp3Component } from './scenario6/comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Component1Component,
    Component2Component,
    ComponentiComponent,
    ComponentiiComponent,
    CompiiComponent,
    CompiiiComponent,
    CompiComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
