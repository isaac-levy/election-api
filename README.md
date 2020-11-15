# election-api
This is a publicly get-only API for electoral data. Currently, the API only serves Canadian electoral data. 

Stack:
- Node.js
- Express.js
- Sequelize (for Postgres)

Hosting:
- Heroku

The API can be accessed at https://election-data-api.herokuapp.com/ with the following endpoints:
First 20 items:
- /member
- /party
- /region
- /seat
- /election
- /result
Limit and offset results:
- /member?limit={int}&offset={int}
- /party?limit={int}&offset={int}
- /region?limit={int}&offset={int}
- /seat?limit={int}&offset={int}
- /election?limit={int}&offset={int}
- /result?limit={int}&offset={int}
Individual item:
- /member/{int}
- /party/{int}
- /region/{int}
- /seat/{int}
- /election/{int}
- /result/{int}
