import { Component, OnInit } from '@angular/core';
import { TProcessOption } from "@smart-ui/ng-components";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  readonly apiBaseUrl = "https://smart-ui.dev.totvs.app/api";
  readonly layoutApi = 'LayoutPreferences';
  readonly serviceApi = 'companies';
  readonly schemaApi = 'schema/CompanyDto';
  readonly filterApi = 'Filters'; 

  /**
   * Build processes configuration here
   */
  processOptions: TProcessOption[] = [];

}
