var rate = 0;
function submitReview(){
	var user=document.getElementById('user').value;
	var products=document.getElementById('products').value;
	var review=document.getElementById('review').value;
	if(rate != 0 && user !="" && review !=""){
		var html=
		"<br>" + "<h4 style='color: rgb(255, 161, 161);'>&#9733; Customer Name: <label class='text-primary'></label></h4>"
		+"<p>"+user+"</p>"
		+"<h4 style='color: rgb(255, 161, 161);'>Rating (Out of 5): <label class='text-primary'></label></h4>"
		+"<p>"+rate+"</p>"
		+"<h4 style='color: rgb(255, 161, 161);'>Product Category:</h4>"
		+"<p>"+products+"</p>"
		+"<h4 style='color: rgb(255, 161, 161);'>Feedback/Comments:</h4>"
		+"<p style='font-size: 1.2vw;'>"+review+"</p>" + "<br>"
		+"<hr style='border-top:1px solid rgb(255, 161, 161);'/>";

		document.getElementById('result').innerHTML+=html;
		document.getElementById('user').value="";
		document.getElementById('review').value="";
		document.getElementById('products').value="";
	}
	
}

function rating(StarNum){
	rate=StarNum.id[0];
	sessionStorage.rateStar = rate;
	for(var s = 0; s < 5; s++){
		if(s < rate){
			document.getElementById((s + 1)).style.color="yellow";
		}
		else{
			document.getElementById((s + 1)).style.color="rgb(68,68,68)";
		}
	}
}