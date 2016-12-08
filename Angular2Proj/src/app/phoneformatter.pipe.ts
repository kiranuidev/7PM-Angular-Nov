import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformatter'
})
export class PhoneformatterPipe implements PipeTransform {

  transform(value: any, args1?: any): any {
    console.log(value);
    console.log(args1);
    if(args1=='US'){
      return "+1 "+ value.substring(0,3)+"-"+value.substring(3,6)+"-"+value.substring(6,10);
    }
    else if(args1=="IN"){
      return "+91 "+value.substring(0,5)+"-"+value.substring(5,10);
    }

    return null;
  }

}
