export class WebApiError{
    public message: string;
    public isError: boolean;
    public details: string;

    constructor(message: string, details: any){
        this.message = message,
        this.isError = true;
        this.details = details;
    }
}