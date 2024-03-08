import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingEditComponent } from './shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

describe('ShoppingEditComponent', () => {
  let component: ShoppingEditComponent;
  let fixture: ComponentFixture<ShoppingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingEditComponent ],
      imports: [ FormsModule ],
      providers: [ ShoppingListService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

