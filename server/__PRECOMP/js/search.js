// this is for the google custom search engine
(function(){
	var cx = '003005722642506293004:ijksvxamcbm';  // this is the API key
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
})();


// this function will run when the page has loaded to present the updated search form
window.onload = function(){
  document.getElementById("resetsearch").addEventListener("click", function(){
  	var elem = document.querySelector('#nu__searchbar-form > div > input#query');
  	elem.defaultValue = '';
  	return false;
  });
};
