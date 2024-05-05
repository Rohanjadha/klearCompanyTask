import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogformComponent } from './logform.component';

describe('LogformComponent', () => {
  let component: LogformComponent;
  let fixture: ComponentFixture<LogformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogformComponent]
    });
    fixture = TestBed.createComponent(LogformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
