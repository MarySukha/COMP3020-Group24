function menu_item_data(item_id){ //images currently used need to be replaced - blurry
  console.log(item_id);
  var extras = [];
  var sizes = [];
  var excludes = [];
  var item_name, item_image;

  if(item_id == "Egg McMuffin"){
    extras = [
      {name: 'extra_cheese', value: 'Extra Cheese', price: 0.59},
      {name: 'extra_bacon', value: 'Extra Canadian Back Bacon', price: 0.79},
      {name: 'extra_egg', value: 'Extra Round Egg', price: 1.39},
      {name: 'extra_butter', value: 'Extra Butter', price: 0.00},
      {name: 'add_bacon', value: 'Add Bacon Strips', price: 1.39},
      {name: 'add_mayo', value: 'Add Mayo-Style Sauce', price: 0.30},
      {name: 'add_lettuce', value: 'Add Leaf Lettuce', price: 0.30},
      {name: 'add_tomato', value: 'Add Tomato', price: 0.59}
    ];

    sizes = [];

    excludes = [
      {name: 'remove_cheese', value: 'Remove Cheese'},
      {name: 'remove_bacon', value: 'Remove Canadian Back Bacon'},
      {name: 'remove_egg', value: 'Remove Round Egg'},
      {name: 'remove_muffin', value: 'Remove English Muffin'},
      {name: 'remove_butter', value: 'Remove Butter'}
    ];

    item_name = '<div id="menu_item_name"><h1>Egg McMuffin</h1><p>Our signature breakfast sandwich. boasts one freshly-cracked Canada Grade A large egg topped with Canadian bacon and a slice of tasty processed cheddar cheese, sitting happily on a toasted English muffin.</p></div>';
    item_image = '<img id="menu_item_image" src="https://imgur.com/CuEI33T.jpg"/>';
  }
  else if(item_id == "Hamburger"){
    extras = [
      {name: 'extra_mustard', value: 'Extra Mustard', price: 0.00},
      {name: 'extra_ketchup', value: 'Extra Ketchup', price: 0.00},
      {name: 'extra_onions', value: 'Extra Onions', price: 0.00},
      {name: 'extra_pickles', value: 'Extra Pickles', price: 0.00},
      {name: 'add_bacon', value: 'Add Bacon Strips', price: 1.39},
      {name: 'add_mayo', value: 'Add Mayo-Style Sauce', price: 0.30},
      {name: 'add_lettuce', value: 'Add Shredded Lettuce', price: 0.30},
      {name: 'add_tomato', value: 'Add Tomato', price: 0.59}
    ];

    sizes = [];

    excludes = [
      {name: 'remove_mustard', value: 'Remove Mustard'},
      {name: 'remove_ketchup', value: 'Remove Ketchup'},
      {name: 'remove_onions', value: 'Remove Onions'},
      {name: 'remove_pickles', value: 'Remove Pickles'},
      {name: 'remove_meat', value: 'Remove Meat Patty'},
      {name: 'remove_bun', value: 'Remove Bun'}
    ];

    item_name = '<div id="menu_item_name"><h1>Hamburger</h1><p>The comforting taste of the juicy and delicious 100% Canadian beef burger, topped with tangy pickles, ketchup, mustard and the sweet bite of onion, all on a freshly toasted bun. Just like you remember.</p></div>';
    item_image = '<img id="menu_item_image" src="https://imgur.com/ITMjzP0.jpg"/>';
  }
  else if(item_id == "World Famous Fries"){
    extras = []; // change extras with size selection

    sizes = [
      {name: 'size', value: 'Small', price: 2.19},
      {name: 'size', value: 'Medium', price: 3.19},
      {name: 'size', value: 'Large', price: 3.89}
    ];

    excludes = [
      {name: 'remove_salt', value: 'Remove Salt'}
    ];

    item_name = '<div id="menu_item_name"><h1>World Famous Fries</h1><p>McDonald\'s World Famous Fries are always a delicious choice. Cut from whole potatoes grown on Canadian farms, our fries are cooked to golden perfection in a vegetable oil blend. Mmm... of course you want fries with that!</p></div>';
    item_image = '<img id="menu_item_image" src="https://imgur.com/a8ry3fJ.jpg"/>';
  }
  else if(item_id == "Fruitopia Strawberry Passion"){
    //add size selection
    
    extras = [
      {name: 'extra_ice', value: 'Extra Ice', price: 0.00}
    ];

    sizes = [
      {name: 'size', value: 'Child', price: 1.49},
      {name: 'size', value: 'Small', price: 2.09},
      {name: 'size', value: 'Medium', price: 2.69},
      {name: 'size', value: 'Large', price: 3.19}
    ];

    excludes = [
      {name: 'remove_ice', value: 'Remove Ice'}
    ];

    item_name = '<div id="menu_item_name"><h1>Fruitopia Strawberry Passion</h1><p>Real fruit beverage with added vitamin C, no artificial flavours and no caffeine.</p></div>';
    item_image = '<img id="menu_item_image" src="https://imgur.com/jKQQ075.jpg"/>';
  }
  else{
    extras = [
      {name: 'extra_tomatoes', value: 'Extra Tomatoes'},
      {name: 'extra_cheese', value: 'Extra Cheese ($0.50)'},
      {name: 'extra_beef', value: 'Extra Beef Patty ($1.00)'},
      {name: 'extra_onion', value: 'Extra Onions'},
      {name: 'extra_pickle', value: 'Extra Pickles'},
    ];

    excludes = [
      {name: 'no_tomatoes', value: 'No Tomatoes'},
      {name: 'no_cheese', value: 'No Cheese'},
      {name: 'no_beef', value: 'No Beef Patty'},
      {name: 'no_onion', value: 'No Onions'},
      {name: 'no_pickle', value: 'No Pickles'},
    ];

    item_name = '<div id="menu_item_name"><h1>Cheeseburger & Fries Combo</h1><p>Delicious all-beef burger patty. Signature medium fries.</p></div>';
    item_image = '<img id="menu_item_image" src="static/800px-Shake_Shack_burger_and_fries_(14129412503).jpg"/>';
  }
  let hold1 = '<div id="menu_custom">';

  let item_extras = '<hr>Extra<hr><div id="extra">';
  extras.forEach(extra => {
    item_extras += '<input type="checkbox" name='+extra.name+' value='+extra.value+' price='+extra.price+'>';
    if(extra.price === 0.00){
      item_extras += '<label for='+extra.name+'>'+extra.value+'</label><br/>';
    }
    else{
      item_extras += '<label for='+extra.name+'>'+extra.value+" ($"+extra.price.toFixed(2)+")"+'</label><br/>';
    }

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

  // have to adjust so that only one can be selected
  let item_sizes = '<hr>Sizes<hr><div id="sizes">';
  sizes.forEach(size => {
    item_sizes += '<input type="radio" name='+size.name+' value='+size.value+' price='+size.price+'>';
    item_sizes += '<label for='+size.name+'>'+size.value+" ($"+size.price.toFixed(2)+")"+'</label><br>';
  })
  item_sizes += '</div>';

  let item_excludes = '<hr>Exclude<hr><div id="exclude">';
  excludes.forEach(exclude => {
    item_excludes += '<input type="checkbox" name=' + exclude.name + ' value=' + exclude.value + '>';
    item_excludes += '<label for=' + exclude.name + '>' + exclude.value + '</label><br/>';
  })
  item_excludes += '<hr></div>';

  let hold2 = '</div>';

  let add_comments = '<p>Additional Instructions (allergies, special requests, etc.)</p>';
  add_comments += '<textarea id="add_comments"></textarea>';

  let temp = '<div class="menu_item">' 
  temp += item_name+item_image+hold1
  if(extras !== undefined && extras.length != 0){
    temp += item_extras;
  }
  if(sizes !== undefined && sizes.length != 0){
    temp += item_sizes;
  }
  if(excludes !== undefined && excludes.length != 0){
    temp += item_excludes;
  }
  temp += hold2+add_comments+'</div>';
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
  let restaurantName = ["McDonalds", "Burger King", "Wendys", "KFC", "Popeyes", "MaryBrown", "A&W", "Five Guys", "Jollibee"];
  let restaurantLogo = [ { name: "McDonalds", link: "./static/logos/McDonalds_logo.png", ranking: 9.6}, 
  { name: "Burger King", link: "./static/logos/BurgerKing_logo.png", ranking: 8.8},
  { name:"Wendys", link: "./static/logos/Wendys_logo.jpg", ranking: 8.6}, 
  { name: "KFC", link: "./static/logos/KFC_logo.jpg", ranking: 8.2},
  { name: "Popeyes", link: "./static/logos/Popeyes_logo.jpg", ranking: 9.4}, 
  { name: "Mary Brown", link: "./static/logos/MaryBrown_logo.jpg", ranking: 9.6},
  { name:"A&W", link: "./static/logos/A&W_logo.png", ranking: 9.6}, 
  { name: "Five Guys", link: "./static/logos/FiveGuys_logo.jpg", ranking: 8.9},
  { name: "Jollibee", link: "./static/logos/Jollibee_logo.jpg", ranking: 9.4}  ];
  let temp = '';
  let positionX = 5;
  restaurantLogo.forEach(rLogo=> {
    let size = ( 9.6 / 10) * 100;
    //let size = ( rLoge.ranking / 10) * 100;
    temp += '<div class="balloon" style="--left: '+positionX+'%; --hue: 0; --size: 80px;">';
    positionX += 10;
    temp += '<a href="#modal_data" class="balloon_individual"><img src='+rLogo.link+' alt="balloon_logo" style="width:'+size+'px;height:'+size+'px;"></a>';
    temp += '<div class="baloon_name">'+rLogo.name+'</div>';
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
  var itemName, itemPrice;

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
    }else if(event.path[1].className == "item"){
      itemName = event.path[1].getElementsByTagName('b')[0].innerText;
      itemPrice = Number(event.path[1].getElementsByTagName('h2')[0].innerText);
      modal_data.innerHTML = menu_item_data(itemName);
    }else if(event.target.id == "cancel_order"){ //closes modal + clears cart
      clearCart();
      modal.style.display = "none";
    } else if (event.target.id == "cancel_add") {
      modal_data.innerHTML = display_restaurant_menu();
    }
    else if (event.target.id == "add_to_cart"){
      addItem(itemName, itemPrice, 1);
      modal_data.innerHTML = display_restaurant_menu();
    }
    else if (event.target.id == "checkout"){
      console.log(listCart());
      console.log(totalCost());
    }
  }
}


var cart = [];

var Item = function(name, price, count){
  this.name = name
  this.price = price
  this.count = count
};

function addItem(name, price, count){
  for(var i in cart){
    if (cart[i].name === name){
      cart[i].count += count;
      return;
    }
  }
  var item = new Item(name, price, count);
  cart.push(item);
  console.log(item);
}

function removeItem(name){
  for(var i in cart){
    if(cart[i].name === name){
      cart[i].count--;
      if(cart[i].count === 0){
        cart.splice(i, 1);
      }
      break;
    }
  }
}

function clearCart(){
  cart = [];
}

function totalCost(){
  var totalCost = 0;
  var cost = 0;

  for(var i in cart){
    totalCost += (cart[i].price * cart[i].count);
  }
  return totalCost.toFixed(2);
}

function listCart(){
  var cartCopy = [];
  for(var i in cart){
    var item = cart[i];
    var itemCopy = {};
    for(var p in item){
      itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}
