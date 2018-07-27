/* ***********************************************************************

NU Global Search (NUGS)

*********************************************************************** */





function NUGlobalSearch(){
 
	this.base = 'https://search.northeastern.edu/nuglobalutils/common';
	// this.base = 'http://sandbox.local/globalsearch/server';

	this.type = 'global';
	this.title = 'Northeastern University';
	this.url = window.location.href;
	this.term = '';
	this.site = '';


	// this method will load external resources for js, styles, etc.
	this.loadResource = function(a,b,c){
		var fileRef = null;
		switch(b){
	    case 'js':
				fileRef=document.createElement('script');
				fileRef.setAttribute("type","text/javascript");
				fileRef.setAttribute("src",a);
	      break;
	    case 'css':
				fileRef=document.createElement("link")
        fileRef.setAttribute("rel","stylesheet")
        fileRef.setAttribute("type","text/css")
        fileRef.setAttribute("href",a)
	      break;
	    default:
	        break;
		}
		document.getElementsByTagName(c)[0].appendChild(fileRef);
		delete fileRef,a,b,c;
	}


	// this method will check to make sure that a valid query was passed so that we can actually search
	this.queryCheck = function(){
		var find = "query";
	  find = find.replace(/[\[\]]/g, "\\$&");
	  var regex = new RegExp("[?&]" + find + "(=([^&#]*)|&|#|$)");
	  this.term = regex.exec(this.url)[2];
		delete find,regex;
		if(this.term[2] && this.term[2] != ''){

			// since we know we have a valid search query, let's attach the required styles, etc. to the page
			this.loadResource(this.base+"/js/search.js","js","head");
			this.loadResource(this.base+"/css/search.css","css","head");

			return true;
		}else{
			return false;
		}
	}


	// this will check to see if we want to do a global search OR limit to a specific URL
	this.queryType = function(){
		if(typeof NUGS_specificsite !== 'undefined' && NUGS_specificsite != '' && typeof NUGS_title !== 'undefined' && NUGS_title != ''){
			this.type = 'local';
			this.site = NUGS_specificsite;
			this.title = NUGS_title+' Site';
		}
	}


	// this will actually build out the search form and show any matched results
	this.queryResults = function(){
		var e = document.createElement('div');
	  e.setAttribute('id','nu__global-search');
	  document.body.appendChild(e);
	  document.write("<div class='main'><section><div class='nu__searchbar-container'><form name='nu__searchbar-form' id='nu__searchbar-form' action='"+this.url+"' method='get'><div><button type='submit' title='Click here or press enter to perform search'>&#xE8B6;</button><input type='text' name='query' id='query' value='"+decodeURIComponent(this.term)+"' title='Enter your search query here'/><label for='query' class='label focus'>Search "+this.title+"</label><button id='resetsearch' class='reset' type='reset' title='Click here to clear current search'>&#xE5C9;</button></div></form></div><gcse:searchresults-only "+(this.site && this.site != ""?"as_sitesearch="+this.site:"")+"></gcse:searchresults-only></section></div>");
		delete e;
	}

}

// instantiate a new global search object
var NUGS = new NUGlobalSearch();

if(NUGS.queryCheck()){	// if we know we have a valid query
	NUGS.queryType();
	NUGS.queryResults();
}else{	// not a valid query, throw an error
	alert('ERROR: invalid query');
}
