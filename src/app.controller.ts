import { Controller, Get, Post, Req, Res, Body, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/customers")
  async getCustomers() {
    try {
      const snap = await this.appService.getCustomers()
      const customers = []
      snap.forEach((customer) => {
        customers.push({
          id: customer.id,
          data: customer.data()
        })
      })
      return customers
    } catch (error) {
      console.log(error)
    }
  }
  @Post("/customer")
  async postCustomer(

    @Body("name") name: string,
    @Body("age") age: number
  ) {
    try {
      const res = await this.appService.addCustomer(name, age)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  @Delete("/customer")
  async deleteCustomer(
    @Body("id") id: string
  ) {
    try {
      const result = await this.appService.deleteCustomer(id)
      return result
    } catch (error) {
      console.log(error)
    }
  }
  @Put("/customer")
  async updateCustomer(
    @Body("id") id: string,
    @Body("name") name: string,
    @Body("age") age: number
  ) {

    try {
      const result = await this.appService.updateCustomer(id, name, age)
      return result
    }
    catch (error) {
      console.log(error)
    }
  }
}
