//run 'node genInstallBaseData.js' to regenerate JSON files
// Load Chance
const Chance = require('chance');
const chance = new Chance();
const faker = require('faker')

const jsf = require('json-schema-faker'); // json-schema faker
const fs = require('fs'); // nodeJS file system library to read and write files
jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);

const installBaseSchema = {
  "type": "object",
  "properties": {
    "installBase": {
      "type": "array",
      "minItems": 300,
      "maxItems": 500,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 6000,
            "maximum": 7000,
            "multipleOf": 7,
            "exclusiveMinimum": true
          },
          // "customerId": {
          //   "type": "integer",
          //   "unique": true,
          //   "minimum": 6000,
          //   "maximum": 7000,
          //   "multipleOf": 7,
          //   "exclusiveMinimum": true
          // },
          // "status": {
          //   "type": "string",
          //     "enum": [
          //       'Active',
          //       'Resolved',
          //       'Emergency'
          //     ]
          // },
          // "dateOpened": {
          //   "type": "string",
          //   "chance": {
          //     "date": {
          //       "string": true,
          //       "year": 2018
          //     }
          //   }
          // },
          // "urgency": {
          //   "type": "string",
          //     "enum": [
          //       'Low',
          //       'Medium',
          //       'High',
          //       'Emergency'
          //       ]
          // },
          // "ticketNumber": {
          //   "type": "integer",
          //   "unique": true,
          //   "minimum": 20000,
          //   "maximum": 30000,
          //   "multipleOf": 7,
          //   "exclusiveMinimum": true
          // },
          // "note": notesSchema
        },
        "required": ["id"]
      }
    }
  },
  "required": ["installBase"]
};

jsf.resolve(installBaseSchema);

var fakeData = jsf.generate(installBaseSchema);
fs.writeFile("InstallBase.json", JSON.stringify(fakeData), function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log(JSON.stringify(fakeData));
  }
});
