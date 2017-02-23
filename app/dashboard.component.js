"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var ctx = this.approveFlow.nativeElement.getContext('2d');
        var R = 25;
        ctx.beginPath();
        ctx.arc(130, 70, R, 0, 2 * Math.PI);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#808080';
        ctx.fillStyle = "#00a65a";
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(130, 70 + R);
        ctx.lineTo(130, 70 + R + 100);
        ctx.strokeStyle = "#00a65a";
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(130, 70 + 2 * R + 100, R, 0, 2 * Math.PI);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#808080";
        ctx.fillStyle = " #eea236";
        ctx.stroke();
        ctx.fill();
        ctx.moveTo(130, 70 + 3 * R + 100);
        // ctx.beginPath();
        ctx.lineTo(130, 70 + 3 * R + 200);
        ctx.strokeStyle = "#eea236";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(130, 70 + 4 * R + 200, R, 0, 2 * Math.PI);
        ctx.lineWidth = 2;
        ctx.fillStyle = "#808080";
        ctx.strokeStyle = '#808080';
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.fillText("大 队", 120, 75);
        ctx.fillText("支 队", 120, 70 + 2 * R + 100 + 5);
        ctx.fillText("总 队", 120, 70 + 4 * R + 200 + 5);
        ctx.fillStyle = "#808080";
        ctx.fillText("审批通过", 110, 140);
        ctx.fillText("2016-12-06", 105, 160);
    };
    __decorate([
        core_1.ViewChild('approveFlow'), 
        __metadata('design:type', core_1.ElementRef)
    ], DashboardComponent.prototype, "approveFlow", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map