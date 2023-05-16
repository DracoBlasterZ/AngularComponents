import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormDataViewerComponent } from './contact-form-data-viewer.component';

describe('ContactFormDataViewerComponent', () => {
  let component: ContactFormDataViewerComponent;
  let fixture: ComponentFixture<ContactFormDataViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormDataViewerComponent]
    });
    fixture = TestBed.createComponent(ContactFormDataViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
