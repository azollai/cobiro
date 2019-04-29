import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterFormModel } from './model/register-form.model';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoginFormModel } from './model/login-form.model';
import { RegisterPayloadModel } from './model/register-payload.model';
import { LoginResponseModel } from './model/login-response.model';

@Injectable()
export class MockAuthService {

  constructor(private http: HttpClient) { }

  register(formValue: RegisterFormModel): Observable<any> {
    const body: RegisterPayloadModel = {
      company: '',
      country_code: formValue.country,
      email: formValue.email,
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      mcc_id: '',
      password: formValue.password,
      source: '',
      website: ''
    };
    return of({
      'customer': {
        'id': 10632,
        'company_id': 10487,
        'active': true,
        'email': 'andrszollai@gmail.com',
        'group': null,
        'first_name': 'd',
        'last_name': 'd',
        'weekly_summary': true,
        'created_at': '2019-04-28T09:57:03+00:00',
        'updated_at': '2019-04-28T09:57:03+00:00',
        'source': '',
        'vat_number': null,
        'card_number': null,
        'country_code': 'BS',
        'google_accounts': []
      }, 'status': 'success'
    })
      .pipe(
        switchMap(() => this.login(body))
      );
  }

  login(formValue: LoginFormModel & RegisterPayloadModel): Observable<any> {
    const body: RegisterPayloadModel = {
      company: '',
      country_code: formValue.country_code || '',
      email: formValue.email,
      first_name: formValue.first_name || '',
      last_name: formValue.last_name || '',
      mcc_id: '',
      password: formValue.password,
      source: '',
      website: ''
    };
    return of({
      'token_type': 'Bearer',
      'expires_in': 2592000,
      'access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZiNzRhZmFiNWZjZjgxYjgyZmU3YTRmODY0ODBjM2Y4NWQyNGE1MWMyNTEyOWE4N2Q2NjQ0NDg0MGU4NzdjYzkyYjM2YjQxM2NkZGZkZDJhIn0.eyJhdWQiOiIzIiwianRpIjoiZmI3NGFmYWI1ZmNmODFiODJmZTdhNGY4NjQ4MGMzZjg1ZDI0YTUxYzI1MTI5YTg3ZDY2NDQ0ODQwZTg3N2NjOTJiMzZiNDEzY2RkZmRkMmEiLCJpYXQiOjE1NTY0NDU0MjQsIm5iZiI6MTU1NjQ0NTQyNCwiZXhwIjoxNTU5MDM3NDI0LCJzdWIiOiIxMDYyOCIsInNjb3BlcyI6W119.ArIU1xGOtEUh5EDX-FJIoUUV-mdemJJmlSypjjTC4IMW6selkb3fFMuYWxg3ok_ah_6fJY4YYr8C0HpAjIs6r_US9mDvvGo7anls48-isBzSp3uihnTE4Ugc1cjEev2XFGeGEBnwABa6IhxQnbGZm43NmBkZHgAzI0xHkXPLpnTGtj6IZ-c5Lq87-O42VzUoCMaZwbD7fNoLODtaskcYBNDUafSmPHEMf_5SMMsKDh7sFLRi5Bvt3J86hkTW-yBZm4QKfPnldwR7yXPyLYnDucG6n47dx4ePl86uQZXAsw0bM_5oTX5-0Q-PhCs4BONs9tDDmAxhAM8bbuUCNTVSbiQAoMpE9MImSgxTKxKsQAY8RIHjoOd9EJFdVGF-_AW5GLhdYUSv9_kleltQvgMpc1TSdWPJ17GFaV9bfohAOz4WlU0_wrXbUC49g9pdjfbfaAnDMY0BS3IyqBgVJ5og8CbPkqS9BpjS98s6ZPqY2nx7w9jZaPilu8xVauwroFspsmL3EHgzHdUpN5ARXDEUSE6r3acDYlm6fuWxUSBLzeTqLKAVstONb5p7x2XeEXoVBbvoY6TyxMHbgtcsklqrlZnyNy5e7DFthH7BKfWUqKkFHyeLIfT8NwnUsTFIZ-y6V4zrZUkxunzg5xCg-H5jfSSzxHF5LLXGaAz-opPvG-U',
      'refresh_token': 'def50200c0cccd611d2b2c9298a4bf37062a67f8ba7c92014afe78720712158d3d5b66d88754453d87373343880017ce3ca3bed03b4439a36542b3ea7f632ee47bb7e142ae590ed7d199115b15028283f82792f968c8056a9ce781f088e5971ab526d21c65e15ff40d8c6352f3c5652d8e60e986aca2d576c9c31458c9764d0d8ef1d7c8f6fde904ac1ca984394b6998cdc628e2ba5186024ec157d036d5fbf1f9633372dd9a0c3afdf186ece8cb58a5eeb9bfdb2d0932c99c14ac8fe2a6d4498f5797446160f9dc4ff1858ab0077d0c7e44022e58b19b11be8a78ea51fc3319db82a0f12840a6bb7d8fc08116b5da712333c929463310f797e03f435254c07a4935544b0328586922a67557fb4c25dce846468f92089ad0cadae653e8790e45626a57d068f4a7a396013f2f1d70c7134b439e183c969dd474ee30b4aac84783ce47bab5588796f07adce61c1c94fdb691764f69b07d0d767241242677fc22ff7fc879feb8',
      'customer': {
        'id': 10628,
        'company_id': 10483,
        'active': true,
        'email': 'andrszollai@gmail.com',
        'group': 'user',
        'first_name': 'Andr\u00e1s',
        'last_name': 'Zolla',
        'weekly_summary': true,
        'created_at': '2019-04-28T07:33:24+00:00',
        'updated_at': '2019-04-28T07:33:24+00:00',
        'source': '',
        'vat_number': null,
        'card_number': null,
        'country_code': 'HU',
        'google_accounts': [{
          'id': 6445317429,
          'name': 'Profile #46',
          'google_conversion_id': 'AW-852511269',
          'google_conversion_label': '_jOhCNnJjIMBEKWUwZYD',
          'currency_code': 'DKK'
        }, {
          'id': 6608117878,
          'name': 'Developer 7',
          'google_conversion_id': 'AW-849359665',
          'google_conversion_label': 'ibh2CLeqvYUBELHmgJUD',
          'currency_code': 'DKK'
        }, {
          'id': 4684241523,
          'name': 'Design Fields Test',
          'google_conversion_id': 'AW-868346479',
          'google_conversion_label': 'joZECNv2sokBEO_Uh54D',
          'currency_code': 'DKK'
        }, {
          'id': 4495560078,
          'name': 'Developer AI 4',
          'google_conversion_id': 'AW-847912434',
          'google_conversion_label': 'LgRXCJvgu4UBEPK7qJQD',
          'currency_code': 'DKK'
        }, {
          'id': 1793369364,
          'name': 'asdsad',
          'google_conversion_id': 'AW-850752393',
          'google_conversion_label': 'Epp6CMyYsoMBEInn1ZUD',
          'currency_code': 'DKK'
        }, {
          'id': 7358370458,
          'name': 'asdad',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 6328355080,
          'name': 'Developer AI 1',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 2147345064,
          'name': 'Profile #23',
          'google_conversion_id': 'AW-853865371',
          'google_conversion_label': 'epUHCIeOvoUBEJvnk5cD',
          'currency_code': 'DKK'
        }, {
          'id': 2897111552,
          'name': 'Dan Test (10)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 8401811947,
          'name': 'Developer 3',
          'google_conversion_id': 'AW-849292464',
          'google_conversion_label': 'PtqSCIPYlY8BELDZ_JQD',
          'currency_code': 'DKK'
        }, {
          'id': 7686592089,
          'name': 'Ibsen Conglomerate',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 7237078695,
          'name': 'Developer 4',
          'google_conversion_id': 'AW-849358195',
          'google_conversion_label': 'YCYUCLulvIwBEPPagJUD',
          'currency_code': 'DKK'
        }, {
          'id': 6585645199,
          'name': 'Profile #14',
          'google_conversion_id': 'AW-854157650',
          'google_conversion_label': 'KUgcCKrqrowBENLSpZcD',
          'currency_code': 'DKK'
        }, {
          'id': 8798407498,
          'name': 'Aleks N2',
          'google_conversion_id': 'AW-775577400',
          'google_conversion_label': 'APboCOOmx5cBELi-6fEC',
          'currency_code': 'DKK'
        }, {
          'id': 6729409641,
          'name': 'a (1)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 2617120811,
          'name': 'Nicolaj#1',
          'google_conversion_id': 'AW-779263788',
          'google_conversion_label': 'FIqWCOKS-I4BEKy-yvMC',
          'currency_code': 'DKK'
        }, {
          'id': 7676119207,
          'name': 'Tim Test (Organic Shop)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 9716514384,
          'name': 'adasdasd',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 4389071364,
          'name': 'for use with integration tests',
          'google_conversion_id': 'AW-847617414',
          'google_conversion_label': 'xE-eCLa684UBEIa7lpQD',
          'currency_code': 'DKK'
        }, {
          'id': 6380141650,
          'name': 'PokalForum Test',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 7170578896,
          'name': 'Aleks Test #1',
          'google_conversion_id': 'AW-778769438',
          'google_conversion_label': 'mV2fCLuczI8BEJ6orPMC',
          'currency_code': 'DKK'
        }, {
          'id': 9633819495,
          'name': 'Dan Test (10)',
          'google_conversion_id': 'AW-847476820',
          'google_conversion_label': 'h6QnCICQgY8BENTwjZQD',
          'currency_code': 'DKK'
        }, {
          'id': 2520827725,
          'name': '\u00d8kologisk Supermarked (3)',
          'google_conversion_id': 'AW-849357661',
          'google_conversion_label': 'aY8wCK3iyoUBEN3WgJUD',
          'currency_code': 'DKK'
        }, {
          'id': 2498190464,
          'name': 'Vlad MCC Create Test',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 2153474147,
          'name': 'TEST Account #593fd61bc6758',
          'google_conversion_id': 'AW-849357941',
          'google_conversion_label': 'o4PFCMSQ44oBEPXYgJUD',
          'currency_code': 'EUR'
        }, {
          'id': 4231615068,
          'name': '\u00d8kologisk Supermarked (3)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 1019922531,
          'name': 'asdsad',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 9753146094,
          'name': 'Developer 1',
          'google_conversion_id': 'AW-849358666',
          'google_conversion_label': 'kcIXCJuWj48BEMregJUD',
          'currency_code': 'DKK'
        }, {
          'id': 3608255635,
          'name': '\u00d8kologisk Supermarked (3)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 5894298423,
          'name': 'PricePlanet Finland',
          'google_conversion_id': 'AW-881053326',
          'google_conversion_label': 'RnGzCPTGvYUBEI6dj6QD',
          'currency_code': 'DKK'
        }, {
          'id': 2326507076,
          'name': '\u00d8kologisk Supermarked (3)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 8875853782,
          'name': 'Tim Test (Design Innovation)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 5500721503,
          'name': 'Mathias Test',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 8081680033,
          'name': 'Cobiro for Sites',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 9402993110,
          'name': 'Webshop #1',
          'google_conversion_id': 'AW-927035045',
          'google_conversion_label': 'x4feCJinh48BEKXdhboD',
          'currency_code': 'DKK'
        }, {
          'id': 3975347262,
          'name': 'Laudrup Vin Test',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 7863070960,
          'name': 'Profile #47',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 2369636694,
          'name': '\u00d8kologisk Supermarked (3)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 8881660382,
          'name': 'a (1)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 6688312335,
          'name': 'Developer 6',
          'google_conversion_id': 'AW-849327652',
          'google_conversion_label': '9lf7CMLnlY8BEKTs_pQD',
          'currency_code': 'DKK'
        }, {
          'id': 3324849966,
          'name': 'Test unlink 1',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 1061306386,
          'name': '\u00d8kologisk Supermarked (3)',
          'google_conversion_id': 'AW-849088920',
          'google_conversion_label': 'ZmzpCKXjwpYBEJij8JQD',
          'currency_code': 'DKK'
        }, {
          'id': 1005390898,
          'name': 'dyreklinikken-ryesgade.dk',
          'google_conversion_id': 'AW-849087885',
          'google_conversion_label': 'LXLaCIn6pYUBEI2b8JQD',
          'currency_code': 'DKK'
        }, {
          'id': 1099411495,
          'name': 'Sandbox test',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 4752847358,
          'name': 'Temp Test',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 3924638792,
          'name': 'Tim Test (Svejsevaerk.dk)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 5371831988,
          'name': 'Promo Matelas Test',
          'google_conversion_id': 'AW-867312120',
          'google_conversion_label': 'MlZyCIHqkYwBEPjDyJ0D',
          'currency_code': 'EUR'
        }, {
          'id': 3727409170,
          'name': '\u00d8kologisk Supermarked (3)',
          'google_conversion_id': 'AW-849285948',
          'google_conversion_label': 'XJz2CJme-nEQvKb8lAM',
          'currency_code': 'DKK'
        }, {
          'id': 6365416137,
          'name': 'a (1)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 9410597293,
          'name': 'Tim test (strikkes.dk)',
          'google_conversion_id': null,
          'google_conversion_label': null,
          'currency_code': 'DKK'
        }, {
          'id': 9578513039,
          'name': 'Developer 2',
          'google_conversion_id': 'AW-849323820',
          'google_conversion_label': 'bVAmCJC92YoBEKzO_pQD',
          'currency_code': 'DKK'
        }, {
          'id': 5625163394,
          'name': 'Developer 8',
          'google_conversion_id': 'AW-849326044',
          'google_conversion_label': 'cJN8CL38-o4BENzf_pQD',
          'currency_code': 'DKK'
        }, {
          'id': 6770805790,
          'name': 'Developer 5',
          'google_conversion_id': 'AW-849346133',
          'google_conversion_label': 'zLYQCLqpsYMBENX8_5QD',
          'currency_code': 'DKK'
        }, {
          'id': 1263123601,
          'name': 'Tim Test (leget\u00f8jsexperten)',
          'google_conversion_id': 'AW-846815330',
          'google_conversion_label': 'EQz9CJD7vYUBEOLA5ZMD',
          'currency_code': 'DKK'
        }]
      }
    })
      .pipe(
        tap((result: LoginResponseModel) =>
          result.access_token ?
            localStorage.setItem('token', `${result.token_type} ${result.access_token}`) :
            () => {}
        )
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
