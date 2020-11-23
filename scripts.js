
let curr_restaurant = '';
let curr_tag = '';
let modal;
let modal_data;

function item_click(item_name){
  modal_data.innerHTML = menu_item_data(item_name);
}

function balloon_click(restaurant_name){
  modal.style.display = "block";
  curr_restaurant = restaurant_name;
  display_restaurant_menu();
}

function cancel_order(){
  clearCart();
  close_modal();
}

function close_modal(){
  curr_restaurant = "";
  modal.style.display = "none";
}

function display_restaurant_menu(){
  modal_data.innerHTML = restaurant_menu();
}

function menu_item_data(item_id){ //images currently used need to be replaced - blurry
  let temp = '<div class="menu_item">';
  let item = find_item(item_id);

  temp += '<div><h1 id="menu_item_name">'+item.name+'</h1>';
  temp += '<div id="menu_item_price">'+item.price+'</div>';
  temp += '<p>'+item.desc+'</p></div>';
  temp += '<img id="menu_item_image" src='+item.img+'/>';

  temp += '<form id="menu_custom">';
  if(item.custom.single){
    item.custom.single.forEach(category => {
      temp += '<hr>'+category.name+'<hr><div id="'+category.name+'">';
      category.options.forEach(option => {
        temp += '<input type="radio" id="'+option.name+'" name='+category.name+' value="'+option.value+'" price='+option.price+' checked="checked">';
        if(!option.price){
          temp += '<label for='+option.name+'>'+option.value+'</label><br/>';
        }
        else{
          temp += '<label for='+option.name+'>'+option.value+" ($"+option.price.toFixed(2)+")"+'</label><br/>';
        }
      });
      temp += '</div>';
    });
  }
  if(item.custom.multi){
    item.custom.multi.forEach(category => {
      temp += '<hr>'+category.name+'<hr><div id="'+category.name+'">';
      category.options.forEach(option => {
        temp += '<input type="checkbox" id="'+option.name+'"name='+category.name+' value="'+option.value+'" price='+option.price+'>';
        if(!option.price){
          temp += '<label for='+option.name+'>'+option.value+'</label><br/>';
        }
        else{
          temp += '<label for='+option.name+'>'+option.value+" ($"+option.price.toFixed(2)+")"+'</label><br/>';
        }
      });
      temp += '</div>';
    });
  }
  temp += '</form>';

  let add_comments = '<p>Additional Instructions (allergies, special requests, etc.)</p>';  
  add_comments += '<textarea id="add_comments"></textarea><p></p>';
  temp += add_comments+'</div>';
  
  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="button" class="menu_button" style="border-radius: 0 15px 0 0" id="cancel_add" onclick="display_restaurant_menu()">Cancel</button>';
  menu_buttons += '<button type="submit" class="menu_button" style="border-radius: 15px 0 0 0" id="add_to_cart">Add To Cart</button>';
  menu_buttons += '</div>';
  return temp+menu_buttons;
}

// function display_restaurant_data(){
//   // This will go into the bubble on click
//   let restaurant_name = "McDonald's"
//   let logo_image = './static/McDonalds_logo.png';
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

function restaurant_menu(){
  let menu = restaurant_menus[curr_restaurant];
  if(menu){
    let temp = '<h1>'+unescape(curr_restaurant)+'</h1>';
    temp += '<div class="restaurant_menu">';
    menu.forEach(category=>{
      temp += '<h2>'+category.name+'</h2>';
      category.items.forEach(item => {
        temp += '<div class="display_item" onclick="item_click(\''+item.name+'\')" value="'+item.name+'">';
        temp += '<img src='+item.img+'" class="resize" alt="'+item.name+'">';
        temp += '<b class="caption">'+item.name+'</b>';
        temp += '<div class="desc">'+item.calories+' calories <br>'+item.desc+'</div>';
        temp += '<h2 class="price"> $'+item.price+'</h2>';
        temp += '</div>';
      });
    });
    temp += "</div>";//close restaurant menu
    let menu_buttons = '<div id="menu_buttons">';
    menu_buttons += '<button type="submit" class="menu_button" id="cancel_order" style="border-radius: 0 15px 0 0" onclick="cancel_order()">Cancel</button>';
    menu_buttons += '<button type="submit" class="menu_button" id="checkout" style="border-radius: 15px 0 0 0">Checkout</button>';
    menu_buttons += '</div>';
  
    return temp+menu_buttons;
  }else{ return '<div>No mock data here, please try a different restaurant</div>'; }
}

function display_cart(){
  let temp = '<div class="cart_data">';
  temp += '<h1>'+unescape(curr_restaurant)+'</h1>';//add address here if we have time
  cart.forEach(item => {
    let item_data = find_item(item.name);
    temp += '<div class="display_item" value="'+item.name+'">';
    temp += '<img  onclick="item_click(\''+item.name+'\')" src='+item_data.img+'" class="resize" alt="'+item.name+'">';
    temp += '<div  onclick="item_click(\''+item.name+'\')" class="caption"><b>'+item.name+' $'+item_data.price+'</b></div>';
    temp += '<div  onclick="item_click(\''+item.name+'\')" class="custom">';
    if(item.custom){
      console.log(item);
      item.custom.forEach(custom =>{
        temp += '<div>'+custom.value;
        if(custom.price != 0){temp +=' $'+custom.price;}
        temp += '</div>';
      })
      temp += '</div>';//close custom div
      temp += '<br><h2 class="price"> $'+item.price+'</h2>';//total price
      temp += '</figure>';
      temp += '<div class="remove_item" id='+item_data.id+' onclick="removeItem('+item_data.id+')">&times;</div>';
      temp += '</div>';//close display item
    }
  });
  temp += '<p>Delivery Instructions</p>';  
  temp += '<textarea id="delivery_instructions"></textarea><p></p>';
  temp += '</div>'; //closes the cart data div
  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="button" class="menu_button" style="border-radius: 0 15px 0 0" id="add_more" onclick="display_restaurant_menu()">Add More</button>';
  menu_buttons += '<div id="cart_total"><b>Total: $'+totalCost().subtotal+'</b></div>';
  menu_buttons += '<button type="button" class="menu_button" style="border-radius: 15px 0 0 0" id="place_order" onclick="alert(\'Thanks!\')">Place Order</button>';
  menu_buttons += '</div>';
  return temp+menu_buttons;
}

function find_item(item_name){
  let menu = restaurant_menus[curr_restaurant];
  let item;
  menu.forEach(category => {
    let temp = category.items.find(menu_item => item_name == menu_item.name);
    if(temp){ item = temp; }
  });
  return item;
}

function balloon_btn(restaurantLogo) {
  let temp = '';
  let positionX = 20;
  restaurantLogo.forEach((rLogo, i)=> {
    let size = 96;
    if((i+1)%2){temp += '<div class="first_row">';}
    else {temp += '<div class="second_row">';}
    temp += '<div class="balloon" onclick="balloon_click(\''+rLogo.name+'\')" id="'+rLogo.name+'" style="--left: '+positionX+'px; --opacity: 0; --size: 80px;">';
    positionX += 75;
    temp += '<a href="#modal_data" class="balloon_individual">';
    temp += '<img class="balloon_logo" id="'+rLogo.name+'"src='+rLogo.logo+' alt="balloon_logo" style="width:'+size+'px;height:'+size+'px;"></a>';
    temp += '<div class="balloon_name"><h1>'+unescape(rLogo.name)+'</h1></div>';
    temp += '<div class="handle"></div>';
    temp += '</div>';
    temp += '</div>';
  });
  return temp;
}

function selection_buttons() {
  let options = [
    "Burgers", "Desserts", "Pizza",
    "Sushi", "Coffee", "Breakfast", "Chicken", 
    "Vegeterian", "Bakery", "Greek"
  ];
  let temp='';
  options.forEach(option=>{
    temp+='<a href="#" onclick="select_button_click(\''+option+'\')" class="btn btn__outline btn--round" id="'+option+'">'+option+'</a>';
  });
 return temp;
}

function select_button_click(value){
  let elems = document.getElementsByClassName('btn--round');
  for (let el of elems) {el.style.cssText = 'background-color: #fff; color: #191919;';}
  if (value == curr_tag){ 
    value = ''; 
    curr_tag = '';
    searchTags(value);
  } else{
    curr_tag = value;
    searchTags(value);
    document.getElementById(value).style.cssText = "background-color: #8c1119; color: #fff;";
  }
  
}

function searchTags(value) {
  let elems = document.getElementsByClassName('btn--round');
  for (let el of elems) {el.style.cssText = 'background-color: #fff; color: #191919;';}
  value = value.toLowerCase();
  let results = [];
  restaurantMeta.forEach(restaurant => {
    let fit = false;
    restaurant.tags.forEach(tag => {
      if(tag.includes(value)){ fit = true; }
    });
    if(fit){results.push(restaurant);}
  });
  balloon_buttons.innerHTML = balloon_btn(results);
}

window.onload = function(){
  modal = document.getElementById("myModal");
  modal_data = document.getElementById("modal_data");
  let balloon_buttons = document.getElementById("balloon_buttons");
  let close = document.getElementById("close");
  let select_buttons = document.getElementById("select_buttons");

  select_buttons.innerHTML = selection_buttons();
  balloon_buttons.innerHTML = balloon_btn(restaurantMeta);
  close.onclick = function () {close_modal()};

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if (event.target.id == "checkout"){
      modal_data.innerHTML = display_cart();
    }else if (event.target.id == "add_to_cart") {
      display_restaurant_menu();
    }
  }
}
