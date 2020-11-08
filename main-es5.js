function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_2__["appRoutes"])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_2__["appRoutes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../db */
    "./src/db.ts");
    /* harmony import */


    var _services_opportunities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/opportunities.service */
    "./src/app/services/opportunities.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./opportunity/opportunity.component */
    "./src/app/opportunity/opportunity.component.ts");
    /* harmony import */


    var _people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./people/people.component */
    "./src/app/people/people.component.ts");
    /* harmony import */


    var _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./opportunities/opportunities.component */
    "./src/app/opportunities/opportunities.component.ts");

    function AppComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-opportunities");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active-li": a0
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_opportunitiesService) {
        _classCallCheck(this, AppComponent);

        this._opportunitiesService = _opportunitiesService;
        this.displayPeople = true;
        this.displayOpportunities = false;
        this.title = 'test-torre';
        this.opportunities = _db__WEBPACK_IMPORTED_MODULE_1__["db"].opportunities;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._opportunitiesService._opportunitySource.subscribe(function (opp) {
            return _this.opportunity = opp;
          });
        }
      }, {
        key: "showOpportunities",
        value: function showOpportunities() {
          this.displayOpportunities = true;
          this.displayPeople = false;

          this._opportunitiesService.sendOpportunityInfo({});
        }
      }, {
        key: "showPeople",
        value: function showPeople() {
          this.displayOpportunities = false;
          this.displayPeople = true;

          this._opportunitiesService.sendOpportunityInfo({});
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_opportunities_service__WEBPACK_IMPORTED_MODULE_2__["OpportunitiesService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 8,
      consts: [[3, "ngClass"], [3, "click"], [4, "ngIf", "ngIfElse"], ["opportunities", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_2_listener() {
            return ctx.showPeople();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "People");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_5_listener() {
            return ctx.showOpportunities();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Opportunities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ng_template_8_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-opportunity");
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.displayPeople));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx.displayPeople));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayPeople)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_4__["OpportunityComponent"], _people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"], _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_6__["OpportunitiesComponent"]],
      styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #27292d;\n  height: 70px;\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 7px;\n  width: 50%;\n  height: 100%;\n  font-size: larger;\n  float: left;\n  text-transform: uppercase;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  color: #4caf50;\n}\n\n.active-li[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #4caf50;\n  color: #4caf50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI5MmQ7XG4gIGhlaWdodDogNzBweDtcbn1cblxubGkge1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5saSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG59XG5cbmxpOmhvdmVyIHtcbiAgY29sb3I6ICM0Y2FmNTA7XG59XG5cbi5hY3RpdmUtbGkge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzRjYWY1MDtcbiAgY29sb3I6ICM0Y2FmNTA7XG59XG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_opportunities_service__WEBPACK_IMPORTED_MODULE_2__["OpportunitiesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _people_people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./people/people.component */
    "./src/app/people/people.component.ts");
    /* harmony import */


    var _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./opportunities/opportunities.component */
    "./src/app/opportunities/opportunities.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./opportunity/opportunity.component */
    "./src/app/opportunity/opportunity.component.ts");
    /* harmony import */


    var _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./page404/page404.component */
    "./src/app/page404/page404.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _services_opportunities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/opportunities.service */
    "./src/app/services/opportunities.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_opportunities_service__WEBPACK_IMPORTED_MODULE_10__["OpportunitiesService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _people_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"], _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_5__["OpportunitiesComponent"], _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_7__["OpportunityComponent"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _people_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"], _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_5__["OpportunitiesComponent"], _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_7__["OpportunityComponent"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [_services_opportunities_service__WEBPACK_IMPORTED_MODULE_10__["OpportunitiesService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./opportunity/opportunity.component */
    "./src/app/opportunity/opportunity.component.ts");

    var appRoutes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
      pathMatch: 'full'
    }, {
      path: 'opportunity',
      component: _opportunity_opportunity_component__WEBPACK_IMPORTED_MODULE_2__["OpportunityComponent"],
      pathMatch: 'full'
    }, {
      path: '',
      component: _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _people_people_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../people/people.component */
    "./src/app/people/people.component.ts");
    /* harmony import */


    var _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../opportunities/opportunities.component */
    "./src/app/opportunities/opportunities.component.ts");

    function HomeComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-people");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-opportunities");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active-li": a0
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.people = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleRoute",
        value: function toggleRoute() {
          this.people = !this.people;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 8,
      consts: [[3, "ngClass"], [3, "click"], [4, "ngIf", "ngIfElse"], ["opportunities", ""]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_2_listener() {
            return ctx.toggleRoute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "People");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_5_listener() {
            return ctx.toggleRoute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Opportunities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_ng_template_8_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.people));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx.people));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.people)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _people_people_component__WEBPACK_IMPORTED_MODULE_2__["PeopleComponent"], _opportunities_opportunities_component__WEBPACK_IMPORTED_MODULE_3__["OpportunitiesComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/opportunities/opportunities.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/opportunities/opportunities.component.ts ***!
    \**********************************************************/

  /*! exports provided: OpportunitiesComponent */

  /***/
  function srcAppOpportunitiesOpportunitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpportunitiesComponent", function () {
      return OpportunitiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../db */
    "./src/db.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_opportunities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/opportunities.service */
    "./src/app/services/opportunities.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OpportunitiesComponent_div_0_div_1_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Remote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OpportunitiesComponent_div_0_div_1_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var op_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r2.place.location, " ");
      }
    }

    function OpportunitiesComponent_div_0_div_1_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To be defined ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OpportunitiesComponent_div_0_div_1_ng_template_16_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var op_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", op_r2.compensation.minAmount, " - ", op_r2.compensation.maxAmount, " ");
      }
    }

    function OpportunitiesComponent_div_0_div_1_ng_template_16_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var op_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r2.compensation.minAmount, " ");
      }
    }

    function OpportunitiesComponent_div_0_div_1_ng_template_16_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/per year");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OpportunitiesComponent_div_0_div_1_ng_template_16_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "/per month");
      }
    }

    function OpportunitiesComponent_div_0_div_1_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OpportunitiesComponent_div_0_div_1_ng_template_16_span_0_Template, 2, 2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OpportunitiesComponent_div_0_div_1_ng_template_16_ng_template_1_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OpportunitiesComponent_div_0_div_1_ng_template_16_span_3_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OpportunitiesComponent_div_0_div_1_ng_template_16_ng_template_4_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var op_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", op_r2.compensation.maxAmount)("ngIfElse", _r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", op_r2.compensation.periodicity === "yearly")("ngIfElse", _r14);
      }
    }

    function OpportunitiesComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OpportunitiesComponent_div_0_div_1_p_10_Template, 3, 0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OpportunitiesComponent_div_0_div_1_ng_template_11_Template, 3, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OpportunitiesComponent_div_0_div_1_span_15_Template, 2, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OpportunitiesComponent_div_0_div_1_ng_template_16_Template, 6, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpportunitiesComponent_div_0_div_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var op_r2 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.sendOpportunity(op_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Ver ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var op_r2 = ctx.$implicit;

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", op_r2.organizations[0].picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.objective);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.commitment.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.organizations[0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", op_r2.place.remote)("ngIfElse", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r2.compensation.currency, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", op_r2.compensation.code === "to-be-defined")("ngIfElse", _r7);
      }
    }

    function OpportunitiesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OpportunitiesComponent_div_0_div_1_Template, 21, 9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.opps);
      }
    }

    var OpportunitiesComponent = /*#__PURE__*/function () {
      function OpportunitiesComponent(http, _opportunitiesService) {
        _classCallCheck(this, OpportunitiesComponent);

        this.http = http;
        this._opportunitiesService = _opportunitiesService;
        this.opportunities = _db__WEBPACK_IMPORTED_MODULE_1__["db"].opportunities;
        this.displayOpportunity = false;
        this.opps = [];
      }

      _createClass(OpportunitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._opportunitiesService._opportunitySource.subscribe(function (opp) {
            return _this2.opportunity = opp;
          });

          this.opportunities.forEach(function (op) {
            return _this2.http.get("https://torre.co/api/opportunities/".concat(op)).subscribe(function (job) {
              _this2.opps.push(job);
            });
          });
        }
      }, {
        key: "sendOpportunity",
        value: function sendOpportunity(opp) {
          this._opportunitiesService.sendOpportunityInfo(opp);
        }
      }]);

      return OpportunitiesComponent;
    }();

    OpportunitiesComponent.ɵfac = function OpportunitiesComponent_Factory(t) {
      return new (t || OpportunitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_opportunities_service__WEBPACK_IMPORTED_MODULE_3__["OpportunitiesService"]));
    };

    OpportunitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OpportunitiesComponent,
      selectors: [["app-opportunities"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-text-wrapper"], [1, "card-image-wrapper"], ["alt", "", 3, "src"], [1, "job-title"], [1, "employment-type"], ["class", "employment-type", 4, "ngIf", "ngIfElse"], ["location", ""], [1, "compensation"], [4, "ngIf", "ngIfElse"], ["salary", ""], [1, "job-details-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-globe"], ["aria-hidden", "true", 1, "fa", "fa-building"], ["fixedAmount", ""], ["monthly", ""]],
      template: function OpportunitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OpportunitiesComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.opportunity.id);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".card[_ngcontent-%COMP%] {\n  margin: 16px auto;\n  width: 50%;\n  min-height: 225px;\n  background-color: #27292d;\n  padding: 16px;\n  border-radius: 4px;\n}\n\n*[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.job-title[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n  color: #cddc39;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n}\n\n.employment-type[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.65);\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    letter-spacing: .02em;\n}\n\n.compensation[_ngcontent-%COMP%] {\n    font-weight: 700;\n    letter-spacing: .01em;\n    display: block;\n}\n\n.job-details-button[_ngcontent-%COMP%] {\n    background-color: #CDDC39 !important;\n    color: rgba(0, 0, 0, 0.87) !important;\n    margin-right: 0!important;\n    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);\n    background: none;\n    border: 0;\n    border-radius: 2px;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 14px;\n    font-style: inherit;\n    font-variant: inherit;\n    font-weight: 600;\n    letter-spacing: inherit;\n    line-height: 36px;\n    margin: 6px 8px;\n    min-height: 36px;\n    min-width: 88px;\n    padding: 0 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: all .4s cubic-bezier(.25,.8,.25,1);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    vertical-align: top;\n    white-space: nowrap;\n    float: right;\n}\n\n.card-text-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 60%;\n    float: left;\n}\n\n.card-image-wrapper[_ngcontent-%COMP%] {\n    width: 10%;\n    float: right;\n}\n\n.card-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vcHBvcnR1bml0aWVzL29wcG9ydHVuaXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLCtGQUErRjtJQUMvRixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLHlCQUFpQjtPQUFqQixzQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYXBwL29wcG9ydHVuaXRpZXMvb3Bwb3J0dW5pdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBtYXJnaW46IDE2cHggYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogMjI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI5MmQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuKiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmpvYi10aXRsZSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIGNvbG9yOiAjY2RkYzM5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xufVxuXG4uZW1wbG95bWVudC10eXBlIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAyZW07XG59XG5cbi5jb21wZW5zYXRpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uam9iLWRldGFpbHMtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0REQzM5ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NykgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luOiA2cHggOHB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgbWluLXdpZHRoOiA4OHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmNhcmQtdGV4dC13cmFwcGVyIHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2FyZC1pbWFnZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmNhcmQtaW1hZ2Utd3JhcHBlciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpportunitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-opportunities',
          templateUrl: './opportunities.component.html',
          styleUrls: ['./opportunities.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_opportunities_service__WEBPACK_IMPORTED_MODULE_3__["OpportunitiesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/opportunity/opportunity.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/opportunity/opportunity.component.ts ***!
    \******************************************************/

  /*! exports provided: OpportunityComponent */

  /***/
  function srcAppOpportunityOpportunityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpportunityComponent", function () {
      return OpportunityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_opportunities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/opportunities.service */
    "./src/app/services/opportunities.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OpportunityComponent_div_0_div_9_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sobre la Empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r3.content, " ");
      }
    }

    function OpportunityComponent_div_0_div_9_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Responsabilidades");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r3.content, " ");
      }
    }

    function OpportunityComponent_div_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OpportunityComponent_div_0_div_9_span_1_Template, 5, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OpportunityComponent_div_0_div_9_span_2_Template, 5, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r3.code === "organizations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r3.code === "responsibilities");
      }
    }

    function OpportunityComponent_div_0_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", skill_r8.name, " - ", skill_r8.experience, " ");
      }
    }

    function OpportunityComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OpportunityComponent_div_0_div_9_Template, 3, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Habilidades y experiencia requeridas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OpportunityComponent_div_0_span_13_Template, 2, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.opportunity.objective);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.opportunity.commitment.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.opportunity.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.opportunity.strengths);
      }
    }

    var OpportunityComponent = /*#__PURE__*/function () {
      function OpportunityComponent(_opportunitiesService) {
        _classCallCheck(this, OpportunityComponent);

        this._opportunitiesService = _opportunitiesService;
      }

      _createClass(OpportunityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._opportunitiesService._opportunitySource.subscribe(function (opp) {
            return _this3.opportunity = opp;
          });
        }
      }]);

      return OpportunityComponent;
    }();

    OpportunityComponent.ɵfac = function OpportunityComponent_Factory(t) {
      return new (t || OpportunityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_opportunities_service__WEBPACK_IMPORTED_MODULE_1__["OpportunitiesService"]));
    };

    OpportunityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OpportunityComponent,
      selectors: [["app-opportunity"]],
      decls: 1,
      vars: 1,
      consts: [["style", "color: white", 4, "ngIf"], [2, "color", "white"], [1, "opp-container"], [1, "img-container"], ["src", "https://res.cloudinary.com/torre-technologies-co/image/upload/v1603820162/origin/opportunities/69489970_1079555802249314_6382519202279849984_n_u8s4ao.jpg", "alt", ""], [1, "opportunity-title"], [1, "opportunity-type"], ["style", "margin-top: 15px", 4, "ngFor", "ngForOf"], [1, "skills"], [2, "margin-top", "15px"], ["class", "skill", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "skill"]],
      template: function OpportunityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OpportunityComponent_div_0_Template, 14, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opportunity.id);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".opp-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  margin: 30px auto;\n  width: 80%;\n  background-color: #27292d;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  max-height: 400px;\n}\n\n.opportunity-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.opportunity-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  background-color: #27292d;\n  position: relative;\n  bottom: 20px;\n  display: inline-block;\n  width: 50%;\n  height: 50px;\n  border-radius: 10px;\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 24px;\n}\n\n.opportunity-type[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 18px;\n    font-weight: 400;\n    color: rgba(255, 255, 255, 0.65)\n}\n\n.skills[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-bottom: 6px;\n    color: #cddc39;\n}\n\n.skill[_ngcontent-%COMP%] {\n    height: 16px;\n    background-color: rgba(255, 255, 255, 0.16);\n    border-radius: 32px;\n    display: inline-block;\n    font-size: 13px;\n    height: 32px;\n    line-height: 16px;\n    overflow: hidden;\n    padding: 8px 12px;\n    white-space: nowrap;\n    color: rgba(255, 255, 255, 0.90);\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vcHBvcnR1bml0eS9vcHBvcnR1bml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC9vcHBvcnR1bml0eS9vcHBvcnR1bml0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wcC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTJkO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaW1nLWNvbnRhaW5lciBpbWcge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbi5vcHBvcnR1bml0eS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm9wcG9ydHVuaXR5LXRpdGxlIGRpdiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTJkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5vcHBvcnR1bml0eS10eXBlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSlcbn1cblxuLnNraWxscyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgY29sb3I6ICNjZGRjMzk7XG59XG5cbi5za2lsbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MCk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpportunityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-opportunity',
          templateUrl: './opportunity.component.html',
          styleUrls: ['./opportunity.component.css']
        }]
      }], function () {
        return [{
          type: _services_opportunities_service__WEBPACK_IMPORTED_MODULE_1__["OpportunitiesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page404/page404.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/page404/page404.component.ts ***!
    \**********************************************/

  /*! exports provided: Page404Component */

  /***/
  function srcAppPage404Page404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page404Component", function () {
      return Page404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Page404Component = /*#__PURE__*/function () {
      function Page404Component() {
        _classCallCheck(this, Page404Component);
      }

      _createClass(Page404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page404Component;
    }();

    Page404Component.ɵfac = function Page404Component_Factory(t) {
      return new (t || Page404Component)();
    };

    Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page404Component,
      selectors: [["app-page404"]],
      decls: 2,
      vars: 0,
      template: function Page404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page404 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page404',
          templateUrl: './page404.component.html',
          styleUrls: ['./page404.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/people/people.component.ts":
  /*!********************************************!*\
    !*** ./src/app/people/people.component.ts ***!
    \********************************************/

  /*! exports provided: PeopleComponent */

  /***/
  function srcAppPeoplePeopleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleComponent", function () {
      return PeopleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../db */
    "./src/db.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PeopleComponent_div_0_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r4);
      }
    }

    function PeopleComponent_div_0_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var interest_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](interest_r5);
      }
    }

    function PeopleComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PeopleComponent_div_0_span_11_Template, 3, 1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Interests: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PeopleComponent_div_0_li_15_Template, 2, 1, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.position);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.skils);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.interests);
      }
    }

    var PeopleComponent = /*#__PURE__*/function () {
      function PeopleComponent(http) {
        _classCallCheck(this, PeopleComponent);

        this.http = http;
        this.people = _db__WEBPACK_IMPORTED_MODULE_1__["db"].people;
      }

      _createClass(PeopleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.http.get('https://bio.torre.co/api/bios/davidmontano').subscribe(function (user) {
            return console.log(user);
          });
        }
      }, {
        key: "showResults",
        value: function showResults() {
          this.http.get('https://bio.torre.co/api/bios/davidmontano').subscribe(function (user) {
            return console.log(user);
          });
          console.log(this.users);
        }
      }]);

      return PeopleComponent;
    }();

    PeopleComponent.ɵfac = function PeopleComponent_Factory(t) {
      return new (t || PeopleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PeopleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PeopleComponent,
      selectors: [["app-people"]],
      decls: 1,
      vars: 1,
      consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "info-wrapper"], [1, "user-picture-wrapper"], ["alt", "", 3, "src"], [1, "user-name"], [1, "position"], [1, "location"], [1, "skills-wrapper"], [4, "ngFor", "ngForOf"], [1, "skill"]],
      template: function PeopleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PeopleComponent_div_0_Template, 16, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.people);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".card[_ngcontent-%COMP%] {\n  margin: 16px auto;\n  width: 50%;\n  min-height: 225px;\n  background-color: #27292d;\n  padding: 16px;\n  border-radius: 4px;\n}\n\n.user-picture-wrapper[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n  float: left;\n}\n\n.user-picture-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.info-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  width: 70%;\n  margin-left: 10px;\n  margin-bottom: 2px;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  color: #cddc39;\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.position[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.02em;\n}\n\n.location[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.02em;\n}\n\n.skills-wrapper[_ngcontent-%COMP%] {\n  float: right;\n  width: 80%;\n  margin-top: 5px;\n}\n\n.skill[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #c2c2c2;\n  border-radius: 2px;\n  color: hsla(0, 0%, 100%, 0.9);\n  display: inline-block;\n  height: 32px;\n  line-height: 100%;\n  margin-right: 6px;\n  margin-bottom: 6px;\n  padding: 8px 16px;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style-type: '- ';\n}\n\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  color: hsla(0, 0%, 100%, 0.65);\n}\n\nli[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0VBRUUsOEJBQThCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImFwcC9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICB3aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiAyMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkyZDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udXNlci1waWN0dXJlLXdyYXBwZXIge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlci1waWN0dXJlLXdyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvLXdyYXBwZXIgcCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4udXNlci1uYW1lIHtcbiAgY29sb3I6ICNjZGRjMzk7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBvc2l0aW9uIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5sb2NhdGlvbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc2tpbGxzLXdyYXBwZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnNraWxsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MyYzJjMjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC45KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogJy0gJztcbn1cblxudWwsXG5saSB7XG4gIGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjY1KTtcbn1cblxubGkge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-people',
          templateUrl: './people.component.html',
          styleUrls: ['./people.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/opportunities.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/opportunities.service.ts ***!
    \***************************************************/

  /*! exports provided: OpportunitiesService */

  /***/
  function srcAppServicesOpportunitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpportunitiesService", function () {
      return OpportunitiesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var OpportunitiesService = /*#__PURE__*/function () {
      function OpportunitiesService() {
        _classCallCheck(this, OpportunitiesService);

        // opportunity: Opportunity = {
        //   id: '',
        //   picture: '',
        //   companyName: '',
        //   type: '',
        //   place: '',
        //   compensation: {
        //     minAmount: 0,
        //     maxAmount: 0,
        //     currency: '',
        //     periodicity: ''
        //   }
        // };
        this.opportunity = {};
        this._opportunitySource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.opportunity);
      }

      _createClass(OpportunitiesService, [{
        key: "sendOpportunityInfo",
        value: function sendOpportunityInfo(info) {
          this._opportunitySource.next(info);
        }
      }]);

      return OpportunitiesService;
    }();

    OpportunitiesService.ɵfac = function OpportunitiesService_Factory(t) {
      return new (t || OpportunitiesService)();
    };

    OpportunitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OpportunitiesService,
      factory: OpportunitiesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpportunitiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/db.ts":
  /*!*******************!*\
    !*** ./src/db.ts ***!
    \*******************/

  /*! exports provided: db */

  /***/
  function srcDbTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "db", function () {
      return db;
    });

    var db = {
      people: [{
        name: 'Josephine Tse',
        location: 'Toronto, ON, Canada',
        position: 'Multimedia Producer & Content Creator',
        skils: ['Storytelling', 'Content Creation', 'Problem Solving Skills', 'Marketing', 'Willingness to Learn'],
        interests: ['mentoring', 'hiring', 'advising'],
        picture: 'https://starrgate.s3.amazonaws.com:443/users/03a4b0d0368d3b72c70360a759ce6eb85914d004/profile_NXXCgL9.jpg'
      }, {
        name: 'David Orban',
        location: 'New York, NY',
        position: 'Startup creation, fundraising and investment. Thriving in our jolting technological change.',
        skils: ['Storytelling', 'Content Creation', 'Problem Solving Skills', 'Marketing', 'Willingness to Learn'],
        interests: ['mentoring', 'hiring', 'advising'],
        picture: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/abb39aae447197a94d84f3708742dd7af2db184a/profile_VwukAly/0a8926a01b9ed267e12209b3fd24e766.jpg'
      }, {
        name: 'Alexander Torrenegra',
        location: 'San Francisco, CA, USA',
        position: 'CEO of Torre. Author of Remoter',
        skils: ['Storytelling', 'Content Creation', 'Problem Solving Skills', 'Marketing', 'Willingness to Learn'],
        interests: ['mentoring', 'hiring', 'advising'],
        picture: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/12337548ee85eeb37ad312a9645b881a8aa24325/profile_1ea6Eh7/037625ed1c24f4a6ff53e23928f4b8fa.jpg'
      }, {
        name: 'Daniela Avila Gomez',
        position: 'Co-founder and Product designer at Torre',
        location: 'Bogota, Colombia',
        skils: ['Storytelling', 'Content Creation', 'Problem Solving Skills', 'Marketing', 'Willingness to Learn'],
        interests: ['mentoring', 'hiring', 'advising'],
        picture: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/decd68d0880f7bedbd9b4224bda1d77cda7f7cb9/profile_da9Ljb0/c47d9f1b673c96814ab051d34e0b9280.jpg'
      }, {
        name: 'Andrés  Cajiao',
        position: 'Co-Founder and Chief Growth Officer at torre',
        location: 'Bali, Indonesia',
        skils: ['Storytelling', 'Content Creation', 'Problem Solving Skills', 'Marketing', 'Willingness to Learn'],
        interests: ['mentoring', 'hiring', 'advising'],
        picture: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/2c831e5c23c01d1f4c65b086784bc453e4985526/profile_fYgybKc/22ca110bfc5d60b8bac87e9afd1eeb7a.jpg'
      }],
      opportunities: ['Jdm40Pwm', 'NwqLyQW3', 'Kjw01Kdx', 'kWRxPadN', 'mwAARnwJ', 'Rrnk3VWA', '8W3DLYwN', 'N2rk6ydL', 'DWVzYAWj', 'jw0KyqWx']
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/marce/Desktop/test-torre/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map