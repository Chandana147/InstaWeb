import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropBuilderComponent } from './drag-and-drop-builder.component';

describe('DragAndDropBuilderComponent', () => {
  let component: DragAndDropBuilderComponent;
  let fixture: ComponentFixture<DragAndDropBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
