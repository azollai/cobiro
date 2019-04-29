import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SiteService } from '../site.service';
import { SiteElementModel } from '../model/site-element.model';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.sass']
})
export class DetailsComponent implements OnInit {
  siteId: string;
  form: FormGroup;
  websiteControl = new FormControl('', Validators.required);
  languageCodeControl = new FormControl('', Validators.required);

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private matSnackbar: MatSnackBar,
              private siteService: SiteService) { }

  ngOnInit() {
    this.initForm();
    this.siteId = this.route.snapshot.params['id'];
    if (this.siteId) {
      this.getSite();
    }
  }

  onSubmit() {
    this.siteService.createOrUpdate(this.form.value, this.siteId)
        .subscribe(() => {
          this.router.navigate(['/site/list']);
          this.matSnackbar.open('Save was successful', null, { duration: 2000 });
        }, () => {
          this.matSnackbar.open('Something went wrong', null, { duration: 2000 });
        });
  }

  private initForm() {
    this.form = new FormGroup({
      website: this.websiteControl,
      languageCode: this.languageCodeControl
    });
  }

  private getSite() {
    this.siteService.get(this.siteId)
        .subscribe((site: SiteElementModel) => this.form.patchValue(site), () => {
          this.router.navigate(['/site/list']);
          this.matSnackbar.open('Something went wrong', null, { duration: 2000 });
        });
  }
}
