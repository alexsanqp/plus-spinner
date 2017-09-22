# plus-spinner [![NPM version](https://badge.fury.io/js/plus-spinner.svg)](https://npmjs.org/package/plus-spinner) [![Build Status](https://travis-ci.org/alexsanqp/plus-spinner.svg?branch=master)](https://travis-ci.org/alexsanqp/plus-spinner)

> A spinner loading for Angular 4.

## Demo

> [Demo spinners](http://tobiasahlin.com/spinkit/)

## Installation

```sh
$ npm install --save plus-spinner
```

## Usage

Import the `PlusSpinnerModule` in your module:

```typescript
import { NgModule } from '@angular/core';
//...
import { PlusSpinnerModule } from "plus-spinner";

@NgModule({
  imports: [
    //...
    PlusSpinnerModule.forRoot()
  ],
})
export class AppModule { }
```

How to use...

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    //...
})
export class PlusComponent implements OnInit {
    //...
    public isRunning: boolean = false;

    constructor(private plusService: PlusService) { }

    ngOnInit() { }

    public loadFakeData() {
        //Start showing plus-spinner
        this.isRunning = true;
        this.plusService.getFakeData()
            .subscribe(res => {
                //Hide plus-spinner
                this.isRunning = false;
                //...
            }, err => {
                //Hide plus-spinner
                this.isRunning = false;
                //...
            });
    }
}
```

## Input parameters

| Input | Required | Details |
| ---- | ---- | ---- |
| isRunning | Required | Boolean, determines when will show plus-spinner. |
| spinner   | Optional | String, `Default: bounce`, [Types](#types-spinner) of plus-spinner  |
| spinnerInBox | Optional | Boolean, `Default: true` plus-spinner set parent position to `relative`  |
| spinnerContainerClass | Optional | String, Css class for plus-spinner container |
| spinnerClass | Optional | String, Css class for plus-spinner box |
| delay | Optional | Number, `Default: 0`, Delay before show plus-spinner |

## Types spinner 
```js
let allowSpinner = [
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
```

## License

ISC © [Alexander Kryhtenko](https://github.com/alexsanqp)
