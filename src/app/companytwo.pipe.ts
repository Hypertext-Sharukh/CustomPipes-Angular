import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './company';

@Pipe({
  name: 'companytwo' , 
  pure:false
})
export class CompanytwoPipe implements PipeTransform {

  transform(obj:Company): string {

    let output = obj.cname + ':' + obj.location;
    return output;
  }

}
