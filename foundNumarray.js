var arr=[34, 45, 29, 53, 67];
var input=parseInt(prompt("enter number to find"));
var found=false;
console.log("userinput", input);
for(i=0; i<arr.length; i++) {
   // console.log(arr[i]);
    if (arr[i]===input) {
        console.log(" Found " +input+ " on index " +i);
        found= true;
        break; 
    }
}
if(!found){
    console.log("not found");
}
