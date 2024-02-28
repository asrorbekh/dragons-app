import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsTreasuresHttpComponent } from './dragons-treasures-http.component';

describe('DragonsTreasuresHttpComponent', () => {
  let component: DragonsTreasuresHttpComponent;
  let fixture: ComponentFixture<DragonsTreasuresHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonsTreasuresHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragonsTreasuresHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
