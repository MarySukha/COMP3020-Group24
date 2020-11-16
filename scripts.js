
function menu_item_data(item_id) {
  console.log(item_id);
  let extras = [
    { name: 'extra_tomatoes', value: 'Extra Tomatoes' },
    { name: 'extra_cheese', value: 'Extra Cheese ($0.50)' },
    { name: 'extra_beef', value: 'Extra Beef Patty ($1.00)' },
    { name: 'extra_onion', value: 'Extra Onions' },
    { name: 'extra_pickle', value: 'Extra Pickles' },
  ];

  let excludes = [
    { name: 'no_tomatoes', value: 'No Tomatoes' },
    { name: 'no_cheese', value: 'No Cheese' },
    { name: 'no_beef', value: 'No Beef Patty' },
    { name: 'no_onion', value: 'No Onions' },
    { name: 'no_pickle', value: 'No Pickles' },
  ];
  let item_name = '<div id="menu_item_name"><h1>Cheeseburger & Fries Combo</h1><p>Delicious all-beef burger patty. Signature medium fries.</p></div>';
  let item_image = '<img id="menu_item_image" src="static/800px-Shake_Shack_burger_and_fries_(14129412503).jpg"/>';

  let item_extras = '<div id="menu_custom"><hr>Extra<hr><div id="extra">';
  extras.forEach(extra => {
    item_extras += '<input type="checkbox" name=' + extra.name + ' value=' + extra.value + '>';
    item_extras += '<label for=' + extra.name + '>' + extra.value + '</label><br/>';
  })
  item_extras += '</div>';

  let item_excludes = '<hr>Exclude<hr><div id="exclude">';
  excludes.forEach(exclude => {
    item_excludes += '<input type="checkbox" name=' + exclude.name + ' value=' + exclude.value + '>';
    item_excludes += '<label for=' + exclude.name + '>' + exclude.value + '</label><br/>';
  })
  item_excludes += '<hr></div></div>';

  let add_comments = '<p>Additional Instructions (allergies, special requests, etc.)</p>';
  add_comments += '<textarea id="add_comments"></textarea>';

  let temp = '<div class="menu_item">'
  temp += item_name + item_image + item_extras + item_excludes + add_comments;
  temp += '</div>';
  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="submit" class="menu_button" id="cancel_add">Cancel</button>';
  menu_buttons += '<button type="submit" class="menu_button" id="add_to_cart">Add To Cart</button>';
  menu_buttons += '</div>';
  return temp + menu_buttons;
}

// function restaurant_data(){
//   // This will go into the bubble on click
//   let restaurant_name = "McDonald's"
//   let logo_image = './static/logos/McDonalds_logo.png';
//   let restaurant_address = '1280 Pembina Highway'; 
//   let temp = 'Welcome to '+restaurant_name;
//   temp += '<img id ="restaurant_logo" src='+logo_image+' title="logo">';
//   temp += '<p>'+restaurant_address+'</p>';

//   let menu_buttons = '<div id="menu_buttons">';
//   menu_buttons += '<button type="submit" class="menu_button" id="cancel">Cancel</button>';
//   menu_buttons += '<button type="submit" class="menu_button" id="order_here">Order Here</button>';
//   menu_buttons += '</div>';
//   return temp+menu_buttons;
// }

function display_restaurant_menu() {
  let temp = '<div class="restaurant_menu">';
  let menu = restaurant_menus["McDonald's"];

  menu.forEach(category => {
    temp += '<h2>' + category.name + '</h2>';
    category.items.forEach(item => {
      temp += '<figure value="' + item.name + '"class="item">';
      temp += '<img src=' + item.img + '" class="resize" alt="' + item.name + '">';
      temp += '<figcaption class="caption"><b>' + item.name + '</b>';
      temp += '<br><p>' + item.calories + ' calories</p>' + item.desc;
      temp += '<br><h2>' + item.price + '</h2></figcaption>';
      temp += '</figure>';
    });
  });
  temp += "</div>";
  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="submit" class="menu_button" id="cancel_order">Cancel</button>';
  menu_buttons += '<button type="submit" class="menu_button" id="checkout">Checkout</button>';
  menu_buttons += '</div>';

  return temp + menu_buttons;
}

function selection_buttons() {
  let options = ["Sandwiches", "Burgers", "Desserts", "Barbecue", "Sushi", "Coffee", "Breakfast"];
  let temp = '';
  options.forEach(option => {
    temp += '<a href="#" class="btn btn--round">' + option + '</a>';
  });
  return temp;
}




function balloon_btn() {
  let restaurantName = ["McDona", "BurgerKing", "Wendys", "KFC", "Popeyes", "MaryBrown", "A&W", "FiveGuys", "Jollibee"];
  let restaurantLogo = [ { name: "McDonalds", link: "./static/logos/McDonalds_logo.png", ranking: 9.6}, 
  { name: "BurgerKing", link: "./static/logos/BurgerKing_logo.png", ranking: 8.8},
  { name:"Wendys", link: "./static/logos/Wendys_logo.jpg", ranking: 8.6}, 
  { name: "KFC", link: "./static/logos/KFC_logo.jpg", ranking: 8.2},
  { name: "Popeyes", link: "./static/logos/Popeyes_logo.jpg", ranking: 9.4}, 
  { name: "MaryBrown", link: "./static/logos/MaryBrown_logo.jpg", ranking: 9.6},
  { name:"A&W", link: "./static/logos/A&W_logo.png", ranking: 9.6}, 
  { name: "FiveGuys", link: "./static/logos/FiveGuys_logo.jpg", ranking: 8.9},
  { name: "Jollibee", link: "./static/logos/Jollibee_logo.jpg", ranking: 9.4}  ];
  let temp = '';
  let positionX = 5;
  restaurantLogo.forEach(rLogo=> {
    let size = ( 9.6 / 10) * 100;
    //let size = ( rLoge.ranking / 10) * 100;
    temp += '<div class="balloon" style="--left: '+positionX+'%; --hue: 0; --size: 80px;">';
    positionX += 10;
    temp += '<a href="#modal_data" class="balloon_individual"><img src='+rLogo.link+' alt="balloon_logo" style="width:'+size+'px;height:'+size+'px;"></a>';
    temp += '<div class="handle"></div>';
    temp += '</div>';
  }
  );
  return temp;
}


window.onload = function () {
  let modal = document.getElementById("myModal");
  let balloon_buttons = document.getElementById("balloon_buttons");
  let close = document.getElementById("close");
  let select_buttons = document.getElementById("select_buttons");
  let modal_data = document.getElementById("modal_data");

  select_buttons.innerHTML = selection_buttons();
  balloon_buttons.innerHTML = balloon_btn();

  balloon_buttons.onclick = function () {
    modal.style.display = "block";
    modal_data.innerHTML = display_restaurant_menu();
  }
  close.onclick = function () { modal.style.display = "none"; }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.path[1].className == "item") {
      modal_data.innerHTML = menu_item_data(event.path[1].getElementsByTagName('b')[0].innerText);
    } else if (event.target.id == "cancel_order") {
      modal.style.display = "none";
    } else if (event.target.id == "cancel_add") {
      modal_data.innerHTML = display_restaurant_menu();
    }
  }
}
