import { Injectable } from '@nestjs/common';
const admin = require("firebase-admin")
const account = {
  "type": "x",
  "project_id": "nodejs-x",
  "private_key_id": "x",
  "private_key": "-----BEGIN PRIVATE KEY-----\x+wPMoxgN\n6FkIyLA/OciQ6pSdeNBc2LY/IPSkyT44lKzgb8B/NlyIfzwew1E4pNyWa1itAnjG\nuw6bwWp3Vipr1MblEfKLlJaDkJ7w2ZTmW8iNqfNSJ0QjcjNlWbZxzMnAtU8ewfw/\nGmSk9pjqRzRIfCkcKRKKlEgd0VsH8qucYjJpXId/f4zh0DHteUstutcE/8myxPm8\ngIgNWUitXieph5xx46EPTo9BPp9OGyI35iaGVT6Rx340xeFBHFYm7lDjnSbEJi6n\nEIPzF7Pvd/MQ17XG7KYQgXyE7pavu08a9hVg+AF4DSulJBonGnHaL22x/v5MJXc+\nPQKwTiqRAgMBAAECggEAI7YQO9EMIEs3yks9I0Dnvt+WtG12KTmrmjZi3VLJBhyt\n9NGY0iRjab1/KpZ51+Azu8yOG8MfFsBeJ10ibtow2uLY9XBPJTbDoBPTPlUGRpx+\nLK1ZltmuDUwHIEeApGgVhiUrmkM4fvUEt7dKpkceLEOYLlrr8uI5foKWLS6gwWM9\nNLtJIcs3s68G9VlsEPhxk+wm9HvYBBksuu58Mrk4Pbo5euhYSVoEwK3bchd1CJ0o\nAI9wvBN71Ym6W4FnuEN/+GdyVHI9UW78kW/xTYNm+u8OYrJ6z73W0jTeYEo0ebPV\n+PxVxPeJc1qf0T1S0UmrpKeePA/E5bNyt9ucrDsy7QKBgQD5Pq7VwkKx4140HuU7\nQixGUuI25dmlcek1jABLYdDENOqK7K4HMKZhs80Qwq1GtMLIYROseeikAlLbs3aw\nJU4FtpUXZj+Y2HJQ4L13qMGjuv6LEzH7KatPCFOZtS4hJzE+Zmn0vP3nVkSfA0It\nk9GB1PRnDUtSglTf9U/MajrPJwKBgQD3Kft4dJ+bm3q1/j8hdWN3T7A3KuBbeoiw\nhif5vrhIw7z1LS4CrM9FYChWfrOxcWjUdHidNcVAC/87cGzyinnOKh50Tgy1Ne6D\nDH6VNLmHwoie6frDJUVO/mVFGBZRuF3+ORstUeEITlYCMwBXmjrZKg6dXQbS2wL4\nHac1IyHLhwKBgQCHPCqS0wdrC6nmb8kDASGSupABJ2+TJB5cLm1OeXFTtD56SHcY\ncZ4lLvCaInbwAU4aeQm6sJ64toYMrPA+HM+bq/hzLMhe/znvhjFnRopicyh/f1fE\nJlTL2gG6SaMQ2/oNGHZvE0hUh+tNt+/lWOn5HvnJHF59EzhIGAtHJ3BnSwKBgQD2\nNMDGLc4sEIX9MmWqq6fIWv4bBj/1gCsXRJwfoMcr3KemxzmU+pWB8xZbitzu/hzB\nvb/EQqLZeNnnWMd+F0jcgIJTssff3vhXXKPfd2T1AmhbfJIJwF+5H5q7aBIbl38x\n1arnyy9Ruc7dY/aMTRsf5lAmm1tHwVjE1a0RNozckwKBgQDgYzPVfzxrj5H+d+m8\nnzD7VDkhaQRlwOKYjKp7xr8pXydmUZDVKdcAJO8ykHVX3q9Bt3Af3GqxJXkXq+Qj\nc4kceXKP/SAVF0SBSUCfUm0nCR14yigjU5tKwd4WQQwKlZHBi3p2ZjqOQk2BtTrf\n3bL7a1IqumraQRI+wBCaWn9/Rw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-x-x-52f41.iam.gserviceaccount.com",
  "client_id": "x",
  "auth_uri": "https://x.com/o/x/auth",
  "token_uri": "https://x.x.com/token",
  "auth_provider_x509_cert_url": "https://www.x.com/x/v1/certs",
  "client_x509_cert_url": "https://www.x.com/x/v1/metadata/x/x-adminsdk-x-52f41.iam.x.com"
}
@Injectable()
export class AppService {
  admin: any;
  db: any
  constructor() {
    this.admin = admin.initializeApp({
      credential: admin.credential.cert(account)
    })
    this.db = admin.firestore()
  }
  getHello(): string {
    return 'Hello World!';
  }
  async getCustomers(): Promise<any> {
    try {
      let snapshot = await this.db.collection("Customers").get()
      snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
      })
      return snapshot
    } catch (error) {
      console.log(error)
    }
  }
  async addCustomer(name: string, age: number): Promise<any> {
    try {
      const data = {
        age, name
      }

      const res = await this.db.collection("Customers").add(data)
      return res;

    } catch (error) {
      console.log(error)
    }
  }
  async deleteCustomer(id: string) {
    try {
      const result = await this.db.collection("Customers").doc(id).delete()
      return result
    } catch (error) {
      console.log(error)
    }
  }
  async updateCustomer(id: string, name: string, age: number) {
    try {
      const customerRef = this.db.collection("Customers").doc(id)
      return await customerRef.update({ name, age })
    } catch (error) {
      console.log(error)
    }
  }
}
