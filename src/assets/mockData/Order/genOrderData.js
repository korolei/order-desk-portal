//run 'node genOrderData.js' to regenerate JSON files
const Chance = require('chance');
const chance = new Chance();
const faker = require('faker')
const jsf = require('json-schema-faker'); // json-schema faker
const fs = require('fs'); // nodeJS file system library to read and write files
jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);


const orderSchema = {
  "type": "object",
  "properties": {
    "orders": {
      "type": "array",
      "minItems": 50,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "orderNumber": {
            "type": "integer",
            "unique": true,
            "minimum": 200110000,
            "maximum": 200115000
          },
          "soldtoBPName":{
            "type": "string",
            "faker": "company.companyName"
          },
          "soldtoBP": {
            "type": "integer",
            "minimum": 22000,
            "maximum": 23000
          },
          "total": {
            "type": "string",
            "faker": "commerce.price"
          },
          "plannedDeliveryDate": {
            "type": "string",
            "chance": {
              "date": {
                "string": true,
                "year": 2018
              }
            }
          },
          "plannedReceiptDate": {
            "type": "string",
            "chance": {
              "date": {
                "string": true,
                "year": 2018
              }
            }
          },
          "postalAddress": {
            "type": "string",
            "faker": "address.zipCode"
          },
          "status": {
            "type": "string",
              "enum": [
                'Printed',
                'In Process',
                'Internal Hold',
                'Credit Card',
                'Modified'
                ]
          },
          "intSalesRepName": {
            "type": "string",
            "faker": "name.findName"
          },
          "extSalesRepName": {
            "type": "string",
            "faker": "name.findName"
          }
        },
        "required": ["orderNumber","soldtoBPName","soldtoBP","total","plannedDeliveryDate",
          "plannedReceiptDate","postalAddress","status","intSalesRepName","extSalesRepName"]
      }
    }
  },
  "required": ["orders"]
};

jsf.resolve(orderSchema);

var fakeData = jsf.generate(orderSchema);
fs.writeFile("Order.json", JSON.stringify(fakeData), function (err) {
  if (err) {
    return console.log(err);
  } else {
    //console.log(JSON.stringify(fakeData));
    console.log("Done!")
  }
});
