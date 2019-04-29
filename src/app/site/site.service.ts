import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOrUpdateFormModel } from './model/create-or-update-form.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreateOrUpdatePayloadModel } from './model/create-or-update-payload.model';
import { map } from 'rxjs/operators';
import { SiteElementModel } from './model/site-element.model';
import { MatSnackBar } from '@angular/material';
import { SiteResponseModel } from './model/site-response.model';

@Injectable()
export class SiteService {
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
    return this.http.get(`${environment.baseUrl}/site/${siteId}`)
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
    return this.http.get(`${environment.baseUrl}/site`)
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
    return this.http.patch(`${environment.baseUrl}/site/${siteId}`, body);
  }

  private create(formValue: CreateOrUpdateFormModel): Observable<any> {
    const body: CreateOrUpdatePayloadModel = {
      website: formValue.website,
      language_code: formValue.languageCode
    };
    return this.http.post(`${environment.baseUrl}/site`, body);
  }
}
