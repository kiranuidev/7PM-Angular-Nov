
import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }
@Input() color:string;

 @HostListener("mouseenter") onMouseEnter(){
   this.highlightColor("red");
 }
@HostListener("mouseleave") onMouseLeave(){
  this.highlightColor("green");
 }
highlightColor(color:string){
  this.el.nativeElement.style.backgroundColor=color;
}

}
