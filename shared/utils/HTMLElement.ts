'use strict';

export const removeClass = function (el: HTMLElement, clzz:string):HTMLElement {
    let newClassName:string = "";
    let i:number;
    let classes:Array<string> = el.className.split(" ");
    for (i = 0; i < classes.length; i++) {
        if (classes[i] !== clzz) {
            newClassName += classes[i] + " ";
        }
    }
    el.className = newClassName;
    return el;
}

export const hasClass = function (el: HTMLElement, clzz: string): boolean {
    return (' ' + el.className + ' ').indexOf(' ' + clzz + ' ') > -1;
};

export const addClass = function(el: HTMLElement, add:string): HTMLElement {
    if(hasClass(el, add)) return el;
    el.className += ' ' + add;
    return el;
}