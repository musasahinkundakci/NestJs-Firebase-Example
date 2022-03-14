import { Injectable } from '@nestjs/common';
const admin = require("firebase-admin")

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
