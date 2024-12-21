import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabSearchComponent } from './cab-search.component';

describe('CabSearchComponent', () => {
  let component: CabSearchComponent;
  let fixture: ComponentFixture<CabSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
