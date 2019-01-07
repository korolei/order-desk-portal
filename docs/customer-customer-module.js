(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/core/enums/case-management-status.enum.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/enums/case-management-status.enum.ts ***!
  \***********************************************************/
/*! exports provided: CaseManagementStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseManagementStatus", function() { return CaseManagementStatus; });
var CaseManagementStatus;
(function (CaseManagementStatus) {
    CaseManagementStatus["Active"] = "Active";
    CaseManagementStatus["Resolved"] = "Resolved";
    CaseManagementStatus["Emergency"] = "Emergency";
})(CaseManagementStatus || (CaseManagementStatus = {}));


/***/ }),

/***/ "./src/app/customer/all-orders/all-orders.component.css":
/*!**************************************************************!*\
  !*** ./src/app/customer/all-orders/all-orders.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/all-orders/all-orders.component.html":
/*!***************************************************************!*\
  !*** ./src/app/customer/all-orders/all-orders.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n    <mat-spinner color=\"primary\" diameter=\"50\" strokeWidth=\"20\" value=\"100\"></mat-spinner>\r\n  </ng-template>\r\n  <mat-card fxFlex=\"0 1 100%\">\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        All Sales Orders\r\n        <span *ngIf=\"ordersData.length > 0\" class=\"mat-body-1\">(6 of {{ordersData.length}}) |</span>\r\n        <a (click)=\"toggleView(0)\" mat-button>Back</a>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <table mat-table [dataSource]=\"dataSource\" *ngIf=\"ordersData.length > 0; else loading\"\r\n             matSort class=\"mat-elevation-z8\" fxFlexFill>\r\n        <ng-container matColumnDef=\"quoteNumber\">\r\n          <th mat-header-cell *matHeaderCellDef> Quotation </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{element.quoteNumber}}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"soldToBPName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> BP Name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.soldToBPName}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"soldToBP\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> BP # </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.soldToBP}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"totalUSD\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Total $</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.totalUSD | currency}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"plannedDeliveryDate\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Planned Delivery </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.plannedDeliveryDate | date: 'yyyy-MM-dd'}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"plannedReceiptDate\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Promised Date </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.plannedReceiptDate | date: 'yyyy-MM-dd'}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"postalAddress\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Postal Code </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.postalAddress}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"quotationStatus\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n          <td mat-cell *matCellDef=\"let element\"\r\n              [className]=\"(element.quotationStatus === internalHold || element.quotationStatus === creditHold) ? 'warn':''\">\r\n            {{element.quotationStatus}}\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator ></mat-paginator>\r\n    </mat-card-content>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/customer/all-orders/all-orders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/customer/all-orders/all-orders.component.ts ***!
  \*************************************************************/
/*! exports provided: AllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function() { return AllOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_sales_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/sales-order */ "./src/app/shared/models/sales-order.ts");
/* harmony import */ var _core_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/app-settings */ "./src/app/core/app-settings.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllOrdersComponent = /** @class */ (function () {
    function AllOrdersComponent(appService, customerService) {
        this.appService = appService;
        this.customerService = customerService;
        this.ordersData = [];
        this.displayedColumns = [
            'quoteNumber', 'soldToBPName', 'soldToBP',
            'totalUSD', 'plannedDeliveryDate', 'plannedReceiptDate', 'postalAddress', 'quotationStatus'
        ];
        this.internalHold = 'Internal Hold';
        this.creditHold = 'Credit Hold';
    }
    AllOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getData(_core_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].allSalesOrderApi)
            .subscribe(function (data) {
            _this.ordersData = data.map(function (item) { return new _shared_models_sales_order__WEBPACK_IMPORTED_MODULE_1__["SalesOrder"](item); });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.ordersData);
            _this.paginator.pageSize = 10;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AllOrdersComponent.prototype.toggleView = function (viewIndex) {
        this.customerService.viewIndx.next(viewIndex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AllOrdersComponent.prototype, "contactId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AllOrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AllOrdersComponent.prototype, "sort", void 0);
    AllOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-orders',
            template: __webpack_require__(/*! ./all-orders.component.html */ "./src/app/customer/all-orders/all-orders.component.html"),
            styles: [__webpack_require__(/*! ./all-orders.component.css */ "./src/app/customer/all-orders/all-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]])
    ], AllOrdersComponent);
    return AllOrdersComponent;
}());



/***/ }),

/***/ "./src/app/customer/case-management/case-management.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/case-management/case-management.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"ticketNumber\">\r\n      <mat-header-cell *matHeaderCellDef> Ticket # </mat-header-cell>>\r\n      <mat-cell *matCellDef=\"let element\">\r\n        {{element.ticketNumber}}\r\n      </mat-cell>>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"dateOpened\">\r\n      <mat-header-cell *matHeaderCellDef> Date Opened </mat-header-cell>>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.dateOpened | date:'yyyy-MM-dd'}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"urgency\">\r\n      <mat-header-cell *matHeaderCellDef> Urgency </mat-header-cell>>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.urgency}} </mat-cell>>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>>\r\n      <mat-cell *matCellDef=\"let element\" [className]=\"element.status === emergencyStatus ? 'warn':''\">\r\n        {{element.status}}\r\n      </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"note\">\r\n      <mat-header-cell *matHeaderCellDef> Notes </mat-header-cell>>\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <a (click)=\"editNote(element)\" mat-button>{{element.note?.noteType}}</a>\r\n         </mat-cell>>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>>\r\n  </mat-table>\r\n  <mat-paginator fxShow=\"false\"></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/customer/case-management/case-management.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/case-management/case-management.component.ts ***!
  \***********************************************************************/
/*! exports provided: CaseManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseManagementComponent", function() { return CaseManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_enums_case_management_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/enums/case-management-status.enum */ "./src/app/core/enums/case-management-status.enum.ts");
/* harmony import */ var _dialogs_notes_notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/notes/notes.component */ "./src/app/customer/dialogs/notes/notes.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CaseManagementComponent = /** @class */ (function () {
    function CaseManagementComponent(appService, dialog) {
        this.appService = appService;
        this.dialog = dialog;
        this.caseManagement = [];
        this.displayedColumns = ['ticketNumber', 'dateOpened', 'urgency', 'status', 'note'];
        this.emergencyStatus = _core_enums_case_management_status_enum__WEBPACK_IMPORTED_MODULE_2__["CaseManagementStatus"][_core_enums_case_management_status_enum__WEBPACK_IMPORTED_MODULE_2__["CaseManagementStatus"].Emergency];
    }
    CaseManagementComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.caseManagement);
        this.paginator.pageSize = 5;
        this.dataSource.paginator = this.paginator;
    };
    CaseManagementComponent.prototype.editNote = function (item) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '450px';
        dialogConfig.width = '500px';
        dialogConfig.data = item;
        var dialogRef = this.dialog.open(_dialogs_notes_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (val) {
            if (val) {
                item = val;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CaseManagementComponent.prototype, "caseManagement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CaseManagementComponent.prototype, "paginator", void 0);
    CaseManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-case-management',
            template: __webpack_require__(/*! ./case-management.component.html */ "./src/app/customer/case-management/case-management.component.html")
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CaseManagementComponent);
    return CaseManagementComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"dataCount > 0\" fxFlexFill>\r\n  <mat-toolbar color=\"warn\" class=\"mat-body-2 mat-elevation-z1 mat-headline\" style=\"height: 45px\">\r\n        <span>{{organizationData.bp_name}}</span>\r\n  </mat-toolbar>\r\n<div *ngIf=\"locations.length > 0\" fxLayout=\"row\">\r\n<mat-toolbar color=\"accent\" class=\"mat-elevation-z1 Aligner-item--bottom\" style=\"height: 50px\">\r\n  <div fxFlex=\"0 1 22%\">\r\n    <div class=\"mat-body-2\" fxFlex=\"0 1 40%\">\r\n      <span>Ship-To-Location: </span>\r\n    </div>\r\n    <div fxFlex=\"0 1 60%\">\r\n        <mat-select (selectionChange)=\"setContact($event.value)\" [(value)]=\"currentLocationId\" placeholder=\"Select Location\">\r\n          <mat-option *ngFor=\"let location of locations\" [value]=\"location.id\">\r\n            {{location.city}}\r\n          </mat-option>\r\n        </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"currentContact\" fxFlex=\"0 1 88%\"  class=\"mat-body-strong Aligner\">\r\n        <div fxFlex=\"0 1 15%\" style=\"font-size:larger;\">\r\n          <mat-icon class=\"icon\">person</mat-icon>\r\n            {{ currentContact.firstName}} {{ currentContact.lastName}}\r\n        </div>\r\n        <div fxFlex=\"0 1 20%\">\r\n          <span>{{ currentContact.jobTitle}}</span>\r\n        </div>\r\n        <div fxFlex=\"0 1 20%\">\r\n          <span>{{ currentContact.email}}</span>\r\n        </div>\r\n        <div fxFlex=\"0 1 15%\">\r\n          <span>{{ currentContact.phone}}</span>\r\n        </div>\r\n        <div fxFlex=\"0 1 10%\">\r\n        <span>{{currentContact.address.city }}, {{ currentContact.address.state }}</span>\r\n        </div>\r\n        <div fxFlex=\"0 1 10%\">\r\n        <span>{{currentContact.address.country }}, {{ currentContact.address.zip }}</span>\r\n        </div>\r\n        <div fxFlex=\"0 1 5%\" class=\"Aligner-item--bottom\">\r\n          <a (click)=\"editContactInfo()\" mat-button>Edit Address</a>\r\n        </div>\r\n      </div>\r\n</mat-toolbar>\r\n  </div>\r\n<div fxLayout=\"row wrap\" fxLayoutGap=\"5px\" fxLayout.lt-md=\"column\" *ngIf=\"currentContact\" style=\"padding-bottom: 1px;\">\r\n    <ng-container>\r\n      <mat-toolbar class=\"mat-elevation-z1\" style=\"height: 50px\">\r\n          <mat-icon class=\"mat-24\">room</mat-icon>\r\n          <div fxFlex=\"20%\" fxLayoutAlign=\"flex-start\">\r\n            <span>{{currentContact.address.street }} - {{ currentContact.address.city }}  {{ currentContact.address.country }}</span>\r\n          </div>\r\n          <div fxFlex=\"80%\" fxLayoutAlign=\"flex-end\">\r\n            <mat-chip-list>\r\n              <mat-chip [routerLink]=\"['../quotes/quote-form']\">+ New Quote</mat-chip>\r\n              <mat-chip [routerLink]=\"['../orders/order-form']\">+ New Order</mat-chip>\r\n            </mat-chip-list>\r\n          </div>\r\n      </mat-toolbar>\r\n    </ng-container>\r\n  </div>\r\n<div fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutWrap fxLayoutAlign=\"center\"\r\n     *ngIf=\"currentContact\">\r\n    <ng-container *ngIf=\"currentView === allViewScreens[0]\">\r\n      <mat-card fxFlex=\"1 1 calc(28%)\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          Install Base <span *ngIf=\"installBaseData.length > 0\" class=\"mat-body-1\">(5 of {{installBaseData.length}} Machines)\r\n        </span>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content *ngIf=\"installBaseData.length > 0\">\r\n        <app-install-base [installBaseData]=\"installBaseData\"></app-install-base>\r\n      </mat-card-content>\r\n    </mat-card>\r\n      <mat-card fxFlex=\"1 2 calc(25%)\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Quick Account Aging\r\n            <span *ngIf=\"quickAccountAgingData.length > 0\" class=\"mat-body-1\">\r\n              <mat-icon class=\"mat-icon icon\">account_circle</mat-icon>Linda Olson?\r\n            </span>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content *ngIf=\"quickAccountAgingData.length > 0\">\r\n          <app-quick-account-aging [quickAccountAgingData]=\"quickAccountAgingData\"></app-quick-account-aging>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card fxFlex=\"1 1 calc(38%)\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          Case Management\r\n          <span *ngIf=\"caseManagementData.length > 0\" class=\"mat-body-1\">(5 of {{caseManagementData.length}} Tickets)\r\n          </span>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content *ngIf=\"caseManagementData.length > 0\">\r\n        <app-case-management [caseManagement]=\"caseManagementData\"></app-case-management>\r\n      </mat-card-content>\r\n    </mat-card>\r\n      <mat-card fxFlex=\"0 1 50%\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          Open Quotations\r\n          <span *ngIf=\"quotationsData.length > 0\" class=\"mat-body-1\">(6 of {{quotationsData.length}}) |\r\n          <a mat-button (click)=\"currentView = allViewScreens[1]\">View All</a>\r\n        </span>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content *ngIf=\"quotationsData.length > 0\">\r\n        <app-open-quotes [openQuotes]=\"quotationsData\"></app-open-quotes>\r\n      </mat-card-content>\r\n    </mat-card>\r\n      <mat-card fxFlex=\"0 1 50%\">\r\n        <app-open-orders [ordersData]=\"ordersData\" *ngIf=\"ordersData.length > 0\"></app-open-orders>\r\n      </mat-card>\r\n    </ng-container>\r\n  <ng-container *ngIf=\"currentView !== allViewScreens[0]\">\r\n    <div fxFill *ngIf=\"currentView === allViewScreens[1]\">\r\n      <mat-card fxFlex=\"0 1 100%\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            All Quotations\r\n            <span *ngIf=\"quotationsData.length > 0\" class=\"mat-body-1\">(6 of {{quotationsData.length}}) |\r\n          <a (click)=\"currentView = allViewScreens[0]\" mat-button><< Back</a>\r\n        </span>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content *ngIf=\"quotationsData.length > 0\">\r\n          <app-open-quotes [openQuotes]=\"quotationsData\"></app-open-quotes>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFill *ngIf=\"currentView === allViewScreens[2]\">\r\n      <app-all-orders [contactId]=\"currentContact.id\"></app-all-orders>\r\n    </div>\r\n    <div fxFill *ngIf=\"currentView === allViewScreens[3]\">\r\n      <mat-card fxFlex=\"0 1 100%\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            All Install Base <span *ngIf=\"installBaseData.length > 0\" class=\"mat-body-1\">(5 of {{installBaseData.length}} Machines) |\r\n          <a (click)=\"currentView = allViewScreens[0]\" mat-button><< Back</a>\r\n        </span>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n          <app-install-base [installBaseData]=\"installBaseData\"></app-install-base>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFill *ngIf=\"currentView === allViewScreens[4]\">\r\n      <mat-card fxFlex=\"0 1 100%\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Case Management\r\n            <span *ngIf=\"caseManagementData.length > 0\" class=\"mat-body-1\">(5 of {{caseManagementData.length}} Tickets) |\r\n           <a (click)=\"currentView = allViewScreens[0]\" mat-button><< Back</a>\r\n          </span>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content *ngIf=\"caseManagementData.length > 0\">\r\n          <app-case-management [caseManagement]=\"caseManagementData\"></app-case-management>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"dataCount < maxCount\">\r\n    <div fxLayout=\"row\" fxLaoutAlign=\"center\" class=\"loading-spinner\">\r\n      <mat-spinner></mat-spinner>\r\n    </div>\r\n  </ng-container>\r\n  </div >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_install_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/install-base */ "./src/app/customer/models/install-base.ts");
/* harmony import */ var _models_case_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/case-management */ "./src/app/customer/models/case-management.ts");
/* harmony import */ var _models_quick_account_aging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/quick-account-aging */ "./src/app/customer/models/quick-account-aging.ts");
/* harmony import */ var _shared_models_organization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/organization */ "./src/app/shared/models/organization.ts");
/* harmony import */ var _shared_models_quotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/quotation */ "./src/app/shared/models/quotation.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _core_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/app-settings */ "./src/app/core/app-settings.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/contact-info/contact-info.component */ "./src/app/customer/dialogs/contact-info/contact-info.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _shared_models_sales_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/models/sales-order */ "./src/app/shared/models/sales-order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(appService, customerService, dialog) {
        var _this = this;
        this.appService = appService;
        this.customerService = customerService;
        this.dialog = dialog;
        this.orgId = 0;
        this.dataCount = 0;
        this.maxCount = 7;
        this.installBaseData = [];
        this.caseManagementData = [];
        this.quickAccountAgingData = [];
        this.quotationsData = [];
        this.ordersData = [];
        this.contacts = [];
        this.locations = [];
        this.currentLocationId = 0;
        this.allViewScreens = _customer_service__WEBPACK_IMPORTED_MODULE_10__["VIEW_SCREENS"];
        this.currentView = _customer_service__WEBPACK_IMPORTED_MODULE_10__["VIEW_SCREENS"][0];
        customerService.viewIndx.subscribe(function (val) { return _this.currentView = _this.allViewScreens[val]; });
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.orgId > 0) {
            this.getOrganizationData(this.orgId);
        }
        this.appService.showCustomerSearch.next(true);
        this.appService.onCustomerFound.subscribe(function (id) {
            _this.orgId = id;
            _this.getOrganizationData(id);
        });
    };
    CustomerComponent.prototype.getOrganizationData = function (orgId) {
        var _this = this;
        //organization data
        this.appService.getData(_core_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].organizationApi + "/" + orgId)
            .subscribe(function (data) {
            _this.organizationData = new _shared_models_organization__WEBPACK_IMPORTED_MODULE_4__["Organization"](data);
            _this.dataCount = _this.organizationData !== undefined ? _this.dataCount + 1 : _this.dataCount = _this.maxCount;
            _this.contacts = _this.organizationData.contacts;
            _this.locations = _this.contacts.map(function (c) { return c.address; });
        });
    };
    CustomerComponent.prototype.setContact = function (addressId) {
        this.currentContact = this.contacts.find(function (c) { return c.address.id === addressId; });
        this.currentContact.companyName = this.organizationData.bp_name;
        this.currentLocationId = addressId;
        this.dataCount = 2;
        this.getData();
    };
    CustomerComponent.prototype.getData = function () {
        var _this = this;
        //quick account aging data
        this.appService.getData("" + _core_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].quickAccountAgingApi)
            .subscribe(function (data) {
            _this.quickAccountAgingData = data
                .map(function (item) { return new _models_quick_account_aging__WEBPACK_IMPORTED_MODULE_3__["QuickAccountAging"](item); });
            _this.dataCount = _this.dataCount + 1;
        });
        //case management data
        this.appService.getData(_core_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].caseManagementApi)
            .subscribe(function (data) {
            _this.caseManagementData = data
                .map(function (item) { return new _models_case_management__WEBPACK_IMPORTED_MODULE_2__["CaseManagement"](item); });
            _this.dataCount = _this.dataCount + 1;
        });
        // install base data
        this.appService.getData(_core_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].installBaseApi)
            .subscribe(function (data) {
            _this.installBaseData = data
                .map(function (item) { return new _models_install_base__WEBPACK_IMPORTED_MODULE_1__["InstallBase"](item); });
            _this.dataCount = _this.dataCount + 1;
        });
        //open quotation data
        this.appService.getData(_core_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].openQuotationsApi)
            .subscribe(function (data) {
            _this.quotationsData = data
                .map(function (item) { return new _shared_models_quotation__WEBPACK_IMPORTED_MODULE_5__["Quotation"](item); });
            _this.dataCount = _this.dataCount + 1;
        });
        //open sales orders
        this.appService.getData(_core_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].openSalesOrderApi)
            .subscribe(function (data) {
            _this.ordersData = data
                .map(function (item) { return new _shared_models_sales_order__WEBPACK_IMPORTED_MODULE_11__["SalesOrder"](item); });
            _this.dataCount = _this.dataCount + 1;
        });
    };
    CustomerComponent.prototype.editContactInfo = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '550px';
        dialogConfig.width = '350px';
        dialogConfig.data = this.currentContact;
        var dialogRef = this.dialog.open(_dialogs_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_9__["ContactInfoComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (val) {
            if (val) {
                _this.currentContact = val;
                _this.organizationData.bp_name = _this.currentContact.companyName;
            }
        });
    };
    CustomerComponent.prototype.ngOnDestroy = function () {
        this.appService.showCustomerSearch.next(false);
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html")
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _install_base_install_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./install-base/install-base.component */ "./src/app/customer/install-base/install-base.component.ts");
/* harmony import */ var _quick_account_aging_quick_account_aging_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-account-aging/quick-account-aging.component */ "./src/app/customer/quick-account-aging/quick-account-aging.component.ts");
/* harmony import */ var _case_management_case_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./case-management/case-management.component */ "./src/app/customer/case-management/case-management.component.ts");
/* harmony import */ var _open_quotes_open_quotes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./open-quotes/open-quotes.component */ "./src/app/customer/open-quotes/open-quotes.component.ts");
/* harmony import */ var _open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-orders/open-orders.component */ "./src/app/customer/open-orders/open-orders.component.ts");
/* harmony import */ var _dialogs_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogs/contact-info/contact-info.component */ "./src/app/customer/dialogs/contact-info/contact-info.component.ts");
/* harmony import */ var _dialogs_notes_notes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/notes/notes.component */ "./src/app/customer/dialogs/notes/notes.component.ts");
/* harmony import */ var _all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-orders/all-orders.component */ "./src/app/customer/all-orders/all-orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _customer_routing_module__WEBPACK_IMPORTED_MODULE_1__["CustomerRoutingModule"]
            ],
            declarations: [
                _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
                _install_base_install_base_component__WEBPACK_IMPORTED_MODULE_5__["InstallBaseComponent"],
                _quick_account_aging_quick_account_aging_component__WEBPACK_IMPORTED_MODULE_6__["QuickAccountAgingComponent"],
                _case_management_case_management_component__WEBPACK_IMPORTED_MODULE_7__["CaseManagementComponent"],
                _open_quotes_open_quotes_component__WEBPACK_IMPORTED_MODULE_8__["OpenQuotesComponent"],
                _open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_9__["OpenOrdersComponent"],
                _dialogs_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__["ContactInfoComponent"],
                _dialogs_notes_notes_component__WEBPACK_IMPORTED_MODULE_11__["NotesComponent"],
                _all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_12__["AllOrdersComponent"]
            ],
            entryComponents: [
                _dialogs_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_10__["ContactInfoComponent"],
                _dialogs_notes_notes_component__WEBPACK_IMPORTED_MODULE_11__["NotesComponent"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/customer/customer.service.ts ***!
  \**********************************************/
/*! exports provided: VIEW_SCREENS, CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_SCREENS", function() { return VIEW_SCREENS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VIEW_SCREENS = ['All', 'Quotations', 'Orders', 'Install Base', 'Case Management'];
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.viewIndx = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
    }
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer/dialogs/notes/notes.component.html":
/*!*************************************************************!*\
  !*** ./src/app/customer/dialogs/notes/notes.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" >\r\n<h2 mat-dialog-title>New Note</h2>\r\n<mat-dialog-content [formGroup]=\"form\" class=\"form\">\r\n  <mat-form-field fxFlexFill class=\"full-width\">\r\n    <mat-select placeholder=\"Select note type\" formControlName=\"noteType\">\r\n      <mat-option value=\"Info\">Info</mat-option>\r\n      <mat-option value=\"Warning\">Warning</mat-option>\r\n      <mat-option value=\"Error\">Error</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"full-width\" >\r\n    <textarea matInput placeholder=\"Note Text\" formControlName=\"noteText\" rows=\"10\"></textarea>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button\" (click)=\"close()\">\r\n    Close\r\n  </button>\r\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">\r\n    Save\r\n  </button>\r\n</mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/dialogs/notes/notes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/customer/dialogs/notes/notes.component.ts ***!
  \***********************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/app-settings */ "./src/app/core/app-settings.ts");
/* harmony import */ var _models_case_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/case-management */ "./src/app/customer/models/case-management.ts");
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






var NotesComponent = /** @class */ (function () {
    function NotesComponent(appService, fb, dialogRef, item) {
        this.appService = appService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.caseManagementItem = item;
        this.note = item.note;
        this.form = fb.group({
            noteType: [this.note.noteType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            noteText: [this.note.noteText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    NotesComponent.prototype.save = function () {
        var _this = this;
        this.caseManagementItem.note.noteType = this.form.value['noteType'];
        this.caseManagementItem.note.noteText = this.form.value['noteText'];
        this.appService.update(_core_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].updateCaseManagementApi, this.caseManagementItem.id, this.caseManagementItem)
            .subscribe(function () {
            _this.dialogRef.close(_this.caseManagementItem);
            _this.appService.log("Note Info has been updated.");
        });
    };
    NotesComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/customer/dialogs/notes/notes.component.html")
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _models_case_management__WEBPACK_IMPORTED_MODULE_5__["CaseManagement"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/customer/install-base/install-base.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/customer/install-base/install-base.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"machineNumber\">\r\n    <mat-header-cell *matHeaderCellDef> Machine # </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.machineNumber}} </mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"dateInstalled\">\r\n    <mat-header-cell *matHeaderCellDef> Date Installed </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.dateInstalled | date:'yyyy-MM-dd'}}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"id\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\">View BOM</mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n<mat-paginator fxShow=\"false\"></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/customer/install-base/install-base.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/install-base/install-base.component.ts ***!
  \*****************************************************************/
/*! exports provided: InstallBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallBaseComponent", function() { return InstallBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstallBaseComponent = /** @class */ (function () {
    function InstallBaseComponent() {
        this.installBaseData = [];
        this.displayedColumns = ['machineNumber', 'dateInstalled', 'id'];
    }
    InstallBaseComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.installBaseData);
        this.paginator.pageSize = 5;
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InstallBaseComponent.prototype, "installBaseData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InstallBaseComponent.prototype, "paginator", void 0);
    InstallBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-install-base',
            template: __webpack_require__(/*! ./install-base.component.html */ "./src/app/customer/install-base/install-base.component.html")
        })
    ], InstallBaseComponent);
    return InstallBaseComponent;
}());



/***/ }),

/***/ "./src/app/customer/models/case-management.ts":
/*!****************************************************!*\
  !*** ./src/app/customer/models/case-management.ts ***!
  \****************************************************/
/*! exports provided: CaseManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseManagement", function() { return CaseManagement; });
/* harmony import */ var _shared_models_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/entity */ "./src/app/shared/models/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CaseManagement = /** @class */ (function (_super) {
    __extends(CaseManagement, _super);
    function CaseManagement(cm) {
        var _this = _super.call(this, cm.id) || this;
        _this.contact_id = cm.contact_id;
        _this.ticketNumber = cm.ticketNumber;
        _this.dateOpened = new Date(cm.dateOpened);
        _this.urgency = cm.urgency;
        _this.status = cm.status;
        _this.note = cm.note;
        return _this;
    }
    return CaseManagement;
}(_shared_models_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/customer/models/install-base.ts":
/*!*************************************************!*\
  !*** ./src/app/customer/models/install-base.ts ***!
  \*************************************************/
/*! exports provided: InstallBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallBase", function() { return InstallBase; });
/* harmony import */ var _shared_models_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/entity */ "./src/app/shared/models/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var InstallBase = /** @class */ (function (_super) {
    __extends(InstallBase, _super);
    function InstallBase(ib) {
        var _this = _super.call(this, ib.id) || this;
        _this.customerId = ib.customerId,
            _this.dateInstalled = new Date(ib.dateInstalled),
            _this.machineNumber = ib.machineNumber;
        return _this;
    }
    return InstallBase;
}(_shared_models_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/customer/models/quick-account-aging.ts":
/*!********************************************************!*\
  !*** ./src/app/customer/models/quick-account-aging.ts ***!
  \********************************************************/
/*! exports provided: QuickAccountAging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickAccountAging", function() { return QuickAccountAging; });
/* harmony import */ var _shared_models_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/entity */ "./src/app/shared/models/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var QuickAccountAging = /** @class */ (function (_super) {
    __extends(QuickAccountAging, _super);
    function QuickAccountAging(qaa) {
        var _this = _super.call(this, qaa.id) || this;
        _this.agingTerm = qaa.agingTerm,
            _this.amount = qaa.amount,
            _this.currencyCode = qaa.currencyCode;
        return _this;
    }
    return QuickAccountAging;
}(_shared_models_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/customer/open-orders/open-orders.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/customer/open-orders/open-orders.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <ng-template #loading>\r\n    <mat-spinner color=\"primary\" diameter=\"30\" strokeWidth=\"20\" value=\"100\"></mat-spinner>\r\n  </ng-template>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Open Sales Orders\r\n      <span *ngIf=\"ordersData.length > 0\" class=\"mat-body-1\">(6 of {{ordersData.length}}) |\r\n          <a (click)=\"toggleView(2)\" mat-button>View All</a>\r\n          </span>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content >\r\n    <table mat-table [dataSource]=\"dataSource\" *ngIf=\"ordersData.length > 0; else loading\" matSort class=\"mat-elevation-z8\" fxFlexFill>\r\n      <ng-container matColumnDef=\"quoteNumber\">\r\n        <th mat-header-cell *matHeaderCellDef> Quotation </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{element.quoteNumber}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"soldToBPName\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> BP Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.soldToBPName}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"soldToBP\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> BP # </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.soldToBP}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"totalUSD\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Total $</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.totalUSD | currency}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"plannedDeliveryDate\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Planned Delivery </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.plannedDeliveryDate | date: 'yyyy-MM-dd'}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"plannedReceiptDate\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Promised Date </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.plannedReceiptDate | date: 'yyyy-MM-dd'}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"postalAddress\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Postal Code </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.postalAddress}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"quotationStatus\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n        <td mat-cell *matCellDef=\"let element\"\r\n            [className]=\"(element.quotationStatus === internalHold || element.quotationStatus === creditHold) ? 'warn':''\">\r\n          {{element.quotationStatus}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator ></mat-paginator>\r\n  </mat-card-content>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/customer/open-orders/open-orders.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/customer/open-orders/open-orders.component.ts ***!
  \***************************************************************/
/*! exports provided: OpenOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenOrdersComponent", function() { return OpenOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenOrdersComponent = /** @class */ (function () {
    function OpenOrdersComponent(customerService) {
        this.customerService = customerService;
        this.ordersData = [];
        this.displayedColumns = [
            'quoteNumber', 'soldToBPName', 'soldToBP',
            'totalUSD', 'plannedDeliveryDate', 'quotationStatus'
        ];
        this.internalHold = 'Internal Hold';
        this.creditHold = 'Credit Hold';
    }
    OpenOrdersComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.ordersData);
        this.paginator.pageSize = 6;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    OpenOrdersComponent.prototype.toggleView = function (viewIndex) {
        this.customerService.viewIndx.next(viewIndex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OpenOrdersComponent.prototype, "ordersData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], OpenOrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], OpenOrdersComponent.prototype, "sort", void 0);
    OpenOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-orders',
            template: __webpack_require__(/*! ./open-orders.component.html */ "./src/app/customer/open-orders/open-orders.component.html")
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], OpenOrdersComponent);
    return OpenOrdersComponent;
}());



/***/ }),

/***/ "./src/app/customer/open-quotes/open-quotes.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/customer/open-quotes/open-quotes.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" fxFlexFill>\r\n\r\n  <ng-container matColumnDef=\"quoteNumber\">\r\n    <th mat-header-cell *matHeaderCellDef> Quotation </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      {{element.quoteNumber}}\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"soldToBPName\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> BP Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.soldToBPName}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"soldToBP\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> BP # </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.soldToBP}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"totalUSD\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Total $</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.totalUSD | currency}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"creationDate\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date Created </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.creationDate | date: 'yyyy-MM-dd'}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"quotationStatus\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n    <td mat-cell *matCellDef=\"let element\"\r\n        [className]=\"element.quotationStatus === 'Modified' ? 'warn':''\"> {{element.quotationStatus}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/customer/open-quotes/open-quotes.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/customer/open-quotes/open-quotes.component.ts ***!
  \***************************************************************/
/*! exports provided: OpenQuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenQuotesComponent", function() { return OpenQuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenQuotesComponent = /** @class */ (function () {
    function OpenQuotesComponent() {
        this.openQuotes = [];
        this.displayedColumns = [
            'quoteNumber', 'soldToBPName', 'soldToBP',
            'totalUSD', 'creationDate', 'quotationStatus'
        ];
    }
    OpenQuotesComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.openQuotes);
        this.paginator.pageSize = 6;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OpenQuotesComponent.prototype, "openQuotes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], OpenQuotesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], OpenQuotesComponent.prototype, "sort", void 0);
    OpenQuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-quotes',
            template: __webpack_require__(/*! ./open-quotes.component.html */ "./src/app/customer/open-quotes/open-quotes.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OpenQuotesComponent);
    return OpenQuotesComponent;
}());



/***/ }),

/***/ "./src/app/customer/quick-account-aging/quick-account-aging.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/customer/quick-account-aging/quick-account-aging.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"agingTerm\">\r\n    <mat-header-cell *matHeaderCellDef> Total </mat-header-cell>>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.agingTerm}} </mat-cell>>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"amount\">\r\n    <mat-header-cell *matHeaderCellDef> {{totalAmount | currency}} {{totalCurrencyCode}}</mat-header-cell>>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.amount | currency}} {{element.currencyCode}}</mat-cell>>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>>\r\n</mat-table>\r\n<!--<mat-paginator fxShow=\"false\"></mat-paginator>-->\r\n"

/***/ }),

/***/ "./src/app/customer/quick-account-aging/quick-account-aging.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/quick-account-aging/quick-account-aging.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuickAccountAgingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickAccountAgingComponent", function() { return QuickAccountAgingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickAccountAgingComponent = /** @class */ (function () {
    function QuickAccountAgingComponent() {
        this.quickAccountAgingData = [];
        this.displayedColumns = ['agingTerm', 'amount'];
    }
    QuickAccountAgingComponent.prototype.ngOnInit = function () {
        this.totalAmount = this.quickAccountAgingData.reduce(function (prev, cur) { return prev + cur.amount; }, 0) || 0;
        this.totalCurrencyCode = this.quickAccountAgingData[0].currencyCode || '';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.quickAccountAgingData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], QuickAccountAgingComponent.prototype, "quickAccountAgingData", void 0);
    QuickAccountAgingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quick-account-aging',
            template: __webpack_require__(/*! ./quick-account-aging.component.html */ "./src/app/customer/quick-account-aging/quick-account-aging.component.html")
        })
    ], QuickAccountAgingComponent);
    return QuickAccountAgingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map