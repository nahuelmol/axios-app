function main(){
  var url = 'http://localhost:8000/api/posts';

  var headers = {
      'Origin': 'http://localhost:8080',
      'Access-Control-Request-Method': 'GET',
      'Access-Control-Request-Headers': 'NCZ'
    }
  
  axios.get(url, headers)
    .then((response) => {
    		var result = response.data;
  
      	console.log(result);
      	console.log(response.status);
        
  	}).catch(e=>console.log(e));
}
  
main();
