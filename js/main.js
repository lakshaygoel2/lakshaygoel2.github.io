var det =
[
  {"name":"Electronics 1", "desc":"Great interiors", "price":"999"},
  {"name":"Electronics 1", "desc":"Great interiors", "price":"249"},
  {"name":"Fashion 1", "desc":"Great shades", "price":"329"},
  {"name":"Fashion 2", "desc":"Great shades", "price":"209"},
  {"name":"Book 1", "desc":"Great interiors", "price":"1209"},
  {"name":"Book 2", "desc":"Great interiors", "price":"1409"},
  {"name":"Cricket", "desc":"Great title", "price":"99"},
  {"name":"Football", "desc":"Great title", "price":"79"},
  {"name":"Personal 1", "desc":"Great fur", "price":"899"},
  {"name":"Personal 2", "desc":"Great fur", "price":"499"},
];


function clickedli(x){
  $(".nav li").removeClass("active");
  $('#'+x.id).addClass("active");
  // $('.jumbotron section').style.display="none";
  $('.showb').removeClass("visi");
  $('.showb').addClass("invisi");
  $('#'+x.id+'w').removeClass("invisi");
  $('#'+x.id+'w').addClass("visi");

}
$( document ).ready(function() {
  var init1=`
  <div class="row featurette">
    <div class="col-md-3">
    </div>
    <div class="col-md-4 f-par">
      <h2 class="featurette-heading">`;
      // Big Fantastic Car
  var m1 = `<br>
            <span class="text-muted">`;
            // Plush interiors.
  var m2 = `</span>
          </h2><span class="price-class">
          <span class="price-class">`;
  var m8 = `</span><br>
          Add to Cart
          <input type="checkbox" value="`;
          // 2
  var m3 = `"/>
        </div>
        <div class="col-md-2">
          <img class="featurette-image img-responsive center-block" alt="500x500" src="../image/c1.jpg" data-holder-rendered="true">
        </div>

      </div>
      <hr style="padding:0; margin-left:30%; width:40%; opacity:0; margin-bottom:5px; margin-top:5px;">`;
      var outstring="";
  for(var u=0;u<2;u++)
  {
      outstring+=init1+det[u]["name"]+m1+det[u]["desc"]+m2+det[u]["price"]+m8+u+m3;
  }
  $('#electronicsw').html(outstring);

  outstring="";
  for(var u=2;u<4;u++)
  {
      outstring+=init1+det[u]["name"]+m1+det[u]["desc"]+m2+det[u]["price"]+m8+u+m3;
  }
  $('#beautyw').html(outstring);

  outstring="";
  for(var u=4;u<6;u++)
  {
      outstring+=init1+det[u]["name"]+m1+det[u]["desc"]+m2+det[u]["price"]+m8+u+m3;
  }
  $('#automobilesw').html(outstring);

  outstring="";
  for(var u=6;u<8;u++)
  {
      outstring+=init1+det[u]["name"]+m1+det[u]["desc"]+m2+det[u]["price"]+m8+u+m3;
  }
  $('#ppvw').html(outstring);

  outstring="";
  for(var u=8;u<10;u++)
  {
      outstring+=init1+det[u]["name"]+m1+det[u]["desc"]+m2+det[u]["price"]+m8+u+m3;
  }
  $('#petsw').html(outstring);
});


function getOut(){
   var ret =  $('input:checked').map(function(){
      return $(this).val();
    }).get();
      var totPrice = 0;
  for(var m=0;m<ret.length; m++)
  {
    console.log(det[ret[m]]["name"] + " : " + det[ret[m]]["price"]);
    totPrice+=parseInt(det[ret[m]]["price"]);
  }
  console.log(totPrice);
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

