//run 'node genQuotationData.js' to regenerate JSON files
const Chance = require('chance');
const chance = new Chance();
const faker = require('faker')

const jsf = require('json-schema-faker'); // json-schema faker
const fs = require('fs'); // nodeJS file system library to read and write files
jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);

// const orderItemsSchema = {
//   "type": "object",
//   "properties": {
//     "orderItem":{
//       "type": "array",
//       "minItems": 2,
//       "maxItems": 8,
//       "items": {
//         "id": {
//           "type": "integer",
//           "minimum": 1,
//           "maximum": 10,
//           "unique": true
//         },
//         "orderNumber": {
//           "minimum": 1000,
//           "maximum": 1100,
//           "unique": true
//         },
//         "description": {
//           "type": "string",
//           "faker": "lorem.words"
//         }
//       },
//       "required": ["id", "orderNumber", "description"]
//     }
//   },
//   "required": ["orderItem"]
// }

const quotationSchema = {
  "type": "object",
  "properties": {
    "quotation": {
      "type": "array",
      "minItems": 20,
      "maxItems": 80,
      "items": {
        "type": "object",
        "properties": {
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
          "total": {
            "type": "string",
            "faker": "commerce.price"
          },
          "creationDate": {
            "type": "string",
            "faker": "date.past"
          },
          "expiryDate": {
            "type": "string",
            "faker": "date.past"
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
          },
          "quotationLines": {
            "type": "array",
            "minItems": 2,
            "maxItems": 8,
            "items": {
              "item": {
                "type": "integer",
                "minimum": 1,
                "maximum": 10,
                "unique": true
              },
              "orderNumber": {
                "minimum": 1000,
                "maximum": 1100,
                "unique": true
              },
              "description": {
                "type": "string",
                "faker": "lorem.words"
              }
            },
            "required": ["id", "orderNumber", "description"]
          }
        },
        "required": ["quoteNumber","soldtoBPName","soldtoBP","total","creationDate","postalAddress","status","intSalesRepName","extSalesRepName","expiryDate","quotationLines"]
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
    console.log("Done!");
  }
});
