// var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

// Make sure to add the selected ingredient to end of url before fetch
var srchByIng = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

// Url to grab all available ingredients in drinks
var ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

var ul = document.getElementById("myUL");
var ul2 = document.getElementById("drinkNames")

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


// event listener for ingredient selection which will ready the second submit 
document.querySelector("#Submit").addEventListener ("click", function (event){
  event.preventDefault()
  var input1 = document.getElementById("myInput");
  var inVal = input1.value
  searchForDrink(inVal)
  // console.log (inVal)
})

// second submission portion to handle drink selection
document.querySelector("#submit2").addEventListener ("click", function (event){
  event.preventDefault()
  var input2 = document.getElementById("input2");
  var inVal2 = input2.value
  // TODO: add function for drink name selection maybe add favorites here
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

// Fetch drink api to find list of available ingredients to make the drinks with
function getIngredients(){
  fetch(ingredients)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.drinks.length; i++) {
        var first = data.drinks[i].strIngredient1
        var listEl = document.createElement('li');
        var aEl = document.createElement('a');
        aEl.textContent = first;
        listEl.append(aEl);
        ul.append(listEl);
        // console.log(first);
    }
  });
}
getIngredients();


  // Function to fetch available drinks to make with selected ingredient
function searchForDrink(eventAdd) {
  srchByIng = srchByIng + eventAdd
  fetch(srchByIng)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.drinks.length; i++) {
          var second = data.drinks[i].strDrink;
          var list2El = document.createElement('li');
          var a2El = document.createElement('a');
          a2El.textContent = second;
          list2El.append(a2El);
          ul2.append(list2El);
          // console.log(second);
      }
    });
}

