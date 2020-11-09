let i = 0;
function increment(){
  return ++i;
}

function menu_item_data(){
  let extras = [
    {name: 'extra_tomatoes', value: 'Extra Tomatoes'},
    {name: 'extra_cheese', value: 'Extra Cheese ($0.50)'},
    {name: 'extra_beef', value: 'Extra Beef Patty ($1.00)'},
    {name: 'extra_onion', value: 'Extra Onions'},
    {name: 'extra_pickle', value: 'Extra Pickles'},
  ];

  let excludes = [
    {name: 'no_tomatoes', value: 'No Tomatoes'},
    {name: 'no_cheese', value: 'No Cheese'},
    {name: 'no_beef', value: 'No Beef Patty'},
    {name: 'no_onion', value: 'No Onions'},
    {name: 'no_pickle', value: 'No Pickles'},
  ];
  let item_name = '<div id="menu_item_name"><h1>Cheeseburger & Fries Combo</h1><p>Delicious all-beef burger patty. Signature medium fries.</p></div>';
  let item_image = '<img id="menu_item_image" src="static/800px-Shake_Shack_burger_and_fries_(14129412503).jpg"/>';
  
  let item_extras = '<div id="menu_custom"><hr>Extra<hr><div id="extra">';
  extras.forEach(extra => {
    item_extras += '<input type="checkbox" name='+extra.name+' value='+extra.value+'>';
    item_extras += '<label for='+extra.name+'>'+extra.value+'</label><br/>';
  })
  item_extras += '</div>';

  let item_excludes = '<hr>Exclude<hr><div id="exclude">';
  excludes.forEach(exclude => {
    item_excludes += '<input type="checkbox" name='+exclude.name+' value='+exclude.value+'>';
    item_excludes += '<label for='+exclude.name+'>'+exclude.value+'</label><br/>';
  })
  item_excludes += '<hr></div>';

  let add_comments = '<p>Additional Instructions (allergies, special requests, etc.)</p>';  
  add_comments += '<textarea id="add_comments"></textarea>';

  let temp = item_name+item_image+item_extras+item_excludes+add_comments;
  return temp;
}

function selection_buttons() {
  let options = ["Sandwiches", "Burgers", "Desserts", "Barbecue", "Sushi", "Coffee", "Breakfast"];
  let temp='';
  options.forEach(option=>{
    temp+='<a href="#" class="btn btn__outline--Vegetarian btn--round">'+option+'</a>';
  })
 return temp;
}

window.onload = function(){
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let close = document.getElementsByClassName("close")[0];
  let select_buttons = document.getElementById("select_buttons");
  let menu_item = document.getElementById("menu_item");

  select_buttons.innerHTML = selection_buttons();


  btn.onclick = function () {
    modal.style.display = "block";
    menu_item.innerHTML = menu_item_data();
  }

  close.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


