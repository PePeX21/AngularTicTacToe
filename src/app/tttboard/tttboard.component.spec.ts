import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TttboardComponent } from './tttboard.component';

describe('TttboardComponent', () => {
  let component: TttboardComponent;
  let fixture: ComponentFixture<TttboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TttboardComponent]
    });
    fixture = TestBed.createComponent(TttboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
