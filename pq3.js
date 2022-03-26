<html>
<head>
<title>Java Script</title>
<script>

var rev = 0;
var num = 8392;
var lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
alert("Reverse number : "+rev);
console.log("Reverse number : "+rev);

</script>
</head>
<body>
</body>
</html>