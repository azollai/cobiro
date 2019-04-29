import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOrUpdateFormModel } from './model/create-or-update-form.model';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreateOrUpdatePayloadModel } from './model/create-or-update-payload.model';
import { map } from 'rxjs/operators';
import { SiteElementModel } from './model/site-element.model';
import { MatSnackBar } from '@angular/material';
import { SiteResponseModel } from './model/site-response.model';

@Injectable()
export class MockSiteService {
  constructor(private http: HttpClient,
              private matSnackbar: MatSnackBar) {}

  createOrUpdate(formValue: CreateOrUpdateFormModel, siteId: string): Observable<any> {
    if (siteId) {
      return this.update(formValue, siteId);
    } else {
      return this.create(formValue);
    }
  }

  get(siteId: string): Observable<SiteElementModel> {
    return of({
      'site': {
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
      }, 'status': 'success'
    })
      .pipe(
        map((response: { status: string; site: SiteResponseModel }) => {
          if (response.status === 'success') {
            return response.site;
          } else {
            this.matSnackbar.open('Something went wrong', null, { duration: 2000 });
            return [];
          }
        }),
        map((site: SiteResponseModel) => new SiteElementModel(site.id, site.website, site.activated, site.language_code))
      );
  }

  getAll(): Observable<SiteElementModel[]> {
    return of({
      'sites': [{
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
      }],
      'status': 'success',
      'meta': {
        'pagination': {
          'total': 3,
          'count': 3,
          'per_page': 25,
          'current_page': 1,
          'total_pages': 1,
          'links': {}
        }
      }
    })
      .pipe(
        map((response: { status: string; sites: SiteResponseModel[] }) => {
          if (response.status === 'success') {
            return response.sites;
          } else {
            this.matSnackbar.open('Something went wrong', null, { duration: 2000 });
            return [];
          }
        }),
        map((sites: SiteResponseModel[]) => sites.map((site: SiteResponseModel) =>
          new SiteElementModel(site.id, site.website, site.activated, site.language_code)))
      );
  }

  private update(formValue: CreateOrUpdateFormModel, siteId: string): Observable<any> {
    const body: CreateOrUpdatePayloadModel = {
      website: formValue.website,
      language_code: formValue.languageCode
    };
    return of();
  }

  private create(formValue: CreateOrUpdateFormModel): Observable<any> {
    const body: CreateOrUpdatePayloadModel = {
      website: formValue.website,
      language_code: formValue.languageCode
    };
    return of({});
  }
}
