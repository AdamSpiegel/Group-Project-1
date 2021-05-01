// var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
// var srchByIng = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
var ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
// var ingrLi = document.querySelector('#ingr');
// var thingy = document.createElement('li');
document.querySelector("#myInput").addEventListener("keyup", function (event) {
    var input, filter, ul, li, a, i, txtValue;
    // input = document.getElementById("myInput");
    input = event.target
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    if(input.value === "")
    {ul.style.display = "none"} 
    else {    ul.style.display = "block"}
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
})

var a = document.querySelectorAll("#myUL a")

// loop through the array and add an event listener for each drink


// breaks due to line 32 
// document.querySelectorAll("#myUL a").addEventListener ("click", function (event){
// document.getElementById("myInput").value = event.target.textContent;
// })
document.querySelector("#Submit").addEventListener ("click", function (event){
var input = document.getElementById("myInput");
console.log (input.value)
})

// // // var responseText = document.getElementById('response-text');
// function getApi(thing) {
//   fetch(thing)
//     .then(function (response) {
//     //   console.log(response);
//       if (response.status === 200) {
//         // console.log(response.status);
//       }
//       console.log(response.json())
//       var ls = response.json();
//       for (var i = 0; i < ls.length; i++) {
//         thingy.textContent = ls[i]
//     }
//       return ls
//   });
// }
// getApi(ingredients);
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';
fetch(ingredients)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //   console.log(data)
    //   console.log(data.drinks.length);
    for (var i = 0; i < data.drinks.length; i++) {
        var first = data.drinks[i].strIngredient1
        console.log(first);
    //   console.log(data[i].user.login);
    }
  });