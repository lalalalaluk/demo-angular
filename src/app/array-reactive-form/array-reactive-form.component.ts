import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-array-reactive-form',
  templateUrl: './array-reactive-form.component.html',
  styleUrls: ['./array-reactive-form.component.scss']
})
export class ArrayReactiveFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      hobbies: this.formBuilder.array([]), // 初始空的陣列表單
    });
  }

  get hobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.formBuilder.control(''));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
