function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/_helper/jwt.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/_helper/jwt.interceptor.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helperJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/certificate-service.service */
    "./src/app/services/certificate-service.service.ts"); // Add class for intercepting http request to add jwt token in header


    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService, certificateService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
        this.certificateService = certificateService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var token = localStorage.getItem('token');

          if (token) {
            request = request.clone({
              setHeaders: {
                'X-Auth-Token': token
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__["CertificateServiceService"]));
    };

    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__["CertificateServiceService"]
        }];
      }, null);
    })();
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


    var _components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/login-component/login-component.component */
    "./src/app/components/login-component/login-component.component.ts");
    /* harmony import */


    var _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/admin-home-page/admin-home-page.component */
    "./src/app/components/admin-home-page/admin-home-page.component.ts");
    /* harmony import */


    var _components_add_certificate_add_certificate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/add-certificate/add-certificate.component */
    "./src/app/components/add-certificate/add-certificate.component.ts");
    /* harmony import */


    var _components_add_selfsigned_add_selfsigned_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/add-selfsigned/add-selfsigned.component */
    "./src/app/components/add-selfsigned/add-selfsigned.component.ts");
    /* harmony import */


    var _components_all_certificates_all_certificates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/all-certificates/all-certificates.component */
    "./src/app/components/all-certificates/all-certificates.component.ts");
    /* harmony import */


    var _components_client_home_page_client_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/client-home-page/client-home-page.component */
    "./src/app/components/client-home-page/client-home-page.component.ts");
    /* harmony import */


    var _components_client_all_certificates_client_all_certificates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/client-all-certificates/client-all-certificates.component */
    "./src/app/components/client-all-certificates/client-all-certificates.component.ts");
    /* harmony import */


    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/registration/registration.component */
    "./src/app/components/registration/registration.component.ts");
    /* harmony import */


    var _components_log_info_list_log_info_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/log-info-list/log-info-list.component */
    "./src/app/components/log-info-list/log-info-list.component.ts");
    /* harmony import */


    var _components_registration_admin_registration_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/registration-admin/registration-admin.component */
    "./src/app/components/registration-admin/registration-admin.component.ts");

    var routes = [{
      path: 'login',
      component: _components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponentComponent"]
    }, {
      path: 'admin/home',
      component: _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomePageComponent"]
    }, {
      path: 'admin/add-certificate',
      component: _components_add_certificate_add_certificate_component__WEBPACK_IMPORTED_MODULE_4__["AddCertificateComponent"]
    }, {
      path: 'admin/add-selfsigned',
      component: _components_add_selfsigned_add_selfsigned_component__WEBPACK_IMPORTED_MODULE_5__["AddSelfsignedComponent"]
    }, {
      path: 'admin/all-certificates',
      component: _components_all_certificates_all_certificates_component__WEBPACK_IMPORTED_MODULE_6__["AllCertificatesComponent"]
    }, {
      path: 'client/home',
      component: _components_client_home_page_client_home_page_component__WEBPACK_IMPORTED_MODULE_7__["ClientHomePageComponent"]
    }, {
      path: 'client/all-certificates',
      component: _components_client_all_certificates_client_all_certificates_component__WEBPACK_IMPORTED_MODULE_8__["ClientAllCertificatesComponent"]
    }, {
      path: 'registration',
      component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"]
    }, {
      path: 'admin/logs',
      component: _components_log_info_list_log_info_list_component__WEBPACK_IMPORTED_MODULE_10__["LogInfoListComponent"]
    }, {
      path: 'registrationAdmin',
      component: _components_registration_admin_registration_admin_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationAdminComponent"]
    }];

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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_allowed_routes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/allowed-routes.service */
    "./src/app/services/allowed-routes.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    function AppComponent_mat_nav_list_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registration for user");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Registration for admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_mat_nav_list_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Certificate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add SelfSigned Certificate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All Certificates");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All Logs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_nav_list_9_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_mat_nav_list_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Certificates");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_nav_list_10_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, breakpointObserver, userService, authService, allowedRoutes) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.userService = userService;
        this.authService = authService;
        this.allowedRoutes = allowedRoutes;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      }

      _createClass(AppComponent, [{
        key: "isNone",
        value: function isNone() {
          if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
            return true;
          }

          return false;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.authService.isAdmin();
        }
      }, {
        key: "isUser",
        value: function isUser() {
          return this.authService.isUser();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_allowed_routes_service__WEBPACK_IMPORTED_MODULE_6__["AllowedRoutesService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 20,
      vars: 12,
      consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["mat-list-item", "", "routerLink", "/login"], ["mat-list-item", "", "routerLink", "/registration"], ["mat-list-item", "", "routerLink", "/registrationAdmin"], ["mat-list-item", "", "routerLink", "/admin/add-certificate"], ["mat-list-item", "", "routerLink", "/admin/add-selfsigned"], ["mat-list-item", "", "routerLink", "/admin/all-certificates"], ["mat-list-item", "", "routerLink", "/admin/logs"], ["mat-list-item", "", 3, "click"], ["mat-list-item", "", "routerLink", "/client/all-certificates"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_mat_nav_list_8_Template, 7, 0, "mat-nav-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_mat_nav_list_9_Template, 11, 0, "mat-nav-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_mat_nav_list_10_Template, 5, 0, "mat-nav-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "P I K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.isHandset$) === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.isHandset$) ? "dialog" : "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNone());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser());
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: [".example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .main-content[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfSJdfQ== */"]
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_allowed_routes_service__WEBPACK_IMPORTED_MODULE_6__["AllowedRoutesService"]
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login-component/login-component.component */
    "./src/app/components/login-component/login-component.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/admin-home-page/admin-home-page.component */
    "./src/app/components/admin-home-page/admin-home-page.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_add_certificate_add_certificate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/add-certificate/add-certificate.component */
    "./src/app/components/add-certificate/add-certificate.component.ts");
    /* harmony import */


    var _components_add_selfsigned_add_selfsigned_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/add-selfsigned/add-selfsigned.component */
    "./src/app/components/add-selfsigned/add-selfsigned.component.ts");
    /* harmony import */


    var _components_all_certificates_all_certificates_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/all-certificates/all-certificates.component */
    "./src/app/components/all-certificates/all-certificates.component.ts");
    /* harmony import */


    var _components_client_home_page_client_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/client-home-page/client-home-page.component */
    "./src/app/components/client-home-page/client-home-page.component.ts");
    /* harmony import */


    var _components_client_all_certificates_client_all_certificates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/client-all-certificates/client-all-certificates.component */
    "./src/app/components/client-all-certificates/client-all-certificates.component.ts");
    /* harmony import */


    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/registration/registration.component */
    "./src/app/components/registration/registration.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/certificate-service.service */
    "./src/app/services/certificate-service.service.ts");
    /* harmony import */


    var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./_helper/jwt.interceptor */
    "./src/app/_helper/jwt.interceptor.ts");
    /* harmony import */


    var _components_log_info_list_log_info_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/log-info-list/log-info-list.component */
    "./src/app/components/log-info-list/log-info-list.component.ts");
    /* harmony import */


    var _components_registration_admin_registration_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/registration-admin/registration-admin.component */
    "./src/app/components/registration-admin/registration-admin.component.ts");

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
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_17__["CertificateServiceService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponentComponent"], _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_8__["AdminHomePageComponent"], _components_add_certificate_add_certificate_component__WEBPACK_IMPORTED_MODULE_10__["AddCertificateComponent"], _components_add_selfsigned_add_selfsigned_component__WEBPACK_IMPORTED_MODULE_11__["AddSelfsignedComponent"], _components_all_certificates_all_certificates_component__WEBPACK_IMPORTED_MODULE_12__["AllCertificatesComponent"], _components_client_home_page_client_home_page_component__WEBPACK_IMPORTED_MODULE_13__["ClientHomePageComponent"], _components_client_all_certificates_client_all_certificates_component__WEBPACK_IMPORTED_MODULE_14__["ClientAllCertificatesComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"], _components_log_info_list_log_info_list_component__WEBPACK_IMPORTED_MODULE_19__["LogInfoListComponent"], _components_registration_admin_registration_admin_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationAdminComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponentComponent"], _components_admin_home_page_admin_home_page_component__WEBPACK_IMPORTED_MODULE_8__["AdminHomePageComponent"], _components_add_certificate_add_certificate_component__WEBPACK_IMPORTED_MODULE_10__["AddCertificateComponent"], _components_add_selfsigned_add_selfsigned_component__WEBPACK_IMPORTED_MODULE_11__["AddSelfsignedComponent"], _components_all_certificates_all_certificates_component__WEBPACK_IMPORTED_MODULE_12__["AllCertificatesComponent"], _components_client_home_page_client_home_page_component__WEBPACK_IMPORTED_MODULE_13__["ClientHomePageComponent"], _components_client_all_certificates_client_all_certificates_component__WEBPACK_IMPORTED_MODULE_14__["ClientAllCertificatesComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"], _components_log_info_list_log_info_list_component__WEBPACK_IMPORTED_MODULE_19__["LogInfoListComponent"], _components_registration_admin_registration_admin_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationAdminComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_17__["CertificateServiceService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/add-certificate/add-certificate.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/add-certificate/add-certificate.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddCertificateComponent */

  /***/
  function srcAppComponentsAddCertificateAddCertificateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCertificateComponent", function () {
      return AddCertificateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_logModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/logModel */
    "./src/app/models/logModel.ts");
    /* harmony import */


    var _models_logType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/logType */
    "./src/app/models/logType.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/certificate-service.service */
    "./src/app/services/certificate-service.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddCertificateComponent_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issuer_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", issuer_r2.serialNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issuer_r2.subjectCommonName);
      }
    }

    var AddCertificateComponent = /*#__PURE__*/function () {
      function AddCertificateComponent(http, certService, userService, authService, logService, router) {
        _classCallCheck(this, AddCertificateComponent);

        this.http = http;
        this.certService = certService;
        this.userService = userService;
        this.authService = authService;
        this.logService = logService;
        this.router = router;
        this.model = {
          startDate: '',
          endDate: '',
          serialNumber: '',
          name: '',
          surname: '',
          country: '',
          organization: '',
          organizationUnit: '',
          email: '',
          type: '',
          alias: '',
          issuerSerialNumber: ''
        };
      }

      _createClass(AddCertificateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.certService.getAllPossibleIssuers().subscribe(function (data) {
            _this.listOfPossibleIssuers = data;
          }, function (error) {
            console.log('Error occured', error);
          });
        }
      }, {
        key: "generateCertificate",
        value: function generateCertificate() {
          var _this2 = this;

          var url = 'https://localhost:8443/api/certificate/generate';
          this.http.post(url, this.model).subscribe(function (res) {
            var logModel = new _models_logModel__WEBPACK_IMPORTED_MODULE_1__["LogModel"](_models_logType__WEBPACK_IMPORTED_MODULE_2__["LogType"].INFO, _this2.authService.getEmail(), 'Certificate created', 4);

            _this2.logService.addLog(logModel).subscribe();

            _this2.router.navigate(['/admin/home']);

            alert('Uspesno');
          }, function (error) {
            var logModel = new _models_logModel__WEBPACK_IMPORTED_MODULE_1__["LogModel"](_models_logType__WEBPACK_IMPORTED_MODULE_2__["LogType"].ERROR, _this2.authService.getEmail(), 'Error creating certificate', 5);

            _this2.logService.addLog(logModel).subscribe();

            alert('Error');
          });
        }
      }]);

      return AddCertificateComponent;
    }();

    AddCertificateComponent.ɵfac = function AddCertificateComponent_Factory(t) {
      return new (t || AddCertificateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_certificate_service_service__WEBPACK_IMPORTED_MODULE_4__["CertificateServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    AddCertificateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddCertificateComponent,
      selectors: [["app-add-certificate"]],
      decls: 59,
      vars: 12,
      consts: [[1, "row"], [1, "offset-3"], [1, "col-md-6"], ["name", "certificateForm", "novalidate", "", 1, "feedback-form", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "radio", "id", "intermediate", "name", "type", "value", "INTERMEDIATE", 3, "ngModel", "ngModelChange"], ["for", "intermediate", 2, "padding-right", "20px"], ["type", "radio", "id", "client", "name", "type", "value", "CLIENT", 3, "ngModel", "ngModelChange"], ["for", "client"], ["name", "issuerSerialNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Name", "name", "name", "pattern", "[A-Za-z]", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "surname", "placeholder", "Surname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "country", "placeholder", "Country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "organization", "placeholder", "Organization", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Organization unit", "name", "organizationUnit", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "example@example.com", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "startDate"], ["type", "date", "id", "startDate", "name", "startDate", "placeholder", "Start date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "endDate"], ["type", "date", "id", "endDate", "name", "endDate", "placeholder", "End date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Generate certificate", 1, "btn", "btn-danger"], [3, "value"]],
      template: function AddCertificateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCertificateComponent_Template_form_ngSubmit_3_listener() {
            return ctx.generateCertificate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Choose type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.model.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Intermediate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.model.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose issuer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_select_ngModelChange_20_listener($event) {
            return ctx.model.issuerSerialNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddCertificateComponent_option_21_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Client data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.model.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Surname:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.model.surname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.model.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Organization:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.model.organization = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Organization unit:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.model.organizationUnit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "E-mail:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.model.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Start date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.model.startDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "End date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCertificateComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.model.endDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.issuerSerialNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfPossibleIssuers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.surname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.organization);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.organizationUnit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.startDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.endDate);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2VydGlmaWNhdGUvYWRkLWNlcnRpZmljYXRlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCertificateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-certificate',
          templateUrl: './add-certificate.component.html',
          styleUrls: ['./add-certificate.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_4__["CertificateServiceService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _services_log_service__WEBPACK_IMPORTED_MODULE_7__["LogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/add-selfsigned/add-selfsigned.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/add-selfsigned/add-selfsigned.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AddSelfsignedComponent */

  /***/
  function srcAppComponentsAddSelfsignedAddSelfsignedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSelfsignedComponent", function () {
      return AddSelfsignedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_logModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/logModel */
    "./src/app/models/logModel.ts");
    /* harmony import */


    var _models_logType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/logType */
    "./src/app/models/logType.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddSelfsignedComponent = /*#__PURE__*/function () {
      function AddSelfsignedComponent(http, router, userService, logService, authService, formBuilder) {
        _classCallCheck(this, AddSelfsignedComponent);

        this.http = http;
        this.router = router;
        this.userService = userService;
        this.logService = logService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.model = {
          startDate: '',
          endDate: '',
          serialNumber: '',
          name: '',
          surname: '',
          country: '',
          organization: '',
          organizationUnit: '',
          email: '',
          type: '',
          alias: '',
          issuerSerialNumber: ''
        };
      }

      _createClass(AddSelfsignedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generateSelfSignedCertificate",
        value: function generateSelfSignedCertificate() {
          var _this3 = this;

          var url = 'https://localhost:8443/api/certificate/selfSigned/generate';
          this.http.post(url, this.model).subscribe(function (res) {
            var logModel = new _models_logModel__WEBPACK_IMPORTED_MODULE_1__["LogModel"](_models_logType__WEBPACK_IMPORTED_MODULE_2__["LogType"].INFO, _this3.authService.getEmail(), 'Self-signed created', 3);

            _this3.logService.addLog(logModel).subscribe();

            _this3.router.navigate(['/admin/home']);

            alert('Uspesno');
          }, function (error) {
            alert('Error');
            var logModel = new _models_logModel__WEBPACK_IMPORTED_MODULE_1__["LogModel"](_models_logType__WEBPACK_IMPORTED_MODULE_2__["LogType"].INFO, _this3.authService.getEmail(), 'Error creating self-signed certificate', 6);

            _this3.logService.addLog(logModel).subscribe();

            console.log('Error');
          });
        }
      }]);

      return AddSelfsignedComponent;
    }();

    AddSelfsignedComponent.ɵfac = function AddSelfsignedComponent_Factory(t) {
      return new (t || AddSelfsignedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]));
    };

    AddSelfsignedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddSelfsignedComponent,
      selectors: [["app-add-selfsigned"]],
      decls: 42,
      vars: 8,
      consts: [[1, "row"], [1, "offset-3"], [1, "col-md-6"], ["name", "certificateForm", "novalidate", "", 1, "feedback-form", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Name", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "surname", "placeholder", "Surname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "country", "placeholder", "Country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "organization", "placeholder", "Organization", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Organization unit", "name", "organizationUnit", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "example@example.com", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "startDate"], ["type", "date", "id", "startDate", "name", "startDate", "placeholder", "Start date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "endDate"], ["type", "date", "id", "endDate", "name", "endDate", "placeholder", "End date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Generate certificate", 1, "btn", "btn-danger"]],
      template: function AddSelfsignedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddSelfsignedComponent_Template_form_ngSubmit_3_listener() {
            return ctx.generateSelfSignedCertificate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Client data:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.model.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Surname:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.model.surname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.model.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Organization:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.model.organization = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Organization unit:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.model.organizationUnit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-mail:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.model.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Start date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.model.startDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "End date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSelfsignedComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.model.endDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.surname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.organization);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.organizationUnit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.startDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.endDate);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2VsZnNpZ25lZC9hZGQtc2VsZnNpZ25lZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSelfsignedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-selfsigned',
          templateUrl: './add-selfsigned.component.html',
          styleUrls: ['./add-selfsigned.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin-home-page/admin-home-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/admin-home-page/admin-home-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AdminHomePageComponent */

  /***/
  function srcAppComponentsAdminHomePageAdminHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHomePageComponent", function () {
      return AdminHomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminHomePageComponent = /*#__PURE__*/function () {
      function AdminHomePageComponent() {
        _classCallCheck(this, AdminHomePageComponent);
      }

      _createClass(AdminHomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminHomePageComponent;
    }();

    AdminHomePageComponent.ɵfac = function AdminHomePageComponent_Factory(t) {
      return new (t || AdminHomePageComponent)();
    };

    AdminHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminHomePageComponent,
      selectors: [["app-admin-home-page"]],
      decls: 2,
      vars: 0,
      template: function AdminHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-home-page works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1ob21lLXBhZ2UvYWRtaW4taG9tZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-home-page',
          templateUrl: './admin-home-page.component.html',
          styleUrls: ['./admin-home-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/all-certificates/all-certificates.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/all-certificates/all-certificates.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AllCertificatesComponent */

  /***/
  function srcAppComponentsAllCertificatesAllCertificatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllCertificatesComponent", function () {
      return AllCertificatesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/certificate-service.service */
    "./src/app/services/certificate-service.service.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AllCertificatesComponent_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Issuer name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.issName, " ");
      }
    }

    function AllCertificatesComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.subjName, " ");
      }
    }

    function AllCertificatesComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Serial number: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.serialNumber, " ");
      }
    }

    function AllCertificatesComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.startDate, " ");
      }
    }

    function AllCertificatesComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " End date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.endDate, " ");
      }
    }

    function AllCertificatesComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Download ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCertificatesComponent_td_18_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var element_r23 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.download(element_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Download it");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Revoke ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCertificatesComponent_td_21_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var element_r26 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.revoke(element_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Revoke it");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCertificatesComponent_td_24_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var element_r29 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.isRevoked(element_r29);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Revoke it");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllCertificatesComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    function AllCertificatesComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var AllCertificatesComponent = /*#__PURE__*/function () {
      function AllCertificatesComponent(certService) {
        _classCallCheck(this, AllCertificatesComponent);

        this.certService = certService; // tslint:disable-next-line:max-line-length

        this.displayedColumns = ['issName', 'subjName', 'serialNumber', 'startDate', 'endDate', 'download', 'revoke', 'check'];
      }

      _createClass(AllCertificatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.certService.getAllCertificates().subscribe(function (data) {
            _this4.myResponse = data;
            console.log(data);
            _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this4.myResponse);
          }, function (error) {
            console.log('Error occured', error);
          });
        }
      }, {
        key: "revoke",
        value: function revoke(certificate) {
          this.certService.revokeCertificate(certificate).subscribe(function (res) {
            alert('Revoked');
          }, function (error) {
            alert('Error');
          });
        }
      }, {
        key: "isRevoked",
        value: function isRevoked(cert) {
          this.certService.checkCertificateStatus(cert).subscribe(function (res) {
            alert('Already revoked');
            return true;
          }, function (error) {
            alert('Error revoke');
            return false;
          });
          return false;
        }
      }, {
        key: "download",
        value: function download(certificate) {
          this.certService.downloadCertificate(certificate).subscribe(function (res) {
            alert('Downloaded');
          }, function (error) {
            alert('Error');
          });
        }
      }]);

      return AllCertificatesComponent;
    }();

    AllCertificatesComponent.ɵfac = function AllCertificatesComponent_Factory(t) {
      return new (t || AllCertificatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__["CertificateServiceService"]));
    };

    AllCertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllCertificatesComponent,
      selectors: [["app-all-certificates"]],
      decls: 28,
      vars: 5,
      consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "issName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subjName"], ["matColumnDef", "serialNumber"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "download"], ["matColumnDef", "revoke"], ["matColumnDef", "check"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function AllCertificatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllCertificatesComponent_th_2_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllCertificatesComponent_td_3_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllCertificatesComponent_th_5_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllCertificatesComponent_td_6_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllCertificatesComponent_th_8_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllCertificatesComponent_td_9_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AllCertificatesComponent_th_11_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllCertificatesComponent_td_12_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AllCertificatesComponent_th_14_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AllCertificatesComponent_td_15_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllCertificatesComponent_th_17_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllCertificatesComponent_td_18_Template, 3, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AllCertificatesComponent_th_20_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AllCertificatesComponent_td_21_Template, 3, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AllCertificatesComponent_th_23_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllCertificatesComponent_td_24_Template, 3, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AllCertificatesComponent_tr_25_Template, 1, 0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AllCertificatesComponent_tr_26_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtY2VydGlmaWNhdGVzL2FsbC1jZXJ0aWZpY2F0ZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllCertificatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-certificates',
          templateUrl: './all-certificates.component.html',
          styleUrls: ['./all-certificates.component.css']
        }]
      }], function () {
        return [{
          type: _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__["CertificateServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/client-all-certificates/client-all-certificates.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/client-all-certificates/client-all-certificates.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ClientAllCertificatesComponent */

  /***/
  function srcAppComponentsClientAllCertificatesClientAllCertificatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientAllCertificatesComponent", function () {
      return ClientAllCertificatesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/certificate-service.service */
    "./src/app/services/certificate-service.service.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function ClientAllCertificatesComponent_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Issuer name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientAllCertificatesComponent_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.issName, " ");
      }
    }

    function ClientAllCertificatesComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientAllCertificatesComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.subjName, " ");
      }
    }

    function ClientAllCertificatesComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Serial number: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientAllCertificatesComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.serialNumber, " ");
      }
    }

    function ClientAllCertificatesComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientAllCertificatesComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.startDate, " ");
      }
    }

    function ClientAllCertificatesComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " End date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientAllCertificatesComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.endDate, " ");
      }
    }

    function ClientAllCertificatesComponent_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
      }
    }

    function ClientAllCertificatesComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var ClientAllCertificatesComponent = /*#__PURE__*/function () {
      function ClientAllCertificatesComponent(certService) {
        _classCallCheck(this, ClientAllCertificatesComponent);

        this.certService = certService;
        this.displayedColumns = ['issName', 'subjName', 'serialNumber', 'startDate', 'endDate'];
      }

      _createClass(ClientAllCertificatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.certService.getAllCertificates().subscribe(function (data) {
            _this5.myResponse = data;
            console.log(data);
            _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this5.myResponse);
          }, function (error) {
            console.log('Error occured', error);
          });
        }
      }]);

      return ClientAllCertificatesComponent;
    }();

    ClientAllCertificatesComponent.ɵfac = function ClientAllCertificatesComponent_Factory(t) {
      return new (t || ClientAllCertificatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__["CertificateServiceService"]));
    };

    ClientAllCertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientAllCertificatesComponent,
      selectors: [["app-client-all-certificates"]],
      decls: 19,
      vars: 5,
      consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "issName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subjName"], ["matColumnDef", "serialNumber"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ClientAllCertificatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientAllCertificatesComponent_th_2_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClientAllCertificatesComponent_td_3_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientAllCertificatesComponent_th_5_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientAllCertificatesComponent_td_6_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientAllCertificatesComponent_th_8_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientAllCertificatesComponent_td_9_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientAllCertificatesComponent_th_11_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientAllCertificatesComponent_td_12_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientAllCertificatesComponent_th_14_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClientAllCertificatesComponent_td_15_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ClientAllCertificatesComponent_tr_16_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClientAllCertificatesComponent_tr_17_Template, 1, 0, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-paginator", 10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtYWxsLWNlcnRpZmljYXRlcy9jbGllbnQtYWxsLWNlcnRpZmljYXRlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientAllCertificatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-all-certificates',
          templateUrl: './client-all-certificates.component.html',
          styleUrls: ['./client-all-certificates.component.css']
        }]
      }], function () {
        return [{
          type: _services_certificate_service_service__WEBPACK_IMPORTED_MODULE_2__["CertificateServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/client-home-page/client-home-page.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/client-home-page/client-home-page.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ClientHomePageComponent */

  /***/
  function srcAppComponentsClientHomePageClientHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientHomePageComponent", function () {
      return ClientHomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClientHomePageComponent = /*#__PURE__*/function () {
      function ClientHomePageComponent() {
        _classCallCheck(this, ClientHomePageComponent);
      }

      _createClass(ClientHomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientHomePageComponent;
    }();

    ClientHomePageComponent.ɵfac = function ClientHomePageComponent_Factory(t) {
      return new (t || ClientHomePageComponent)();
    };

    ClientHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientHomePageComponent,
      selectors: [["app-client-home-page"]],
      decls: 2,
      vars: 0,
      template: function ClientHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "client-home-page works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtaG9tZS1wYWdlL2NsaWVudC1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-home-page',
          templateUrl: './client-home-page.component.html',
          styleUrls: ['./client-home-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/log-info-list/log-info-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/log-info-list/log-info-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LogInfoListComponent */

  /***/
  function srcAppComponentsLogInfoListLogInfoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInfoListComponent", function () {
      return LogInfoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function LogInfoListComponent_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogInfoListComponent_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.eventId, " ");
      }
    }

    function LogInfoListComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Time stamp: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogInfoListComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.timestamp, " ");
      }
    }

    function LogInfoListComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Source name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogInfoListComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.sourceName, " ");
      }
    }

    function LogInfoListComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Log type: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogInfoListComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.logType, " ");
      }
    }

    function LogInfoListComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogInfoListComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.message, " ");
      }
    }

    function LogInfoListComponent_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
      }
    }

    function LogInfoListComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var LogInfoListComponent = /*#__PURE__*/function () {
      function LogInfoListComponent(logService) {
        _classCallCheck(this, LogInfoListComponent);

        this.logService = logService;
        this.displayedColumns = ['eventId', 'timestamp', 'sourceName', 'logType', 'message'];
      }

      _createClass(LogInfoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.logService.getAllLogs().subscribe(function (data) {
            _this6.myResponse = data;
            console.log(data);
            _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this6.myResponse);
          }, function (error) {
            console.log('Error occured', error);
          });
        }
      }]);

      return LogInfoListComponent;
    }();

    LogInfoListComponent.ɵfac = function LogInfoListComponent_Factory(t) {
      return new (t || LogInfoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]));
    };

    LogInfoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogInfoListComponent,
      selectors: [["app-log-info-list"]],
      decls: 19,
      vars: 5,
      consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "eventId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "timestamp"], ["matColumnDef", "sourceName"], ["matColumnDef", "logType"], ["matColumnDef", "message"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function LogInfoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInfoListComponent_th_2_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LogInfoListComponent_td_3_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LogInfoListComponent_th_5_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LogInfoListComponent_td_6_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LogInfoListComponent_th_8_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LogInfoListComponent_td_9_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LogInfoListComponent_th_11_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LogInfoListComponent_td_12_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LogInfoListComponent_th_14_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LogInfoListComponent_td_15_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LogInfoListComponent_tr_16_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LogInfoListComponent_tr_17_Template, 1, 0, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-paginator", 10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2ctaW5mby1saXN0L2xvZy1pbmZvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInfoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-log-info-list',
          templateUrl: './log-info-list.component.html',
          styleUrls: ['./log-info-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login-component/login-component.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/login-component/login-component.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoginComponentComponent */

  /***/
  function srcAppComponentsLoginComponentLoginComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentComponent", function () {
      return LoginComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_logModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/logModel */
    "./src/app/models/logModel.ts");
    /* harmony import */


    var _models_logType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/logType */
    "./src/app/models/logType.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_allowed_routes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/allowed-routes.service */
    "./src/app/services/allowed-routes.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponentComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponentComponent_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is not valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponentComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponentComponent = /*#__PURE__*/function () {
      function LoginComponentComponent(fb, authService, router, allowedRoutes, snackBar, logService) {
        _classCallCheck(this, LoginComponentComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.allowedRoutes = allowedRoutes;
        this.snackBar = snackBar;
        this.logService = logService;
        this.form = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginComponentComponent, [{
        key: "login",
        value: function login() {
          var _this7 = this;

          var val = this.form.value;

          if (val.email && val.password) {
            this.authService.login(val.email, val.password).subscribe(function (token) {
              localStorage.setItem('token', token);
              var logModel = new _models_logModel__WEBPACK_IMPORTED_MODULE_2__["LogModel"](_models_logType__WEBPACK_IMPORTED_MODULE_3__["LogType"].INFO, val.email, 'Successfull login', 2);

              _this7.logService.addLog(logModel).subscribe();

              _this7.router.navigate(['/']);

              if (_this7.authService.isAdmin()) {
                _this7.router.navigate(['/admin/home']);
              } else if (_this7.authService.isUser()) {
                _this7.router.navigate(['/client/home']);
              } //    this.allowedRoutes.updateRoutes();

            }, function (response) {
              try {
                var errorResponse = JSON.parse(response.error);
                var errorAlert = '';
                errorResponse.errors.forEach(function (err) {
                  errorAlert += "".concat(err.defaultMessage, "\n");
                });

                _this7.snackBar.open(errorAlert, '', {
                  duration: 2000
                });
              } catch (err) {
                _this7.snackBar.open(response.error, '', {
                  duration: 2000
                });
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponentComponent;
    }();

    LoginComponentComponent.ɵfac = function LoginComponentComponent_Factory(t) {
      return new (t || LoginComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_allowed_routes_service__WEBPACK_IMPORTED_MODULE_6__["AllowedRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"]));
    };

    LoginComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponentComponent,
      selectors: [["app-login-component"]],
      decls: 16,
      vars: 4,
      consts: [[1, "mat-elevation-z10"], ["color", "primary"], [1, "login-form", 3, "formGroup"], [1, "form-field"], ["matInput", "", "name", "email", "formControlName", "email", "placeholder", "Email"], [4, "ngIf"], ["id", "invalidMail", 4, "ngIf"], ["matInput", "", "name", "password", "formControlName", "password", "type", "password", "placeholder", "Password"], ["mat-raised-button", "", "color", "primary", 1, "button", "button-primary", 3, "click"], ["id", "invalidMail"]],
      template: function LoginComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponentComponent_mat_error_7_Template, 2, 0, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponentComponent_mat_error_8_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponentComponent_mat_error_12_Template, 2, 0, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponentComponent_Template_button_click_14_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.hasError("required", "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.hasError("email", "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.hasError("required", "password"));
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1jb21wb25lbnQvbG9naW4tY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-component',
          templateUrl: './login-component.component.html',
          styleUrls: ['./login-component.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_allowed_routes_service__WEBPACK_IMPORTED_MODULE_6__["AllowedRoutesService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }, {
          type: _services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/registration-admin/registration-admin.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/registration-admin/registration-admin.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: RegistrationAdminComponent */

  /***/
  function srcAppComponentsRegistrationAdminRegistrationAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationAdminComponent", function () {
      return RegistrationAdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RegistrationAdminComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationAdminComponent_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is not valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationAdminComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationAdminComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationAdminComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must contain at least 1 lowercase, 1 uppercase letter and 1 number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegistrationAdminComponent = /*#__PURE__*/function () {
      function RegistrationAdminComponent(formBuilder, authService, router, _snackBar) {
        _classCallCheck(this, RegistrationAdminComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])
        });
      }

      _createClass(RegistrationAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this8 = this;

          var formValue = this.registerForm.value;

          if (this.registerForm.valid) {
            this.authService.registerAdmin(formValue.email, formValue.password).subscribe(function (response) {
              _this8._snackBar.open(response, '', {
                duration: 2000
              });

              _this8.router.navigate(['/login']);
            }, function (response) {
              try {
                var errorResponse = JSON.parse(response.error);

                _this8._snackBar.open(errorResponse.message, '', {
                  duration: 2000
                });
              } catch (err) {
                alert(response.error);
              }
            });
          }
        }
      }]);

      return RegistrationAdminComponent;
    }();

    RegistrationAdminComponent.ɵfac = function RegistrationAdminComponent_Factory(t) {
      return new (t || RegistrationAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    RegistrationAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationAdminComponent,
      selectors: [["app-registration-admin"]],
      decls: 16,
      vars: 7,
      consts: [[1, "mat-elevation-z10"], ["color", "primary"], [1, "register-form", 3, "formGroup"], ["name", "email", "matInput", "", "placeholder", "Email", "formControlName", "email"], [4, "ngIf"], ["name", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "type", "password"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function RegistrationAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegistrationAdminComponent_mat_error_7_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegistrationAdminComponent_mat_error_8_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegistrationAdminComponent_mat_error_11_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationAdminComponent_mat_error_12_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegistrationAdminComponent_mat_error_13_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationAdminComponent_Template_button_click_14_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("required", "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("email", "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("required", "password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("minlength", "password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("pattern", "password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24tYWRtaW4vcmVnaXN0cmF0aW9uLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration-admin',
          templateUrl: './registration-admin.component.html',
          styleUrls: ['./registration-admin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/registration/registration.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/registration/registration.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppComponentsRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RegistrationComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is not valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must contain at least 1 lowercase, 1 uppercase letter and 1 number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(formBuilder, authService, router, _snackBar) {
        _classCallCheck(this, RegistrationComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])
        });
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this9 = this;

          var formValue = this.registerForm.value;

          if (this.registerForm.valid) {
            this.authService.register(formValue.email, formValue.password).subscribe(function (response) {
              _this9._snackBar.open(response, '', {
                duration: 2000
              });

              _this9.router.navigate(['/login']);
            }, function (response) {
              try {
                var errorResponse = JSON.parse(response.error);

                _this9._snackBar.open(errorResponse.message, '', {
                  duration: 2000
                });
              } catch (err) {
                alert(response.error);
              }
            });
          }
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 16,
      vars: 7,
      consts: [[1, "mat-elevation-z10"], ["color", "primary"], [1, "register-form", 3, "formGroup"], ["name", "email", "matInput", "", "placeholder", "Email", "formControlName", "email"], [4, "ngIf"], ["name", "password", "matInput", "", "placeholder", "Password", "formControlName", "password", "type", "password"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegistrationComponent_mat_error_7_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegistrationComponent_mat_error_8_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegistrationComponent_mat_error_11_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationComponent_mat_error_12_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegistrationComponent_mat_error_13_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_14_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("required", "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("email", "email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("required", "password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("minlength", "password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("pattern", "password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: DemoMaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
      return DemoMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var DemoMaterialModule = function DemoMaterialModule() {
      _classCallCheck(this, DemoMaterialModule);
    };

    DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoMaterialModule
    });
    DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoMaterialModule_Factory(t) {
        return new (t || DemoMaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/logModel.ts":
  /*!************************************!*\
    !*** ./src/app/models/logModel.ts ***!
    \************************************/

  /*! exports provided: LogModel */

  /***/
  function srcAppModelsLogModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogModel", function () {
      return LogModel;
    });

    var LogModel = function LogModel(logType, sourceName, message, eventId) {
      _classCallCheck(this, LogModel);

      this.logType = logType;
      this.sourceName = sourceName;
      this.message = message;
      this.eventId = eventId;
    };
    /***/

  },

  /***/
  "./src/app/models/logType.ts":
  /*!***********************************!*\
    !*** ./src/app/models/logType.ts ***!
    \***********************************/

  /*! exports provided: LogType */

  /***/
  function srcAppModelsLogTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogType", function () {
      return LogType;
    });

    var LogType;

    (function (LogType) {
      LogType[LogType["DEBUG"] = 0] = "DEBUG";
      LogType[LogType["INFO"] = 1] = "INFO";
      LogType[LogType["CRITICAL"] = 2] = "CRITICAL";
      LogType[LogType["WARNING"] = 3] = "WARNING";
      LogType[LogType["ERROR"] = 4] = "ERROR";
    })(LogType || (LogType = {}));
    /***/

  },

  /***/
  "./src/app/services/allowed-routes.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/allowed-routes.service.ts ***!
    \****************************************************/

  /*! exports provided: AllowedRoutesService */

  /***/
  function srcAppServicesAllowedRoutesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllowedRoutesService", function () {
      return AllowedRoutesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var AllowedRoutesService = /*#__PURE__*/function () {
      function AllowedRoutesService(router, _snackBar) {
        _classCallCheck(this, AllowedRoutesService);

        this.router = router;
        this._snackBar = _snackBar;
        this.routes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentRoutes = this.routes.asObservable();
        this.updateRoutes();
      }

      _createClass(AllowedRoutesService, [{
        key: "changeRoutes",
        value: function changeRoutes(newRoutes) {
          this.routes.next(newRoutes);
        }
      }, {
        key: "updateRoutes",
        value: function updateRoutes() {
          var _this10 = this;

          var token = localStorage.getItem('token');
          var components = [{
            path: 'event',
            label: 'Events'
          }];

          if (!token) {
            components.push({
              path: 'login',
              label: 'Login'
            });
            components.push({
              path: 'register',
              label: 'Register'
            });
            this.routes.next(components);
            return;
          }

          var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
          var currentTime = new Date().getTime() / 1000;

          if (currentTime > decodedToken.exp) {
            components.push({
              path: 'login',
              label: 'Login'
            });
            components.push({
              path: 'register',
              label: 'Register'
            });
            this.router.navigate(['/login']);

            this._snackBar.open('Login first', '', {
              duration: 1000
            });

            return false;
          }

          decodedToken.roles.forEach(function (role) {
            if (role.authority === 'ROLE_USER') {
              components.push({
                path: 'profile',
                label: "User: ".concat(decodedToken.sub)
              });
            } else if (role.authority === 'ROLE_ADMIN') {
              components.push({
                path: 'add-event',
                label: 'Add Event'
              });
              components.push({
                path: 'locations',
                label: 'Locations'
              });
              components.push({
                path: 'add-location',
                label: 'Add Location'
              });
              components.push({
                path: 'profile',
                label: "Admin: ".concat(decodedToken.sub)
              });
            } else {
              components.push({
                path: 'login',
                label: 'Login'
              });
              components.push({
                path: 'register',
                label: 'Register'
              });
              localStorage.removeItem('token');

              _this10.routes.next(components);

              return;
            }
          });
          this.routes.next(components);
        }
      }]);

      return AllowedRoutesService;
    }();

    AllowedRoutesService.ɵfac = function AllowedRoutesService_Factory(t) {
      return new (t || AllowedRoutesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    AllowedRoutesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AllowedRoutesService,
      factory: AllowedRoutesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllowedRoutesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "/api/login"), {
            email: email,
            password: password
          }, {
            responseType: 'text'
          });
        }
      }, {
        key: "register",
        value: function register(email, password) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "/api/register"), {
            email: email,
            password: password
          }, {
            responseType: 'text'
          });
        }
      }, {
        key: "registerAdmin",
        value: function registerAdmin(email, password) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "/api/registerAdmin"), {
            email: email,
            password: password
          }, {
            responseType: 'text'
          });
        } // profile() {
        //   return this.http.get<UserProfile>(`${environment.apiUrl}/api/profile`);
        // }
        //
        // updateProfile(user: UserProfile) {
        //   console.log(user);
        //   return this.http.put<UserProfile>(
        //     `${environment.apiUrl}/api/updateProfile`,
        //     { email: user.email, firstName: user.firstName, lastName: user.lastName }
        //   );
        // }
        //
        // changePassword(changePassword: ChangePassword) {
        //   console.log(changePassword);
        //   return this.http.put<UserProfile>(`${environment.apiUrl}/api/reset`, {
        //     password1: changePassword.password1,
        //     password2: changePassword.password2
        //   });
        // }

      }, {
        key: "getEmail",
        value: function getEmail() {
          var token = localStorage.getItem('token');

          if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
            return false;
          }

          var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
          return decodedToken.sub;
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          var isAdmin = false;
          var token = localStorage.getItem('token');

          if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
            return false;
          }

          var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
          var currentTime = new Date().getTime() / 1000;

          if (currentTime > decodedToken.exp) {
            return isAdmin;
          }

          decodedToken.roles.forEach(function (role) {
            if (role.authority === 'ROLE_ADMIN') {
              isAdmin = true;
            }
          });
          return isAdmin;
        }
      }, {
        key: "isUser",
        value: function isUser() {
          var isAdmin = false;
          var token = localStorage.getItem('token'); // console.log(token);

          if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
            return false;
          }

          var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
          var currentTime = new Date().getTime() / 1000;

          if (currentTime > decodedToken.exp) {
            return isAdmin;
          }

          decodedToken.roles.forEach(function (role) {
            if (role.authority === 'ROLE_USER') {
              isAdmin = true;
            }
          });
          return isAdmin;
        }
      }, {
        key: "logout",
        value: function logout() {
          var token = localStorage.getItem('token');

          if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
            return false;
          }

          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          console.log('izlogovan');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/certificate-service.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/certificate-service.service.ts ***!
    \*********************************************************/

  /*! exports provided: CertificateServiceService */

  /***/
  function srcAppServicesCertificateServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CertificateServiceService", function () {
      return CertificateServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var CertificateServiceService = /*#__PURE__*/function () {
      function CertificateServiceService(http, userService) {
        _classCallCheck(this, CertificateServiceService);

        this.http = http;
        this.userService = userService;
        this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].certificate;
      }

      _createClass(CertificateServiceService, [{
        key: "getAllCertificates",
        value: function getAllCertificates() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/certificate/allCertificates');
        }
      }, {
        key: "revokeCertificate",
        value: function revokeCertificate(certificate) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/certificate/revoke', certificate);
        }
      }, {
        key: "checkCertificateStatus",
        value: function checkCertificateStatus(certificate) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/certificate/check', certificate);
        }
      }, {
        key: "getAllPossibleIssuers",
        value: function getAllPossibleIssuers() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/certificate/allPossibleIssuers');
        }
      }, {
        key: "downloadCertificate",
        value: function downloadCertificate(certificate) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/certificate/download', certificate);
        }
      }]);

      return CertificateServiceService;
    }();

    CertificateServiceService.ɵfac = function CertificateServiceService_Factory(t) {
      return new (t || CertificateServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    CertificateServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CertificateServiceService,
      factory: CertificateServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificateServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/log.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/log.service.ts ***!
    \*****************************************/

  /*! exports provided: LogService */

  /***/
  function srcAppServicesLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LogService = /*#__PURE__*/function () {
      function LogService(http) {
        _classCallCheck(this, LogService);

        this.http = http;
      }

      _createClass(LogService, [{
        key: "getAllLogs",
        value: function getAllLogs() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/api/log/allLogs');
        }
      }, {
        key: "addLog",
        value: function addLog(log) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl, "/api/log"), log, {
            responseType: 'text'
          });
        }
      }]);

      return LogService;
    }();

    LogService.ɵfac = function LogService_Factory(t) {
      return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogService,
      factory: LogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
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
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: TOKEN, UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOKEN", function () {
      return TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TOKEN = 'LoggedInUser';

    var UserService = function UserService(router, httpClient) {
      _classCallCheck(this, UserService);

      this.router = router;
      this.httpClient = httpClient;
      this.accessToken = null; // this.loggedInUserSubject = new BehaviorSubject<UserTokenState>(JSON.parse(localStorage.getItem('user')));
      // this.loggedInUser = this.loggedInUserSubject.asObservable();
    };

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
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
      production: false,
      baseUrl: 'https://localhost:8443',
      login: '/login',
      admin: '/admin',
      user: '/user',
      certificate: '/certificate',
      client: '/client'
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
    /*! D:\Bezbednost-PIK\FRONTEND\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map