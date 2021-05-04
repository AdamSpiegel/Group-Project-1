// var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

// Make sure to add the selected ingredient to end of url before fetch
var srchByIng = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

// Url to grab all available ingredients in drinks
var ingredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

var ul = document.getElementById("myUL");
var ul2 = document.getElementById("drinkNames")

var ingrOpts = [];

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
  // control flow to check if the input matches the available data
  if (ingrOpts.includes(inVal.toLowerCase())){
    searchForDrink(inVal)
  }

  // console.log (inVal)
})

// second submission portion to handle drink selection
document.querySelector("#submit2").addEventListener ("click", function (event){
  event.preventDefault()
  var input2 = document.getElementById("input2");
  var inVal2 = input2.value
  deleteChild()
  makeDrink (inVal2)
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
        ingrOpts.push(first.toLowerCase());
        // console.log(first);
    }
  });
}
getIngredients();


  // Function to fetch available drinks to make with selected ingredient
function searchForDrink(eventAdd) {
  var srchByIng = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
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

// function to delete all li from ul, its called in second submission btn
function deleteChild() {
  //e.firstElementChild can be used.
  var child = ul2.lastElementChild; 
  while (child) {
      ul2.removeChild(child);
      child = ul2.lastElementChild;
  }
}

function makeDrink(eventAdd2) {
  var findDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  findDrink = findDrink + eventAdd2
  fetch(findDrink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      // This function will handle printing ingredients and instructions for the specific drink selected
      document.getElementById('makeDrink').textContent = 'Ingredients'
      var make1 = data.drinks[0].strIngredient1
      var msr1 = data.drinks[0].strMeasure1
      var make2 = data.drinks[0].strIngredient2
      var msr2 = data.drinks[0].strMeasure2
      var make3 = data.drinks[0].strIngredient3
      var msr3 = data.drinks[0].strMeasure3
      var make4 = data.drinks[0].strIngredient4
      var msr4 = data.drinks[0].strMeasure4
      var make5 = data.drinks[0].strIngredient5
      var msr5 = data.drinks[0].strMeasure5
      var make6 = data.drinks[0].strIngredient6
      var msr6 = data.drinks[0].strMeasure6
      var make7 = data.drinks[0].strIngredient7
      var msr7 = data.drinks[0].strMeasure7
      var make8 = data.drinks[0].strIngredient8
      var msr8 = data.drinks[0].strMeasure8
      var make9 = data.drinks[0].strIngredient9
      var msr9 = data.drinks[0].strMeasure9
      var make10 = data.drinks[0].strIngredient10
      var msr10 = data.drinks[0].strMeasure10
      var make11 = data.drinks[0].strIngredient11
      var msr11 = data.drinks[0].strMeasure11
      var make12 = data.drinks[0].strIngredient12
      var msr12 = data.drinks[0].strMeasure12
      var make13 = data.drinks[0].strIngredient13
      var msr13 = data.drinks[0].strMeasure13
      var make14 = data.drinks[0].strIngredient14
      var msr14 = data.drinks[0].strMeasure14
      var make15 = data.drinks[0].strIngredient15
      var msr15 = data.drinks[0].strMeasure15
      var makeIt = [make1, make2, make3, make4, make5, make6, make7,
        make8, make9, make10, make11, make12, make13, make14, make15];
      var msrAll = [msr1, msr2, msr3, msr4, msr5, msr6, msr7,
        msr8, msr9, msr10, msr11, msr12, msr13, msr14, msr15]
      var instructions = data.drinks[0].strInstructions
      // console.log(make3)
      for (var i = 0; i < makeIt.length; i++) {
        if (makeIt[i] != null) {
          // console.log(makeIt[i]);
          var listEl3 = document.createElement('li');
          listEl3.textContent = msrAll[i] + makeIt[i];
          ul2.append(listEl3)
          document.getElementById('instructions').textContent = instructions
        }
      }
    })
}
// Modal Initilization
document.addEventListener('DOMContentLoaded', function() {
  console.log(M)
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  console.log(elems[0])
});

