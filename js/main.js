var arr1=[121,566,123,404,514];
document.write("The given array is ["+arr1+"]"+"<br>")
console.log(arr1);
function PalindromeCheck(arr1){
var arr2=[];
var arr3=[];
var b;
for(i=0; i<arr1.length; i++){
    var c=0;
    var temp=arr1[i];
   while(arr1[i]>0){
    b=arr1[i]%10;
    arr1[i]=parseInt(arr1[i]/10);
    c=c*10+b;
   }    
   console.log(temp); 
    if(c==temp){
        arr2.push(temp);
    }
    else{
        arr3.push(temp);
    
    }
}
return arr2;
}
// document.write("Palindrome from given array["+arr2+"]"+"<br>");
// document.write("Not Palindrome from given array["+arr3+"]"+"<br>");
var output=PalindromeCheck(arr1);
document.write("Palindrome from given array"+output);
