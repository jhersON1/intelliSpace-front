import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCollageComponent } from './images-collage.component';

describe('ImagesCollageComponent', () => {
  let component: ImagesCollageComponent;
  let fixture: ComponentFixture<ImagesCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesCollageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagesCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
