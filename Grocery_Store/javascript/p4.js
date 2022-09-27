const applePrice = 1.24;
const milkPrice = 5.39;
const bananaPrice = 1.52;
var apples = 0;
var milks = 0;
var bananas = 0;
var items = 0;
var total = 0;
var subtotalValue = 0;
var GSTvalue = 0;
var QSTvalue = 0;
var totalValue = 0;
var totalApple = 0;
var totalMilk = 0;
var totalBanana = 0;
function initialize()
{
	document.getElementById("apple").innerHTML = apples;
	document.getElementById("milk").innerHTML = milks;
	document.getElementById("banana").innerHTML = bananas;
	document.getElementById("item").innerHTML = items;
	document.getELementById("subtotal").innerHTML = subtotalValue;
	document.getElementById("GST").innerHTML = GSTvalue;
	document.getElementById("QST").innerHTML = QSTvalue;
	document.getElementById("total").innerHTML = totalValue;
	document.getElementById("totalApple").innerHTML = totalApple;
	document.getElementById("totalMilk").innerHTML = totalMilk;
	document.getElementById("totalBanana").innerHTML = totalBanana;
}
function addApple()
{
	apples++;
	items++;
	totalApple = Math.round((apples * applePrice)*100)/100;
	subtotalValue = Math.round((subtotalValue + applePrice) * 100)/100;
	GSTvalue = Math.round(subtotalValue * 5)/100;
	QSTvalue = Math.round(subtotalValue * 9.975)/100;
	totalValue = Math.round((subtotalValue + GSTvalue + QSTvalue)*100)/100;
	document.getElementById("apple").innerHTML = apples;
	document.getElementById("totalApple").innerHTML = totalApple;
	document.getElementById("item").innerHTML = items;
	document.getElementById("subtotal").innerHTML = subtotalValue;
	document.getElementById("GST").innerHTML = GSTvalue;
	document.getElementById("QST").innerHTML = QSTvalue;
	document.getElementById("total").innerHTML = totalValue;
}
function minusApple()
{
	if (apples == 0)
		alert ("There are 0 apples in the cart");
	else{
		apples--;
		items--;
		totalApple = Math.round((apples * applePrice)*100)/100;
		subtotalValue = Math.round((subtotalValue - applePrice) * 100)/100;
		GSTvalue = Math.round(subtotalValue * 5)/100;
		QSTvalue = Math.round(subtotalValue * 9.975)/100;
		totalValue = Math.round((subtotalValue + GSTvalue + QSTvalue)*100)/100;
		document.getElementById("apple").innerHTML = apples;
		document.getElementById("totalApple").innerHTML = totalApple;
		document.getElementById("item").innerHTML = items;
		document.getElementById("subtotal").innerHTML = subtotalValue;
		document.getElementById("GST").innerHTML = GSTvalue;
		document.getElementById("QST").innerHTML = QSTvalue;
		document.getElementById("total").innerHTML = totalValue;
	}
}
function addMilk()
{
	milks++;
	items++;
	totalMilk = Math.round((milks * milkPrice)*100)/100;
	subtotalValue = Math.round((subtotalValue + milkPrice) * 100)/100;
	GSTvalue = Math.round(subtotalValue * 5)/100;
	QSTvalue = Math.round(subtotalValue * 9.975)/100;
	totalValue = Math.round((subtotalValue + GSTvalue + QSTvalue)*100)/100;
	document.getElementById("milk").innerHTML = milks;
	document.getElementById("item").innerHTML = items;
	document.getElementById("totalMilk").innerHTML = totalMilk;
	document.getElementById("subtotal").innerHTML = subtotalValue;
	document.getElementById("GST").innerHTML = GSTvalue;
	document.getElementById("QST").innerHTML = QSTvalue;
	document.getElementById("total").innerHTML = totalValue;	
}
function minusMilk()
{
	if (milks == 0)
		alert ("There are 0 milk boxes in the cart");
	else{
		milks--;
		items--;
		totalMilk = Math.round((milks * milkPrice)*100)/100;
		subtotalValue = Math.round((subtotalValue - milkPrice) * 100)/100;
		GSTvalue = Math.round(subtotalValue * 5)/100;
		QSTvalue = Math.round(subtotalValue * 9.975)/100;
		totalValue = Math.round((subtotalValue + GSTvalue + QSTvalue)*100)/100;
		document.getElementById("milk").innerHTML = milks;
		document.getElementById("item").innerHTML = items;
		document.getElementById("totalMilk").innerHTML = totalMilk;
		document.getElementById("subtotal").innerHTML = subtotalValue;
		document.getElementById("GST").innerHTML = GSTvalue;
		document.getElementById("QST").innerHTML = QSTvalue;
		document.getElementById("total").innerHTML = totalValue;
	}
}
function addBanana()
{
	bananas++;
	items++;
	totalBanana = Math.round((bananas * bananaPrice)*100)/100;
	subtotalValue = Math.round((subtotalValue + bananaPrice) * 100)/100;
	GSTvalue = Math.round(subtotalValue * 5)/100;
	QSTvalue = Math.round(subtotalValue * 9.975)/100;
	totalValue = Math.round((subtotalValue + GSTvalue + QSTvalue)*100)/100;
	document.getElementById("banana").innerHTML = bananas;
	document.getElementById("item").innerHTML = items;
	document.getElementById("totalBanana").innerHTML = totalBanana;
	document.getElementById("subtotal").innerHTML = subtotalValue;
	document.getElementById("GST").innerHTML = GSTvalue;
	document.getElementById("QST").innerHTML = QSTvalue;
	document.getElementById("total").innerHTML = totalValue;
}
function minusBanana()
{
	if (bananas == 0)
		alert ("There are 0 bananas in the cart");
	else{
		bananas--;
		items--;
		totalBanana = Math.round((bananas * bananaPrice)*100)/100;
		subtotalValue = Math.round((subtotalValue - bananaPrice) * 100)/100;
		GSTvalue = Math.round(subtotalValue * 5)/100;
		QSTvalue = Math.round(subtotalValue * 9.975)/100;
		totalValue = Math.round((subtotalValue + GSTvalue + QSTvalue)*100)/100;
		document.getElementById("banana").innerHTML = bananas;
		document.getElementById("item").innerHTML = items;
		document.getElementById("totalBanana").innerHTML = totalBanana;
		document.getElementById("subtotal").innerHTML = subtotalValue;
		document.getElementById("GST").innerHTML = GSTvalue;
		document.getElementById("QST").innerHTML = QSTvalue;
		document.getElementById("total").innerHTML = totalValue;
	}
}
