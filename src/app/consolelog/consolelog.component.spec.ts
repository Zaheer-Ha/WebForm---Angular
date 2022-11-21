import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolelogComponent } from './consolelog.component';

describe('ConsolelogComponent', () => {
  let component: ConsolelogComponent;
  let fixture: ComponentFixture<ConsolelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
