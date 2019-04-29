export class SiteElementModel {
  id: number;
  website: string;
  activated: boolean;
  languageCode: string;

  constructor(id: number, website: string, activated: boolean, languageCode: string) {
    this.id = id;
    this.website = website;
    this.activated = activated;
    this.languageCode = languageCode;
  }
}
