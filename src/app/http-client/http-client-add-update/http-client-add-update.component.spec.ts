import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientAddUpdateComponent } from './http-client-add-update.component';

describe('HttpClientAddUpdateComponent', () => {
  let component: HttpClientAddUpdateComponent;
  let fixture: ComponentFixture<HttpClientAddUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpClientAddUpdateComponent]
    });
    fixture = TestBed.createComponent(HttpClientAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
