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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const account = {
    "type": "service_account",
    "project_id": "nodejs-52f41",
    "private_key_id": "e1f2a04fa9f9ceb4e0596e103ee5e9043beed4f0",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDwpFqP+wPMoxgN\n6FkIyLA/OciQ6pSdeNBc2LY/IPSkyT44lKzgb8B/NlyIfzwew1E4pNyWa1itAnjG\nuw6bwWp3Vipr1MblEfKLlJaDkJ7w2ZTmW8iNqfNSJ0QjcjNlWbZxzMnAtU8ewfw/\nGmSk9pjqRzRIfCkcKRKKlEgd0VsH8qucYjJpXId/f4zh0DHteUstutcE/8myxPm8\ngIgNWUitXieph5xx46EPTo9BPp9OGyI35iaGVT6Rx340xeFBHFYm7lDjnSbEJi6n\nEIPzF7Pvd/MQ17XG7KYQgXyE7pavu08a9hVg+AF4DSulJBonGnHaL22x/v5MJXc+\nPQKwTiqRAgMBAAECggEAI7YQO9EMIEs3yks9I0Dnvt+WtG12KTmrmjZi3VLJBhyt\n9NGY0iRjab1/KpZ51+Azu8yOG8MfFsBeJ10ibtow2uLY9XBPJTbDoBPTPlUGRpx+\nLK1ZltmuDUwHIEeApGgVhiUrmkM4fvUEt7dKpkceLEOYLlrr8uI5foKWLS6gwWM9\nNLtJIcs3s68G9VlsEPhxk+wm9HvYBBksuu58Mrk4Pbo5euhYSVoEwK3bchd1CJ0o\nAI9wvBN71Ym6W4FnuEN/+GdyVHI9UW78kW/xTYNm+u8OYrJ6z73W0jTeYEo0ebPV\n+PxVxPeJc1qf0T1S0UmrpKeePA/E5bNyt9ucrDsy7QKBgQD5Pq7VwkKx4140HuU7\nQixGUuI25dmlcek1jABLYdDENOqK7K4HMKZhs80Qwq1GtMLIYROseeikAlLbs3aw\nJU4FtpUXZj+Y2HJQ4L13qMGjuv6LEzH7KatPCFOZtS4hJzE+Zmn0vP3nVkSfA0It\nk9GB1PRnDUtSglTf9U/MajrPJwKBgQD3Kft4dJ+bm3q1/j8hdWN3T7A3KuBbeoiw\nhif5vrhIw7z1LS4CrM9FYChWfrOxcWjUdHidNcVAC/87cGzyinnOKh50Tgy1Ne6D\nDH6VNLmHwoie6frDJUVO/mVFGBZRuF3+ORstUeEITlYCMwBXmjrZKg6dXQbS2wL4\nHac1IyHLhwKBgQCHPCqS0wdrC6nmb8kDASGSupABJ2+TJB5cLm1OeXFTtD56SHcY\ncZ4lLvCaInbwAU4aeQm6sJ64toYMrPA+HM+bq/hzLMhe/znvhjFnRopicyh/f1fE\nJlTL2gG6SaMQ2/oNGHZvE0hUh+tNt+/lWOn5HvnJHF59EzhIGAtHJ3BnSwKBgQD2\nNMDGLc4sEIX9MmWqq6fIWv4bBj/1gCsXRJwfoMcr3KemxzmU+pWB8xZbitzu/hzB\nvb/EQqLZeNnnWMd+F0jcgIJTssff3vhXXKPfd2T1AmhbfJIJwF+5H5q7aBIbl38x\n1arnyy9Ruc7dY/aMTRsf5lAmm1tHwVjE1a0RNozckwKBgQDgYzPVfzxrj5H+d+m8\nnzD7VDkhaQRlwOKYjKp7xr8pXydmUZDVKdcAJO8ykHVX3q9Bt3Af3GqxJXkXq+Qj\nc4kceXKP/SAVF0SBSUCfUm0nCR14yigjU5tKwd4WQQwKlZHBi3p2ZjqOQk2BtTrf\n3bL7a1IqumraQRI+wBCaWn9/Rw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-f5p9n@nodejs-52f41.iam.gserviceaccount.com",
    "client_id": "116375959452179380418",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-f5p9n%40nodejs-52f41.iam.gserviceaccount.com"
};
let AppService = class AppService {
    constructor() {
        this.admin = admin.initializeApp({
            credential: admin.credential.cert(account)
        });
        this.db = admin.firestore();
    }
    getHello() {
        return 'Hello World!';
    }
    async getCustomers() {
        try {
            let snapshot = await this.db.collection("Customers").get();
            snapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
            return snapshot;
        }
        catch (error) {
            console.log(error);
        }
    }
    async addCustomer(name, age) {
        try {
            const data = {
                age, name
            };
            const res = await this.db.collection("Customers").add(data);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteCustomer(id) {
        try {
            const result = await this.db.collection("Customers").doc(id).delete();
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateCustomer(id, name, age) {
        try {
            const customerRef = this.db.collection("Customers").doc(id);
            return await customerRef.update({ name, age });
        }
        catch (error) {
            console.log(error);
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map