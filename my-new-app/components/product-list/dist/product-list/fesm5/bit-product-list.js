import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

/** @type {?} */

var products = [

    {

        name: 'Phone XL',

        price: 799,

        description: 'A large phone with one of the best screens'

    },

    {

        name: 'Phone Mini',

        price: 699,

        description: 'A great phone with one of the best cameras'

    },

    {

        name: 'Phone Standard',

        price: 299,

        description: ''

    }

];

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

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

    ProductListComponent.decorators = [

        { type: Component, args: [{

                    selector: 'app-product-list',

                    template: "<h2>Products</h2>\r\n\r\n<div *ngFor=\"let product of products\">\r\n    <h3>\r\n        <a [title]=\"product.name + ' details'\">\r\n            {{ product.name }}\r\n        </a>\r\n    </h3>\r\n\r\n    <p *ngIf=\"product.description\">\r\n        Description: {{ product.description }}\r\n    </p>\r\n\r\n    <button (click)=\"share()\">\r\n        Share\r\n    </button>\r\n</div>",

                    styles: [".button,button{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;padding:8px 16px;border-radius:2px;font-size:14px;cursor:pointer;background-color:#68bb5d;color:#fff;border:none}.button:hover,button:hover{opacity:.8;font-weight:400}.button:disabled,button:disabled{opacity:.5;cursor:auto}"]

                }] }

    ];

    return ProductListComponent;

}());

if (false) {

    /** @type {?} */

    ProductListComponent.prototype.products;

}

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

var ProductListModule = /** @class */ (function () {

    function ProductListModule() {

    }

    ProductListModule.decorators = [

        { type: NgModule, args: [{

                    declarations: [

                        ProductListComponent

                    ],

                    imports: [

                        CommonModule

                    ],

                    exports: [

                        ProductListComponent

                    ]

                },] }

    ];

    return ProductListModule;

}());

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

/**

 * @fileoverview added by tsickle

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

export { ProductListModule, ProductListComponent as ɵa };
//# sourceMappingURL=bit-product-list.js.map
