import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input()receivedData!: string;
  @Output() dataToParent = new EventEmitter<string>();

  sendDataToParent(): void {
    this.dataToParent.emit('Data from Child Component');
  }
}
