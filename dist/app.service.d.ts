export declare class AppService {
    admin: any;
    db: any;
    constructor();
    getHello(): string;
    getCustomers(): Promise<any>;
    addCustomer(name: string, age: number): Promise<any>;
    deleteCustomer(id: string): Promise<any>;
    updateCustomer(id: string, name: string, age: number): Promise<any>;
}
