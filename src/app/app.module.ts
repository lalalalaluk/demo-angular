import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BindingComponent } from './binding/binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentContentComponent } from './parent-content/parent-content.component';
import { ChildContentComponent } from './parent-content/child-content/child-content.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormlyComponent } from './formly/formly.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArrayReactiveFormComponent } from './array-reactive-form/array-reactive-form.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientAddUpdateComponent } from './http-client/http-client-add-update/http-client-add-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    BindingComponent,
    PipeComponent,
    ParentComponent,
    ChildComponent,
    ParentContentComponent,
    ChildContentComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormlyComponent,
    ArrayReactiveFormComponent,
    HttpClientComponent,
    HttpClientAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
