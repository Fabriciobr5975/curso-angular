import { Directive, HostBinding, HostListener, OnInit, input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: false
})
export class HighlightDirective implements OnInit {

  @HostListener("mouseenter") onMouseOver() {
    this.backgroundColor = this.highlightColor();
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.backgroundColor = this.defaultColor();
  }

  @HostBinding("style.backgroundColor") backgroundColor = "";

  readonly defaultColor = input("white", { alias: "highlight" });
  readonly highlightColor = input("yellow");

   ngOnInit(): void {
    this.backgroundColor = this.defaultColor();
  }
}
