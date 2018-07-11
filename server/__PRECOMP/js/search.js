
  // this is for the google custom search engine
  (function() {
  	var cx = '003005722642506293004:ijksvxamcbm';
  	var gcse = document.createElement('script');
  	gcse.type = 'text/javascript';
  	gcse.async = true;
  	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  	var s = document.getElementsByTagName('script')[0];
  	s.parentNode.insertBefore(gcse, s);
  })();




  window.onload = function(){
    // console.log('page has loaded');


    document.getElementById("resetsearch").addEventListener("click", function(){
    	var elem = document.querySelector('#nu__searchbar-form > div > input#query');
    	// console.log('OLD: '+elem.value);
    	elem.defaultValue = '';
    	// console.log('NEW: '+elem.value);
    	return false;
    });
};
