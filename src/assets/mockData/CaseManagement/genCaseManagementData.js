//run 'node genCaseManagementData.js' to regenerate JSON files
const Chance = require('chance');
const chance = new Chance();
const faker = require('faker')

const jsf = require('json-schema-faker'); // json-schema faker
const fs = require('fs'); // nodeJS file system library to read and write files
jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);

const caseManagementSchema = {
  "type": "object",
  "properties": {
    "caseManagement": {
      "type": "array",
      "minItems": 30,
      "maxItems": 50,
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
          "contact_id": {
            "type": "integer",
            "unique": true,
            "minimum": 1,
            "maximum": 10
          },
          "status": {
            "type": "string",
              "enum": [
                'Active',
                'Resolved',
                'Emergency'
              ]
          },
          "dateOpened": {
            "type": "string",
            "chance": {
              "date": {
                "string": true,
                "year": 2018
              }
            }
          },
          "urgency": {
            "type": "string",
              "enum": [
                'Low',
                'Medium',
                'High',
                'Emergency'
                ]
          },
          "ticketNumber": {
            "type": "integer",
            "unique": true,
            "minimum": 20000,
            "maximum": 30000,
            "multipleOf": 7,
            "exclusiveMinimum": true
          },
          "note": {
            "type": "string",
            "chance": {
              "paragraph":{
                "sentences":1
              }}
          }
        },
        "required": ["id", "contact_id","ticketNumber", "urgency", "status", "dateOpened", "note"]
      }
    }
  },
  "required": ["caseManagement"]
};

jsf.resolve(caseManagementSchema);

var fakeData = jsf.generate(caseManagementSchema);
fs.writeFile("CaseManagement.json", JSON.stringify(fakeData), function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Done!");
  }
});
