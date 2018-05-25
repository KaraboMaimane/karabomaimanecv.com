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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo{\r\n transition: all .3s ease;\r\n}\r\n\r\n#logo:active{\r\n    -webkit-transform: translateY(5px);\r\n            transform: translateY(5px);\r\n}\r\n\r\n#logo:hover{\r\n   -webkit-transform: translateY(-1px);\r\n           transform: translateY(-1px); \r\n   text-shadow: 1px 4px 10px rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.nav-pills>li>a{\r\n    transition: all ease .5s;\r\n}\r\n\r\n.nav-pills>li>a:hover{\r\n    -webkit-transform: translateY(-2px);\r\n            transform: translateY(-2px);\r\n}\r\n\r\n#facebook, #twitter, #youtube{\r\n    font-size: 3em;\r\n    padding: 10px;\r\n}\r\n\r\n#facebook{\r\n    transition: all ease 1s;\r\n}\r\n\r\n#twitter{\r\n    transition: all ease 1s;\r\n}\r\n\r\n#youtube{\r\n    transition: all ease 1s;\r\n}\r\n\r\n#facebook:hover{\r\n color: rgba(66, 103, 178, 0.8);\r\n text-shadow: 1px 3px 10px rgba(255, 255, 255, 0.2);\r\n -webkit-transform: scale(1.5);\r\n         transform: scale(1.5);\r\n}\r\n\r\n#twitter:hover{\r\n color: rgba(29, 160, 242, 0.8);\r\n text-shadow: 1px 3px 10px rgba(255, 255, 255, 0.2);\r\n -webkit-transform: scale(1.5);\r\n         transform: scale(1.5);\r\n}\r\n\r\n#youtube:hover{\r\n    color: rgba(255, 0, 0, 0.8);\r\n text-shadow: 1px 3px 10px rgba(255, 255, 255, 0.2);\r\n -webkit-transform: scale(1.5);\r\n         transform: scale(1.5);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n          <div class=\"navbar-header\"><a class=\"navbar-brand\" routerLink=\"portfolio\" id=\"logo\"><em class=\"glyphicon glyphicon-king\" ></em><span class=\"text-title\">My Work</span></a>\n        <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button></div>\n          <div\n              class=\"collapse navbar-collapse\" id=\"navcol-1\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li class=\"active\" role=\"presentation\"><a href=\"#section1\">What I do? </a></li>\n                  <li role=\"presentation\"><a href=\"#section2\">Contact Me </a></li>\n              </ul>\n      </div>\n      </div>\n  </nav>\n</header>\n<ul class=\"nav nav-pills categories\">\n  <li><a routerLink=\"personal-info\">Bio</a></li>\n  <li><a routerLink=\"education\">Education</a></li>\n  <li><a routerLink=\"experience\">Work Experience</a></li>\n  <li><a routerLink=\"portfolio\">Portfolio Of Work</a></li>\n</ul>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-6\">\n        <p class=\"follow text\">You can contact me with the below details</p>\n        <p>Contact Number: 082 316 2480</p>\n        <i class=\"fab fa-facebook\" id=\"facebook\"></i>\n        <i class=\"fab fa-youtube-square\" id=\"youtube\"></i>\n        <i class=\"fab fa-twitter-square\" id=\"twitter\"></i>\n    </div>\n    <div class=\"col-md-6 col-sm-6\">\n        <small>Karabo Maimane Portfolio Page 2018</small><br>\n        <small>This website was designed and created by Karabo Maimane on 24 May 2018 for Codetribe</small>\n    </div>  \n  </div>\n\n</footer>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal-info/personal-info.component */ "./src/app/personal-info/personal-info.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_4__["PersonalInfoComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_router__WEBPACK_IMPORTED_MODULE_2__["routes"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: router, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/personal-info/personal-info.component */ "./src/app/personal-info/personal-info.component.ts");
/* harmony import */ var _app_education_education_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _app_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");





var router = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'personal-info', component: _app_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_1__["PersonalInfoComponent"] },
    { path: 'education', component: _app_education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"] },
    { path: 'experience', component: _app_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] }
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router);


/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headContent1{\r\n    -webkit-animation: slideInLeft 1s;\r\n            animation: slideInLeft 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n#headContent2{\r\n    -webkit-animation: slideInRight 1s;\r\n            animation: slideInRight 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n@-webkit-keyframes slideInLeft{\r\n    0%{\r\n        -webkit-transform: translateX(-100px);\r\n                transform: translateX(-100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(20px);\r\n                transform: translateX(20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes slideInLeft{\r\n    0%{\r\n        -webkit-transform: translateX(-100px);\r\n                transform: translateX(-100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(20px);\r\n                transform: translateX(20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideInRight{\r\n    0%{\r\n        -webkit-transform: translateX(100px);\r\n                transform: translateX(100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(-20px);\r\n                transform: translateX(-20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes slideInRight{\r\n    0%{\r\n        -webkit-transform: translateX(100px);\r\n                transform: translateX(100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(-20px);\r\n                transform: translateX(-20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.list-text{\r\n    list-style-type: none;\r\n    font-weight: 700;\r\n}\r\n\r\n.personalInfo{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.personalInfo .boldText{\r\n    font-weight: bold;\r\n}\r\n\r\n#proImage{\r\n    transition: all .2s ease;\r\n}\r\n\r\n#proImage:hover{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n    -webkit-filter: grayscale(60%);\r\n            filter: grayscale(60%);\r\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);\r\n}"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-lg-4 col-sm-12\">\n      \n      </div>\n  </div>    \n</div>\n\n<div class=\"container post\">\n  <div class=\"row\">\n      <div class=\"col-md-6 post-title\" id=\"headContent1\">\n          <img src=\"../assets/profile.jpg\" width=\"200\" height=\"200\" alt=\"\" class=\"img-circle center-block\" id=\"proImage\">\n          <h1 id=\"name\" class=\"text-center\">Educational Qualifications</h1>\n          <p class=\"author text-center\"><strong></strong> <span class=\"text-muted\">A brief summary of all my educational qualifications</span></p>\n\n          <div class=\"personalInfo well text-center\">  \n            <h4>Qualifications</h4>\n            <p class=\"info\"><span class=\"boldText\">BSc Computer Systems:</span> Heriot Watt University 2015</p>\n            <p class=\"info\"><span class=\"boldText\">HND Information Technology </span> London School Of Business And Management 2012</p>\n            <p class=\"info\"><span class=\"boldText\">Matric:</span> Greenside High School 2010</p>\n            <br>\n            <h4>Certifications</h4>\n            <p class=\"info\"><span class=\"boldText\">Microsoft Certified Solutions Developer (MSCD):</span> Microsoft 2017</p>\n            <p class=\"info\"><span class=\"boldText\">Java SE 8 Programmer I:</span> Oracle University 2016</p>\n          </div>\n      </div>\n      <div class=\"col-md-6 col-md-offset-0 post-body\" id=\"headContent2\">\n        <div class=\"education\">\n          <h4>Educational Qualifications</h4>\n          <div class=\"qualification\">  \n            <p class=\"info\"><strong>Institution:</strong> Heriot Watt University</p>\n            <p class=\"info\"><strong>Qualification:</strong> BSc Computer Systems</p>\n            <p class=\"info\"><strong>Completion Year:</strong> 2014</p>\n            <br>\n          <div class=\"qualification\">\n            <p class=\"info\"><strong>Institution:</strong> CTI Education Group</p>\n            <p class=\"info\"><strong>Qualification:</strong> HND Information Technology</p>\n            <p class=\"info\"><strong>Completion Year:</strong> 2012</p>\n            <br>\n          </div>\n          <div class=\"qualification\">\n            <p class=\"info\"><strong>Institution:</strong> Greenside High School</p>\n            <p class=\"info\"><strong>Qualification:</strong> Matric</p>\n            <p class=\"info\"><strong>Completion Year:</strong> 2010</p>\n            <br>\n          </div>\n            </div>\n       </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headContent1{\r\n    -webkit-animation: slideInLeft 1s;\r\n            animation: slideInLeft 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n#headContent2{\r\n    -webkit-animation: slideInRight 1s;\r\n            animation: slideInRight 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n@-webkit-keyframes slideInLeft{\r\n    0%{\r\n        -webkit-transform: translateX(-100px);\r\n                transform: translateX(-100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(20px);\r\n                transform: translateX(20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes slideInLeft{\r\n    0%{\r\n        -webkit-transform: translateX(-100px);\r\n                transform: translateX(-100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(20px);\r\n                transform: translateX(20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideInRight{\r\n    0%{\r\n        -webkit-transform: translateX(100px);\r\n                transform: translateX(100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(-20px);\r\n                transform: translateX(-20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes slideInRight{\r\n    0%{\r\n        -webkit-transform: translateX(100px);\r\n                transform: translateX(100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(-20px);\r\n                transform: translateX(-20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.list-text{\r\n    list-style-type: none;\r\n    font-weight: 700;\r\n}\r\n\r\n.personalInfo{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.personalInfo .boldText{\r\n    font-weight: bold;\r\n}\r\n\r\n#proImage{\r\n    transition: all .2s ease;\r\n}\r\n\r\n#proImage:hover{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n    -webkit-filter: grayscale(60%);\r\n            filter: grayscale(60%);\r\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);\r\n}"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container post\">\n  <div class=\"row\">\n      <div class=\"col-md-6 post-title\" id=\"headContent1\">\n          <img src=\"../assets/profile.jpg\" width=\"200\" height=\"200\" alt=\"\" class=\"img-circle center-block\" id=\"proImage\">\n          <h1 id=\"name\" class=\"text-center\">Work Experience</h1>\n          <p class=\"author text-center\"><strong></strong> <span class=\"text-muted\"> This is just a brief summary of all my work experience and all I have done up to date</span></p>\n          \n          <div class=\"personalInfo well text-center\">  \n              <h4>Places Ive worked</h4>\n              <p class=\"info\"><span class=\"boldText\">Innovation Hub:</span> Software Developer Trainee (2018)</p>\n              <p class=\"info\"><span class=\"boldText\">Tobb Technologies:</span> Software Developer (2017)</p>\n              <p class=\"info\"><span class=\"boldText\">Coralite Training Academy:</span> Software Developer Intern (2016)</p>\n              <br>\n            </div>\n        </div>\n      <div class=\"col-md-6 col-md-offset-0 post-body\" id=\"headContent2\">\n        <div class=\" employmentHistory\">\n          <h4>Employment History</h4>\n          <div class=\"company1\">\n            <p class=\"info\">Company: Coralite Training Academy</p>\n            <p class=\"info\">Sector: Information Technology</p>\n            <p class=\"info\">Position: Software Developer Intern</p>\n            <p class=\"info\">Roles: </p>\n            <ul>\n              <li>Creating and developing solutions using various open source languages</li>\n              <li>Reporting to the line manager on a daily basis about daily tasks</li>\n              <li>Supporting clients on existing systems and updating them</li>\n              <li>Studying towards completing MCSD and Oracle Java SE 8 I certification</li>\n            </ul>\n            <p class=\"info\">Duration: 2016 - 2017</p>\n          </div>\n          <br><hr>\n          <div class=\"company2\">\n              <p class=\"info\">Company: Tobb Technologies</p>\n              <p class=\"info\">Sector: Information Technology</p>\n              <p class=\"info\">Position: Software Developer</p>\n              <p class=\"info\">Roles: </p>\n              <ul class=\"roles\">\n                <li>Creating and developing solutions using various open source languages</li>\n                <li>Reporting to the line manager on a daily basis about daily tasks</li>\n                <li>Supporting clients on existing systems and updating them</li>\n              </ul>\n              <p class=\"info\">Duration: 2017</p>\n            </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/personal-info/personal-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/personal-info/personal-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headContent1{\r\n    -webkit-animation: slideInLeft 1s;\r\n            animation: slideInLeft 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n#headContent2{\r\n    -webkit-animation: slideInRight 1s;\r\n            animation: slideInRight 1s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n@-webkit-keyframes slideInLeft{\r\n    0%{\r\n        -webkit-transform: translateX(-100px);\r\n                transform: translateX(-100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(20px);\r\n                transform: translateX(20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes slideInLeft{\r\n    0%{\r\n        -webkit-transform: translateX(-100px);\r\n                transform: translateX(-100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(20px);\r\n                transform: translateX(20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideInRight{\r\n    0%{\r\n        -webkit-transform: translateX(100px);\r\n                transform: translateX(100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(-20px);\r\n                transform: translateX(-20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes slideInRight{\r\n    0%{\r\n        -webkit-transform: translateX(100px);\r\n                transform: translateX(100px);\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        -webkit-transform: translateX(-20px);\r\n                transform: translateX(-20px);\r\n    }\r\n    100%{\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.list-text{\r\n    list-style-type: none;\r\n    font-weight: 700;\r\n}\r\n\r\n.personalInfo{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.personalInfo .boldText{\r\n    font-weight: bold;\r\n}\r\n\r\n#proImage{\r\n    transition: all .2s ease;\r\n}\r\n\r\n#proImage:hover{\r\n    -webkit-transform: translateY(2px);\r\n            transform: translateY(2px);\r\n    -webkit-filter: grayscale(60%);\r\n            filter: grayscale(60%);\r\n    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);\r\n}"

/***/ }),

/***/ "./src/app/personal-info/personal-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/personal-info/personal-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container post\">\n  <div class=\"row\">\n      <div class=\"col-md-6 post-title\" id=\"headContent1\">\n         <img src=\"../assets/profile.jpg\" class=\"myPicture\" width=\"200\" height=\"200\" alt=\"\" class=\"center-block img-circle\" id=\"proImage\">\n          <h1 id=\"name\" class=\"text-center\">Hi, I'm Karabo</h1>\n          <p class=\"author text-center\"><strong>By: Karabo Maimane</strong> <span class=\"text-muted\"> Wednesday 23 May</span></p>\n\n          <div class=\"personalInfo well text-center\">  \n            <h4>Bio</h4>\n            <p class=\"info\"><span class=\"boldText\">Name:</span> Karabo Vusumuzi</p>\n            <p class=\"info\"><span class=\"boldText\">Surname:</span> Maimane</p>\n            <p class=\"info\"><span class=\"boldText\">Age:</span> 26 Years</p>\n            <p class=\"info\"><span class=\"boldText\">Gender:</span> Male</p>\n            <p class=\"info\"><span class=\"boldText\">Contacts:</span> (082) - 316 2480</p>\n            <p class=\"info\"><span class=\"boldText\">Where I live:</span> 678B Matshaya Road Naledi, Soweto</p>\n          </div>\n      </div>\n      <div class=\"col-md-6 col-md-offset-0 post-body\" id=\"headContent2\">\n          <p class=\"text-center\">\n            Im Karabo Maimane a 26 year old freelance web and software developer born and bred in Soweto, deep down in a small town called Naledi. I have about a years experience in the professional industry. I have Bachelors Degree from Heriot Watt University\n            of Computer Systems that I completed in 2015. Since then I got into a software development internship at Coralite Training Academy which I did up until October 2017. From that experience I fell in love with web development and am constantly\n            learning and honing my skill as a professional freelance web developer. I am very proud to say that I am skilled in the following languages:\n        </p>\n         <div class=\"text-center list-text\">\n          <li>HTML/HTML5 </li>\n          <li>CSS/CSS3 </li>\n          <li>Vanilla JavaScript/JQuery </li>\n          <li>Bootstrap </li>\n          <li>Java 8</li>\n          <li>C#, ASP.NET MVC</li>\n          <li>PHP </li>\n          <li>MYSQL </li>\n        </div>\n         \n          <p class=\"text-center\">I am a very passionate and eager self-starter who is results-driven and creative, I put a lot of commitment to every aspect of the work I do. Please feel free to look at my portfolio of the projects I did. Should you feel the need to contact me please dont hesitate to check out my details on the footer.</p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/personal-info/personal-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/personal-info/personal-info.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
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

var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent() {
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
    };
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.css */ "./src/app/personal-info/personal-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background{\r\n    background: url('andyone-26591-unsplash.jpg');\r\n    background-size: cover;\r\n    height: 95vh;\r\n    background-position: top;\r\n}\r\n\r\n#panelText{\r\n    font-size: 1.3em;\r\n}\r\n\r\n.panel{\r\n    background-color: rgba(255,255,255,0.1);\r\n    color: rgba(255, 255, 255, 0.863);\r\n    box-shadow: 2px 6px 10px (0, 0, 0, 1); \r\n}\r\n\r\n.panel p{\r\n    font-size: 1.3em;\r\n}\r\n\r\n.panel .panel-footer{\r\n    background-color: rgba(255,255,255,0.0);\r\n}\r\n\r\n#headerText{\r\n    background-color: rgba(255,255,255,0.1);\r\n    border-radius: 2px;\r\n    color: rgba(255, 255, 255, 0.863);\r\n}\r\n\r\n.btn-default{\r\n    background-color: rgba(164, 136, 119, 0.7);\r\n    color: white;\r\n    transition: all ease .3s;\r\n}\r\n\r\n.btn-default:hover{\r\n    -webkit-transform: translateY(-1px);\r\n            transform: translateY(-1px);\r\n    box-shadow: 3px 10px 15px rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n#content{\r\n    -webkit-animation: fadeIn 3s;\r\n            animation: fadeIn 3s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n@-webkit-keyframes fadeIn{\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeIn{\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes dropDown{\r\n    0%{\r\n        -webkit-transform: translateY(-100px);\r\n                transform: translateY(-100px);\r\n        opacity: 0;\r\n    }\r\n\r\n    100%{\r\n        -webkit-transform: translateY(0px);\r\n                transform: translateY(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes dropDown{\r\n    0%{\r\n        -webkit-transform: translateY(-100px);\r\n                transform: translateY(-100px);\r\n        opacity: 0;\r\n    }\r\n\r\n    100%{\r\n        -webkit-transform: translateY(0px);\r\n                transform: translateY(0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n#headerText{\r\n    -webkit-animation: dropDown 2s;\r\n            animation: dropDown 2s;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\nimg{\r\n    transition: all ease .3s;\r\n}\r\n\r\nimg:hover{\r\n    -webkit-filter: grayscale(70%);\r\n            filter: grayscale(70%);\r\n    box-shadow: 2px 15px 20px rgba(0, 0, 0, 0.8);\r\n}"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"background\">\n  <h1 class=\"text-center\" id=\"headerText\">A Glimpse Of My Work...</h1>\n  <div class=\"row\" id=\"content\">\n    <div class=\"col-md-6 col-sm-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n              <p class=\"panel-heading text-center\" id=\"panelText\">Soul Havok Portfolio Page</p>\n              <img src=\"../../assets/SoulHavok.jpg\" width=\"80%\" alt=\"Dj Soul Havok Profile Page\" class=\"pnlImg center-block\">\n              <br>\n              <p class=\"text-center\">A basic schematic for my cousin from Rustenburg who is a dj/producer to assist him to push his music and events to the public.</p>\n            </div>\n            <div class=\"panel-footer\"> <a href=\"http://karabomaimane.github.io/soulhavok.com\" class=\"btn btn-block btn-default\">Soul Havok Page</a> </div>\n          </div>\n    </div>\n\n    <div class=\"col-md-6 col-sm-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n              <p class=\"panel-heading text-center\" id=\"panelText\">Boni & Bike Foundation Page</p>\n              <img src=\"../../assets/Capture.JPG\" width=\"80%\" alt=\"Dj Soul Havok Profile Page\" class=\"pnlImg center-block\">\n              <br>\n              <p class=\"text-center\">A basic schematic for a friend of mine who is running a cycling foundation with some of his associates as they have regular events and gigs it will be useful.</p>\n            </div>\n            <div class=\"panel-footer\"> <a href=\"http://karabomaimane.github.io/boniandbike.com\" class=\"btn btn-block btn-default\">Boni & Bike Page</a></div>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
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

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
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

module.exports = __webpack_require__(/*! C:\Users\maima\CV - Revamped\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map