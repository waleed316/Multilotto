
<script>
    
// (function createKeyboard(){
//     var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 	   for(var i=0; i<70; i++)
// 	   {
// 	    // var nextChar = str.charAt(i);
// 	    var btn = document.createElement("BUTTON");
//     	// btn.setAttribute("id","btn"+nextChar);
//     	// btn.setAttribute("innerHtml",nextChar);
//     	// btn.setAttribute("value",nextChar);
//     	// btn.setAttribute("text",nextChar);
//     	btn.setAttribute("font-size","14px");
//     	btn.setAttribute("background-color","#4CAF50");
// 		btn.setAttribute("style","font-size:14px;background-color: #4CAF50");
// btn.innerHTML = i;
//     	document.body.appendChild(btn);}
// }());




</script>



<body>


<a href="">www</a>
<!--<p id="demo"></p>-->
<table id="demo">
	
	
	<!--<tr>
<td id="demo">-->

<!--</tr>-->

</table>

<script>
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < 70; i++) {
	document.getElementById("demo").innerHTML = '<tr>'
	text += i;
		document.getElementById("demo").innerHTML = '<td>'+text+'</td>'
	
	if(i%5==0)
	{

    // text += i + "";
		document.getElementById("demo").innerHTML = '</tr>'
	}
	// else{
		
	// 	// document.getElementById("demo").innerHTML = '<td>'
    // //  + "</td>";
	
	// 	// document.getElementById("demo").innerHTML = '</td>'
	// }
}
document.getElementById("demo").innerHTML =text;
</script>

	<!--<table class="table" >

                                                                        <tr><a></a></tr>


                                                                    </table>-->
	<!--btn.setAttribute("style","font-size:14px;background-color: #4CAF50");
btn.innerHTML = "A"-->

<!--// createKeyboard()-->
<button onclick="createKeyboard()">click</button>

</body>