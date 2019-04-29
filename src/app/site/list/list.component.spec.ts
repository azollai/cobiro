import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from '../site-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from '../../validation/validation.module';
import { DetailsComponent } from '../details/details.component';
import { SiteService } from '../site.service';
import { MockSiteService } from '../mock-site.service';
import { ListComponent } from './list.component';

const sites = [{
  'id': 8235,
  'is_shop': false,
  'activated': false,
  'company_id': 10509,
  'website': 'http:\/\/www.google.com\/',
  'identifier': '15725506-6057-40f9-ac4a-7cb2a1a428c8',
  'max_cpc': 0,
  'daily_budget': 0,
  'currency': null,
  'language_code': 'da',
  'created_at': '2019-04-29T12:22:35+00:00',
  'updated_at': '2019-04-29T12:22:35+00:00',
  'deleted_at': null,
  'current_event': 'website',
  'platform': 'other',
  'has_search_campaigns': false,
  'has_google_shopping': false,
  'brand': null,
  'brand_search': false,
  'bid_generic': false,
  'email': null,
  'cpc_recommended': 0
}, {
  'id': 8236,
  'is_shop': false,
  'activated': false,
  'company_id': 10509,
  'website': 'https:\/\/www.google.com\/gmail\/',
  'identifier': 'f9f2b5cc-dd6c-474d-bd9a-4f3b1525f25f',
  'max_cpc': 0,
  'daily_budget': 0,
  'currency': null,
  'language_code': 'hu',
  'created_at': '2019-04-29T12:37:20+00:00',
  'updated_at': '2019-04-29T12:37:20+00:00',
  'deleted_at': null,
  'current_event': 'website',
  'platform': 'other',
  'has_search_campaigns': false,
  'has_google_shopping': false,
  'brand': null,
  'brand_search': false,
  'bid_generic': false,
  'email': null,
  'cpc_recommended': 0
}, {
  'id': 8237,
  'is_shop': false,
  'activated': false,
  'company_id': 10509,
  'website': 'http:\/\/www.vik.bme.hu',
  'identifier': '8a99714f-0113-47a4-abe1-9023379fce14',
  'max_cpc': 0,
  'daily_budget': 0,
  'currency': null,
  'language_code': 'hu',
  'created_at': '2019-04-29T13:05:10+00:00',
  'updated_at': '2019-04-29T13:14:10+00:00',
  'deleted_at': null,
  'current_event': 'website',
  'platform': 'other',
  'has_search_campaigns': false,
  'has_google_shopping': false,
  'brand': null,
  'brand_search': false,
  'bid_generic': false,
  'email': null,
  'cpc_recommended': 0
}];

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de: DebugElement;

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
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create ListComponent', () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('checks card title if it equals "My sites"', () => {
    expect(de.query(By.css('mat-card-title')).nativeElement.textContent).toEqual('My sites');
  });

  it('checks action button if it contains "Add new site"', () => {
    expect(de.query(By.css('mat-card-actions button')).nativeElement.textContent).toContain('Add new site');
  });

  it('checks if table headers have the right content', () => {
    const expectedHeaderValues = ['No.', 'Website', 'Activated', 'Language Code'];
    de.queryAll(By.css('table th')).forEach((headerValue: DebugElement, index: number) => {
      expect(headerValue.nativeElement.textContent).toContain(expectedHeaderValues[index]);
    });
  });

  it('checks if table shows the right data, that mockService provides', () => {
    de.queryAll(By.css('table tbody tr')).forEach((row: DebugElement, rowIndex: number) => {
      expect(row.query(By.css('mat-column-position')).nativeElement.textContent).toEqual(`${rowIndex}`);
      expect(row.query(By.css('mat-column-website')).nativeElement.textContent).toEqual(sites[rowIndex].website);
      expect(row.query(By.css('mat-column-activated')).nativeElement.textContent).toEqual(sites[rowIndex].activated);
      expect(row.query(By.css('mat-column-languageCode')).nativeElement.textContent)
        .toEqual(sites[rowIndex].language_code);
    });
  });

});
