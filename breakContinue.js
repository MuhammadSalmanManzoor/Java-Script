var num=prompt("please enter a num");
var isPrime = true;
num =parseInt(num);
for (a=2; a<num; a++) {
    var result= num%a;
    if (result == 0){
        console.log("Num is not prime ");
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Nm is prime ");
}