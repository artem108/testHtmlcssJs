
var content = document.getElementById("content");
var btn = document.getElementById('btn');
var btnSrch = document.getElementById('btnSrch');

window.onload = function() {


 var request = new XMLHttpRequest();

 request.open('GET', 'data.json');
 request.onload = function () {
     var ourData = JSON.parse(request.responseText);
    renderHTML(ourData);
 };
 request.send();

 function  renderHTML(data) {
   var htmlString = "";
    for (i = 0; i < data.length; i++) {
     htmlString += "<p>" + "NAME:  " + data[i].first_name + "  " + data[i].last_name + " EMAIL:  " + data[i].email + "</p>";
   }
     content.insertAdjacentHTML('beforeend', htmlString);
 };

 btnSrch.addEventListener("click", function (data) {

    var valueSrch = document.getElementById('valueSrch').value;

    for (var i = 0; i < data.length; i++) {
    

    }


   });

 };





















// {}
