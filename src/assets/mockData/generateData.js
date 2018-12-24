//run 'node generateData.js' to regenerate JSON files
// Load Chance
const Chance = require('chance');
// Instantiate Chance so it can be used
const chance = new Chance();

const jsf = require('json-schema-faker'); // json-schema faker
const fs = require('fs'); // nodeJS file system library to read and write files

jsf.extend('faker', () => fs);
jsf.extend('chance', () => chance);

const notesSchema ={
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "chance": {
          "integer": {min: 500, max: 10000}
        }
      },
      "noteText": {
        "type": "string",
        "chance": {
          "paragraph":{
            "sentences":1
          }}
      },
      "noteType": {
        "type": "string",
        "enum": [
          'Info',
          'Warning',
          'Error'
        ]
      }
    },
    "required": ["id", "noteText","noteType"]

}
const caseManagementSchema = {
  "type": "object",
  "properties": {
    "caseManagement": {
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
          "customerId": {
            "type": "integer",
            "unique": true,
            "minimum": 6000,
            "maximum": 7000,
            "multipleOf": 7,
            "exclusiveMinimum": true
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
          "note": notesSchema
        },
        "required": ["id", "customerId","ticketNumber", "urgency", "status", "dateOpened", "note"]
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
    console.log(JSON.stringify(fakeData));
  }
});
