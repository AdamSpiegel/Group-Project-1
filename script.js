// Make sure to add the selected ingredient to end of url before fetch
var srchByIng = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

// Url to grab all available ingredients in drinks
var ingredients = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

// url for meal search by ingredient
var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

// url for meal search by ingredient
var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

var ul = document.getElementById("myUL");
var ul2 = document.getElementById("drinkNames");
var ul3 = document.getElementById("mealNames")
var ul4 = document.getElementById("myUL2")

var ingrOpts = [];

// Where local storage is going to be housed
var searchHistory = [];

document.querySelector("#myInput").addEventListener("keyup", function (event) {
  var input, filter, ul, li, a, i, txtValue;
  // input = document.getElementById("myInput");
  input = event.target;
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  if (input.value === "") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
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
});


document.querySelector("#myInput2").addEventListener("keyup", function (event) {
  var input, filter, ul, li, a, i, txtValue;
  // input = document.getElementById("myInput2");
  input = event.target
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL2");
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

// Anonymous function
// var a = Array.from(document.querySelectorAll("#myUL a"));
// for(var i = 0; i<a.length; i++){
//   a[i].addEventListener("click", function(e){
//     console.log(e.target)
//   })
// }

// Autocomplete funtion for drinks 
document.getElementById("myUL").addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    console.log(e.target);
    // Insert autocomplete function here
    document.querySelector("#myInput").value = e.target.textContent;
    document.getElementById("myUL").style.display = "none";
  }
});

// Autocomplete function for meals
document.getElementById("myUL2").addEventListener("click", function(e){
  if (e.target.tagName === "A"){
    console.log (e.target)
    // Insert autocomplete function here
    document.querySelector("#myInput2").value = e.target.textContent
    document.getElementById("myUL2").style.display = "none"
  }
});

//add auto complete for names of drinks
document.getElementById("drinkNames").addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    console.log(e.target);
    // Insert autocomplete function here
    document.querySelector("#input2").value = e.target.textContent;
  }
});

//add auto complete for names of meals
document.getElementById("mealNames").addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    console.log(e.target);
    // Insert autocomplete function here
    document.querySelector("#input3").value = e.target.textContent;
  }
});

// window.localStorage.setItem("myUL", "searchHistory");
// console.log(localStorage.getItem("myUL"));
// loop through the array and add an event listener for each drink
// Need Event Listeners to loop

// event listener for ingredient selection which will ready the second submit
document.querySelector("#Submit").addEventListener("click", function (event) {
  event.preventDefault();
  var input1 = document.getElementById("myInput");
  var inVal = input1.value;
  window.localStorage.setItem("myUL", inVal);
  // control flow to check if the input matches the available data
  if (ingrOpts.includes(inVal.toLowerCase())) {
    deleteChild(ul2)
    document.getElementById('makeDrink').textContent = 'Showing results for ' + inVal
    document.getElementById('instructions').textContent = ''
    searchForDrink(inVal)
  }
});
console.log(localStorage.getItem("myUL"));
// second submission portion to handle drink selection
document.querySelector("#submit2").addEventListener("click", function (event) {
  event.preventDefault();
  var input2 = document.getElementById("input2");
  var inVal2 = input2.value;
  deleteChild(ul2);
  if(input2.value){
    makeDrink(inVal2);
  }
});

// Fetch drink api to find list of available ingredients to make the drinks with
function getIngredients() {
  fetch(ingredients)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.drinks.length; i++) {
        var first = data.drinks[i].strIngredient1;
        var listEl = document.createElement("li");
        var aEl = document.createElement("a");
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
  var srchByIng = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  srchByIng = srchByIng + eventAdd;
  fetch(srchByIng)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.drinks.length; i++) {
        var second = data.drinks[i].strDrink;
        var list2El = document.createElement("li");
        var a2El = document.createElement("a");
        a2El.textContent = second;
        list2El.append(a2El);
        ul2.append(list2El);
        // console.log(second);
      }
    });
}

// function to delete all li from ul, its called in second submission btn
function deleteChild(target) {
  //e.firstElementChild can be used.
  var child = target.lastElementChild;
  while (child) {
    target.removeChild(child);
    child = target.lastElementChild;
  }
}

function makeDrink(eventAdd2) {
  var findDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  findDrink = findDrink + encodeURIComponent(eventAdd2);
  fetch(findDrink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      // This function will handle printing ingredients and instructions for the specific drink selected
      document.getElementById("makeDrink").textContent = "Ingredients for " + data.drinks[0].strDrink;
      var make1 = data.drinks[0].strIngredient1;
      var msr1 = data.drinks[0].strMeasure1;
      var make2 = data.drinks[0].strIngredient2;
      var msr2 = data.drinks[0].strMeasure2;
      var make3 = data.drinks[0].strIngredient3;
      var msr3 = data.drinks[0].strMeasure3;
      var make4 = data.drinks[0].strIngredient4;
      var msr4 = data.drinks[0].strMeasure4;
      var make5 = data.drinks[0].strIngredient5;
      var msr5 = data.drinks[0].strMeasure5;
      var make6 = data.drinks[0].strIngredient6;
      var msr6 = data.drinks[0].strMeasure6;
      var make7 = data.drinks[0].strIngredient7;
      var msr7 = data.drinks[0].strMeasure7;
      var make8 = data.drinks[0].strIngredient8;
      var msr8 = data.drinks[0].strMeasure8;
      var make9 = data.drinks[0].strIngredient9;
      var msr9 = data.drinks[0].strMeasure9;
      var make10 = data.drinks[0].strIngredient10;
      var msr10 = data.drinks[0].strMeasure10;
      var make11 = data.drinks[0].strIngredient11;
      var msr11 = data.drinks[0].strMeasure11;
      var make12 = data.drinks[0].strIngredient12;
      var msr12 = data.drinks[0].strMeasure12;
      var make13 = data.drinks[0].strIngredient13;
      var msr13 = data.drinks[0].strMeasure13;
      var make14 = data.drinks[0].strIngredient14;
      var msr14 = data.drinks[0].strMeasure14;
      var make15 = data.drinks[0].strIngredient15;
      var msr15 = data.drinks[0].strMeasure15;
      var makeIt = [
        make1,
        make2,
        make3,
        make4,
        make5,
        make6,
        make7,
        make8,
        make9,
        make10,
        make11,
        make12,
        make13,
        make14,
        make15,
      ];
      var msrAll = [
        msr1,
        msr2,
        msr3,
        msr4,
        msr5,
        msr6,
        msr7,
        msr8,
        msr9,
        msr10,
        msr11,
        msr12,
        msr13,
        msr14,
        msr15,
      ];
      var instructions = data.drinks[0].strInstructions;
      // console.log(make3)
      for (var i = 0; i < makeIt.length; i++) {
        if (makeIt[i] != null) {
          // console.log(msrAll[i]);
          var listEl3 = document.createElement("li");
          listEl3.textContent = makeIt[i]
          
        } 
        if (msrAll[i] != null){
          var listEl3 = document.createElement("li");
          // msrContent = msrAll[i]
          listEl3.textContent = msrAll[i] + " " + makeIt[i];
        }
        ul2.append(listEl3);
        document.getElementById("instructions").textContent = instructions;
      }
    });
}

// fetch food ingredients

var mealIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
var mealOpts = [];
function getMealIngredients() {
  fetch(mealIngredients)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.meals.length; i++) {
        var third = data.meals[i].strIngredient;
        mealOpts.push(third.toLowerCase());
      }
    });
}
getMealIngredients();

// meal selections
document.querySelector("#Submit3").addEventListener("click", function (event) {
  event.preventDefault();
  var input3 = document.getElementById("myInput2");
  var inVal2 = input3.value;
  // control flow to check if the input matches the available data
  if (mealOpts.includes(inVal2.toLowerCase())) {
    searchForMeal(inVal2)
    document.getElementById('makeMeal').textContent = 'Showing results for ' + inVal2
    document.getElementById('instructionsMeal').textContent = ''
    deleteChild(ul3)
    // console.log(inVal2)
  }
});

// input meal selection
document.querySelector("#submit4").addEventListener("click", function (event) {
  event.preventDefault();
  var input4 = document.getElementById("input3");
  var inVal4 = input4.value;
  deleteChild(ul3);
  if (input4.value){
    makeMeal(inVal4);
  }
});

// fetch food ingredients

var mealIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
var mealOpts = [];
function getMealIngredients() {
  fetch(mealIngredients)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.meals.length; i++) {
        var third = data.meals[i].strIngredient
      var listE2 = document.createElement('li');
      var aE2 = document.createElement('a');
      aE2.textContent = third;
      listE2.append(aE2);
      ul4.append(listE2);
      mealOpts.push(third.toLowerCase());
      }
    });
}
getMealIngredients();

// search for meal
var ul3 = document.getElementById("mealNames");
function searchForMeal(eventAdd) {
  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  mealUrl = mealUrl + eventAdd;
  fetch(mealUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      for (var i = 0; i < data.meals.length; i++) {
        var second = data.meals[i].strMeal;
        var list3El = document.createElement("li");
        var a3El = document.createElement("a");
        a3El.textContent = second;
        list3El.append(a3El);
        ul3.append(list3El);
        // console.log(second);
      }
    });
}

function makeMeal(eventAdd2) {
  var findMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  
  findMeal = findMeal + encodeURIComponent(eventAdd2);
  // console.log(encodeURIComponent(eventAdd2))
  fetch(findMeal)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      // This function will handle printing ingredients and instructions for the specific drink selected
      document.getElementById("makeMeal").textContent = "Ingredients for " + data.meals[0].strMeal;
      var make1 = data.meals[0].strIngredient1;
      var msr1 = data.meals[0].strMeasure1;
      var make2 = data.meals[0].strIngredient2;
      var msr2 = data.meals[0].strMeasure2;
      var make3 = data.meals[0].strIngredient3;
      var msr3 = data.meals[0].strMeasure3;
      var make4 = data.meals[0].strIngredient4;
      var msr4 = data.meals[0].strMeasure4;
      var make5 = data.meals[0].strIngredient5;
      var msr5 = data.meals[0].strMeasure5;
      var make6 = data.meals[0].strIngredient6;
      var msr6 = data.meals[0].strMeasure6;
      var make7 = data.meals[0].strIngredient7;
      var msr7 = data.meals[0].strMeasure7;
      var make8 = data.meals[0].strIngredient8;
      var msr8 = data.meals[0].strMeasure8;
      var make9 = data.meals[0].strIngredient9;
      var msr9 = data.meals[0].strMeasure9;
      var make10 = data.meals[0].strIngredient10;
      var msr10 = data.meals[0].strMeasure10;
      var make11 = data.meals[0].strIngredient11;
      var msr11 = data.meals[0].strMeasure11;
      var make12 = data.meals[0].strIngredient12;
      var msr12 = data.meals[0].strMeasure12;
      var make13 = data.meals[0].strIngredient13;
      var msr13 = data.meals[0].strMeasure13;
      var make14 = data.meals[0].strIngredient14;
      var msr14 = data.meals[0].strMeasure14;
      var make15 = data.meals[0].strIngredient15;
      var msr15 = data.meals[0].strMeasure15;
      var make16 = data.meals[0].strIngredient16;
      var msr16 = data.meals[0].strMeasure16;
      var make17 = data.meals[0].strIngredient17;
      var msr17 = data.meals[0].strMeasure17;
      var make18 = data.meals[0].strIngredient18;
      var msr18 = data.meals[0].strMeasure18;
      var make19 = data.meals[0].strIngredient19;
      var msr19 = data.meals[0].strMeasure19;
      var make20 = data.meals[0].strIngredient20;
      var msr20 = data.meals[0].strMeasure20;

      var makeIt = [
        make1,
        make2,
        make3,
        make4,
        make5,
        make6,
        make7,
        make8,
        make9,
        make10,
        make11,
        make12,
        make13,
        make14,
        make15,
        make16,
        make17,
        make18,
        make19,
        make20,
      ];
      var msrAll = [
        msr1,
        msr2,
        msr3,
        msr4,
        msr5,
        msr6,
        msr7,
        msr8,
        msr9,
        msr10,
        msr11,
        msr12,
        msr13,
        msr14,
        msr15,
        msr16,
        msr17,
        msr18,
        msr19,
        msr20,
      ];
      var instructions = data.meals[0].strInstructions;
      for (var i = 0; i < makeIt.length; i++) {
        if (makeIt[i] != null) {
          // console.log(msrAll[i]);
          var listEl3 = document.createElement("li");
          listEl3.textContent = makeIt[i]
          
        } 
        if (msrAll[i] != null){
          var listEl3 = document.createElement("li");
          // msrContent = msrAll[i]
          listEl3.textContent = msrAll[i] + " " + makeIt[i];
        }
        ul3.append(listEl3);
        document.getElementById("instructionsMeal").textContent = instructions;
      }
    });
}

// Modal Initilization
document.addEventListener("DOMContentLoaded", function () {
  // console.log(M);
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
  // console.log(elems[0]);
});
