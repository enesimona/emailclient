(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_material_course"] = self["webpackChunkangular_material_course"] || []).push([["main"], {
    /***/
    98255: function _(module) {
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
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth/auth.guard */
      3870);

      var routes = [{
        path: 'inbox',
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_inbox_inbox_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./inbox/inbox.module */
          9562)).then(function (mod) {
            return mod.InboxModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      6849);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth.service */
      50384);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
          this.signedIn$ = this.authService.signedIn$;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.checkAuth().subscribe(function () {});
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth.module */
      71674);
      /* harmony import */


      var _auth_auth_http_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth-http-interceptor */
      70017);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/service-worker */
      47334);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      92340);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
          useClass: _auth_auth_http_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthHttpInterceptor,
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    70017: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthHttpInterceptor": function AuthHttpInterceptor() {
          return (
            /* binding */
            _AuthHttpInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /**
       *
       */


      var _AuthHttpInterceptor = /*#__PURE__*/function () {
        function AuthHttpInterceptor() {
          _classCallCheck(this, AuthHttpInterceptor);
        }

        _createClass(AuthHttpInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var modifiedReq = req.clone({
              withCredentials: true
            });
            return next.handle(modifiedReq);
          }
        }]);

        return AuthHttpInterceptor;
      }();

      _AuthHttpInterceptor = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _AuthHttpInterceptor);
      /***/
    },

    /***/
    40431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthRoutingModule": function AuthRoutingModule() {
          return (
            /* binding */
            _AuthRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin/signin.component */
      3267);
      /* harmony import */


      var _signout_signout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signout/signout.component */
      36261);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup/signup.component */
      64309);

      var routes = [{
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent
      }, {
        path: 'signout',
        component: _signout_signout_component__WEBPACK_IMPORTED_MODULE_1__.SignoutComponent
      }, {
        path: '',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent
      }];

      var _AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      _AuthRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      })], _AuthRoutingModule);
      /***/
    },

    /***/
    3870: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      78767);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      50384);

      var _AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canLoad",
          value: function canLoad(route, segments) {
            var _this = this;

            return this.authService.signedIn$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.skipWhile)(function (value) {
              return value === null;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (isSignedIn) {
              if (!isSignedIn) {
                _this.router.navigateByUrl('/');
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      _AuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _AuthGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _AuthGuard);
      /***/
    },

    /***/
    71674: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthModule": function AuthModule() {
          return (
            /* binding */
            _AuthModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-routing.module */
      40431);
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin/signin.component */
      3267);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup/signup.component */
      64309);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _signout_signout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./signout/signout.component */
      36261);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      70781);

      var _AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      _AuthModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__.SigninComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _signout_signout_component__WEBPACK_IMPORTED_MODULE_4__.SignoutComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule]
      })], _AuthModule);
      /***/
    },

    /***/
    50384: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      98636);

      var _AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.rootURL = 'https://api.angular-email.com';
          this.signedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
          this.username = '';
        }

        _createClass(AuthService, [{
          key: "usernameAvailable",
          value: function usernameAvailable(username) {
            return this.http.post("".concat(this.rootURL, "/auth/username"), {
              username: username
            });
          }
        }, {
          key: "signup",
          value: function signup(credentials) {
            var _this2 = this;

            return this.http.post("".concat(this.rootURL, "/auth/signup"), credentials).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function (response) {
              _this2.signedIn$.next(true);

              _this2.username = response.username;
            }));
          }
        }, {
          key: "checkAuth",
          value: function checkAuth() {
            var _this3 = this;

            return this.http.get("".concat(this.rootURL, "/auth/signedin")).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function (_ref) {
              var authenticated = _ref.authenticated,
                  username = _ref.username;

              _this3.signedIn$.next(authenticated);

              _this3.username = username;
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this4 = this;

            //delete cookie - token after sign out
            return this.http.post("".concat(this.rootURL, "/auth/signout"), {}).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function () {
              _this4.signedIn$.next(false);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn(signinCredentials) {
            var _this5 = this;

            return this.http.post("".concat(this.rootURL, "/auth/signin"), signinCredentials).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function (response) {
              _this5.signedIn$.next(true);

              _this5.username = response.username;
            }));
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _AuthService);
      /***/
    },

    /***/
    3267: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninComponent": function SigninComponent() {
          return (
            /* binding */
            _SigninComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signin.component.html */
      93250);
      /* harmony import */


      var _signin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin.component.css */
      68431);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      50384);

      var _SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(authService, router) {
          _classCallCheck(this, SigninComponent);

          this.authService = authService;
          this.router = router;
          this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(20)])
          }, {
            validators: []
          });
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            if (this.signInForm.invalid) {
              return;
            }

            this.authService.signIn(this.signInForm.value).subscribe({
              next: function next() {
                _this6.router.navigateByUrl('/inbox');
              },
              error: function error(_ref2) {
                var _error = _ref2.error;

                if (_error.username || _error.password) {
                  _this6.signInForm.setErrors({
                    credentials: true
                  });
                }
              }
            });
          }
        }]);

        return SigninComponent;
      }();

      _SigninComponent.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _SigninComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signin',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signin_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _SigninComponent);
      /***/
    },

    /***/
    36261: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignoutComponent": function SignoutComponent() {
          return (
            /* binding */
            _SignoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signout.component.html */
      64983);
      /* harmony import */


      var _signout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signout.component.css */
      3953);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      50384);

      var _SignoutComponent = /*#__PURE__*/function () {
        function SignoutComponent(authService, router) {
          _classCallCheck(this, SignoutComponent);

          this.authService = authService;
          this.router = router;
        }

        _createClass(SignoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.authService.signOut().subscribe(function () {
              //navigate the user back to a signin page 
              _this7.router.navigateByUrl('/');
            });
          }
        }]);

        return SignoutComponent;
      }();

      _SignoutComponent.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _SignoutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-signout',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signout_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _SignoutComponent);
      /***/
    },

    /***/
    64309: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupComponent": function SignupComponent() {
          return (
            /* binding */
            _SignupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.component.html */
      28562);
      /* harmony import */


      var _signup_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.component.css */
      15524);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      50384);
      /* harmony import */


      var _validators_match_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../validators/match-password */
      32206);
      /* harmony import */


      var _validators_unique_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../validators/unique-username */
      72108);

      var _SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(matchPassword, uniqueUsername, authService, router) {
          _classCallCheck(this, SignupComponent);

          this.matchPassword = matchPassword;
          this.uniqueUsername = uniqueUsername;
          this.authService = authService;
          this.router = router;
          this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[a-z0-9]+$/)], [this.uniqueUsername.validate]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)]),
            passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)])
          }, {
            validators: [this.matchPassword.validate]
          });
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            if (this.authForm.invalid) {
              return;
            }

            this.authService.signup(this.authForm.value).subscribe({
              next: function next(response) {
                //navigate to some other route
                _this8.router.navigateByUrl('/inbox');
              },
              complete: function complete() {},
              error: function error(err) {
                if (!err.status) {
                  _this8.authForm.setErrors({
                    noConnection: true
                  });
                } else {
                  _this8.authForm.setErrors({
                    unkownError: true
                  });
                }
              }
            });
          }
        }]);

        return SignupComponent;
      }();

      _SignupComponent.ctorParameters = function () {
        return [{
          type: _validators_match_password__WEBPACK_IMPORTED_MODULE_3__.MatchPassword
        }, {
          type: _validators_unique_username__WEBPACK_IMPORTED_MODULE_4__.UniqueUsername
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _SignupComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _SignupComponent);
      /***/
    },

    /***/
    32206: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchPassword": function MatchPassword() {
          return (
            /* binding */
            _MatchPassword
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MatchPassword = /*#__PURE__*/function () {
        function MatchPassword() {
          _classCallCheck(this, MatchPassword);
        }

        _createClass(MatchPassword, [{
          key: "validate",
          value: function validate(formGroup) {
            var _formGroup$value = formGroup.value,
                password = _formGroup$value.password,
                passwordConfirmation = _formGroup$value.passwordConfirmation;

            if (password === passwordConfirmation) {
              return null;
            } else {
              return {
                passwordsDontMatch: true
              };
            }
          }
        }]);

        return MatchPassword;
      }();

      _MatchPassword = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _MatchPassword);
      /***/
    },

    /***/
    72108: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniqueUsername": function UniqueUsername() {
          return (
            /* binding */
            _UniqueUsername
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../auth.service */
      50384);

      var _UniqueUsername = function UniqueUsername(authService) {
        var _this9 = this;

        _classCallCheck(this, UniqueUsername);

        this.authService = authService;

        this.validate = function (control) {
          var value = control.value;
          return _this9.authService.usernameAvailable(value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (value) {
            if (value.available) {
              return null;
            }
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) {
            if (err.error.username) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                nonUniqueUsername: true
              });
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
                noConnection: true
              });
            }
          }));
        };
      };

      _UniqueUsername.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
        }];
      };

      _UniqueUsername = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _UniqueUsername);
      /***/
    },

    /***/
    50235: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InputComponent": function InputComponent() {
          return (
            /* binding */
            _InputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./input.component.html */
      85451);
      /* harmony import */


      var _input_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./input.component.css */
      96679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InputComponent = /*#__PURE__*/function () {
        function InputComponent() {
          _classCallCheck(this, InputComponent);

          this.controlType = 'input';
        }

        _createClass(InputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showErrors",
          value: function showErrors() {
            var _this$control = this.control,
                dirty = _this$control.dirty,
                touched = _this$control.touched,
                errors = _this$control.errors;
            return dirty && touched && errors;
          }
        }]);

        return InputComponent;
      }();

      _InputComponent.ctorParameters = function () {
        return [];
      };

      _InputComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        inputType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        controlType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _InputComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_input_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _InputComponent);
      /***/
    },

    /***/
    73446: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalComponent": function ModalComponent() {
          return (
            /* binding */
            _ModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal.component.html */
      32615);
      /* harmony import */


      var _modal_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal.component.css */
      19144);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(el) {
          _classCallCheck(this, ModalComponent);

          this.el = el;
          this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            document.body.appendChild(this.el.nativeElement);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.el.nativeElement.remove();
          }
        }, {
          key: "onDismissClick",
          value: function onDismissClick() {
            this.dismiss.emit();
          }
        }]);

        return ModalComponent;
      }();

      _ModalComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }];
      };

      _ModalComponent.propDecorators = {
        dismiss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _ModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-modal',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_component_css__WEBPACK_IMPORTED_MODULE_1__]
      })], _ModalComponent);
      /***/
    },

    /***/
    44466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./input/input.component */
      50235);
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal/modal.component */
      73446);

      var _SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      _SharedModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent]
      })], _SharedModule);
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! hammerjs */
      58256);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    75158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui container\">\n    <div class=\"ui secondary pointing menu\">\n        <a routerLink=\"/\" class=\"item logo\">Mailbox</a>\n\n        <div class=\"right menu\">\n            <ng-container *ngIf=\"signedIn$ | async\">\n                <a routerLink=\"/inbox\" class=\"ui item\" routerLinkActive=\"active\">Inbox</a>\n                <a routerLink=\"/signout\" class=\"ui item\" routerLinkActive=\"active\">Sign Out</a>\n            </ng-container>\n            <ng-container *ngIf=\"!(signedIn$ | async)\">\n                <a routerLink=\"/\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"ui item\" routerLinkActive=\"active\">Sign In</a>\n                <a routerLink=\"/signup\" class=\"ui item\" routerLinkActive=\"active\">Sign Up</a>\n            </ng-container>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n\n";
      /***/
    },

    /***/
    93250: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3>Sign In</h3>\n<form class=\"ui form\" [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\">\n  <app-input\n    inputType=\"text\"\n    label=\"Username\"\n    [control]=\"signInForm.get('username')\"\n  ></app-input>\n  <app-input\n    inputType=\"password\"\n    label=\"Password\"\n    [control]=\"signInForm.get('password')\"\n  ></app-input>\n\n  <div\n    *ngIf=\"\n      signInForm.errors\n    \"\n    class=\"ui red basic label\"\n  >\n    <p *ngIf=\"signInForm.errors.credentials\">\n      Invalid username or password.\n    </p>\n  </div>\n\n  <div>\n    <button mat-button class=\"mat-raised-button mat-accent\">\n      Submit\n    </button>\n  </div>\n\n</form>\n";
      /***/
    },

    /***/
    64983: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>Signing out...</p>\n";
      /***/
    },

    /***/
    28562: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3>Create an Account</h3>\n<form class=\"ui form\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\">\n  <app-input\n    inputType=\"text\"\n    label=\"Username\"\n    [control]=\"authForm.get('username')\"\n  ></app-input>\n  <app-input\n    inputType=\"password\"\n    label=\"Password\"\n    [control]=\"authForm.get('password')\"\n  ></app-input>\n  <app-input\n    inputType=\"password\"\n    label=\"Password Confirmation\"\n    [control]=\"authForm.get('passwordConfirmation')\"\n  ></app-input>\n\n  <div\n    *ngIf=\"\n      authForm.get('password').touched &&\n      authForm.get('passwordConfirmation').touched &&\n      authForm.errors\n    \"\n    class=\"ui red basic label\"\n  >\n    <p *ngIf=\"authForm.errors.passwordsDontMatch\">\n      Password and Password Confirmation must match.\n    </p>\n    <p *ngIf=\"authForm.errors.noConnection\">\n      No internet connection detected, failed to sign up.\n    </p>\n    <p *ngIf=\"authForm.errors.unkownError\">\n      Unknown error.\n    </p>\n  </div>\n\n  <div>\n    <button mat-button class=\"mat-raised-button mat-accent\">\n      Submit\n    </button>\n  </div>\n\n</form>\n";
      /***/
    },

    /***/
    85451: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"field\">\n  <label>{{ label }}</label>\n\n\n  <input [type]=\"inputType\" [formControl]=\"control\" *ngIf=\"controlType==='input'\"/>\n\n  <textarea *ngIf=\"controlType==='textarea'\" [formControl]=\"control\"></textarea>\n  <div *ngIf=\"showErrors()\" class=\"ui pointing red basic label\">\n    <p *ngIf=\"control.errors.required\">\n      Value is required\n    </p>\n    <p *ngIf=\"control.errors.email\">\n      Enter a valid email\n    </p>\n    <p *ngIf=\"control.errors.minlength\">\n      Value you entered is\n      {{ control.errors.minlength.actualLength }}\n      characters long, but it must be at aleast\n      {{ control.errors.minlength.requiredLength }}\n      characters\n    </p>\n    <p *ngIf=\"control.errors.maxlength\">\n      Value you entered is\n      {{ control.errors.maxlength.actualLength }}\n      characters long, but it cannot be longer than\n      {{ control.errors.maxlength.requiredLength }}\n      characters\n    </p>\n    <p *ngIf=\"control.errors.pattern\">\n      Invalid format\n    </p>\n    <p *ngIf=\"control.errors.nonUniqueUsername\">\n      Username is taken\n    </p>\n    <p *ngIf=\"control.errors.noConnection\">\n      Can't tell if username is taken\n    </p>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    32615: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div (click)=\"onDismissClick()\" class=\"ui dimmer visible active\">\n    <div class=\"ui modal visible active\" (click)=\"$event.stopPropagation()\">\n        <i class=\"close icon\" (click)=\"onDismissClick()\"></i>\n        <div class=\"header\">\n            <ng-content select=\"[modalTitle]\"></ng-content>\n        </div>\n        <div class=\"content\">\n            <ng-content></ng-content>\n        </div>\n        <div class=\"actions actions-default\">\n            <button (click)=\"onDismissClick()\" class=\"ui button primary\">Ok</button>\n        </div>\n        <div class=\"actions\">\n            <ng-content select=\"[modalFooter]\"></ng-content>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    6849: function _(module) {
      "use strict";

      module.exports = ".logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59Il19 */";
      /***/
    },

    /***/
    68431: function _(module) {
      "use strict";

      module.exports = ".basic.label{\n    margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljLmxhYmVse1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    3953: function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdub3V0LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    15524: function _(module) {
      "use strict";

      module.exports = ".basic.label {\n  margin-bottom: 0.5em;\n}\n\nbutton {\n  margin-bottom: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljLmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    96679: function _(module) {
      "use strict";

      module.exports = ":host {\n  display: block;\n  margin-bottom: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    19144: function _(module) {
      "use strict";

      module.exports = ".actions:empty{\n    display:none;\n}\n\n.actions-default{\n    display:none;\n}\n\n.actions:empty + .actions-default{\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zOmVtcHR5e1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuLmFjdGlvbnMtZGVmYXVsdHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbi5hY3Rpb25zOmVtcHR5ICsgLmFjdGlvbnMtZGVmYXVsdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map