(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/altvalue.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/altvalue.pipe.ts ***!
  \**********************************/
/*! exports provided: AltvaluePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltvaluePipe", function() { return AltvaluePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AltvaluePipe {
    transform(value, ...args) {
        let altValue = args[0];
        let suffix = args[1] || '.jpg'; //default value
        if (value)
            return value;
        else
            return altValue + suffix;
    }
}
AltvaluePipe.ɵfac = function AltvaluePipe_Factory(t) { return new (t || AltvaluePipe)(); };
AltvaluePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "altvalue", type: AltvaluePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AltvaluePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'altvalue'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _books_web_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books-web-app.component */ "./src/app/books-web-app.component.ts");
/* harmony import */ var _books_web_header_component_books_web_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books-web-header-component/books-web-header.component */ "./src/app/books-web-header-component/books-web-header.component.ts");
/* harmony import */ var _books_web_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./books-web-footer.component */ "./src/app/books-web-footer.component.ts");
/* harmony import */ var _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-info/book-info.component */ "./src/app/book-info/book-info.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _ca_range_ca_range_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ca-range/ca-range.component */ "./src/app/ca-range/ca-range.component.ts");
/* harmony import */ var _ca_rating_ca_rating_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ca-rating/ca-rating.component */ "./src/app/ca-rating/ca-rating.component.ts");
/* harmony import */ var _altvalue_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./altvalue.pipe */ "./src/app/altvalue.pipe.ts");
/* harmony import */ var _prefix_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prefix.pipe */ "./src/app/prefix.pipe.ts");
/* harmony import */ var _ratingadvise_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ratingadvise.pipe */ "./src/app/ratingadvise.pipe.ts");
/* harmony import */ var _book_composite_book_composite_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./book-composite/book-composite.component */ "./src/app/book-composite/book-composite.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _ca_not_found_ca_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ca-not-found/ca-not-found.component */ "./src/app/ca-not-found/ca-not-found.component.ts");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/book-create/book-create.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _ca_highlight_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ca-highlight.directive */ "./src/app/ca-highlight.directive.ts");
/* harmony import */ var _ca_rainbow_color_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ca-rainbow-color.directive */ "./src/app/ca-rainbow-color.directive.ts");
/* harmony import */ var _service_simple_book_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/simple-book-service */ "./src/app/service/simple-book-service.ts");
/* harmony import */ var _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-management/user-management.module */ "./src/app/user-management/user-management.module.ts");
/* harmony import */ var _service_http_book_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/http-book-service */ "./src/app/service/http-book-service.ts");
//imports from angular framework





//imports from my own code











//get the route details











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [//startup compoent for the module
        _books_web_app_component__WEBPACK_IMPORTED_MODULE_5__["BooksWebAppComponent"] //only root component should be in bootstrap
    ] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _service_simple_book_service__WEBPACK_IMPORTED_MODULE_22__["SimpleBookService"],
        _service_http_book_service__WEBPACK_IMPORTED_MODULE_24__["HttpBookService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            //responsible for angular Single Page Routing design
            //You must load the RouterModule and supply the route information to be used
            _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_23__["UserManagementModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_16__["appRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [//list all the components and other elements related to current module
        _books_web_app_component__WEBPACK_IMPORTED_MODULE_5__["BooksWebAppComponent"],
        _books_web_header_component_books_web_header_component__WEBPACK_IMPORTED_MODULE_6__["BooksWebHeaderComponent"],
        _books_web_footer_component__WEBPACK_IMPORTED_MODULE_7__["BooksWebFooterComponent"],
        _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_8__["BookInfoComponent"],
        _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_9__["BookListComponent"],
        _ca_range_ca_range_component__WEBPACK_IMPORTED_MODULE_10__["CaRangeComponent"],
        _ca_rating_ca_rating_component__WEBPACK_IMPORTED_MODULE_11__["CaRatingComponent"],
        _altvalue_pipe__WEBPACK_IMPORTED_MODULE_12__["AltvaluePipe"],
        _prefix_pipe__WEBPACK_IMPORTED_MODULE_13__["PrefixPipe"],
        _ratingadvise_pipe__WEBPACK_IMPORTED_MODULE_14__["RatingadvisePipe"],
        _book_composite_book_composite_component__WEBPACK_IMPORTED_MODULE_15__["BookCompositeComponent"],
        _ca_not_found_ca_not_found_component__WEBPACK_IMPORTED_MODULE_17__["CaNotFoundComponent"],
        _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_18__["BookCreateComponent"],
        _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_19__["BookDetailsComponent"],
        _ca_highlight_directive__WEBPACK_IMPORTED_MODULE_20__["CaHighlightDirective"],
        _ca_rainbow_color_directive__WEBPACK_IMPORTED_MODULE_21__["CaRainbowColorDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        //responsible for angular Single Page Routing design
        //You must load the RouterModule and supply the route information to be used
        _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_23__["UserManagementModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    //responsible for angular Single Page Routing design
                    //You must load the RouterModule and supply the route information to be used
                    _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_23__["UserManagementModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_16__["appRoutes"])
                ],
                declarations: [
                    _books_web_app_component__WEBPACK_IMPORTED_MODULE_5__["BooksWebAppComponent"],
                    _books_web_header_component_books_web_header_component__WEBPACK_IMPORTED_MODULE_6__["BooksWebHeaderComponent"],
                    _books_web_footer_component__WEBPACK_IMPORTED_MODULE_7__["BooksWebFooterComponent"],
                    _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_8__["BookInfoComponent"],
                    _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_9__["BookListComponent"],
                    _ca_range_ca_range_component__WEBPACK_IMPORTED_MODULE_10__["CaRangeComponent"],
                    _ca_rating_ca_rating_component__WEBPACK_IMPORTED_MODULE_11__["CaRatingComponent"],
                    _altvalue_pipe__WEBPACK_IMPORTED_MODULE_12__["AltvaluePipe"],
                    _prefix_pipe__WEBPACK_IMPORTED_MODULE_13__["PrefixPipe"],
                    _ratingadvise_pipe__WEBPACK_IMPORTED_MODULE_14__["RatingadvisePipe"],
                    _book_composite_book_composite_component__WEBPACK_IMPORTED_MODULE_15__["BookCompositeComponent"],
                    _ca_not_found_ca_not_found_component__WEBPACK_IMPORTED_MODULE_17__["CaNotFoundComponent"],
                    _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_18__["BookCreateComponent"],
                    _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_19__["BookDetailsComponent"],
                    _ca_highlight_directive__WEBPACK_IMPORTED_MODULE_20__["CaHighlightDirective"],
                    _ca_rainbow_color_directive__WEBPACK_IMPORTED_MODULE_21__["CaRainbowColorDirective"]
                ],
                //set of services for dependency injection
                providers: [
                    _service_simple_book_service__WEBPACK_IMPORTED_MODULE_22__["SimpleBookService"],
                    _service_http_book_service__WEBPACK_IMPORTED_MODULE_24__["HttpBookService"]
                ],
                bootstrap: [
                    _books_web_app_component__WEBPACK_IMPORTED_MODULE_5__["BooksWebAppComponent"] //only root component should be in bootstrap
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/book-composite/book-composite.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-composite/book-composite.component.ts ***!
  \************************************************************/
/*! exports provided: BookCompositeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCompositeComponent", function() { return BookCompositeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_simple_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/simple-book-service */ "./src/app/service/simple-book-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-info/book-info.component */ "./src/app/book-info/book-info.component.ts");





const _c0 = function (a0) { return { "active": a0 }; };
function BookCompositeComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCompositeComponent_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const book_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectBook(book_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, book_r1 === ctx_r0.selectedBook));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, book_r1.title), " ");
} }
class BookCompositeComponent {
    constructor(bookService) {
        this.bookService = bookService;
    }
    ngOnInit() {
        this.books = this.bookService.getBooks();
        this.selectedBook = this.books[0];
    }
    selectBook(book) {
        this.selectedBook = book;
    }
}
BookCompositeComponent.ɵfac = function BookCompositeComponent_Factory(t) { return new (t || BookCompositeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_simple_book_service__WEBPACK_IMPORTED_MODULE_1__["SimpleBookService"])); };
BookCompositeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookCompositeComponent, selectors: [["app-book-composite"]], decls: 8, vars: 2, consts: [[1, "page-title"], [1, "row"], [1, "col-md-4", "book-list"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8", "book-details"], [3, "book"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"]], template: function BookCompositeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Our Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookCompositeComponent_li_5_Template, 3, 6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-book-info", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", ctx.selectedBook);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_3__["BookInfoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".book-list[_ngcontent-%COMP%]{\r\n    border-right:1px solid gray;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1jb21wb3NpdGUvYm9vay1jb21wb3NpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjs7QUFFL0IiLCJmaWxlIjoic3JjL2FwcC9ib29rLWNvbXBvc2l0ZS9ib29rLWNvbXBvc2l0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stbGlzdHtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgZ3JheTtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookCompositeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-composite',
                templateUrl: './book-composite.component.html',
                styleUrls: ['./book-composite.component.css']
            }]
    }], function () { return [{ type: _service_simple_book_service__WEBPACK_IMPORTED_MODULE_1__["SimpleBookService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/book-create/book-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-create/book-create.component.ts ***!
  \******************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_simple_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/simple-book-service */ "./src/app/service/simple-book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function BookCreateComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r1);
} }
class BookCreateComponent {
    // private bookService:SimpleBookService=new SimpleBookService();
    constructor(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.errors = [];
    }
    ngOnInit() {
        this.book = this.createBook();
    }
    createBook() {
        return {
            isbn: '',
            title: '',
            author: '',
            description: '',
            price: 0,
            pages: 0,
            votes: 0,
            rating: 0,
            seriesIndex: 0,
            series: ''
        };
    }
    onAddBook() {
        this.errors = [];
        if (!this.book.isbn)
            this.errors.push('isbn number missing');
        if (!this.book.title)
            this.errors.push('title is missing');
        if (!this.book.author)
            this.errors.push('author is missing');
        if (this.errors.length > 0)
            console.log('invalid input');
        else {
            this.bookService.addBook(this.book);
            console.log('total books ', this.bookService.getBooks());
            this.router.navigateByUrl('/book/list');
        }
    }
}
BookCreateComponent.ɵfac = function BookCreateComponent_Factory(t) { return new (t || BookCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_simple_book_service__WEBPACK_IMPORTED_MODULE_1__["SimpleBookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BookCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookCreateComponent, selectors: [["ng-component"]], decls: 49, vars: 10, consts: [[1, "page-title"], [1, "container"], [1, "form-group"], ["for", "isbn"], ["type", "text", "id", "isbn", "aria-describedby", "isbnlHelp", "placeholder", "enter the value of isbn", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "isbnHelp", 1, "form-text", "text-muted"], ["for", "title"], ["type", "text", "id", "title", "aria-describedby", "titlelHelp", "placeholder", "enter the value of title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "titleHelp", 1, "form-text", "text-muted"], ["for", "author"], ["type", "text", "id", "author", "aria-describedby", "authorlHelp", "placeholder", "enter the value of author", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "authorHelp", 1, "form-text", "text-muted"], ["for", "price"], ["type", "text", "id", "price", "aria-describedby", "pricelHelp", "placeholder", "enter the value of price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "priceHelp", 1, "form-text", "text-muted"], ["for", "rating"], ["type", "range", "min", "1", "max", "5", "id", "rating", "aria-describedby", "ratinglHelp", "placeholder", "enter the value of rating", 1, "form-control", 3, "title", "ngModel", "ngModelChange"], ["id", "ratingHelp", 1, "form-text", "text-muted"], ["for", "votes"], ["type", "text", "id", "votes", "aria-describedby", "voteslHelp", "placeholder", "enter the value of votes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "votesHelp", 1, "form-text", "text-muted"], ["for", "description"], ["type", "text", "id", "description", "aria-describedby", "descriptionlHelp", "placeholder", "enter the value of description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "descriptionHelp", 1, "form-text", "text-muted"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "error"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [1, "text-danger"]], template: function BookCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "isbn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookCreateComponent_Template_input_ngModelChange_6_listener($event) { return ctx.book.isbn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter the value of isbn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Book Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookCreateComponent_Template_input_ngModelChange_12_listener($event) { return ctx.book.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter the value of title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookCreateComponent_Template_input_ngModelChange_18_listener($event) { return ctx.book.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enter the value of author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookCreateComponent_Template_input_ngModelChange_24_listener($event) { return ctx.book.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enter the value of price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookCreateComponent_Template_input_ngModelChange_30_listener($event) { return ctx.book.rating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookCreateComponent_Template_input_ngModelChange_36_listener($event) { return ctx.book.votes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Enter the value of votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookCreateComponent_Template_input_ngModelChange_42_listener($event) { return ctx.book.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Enter the value of description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCreateComponent_Template_button_click_45_listener() { return ctx.onAddBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BookCreateComponent_li_48_Template, 2, 1, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.isbn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.book.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value should be 1-5. Current Rating ", ctx.book.rating, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.votes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stY3JlYXRlL2Jvb2stY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './book-create.component.html',
                styleUrls: ['./book-create.component.css']
            }]
    }], function () { return [{ type: _service_simple_book_service__WEBPACK_IMPORTED_MODULE_1__["SimpleBookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/book-details/book-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-details/book-details.component.ts ***!
  \********************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_http_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http-book-service */ "./src/app/service/http-book-service.ts");
/* harmony import */ var _book_info_book_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-info/book-info.component */ "./src/app/book-info/book-info.component.ts");





class BookDetailsComponent {
    constructor(activatedRoute, router, 
    //private bookService:SimpleBookService
    bookService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.bookService = bookService;
    }
    ngOnInit() {
        let bookId = this.activatedRoute.snapshot.params.bookId;
        //let book= this.bookService.getBook(bookId);
        // if(book)
        //   this.selectedBook=book;
        // else    
        //   this.router.navigateByUrl(`/404?error=No Such Book&id=${bookId}`);
        this.bookService.getBook(bookId)
            .subscribe(book => this.selectedBook = book, //if request is successfull
        //if request is successfull
        error => this.router.navigateByUrl(`/404?error=No Such Book&id=${bookId}`));
    }
    goBack() {
        this.router.navigateByUrl('/book/list');
    }
}
BookDetailsComponent.ɵfac = function BookDetailsComponent_Factory(t) { return new (t || BookDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_book_service__WEBPACK_IMPORTED_MODULE_2__["HttpBookService"])); };
BookDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookDetailsComponent, selectors: [["ng-component"]], decls: 4, vars: 1, consts: [[1, "btn", "btn-primary", 3, "click"], [3, "book"]], template: function BookDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookDetailsComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back to List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-book-info", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", ctx.selectedBook);
    } }, directives: [_book_info_book_info_component__WEBPACK_IMPORTED_MODULE_3__["BookInfoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './book-details.component.html',
                styleUrls: ['./book-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_http_book_service__WEBPACK_IMPORTED_MODULE_2__["HttpBookService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/book-info/book-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-info/book-info.component.ts ***!
  \**************************************************/
/*! exports provided: BookInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInfoComponent", function() { return BookInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ca_rainbow_color_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ca-rainbow-color.directive */ "./src/app/ca-rainbow-color.directive.ts");
/* harmony import */ var _ca_rating_ca_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ca-rating/ca-rating.component */ "./src/app/ca-rating/ca-rating.component.ts");
/* harmony import */ var _ratingadvise_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ratingadvise.pipe */ "./src/app/ratingadvise.pipe.ts");





class BookInfoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BookInfoComponent.ɵfac = function BookInfoComponent_Factory(t) { return new (t || BookInfoComponent)(); };
BookInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookInfoComponent, selectors: [["app-book-info"]], inputs: { book: "book" }, decls: 26, vars: 11, consts: [[1, "page-title"], [1, "row"], [1, "col-md-6"], [1, "cover-image", 3, "src"], [1, "meta-list"], ["ca-rainbow-color", ""], [3, "value"], [1, "description"], [1, "tags"]], template: function BookInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rating: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ca-rating", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our Recommendation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "ratingadvise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.book.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Author: ", ctx.book.author, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", ctx.book.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.book.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book.rating, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, ctx.book.rating), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.book.tags, " ");
    } }, directives: [_ca_rainbow_color_directive__WEBPACK_IMPORTED_MODULE_1__["CaRainbowColorDirective"], _ca_rating_ca_rating_component__WEBPACK_IMPORTED_MODULE_2__["CaRatingComponent"]], pipes: [_ratingadvise_pipe__WEBPACK_IMPORTED_MODULE_3__["RatingadvisePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2staW5mby9ib29rLWluZm8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-info',
                templateUrl: './book-info.component.html',
                styleUrls: ['./book-info.component.css']
            }]
    }], function () { return []; }, { book: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_http_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/http-book-service */ "./src/app/service/http-book-service.ts");
/* harmony import */ var _ca_highlight_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ca-highlight.directive */ "./src/app/ca-highlight.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ca_range_ca_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ca-range/ca-range.component */ "./src/app/ca-range/ca-range.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ca_rating_ca_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ca-rating/ca-rating.component */ "./src/app/ca-rating/ca-rating.component.ts");
/* harmony import */ var _ratingadvise_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ratingadvise.pipe */ "./src/app/ratingadvise.pipe.ts");









function BookListComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Poster ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ca-range", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BookListComponent_th_7_Template_ca_range_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.imageWidth = $event; })("changed", function BookListComponent_th_7_Template_ca_range_changed_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onImageWidthInfoChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 75)("max", 200)("delta", 15)("value", ctx_r0.imageWidth);
} }
function BookListComponent_tr_19_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r6.imageWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r6.showImages)("src", book_r5.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/book/details", a1]; };
function BookListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookListComponent_tr_19_td_1_Template, 2, 4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ca-rating", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "ratingadvise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, book_r5.isbn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, book_r5.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, book_r5.author), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 12, book_r5.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 17, book_r5.releaseDate, "MMMM yyyy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", book_r5.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 20, book_r5.rating), " ");
} }
class BookListComponent {
    constructor(
    //private bookService: SimpleBookService,
    bookService) {
        this.bookService = bookService;
        this.showImages = true;
        this.imageWidth = 120;
        //public bookService=new SimpleBookService();
        this.status = '';
    }
    ngOnInit() {
        //this.books=this.bookService.getBooks(); //components gets the book from the service  
        this.books = [];
        this.status = '';
        //Approach #1 -- subscribe to the service and once you get the data assign it to books list
        // this
        //   .bookService
        //   .getBooks()
        //   .subscribe(
        //     //what to do when we get the result
        //     books=> {
        //       this.books=books;
        //       this.status=`Total books :${books.length}`;
        //     },
        //     //what to do on http response errors
        //     error=> {console.log('component error',error)
        //     this.status=`Unable to fetch books`;
        //     }
        //   );
        //Approach #2 -- we don't need to subscribe. we can directly bind the Observable in our template
        this.bookList = this.bookService.getBooks();
    }
    toggleImages() {
        this.showImages = !this.showImages;
    }
    onImageWidthInfoChanged(r) {
        //console.log(r);
    }
}
BookListComponent.ɵfac = function BookListComponent_Factory(t) { return new (t || BookListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_book_service__WEBPACK_IMPORTED_MODULE_1__["HttpBookService"])); };
BookListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookListComponent, selectors: [["app-book-list"]], decls: 24, vars: 6, consts: [["ca-highlight", "", 1, "page-title"], ["type", "checkbox", 3, "checked", "click"], [1, "table", "table-condensed", "table-striped", "table-hover"], ["ca-highlight", "", "highlight-class", "table-header"], [4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "tags"], [3, "min", "max", "delta", "value", "valueChange", "changed"], [3, "routerLink"], ["ca-highlight", "lightskyblue"], ["ca-highlight", "lightyellow"], [3, "value"], [3, "hidden", "src"]], template: function BookListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recommended Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookListComponent_Template_input_click_2_listener() { return ctx.toggleImages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show Covers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookListComponent_th_7_Template, 3, 4, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Release Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BookListComponent_tr_19_Template, 19, 24, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.showImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 4, ctx.bookList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status);
    } }, directives: [_ca_highlight_directive__WEBPACK_IMPORTED_MODULE_2__["CaHighlightDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ca_range_ca_range_component__WEBPACK_IMPORTED_MODULE_4__["CaRangeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _ca_rating_ca_rating_component__WEBPACK_IMPORTED_MODULE_6__["CaRatingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ratingadvise_pipe__WEBPACK_IMPORTED_MODULE_7__["RatingadvisePipe"]], styles: ["tr[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.table-header[_ngcontent-%COMP%]{\r\n    color:white;\r\n    background:blue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50cntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpibHVlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-list',
                templateUrl: './book-list.component.html',
                styleUrls: ['./book-list.component.css']
            }]
    }], function () { return [{ type: _service_http_book_service__WEBPACK_IMPORTED_MODULE_1__["HttpBookService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/books-web-app.component.ts":
/*!********************************************!*\
  !*** ./src/app/books-web-app.component.ts ***!
  \********************************************/
/*! exports provided: BooksWebAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksWebAppComponent", function() { return BooksWebAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _books_web_header_component_books_web_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books-web-header-component/books-web-header.component */ "./src/app/books-web-header-component/books-web-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _books_web_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books-web-footer.component */ "./src/app/books-web-footer.component.ts");





class BooksWebAppComponent {
}
BooksWebAppComponent.ɵfac = function BooksWebAppComponent_Factory(t) { return new (t || BooksWebAppComponent)(); };
BooksWebAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksWebAppComponent, selectors: [["app-booksweb"]], decls: 4, vars: 0, consts: [[1, "content", "container"]], template: function BooksWebAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-booksweb-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-booksweb-footer");
    } }, directives: [_books_web_header_component_books_web_header_component__WEBPACK_IMPORTED_MODULE_1__["BooksWebHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _books_web_footer_component__WEBPACK_IMPORTED_MODULE_3__["BooksWebFooterComponent"]], styles: [".content[_ngcontent-%COMP%]{\n            padding-bottom:50px;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksWebAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booksweb',
                template: `
    <app-booksweb-header></app-booksweb-header>
    <div class='content container' >

        <router-outlet></router-outlet>
        
        
    </div>
    <app-booksweb-footer></app-booksweb-footer>
    `,
                styles: [
                    `
        .content{
            padding-bottom:50px;
        }
        `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/books-web-footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/books-web-footer.component.ts ***!
  \***********************************************/
/*! exports provided: BooksWebFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksWebFooterComponent", function() { return BooksWebFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BooksWebFooterComponent {
}
BooksWebFooterComponent.ɵfac = function BooksWebFooterComponent_Factory(t) { return new (t || BooksWebFooterComponent)(); };
BooksWebFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksWebFooterComponent, selectors: [["app-booksweb-footer"]], decls: 4, vars: 0, consts: [[1, "footer"], ["href", "http://www.conceptarchitect.in"]], template: function BooksWebFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Concept Architect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n                position: fixed;\n                left: 0;\n                bottom: 0;\n                width: 100%;\n                background-color: blue;\n                color: white;\n                text-align: center;\n                margin-top: 150px;\n                \n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksWebFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booksweb-footer',
                styles: [
                    `        
            .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: blue;
                color: white;
                text-align: center;
                margin-top: 150px;
                
            }
        `
                ],
                template: `
        <div class='footer'>
        &copy; <a href='http://www.conceptarchitect.in'>Concept Architect</a>
        </div>
        
        `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/books-web-header-component/books-web-header.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/books-web-header-component/books-web-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: BooksWebHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksWebHeaderComponent", function() { return BooksWebHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/book/list"]; };
const _c2 = function () { return ["/book/add"]; };
const _c3 = function () { return ["/author/list"]; };
const _c4 = function () { return ["/author/add"]; };
const _c5 = function () { return ["/user/login"]; };
const _c6 = function () { return ["/user/register"]; };
class BooksWebHeaderComponent {
    constructor() {
        //this is a javascript code
        //the data can come from anywhere like
        //database, ajax, calculated etc
        //so it is a dynamic data
        this.title = 'Word Wide Books';
        this.subTitle = 'Where book lovers come...';
        this.time = '';
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        }, 1000); //keep updating every 1 sec
    }
}
BooksWebHeaderComponent.ɵfac = function BooksWebHeaderComponent_Factory(t) { return new (t || BooksWebHeaderComponent)(); };
BooksWebHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksWebHeaderComponent, selectors: [["app-booksweb-header"]], inputs: { title: "title" }, decls: 34, vars: 15, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]], template: function BooksWebHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    font-size:3m;\r\n    text-shadow: -3px -3px 3px gray;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    color:gray;\r\n    font-style: italic;\r\n    padding:0px;\r\n    margin-bottom: 0px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid gray;\r\n    padding-bottom:0px;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color:yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3Mtd2ViLWhlYWRlci1jb21wb25lbnQvYm9va3Mtd2ViLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYm9va3Mtd2ViLWhlYWRlci1jb21wb25lbnQvYm9va3Mtd2ViLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBmb250LXNpemU6M207XHJcbiAgICB0ZXh0LXNoYWRvdzogLTNweCAtM3B4IDNweCBncmF5O1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgYTpob3ZlcntcclxuICAgIGNvbG9yOnllbGxvdztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksWebHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booksweb-header',
                styleUrls: [
                    'books-web-header.component.css'
                ],
                templateUrl: 'books-web-header.component.html'
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ca-highlight.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/ca-highlight.directive.ts ***!
  \*******************************************/
/*! exports provided: CaHighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaHighlightDirective", function() { return CaHighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CaHighlightDirective {
    constructor(target, //the element on which this directive is applied
    renderer) {
        this.target = target;
        this.renderer = renderer;
        //any value applied ca-highlight attribute will be pulled in here
        this.backgroundColor = 'Yellow';
    }
    ngOnInit() {
        this.backgroundColor = this.backgroundColor || 'lightyellow';
        if (this.highlightClass) {
            this.renderer.setAttribute(this.target.nativeElement, 'class', this.highlightClass);
        }
        else {
            this.renderer.setStyle(this.target.nativeElement, 'background', this.backgroundColor);
            if (this.textColor)
                this.renderer.setStyle(this.target.nativeElement, 'color', this.textColor);
        }
    }
}
CaHighlightDirective.ɵfac = function CaHighlightDirective_Factory(t) { return new (t || CaHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CaHighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CaHighlightDirective, selectors: [["", "ca-highlight", ""]], inputs: { backgroundColor: ["ca-highlight", "backgroundColor"], textColor: ["hightlight-text-color", "textColor"], highlightClass: ["highlight-class", "highlightClass"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaHighlightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ca-highlight]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ca-highlight']
        }], textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hightlight-text-color']
        }], highlightClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['highlight-class']
        }] }); })();


/***/ }),

/***/ "./src/app/ca-not-found/ca-not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ca-not-found/ca-not-found.component.ts ***!
  \********************************************************/
/*! exports provided: CaNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaNotFoundComponent", function() { return CaNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CaNotFoundComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.errorMessage = this.route.snapshot.queryParams.error || 'Page Not Found';
        let url = this.route.snapshot.url.join('/');
        this.id = this.route.snapshot.queryParams.id || null;
        this.errorDetails = this.id ? `Invalid Id ${this.id}` : `Invalid Url: ${url}`;
    }
}
CaNotFoundComponent.ɵfac = function CaNotFoundComponent_Factory(t) { return new (t || CaNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CaNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaNotFoundComponent, selectors: [["app-ca-not-found"]], decls: 5, vars: 2, consts: [[1, "page-title"], [1, "text-danger"], ["src", "/assets/images/404.png", "alt", ""]], template: function CaNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorDetails);
    } }, styles: ["img[_ngcontent-%COMP%]{\r\n    box-shadow: 10px 10px 10px lightblue;\r\n    border:20px solid lightskyblue;\r\n    align-content: center;\r\n\r\n    max-width: 500px;\r\n    max-width: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Etbm90LWZvdW5kL2NhLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIscUJBQXFCOztJQUVyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2Etbm90LWZvdW5kL2NhLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltZ3tcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlcjoyMHB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ca-not-found',
                templateUrl: './ca-not-found.component.html',
                styleUrls: ['./ca-not-found.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ca-rainbow-color.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/ca-rainbow-color.directive.ts ***!
  \***********************************************/
/*! exports provided: CaRainbowColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaRainbowColorDirective", function() { return CaRainbowColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CaRainbowColorDirective {
    constructor(target, renderer) {
        this.target = target;
        this.renderer = renderer;
        this.colors = [
            'Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'
        ];
    }
    setColor() {
        const r = Math.random();
        let index = Math.floor(r * this.colors.length);
        let color = this.colors[index];
        this.renderer.setStyle(this.target.nativeElement, 'color', color);
    }
    ngOnInit() {
        this.setColor();
    }
    //this will handle the click even of its parent
    onClick() {
        this.setColor();
    }
}
CaRainbowColorDirective.ɵfac = function CaRainbowColorDirective_Factory(t) { return new (t || CaRainbowColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CaRainbowColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CaRainbowColorDirective, selectors: [["", "ca-rainbow-color", ""]], hostBindings: function CaRainbowColorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaRainbowColorDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaRainbowColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ca-rainbow-color]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/ca-range/ca-range.component.ts":
/*!************************************************!*\
  !*** ./src/app/ca-range/ca-range.component.ts ***!
  \************************************************/
/*! exports provided: CaRangeComponent, RangeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaRangeComponent", function() { return CaRangeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeInfo", function() { return RangeInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CaRangeComponent {
    constructor() {
        //Here we receive input from parent in the child. Typically using attribute assignment
        this.min = 0;
        this.max = 100;
        this.delta = 1;
        this.value = 5;
        //Here the child send information to parent using EventEmitter
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //note the name matches @Input() value
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //i will send the range info to the client
        this.hit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //it is fired when you hit lower boundry
    }
    change(newValue) {
        if (newValue <= this.min) {
            this.hit.emit('lower');
            newValue = this.min;
        }
        if (newValue >= this.max) {
            this.hit.emit('upper');
            newValue = this.max;
        }
        //this will send an update to the parent
        //provides you a detailed change information
        this.changed.emit(new RangeInfo(this.value, newValue, newValue - this.value));
        //this one provides exactly what you need to know
        this.valueChange.emit(newValue);
        this.value = newValue;
    }
    ngOnInit() {
        this.change(this.value);
    }
    decrease() {
        this.change(this.value - this.delta);
    }
    increase() {
        this.change(this.value + this.delta);
    }
}
CaRangeComponent.ɵfac = function CaRangeComponent_Factory(t) { return new (t || CaRangeComponent)(); };
CaRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaRangeComponent, selectors: [["ca-range"]], inputs: { min: "min", max: "max", delta: "delta", value: "value" }, outputs: { valueChange: "valueChange", changed: "changed", hit: "hit" }, decls: 7, vars: 3, consts: [[1, "row"], [1, "col-md-4", "col-sm-4", 3, "disabled", "click"], [1, "fa", "fa-arrow-circle-down"], [1, "col-md-4", "col-sm-4"], [1, "fa", "fa-arrow-circle-up"]], template: function CaRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaRangeComponent_Template_button_click_1_listener() { return ctx.decrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaRangeComponent_Template_button_click_5_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.value <= ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.value >= ctx.max);
    } }, styles: ["*[_ngcontent-%COMP%]{\n      margin-left:0px;\n      margin-right:0px;\n    }\n    div[_ngcontent-%COMP%]{\n      min-width:100px;\n      width:100px;\n      max-width:150px;\n    }\n    button[_ngcontent-%COMP%]{\n      border:0px;\n      background:transparent;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ca-range',
                template: `
    <div class='row'>
      <button class='col-md-4 col-sm-4' 
        [disabled]='this.value<=this.min'
        (click)='decrease()' >
        <i class="fa fa-arrow-circle-down"></i>
      </button>
      <span class='col-md-4 col-sm-4'>{{value}}</span>
      <button class='col-md-4 col-sm-4' 
      [disabled]='this.value>=this.max'
      (click)='increase()' >
      <i class="fa fa-arrow-circle-up"></i>
      </button>
    </div>
  `,
                styles: [
                    `
    *{
      margin-left:0px;
      margin-right:0px;
    }
    div{
      min-width:100px;
      width:100px;
      max-width:150px;
    }
    button{
      border:0px;
      background:transparent;
    }
    `
                ]
            }]
    }], function () { return []; }, { min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
class RangeInfo {
    constructor(oldValue, newValue, delta) {
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.delta = delta;
    }
}


/***/ }),

/***/ "./src/app/ca-rating/ca-rating.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ca-rating/ca-rating.component.ts ***!
  \**************************************************/
/*! exports provided: CaRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaRatingComponent", function() { return CaRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CaRatingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", star_r1, "");
} }
class CaRatingComponent {
    constructor() {
        this.value = 2.42; //@Input suggests that this component will receive an input
        this.max = 5; //what is the max allowed rating
        this.fullStar = 'fa-star';
        this.halfStar = 'fa-star-half';
        this.width = 120;
        this.maxWidth = 110;
    }
    ngOnInit() {
        this.stars = [];
        for (let i = 0; i < 5; i++)
            this.stars.push(this.fullStar);
        this.width = this.maxWidth * this.value / this.max;
    }
}
CaRatingComponent.ɵfac = function CaRatingComponent_Factory(t) { return new (t || CaRatingComponent)(); };
CaRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaRatingComponent, selectors: [["ca-rating"]], inputs: { value: "value", max: "max" }, decls: 3, vars: 5, consts: [[1, "starswrapper"], [1, "stars", 3, "title"], ["class", "star", 4, "ngFor", "ngForOf"], [1, "star"]], template: function CaRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CaRatingComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", ctx.value, "/", ctx.max, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".starswrapper[_ngcontent-%COMP%]{              \n        overflow: hidden;\n        \n        \n      }\n\n      .stars[_ngcontent-%COMP%]{\n        box-sizing:border-box;\n\n        padding:0px;\n        width:120px;\n        min-width:120px;\n        max-width:120px;\n      }\n\n      .star[_ngcontent-%COMP%]{\n        display:inline;\n        color:gold;        \n        font-size:24px;\n        margin-left:0px;\n        margin-right:0px;\n        padding:0px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ca-rating',
                template: `

    <div class='starswrapper' [style.width.px]='width' >
      <div class='stars' title='{{value}}/{{max}}' >
        <div class='star' *ngFor='let star of stars' >
          <i  class="fa {{star}}"></i>
        </div>
      </div>
    </div>
  `,
                styles: [
                    `
      
      .starswrapper{              
        overflow: hidden;
        
        
      }

      .stars{
        box-sizing:border-box;

        padding:0px;
        width:120px;
        min-width:120px;
        max-width:120px;
      }

      .star{
        display:inline;
        color:gold;        
        font-size:24px;
        margin-left:0px;
        margin-right:0px;
        padding:0px;
      }
    `
                ]
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/prefix.pipe.ts":
/*!********************************!*\
  !*** ./src/app/prefix.pipe.ts ***!
  \********************************/
/*! exports provided: PrefixPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixPipe", function() { return PrefixPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrefixPipe {
    transform(value, ...args) {
        let prefix = args[0] || '';
        return `${prefix}${value}`;
    }
}
PrefixPipe.ɵfac = function PrefixPipe_Factory(t) { return new (t || PrefixPipe)(); };
PrefixPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "prefix", type: PrefixPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrefixPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'prefix'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ratingadvise.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/ratingadvise.pipe.ts ***!
  \**************************************/
/*! exports provided: RatingadvisePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingadvisePipe", function() { return RatingadvisePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RatingadvisePipe {
    transform(value, scale = 5, ...args) {
        let suggestions = [
            "",
            "Don’t read if you are paid to.", "Expensive at cost 0", "Skip it, Go find some better read",
            "Average. Read if you must!", "Average. You may like it", "Good. Read it if you have time",
            "Good book. You won't be dispapointed", "It’s a Very Good book to read",
            "Wonderful Book. Should Read",
            "Excellent. Must Read",
        ];
        let suggestionsCount = suggestions.length - 1;
        //let value=84 --->  84* 10/100 --> 8.4 -->9      1 -->   1* 10/100 -->01. --> 1
        //let value=2.3 ---> 2.3 * 10/5 --> 4.6 --> 5
        let index = Math.ceil(value * (suggestionsCount / scale));
        return suggestions[index];
    }
}
RatingadvisePipe.ɵfac = function RatingadvisePipe_Factory(t) { return new (t || RatingadvisePipe)(); };
RatingadvisePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ratingadvise", type: RatingadvisePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingadvisePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'ratingadvise'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_composite_book_composite_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-composite/book-composite.component */ "./src/app/book-composite/book-composite.component.ts");
/* harmony import */ var _ca_not_found_ca_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ca-not-found/ca-not-found.component */ "./src/app/ca-not-found/ca-not-found.component.ts");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/book-create/book-create.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management/user-management.module */ "./src/app/user-management/user-management.module.ts");






const appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'book/list' },
    { path: 'books', component: _book_composite_book_composite_component__WEBPACK_IMPORTED_MODULE_1__["BookCompositeComponent"] },
    { path: 'book/list', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__["BookListComponent"] },
    { path: 'book/add', component: _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_3__["BookCreateComponent"] },
    { path: 'book/details/:bookId', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__["BookDetailsComponent"] },
    { path: 'user', loadChildren: () => _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_5__["UserManagementModule"] },
    { path: '404', component: _ca_not_found_ca_not_found_component__WEBPACK_IMPORTED_MODULE_2__["CaNotFoundComponent"] },
    //define a catch all route. must be your last route
    //no other routes would be processed after this one
    { path: '**', component: _ca_not_found_ca_not_found_component__WEBPACK_IMPORTED_MODULE_2__["CaNotFoundComponent"] }
];


/***/ }),

/***/ "./src/app/service/http-book-service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/http-book-service.ts ***!
  \**********************************************/
/*! exports provided: HttpBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBookService", function() { return HttpBookService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class HttpBookService {
    constructor(http) {
        this.http = http;
        // private baseUrl='http://localhost:7000/api/books';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].booksBaseUrl;
        this.bookListUri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].bookListUri;
        this.bookDetailsUri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].bookDetailsUri;
    }
    static _transform(book) {
        //we can change the data we got from the server
        book.cover = `/assets/images/books/${book.isbn}.jpg`; //change the cover to my preferred cover.
        console.log('_transform', book);
        return book;
    }
    _transformList(books) {
        console.log('_transformList', books);
        return books.map(book => {
            return HttpBookService._transform(book);
        });
    }
    _get(url) {
        console.log('GET', url);
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(r => console.log('raw response', r)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(r => {
            console.log('error', r.status);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(r);
        }));
    }
    getBooks() {
        let url = `${this.baseUrl}${this.bookListUri}`;
        return this
            ._get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this._transformList) //transform a list of books
        );
    }
    getBook(isbn) {
        let url = `${this.baseUrl}${this.bookDetailsUri}`.replace(':isbn', isbn);
        return this
            ._get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(HttpBookService._transform) // transform  a single book data
        );
    }
}
HttpBookService.ɵfac = function HttpBookService_Factory(t) { return new (t || HttpBookService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
HttpBookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpBookService, factory: HttpBookService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpBookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/simple-book-service.ts":
/*!************************************************!*\
  !*** ./src/app/service/simple-book-service.ts ***!
  \************************************************/
/*! exports provided: SimpleBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleBookService", function() { return SimpleBookService; });
class SimpleBookService {
    constructor() {
        this.serviceId = ++SimpleBookService.serviceCount;
        console.log(`SimpleBookService created with id ${this.serviceId}`);
        this.books = this.books = [
            {
                "title": "The Accursed God",
                "author": "Vivek Dutta Mishra",
                "description": "The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
                "isbn": "00108",
                "pages": 350,
                "votes": 39,
                "series": "The Lost Epic",
                "seriesIndex": 1,
                "price": 199,
                "rating": 4.8,
                "releaseDate": '01/15/2020',
                "cover": "the-accursed-god-w.jpg",
                "tags": "Indian Epic, Mahabharata, Book Series".split(',')
            },
            {
                "title": "The Count of Monte Cristo",
                "author": "Alexandre Dumas",
                "description": "The story of a person wrongly implicated for a false crime and is send to prison. He returns  to seek the vengeane, love and justice.",
                "isbn": "7126",
                "releaseDate": '01/04/1836',
                "pages": 350,
                "votes": 12000,
                "price": 250,
                "rating": 4.8,
                "cover": "",
                "tags": "Crime,Adventure,Classic,Best-Seller,Revenge,Justice".split(',')
            },
            {
                "title": "Kane And Abel",
                "author": "Jeffrey Archer",
                "description": "story of two men born on the same date on opposite side of the globe and economy and years later fate brings them for a head on collission. The best selling book by the author.",
                "isbn": "78983",
                "releaseDate": '01/05/1977',
                "price": 220,
                "pages": 350,
                "votes": 1500,
                "rating": 3.5,
                "cover": "",
                "tags": "best-seller,chronology".split(',')
            },
            {
                "title": "Rashmirathi",
                "author": "Ramdhari Singh Dinkar",
                "description": "A poetic tale of Karna of Mahabharat. The seven chapter gives a glimpse of the life and harship of one of the greatest warrior of his time",
                "isbn": "10588193",
                "price": 450,
                "pages": 110,
                "votes": 4500,
                "releaseDate": '01/05/1953',
                "rating": 4.5,
                "cover": "",
                "tags": "classic, poetry, mahabharata, karna, hindi".split(',')
            },
        ];
    }
    addBook(book) {
        if (book && book.isbn && book.title && book.author) {
            this.books.push(book);
            return true;
        }
        else {
            return false;
        }
    }
    getBooks() {
        return this.books;
    }
    getBook(isbn) {
        return this.books.find(b => b.isbn == isbn);
    }
}
SimpleBookService.serviceCount = 0;


/***/ }),

/***/ "./src/app/user-management/user-login/user-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-management/user-login/user-login.component.ts ***!
  \********************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 2, vars: 0, template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-login',
                templateUrl: './user-login.component.html',
                styleUrls: ['./user-login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user-management/user-management.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-management/user-management.module.ts ***!
  \***********************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-management/user-login/user-login.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-management/user-register/user-register.component.ts");






let userRoutes = [
    { path: 'login', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"] },
    { path: 'register', component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__["UserRegisterComponent"] }
];
class UserManagementModule {
}
UserManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagementModule });
UserManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagementModule_Factory(t) { return new (t || UserManagementModule)(); }, imports: [[
            // BrowserModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes) //these routes will be added to Main Module
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagementModule, { declarations: [_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"],
        _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__["UserRegisterComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"],
        _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__["UserRegisterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    // BrowserModule,
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes) //these routes will be added to Main Module
                ],
                declarations: [
                    _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"],
                    _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__["UserRegisterComponent"]
                ],
                exports: [
                    _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"],
                    _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__["UserRegisterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user-management/user-register/user-register.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user-management/user-register/user-register.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserRegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) { return new (t || UserRegisterComponent)(); };
UserRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegisterComponent, selectors: [["app-user-register"]], decls: 2, vars: 0, template: function UserRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLXJlZ2lzdGVyL3VzZXItcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-register',
                templateUrl: './user-register.component.html',
                styleUrls: ['./user-register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    booksBaseUrl: "/api/books",
    bookListUri: "/",
    bookDetailsUri: "/:isbn"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OneDrive\myworks\corporate\202008-lnt-nodejs\booksweb-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map