
function main(){

  var url = 'http://localhost:8000/api/posts';

  var headers = {
      'Origin': 'http://localhost:8080',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Request-Method':'GET',
      'Access-Control-Request-Headers':'NCZ'
    }
  var config = {
    url:url,
    header:headers
  }
  
  axios.request(config)
    .then((response) => {
    		var result = response.data[0];
  
      	console.log(result);
        
  	}).catch(e=>console.log(e));
}
  
main();
