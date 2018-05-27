var endpoint = 'https://6kcfhsnyfj.execute-api.us-east-1.amazonaws.com/dev/weather';

function renderTemp(data) {
  var el = document.getElementById('temperature');
  el.innerHTML = data.temperature + " °F";
}


fetch(endpoint, {mode: 'cors'})
  .then(function(resp){
    return resp.json();
  })
  .then(renderTemp);
