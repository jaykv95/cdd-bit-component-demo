/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

import { Component } from '@angular/core';

import { products } from './products';

export class ProductListComponent {

    constructor() {

        this.products = products;

    }

    /**

     * @return {?}

     */

    share() {

        window.alert('The product has been shared!');

    }

    /**

     * @return {?}

     */

    view() {

        window.alert('The product has been viewed!');

    }

}

ProductListComponent.decorators = [

    { type: Component, args: [{

                selector: 'app-product-list',

                template: "<h2>Products</h2>\r\n\r\n<div *ngFor=\"let product of products\">\r\n    <h3>\r\n        <a [title]=\"product.name + ' details'\">\r\n            {{ product.name }}\r\n        </a>\r\n    </h3>\r\n\r\n    <p *ngIf=\"product.description\">\r\n        Description: {{ product.description }}\r\n    </p>\r\n\r\n    <button (click)=\"share()\">\r\n        Share\r\n    </button>\r\n    <button (click)=\"view()\">\r\n        View\r\n    </button>\r\n</div>",

                styles: [".button,button{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;padding:8px 16px;border-radius:2px;font-size:14px;cursor:pointer;background-color:#68bb5d;color:#fff;border:none;margin:4px}.button:hover,button:hover{opacity:.8;font-weight:400}.button:disabled,button:disabled{opacity:.5;cursor:auto}"]

            }] }

];

if (false) {

    /** @type {?} */

    ProductListComponent.prototype.products;

}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvamF5a3Y5NS5hbmd1bGFyLXR1dG9yaWFsLnByb2R1Y3QtbGlzdC8iLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQU90QyxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTUUsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQVF0QixDQUFDOzs7O0lBTkMsS0FBSztRQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBSTtRQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFiRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZ2RBQTRDOzthQUU3Qzs7OztJQUVDLHdDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tICcuL3Byb2R1Y3RzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXByb2R1Y3QtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQge1xyXG4gIHByb2R1Y3RzID0gcHJvZHVjdHM7XHJcblxyXG4gIHNoYXJlKCkge1xyXG4gICAgd2luZG93LmFsZXJ0KCdUaGUgcHJvZHVjdCBoYXMgYmVlbiBzaGFyZWQhJyk7XHJcbiAgfVxyXG4gIHZpZXcoKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoJ1RoZSBwcm9kdWN0IGhhcyBiZWVuIHZpZXdlZCEnKTtcclxuIH1cclxufVxyXG5cclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0=