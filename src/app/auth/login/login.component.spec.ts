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
import { LoginComponent } from './login.component';
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

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
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
        // { provide: Router, useValue: router }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  describe('Basic tests', () => {
    it('should create LoginComponent', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });

  describe('Text comparsions', () => {

    it('should check if "Welcome back" text is present', () => {
      expect(de.query(By.css('.container-fluid h1')).nativeElement.textContent).toEqual('Welcome back');
    });

    it('checks if "Sign in to your account" text is present', () => {
      expect(de.query(By.css('.container-fluid h4')).nativeElement.textContent).toEqual('Sign in to your account');
    });

    it('checks if "Sign in to your account" text is present', () => {
      expect(de.query(By.css('.container-fluid p')).nativeElement.textContent.trim())
        .toEqual('Over 25,000 online stores use Cobiro - a free tool for Google Ads® - text and shopping ads. It’s an easy-to-use, intelligent advertising platform fully automating keyword planning and bidding.');
    });

    it('checks if mat-card-titles are present', () => {
      expect(de.query(By.css('.container-fluid mat-card-title')).nativeElement.textContent)
        .toEqual('Login to your Cobiro account below');
      expect(de.query(By.css('.container-fluid mat-card-subtitle')).nativeElement.textContent)
        .toEqual('Don\'t have an account? Sign up here.');
    });

  });

  describe('Functional tests', () => {
    it('should turn "Continue" button enabled', async () => {
      expect(de.query(By.css('mat-card-actions button')).nativeElement.disabled).toBeTruthy();
      await fillLoginForm();
      expect(de.query(By.css('mat-card-actions button')).nativeElement.disabled).toBeFalsy();
    });

    it('navigate to "site/list" on submit button click', async () => {
      await fillLoginForm();
      let navigateSpy = spyOn(router, 'navigate');
      de.query(By.css('mat-card-actions button')).nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      expect(navigateSpy).toHaveBeenCalledWith(['/site/list']);
    });
  });

  async function fillLoginForm() {
    component.emailControl.setValue('test@test.com');
    component.passwordControl.setValue('Password01');
    fixture.detectChanges();
    await fixture.whenStable();
  }

});
