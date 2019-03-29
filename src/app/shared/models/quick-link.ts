export class QuickLink{
    public linkTarget: number;
    public id: string;
    public itemCode: string;
    public shipToBp: string;
    public soldToBp: string;
    public employeeNumber: string;
    public shipToAddressId: number;
    public shipToContactId: string;
    

    constructor(linkTarget: number, id: string = "", shipToBp: string = "", soldToBp = "", employeeNumber:string ="", 
                locationId: number=0, contactId:string="", itemCode: string=""){
        this.linkTarget = linkTarget;
        this.id = id;
        this.itemCode = itemCode;
        this.soldToBp = soldToBp;
        this.shipToBp = shipToBp;
        this.employeeNumber = employeeNumber;
        this.shipToAddressId = locationId;
        this.shipToContactId = contactId;
    }
}