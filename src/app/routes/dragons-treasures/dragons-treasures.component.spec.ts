import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsTreasuresComponent } from './dragons-treasures.component';

describe('DragonsTreasuresComponent', () => {
  let component: DragonsTreasuresComponent;
  let fixture: ComponentFixture<DragonsTreasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonsTreasuresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragonsTreasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
