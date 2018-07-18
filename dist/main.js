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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\" #container></div>\n<div class=\"logo-container\">\n  <img class=\"logo\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<div class=\"btns-container\">\n  <button nz-button nzType=\"primary\" nzShape=\"circle\" nzSize=\"large\" (click)=\"actionUpload()\"><i class=\"anticon anticon-cloud-upload-o\"></i></button>\n  <button nz-button nzType=\"primary\" nzShape=\"circle\" nzSize=\"large\" (click)=\"actionRemove()\"><i class=\"anticon anticon-delete\"></i></button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\n  width: 100%;\n  height: 100%; }\n\n.logo-container {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  padding: 5px;\n  width: 60px;\n  height: 60px;\n  border: 3px solid rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(44, 62, 80, 0.4);\n  background-color: #8e44ad; }\n\n.logo-container .logo {\n    width: 44px;\n    height: 44px; }\n\n.btns-container {\n  position: absolute;\n  bottom: 15px;\n  left: 50%;\n  margin-left: -55px;\n  padding: 5px;\n  width: 110px;\n  height: 60px;\n  border-radius: 30px;\n  box-shadow: 0 0 10px rgba(44, 62, 80, 0.4);\n  background-color: white; }\n\n.btns-container button {\n    margin: 5px; }\n"

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
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_XYZ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/XYZ */ "./node_modules/ol/source/XYZ.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/GeometryType */ "./node_modules/ol/geom/GeometryType.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Fill */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style/Stroke */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Circle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style/Circle */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var _ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ngx-ol-upload-overlay */ "./src/app/ngx-ol-upload-overlay/index.ts");
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
    function AppComponent(uploadOverlay) {
        this.uploadOverlay = uploadOverlay;
        this.layers = [];
        this.accessToken = 'pk.eyJ1Ijoiam9ubnl0b3NoZW4iLCJhIjoiY2ozeHJreHllMDA0cjJ3bXhkYjlnaDl5eCJ9.VYbgk1Z2yUiDV5Z9_TGwTg';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.mapBuilder(this.container.nativeElement);
    };
    AppComponent.prototype.mapBuilder = function (target) {
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_1__["default"]({
            target: target,
            view: new ol_View__WEBPACK_IMPORTED_MODULE_2__["default"]({
                center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_7__["fromLonLat"])([116.39122009277342, 39.90710270565395]),
                zoom: 8
            }),
            layers: [
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    source: new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_5__["default"]({
                        url: "https://b.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=" + this.accessToken
                    })
                })
            ],
            controls: []
        });
    };
    AppComponent.prototype.createEditingStyle = function () {
        var styles = {};
        var white = [255, 255, 255, 1];
        var blue = [0, 153, 255, 1];
        var width = 3;
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].POLYGON] = [
            new ol_style_Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
                fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_10__["default"]({
                    color: [255, 255, 255, 0.5]
                })
            }),
            new ol_style_Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
                stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__["default"]({
                    color: white,
                    width: width + 2
                })
            }),
            new ol_style_Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
                stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__["default"]({
                    color: blue,
                    width: width
                })
            })
        ];
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].MULTI_POLYGON] =
            styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].POLYGON];
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].LINE_STRING] = [
            new ol_style_Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
                stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__["default"]({
                    color: white,
                    width: width + 2
                })
            }),
            new ol_style_Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
                stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__["default"]({
                    color: blue,
                    width: width
                })
            })
        ];
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].MULTI_LINE_STRING] =
            styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].LINE_STRING];
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].CIRCLE] =
            styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].POLYGON].concat(styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].LINE_STRING]);
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].POINT] = [
            new ol_style_Style__WEBPACK_IMPORTED_MODULE_9__["default"]({
                image: new ol_style_Circle__WEBPACK_IMPORTED_MODULE_12__["default"]({
                    radius: width * 2,
                    fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_10__["default"]({
                        color: blue
                    }),
                    stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_11__["default"]({
                        color: white,
                        width: width / 2
                    })
                }),
                zIndex: Infinity
            })
        ];
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].MULTI_POINT] =
            styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].POINT];
        styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].GEOMETRY_COLLECTION] =
            styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].POLYGON].concat(styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].LINE_STRING], styles[ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_8__["default"].POINT]);
        return styles;
    };
    AppComponent.prototype.getDefaultStyleFunction = function () {
        var styles = this.createEditingStyle();
        return function (feature, resolution) {
            return styles[feature.getGeometry().getType()];
        };
    };
    AppComponent.prototype.setViewToLayer = function (layer) {
        var extent = layer.getSource().getExtent();
        var view = this.map.getView();
        view.fit(extent, {
            duration: 1000
        });
    };
    AppComponent.prototype.addLayerByFeatures = function (features) {
        var layer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__["default"]({
            source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__["default"]({
                features: features
            }),
            style: this.getDefaultStyleFunction()
        });
        this.layers.push(layer);
        this.map.addLayer(layer);
        this.setViewToLayer(layer);
    };
    AppComponent.prototype.removeAllLayers = function () {
        for (var i = 0; i < this.layers.length; i++) {
            this.map.removeLayer(this.layers[i]);
        }
        this.layers = [];
    };
    AppComponent.prototype.actionUpload = function () {
        var _this = this;
        var overlay = this.uploadOverlay.open({
            title: 'Openlayers Drag And Drop',
            width: '768px',
            maskClosable: false
        });
        overlay.afterClose.subscribe(function (result) {
            if (result) {
                _this.addLayerByFeatures(result);
            }
        });
    };
    AppComponent.prototype.actionRemove = function () {
        this.removeAllLayers();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "container", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_13__["NgxOlUploadOverlayService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-ol-upload-overlay */ "./src/app/ngx-ol-upload-overlay/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/** 配置 angular i18n **/


Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                /** 导入 ng-zorro-antd 模块 **/
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_6__["NgxOlUploadOverlayModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/Overlay-util.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/Overlay-util.ts ***!
  \*******************************************************/
/*! exports provided: OverlayUtil, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayUtil", function() { return OverlayUtil; });
var OverlayUtil = /** @class */ (function () {
    function OverlayUtil(document) {
        this.document = document;
        this.lastPosition = null;
        this.listenDocumentClick();
    }
    OverlayUtil.prototype.getLastClickPosition = function () {
        return this.lastPosition;
    };
    OverlayUtil.prototype.listenDocumentClick = function () {
        var _this = this;
        this.document.addEventListener('click', function (event) {
            _this.lastPosition = { x: event.clientX, y: event.clientY };
        });
    };
    return OverlayUtil;
}());

/* harmony default export */ __webpack_exports__["default"] = (new OverlayUtil(document));


/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/css-unit.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/css-unit.pipe.ts ***!
  \********************************************************/
/*! exports provided: CssUnitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssUnitPipe", function() { return CssUnitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CssUnitPipe = /** @class */ (function () {
    function CssUnitPipe() {
    }
    CssUnitPipe.prototype.transform = function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        var formatted = +value; // force convert
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    CssUnitPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'toCssUnit'
        })
    ], CssUnitPipe);
    return CssUnitPipe;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/index.ts":
/*!************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/index.ts ***!
  \************************************************/
/*! exports provided: NgxOlUploadOverlayRef, NgxOlUploadOverlayModule, UploadOverlayBuilder, NgxOlUploadOverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_ol_upload_overlay_ref_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-ol-upload-overlay-ref.class */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay-ref.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayRef", function() { return _ngx_ol_upload_overlay_ref_class__WEBPACK_IMPORTED_MODULE_0__["NgxOlUploadOverlayRef"]; });

/* harmony import */ var _ngx_ol_upload_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-ol-upload-overlay.module */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayModule", function() { return _ngx_ol_upload_overlay_module__WEBPACK_IMPORTED_MODULE_1__["NgxOlUploadOverlayModule"]; });

/* harmony import */ var _ngx_ol_upload_overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-ol-upload-overlay.service */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadOverlayBuilder", function() { return _ngx_ol_upload_overlay_service__WEBPACK_IMPORTED_MODULE_2__["UploadOverlayBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayService", function() { return _ngx_ol_upload_overlay_service__WEBPACK_IMPORTED_MODULE_2__["NgxOlUploadOverlayService"]; });






/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/measure-scrollbar.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/measure-scrollbar.service.ts ***!
  \********************************************************************/
/*! exports provided: MeasureScrollbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureScrollbarService", function() { return MeasureScrollbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MeasureScrollbarService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function MeasureScrollbarService(document) {
        this.document = document;
        this.scrollbarMeasure = {
            position: 'absolute',
            top: '-9999px',
            width: '50px',
            height: '50px',
            overflow: 'scroll'
        };
        this.initScrollBarWidth();
    }
    Object.defineProperty(MeasureScrollbarService.prototype, "scrollBarWidth", {
        get: function () {
            if (this.isNotNil(this._scrollbarWidth)) {
                return this._scrollbarWidth;
            }
            this.initScrollBarWidth();
            return this._scrollbarWidth;
        },
        enumerable: true,
        configurable: true
    });
    MeasureScrollbarService.prototype.initScrollBarWidth = function () {
        var scrollDiv = this.document.createElement('div');
        for (var scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        var width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    };
    MeasureScrollbarService.prototype.isNotNil = function (value) {
        return (typeof (value) !== 'undefined') && value !== null;
    };
    MeasureScrollbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
    ], MeasureScrollbarService);
    return MeasureScrollbarService;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/index.ts":
/*!************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-file/index.ts ***!
  \************************************************************/
/*! exports provided: NgxOlFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_ol_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-ol-file.component */ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxOlFileComponent", function() { return _ngx_ol_file_component__WEBPACK_IMPORTED_MODULE_0__["NgxOlFileComponent"]; });




/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-container\" [title]=\"file.name\">\n  <p class=\"file-view\">\n    <i class=\"anticon anticon-file\"></i>\n    <span class=\"file-suffix\">{{suffix}}</span>\n    <i class=\"anticon anticon-close-circle\" (click)=\"onRemove.emit(file)\"></i>\n  </p>\n  <p class=\"file-name\">{{file.name}}</p>\n</div>"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-container {\n  cursor: pointer; }\n  .file-container .file-view {\n    position: relative;\n    margin-bottom: 10px;\n    padding: 16px 10px;\n    border: 1px dashed #d9d9d9;\n    border-radius: 4px;\n    text-align: center;\n    background-color: #fafafa; }\n  .file-container .file-view .anticon {\n      font-size: 42px; }\n  .file-container .file-view .file-suffix {\n      display: block;\n      margin-top: 8px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .file-container .file-view .anticon-close-circle {\n      position: absolute;\n      top: -8px;\n      right: -8px;\n      font-size: 16px;\n      color: #f5222d; }\n  .file-container .file-name {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    margin-bottom: 0;\n    text-align: center; }\n  .file-container:hover .file-view {\n    border-color: #40a9ff; }\n  .file-container:hover .file-view .file-remove {\n      display: block; }\n"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgxOlFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxOlFileComponent", function() { return NgxOlFileComponent; });
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

var NgxOlFileComponent = /** @class */ (function () {
    function NgxOlFileComponent() {
        this._suffixs = {
            GPX: 'GPX',
            GEOJSON: 'GeoJSON',
            IGC: 'IGC',
            KML: 'KML',
            TOPOJSON: 'TopoJSON',
            SHP: 'Shp'
        };
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NgxOlFileComponent.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            this._file = value;
            this.suffix = this.getSuffix(value);
        },
        enumerable: true,
        configurable: true
    });
    NgxOlFileComponent.prototype.ngOnInit = function () {
    };
    NgxOlFileComponent.prototype.getSuffix = function (file) {
        var fileName = file.name;
        var fileNameSplit = fileName.split('.');
        var suffix = fileNameSplit[fileNameSplit.length - 1].toLocaleUpperCase();
        return this._suffixs[suffix] || suffix;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", File),
        __metadata("design:paramtypes", [File])
    ], NgxOlFileComponent.prototype, "file", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlFileComponent.prototype, "onRemove", void 0);
    NgxOlFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ngx-ol-file]',
            template: __webpack_require__(/*! ./ngx-ol-file.component.html */ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.html"),
            styles: [__webpack_require__(/*! ./ngx-ol-file.component.scss */ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/ngx-ol-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NgxOlFileComponent);
    return NgxOlFileComponent;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/index.ts ***!
  \************************************************************************/
/*! exports provided: NgxOlUploadContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_ol_upload_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-ol-upload-container.component */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadContainerComponent", function() { return _ngx_ol_upload_container_component__WEBPACK_IMPORTED_MODULE_0__["NgxOlUploadContainerComponent"]; });




/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-container\">\n  <div nz-row class=\"file-type\">\n    <label nz-col nzSpan=\"3\" class=\"file-type-lable\">文件类型：</label>\n    <div nz-col nzSpan=\"6\" class=\"file-type-control\">\n      <nz-select [(ngModel)]=\"fileType\" (ngModelChange)=\"onFileTypeChange($event)\" nzPlaceHolder=\"选择上传的文件类型\" style=\"width: 100%\">\n        <nz-option nzValue=\"Shapefile\" nzLabel=\"Shapefile\"></nz-option>\n        <nz-option nzValue=\"GPX\" nzLabel=\"GPX\"></nz-option>\n        <nz-option nzValue=\"GeoJSON\" nzLabel=\"GeoJSON\"></nz-option>\n        <nz-option nzValue=\"IGC\" nzLabel=\"IGC\"></nz-option>\n        <nz-option nzValue=\"KML\" nzLabel=\"KML\"></nz-option>\n        <nz-option nzValue=\"TopoJSON\" nzLabel=\"TopoJSON\"></nz-option>\n      </nz-select>\n    </div>\n  </div>\n  <div ngx-ol-upload class=\"upload-drag-area\" \n  *ngIf=\"files.length === 0\"\n  [accept]=\"accepts\"\n  (fileChange)=\"onFileChange($event)\">\n    <p class=\"upload-drag-icon\">\n      <i class=\"anticon anticon-inbox\"></i>\n    </p>\n    <p class=\"upload-text\">单击或拖动文件到此区域进行上传</p>\n    <p class=\"upload-hint\">支持多个文件上传。可上传的文件格式包括：GPX / GeoJSON / IGC / KML / TopoJSON / Shapefile。</p>\n  </div>\n  <ul class=\"file-list\" *ngIf=\"files.length !== 0\">\n    <li ngx-ol-file class=\"file-item\" *ngFor=\"let file of files\" [file]=\"file\" (onRemove)=\"onRemoveFile($event)\"></li>\n  </ul>\n  <div class=\"error-alert\" *ngIf=\"shapfileError\">\n    <nz-alert \n    *ngFor=\"let item of shapfileError\"\n    (nzOnClose)=\"onAlertClose()\" \n    nzType=\"error\" \n    nzDescription=\"您上传的文件中没有找到.shp文件，请至少上传一个.shp的文件。\" \n    nzCloseText=\"重新选择文件\" \n    nzShowIcon></nz-alert>\n  </div>\n</div>\n\n<div class=\"upload-footer\">\n  <button nz-button (click)=\"onClickOkBtn($event)\" nzType=\"primary\" [nzLoading]=\"loading\" [disabled]=\"submitDisabled\">确 定</button>\n  <button nz-button (click)=\"onClickResetBtn($event)\" nzType=\"default\" [disabled]=\"loading\">重 置</button>\n  <button nz-button (click)=\"onClickCancelBtn($event)\" nzType=\"default\" [disabled]=\"loading\">取 消</button>\n</div>\n"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-container {\n  margin-bottom: 24px;\n  width: 100%; }\n  .upload-container .file-type {\n    margin-bottom: 15px; }\n  .upload-container .file-type .file-type-lable {\n      line-height: 30px; }\n  .upload-container .upload-drag-area .upload-drag-icon {\n    margin-bottom: 20px; }\n  .upload-container .upload-drag-area .upload-drag-icon .anticon {\n      font-size: 48px;\n      color: #40a9ff; }\n  .upload-container .upload-drag-area .upload-text {\n    font-size: 16px;\n    margin: 0 0 4px;\n    color: rgba(0, 0, 0, 0.85); }\n  .upload-container .upload-drag-area .upload-hint {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.45); }\n  .upload-container .file-list {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    list-style: none; }\n  .upload-container .file-list .file-item {\n      flex: auto auto 20%;\n      margin: 10px;\n      width: 20%; }\n  .upload-container .error-alert {\n    margin-top: 10px; }\n  .upload-footer {\n  margin: 0 -24px -24px -24px;\n  padding: 10px 16px;\n  border-top: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n  text-align: right; }\n  .upload-footer button {\n    margin-left: 8px; }\n  .upload-footer button:first-child {\n      margin-left: 0; }\n"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NgxOlUploadContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadContainerComponent", function() { return NgxOlUploadContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_ol_upload_overlay_ref_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngx-ol-upload-overlay-ref.class */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay-ref.class.ts");
/* harmony import */ var _read_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../read-files.service */ "./src/app/ngx-ol-upload-overlay/read-files.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgxOlUploadContainerComponent = /** @class */ (function () {
    function NgxOlUploadContainerComponent(overlay, readFilesService) {
        this.overlay = overlay;
        this.readFilesService = readFilesService;
        this.fileType = 'Shapefile';
        this.files = [];
        this.loading = false;
        this.submitDisabled = true;
        this.shapfileError = null;
    }
    NgxOlUploadContainerComponent.prototype.ngOnInit = function () {
        this.accepts = this.acceptsBuilder(this.fileType);
    };
    NgxOlUploadContainerComponent.prototype.onFileTypeChange = function (event) {
        this.files = [];
        this.accepts = this.acceptsBuilder(event);
        this.shapfileError = null;
        this.validate();
    };
    NgxOlUploadContainerComponent.prototype.onFileChange = function (files) {
        this.files = files || [];
        this.validate();
    };
    NgxOlUploadContainerComponent.prototype.onRemoveFile = function (file) {
        this.files = this.files.filter(function (_file) { return _file !== file; });
        this.validate();
    };
    NgxOlUploadContainerComponent.prototype.onAlertClose = function () {
        this.files = [];
        this.validate();
    };
    NgxOlUploadContainerComponent.prototype.onClickOkBtn = function () {
        var _this = this;
        this.loading = true;
        if (this.fileType === 'Shapefile') {
            var shapefile = this.shapefileBuiler(this.files);
            this.readFilesService.readShapefileAsFeatures(shapefile)
                .subscribe(function (data) { return _this.close(data); }, function (error) { return console.log(error); });
        }
        else {
            this.readFilesService.readFilesAsFeatures(this.files)
                .subscribe(function (data) { return _this.close(data); }, function (error) { return console.log(error); });
        }
    };
    NgxOlUploadContainerComponent.prototype.onClickResetBtn = function () {
        this.fileType = 'Shapefile';
        this.files = [];
        this.accepts = this.acceptsBuilder(this.fileType);
        this.validate();
    };
    NgxOlUploadContainerComponent.prototype.onClickCancelBtn = function () {
        this.overlay.destroy();
    };
    /**
     * @private
     * @param type string
     */
    NgxOlUploadContainerComponent.prototype.acceptsBuilder = function (type) {
        var accepts = {
            // Shapefile: ['.dbf', '.prj', '.sbn', '.sbx', '.shp', '.shx'],
            Shapefile: ['.dbf', '.shp'],
            GPX: ['.gpx'],
            GeoJSON: ['.geojson'],
            IGC: ['.igc'],
            KML: ['.kml'],
            TopoJSON: ['.topojson']
        };
        return accepts[type];
    };
    NgxOlUploadContainerComponent.prototype.attrAccept = function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            var fileName_1 = '' + file.name;
            var mimeType_1 = '' + file.type;
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some(function (type) {
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return fileName_1.toLowerCase().indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1;
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            });
        }
        return true;
    };
    /**
     * @private
     * @param files File[]
     */
    NgxOlUploadContainerComponent.prototype.shapefileBuiler = function (files) {
        var dbf, prj, sbn, sbx, shp, shx;
        for (var i = 0; i < files.length; i++) {
            if (this.attrAccept(files[i], '.dbf')) {
                dbf = files[i];
            }
            else if (this.attrAccept(files[i], '.prj')) {
                prj = files[i];
            }
            else if (this.attrAccept(files[i], '.sbn')) {
                sbn = files[i];
            }
            else if (this.attrAccept(files[i], '.sbx')) {
                sbx = files[i];
            }
            else if (this.attrAccept(files[i], '.shp')) {
                shp = files[i];
            }
            else if (this.attrAccept(files[i], '.shx')) {
                shx = files[i];
            }
        }
        return { dbf: dbf, prj: prj, sbn: sbn, sbx: sbx, shp: shp, shx: shx };
    };
    NgxOlUploadContainerComponent.prototype.validate = function () {
        this.submitDisabled = this.files.length === 0;
        if (this.files.length > 0 && this.fileType === 'Shapefile' && !this.shapefileValidate(this.files)) {
            this.submitDisabled = true;
            this.shapfileError = [Math.random()];
        }
    };
    NgxOlUploadContainerComponent.prototype.shapefileValidate = function (files) {
        for (var i = 0; i < files.length; i++) {
            if (this.attrAccept(files[i], '.shp')) {
                return true;
            }
        }
        return false;
    };
    NgxOlUploadContainerComponent.prototype.close = function (result) {
        this.loading = false;
        this.overlay.destroy(result);
    };
    NgxOlUploadContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngx-ol-upload-container',
            template: __webpack_require__(/*! ./ngx-ol-upload-container.component.html */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.html"),
            styles: [__webpack_require__(/*! ./ngx-ol-upload-container.component.scss */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/ngx-ol-upload-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_ol_upload_overlay_ref_class__WEBPACK_IMPORTED_MODULE_1__["NgxOlUploadOverlayRef"],
            _read_files_service__WEBPACK_IMPORTED_MODULE_2__["ReadFilesService"]])
    ], NgxOlUploadContainerComponent);
    return NgxOlUploadContainerComponent;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay-ref.class.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay-ref.class.ts ***!
  \**************************************************************************/
/*! exports provided: NgxOlUploadOverlayRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayRef", function() { return NgxOlUploadOverlayRef; });
var NgxOlUploadOverlayRef = /** @class */ (function () {
    function NgxOlUploadOverlayRef() {
    }
    return NgxOlUploadOverlayRef;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay.module.ts ***!
  \***********************************************************************/
/*! exports provided: NgxOlUploadOverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayModule", function() { return NgxOlUploadOverlayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-ol-upload-overlay */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/index.ts");
/* harmony import */ var _ngx_ol_upload_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-ol-upload-overlay.service */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay.service.ts");
/* harmony import */ var _measure_scrollbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measure-scrollbar.service */ "./src/app/ngx-ol-upload-overlay/measure-scrollbar.service.ts");
/* harmony import */ var _css_unit_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css-unit.pipe */ "./src/app/ngx-ol-upload-overlay/css-unit.pipe.ts");
/* harmony import */ var _ngx_ol_upload_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngx-ol-upload-container */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/index.ts");
/* harmony import */ var _ngx_ol_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngx-ol-upload */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/index.ts");
/* harmony import */ var _ngx_ol_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngx-ol-file */ "./src/app/ngx-ol-upload-overlay/ngx-ol-file/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _read_files_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./read-files.service */ "./src/app/ngx-ol-upload-overlay/read-files.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var NgxOlUploadOverlayModule = /** @class */ (function () {
    function NgxOlUploadOverlayModule() {
    }
    NgxOlUploadOverlayModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"]
            ],
            declarations: [_ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_3__["NgxOlUploadOverlayComponent"], _css_unit_pipe__WEBPACK_IMPORTED_MODULE_6__["CssUnitPipe"], _ngx_ol_upload_container__WEBPACK_IMPORTED_MODULE_7__["NgxOlUploadContainerComponent"], _ngx_ol_upload__WEBPACK_IMPORTED_MODULE_8__["NgxOlUploadComponent"], _ngx_ol_file__WEBPACK_IMPORTED_MODULE_9__["NgxOlFileComponent"]],
            entryComponents: [_ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_3__["NgxOlUploadOverlayComponent"], _ngx_ol_upload_container__WEBPACK_IMPORTED_MODULE_7__["NgxOlUploadContainerComponent"]],
            providers: [_ngx_ol_upload_overlay_service__WEBPACK_IMPORTED_MODULE_4__["NgxOlUploadOverlayService"], _measure_scrollbar_service__WEBPACK_IMPORTED_MODULE_5__["MeasureScrollbarService"], _read_files_service__WEBPACK_IMPORTED_MODULE_11__["ReadFilesService"]]
        })
    ], NgxOlUploadOverlayModule);
    return NgxOlUploadOverlayModule;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay.service.ts ***!
  \************************************************************************/
/*! exports provided: UploadOverlayBuilder, NgxOlUploadOverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadOverlayBuilder", function() { return UploadOverlayBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayService", function() { return NgxOlUploadOverlayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-ol-upload-overlay */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/index.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _ngx_ol_upload_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-ol-upload-container */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-container/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadOverlayBuilder = /** @class */ (function () {
    function UploadOverlayBuilder(overlay, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.overlay = overlay;
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_ngx_ol_upload_overlay__WEBPACK_IMPORTED_MODULE_2__["NgxOlUploadOverlayComponent"]));
        this.changeProps(__assign({}, options, { component: _ngx_ol_upload_container__WEBPACK_IMPORTED_MODULE_4__["NgxOlUploadContainerComponent"] }));
        this.modalRef.instance.open();
        this.modalRef.instance.$afterClose.subscribe(function () { return _this.destroyModal(); });
    }
    UploadOverlayBuilder.prototype.getInstance = function () {
        return this.modalRef && this.modalRef.instance;
    };
    UploadOverlayBuilder.prototype.destroyModal = function () {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    };
    UploadOverlayBuilder.prototype.changeProps = function (options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    };
    return UploadOverlayBuilder;
}());

var NgxOlUploadOverlayService = /** @class */ (function () {
    function NgxOlUploadOverlayService(overlay) {
        this.overlay = overlay;
    }
    NgxOlUploadOverlayService.prototype.open = function (options) {
        if (options === void 0) { options = {}; }
        var modalRef = new UploadOverlayBuilder(this.overlay, options).getInstance();
        return modalRef;
    };
    NgxOlUploadOverlayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]])
    ], NgxOlUploadOverlayService);
    return NgxOlUploadOverlayService;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/index.ts ***!
  \**********************************************************************/
/*! exports provided: NgxOlUploadOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_ol_upload_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-ol-upload-overlay.component */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayComponent", function() { return _ngx_ol_upload_overlay_component__WEBPACK_IMPORTED_MODULE_0__["NgxOlUploadOverlayComponent"]; });




/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"overlay-mask\" *ngIf=\"maskEnable\"\n  [ngClass]=\"maskAnimationClassMap\"\n  [class.overlay-mask-hidden]=\"hidden\"\n  [ngStyle]=\"maskStyle\"\n  [style.zIndex]=\"zIndex\"></div>\n  <div class=\"overlay-wrap {{wrapClassName}}\"\n  (click)=\"onClickMask($event)\"\n  [style.zIndex]=\"zIndex\"\n  [style.display]=\"hidden ? 'none' : ''\">\n    <div #modalContainer class=\"overlay {{className}}\" \n    [ngClass]=\"modalAnimationClassMap\" \n    [ngStyle]=\"style\"\n    [style.width]=\"width | toCssUnit\"\n    [style.transform-origin]=\"transformOrigin\">\n      <div class=\"overlay-content\">\n        <div class=\"overlay-head-container\">\n          <div class=\"overlay-title\">{{ title }}</div>\n          <button class=\"overlay-close\" *ngIf=\"closable\" (click)=\"onClickCloseBtn($event)\"><i class=\"anticon anticon-close\"></i></button>\n        </div>\n        <div class=\"overlay-body-container\">\n          <ng-container #bodyContainer></ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-fade-enter,\n.ngx-fade-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-fade-leave {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-fade-enter.ngx-fade-enter-active,\n.ngx-fade-appear.ngx-fade-appear-active {\n  -webkit-animation-name: ngxFadeIn;\n          animation-name: ngxFadeIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-fade-leave.ngx-fade-leave-active {\n  -webkit-animation-name: ngxFadeOut;\n          animation-name: ngxFadeOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-fade-enter,\n.ngx-fade-appear {\n  opacity: 0;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n.ngx-fade-leave {\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes ngxFadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes ngxFadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes ngxFadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes ngxFadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.ngx-zoom-enter,\n.ngx-zoom-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-leave {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-enter.ngx-zoom-enter-active,\n.ngx-zoom-appear.ngx-zoom-appear-active {\n  -webkit-animation-name: ngxZoomIn;\n          animation-name: ngxZoomIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-zoom-leave.ngx-zoom-leave-active {\n  -webkit-animation-name: ngxZoomOut;\n          animation-name: ngxZoomOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-zoom-enter,\n.ngx-zoom-appear {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1); }\n\n.ngx-zoom-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n\n.ngx-zoom-big-enter,\n.ngx-zoom-big-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-big-leave {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-big-enter.ngx-zoom-big-enter-active,\n.ngx-zoom-big-appear.ngx-zoom-big-appear-active {\n  -webkit-animation-name: ngxZoomBigIn;\n          animation-name: ngxZoomBigIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-zoom-big-leave.ngx-zoom-big-leave-active {\n  -webkit-animation-name: ngxZoomBigOut;\n          animation-name: ngxZoomBigOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-zoom-big-enter,\n.ngx-zoom-big-appear {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1); }\n\n.ngx-zoom-big-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n\n.ngx-zoom-big-fast-enter,\n.ngx-zoom-big-fast-appear {\n  -webkit-animation-duration: 0.1s;\n          animation-duration: 0.1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-big-fast-leave {\n  -webkit-animation-duration: 0.1s;\n          animation-duration: 0.1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-big-fast-enter.ngx-zoom-big-fast-enter-active,\n.ngx-zoom-big-fast-appear.ngx-zoom-big-fast-appear-active {\n  -webkit-animation-name: ngxZoomBigIn;\n          animation-name: ngxZoomBigIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-zoom-big-fast-leave.ngx-zoom-big-fast-leave-active {\n  -webkit-animation-name: ngxZoomBigOut;\n          animation-name: ngxZoomBigOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-zoom-big-fast-enter,\n.ngx-zoom-big-fast-appear {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1); }\n\n.ngx-zoom-big-fast-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n\n.ngx-zoom-up-enter,\n.ngx-zoom-up-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-up-leave {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-up-enter.ngx-zoom-up-enter-active,\n.ngx-zoom-up-appear.ngx-zoom-up-appear-active {\n  -webkit-animation-name: ngxZoomUpIn;\n          animation-name: ngxZoomUpIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-zoom-up-leave.ngx-zoom-up-leave-active {\n  -webkit-animation-name: ngxZoomUpOut;\n          animation-name: ngxZoomUpOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-zoom-up-enter,\n.ngx-zoom-up-appear {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1); }\n\n.ngx-zoom-up-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n\n.ngx-zoom-down-enter,\n.ngx-zoom-down-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-down-leave {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-down-enter.ngx-zoom-down-enter-active,\n.ngx-zoom-down-appear.ngx-zoom-down-appear-active {\n  -webkit-animation-name: ngxZoomDownIn;\n          animation-name: ngxZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-zoom-down-leave.ngx-zoom-down-leave-active {\n  -webkit-animation-name: ngxZoomDownOut;\n          animation-name: ngxZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-zoom-down-enter,\n.ngx-zoom-down-appear {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1); }\n\n.ngx-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n\n.ngx-zoom-left-enter,\n.ngx-zoom-left-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-left-leave {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-left-enter.ngx-zoom-left-enter-active,\n.ngx-zoom-left-appear.ngx-zoom-left-appear-active {\n  -webkit-animation-name: ngxZoomLeftIn;\n          animation-name: ngxZoomLeftIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-zoom-left-leave.ngx-zoom-left-leave-active {\n  -webkit-animation-name: ngxZoomLeftOut;\n          animation-name: ngxZoomLeftOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-zoom-left-enter,\n.ngx-zoom-left-appear {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1); }\n\n.ngx-zoom-left-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n\n.ngx-zoom-right-enter,\n.ngx-zoom-right-appear {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-right-leave {\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.ngx-zoom-right-enter.ngx-zoom-right-enter-active,\n.ngx-zoom-right-appear.ngx-zoom-right-appear-active {\n  -webkit-animation-name: ngxZoomRightIn;\n          animation-name: ngxZoomRightIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n.ngx-zoom-right-leave.ngx-zoom-right-leave-active {\n  -webkit-animation-name: ngxZoomRightOut;\n          animation-name: ngxZoomRightOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  pointer-events: none; }\n\n.ngx-zoom-right-enter,\n.ngx-zoom-right-appear {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1); }\n\n.ngx-zoom-right-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-timing-function: cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n\n@-webkit-keyframes ngxZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes ngxZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes ngxZoomOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2); } }\n\n@keyframes ngxZoomOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2); } }\n\n@-webkit-keyframes ngxZoomBigIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes ngxZoomBigIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes ngxZoomBigOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@keyframes ngxZoomBigOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@-webkit-keyframes ngxZoomUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes ngxZoomUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes ngxZoomUpOut {\n  0% {\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@keyframes ngxZoomUpOut {\n  0% {\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@-webkit-keyframes ngxZoomLeftIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes ngxZoomLeftIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes ngxZoomLeftOut {\n  0% {\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@keyframes ngxZoomLeftOut {\n  0% {\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@-webkit-keyframes ngxZoomRightIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes ngxZoomRightIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes ngxZoomRightOut {\n  0% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@keyframes ngxZoomRightOut {\n  0% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@-webkit-keyframes ngxZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes ngxZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes ngxZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n@keyframes ngxZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n\n.overlay-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #373737;\n  background-color: rgba(0, 0, 0, 0.65);\n  height: 100%;\n  z-index: 1000;\n  filter: alpha(opacity=50); }\n\n.overlay-mask-hidden {\n    display: none; }\n\n.overlay-wrap {\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.overlay-wrap .overlay {\n    font-family: \"Monospaced Number\",\"Chinese Quote\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-size: 14px;\n    line-height: 1.5;\n    color: rgba(0, 0, 0, 0.65);\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 0 0 24px;\n    list-style: none;\n    position: relative;\n    width: auto;\n    top: 100px; }\n\n.overlay-wrap .overlay .overlay-content {\n      position: relative;\n      background-color: #fff;\n      border: 0;\n      border-radius: 4px;\n      background-clip: padding-box;\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }\n\n.overlay-wrap .overlay .overlay-content .overlay-head-container {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        border-radius: 4px 4px 0 0;\n        background-color: white;\n        border-bottom: 1px solid #e8e8e8; }\n\n.overlay-wrap .overlay .overlay-content .overlay-head-container .overlay-title {\n          flex: auto;\n          padding: 16px 24px;\n          border-radius: 4px 0 0 0;\n          font-size: 16px;\n          line-height: 22px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.85); }\n\n.overlay-wrap .overlay .overlay-content .overlay-head-container .overlay-close {\n          flex: 0 0 56px;\n          width: 56px;\n          height: 56px;\n          border-width: 0;\n          background-color: transparent;\n          font-weight: 700;\n          line-height: 1;\n          text-decoration: none;\n          transition: color .3s;\n          color: rgba(0, 0, 0, 0.45);\n          outline: 0;\n          padding: 0;\n          cursor: pointer; }\n\n.overlay-wrap .overlay .overlay-content .overlay-head-container .overlay-close:focus, .overlay-wrap .overlay .overlay-content .overlay-head-container .overlay-close:hover {\n            color: #444; }\n\n.overlay-wrap .overlay .overlay-content .overlay-body-container {\n        padding: 24px; }\n"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NgxOlUploadOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadOverlayComponent", function() { return NgxOlUploadOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd_src_core_util_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/src/core/util/convert */ "./node_modules/ng-zorro-antd/src/core/util/convert.js");
/* harmony import */ var _ngx_ol_upload_overlay_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngx-ol-upload-overlay-ref.class */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay-ref.class.ts");
/* harmony import */ var _measure_scrollbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../measure-scrollbar.service */ "./src/app/ngx-ol-upload-overlay/measure-scrollbar.service.ts");
/* harmony import */ var _Overlay_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Overlay-util */ "./src/app/ngx-ol-upload-overlay/Overlay-util.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var NgxOlUploadOverlayComponent = /** @class */ (function (_super) {
    __extends(NgxOlUploadOverlayComponent, _super);
    function NgxOlUploadOverlayComponent(renderer, cfr, viewContainer, measureScrollbarService, document) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.cfr = cfr;
        _this.viewContainer = viewContainer;
        _this.measureScrollbarService = measureScrollbarService;
        _this.document = document;
        _this.visible = false;
        _this.$visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.zIndex = 1000;
        _this.width = 520;
        _this.maskEnable = true;
        _this.maskClosable = true;
        _this.closable = true;
        _this.$afterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Trigger when modal open(visible) after animations
        _this.$afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Trigger when modal leave-animation over
        _this.onOk = function () { };
        _this.onCancel = function () { };
        _this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        return _this;
    }
    Object.defineProperty(NgxOlUploadOverlayComponent.prototype, "afterOpen", {
        get: function () {
            return this.$afterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxOlUploadOverlayComponent.prototype, "afterClose", {
        get: function () {
            return this.$afterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxOlUploadOverlayComponent.prototype, "hidden", {
        get: function () {
            return !this.visible && !this.animationState;
        },
        enumerable: true,
        configurable: true
    });
    NgxOlUploadOverlayComponent.prototype.ngOnInit = function () {
        this.createDynamicComponent(this.component);
    };
    NgxOlUploadOverlayComponent.prototype.ngOnChanges = function (changes) {
        if (changes.visible) {
            this.handleVisibleStateChange(this.visible, !changes.visible.firstChange);
        }
    };
    NgxOlUploadOverlayComponent.prototype.ngAfterViewInit = function () {
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
    };
    NgxOlUploadOverlayComponent.prototype.ngOnDestroy = function () { };
    NgxOlUploadOverlayComponent.prototype.open = function () {
        this.changeVisibleFromInside(true);
    };
    NgxOlUploadOverlayComponent.prototype.close = function (result) {
        this.changeVisibleFromInside(false, result);
    };
    NgxOlUploadOverlayComponent.prototype.destroy = function (result) {
        this.close(result);
    };
    NgxOlUploadOverlayComponent.prototype.getContentComponent = function () {
        return this.contentComponentRef && this.contentComponentRef.instance;
    };
    NgxOlUploadOverlayComponent.prototype.onClickMask = function ($event) {
        if (this.maskEnable &&
            this.maskClosable &&
            $event.target.classList.contains('overlay-wrap') &&
            this.visible) {
            this.onClickOkCancel('cancel');
        }
    };
    NgxOlUploadOverlayComponent.prototype.onClickCloseBtn = function () {
        if (this.visible) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @private
     * @param type 'ok'|'cancel'
     */
    NgxOlUploadOverlayComponent.prototype.onClickOkCancel = function (type) {
        var _this = this;
        var trigger = { 'ok': this.onOk, 'cancel': this.onCancel }[type];
        var result = (typeof trigger === 'function') ? trigger(this.getContentComponent()) : undefined;
        var caseClose = function (doClose) { return (doClose !== false) && _this.close(doClose); }; // Users can return "false" to prevent closing by default
        if (this.isPromise(result)) {
            var handleThen = function (doClose) {
                caseClose(doClose);
            };
            result.then(handleThen).catch(handleThen);
        }
        else {
            caseClose(result);
        }
    };
    /**
     * Change visible from insid
     * @private
     * @param visible boolean
     * @param closeResult R
     */
    NgxOlUploadOverlayComponent.prototype.changeVisibleFromInside = function (visible, closeResult) {
        if (this.visible !== visible) {
            // Change visible value immediately
            this.visible = visible;
            this.$visibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    };
    /**
     * Do rest things when visible state changed
     * @private
     * @param visible boolean
     * @param animation boolean
     * @param closeResult R
     */
    NgxOlUploadOverlayComponent.prototype.handleVisibleStateChange = function (visible, animation, closeResult) {
        var _this = this;
        if (animation === void 0) { animation = true; }
        if (visible) {
            this.changeBodyOverflow(1);
        }
        return Promise
            .resolve(animation && this.animateTo(visible))
            .then(function () {
            if (visible) {
                _this.$afterOpen.emit();
            }
            else {
                _this.$afterClose.emit(closeResult);
                _this.changeBodyOverflow(); // Show/hide scrollbar when animation is over
            }
        });
    };
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @private
     * @param plusNum number - The number that the openModals.length will increase soon
     */
    NgxOlUploadOverlayComponent.prototype.changeBodyOverflow = function (plusNum) {
        if (plusNum === void 0) { plusNum = 0; }
        if (plusNum > 0) {
            this.renderer.setStyle(this.document.body, 'padding-right', this.measureScrollbarService.scrollBarWidth + "px");
            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        }
        else {
            this.renderer.removeStyle(this.document.body, 'padding-right');
            this.renderer.removeStyle(this.document.body, 'overflow');
        }
    };
    /**
     * @private
     * @param state AnimationState
     */
    NgxOlUploadOverlayComponent.prototype.changeAnimationState = function (state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = (_a = {},
                _a["ngx-fade-" + state] = true,
                _a["ngx-fade-" + state + "-active"] = true,
                _a);
            this.modalAnimationClassMap = (_b = {},
                _b["ngx-zoom-" + state] = true,
                _b["ngx-zoom-" + state + "-active"] = true,
                _b);
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
        var _a, _b;
    };
    /**
     * @private
     * @param isVisible boolean
     */
    NgxOlUploadOverlayComponent.prototype.animateTo = function (isVisible) {
        var _this = this;
        if (isVisible) {
            window.setTimeout(function () { return _this.updateTransformOrigin(); }); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(function (resolve) { return window.setTimeout(function () {
            _this.changeAnimationState(null);
            resolve();
        }, 200); });
    };
    /**
     * Update transform-origin to the last click position on document
     * @private
     */
    NgxOlUploadOverlayComponent.prototype.updateTransformOrigin = function () {
        var modalElement = this.modalContainer.nativeElement;
        var lastPosition = _Overlay_util__WEBPACK_IMPORTED_MODULE_5__["default"].getLastClickPosition();
        if (lastPosition) {
            this.transformOrigin = lastPosition.x - modalElement.offsetLeft + "px " + (lastPosition.y - modalElement.offsetTop) + "px 0px";
        }
    };
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @private
     * @param component Type<T> - Component Class
     */
    NgxOlUploadOverlayComponent.prototype.createDynamicComponent = function (component) {
        var factory = this.cfr.resolveComponentFactory(component);
        var childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [{ provide: _ngx_ol_upload_overlay_ref_class__WEBPACK_IMPORTED_MODULE_3__["NgxOlUploadOverlayRef"], useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.componentParams) {
            Object.assign(this.contentComponentRef.instance, this.componentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    };
    NgxOlUploadOverlayComponent.prototype.isPromise = function (obj) {
        return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function' && typeof obj.catch === 'function';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxOlUploadOverlayComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"])
    ], NgxOlUploadOverlayComponent.prototype, "component", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadOverlayComponent.prototype, "componentParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(ng_zorro_antd_src_core_util_convert__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        __metadata("design:type", Boolean)
    ], NgxOlUploadOverlayComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadOverlayComponent.prototype, "$visibleChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NgxOlUploadOverlayComponent.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadOverlayComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxOlUploadOverlayComponent.prototype, "wrapClassName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxOlUploadOverlayComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadOverlayComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(ng_zorro_antd_src_core_util_convert__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        __metadata("design:type", Boolean)
    ], NgxOlUploadOverlayComponent.prototype, "maskEnable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(ng_zorro_antd_src_core_util_convert__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
        __metadata("design:type", Boolean)
    ], NgxOlUploadOverlayComponent.prototype, "maskClosable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadOverlayComponent.prototype, "maskStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NgxOlUploadOverlayComponent.prototype, "closable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadOverlayComponent.prototype, "$afterOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadOverlayComponent.prototype, "$afterClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Function)
    ], NgxOlUploadOverlayComponent.prototype, "onOk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Function)
    ], NgxOlUploadOverlayComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NgxOlUploadOverlayComponent.prototype, "modalContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bodyContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], NgxOlUploadOverlayComponent.prototype, "bodyContainer", void 0);
    NgxOlUploadOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngx-ol-upload-overlay',
            template: __webpack_require__(/*! ./ngx-ol-upload-overlay.component.html */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.html"),
            styles: [__webpack_require__(/*! ./ngx-ol-upload-overlay.component.scss */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload-overlay/ngx-ol-upload-overlay.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _measure_scrollbar_service__WEBPACK_IMPORTED_MODULE_4__["MeasureScrollbarService"], Object])
    ], NgxOlUploadOverlayComponent);
    return NgxOlUploadOverlayComponent;
}(_ngx_ol_upload_overlay_ref_class__WEBPACK_IMPORTED_MODULE_3__["NgxOlUploadOverlayRef"]));



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload/index.ts ***!
  \**************************************************************/
/*! exports provided: NgxOlUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_ol_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-ol-upload.component */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadComponent", function() { return _ngx_ol_upload_component__WEBPACK_IMPORTED_MODULE_0__["NgxOlUploadComponent"]; });




/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drag-upload\" #container>\n  <input type=\"file\" #fileInput class=\"file-input\" [attr.accept]=\"accept\" multiple (change)=\"onChange($event)\">\n  <div class=\"drag-upload-content\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"drag-drop-area\" \n  (drag)=\"onDrag($event)\"\n  (dragend)=\"onDragEnd($event)\"\n  (dragenter)=\"onDragEnter($event)\"\n  (dragexit)=\"onDragExit($event)\"\n  (dragleave)=\"onDragLeave($event)\"\n  (dragover)=\"onDragOver($event)\"\n  (dragstart)=\"onDragStart($event)\"\n  (drop)=\"onDrop($event)\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-upload {\n  position: relative;\n  width: 100%;\n  height: auto;\n  border: 1px dashed #d9d9d9;\n  border-radius: 4px;\n  transition: border-color .3s;\n  text-align: center;\n  background-color: #fafafa;\n  cursor: pointer; }\n  .drag-upload.drag-enter, .drag-upload:hover {\n    border-color: #40a9ff; }\n  .drag-upload .file-input {\n    display: none; }\n  .drag-upload .drag-upload-content {\n    padding: 30px 16px; }\n  .drag-upload .drag-drop-area {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n"

/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.ts ***!
  \********************************************************************************/
/*! exports provided: NgxOlUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxOlUploadComponent", function() { return NgxOlUploadComponent; });
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

var NgxOlUploadComponent = /** @class */ (function () {
    function NgxOlUploadComponent(renderer) {
        this.renderer = renderer;
        this.fileInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDragExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgxOlUploadComponent.prototype.onclick = function () {
        this.fileInput.nativeElement.click();
    };
    NgxOlUploadComponent.prototype.onkeydown = function (event) {
        if (event.key === 'Enter') {
            this.onclick();
        }
    };
    NgxOlUploadComponent.prototype.ngOnInit = function () { };
    NgxOlUploadComponent.prototype.onDrag = function (event) {
        this.handleStop(event);
        this.fileDrag.emit(event);
    };
    NgxOlUploadComponent.prototype.onDragEnd = function (event) {
        this.handleStop(event);
        this.fileDragEnd.emit(event);
    };
    NgxOlUploadComponent.prototype.onDragEnter = function (event) {
        this.handleStop(event);
        this.fileDragEnter.emit(event);
        this.renderer.addClass(this.container.nativeElement, 'drag-enter');
    };
    NgxOlUploadComponent.prototype.onDragExit = function (event) {
        this.handleStop(event);
        this.fileDragExit.emit(event);
    };
    NgxOlUploadComponent.prototype.onDragLeave = function (event) {
        this.handleStop(event);
        this.fileDragLeave.emit(event);
        this.renderer.removeClass(this.container.nativeElement, 'drag-enter');
    };
    NgxOlUploadComponent.prototype.onDragOver = function (event) {
        this.handleStop(event);
        this.fileDragOver.emit(event);
    };
    NgxOlUploadComponent.prototype.onDragStart = function (event) {
        this.handleStop(event);
        this.fileDragStart.emit(event);
    };
    NgxOlUploadComponent.prototype.onDrop = function (event) {
        this.handleStop(event);
        this.fileDrop.emit(event);
        this.fileChange.emit(this.filterfiles(event.dataTransfer.files));
    };
    NgxOlUploadComponent.prototype.onChange = function (event) {
        var target = event.target;
        this.fileInputChange.emit(event);
        this.fileChange.emit(this.filterfiles(target.files));
    };
    NgxOlUploadComponent.prototype.handleStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NgxOlUploadComponent.prototype.attrAccept = function (file, acceptedFiles) {
        if (file && acceptedFiles) {
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            var fileName_1 = '' + file.name;
            var mimeType_1 = '' + file.type;
            var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
            return acceptedFilesArray.some(function (type) {
                var validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return fileName_1.toLowerCase().indexOf(validType.toLowerCase(), fileName_1.toLowerCase().length - validType.toLowerCase().length) !== -1;
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType_1 === validType.replace(/\/.*$/, '');
                }
                return mimeType_1 === validType;
            });
        }
        return true;
    };
    NgxOlUploadComponent.prototype.filterfiles = function (files) {
        var _this = this;
        return Array.prototype.slice.call(files).filter(function (file) { return _this.attrAccept(file, _this.accept); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxOlUploadComponent.prototype, "accept", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileInputChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDrag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDragEnter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDragExit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDragLeave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDragOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileDrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxOlUploadComponent.prototype, "fileChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NgxOlUploadComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NgxOlUploadComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgxOlUploadComponent.prototype, "onclick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NgxOlUploadComponent.prototype, "onkeydown", null);
    NgxOlUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ngx-ol-upload]',
            template: __webpack_require__(/*! ./ngx-ol-upload.component.html */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.html"),
            styles: [__webpack_require__(/*! ./ngx-ol-upload.component.scss */ "./src/app/ngx-ol-upload-overlay/ngx-ol-upload/ngx-ol-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], NgxOlUploadComponent);
    return NgxOlUploadComponent;
}());



/***/ }),

/***/ "./src/app/ngx-ol-upload-overlay/read-files.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/ngx-ol-upload-overlay/read-files.service.ts ***!
  \*************************************************************/
/*! exports provided: ReadFilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadFilesService", function() { return ReadFilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var shapefile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shapefile */ "./node_modules/shapefile/index.js");
/* harmony import */ var ol_format_GPX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/format/GPX */ "./node_modules/ol/format/GPX.js");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_format_IGC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/format/IGC */ "./node_modules/ol/format/IGC.js");
/* harmony import */ var ol_format_KML__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/format/KML */ "./node_modules/ol/format/KML.js");
/* harmony import */ var ol_format_TopoJSON__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/format/TopoJSON */ "./node_modules/ol/format/TopoJSON.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReadFilesService = /** @class */ (function () {
    function ReadFilesService() {
        this.formatConstructors = [ol_format_GPX__WEBPACK_IMPORTED_MODULE_4__["default"], ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_5__["default"], ol_format_IGC__WEBPACK_IMPORTED_MODULE_6__["default"], ol_format_KML__WEBPACK_IMPORTED_MODULE_7__["default"], ol_format_TopoJSON__WEBPACK_IMPORTED_MODULE_8__["default"]];
        this.projection = 'EPSG:3857';
    }
    /**
     * @public
     * @param shapefiles Shapefile
     * @returns Observable<any[]>
     */
    ReadFilesService.prototype.readShapefileAsFeatures = function (shapefiles) {
        var files = [shapefiles.shp, shapefiles.dbf];
        return this.readFilesAsArrayBuffer(files).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(shapefile__WEBPACK_IMPORTED_MODULE_3__["read"].apply(shapefile__WEBPACK_IMPORTED_MODULE_3__, result)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
                var format = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_5__["default"]();
                return format.readFeatures(result, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error); }));
        }));
    };
    ReadFilesService.prototype.readFilesAsArrayBuffer = function (files, result, counter) {
        var _this = this;
        if (result === void 0) { result = []; }
        if (counter === void 0) { counter = 0; }
        return this.readAsArrayBuffer(files[counter]).pipe(files[counter + 1] ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (data) {
            result[counter] = data;
            counter++;
            return _this.readFilesAsArrayBuffer(files, result, counter);
        }) : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            result[counter] = data;
            return result;
        }));
    };
    ReadFilesService.prototype.readAsArrayBuffer = function (file) {
        if (file) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(reader, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
                var target = event.target;
                return target.result;
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    };
    ReadFilesService.prototype.readFilesAsFeatures = function (files) {
        var _this = this;
        var counter = 0;
        var features = [];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var _loop_1 = function (i) {
                var file = files[i];
                var reader = new FileReader();
                reader.addEventListener('load', function (event) {
                    var result = _this.handleResult(file, event);
                    if (result && result.length > 0) {
                        features = features.concat(result);
                    }
                    counter++;
                    if (counter === files.length) {
                        observer.next(features);
                        observer.complete();
                    }
                });
                reader.readAsText(file);
            };
            for (var i = 0; i < files.length; i++) {
                _loop_1(i);
            }
        });
    };
    ReadFilesService.prototype.handleResult = function (file, event) {
        var fileReader = event.target;
        var result = fileReader.result;
        var features = [];
        for (var i = 0; i < this.formatConstructors.length; i++) {
            var formatConstructor = this.formatConstructors[i];
            var format = new formatConstructor();
            features = this.tryReadFeatures(format, result, {
                featureProjection: this.projection
            }) || null;
            if (features && features.length > 0) {
                break;
            }
        }
        return features;
    };
    ReadFilesService.prototype.tryReadFeatures = function (format, text, options) {
        try {
            return format.readFeatures(text, options);
        }
        catch (e) {
            return null;
        }
    };
    ReadFilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ReadFilesService);
    return ReadFilesService;
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

module.exports = __webpack_require__(/*! /home/jonny/Documents/demo/ngx-ol-drag-and-drop/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map