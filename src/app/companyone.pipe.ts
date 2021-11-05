import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './company';

@Pipe({
  name: 'companyone'
})
export class CompanyonePipe implements PipeTransform {

  transform(obj:Company): string {
   let output = obj.cname + ':' + obj.location;
   return output;
  }

}
