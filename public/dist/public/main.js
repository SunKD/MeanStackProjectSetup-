(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-new/quote-new.component */ "./src/app/quote-new/quote-new.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'view/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: 'newquote/:id', component: _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_6__["QuoteNewComponent"] },
    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-12\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Quote Ranks';
        // this.thirdtask = {title: ""} //when you dont want to use the *ngif
    }
    AppComponent.prototype.ngOnInit = function () {
        this.newAuthor = { name: "" };
        this.getAllAuthors();
    };
    AppComponent.prototype.getAllAuthors = function () {
        var _this = this;
        var authors = this._httpService.getAuthors().subscribe(function (data) {
            console.log("get all author");
            console.log(data);
            _this.authors = data;
        });
    };
    AppComponent.prototype.edit = function (id) {
        var _this = this;
        var edit = this._httpService.getAuthor(id).subscribe(function (data) {
            _this.editAuthor = data;
        });
    };
    AppComponent.prototype.delete = function (id) {
        var deleteAuthor = this._httpService.deleteAuthor(id).subscribe(function (data) {
            console.log(data);
        });
        this.getAllAuthors();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quote-new/quote-new.component */ "./src/app/quote-new/quote-new.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"],
                _quote_new_quote_new_component__WEBPACK_IMPORTED_MODULE_12__["QuoteNewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border: 1px solid grey;\r\n    padding: 40px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.buttons{\r\n    margin-top: 20px;\r\n}\r\n\r\n.form{\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n  <a [routerLink]=\"['/']\">Home</a>\n  \n</div>\n<div *ngIf=\"editAuthor\">\n    <form (submit) = \"onSubmit(editAuthor._id)\">\n        <label>Name:</label>\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"editAuthor.name\">\n        <button [routerLink]=\"['/']\" class=\"btn btn-info\" >Cancel</button>\n        <input type=\"submit\" class=\"btn btn-info\" value=\"submit\">\n      </form>\n</div> -->\n\n\n<!-- {{message}} -->\n\n<div class=\"row text-right\">\n  <div class=\"col-md-4\">\n    <a [routerLink]=\"['/']\" class=\"btn btn-outline-success\">Home</a>\n  </div>\n</div>\n<div *ngIf=\"editAuthor\">\n  <h3>Edit Author: </h3>\n  <div class=\"row form\">\n    <div class=\"col-md-4\">\n      <div class=\"box text-center\">\n        <form (submit)=\"onSubmit(editAuthor._id)\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-left\">\n              <label>Name:</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <input type=\"text\" required minlength=\"3\" name=\"name\" [(ngModel)]=\"editAuthor.name\" #name=\"ngModel\" \n                class=\"form-control\">\n              <span [hidden]=\"!errors.name || name.valid\" class=\"text-danger\">*{{errors.name.message}}</span>\n            </div>\n          </div>\n\n          <div class=\"row buttons\">\n            <div class=\"col-md-6\">\n              <button [routerLink]=\"['/']\" class=\"btn btn-danger form-control\">Cancel</button>\n            </div>\n            <div class=\"col-md-6\">\n              <input type=\"submit\" class=\"btn btn-success form-control\" value=\"submit\">\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.message = "";
        this.errors = { name: "" };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return (_this.id = params['id']); });
        this.getEditAuthor(this.id);
        this.editAuthor = { name: "" };
    };
    EditComponent.prototype.getEditAuthor = function (id) {
        var _this = this;
        var editing = this._httpService.getAuthor(this.id);
        editing.subscribe(function (data) {
            _this.editAuthor = data['data'];
            console.log(data);
        });
        // this._httpService.getAuthor(id).subscribe(data=>{
        //   this.editAuthor = data;
        // })
    };
    EditComponent.prototype.onSubmit = function (id) {
        var _this = this;
        console.log(this.editAuthor);
        var update = this._httpService.updateAuthor(this.editAuthor, id);
        update.subscribe(function (data) {
            console.log("submited form");
            console.log(data);
            _this.message = data["message"];
            if (data['message'] === "Success") {
                _this.message = _this.editAuthor.name + "added updated!";
                _this._router.navigate(['/']);
            }
            else {
                if (data['error'].errors['name']) {
                    _this.errors.name = data['error'].errors['name'];
                }
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.getAuthors();
    }
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.getAuthor = function (id) {
        return this._http.get('/authors/' + id);
    };
    HttpService.prototype.voteQuote = function (id, quote) {
        console.log(id);
        console.log(quote);
        return this._http.post('/quotes/' + id, quote);
    };
    HttpService.prototype.addAuthor = function (newAuthor) {
        return this._http.post('/authors', newAuthor);
    };
    HttpService.prototype.updateAuthor = function (updateInfo, id) {
        return this._http.put('/authors/' + id, updateInfo);
    };
    HttpService.prototype.deleteAuthor = function (id) {
        return this._http.delete('/authors/' + id);
    };
    HttpService.prototype.addNewQuote = function (id, newQuote) {
        console.log(id);
        console.log(newQuote);
        return this._http.post('/authors/' + id, newQuote);
    };
    HttpService.prototype.deleteQuote = function (id, delquote) {
        console.log(delquote, "this should be quote id");
        console.log(id);
        return this._http.delete('/quotes/' + id + "/" + delquote);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5{\r\n    margin-top: 30px;\r\n    color: purple;\r\n}"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-right\">\n  <div class=\"col-md-12\">\n    <u>\n      <button [routerLink]=\"['new']\" class=\"btn btn-outline-success\">Add a quotable author</button>\n    </u>\n  </div>\n</div>\n<h5>We have quoted by: </h5>\n\n<table class=\"text-center table table-striped\">\n  <thead>\n    <tr>\n      <th>Author</th>\n      <th>Actions available</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let author of authors\">\n      <td>{{author.name}}</td>\n      <td>\n        <button [routerLink]=\"['/view/', author._id]\" class=\"btn btn-primary\">View Quotes</button>\n        <!-- <button (click)=\"delete(author._id)\">Delete</button> -->\n        <button [routerLink]=\"['/edit/', author._id]\" class=\"btn btn-warning\">Edit</button>\n        <button (click)=\"delete(author._id)\" class=\"btn btn-danger\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Favorite authors';
        // this.thirdtask = {title: ""} //when you dont want to use the *ngif
    }
    ListComponent.prototype.ngOnInit = function () {
        this.newAuthor = { name: "" };
        this.getAllAuthors();
    };
    ListComponent.prototype.getAllAuthors = function () {
        var _this = this;
        var authors = this._httpService.getAuthors().subscribe(function (data) {
            console.log("get all author");
            console.log(data);
            _this.authors = data['data'];
        });
    };
    ListComponent.prototype.edit = function (id) {
        var _this = this;
        var edit = this._httpService.getAuthor(id).subscribe(function (data) {
            _this.editAuthor = data;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var deleteAuthor = this._httpService.deleteAuthor(id).subscribe(function (data) {
            console.log(data);
        });
        this.getAllAuthors();
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    border: 1px solid grey;\r\n    padding: 40px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.buttons{\r\n    margin-top: 20px;\r\n}\r\n\r\n.form{\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">{{ errors }}</div> -->\n<div class=\"row text-right\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/']\" class=\"btn btn-outline-success\">Home</a>\n  </div>\n</div>\n<div class=\"row text-center\">\n  <div class=\"col-md-12\">\n    <h3>Add new Author: </h3>\n  </div>\n</div>\n<div class=\"row\">\n  <span [hidden]=\"!errors.name\" class=\"text-danger\">*{{errors.name.message}}</span>\n</div>\n<div class=\"row form\">\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n    <div class=\"box text-center\">\n      <form (submit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-left\">\n            <label>Name:</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <input type=\"text\" required minlength=\"3\" name=\"newauthor.name\" [(ngModel)]=\"newauthor.name\" #name=\"ngModel\" [(ngModel)]=\"newauthor.name\"\n              class=\"form-control\">\n            <span [hidden]=\"!errors.name || name.valid\" class=\"text-danger\">*{{errors.name.message}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div *ngIf=\"name.invalid && (name.dirty || !name.untouched)\" class=\"col-md-12 alert alert-danger\">\n            <div *ngIf=\"name.errors.required\">Name is required!</div>\n            <div *ngIf=\"name.errors.minlength\">Name must be at least 3 charaters long</div>\n          </div>\n        </div>\n        <div class=\"row buttons\">\n          <div class=\"col-md-6\">\n            <button [routerLink]=\"['/']\" class=\"btn btn-danger form-control\">Cancel</button>\n          </div>\n          <div class=\"col-md-6\">\n\n            <input type=\"submit\" class=\"btn btn-success form-control\" [disabled]=\"!name.valid\" value=\"submit\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"col-md-4\"></div>\n</div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.message = "";
        this.errors = { name: "" };
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newauthor = { name: "" };
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        var addAuthor = this._httpService.addAuthor(this.newauthor).subscribe(function (data) {
            console.log(data);
            console.log("New Author added");
            console.log("This is the message from data", data["message"]);
            _this.message = data["message"];
            if (data['message'] === "Success") {
                _this.message = _this.newauthor.name + "added successfully!";
                _this._router.navigate(['/']);
            }
            else {
                if (data['error'].errors['name']) {
                    console.log("print this when error", data['error']);
                    _this.errors.name = data['error'].errors['name'];
                }
            }
            // if (data['message'] !== 'error') {
            //   this._router.navigate(['/authors']);
            // } else {
            //   this.errors = data['errors']['errors']['name']['message'];
            //   console.log(data['errors']['errors']['name']['message']);
            // }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/quote-new/quote-new.component.css":
/*!***************************************************!*\
  !*** ./src/app/quote-new/quote-new.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box{\r\n    border: 1px solid grey;\r\n    padding: 40px;\r\n    border-radius: 30px;\r\n}\r\n\r\n.buttons{\r\n    margin-top: 20px;\r\n}\r\n\r\n.form{\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/quote-new/quote-new.component.html":
/*!****************************************************!*\
  !*** ./src/app/quote-new/quote-new.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-right\">\n  <div class=\"col-md-12\">\n    <a [routerLink]=\"['/']\" class=\"btn btn-outline-success\">Home</a>\n  </div>\n</div>\n<div class=\"row text-center\">\n  <div class=\"col-md-12\">\n    <h3>Add new Quote: </h3>\n  </div>\n</div>\n\n<div class=\"row\">\n  <span [hidden]=\"!errors.quote\" class=\"text-danger\">*{{errors.quote.message}}</span>\n</div>\n<div class=\"row form\">\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n    <div class=\"box text-center\">\n      <form (submit)=\"onQuoteSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-left\">\n            <label>Quote:</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <input type=\"text\" required minlength=\"3\" name=\"newQuote.quote\" [(ngModel)]=\"newQuote.quote\" #quote=\"ngModel\" class=\"form-control\">\n            <span [hidden]=\"!errors.quote || quote.valid\" class=\"text-danger\">{{errors.quote.message}}</span>\n          </div>\n        </div>\n        <div *ngIf=\"quote.invalid && (quote.dirty || !quote.untouched)\" class=\"col-md-12 alert alert-danger\">\n            <div *ngIf=\"quote.errors.required\">Name is required!</div>\n            <div *ngIf=\"quote.errors.minlength\">Name must be at least 3 charaters long</div>\n          </div>\n        <div class=\"row buttons\">\n          <div class=\"col-md-6\">\n            <button [routerLink]=\"['/']\" class=\"btn btn-danger form-control\">Cancel</button>\n          </div>\n          <div class=\"col-md-6\">\n            <input type=\"submit\" class=\"btn btn-success form-control\" [disabled]=\"!quote.valid\" value=\"submit\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"col-md-4\"></div>\n</div>"

/***/ }),

/***/ "./src/app/quote-new/quote-new.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quote-new/quote-new.component.ts ***!
  \**************************************************/
/*! exports provided: QuoteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteNewComponent", function() { return QuoteNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteNewComponent = /** @class */ (function () {
    function QuoteNewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.message = "";
        this.errors = { quote: "" };
    }
    QuoteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return (_this.id = params['id']); });
        console.log(this.id);
        console.log("Please printTTTT!");
        this.newQuote = { quote: "" };
    };
    QuoteNewComponent.prototype.onQuoteSubmit = function () {
        var _this = this;
        console.log(this.id);
        var nQuote = this._httpService.addNewQuote(this.id, this.newQuote).subscribe(function (data) {
            console.log("you are adding new quote" + data);
            _this.newQuote = data['data'];
            _this.message = data["message"];
            if (data['message'] === "Success") {
                _this.message = _this.newQuote.quote + "added successfully!";
                _this._router.navigate(['/view']);
            }
            else {
                if (data['error'].errors['quote']) {
                    _this.errors.quote = data['error'].errors['quote'];
                }
            }
        });
        this.newQuote = { quote: "" };
    };
    QuoteNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-new',
            template: __webpack_require__(/*! ./quote-new.component.html */ "./src/app/quote-new/quote-new.component.html"),
            styles: [__webpack_require__(/*! ./quote-new.component.css */ "./src/app/quote-new/quote-new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuoteNewComponent);
    return QuoteNewComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    color: purple;\r\n}"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"thisAuthor\">\n  <div class=\"row\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2\">\n      <button [routerLink]=\"['/']\" class=\"btn btn-outline-success form-control\">Home</button>\n    </div>\n    <div class=\"col-md-2\">\n      <a [routerLink]=\"['/newquote/', thisAuthor._id]\" class=\"btn btn-outline-success form-control\">Add a quote</a>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n\n  <h3>Quotes by {{thisAuthor.name}} </h3>\n  <table class=\"table table-strpied text-center\">\n    <thead>\n      <tr>\n        <th>Quote</th>\n        <th>Votes</th>\n        <th>Actions avaliable</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let quote of thisAuthor.quotes\">\n          <td>{{quote.quote}}</td>\n          <td>{{quote.vote}}</td>\n          <td>\n            <button (click)=\"voteUp(quote._id)\" class=\"btn btn-success\">Vote Up</button>\n            <button (click)=\"voteDown(quote._id)\" class=\"btn btn-warning\">Vote Down</button>\n            <button (click)=\"delete(quote._id)\" class=\"btn btn-danger\">Delete</button>\n          </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return (_this.id = params['id']); });
        var author = this._httpService.getAuthor(this.id).subscribe(function (data) {
            console.log(data);
            _this.thisAuthor = data['data'];
            // this.thisVote = data.quote
            // this.thisVote = data.quotes.
        });
    };
    ViewComponent.prototype.voteUp = function (quoteId) {
        var _this = this;
        var voted = this._httpService.voteQuote(this.thisAuthor._id, { "id": quoteId, "voteVal": 1 }).subscribe(function (data) {
            _this.thisAuthor = data;
        });
    };
    ViewComponent.prototype.voteDown = function (quoteId) {
        var _this = this;
        var voted = this._httpService.voteQuote(this.thisAuthor._id, { "id": quoteId, "voteVal": -1 }).subscribe(function (data) {
            console.log("got intot this function");
            _this.thisAuthor = data;
        });
    };
    ViewComponent.prototype.delete = function (quoteId) {
        var _this = this;
        var deletequote = this._httpService.deleteQuote(this.thisAuthor._id, quoteId)
            .subscribe(function (data) {
            _this.thisAuthor = data;
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SunDa\Desktop\desktop2018\DojoAssignments\MEAN\Angular\authors\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map