import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import { DebugElement } from '@angular/core';
import { DetailsComponent } from './details.component';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from '../site-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from '../../validation/validation.module';
import { ListComponent } from '../list/list.component';
import { SiteService } from '../site.service';
import { MockSiteService } from '../mock-site.service';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let de: DebugElement;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SiteRoutingModule,
        MatTableModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,

        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ValidationModule,

        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ListComponent, DetailsComponent],
      providers: [
        { provide: SiteService, useClass: MockSiteService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it('should create DetailsComponent', () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('New site tests', () => {
    it('checks card title if it equals "New site"', () => {
      expect(de.query(By.css('mat-card-title')).nativeElement.textContent).toEqual('New site');
    });

    it('checks action button if it equals "Create"', () => {
      expect(de.query(By.css('mat-card-actions button')).nativeElement.textContent).toEqual('Create');
    });

    it('should turn "Create" button enabled', async () => {
      expect(de.query(By.css('mat-card-actions button')).nativeElement.disabled).toBeTruthy();
      await fillLoginForm();
      expect(de.query(By.css('mat-card-actions button')).nativeElement.disabled).toBeFalsy();
    });

    it('checks if on submit the app navigates back to the list', async () => {
      await fillLoginForm();
      let navigateSpy = spyOn(router, 'navigate');
      de.query(By.css('mat-card-actions button')).nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();
      expect(navigateSpy).toHaveBeenCalledWith(['/site/list']);
    });
  });

  describe('Modify site tests', () => {
    // set siteId to "1"
    beforeEach(() => {
      component.siteId = '1';
      fixture.detectChanges()
    });

    it('checks card title if it equals "Modify site"', () => {
      expect(de.query(By.css('mat-card-title')).nativeElement.textContent).toEqual('Modify site');
    });

    it('checks action button if it equals "Modify"', () => {
      expect(de.query(By.css('mat-card-actions button')).nativeElement.textContent).toEqual('Modify');
    });
  });

  async function fillLoginForm() {
    component.websiteControl.setValue('www.bme.hu');
    component.languageCodeControl.setValue('hu');
    fixture.detectChanges();
    await fixture.whenStable();
  }

});
