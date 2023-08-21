import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  name = "John"
  imageUrl = "https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"

  classBinding = false;
  classBindingArray = 'red-color bold';
  classBindingObject = { 'red-color': false, 'bold': true };

  styleBinding = 'red';
  styleBindingArray = 'color: blue; font-size: 80px;';
  styleBindingObject = { 'color': 'blue', 'font-size': '80px' };
}
