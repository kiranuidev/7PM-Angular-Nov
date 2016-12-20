import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[datepicker]'
})
export class DatepickerDirective {

  constructor(private el:ElementRef) { }
  @HostListener("click") onClick(){
    $(this.el.nativeElement).datepicker();
  }


}
