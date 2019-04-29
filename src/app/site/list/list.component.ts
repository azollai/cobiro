import { Component, OnInit } from '@angular/core';
import { SiteElementModel } from '../model/site-element.model';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.sass']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'website', 'activated', 'languageCode', 'edit'];
  dataSource: SiteElementModel[] = [];

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.getSites();
  }

  private getSites() {
    this.siteService.getAll()
        .subscribe((sites: SiteElementModel[]) => {
          this.dataSource = sites
        });
  }
}
