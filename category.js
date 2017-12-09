var electronics=["laptop.jpeg","mobile.jpg","tablet.jpg","accessories.jpg","camera.jpg"];
var fashion=["shirt.jpg","jeans.jpg","trousers.jpg","shrugs.jpg","shoes.jpg"];
var books=["shbook.jpg","wapbook.jpg","babbook.jpg","advbook.jpg","kidsbook.jpg"];
var sports=["cricket.jpg","football.jpg","tennis.jpg","snooker.jpg","badminton.jpeg"];
var personal=["tshirts.jpg","jeans.jpg","sweater.jpg","jacket.jpg","shirts.jpg"];
var other=["default.jpg","default.jpg","default.jpg","default.jpg","default.jpg"];
var clonecount=0;
function displayitem(category){
	var itemimg=document.getElementsByClassName('itemimg');
	var productname=document.getElementsByClassName('productname');
	var arr=[];
	var btns=document.getElementsByClassName('cartbtn');
	//alert('here'); 	 	
	switch(category){
		case '0': arr=electronics.slice();
			
			break;
		case '1':  arr=fashion.slice();
			break;
		case '2':  arr=books.slice();
			break;
		case '3':  arr=sports.slice();
			break;
		case '4':  arr=personal.slice();
			break;
		default: arr=other.slice();
	}
	$(".itemimg").popover({trigger:"hover focus"});	

	for(var i=0;i<arr.length;i++){
		//alert(arr[i]);
		itemimg[i].src=arr[i];
		itemimg[i].id=""+category+i;
		btns[i].id=""+category+i;
		btns[i].setAttribute('onclick','addtocart('+""+itemimg[i].id+')');
		itemimg[i].setAttribute('data-content','Cost:Rs.1300 \n GST: 12% \n Total:Rs.1450');
		var name=arr[i].substr(0,arr[i].indexOf('.'));
		productname[i].innerHTML=name;
		
	}
	displayrow();
}
function displayrow(){
	document.getElementById('itemsrow').style.display="block";

}

function addcategory(){
	var clone=document.getElementById('clonenode').cloneNode(true);
	var row=document.getElementById('categoryrow');
	clone.id="clone"+clonecount;
	row.appendChild(clone);
	var child=clone.children[0].children;
	child[0].id="img"+clonecount;
	child[0].src="defaultcategory.jpg";
	document.getElementById("img"+clonecount).setAttribute('onclick','displayitem(-1)');
	clonecount++;
}
var cart=[];
var p2 = document.createElement('p2');
function addtocart(index){
	if(index>=0&&index<=4){
		cart.push(electronics[index]);
	}
	else{
		var str=""+index;
		var spl=str.split('');
		switch(spl[0]){
			case '1': cart.push(fashion[spl[1]]);
					break;
			case '2': cart.push(books[spl[1]]);
					break;
			case '3': cart.push(sports[spl[1]]);
					break;
			case '4': cart.push(personal[spl[1]]);
					break;
			default: cart.push(other[spl[1]]);
		}
	}
	var count=0;
	var cartitems=document.getElementById('itemscart');
	var cartlen=document.getElementsByClassName('cartimg').length;
	for(i=cartlen;i<cart.length;i++){
		if(cart.length<=3){
		var img=document.createElement('img');
		img.src=cart[i];
		img.className="cartimg";
		img.style.height="100px";
		img.style.width="100px";
		cartitems.appendChild(img);
		var p=document.createElement('p');
		p.innerHTML="Price:Rs.1450";
		cartitems.appendChild(p);
		var br=document.createElement('br');
		cartitems.appendChild(br);
			if(count==1)
	cartitems.removeChild(p2);
		}
	}
	if(cart.length<=3){

	p2.innerHTML = "Total BILL:"+ "Rs."+cart.length*1450 + "(" + cart.length + "items" + ")" ;
	cartitems.appendChild(p2);
		
	count=1;
	}

}
var cartcount=0;
function displaycart(){
	cartcount++;
	if(cartcount%2!=0)
		document.getElementById('cart').style.display="block";
	else
		document.getElementById('cart').style.display="none";
}
function addTopic() {
    // var nav = 
    var text = prompt("Enter the topic name");
    var ul = document.getElementsByClassName("nav navbar-nav")[0];;
    var newLi = document.createElement('li');
    var ahref = document.createElement('a');
    ahref.setAttribute('href', '#');
    ahref.innerHTML = text;
    newLi.appendChild(ahref);
    ul.appendChild(newLi);
}
