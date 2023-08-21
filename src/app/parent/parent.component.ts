import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  dataFromParent = 'Data from Parent Component';
  dataFromChild = '';

  sendDataToChild(): void {
    this.dataFromParent = 'Updated Data from Parent';
  }

  onDataFromChild(data: string): void {
    this.dataFromChild = data;
  }
}
