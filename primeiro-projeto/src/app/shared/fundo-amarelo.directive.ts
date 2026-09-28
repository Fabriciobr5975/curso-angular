import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]',
  standalone: false,
})
export class FundoAmareloDirective {

  private elementRef: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  constructor(/* private elementRef: ElementRef, private renderer: Renderer2 */) {
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "yellow");
   }

}
