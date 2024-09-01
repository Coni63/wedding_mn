import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedLayoutComponent } from './wrapped-layout.component';

describe('WrappedLayoutComponent', () => {
  let component: WrappedLayoutComponent;
  let fixture: ComponentFixture<WrappedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrappedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrappedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
