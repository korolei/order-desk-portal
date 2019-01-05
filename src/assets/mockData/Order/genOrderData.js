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
      "minItems": 1000,
      "maxItems": 2000,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1000,
            "maximum": 3000
          },
          "quoteNumber": {
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
            "type": "string",
            "faker": "finance.bic"
          },
          "totalUSD": {
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
          "quotationStatus": {
            "type": "string",
              "enum": [
                'Printed',
                'In Process',
                'Internal Hold',
                'Credit Card',
                'Modified'
                ]
          }
        },
        "required": ["id","quoteNumber","soldtoBPName","soldtoBP","totalUSD","plannedDeliveryDate",
          "plannedReceiptDate","postalAddress","quotationStatus"]
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
  }
});
