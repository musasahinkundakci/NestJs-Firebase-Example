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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getCustomers() {
        try {
            const snap = await this.appService.getCustomers();
            const customers = [];
            snap.forEach((customer) => {
                customers.push({
                    id: customer.id,
                    data: customer.data()
                });
            });
            return customers;
        }
        catch (error) {
            console.log(error);
        }
    }
    async postCustomer(name, age) {
        try {
            const res = await this.appService.addCustomer(name, age);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteCustomer(id) {
        try {
            const result = await this.appService.deleteCustomer(id);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateCustomer(id, name, age) {
        try {
            const result = await this.appService.updateCustomer(id, name, age);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/customers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCustomers", null);
__decorate([
    (0, common_1.Post)("/customer"),
    __param(0, (0, common_1.Body)("name")),
    __param(1, (0, common_1.Body)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "postCustomer", null);
__decorate([
    (0, common_1.Delete)("/customer"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteCustomer", null);
__decorate([
    (0, common_1.Put)("/customer"),
    __param(0, (0, common_1.Body)("id")),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateCustomer", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map