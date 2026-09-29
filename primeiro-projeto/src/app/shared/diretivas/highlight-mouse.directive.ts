import { Directive, HostListener, ElementRef, Renderer2, inject, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
  standalone: false
})
export class HighlightMouseDirective {

  // private elementRef: ElementRef = inject(ElementRef);
  // private renderer: Renderer2 = inject(Renderer2);

  @HostListener("mouseenter") onMouseOver() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "yellow");
    this.backgroundColor = 'yellow';
  }

  @HostListener("mouseleave") onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "white");
    this.backgroundColor = "white";
  }

  private backgroundColor = "";

  // @HostBinding("style.backgroundColor") backgroundColor = "";
  @HostBinding("style.backgroundColor") get setColor() {

    return this.backgroundColor;
  }

}
