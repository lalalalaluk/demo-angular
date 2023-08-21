import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './typescript/typescript.component';
import { BindingComponent } from './binding/binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentContentComponent } from './parent-content/parent-content.component';
import { ChildContentComponent } from './parent-content/child-content/child-content.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormlyComponent } from './formly/formly.component';
import { ArrayReactiveFormComponent } from './array-reactive-form/array-reactive-form.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientAddUpdateComponent } from './http-client/http-client-add-update/http-client-add-update.component';

const routes: Routes = [
  {
    // redirect to typescript page on load
    path: '',
    redirectTo: '/http-client',
    pathMatch: 'full'
  },
  {component: TypescriptComponent, path: 'typescript'},
  {component: BindingComponent, path: 'binding'},
  {component: PipeComponent, path: 'pipe'},
  {component: ParentComponent, path: 'parent'},
  {component: ChildComponent, path: 'child'},
  {component: ParentContentComponent, path: 'parent-content'},
  {component: ChildContentComponent, path: 'child-content'},
  {component: TemplateDrivenFormComponent, path: 'template-driven-form'},
  {component: ReactiveFormComponent, path: 'reactive-form'},
  {component: ArrayReactiveFormComponent, path: 'array-reactive-form'},
  {component: FormlyComponent, path: 'formly'},
  {component: HttpClientComponent, path: 'http-client'},
  {component: HttpClientAddUpdateComponent, path: 'http-client-add-update'},
  {component: HttpClientAddUpdateComponent, path: 'http-client-add-update/:id'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
