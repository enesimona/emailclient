(self["webpackChunkangular_material_course"] = self["webpackChunkangular_material_course"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);




const routes = [
    {
        path: 'inbox',
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inbox_inbox_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inbox/inbox.module */ 9562)).then(mod => mod.InboxModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ 50384);





let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.signedIn$ = this.authService.signedIn$;
    }
    ngOnInit() {
        this.authService.checkAuth().subscribe(() => { });
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 71674);
/* harmony import */ var _auth_auth_http_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-http-interceptor */ 70017);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 47334);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 92340);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_auth_http_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthHttpInterceptor, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 70017:
/*!***********************************************!*\
  !*** ./src/app/auth/auth-http-interceptor.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHttpInterceptor": function() { return /* binding */ AuthHttpInterceptor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 *
 */
let AuthHttpInterceptor = class AuthHttpInterceptor {
    intercept(req, next) {
        const modifiedReq = req.clone({
            withCredentials: true
        });
        return next.handle(modifiedReq);
    }
};
AuthHttpInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AuthHttpInterceptor);



/***/ }),

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": function() { return /* binding */ AuthRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ 3267);
/* harmony import */ var _signout_signout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signout/signout.component */ 36261);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 64309);






const routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent },
    { path: 'signout', component: _signout_signout_component__WEBPACK_IMPORTED_MODULE_1__.SignoutComponent },
    { path: '', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AuthRoutingModule);



/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 78767);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 50384);





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        return this.authService.signedIn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.skipWhile)(value => value === null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((isSignedIn) => {
            if (!isSignedIn) {
                this.router.navigateByUrl('/');
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": function() { return /* binding */ AuthModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 40431);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ 3267);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 64309);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _signout_signout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signout/signout.component */ 36261);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);










let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__.SigninComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _signout_signout_component__WEBPACK_IMPORTED_MODULE_4__.SignoutComponent,],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule]
    })
], AuthModule);



/***/ }),

/***/ 50384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 98636);





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.rootURL = 'https://api.angular-email.com';
        this.signedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.username = '';
    }
    usernameAvailable(username) {
        return this.http.post(`${this.rootURL}/auth/username`, {
            username
        });
    }
    signup(credentials) {
        return this.http.post(`${this.rootURL}/auth/signup`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((response) => {
            this.signedIn$.next(true);
            this.username = response.username;
        }));
    }
    checkAuth() {
        return this.http.get(`${this.rootURL}/auth/signedin`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(({ authenticated, username }) => {
            this.signedIn$.next(authenticated);
            this.username = username;
        }));
    }
    signOut() {
        //delete cookie - token after sign out
        return this.http.post(`${this.rootURL}/auth/signout`, {})
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
            this.signedIn$.next(false);
        }));
    }
    signIn(signinCredentials) {
        return this.http.post(`${this.rootURL}/auth/signin`, signinCredentials)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((response) => {
            this.signedIn$.next(true);
            this.username = response.username;
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 3267:
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": function() { return /* binding */ SigninComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signin.component.html */ 93250);
/* harmony import */ var _signin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.component.css */ 68431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 50384);







let SigninComponent = class SigninComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(20)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(20)
            ]),
        }, { validators: [] });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.signInForm.invalid) {
            return;
        }
        this.authService.signIn(this.signInForm.value).subscribe({
            next: () => {
                this.router.navigateByUrl('/inbox');
            },
            error: ({ error }) => {
                if (error.username || error.password) {
                    this.signInForm.setErrors({ credentials: true });
                }
            }
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SigninComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signin',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signin_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signin_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], SigninComponent);



/***/ }),

/***/ 36261:
/*!***************************************************!*\
  !*** ./src/app/auth/signout/signout.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignoutComponent": function() { return /* binding */ SignoutComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signout.component.html */ 64983);
/* harmony import */ var _signout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signout.component.css */ 3953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 50384);






let SignoutComponent = class SignoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.signOut().subscribe(() => {
            //navigate the user back to a signin page 
            this.router.navigateByUrl('/');
        });
    }
};
SignoutComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SignoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-signout',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signout_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signout_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignoutComponent);



/***/ }),

/***/ 64309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.component.html */ 28562);
/* harmony import */ var _signup_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.css */ 15524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 50384);
/* harmony import */ var _validators_match_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/match-password */ 32206);
/* harmony import */ var _validators_unique_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/unique-username */ 72108);









let SignupComponent = class SignupComponent {
    constructor(matchPassword, uniqueUsername, authService, router) {
        this.matchPassword = matchPassword;
        this.uniqueUsername = uniqueUsername;
        this.authService = authService;
        this.router = router;
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[a-z0-9]+$/)
            ], [this.uniqueUsername.validate]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)
            ]),
            passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20)
            ])
        }, { validators: [this.matchPassword.validate] });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.authForm.invalid) {
            return;
        }
        this.authService.signup(this.authForm.value).subscribe({
            next: (response) => {
                //navigate to some other route
                this.router.navigateByUrl('/inbox');
            },
            complete: () => {
            },
            error: (err) => {
                if (!err.status) {
                    this.authForm.setErrors({ noConnection: true });
                }
                else {
                    this.authForm.setErrors({ unkownError: true });
                }
            }
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _validators_match_password__WEBPACK_IMPORTED_MODULE_3__.MatchPassword },
    { type: _validators_unique_username__WEBPACK_IMPORTED_MODULE_4__.UniqueUsername },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupComponent);



/***/ }),

/***/ 32206:
/*!***************************************************!*\
  !*** ./src/app/auth/validators/match-password.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchPassword": function() { return /* binding */ MatchPassword; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


let MatchPassword = class MatchPassword {
    validate(formGroup) {
        const { password, passwordConfirmation } = formGroup.value;
        if (password === passwordConfirmation) {
            return null;
        }
        else {
            return { passwordsDontMatch: true };
        }
    }
};
MatchPassword = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], MatchPassword);



/***/ }),

/***/ 72108:
/*!****************************************************!*\
  !*** ./src/app/auth/validators/unique-username.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueUsername": function() { return /* binding */ UniqueUsername; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 50384);





let UniqueUsername = class UniqueUsername {
    constructor(authService) {
        this.authService = authService;
        this.validate = (control) => {
            const { value } = control;
            return this.authService.usernameAvailable(value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(value => {
                if (value.available) {
                    return null;
                }
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
                if (err.error.username) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ nonUniqueUsername: true });
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ noConnection: true });
                }
            }));
        };
    }
};
UniqueUsername.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
UniqueUsername = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], UniqueUsername);



/***/ }),

/***/ 50235:
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": function() { return /* binding */ InputComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./input.component.html */ 85451);
/* harmony import */ var _input_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.component.css */ 96679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let InputComponent = class InputComponent {
    constructor() {
        this.controlType = 'input';
    }
    ngOnInit() { }
    showErrors() {
        const { dirty, touched, errors } = this.control;
        return dirty && touched && errors;
    }
};
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    inputType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    controlType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
InputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-input',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_input_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_input_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputComponent);



/***/ }),

/***/ 73446:
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": function() { return /* binding */ ModalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal.component.html */ 32615);
/* harmony import */ var _modal_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component.css */ 19144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let ModalComponent = class ModalComponent {
    constructor(el) {
        this.el = el;
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        document.body.appendChild(this.el.nativeElement);
    }
    ngOnDestroy() {
        this.el.nativeElement.remove();
    }
    onDismissClick() {
        this.dismiss.emit();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
ModalComponent.propDecorators = {
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-modal',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalComponent);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/input.component */ 50235);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ 73446);






let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent]
    })
], SharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 58256);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui container\">\n    <div class=\"ui secondary pointing menu\">\n        <a routerLink=\"/\" class=\"item logo\">Mailbox</a>\n\n        <div class=\"right menu\">\n            <ng-container *ngIf=\"signedIn$ | async\">\n                <a routerLink=\"/inbox\" class=\"ui item\" routerLinkActive=\"active\">Inbox</a>\n                <a routerLink=\"/signout\" class=\"ui item\" routerLinkActive=\"active\">Sign Out</a>\n            </ng-container>\n            <ng-container *ngIf=\"!(signedIn$ | async)\">\n                <a routerLink=\"/\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"ui item\" routerLinkActive=\"active\">Sign In</a>\n                <a routerLink=\"/signup\" class=\"ui item\" routerLinkActive=\"active\">Sign Up</a>\n            </ng-container>\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n\n");

/***/ }),

/***/ 93250:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/signin/signin.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Sign In</h3>\n<form class=\"ui form\" [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\">\n  <app-input\n    inputType=\"text\"\n    label=\"Username\"\n    [control]=\"signInForm.get('username')\"\n  ></app-input>\n  <app-input\n    inputType=\"password\"\n    label=\"Password\"\n    [control]=\"signInForm.get('password')\"\n  ></app-input>\n\n  <div\n    *ngIf=\"\n      signInForm.errors\n    \"\n    class=\"ui red basic label\"\n  >\n    <p *ngIf=\"signInForm.errors.credentials\">\n      Invalid username or password.\n    </p>\n  </div>\n\n  <div>\n    <button mat-button class=\"mat-raised-button mat-accent\">\n      Submit\n    </button>\n  </div>\n\n</form>\n");

/***/ }),

/***/ 64983:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/signout/signout.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Signing out...</p>\n");

/***/ }),

/***/ 28562:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/signup/signup.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Create an Account</h3>\n<form class=\"ui form\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\">\n  <app-input\n    inputType=\"text\"\n    label=\"Username\"\n    [control]=\"authForm.get('username')\"\n  ></app-input>\n  <app-input\n    inputType=\"password\"\n    label=\"Password\"\n    [control]=\"authForm.get('password')\"\n  ></app-input>\n  <app-input\n    inputType=\"password\"\n    label=\"Password Confirmation\"\n    [control]=\"authForm.get('passwordConfirmation')\"\n  ></app-input>\n\n  <div\n    *ngIf=\"\n      authForm.get('password').touched &&\n      authForm.get('passwordConfirmation').touched &&\n      authForm.errors\n    \"\n    class=\"ui red basic label\"\n  >\n    <p *ngIf=\"authForm.errors.passwordsDontMatch\">\n      Password and Password Confirmation must match.\n    </p>\n    <p *ngIf=\"authForm.errors.noConnection\">\n      No internet connection detected, failed to sign up.\n    </p>\n    <p *ngIf=\"authForm.errors.unkownError\">\n      Unknown error.\n    </p>\n  </div>\n\n  <div>\n    <button mat-button class=\"mat-raised-button mat-accent\">\n      Submit\n    </button>\n  </div>\n\n</form>\n");

/***/ }),

/***/ 85451:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/input/input.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"field\">\n  <label>{{ label }}</label>\n\n\n  <input [type]=\"inputType\" [formControl]=\"control\" *ngIf=\"controlType==='input'\"/>\n\n  <textarea *ngIf=\"controlType==='textarea'\" [formControl]=\"control\"></textarea>\n  <div *ngIf=\"showErrors()\" class=\"ui pointing red basic label\">\n    <p *ngIf=\"control.errors.required\">\n      Value is required\n    </p>\n    <p *ngIf=\"control.errors.email\">\n      Enter a valid email\n    </p>\n    <p *ngIf=\"control.errors.minlength\">\n      Value you entered is\n      {{ control.errors.minlength.actualLength }}\n      characters long, but it must be at aleast\n      {{ control.errors.minlength.requiredLength }}\n      characters\n    </p>\n    <p *ngIf=\"control.errors.maxlength\">\n      Value you entered is\n      {{ control.errors.maxlength.actualLength }}\n      characters long, but it cannot be longer than\n      {{ control.errors.maxlength.requiredLength }}\n      characters\n    </p>\n    <p *ngIf=\"control.errors.pattern\">\n      Invalid format\n    </p>\n    <p *ngIf=\"control.errors.nonUniqueUsername\">\n      Username is taken\n    </p>\n    <p *ngIf=\"control.errors.noConnection\">\n      Can't tell if username is taken\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ 32615:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/modal/modal.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"onDismissClick()\" class=\"ui dimmer visible active\">\n    <div class=\"ui modal visible active\" (click)=\"$event.stopPropagation()\">\n        <i class=\"close icon\" (click)=\"onDismissClick()\"></i>\n        <div class=\"header\">\n            <ng-content select=\"[modalTitle]\"></ng-content>\n        </div>\n        <div class=\"content\">\n            <ng-content></ng-content>\n        </div>\n        <div class=\"actions actions-default\">\n            <button (click)=\"onDismissClick()\" class=\"ui button primary\">Ok</button>\n        </div>\n        <div class=\"actions\">\n            <ng-content select=\"[modalFooter]\"></ng-content>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 6849:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = ".logo{\n    font-family: 'PT Sans', sans-serif;\n    font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG59Il19 */";

/***/ }),

/***/ 68431:
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".basic.label{\n    margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljLmxhYmVse1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn0iXX0= */";

/***/ }),

/***/ 3953:
/*!****************************************************!*\
  !*** ./src/app/auth/signout/signout.component.css ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdub3V0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 15524:
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".basic.label {\n  margin-bottom: 0.5em;\n}\n\nbutton {\n  margin-bottom: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljLmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuIl19 */";

/***/ }),

/***/ 96679:
/*!**************************************************!*\
  !*** ./src/app/shared/input/input.component.css ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = ":host {\n  display: block;\n  margin-bottom: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */";

/***/ }),

/***/ 19144:
/*!**************************************************!*\
  !*** ./src/app/shared/modal/modal.component.css ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".actions:empty{\n    display:none;\n}\n\n.actions-default{\n    display:none;\n}\n\n.actions:empty + .actions-default{\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zOmVtcHR5e1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuLmFjdGlvbnMtZGVmYXVsdHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbi5hY3Rpb25zOmVtcHR5ICsgLmFjdGlvbnMtZGVmYXVsdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map