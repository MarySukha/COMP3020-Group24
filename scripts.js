
let curr_restaurant = '';
let curr_tag = '';
let modal;
let modal_data;
let curr_item = {};
let curr_count = 1;
let address="";

function item_click(item_name){
  modal_data.innerHTML = menu_item_data(item_name);
}

function balloon_click(restaurant_name){
  modal.style.display = "block";
  curr_restaurant = restaurant_name;
  modal_data.innerHTML = display_restaurant_data();
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
  curr_count = 1;
}

function menu_item_data(item_id){
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
        if(option.price == item.price || option.price == 0){
          temp += '<input type="radio" id="'+option.name+'" name='+category.name+' value="'+option.value+'" price='+option.price+' checked="checked">';
        }else{
          temp += '<input type="radio" id="'+option.name+'" name='+category.name+' value="'+option.value+'" price='+option.price+'>';
        }
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
  menu_buttons += '<button type="button" class="menu_button" style="border-radius: 0 15px 15px 0" id="cancel_add" onclick="display_restaurant_menu()">Cancel</button>';
  menu_buttons += '<button id="count_up" onclick="edit_count(1)">+</button><p id="count">'+curr_count+'</p><button id="count_down" onclick="edit_count(-1)">-</button>';
  menu_buttons += '<button type="submit" class="menu_button" style="border-radius: 15px 0 0 15px" id="add_to_cart">Add To Cart</button>';
  menu_buttons += '</div>';
  return temp+menu_buttons;
}

function item_edit(item_id){
  modal_data.innerHTML = menu_item_edit(cart.find(item => item_id == item.id));
}

function menu_item_edit(cart_item){
  curr_item = cart_item;
  curr_count = cart_item.count;
  let temp = '<div class="menu_item">';
  let item = find_item(cart_item.name);

  temp += '<div><h1 id="menu_item_name">'+item.name+'</h1>';
  temp += '<div id="menu_item_price">'+item.price+'</div>';
  temp += '<p>'+item.desc+'</p></div>';
  temp += '<img id="menu_item_image" src='+item.img+'/>';

  temp += '<form id="menu_custom">';
  if(item.custom.single){
    item.custom.single.forEach(category => {
      temp += '<hr>'+category.name+'<hr><div id="'+category.name+'">';
      category.options.forEach(option => {
        let checked = cart_item.custom.find(el => el.name == option.name);
        if(checked){
          temp += '<input type="radio" id="'+option.name+'" name='+category.name+' value="'+option.value+'" price='+option.price+' checked="checked">';
        }else{
          temp += '<input type="radio" id="'+option.name+'" name='+category.name+' value="'+option.value+'" price='+option.price+'>';
        }
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
        let checked = cart_item.custom.find(el => el.name == option.name);
        if(checked){
          temp += '<input type="checkbox" id="'+option.name+'"name='+category.name+' value="'+option.value+'" price='+option.price+' checked="checked">';
        }else{
          temp += '<input type="checkbox" id="'+option.name+'"name='+category.name+' value="'+option.value+'" price='+option.price+'>';
        }
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
  if(cart_item.custom.length > 0 && cart_item.custom[cart_item.custom.length-1].name == "comment"){
    add_comments += '<textarea id="add_comments">'+cart_item.custom[cart_item.custom.length-1].value+'</textarea><p/>';
  }else{
    add_comments += '<textarea id="add_comments"></textarea><p/>';
  }
  temp += add_comments+'</div>';
  
  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="button" class="menu_button" style="border-radius: 0 15px 15px 0" id="cancel_edit">Cancel</button>';
  menu_buttons += '<button id="count_up" onclick="edit_count(1)">+</button><p id="count">'+curr_count+'</p><button id="count_down" onclick="edit_count(-1)">-</button>';
  menu_buttons += '<button type="submit" class="menu_button" style="border-radius: 15px 0 0 15px" id="edit_cart">Edit Item</button>';
  menu_buttons += '</div>';
  return temp+menu_buttons;
}

function display_restaurant_data(){
  let restaurant = restaurantMeta.find(el => el.name == curr_restaurant);
  let temp = 'Welcome to '+unescape(restaurant.name);
  temp += '<img id ="restaurant_logo" src='+restaurant.logo+' title="logo">';
  temp += '<p>'+restaurant.address+'</p>';
  temp += '<div id="ranking">'+restaurant.ranking+'</div>';
  temp += '<div id="delivery_time">'+restaurant.time+'</div>';

  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="submit" class="menu_button" id="cancel" style="border-radius: 0 15px 15px 0" onclick="close_modal()">Cancel</button>';
  menu_buttons += '<button type="submit" class="menu_button" id="order_here" style="border-radius: 15px 0 0 15px" onclick="display_restaurant_menu()">Order Here</button>';
  menu_buttons += '</div>';
  return temp+menu_buttons;
}

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
    menu_buttons += '<button type="submit" class="menu_button" id="cancel_order" style="border-radius: 0 15px 15px 0" onclick="cancel_order()">Cancel</button>';
    menu_buttons += '<div id="cart_total"><b>Subtotal: $'+totalCost().subtotal+'</b></div>';
    menu_buttons += '<button type="submit" class="menu_button" id="checkout" style="border-radius: 15px 0 0 15px">Checkout</button>';
    menu_buttons += '</div>';
  
    return temp+menu_buttons;
  }else{ return '<div>The resturant you are viewing is currently unavilable on Order Me Up, please try another resturant.</div>'; }
}

function display_cart(){
  let total_cost = totalCost();
  let temp = '<div class="cart_data">';
  temp += '<h1>'+unescape(curr_restaurant)+" To: "+address+'</h1>';//add address here if we have time
  cart.forEach(item => {
    let item_data = find_item(item.name);
    temp += '<div class="display_item" value="'+item.name+'">';
    if(item.count > 1){
      temp+= '<div class="item_count">x'+item.count+'</div>';
    }
    temp += '<img  onclick="item_edit(\''+item.id+'\')" src='+item_data.img+'" class="resize" alt="'+item.name+'">';
    temp += '<div  onclick="item_edit(\''+item.id+'\')" class="caption"><b>'+item.name+' $'+item_data.price+'</b></div>';
    temp += '<div  onclick="item_edit(\''+item.id+'\')" class="custom">';
    if(item.custom){
      item.custom.forEach(custom =>{
        temp += '<li>'+custom.value;
        if(custom.price != 0){temp +=' $'+custom.price;}
        temp += '</li>';
      })
      temp += '</div>';//close custom div
      temp += '<br><h2 class="price"> $'+(item.price*item.count).toFixed(2)+'</h2>';//total price
      temp += '</figure>';
      temp += '<div class="remove_item" id='+item.id+' onclick="removeItem('+item.id+')">&times;</div>';
      temp += '</div>';//close display item
    }
  });
  temp += '<hr>';
  temp += '<div id="cart_details">';
  temp += '<div class="fee">Subtotal: $'+total_cost.subtotal+'</div>';
  temp += '<div class="fee">GST: $'+total_cost.gst+'</div>';
  temp += '<div class="fee">PST: $'+total_cost.pst+'</div>';
  temp += '<div class="fee">Delivery Fee: $'+total_cost.delivery+'</div>';
  temp += '<div class="fee">Total: $'+total_cost.total+'</div>';
  temp += '</div>';//close cart details div

  temp += '<p id="di_text">Delivery Instructions</p>';  
  temp += '<textarea id="delivery_instructions"></textarea><p></p>';
  temp += '</div>'; //closes the cart data div
  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="button" class="menu_button" style="border-radius: 0 15px 15px 0" id="add_more" onclick="display_restaurant_menu()">Add More</button>';
  menu_buttons += '<div id="cart_total"><b>Total: $'+total_cost.total+'</b></div>';
  menu_buttons += '<button type="button" class="menu_button" style="border-radius: 15px 0 0 15px" id="place_order" onclick="alert(\'Thanks!\')">Place Order</button>';
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
  let landing = document.getElementById("landing");
  let address_form = document.getElementById("address_prompt");

  address_form.onsubmit = function () {
    landing.style.display = "none";
    address = document.getElementById("address").value;
    let temp = "Deliver to: "+address+" &#9998;";
    document.getElementById("delivery_address").innerHTML = temp;
    return false;
  }

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
    }else if(event.target.id == "cancel_edit"){
      modal_data.innerHTML = display_cart();
      curr_item = {};
      curr_count = 1;
    }else if(event.target.id == "address_submit"){
      landing.style.display = "none";
      address = document.getElementById("address").value;
      let temp = "Deliver to: "+address+" &#9998;";
      document.getElementById("delivery_address").innerHTML = temp;
    }
  }

}
