var applePrice = 1.24;
var milkPrice = 5.39;
var bananaPrice = 1.52;
var gstValue = 0.05;
var qstValue = 0.09975;

function addApple()
{
	var quantity = document.getElementByID("Apple").value;
	document.getElementByID("Apple").value = quantity + 1;
	document.getElementByID("totalApple").value = document.getElementByID("Apple").value * applePrice;
	document.getElementByID("Subtotal").value = document.getElementByID("totalApple").value + document.getElementByID("totalMilk").value + document.getElementByID("totalBanana").value;
	document.getElementByID("numOfItems").value = document.getElementByID("Apple").value + document.getElementByID("Milk").value + document.getElementByID("Banana").value;
	document.getElementByID("GST").value = document.getElementByID("Subtotal").value * gstValue;
	document.getElementByID("QST").value = document.getElementByID("Subtotal").value * qstValue;
	document.getElementByID("FinalTotal").value = document.getElementByID("Subtotal").value + document.getElementByID("GST").value + document.getElementByID("QST").value;
}
function minusApple()
{
	var quantity = document.getElementByID("Apple").value;
	if ((quantity-1) < 0)
	{
		document.getElementByID("Apple").value = 0;
	}
	else
	{
		document.getElementByID("Apple").value = Number(quantity) - 1;
	}
	document.getElementByID("totalApple").value = document.getElementByID("Apple").value * applePrice;
	document.getElementByID("Subtotal").value = document.getElementByID("totalApple").value + document.getElementByID("totalMilk").value + document.getElementByID("totalBanana").value;
	document.getElementByID("numOfItems").value = document.getElementByID("Apple").value + document.getElementByID("Milk").value + document.getElementByID("Banana").value;
	document.getElementByID("GST").value = document.getElementByID("Subtotal").value * gstValue;
	document.getElementByID("QST").value = document.getElementByID("Subtotal").value * qstValue;
	document.getElementByID("FinalTotal").value = document.getElementByID("Subtotal").value + document.getElementByID("GST").value + document.getElementByID("QST").value;
}
function addMilk()
{
	var quantity = document.getElementByID("Milk").value;
	document.getElementByID("Milk").value = quantity + 1;
	document.getElementByID("totalMilk").value = document.getElementByID("Milk").value * milkPrice;
	document.getElementByID("Subtotal").value = document.getElementByID("totalApple").value + document.getElementByID("totalMilk").value + document.getElementByID("totalBanana").value;
	document.getElementByID("numOfItems").value = document.getElementByID("Apple").value + document.getElementByID("Milk").value + document.getElementByID("Banana").value;
	document.getElementByID("GST").value = document.getElementByID("Subtotal").value * gstValue;
	document.getElementByID("QST").value = document.getElementByID("Subtotal").value * qstValue;
	document.getElementByID("FinalTotal").value = document.getElementByID("Subtotal").value + document.getElementByID("GST").value + document.getElementByID("QST").value;
	
}
function minusMilk()
{
	var quantity = document.getElementByID("Milk").value;
	if ((quantity-1) < 0)
	{
		document.getElementByID("Milk").value = 0;
	}
	else
	{
		document.getElementByID("Milk").value = quantity - 1;
	}
	document.getElementByID("totalMilk").value = document.getElementByID("Milk").value * milkPrice;
	document.getElementByID("Subtotal").value = document.getElementByID("totalApple").value + document.getElementByID("totalMilk").value + document.getElementByID("totalBanana").value;
	document.getElementByID("numOfItems").value = document.getElementByID("Apple").value + document.getElementByID("Milk").value + document.getElementByID("Banana").value;
	document.getElementByID("GST").value = document.getElementByID("Subtotal").value * gstValue;
	document.getElementByID("QST").value = document.getElementByID("Subtotal").value * qstValue;
	document.getElementByID("FinalTotal").value = document.getElementByID("Subtotal").value + document.getElementByID("GST").value + document.getElementByID("QST").value;
}
function addBanana()
{
	var quantity = document.getElementByID("Banana").value;
	document.getElementByID("Banana").value = quantity + 1;
	document.getElementByID("totalBanana").value = document.getElementByID("Banana").value * bananaPrice;
	document.getElementByID("Subtotal").value = document.getElementByID("totalApple").value + document.getElementByID("totalMilk").value + document.getElementByID("totalBanana").value;
	document.getElementByID("numOfItems").value = document.getElementByID("Apple").value + document.getElementByID("Milk").value + document.getElementByID("Banana").value;
	document.getElementByID("GST").value = document.getElementByID("Subtotal").value * gstValue;
	document.getElementByID("QST").value = document.getElementByID("Subtotal").value * qstValue;
	document.getElementByID("FinalTotal").value = document.getElementByID("Subtotal").value + document.getElementByID("GST").value + document.getElementByID("QST").value;
}
function minusBanana()
{
	var quantity = document.getElementByID("Banana").value;
	if ((quantity-1) < 0)
	{
		document.getElementByID("Banana").value = 0;
	}
	else
	{
		document.getElementByID("Banana").value = quantity - 1;
	}
	document.getElementByID("totalBanana").value = document.getElementByID("Banana").value * bananaPrice;
	document.getElementByID("Subtotal").value = document.getElementByID("totalApple").value + document.getElementByID("totalMilk").value + document.getElementByID("totalBanana").value;
	document.getElementByID("numOfItems").value = document.getElementByID("Apple").value + document.getElementByID("Milk").value + document.getElementByID("Banana").value;
	document.getElementByID("GST").value = document.getElementByID("Subtotal").value * gstValue;
	document.getElementByID("QST").value = document.getElementByID("Subtotal").value * qstValue;
	document.getElementByID("FinalTotal").value = document.getElementByID("Subtotal").value + document.getElementByID("GST").value + document.getElementByID("QST").value;
}