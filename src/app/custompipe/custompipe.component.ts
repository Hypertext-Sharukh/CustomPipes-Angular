import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  compName:string = "ABCD LTD";
	compLocation:string = "Varanasi";
  company = new Company(this.compName, this.compLocation);
  


  constructor() { }

  ngOnInit(): void {
  }

  updateCompany() {
    this.company.cname = this.compName;
    this.company.location = this.compLocation;
 }

 createCompany() {
  this.company = new Company(this.compName, this.compLocation);   
}

}
