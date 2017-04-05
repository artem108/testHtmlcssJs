
var content = document.getElementById("content");
var btnSrch = document.getElementById('btnSrch');
var context;

window.onload = function() {

  var request = new XMLHttpRequest();

  request.open('GET', 'data.json');
  request.onload = function () {
    context = JSON.parse(request.responseText);
    renderHTML(context);
  };
  request.send();

 function  renderHTML(data) {
   var htmlString = "";
    for (i = 0; i < data.length; i++) {
     htmlString += "<p>" + "NAME:  " + data[i].first_name + "  " + data[i].last_name + " EMAIL:  " + data[i].email + "</p>";
   }
     content.insertAdjacentHTML('beforeend', htmlString);
 };
  };

  btnSrch.addEventListener("click", function (data) {

   var valueSrch = document.getElementById('valueSrch').value;
   var person = document.getElementById('person')

   for (var i = 0; i < context.length; i++) {

     if (valueSrch.toLowerCase() === context[i].first_name.toLowerCase()) {

        var stringPerson = "";
        stringPerson += "<h1>" + "NAME:  " + context[i].first_name + "  " + context[i].last_name + " EMAIL:  " + context[i].email + "</h1>";

        person.insertAdjacentHTML('beforeend', stringPerson);
     } 
   }
 });


















// {}
