import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizabotComponent } from './elizabot.component';

describe('ElizabotComponent', () => {
  let component: ElizabotComponent;
  let fixture: ComponentFixture<ElizabotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElizabotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElizabotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
