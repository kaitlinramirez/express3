const express = require("express");
const cors = require("cors");
var PORT = process.env.PORT || 3000

var students =[{
  id: 1,
  firstName: "Alice",
  lastName: "Zephyr",
  homeTown: "Seattle"
}, {
  id: 2,
  firstName: "Bob",
  lastName: "Yellow",
  homeTown: "Vancouver"
}, {
  id: 3,
  firstName: "Claire",
  lastName: "Xylitol",
  homeTown: "Toledo"
}, {
  id: 4,
  firstName: "Daniel",
  lastName: "Winston",
  homeTown: "Akron"
}, {
  id: 5,
  firstName: "Edina",
  lastName: "Veritas",
  homeTown: "Wichita"
}];

function findById(data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id){
      return data[i];
    }
  }
  return null;
}

const app = express();
app.use(cors());

app.get("/", function (request, response) {
  response.json({data: students});
});

app.get("/:id", function(request, response){
  var record = findById(students, request.params.id);
  if (!record){
    response.status(404);
    response.json({
      error: {
        message: "No record found!"
      }
    })
  }
  response.json({data: record})
})

app.listen(PORT)
