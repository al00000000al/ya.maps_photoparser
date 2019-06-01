$(document).ready(function() {
 var npic = 17;
var pid = parseInt(getParameterByName('pid'));
if( pid > 0){} else{
	pid = randomInteger(1, 76999999);
	var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?pid=' + pid;
	window.history.pushState({ path: newurl }, '', newurl);
	}
	
	$('#pid').val(pid);
if(pid > 0){
for(var i = 0; i < (npic-1); i++){
	var text2 = pid + i;
	$('.results').append(
	"<a href='https://mrc-browser.maps.yandex.ru/feature/"
	+ text2 + 
	"/image'  target='_blank'><img src='https://mrc-browser.maps.yandex.ru/feature/" 
	+text2 +
	"/thumbnail' class=\"photo\" onerror=\"this.style.display='none';\" ></a>");
}
}
Mousetrap.bind('left',function() {window.location='?pid='+(pid-npic);});
Mousetrap.bind('right',function() {window.location='?pid='+(pid+npic);});
Mousetrap.bind('up',function() {window.location='?pid='+(pid+100);});
Mousetrap.bind('down',function() {window.location='?pid='+(pid-100);});
    Mousetrap.bind(['r','к'], function(e) {
    window.location='?pid=0';
    return false;
});
    
 $('.next_btn').on('click', function() {
    window.location='?pid='+(pid+npic);
   });
 $('.prev_btn').on('click', function() {
    window.location='?pid='+(pid-npic);
   });
$('.load_btn').on('click', function() {
    window.location='?pid='+$('#pid').val();
   });
    $('.random_btn').on('click', function() {
    window.location='?pid=0';
   });
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

    
    function checkImage(img){
        if((img.naturalWidth === 128) && (img.naturalHeight == 96)){
            img.style.display='none';
        }
     
    }

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

