//run 'node genQuotationData.js' to regenerate JSON files
const Chance = require('chance');
const chance = new Chance();
const faker = require('faker')

const jsf = require('json-schema-faker'); // json-schema faker
const fs = require('fs'); // nodeJS file system library to read and write files
jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);


const quotationSchema = {
  "type": "object",
  "properties": {
    "quotation": {
      "type": "array",
      "minItems": 1000,
      "maxItems": 2000,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 500,
            "maximum": 1000
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
          "deliveryAddress": {
            "type": "string",
            "faker": "address"
          },
          "totalUSD": {
            "type": "string",
            "faker": "commerce.price"
          },
          "creationDate": {
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
                'Modified'
                ]
          }
        },
        "required": ["id","quoteNumber","soldtoBPName","soldtoBP","totalUSD","creationDate","postalAddress","quotationStatus"]
      }
    }
  },
  "required": ["quotation"]
};

jsf.resolve(quotationSchema);

var fakeData = jsf.generate(quotationSchema);
fs.writeFile("Quotation.json", JSON.stringify(fakeData), function (err) {
  if (err) {
    return console.log(err);
  } else {
    //console.log(JSON.stringify(fakeData));
  }
});
