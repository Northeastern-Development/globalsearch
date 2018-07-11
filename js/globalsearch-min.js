// function addSearch(){var e=document.createElement("div");e.setAttribute("id","nu__global-search"),document.body.appendChild(e),document.write("<div class='main'><section><div class='nu__searchbar-container'><form name='nu__searchbar-form' id='nu__searchbar-form' action='' method='get'><div><button type='submit' title='Click here or press enter to perform search'>&#xE8B6;</button><input type='text' name='query' id='query' value='' title='Enter your search query here'/><label for='query' class='label focus'>Search</label><button class='reset' type='reset' title='Click here to clear current search'>&#xE5C9;</button></div></form></div><gcse:searchresults-only></gcse:searchresults-only></section></div>")}function loadjscssfile(e,t,s){var r;if("js"==t){var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",e)}else if("css"==t){var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",e)}else if("text"==t){var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.textContent=e}void 0!==r&&document.getElementsByTagName(s)[0].appendChild(r)}function nuscripts(){loadjscssfile("http://dynamicnav.nudev.net/global/common/js/search.js","js","head"),loadjscssfile("http://dynamicnav.nudev.net/global/common/css/search.css","css","head")}addSearch(),nuscripts();



// allow us to grab the search term from the querystring
// function getSearchParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }
//
// alert(getSearchParameterByName('foo'));




//adds the search tag to the document with the id of globalheader
function addSearch(){

	// alert('fghkfgjkghjkgh');

	// alert(ULGA_search_specificsite);

	// alert(getSearchParameterByName('foo'));


	// alert(window.location.href);

	searchTerm = "";


	url = window.location.href;
	//alert(url);
	name = "query";
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  searchTerm = regex.exec(url);
//     // if (!results) return null;
// //     if (!results[2]) return '';
// //     return decodeURIComponent(results[2].replace(/\+/g, " "));
//
	// alert(results);




  var elemDiv = document.createElement('div');
  elemDiv.setAttribute('id','nu__global-search')
  document.body.appendChild(elemDiv);
  // document.write("<div class='main'><section><div class='nu__searchbar-container'><form name='nu__searchbar-form' id='nu__searchbar-form' action='' method='get'><div><button type='submit' title='Click here or press enter to perform search'>&#xE8B6;</button><input type='text' name='query' id='query' value='' title='Enter your search query here'/><label for='query' class='label focus'>Search</label><button class='reset' type='reset' title='Click here to clear current search'>&#xE5C9;</button></div></form></div><gcse:searchresults-only></gcse:searchresults-only></section></div>");
  document.write("<div class='main'><section><div class='nu__searchbar-container'><form name='nu__searchbar-form' id='nu__searchbar-form' action='"+window.location.href+"' method='get'><div><button type='submit' title='Click here or press enter to perform search'>&#xE8B6;</button><input type='text' name='query' id='query' value='"+(searchTerm[2] && searchTerm[2] != ""?decodeURIComponent(searchTerm[2]):'')+"' title='Enter your search query here'/><label for='query' class='label focus'>Search"+(ULGA_search_title && ULGA_search_title != ""?" "+ULGA_search_title:"")+" Site</label><button id='resetsearch' class='reset' type='reset' title='Click here to clear current search'>&#xE5C9;</button></div></form></div><gcse:searchresults-only "+(ULGA_search_specificsite && ULGA_search_specificsite != ""?"as_sitesearch="+ULGA_search_specificsite:"")+"></gcse:searchresults-only></section></div>");

}


//
// function loadXMLDoc() {
//
//     var xmlhttp = new XMLHttpRequest();
//
//     var url = 'http://newnu.nudev.net/resources/includes/?r=search';
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == XMLHttpRequest.DONE) {
//             if (xmlhttp.status == 200) {
//               addSearch();
//                 document.getElementById("nu__global-search").innerHTML = xmlhttp.responseText;
//                 nuscripts();
//             } else if (xmlhttp.status == 400) {
//                 console.log('There was an error 400');
//             } else {
//                 console.log('something else other than 200 was returned');
//             }
//         }
//     };
//
//     xmlhttp.open("GET", url, true);
//     //xmlhttp.open("GET", true);
//     xmlhttp.send();
// };

// loadXMLDoc();

addSearch();
nuscripts();
alert('fasd');

  function loadjscssfile(filename, filetype, pos){
    var fileref;
      if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
      }
      else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
        //fileref.async = false;
        //fileref.setAttribute("async", true)
      }
      else if (filetype=="text"){ //if filename is an external CSS file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.textContent = filename
      }
      if (typeof fileref !="undefined"){
        //document.getElementsByTagName("head")[0].appendChild(fileref)
        // if(filetype == "js"){
          // document.getElementsByTagName(pos)[0].prependChild(fileref);
        // }else{
          document.getElementsByTagName(pos)[0].appendChild(fileref);
        // }
      }


  }

  function nuscripts(){
		loadjscssfile("http://globalsearch.edu/server/js/search.js", "js" , "head") ////dynamically load and add this .css file
    //loadjscssfile("https://search.northeastern.edu/nuglobalutils/common/js/search.js", "js" , "head") ////dynamically load and add this .css file

    loadjscssfile("http://globalsearch.edu/server/css/search.css", "css", "head") ////dynamically load and add this .css file
    //loadjscssfile("https://search.northeastern.edu/nuglobalutils/common/css/search.css", "css", "head") ////dynamically load and add this .css file
}


