//run 'node genOrgData.js' to regenerate JSON files
const Chance = require('chance');
const chance = new Chance();
const faker = require('faker')

const jsf = require('json-schema-faker'); // json-schema faker
const fs = require('fs'); // nodeJS file system library to read and write files
jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);

const addressSchema = {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "minimum":10000,
            "maximum":100000,
            "unique": true
          },
          "country": {
            "type": "string",
            "enum": ['US','CA','EU','CH']
          },
          "state":{
            "type": "string",
            "chance": "state"
            },
          "street":{
            "type": "string",
            "faker": "address.streetAddress"
            },
          "city":{
            "type": "string",
            "faker": "address.city"
            },
          "zip":{
            "type": "string",
            "chance": "zip"
          },
        },
        "required": ["id", "country","state", "street", "city", "zip"]
}

const contactSchema = {
  "type": "object",
      "type": "array",
      "minItems": 1,
      "maxItems": 10,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "minimum":10000,
            "maximum":100000,
            "unique": true
          },
          "bp_number": {
            "type": "string",
            "faker": "finance.bic"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "prefix": {
            "type": "string",
            "faker": "name.prefix"
          },
          "jobTitle": {
            "type": "string",
            "faker": "name.jobTitle"
          },
          "phone": {
            "type": "string",
            "faker": "phone.phoneNumber"
          },
          "address": addressSchema
        },
        "required": ["id", "bp_number", "email", "firstName", "lastName", "prefix", "jobTitle", "phone", "address"]
      }
}

const orgSchema = {
  "type": "object",
  "properties": {
    "organization": {
      "type": "array",
      "minItems": 10,
      "maxItems": 10,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1,
            "maximum": 10
          },
          "bp_name":{
            "type": "string",
            "faker": "company.companyName"
          },
          "contacts": contactSchema
        },
        "required": ["id", "bp_name", "contacts"]
      }
    }
  },
  "required": ["organization"]
};

jsf.resolve(orgSchema);

var fakeData = jsf.generate(orgSchema);
fs.writeFile("Organization.json", JSON.stringify(fakeData), function (err) {
  if (err) {
    return console.log(err);
  } else {
    //console.log(JSON.stringify(fakeData));
  }
});
