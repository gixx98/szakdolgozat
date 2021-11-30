import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ifContainsNumber() should give back if input has number', () => {
    expect(component.ifContainsNumber()).toMatch(/input has number/i, '');
    component.ifContainsNumber();
    expect(component.ifContainsNumber()).toMatch(/input has no number/i, '');
  });

  it('#ifHasUpperAndLowerCase() should give back if input has upper and lowercase', () => {
    expect(component.ifContainsNumber()).toMatch(/input has uppercase/i, '');
    component.ifHasUpperAndLowerCase();
    expect(component.ifContainsNumber()).toMatch(/input has no uppercase/i, '');
  });

});
