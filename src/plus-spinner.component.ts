import {Component, OnInit, Input, OnDestroy, ElementRef} from '@angular/core';

@Component({
    selector: 'plus-spinner',
    templateUrl: './plus-spinner.component.html',
    styleUrls: ['./plus-spinner.component.scss']
})
export class PlusSpinnerComponent implements OnInit, OnDestroy {
    private currentTimeout: any;
    private isDelayedRunning: boolean = false;
    private selectedSpinner: string;
    private allowSpinner: string[];

    @Input()
    public spinner: string;
    @Input()
    public spinnerInBox: boolean;
    @Input()
    public spinnerContainerClass: string;
    @Input()
    public spinnerClass: string;
    @Input()
    public delay: number = 0;

    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
            return;
        }

        if (this.currentTimeout) {
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }

    constructor(private _elementRef : ElementRef) {
        this.allowSpinner = [
            'bounce',
            'plane',
            'stretch',
            'cube',
            'scaleout',
            'dot',
            'bouncedelay',
            'plus-circle',
            'cube-grid',
            'fading-circle',
            'folding-cube'
        ];
        this.spinnerInBox = true;
    }

    ngOnInit(): void {

        if(this.spinnerInBox && this._elementRef.nativeElement && this._elementRef.nativeElement.parentElement) {
            this._elementRef.nativeElement.parentElement.style.position = 'relative';
        }

        this.selectedSpinner = this.getSpinner(this.spinner);
    }

    ngOnDestroy(): any {
        this.cancelTimeout();
    }

    private cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }

    private getSpinner(spinner: string): string {
        if(spinner) {
            for(let item in this.allowSpinner) {
                if(spinner == this.allowSpinner[item]) {
                    return this.allowSpinner[item];
                }
            }
        }

        return this.allowSpinner[0];
    }
}