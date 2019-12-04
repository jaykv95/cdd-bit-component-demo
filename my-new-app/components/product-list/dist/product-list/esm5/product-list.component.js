/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

import { Component } from '@angular/core';

import { products } from './products';

var ProductListComponent = /** @class */ (function () {

    function ProductListComponent() {

        this.products = products;

    }

    /**

     * @return {?}

     */

    ProductListComponent.prototype.share = /**

     * @return {?}

     */

    function () {

        window.alert('The product has been shared!');

    };

    /**

     * @return {?}

     */

    ProductListComponent.prototype.view = /**

     * @return {?}

     */

    function () {

        window.alert('The product has been viewed!');

    };

    ProductListComponent.decorators = [

        { type: Component, args: [{

                    selector: 'app-product-list',

                    template: "<h2>Products</h2>\r\n\r\n<div *ngFor=\"let product of products\">\r\n    <h3>\r\n        <a [title]=\"product.name + ' details'\">\r\n            {{ product.name }}\r\n        </a>\r\n    </h3>\r\n\r\n    <p *ngIf=\"product.description\">\r\n        Description: {{ product.description }}\r\n    </p>\r\n\r\n    <button (click)=\"share()\">\r\n        Share\r\n    </button>\r\n    <button (click)=\"view()\">\r\n        View\r\n    </button>\r\n</div>",

                    styles: [".button,button{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;padding:8px 16px;border-radius:2px;font-size:14px;cursor:pointer;background-color:#68bb5d;color:#fff;border:none;margin:4px}.button:hover,button:hover{opacity:.8;font-weight:400}.button:disabled,button:disabled{opacity:.5;cursor:auto}"]

                }] }

    ];

    return ProductListComponent;

}());

export { ProductListComponent };

if (false) {

    /** @type {?} */

    ProductListComponent.prototype.products;

}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvamF5a3Y5NS5hbmd1bGFyLXR1dG9yaWFsLnByb2R1Y3QtbGlzdC8iLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV0QztJQUFBO1FBTUUsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQVF0QixDQUFDOzs7O0lBTkMsb0NBQUs7OztJQUFMO1FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxtQ0FBSTs7O0lBQUo7UUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBYkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGdkQUE0Qzs7aUJBRTdDOztJQVVELDJCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVFksb0JBQW9COzs7SUFDL0Isd0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gJy4vcHJvZHVjdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZHVjdC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCB7XHJcbiAgcHJvZHVjdHMgPSBwcm9kdWN0cztcclxuXHJcbiAgc2hhcmUoKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoJ1RoZSBwcm9kdWN0IGhhcyBiZWVuIHNoYXJlZCEnKTtcclxuICB9XHJcbiAgdmlldygpIHtcclxuICAgIHdpbmRvdy5hbGVydCgnVGhlIHByb2R1Y3QgaGFzIGJlZW4gdmlld2VkIScpO1xyXG4gfVxyXG59XHJcblxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ==