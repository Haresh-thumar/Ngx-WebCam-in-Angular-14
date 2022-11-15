import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamSnapshotComponent } from './webcam-snapshot.component';

describe('WebcamSnapshotComponent', () => {
  let component: WebcamSnapshotComponent;
  let fixture: ComponentFixture<WebcamSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcamSnapshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcamSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
