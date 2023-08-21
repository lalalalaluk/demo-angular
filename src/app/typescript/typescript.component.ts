import { Component, OnInit } from '@angular/core';

interface Rectangle {
  width: number;
  height: number;
}


@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit{
  
  ngOnInit(): void {
    const rectangle: Rectangle = { width: 5, height: 3 };
    const area = this.calculateArea(rectangle);
    console.log(area); // 輸出: 15

  }

  calculateArea(rect: Rectangle): number {
      return rect.width * rect.height;
  }


}
