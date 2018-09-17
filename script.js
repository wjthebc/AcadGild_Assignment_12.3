//creates function
function map(arr, callback){
  //sets empty var
  var numbers = [];
  //loops through first argument
   for(i = 0; i < arr.length; i++){
    //stores loop results in empty var
    numbers = arr[i];
    //passes var as argument in callback
    callback(numbers);
   }
   
};
//calls function and defines callback
map([1,2,3], function(num){
  console.log(num);
});
