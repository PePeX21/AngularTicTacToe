import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosepanelComponent } from './choosepanel.component';

describe('ChoosepanelComponent', () => {
  let component: ChoosepanelComponent;
  let fixture: ComponentFixture<ChoosepanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosepanelComponent]
    });
    fixture = TestBed.createComponent(ChoosepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
