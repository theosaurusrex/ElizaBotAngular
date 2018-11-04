import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizabotdataComponent } from './elizabotdata.component';

describe('ElizabotdataComponent', () => {
  let component: ElizabotdataComponent;
  let fixture: ComponentFixture<ElizabotdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElizabotdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElizabotdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
