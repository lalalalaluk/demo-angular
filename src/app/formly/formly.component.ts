import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent {
  form = new FormGroup({});
  model = {  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        required: true,
        type: 'email',
      },
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
        required: true,
        type: 'number',
      },
    },
    {
      key: 'country',
      type: 'input',
      templateOptions: {
        label: 'Country',
      },
    },
    {
      key: 'newsletter',
      type: 'checkbox',
      templateOptions: {
        label: 'Subscribe to newsletter',
      },
    },
  ];

  onSubmit(model: any) {
    if(this.form.valid){
      console.log(model);
    }else{
      alert("Form is invalid");
    }
  }


}
