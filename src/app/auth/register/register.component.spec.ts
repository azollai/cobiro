import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ValidationModule } from '../../validation/validation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../auth.service';
import { MockAuthService } from '../mock-auth.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatSnackBarModule,

        ValidationModule,

        FormsModule,
        ReactiveFormsModule,

        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        LoginComponent,
        RegisterComponent
      ],
      providers: [
        // mock the real service
        { provide: AuthService, useClass: MockAuthService },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  describe('Basic tests', () => {
    it('should create RegisterComponent', () => {
      const fixture = TestBed.createComponent(RegisterComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });

  describe('Text comparsions', () => {

    it('should check if "Sign up for Cobiro today" text is present', () => {
      expect(de.query(By.css('.container-fluid h1')).nativeElement.textContent).toEqual('Sign up for Cobiro today');
    });

    it('checks if "And Automate your Google Ads" text is present', () => {
      expect(de.query(By.css('.container-fluid h4')).nativeElement.textContent).toEqual('And Automate your Google Ads');
    });

    it('checks if mat-card-titles are present', () => {
      expect(de.query(By.css('.container-fluid mat-card-title')).nativeElement.textContent)
        .toEqual('Create a free Cobiro account below.');
      expect(de.query(By.css('.container-fluid mat-card-subtitle')).nativeElement.textContent)
        .toEqual('Already have an account? Login here.');
    });

    it('checks Terms and conditions text',()=>{
      expect(de.query(By.css('.terms')).nativeElement.textContent)
        .toEqual('By clicking this button, you agree to Cobiro’s Terms & Conditions');

    })

  });

  describe('Functional tests', () => {
    it('should turn "Get Started" button enabled', async () => {
      expect(de.query(By.css('mat-card-actions button')).nativeElement.disabled).toBeTruthy();
      await fillRegisterForm();
      expect(de.query(By.css('mat-card-actions button')).nativeElement.disabled).toBeFalsy();
    });

    it('navigate to "site/list" on submit button click', async () => {
      await fillRegisterForm();
      let navigateSpy = spyOn(router, 'navigate');
      de.query(By.css('mat-card-actions button')).nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      expect(navigateSpy).toHaveBeenCalledWith(['/site/list']);
    });
  });

  async function fillRegisterForm() {
    component.emailControl.setValue('test@test.com');
    component.passwordControl.setValue('Password01');
    component.firstNameControl.setValue('Andras');
    component.lastNameControl.setValue('Zollai');
    component.countryControl.setValue('HU');
    fixture.detectChanges();
    await fixture.whenStable();
  }

});
