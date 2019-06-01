import { Directive } from "@angular/core";
import { ElementRef, Input, Output, EventEmitter } from "@angular/core"

@Directive({
    selector: '[infinite-scroll]',
    host: {
        '(scroll)': 'onScroll($event)'
    }
})

export class InfiniteScrollDirective {
    private element: any;
    @Output() OnScrollMethod = new EventEmitter();

    constructor(private el: ElementRef) {
        this.element = this.el.nativeElement;
    }

    onScroll($event) {
        if (this.element.scrollTop + this.element.clietHeight >= this.element.scrollHeight) {
            this.OnScrollMethod.emit();
        }
    }
}