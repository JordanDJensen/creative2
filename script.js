document.getElementById('heroSubmit').addEventListener("click", function(event){
event.preventDefault();

const value = document.getElementById('heroInput').value;
if(value == "")
return;

const url = "http://www.omdbapi.com/?apikey=4a64e46&t=" + value;
fetch(url)
.then(function(response) {
  return response.json();

}).then(function(json) {
  let result = "";
  result += "<h1>" + json.Title + "</h1>";
  result += '<p id="subtitle">' + json.Rated + " | " + json.Runtime + " | " + json.Genre + " | " + json.Released + "</p>";
  result += '<img src=' + json.Poster + '/>'
  result += '<p id="plot">' + json.Plot + '</p>'
  result += '<ul><span>Director:</span><li> ' + json.Director + "</li></br>" + '<span>Writer:</span><li> ' + json.Writer + "</li></br>"
  + '<span>Actors:</span><li> ' + json.Actors + "</li></br>" + "</ul>";
  document.getElementById('heroResult').innerHTML = result



  console.log(json);

});

});
