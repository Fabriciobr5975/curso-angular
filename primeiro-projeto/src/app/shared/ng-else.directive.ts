import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[ngElse]',
  standalone: false
})
export class NgElseDirective {

  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  ngElse = input(false);

  // @Input() set ngElse(condicao: boolean) {
  //   if (!condicao) {
  //     this.viewContainerRef.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainerRef.clear();
  //   }
  // }

  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private viewContainerRef: ViewContainerRef) {
  // }

  constructor() {
    effect(() => {
      if (!this.ngElse()) {
        if (this.viewContainerRef.length === 0) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      } else {
        this.viewContainerRef.clear();
      }
    })
  }
}
