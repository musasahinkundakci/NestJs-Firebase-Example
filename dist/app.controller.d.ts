import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getCustomers(): Promise<any[]>;
    postCustomer(name: string, age: number): Promise<any>;
    deleteCustomer(id: string): Promise<any>;
    updateCustomer(id: string, name: string, age: number): Promise<any>;
}
