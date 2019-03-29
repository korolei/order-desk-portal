export class SalesAgent{
    public userName: string;
    public employeeNumber: string;
    public salesOffice: string;
    public displayName: string;
    public firstName: string;
    public lastName: string;
    public middleName: string;
    
    constructor(user: any){
        this.userName = user.loginId || "";
        this.employeeNumber = user.employeeId || "";
        this.salesOffice = user.salesOffice || "";
        this.displayName = user.displayName || "";
        this.firstName = user.firstName || this.userName;
        this.lastName = user.lastName || "";
        this.middleName = user.middleName || "";
    }
}