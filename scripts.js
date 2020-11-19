
let curr_restaurant = '';
function menu_item_data(item_id){ //images currently used need to be replaced - blurry
  let menu = restaurant_menus["McDonald's"];
  let temp = '<div class="menu_item">';
  let item = null;

  menu.forEach(category => {
    category.items.forEach(menu_item => {
      if(item_id == menu_item.name){item = menu_item;}
    })
  });

  temp += '<div><h1 id="menu_item_name">'+item.name+'</h1>';
  temp += '<div id="menu_item_price">$'+item.price+'</div>';
  temp += '<p>'+item.desc+'</p></div>';
  temp += '<img id="menu_item_image" src='+item.img+'/>';

  temp += '<form id="menu_custom">';
  if(item.custom.single){
    item.custom.single.forEach(category => {
      temp += '<hr>'+category.name+'<hr><div id="'+category.name+'">';
      category.options.forEach(option => {
        temp += '<input type="radio" id="'+option.name+'" name='+category.name+' value="'+option.value+'" price='+option.price+'>';
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
  add_comments += '<textarea id="add_comments"></textarea>';
  temp += add_comments+'</div>';
  
  let menu_buttons = '<div id="menu_buttons">';
  menu_buttons += '<button type="button" class="menu_button" id="cancel_add">Cancel</button>';
  menu_buttons += '<button type="submit" class="menu_button" id="add_to_cart">Add To Cart</button>';
  menu_buttons += '</div>';
  return temp+menu_buttons;
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

// function restaurant_data(){
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

function balloon_btn(restaurantLogo) {
  let temp = '';
  let positionX = 2;
  restaurantLogo.forEach((rLogo, i)=> {
    let size = 96;
    if((i+1)%2){temp += '<div id="first_row">';}
    else {temp += '<div id="second_row">';}
    temp += '<div class="balloon" style="--left: '+positionX+'%; --opacity: 0; --size: 80px;">';
    positionX += 5;
    temp += '<a href="#modal_data" class="balloon_individual">';
    temp += '<img class="balloon_logo" id="'+rLogo.name+'"src='+rLogo.logo+' alt="balloon_logo" style="width:'+size+'px;height:'+size+'px;"></a>';
    temp += '<div class="balloon_name"><h1>'+rLogo.name+'</h1></div>';
    temp += '<div class="handle"></div>';
    temp += '</div>';
    temp += '</div>';
  });
  return temp;
}

function display_restaurant_menu(){
  let menu = restaurant_menus[curr_restaurant];
  if(menu){
    let temp = '<h1>'+curr_restaurant+'</h1>';
    temp += '<div class="restaurant_menu">';
    menu.forEach(category=>{
      temp += '<h2>'+category.name+'</h2>';
      category.items.forEach(item => {
        temp += '<figure value="'+item.name+'"class="item">';
        temp += '<img src='+item.img+'" class="resize" alt="'+item.name+'">';
        temp += '<figcaption class="caption"><b>'+item.name+'</b>';
        temp += '<br><p>'+item.calories+' calories</p>'+item.desc;
        temp += '<br><h2>'+item.price+'</h2></figcaption>';
        temp += '</figure>';
      });
    });
    temp += "</div>";
    let menu_buttons = '<div id="menu_buttons">';
    menu_buttons += '<button type="submit" class="menu_button" id="cancel_order">Cancel</button>';
    menu_buttons += '<button type="submit" class="menu_button" id="checkout">Checkout</button>';
    menu_buttons += '</div>';
  
    return temp+menu_buttons;
  }else{ return '<div>No mock data here, try a different restaurant</div>'; }
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
  searchTags(value);
  let elems = document.getElementsByClassName('btn--round');
  for (let el of elems) {el.style.cssText = 'background-color: #fff; color: #191919;';}
  document.getElementById(value).style.cssText = "background-color: #aaa; color: #fff;";
}


window.onload = function(){
  let modal = document.getElementById("myModal");
  let balloon_buttons = document.getElementById("balloon_buttons");
  let close = document.getElementById("close");
  let select_buttons = document.getElementById("select_buttons");
  let modal_data = document.getElementById("modal_data");
  let itemName;

  select_buttons.innerHTML = selection_buttons();
  balloon_buttons.innerHTML = balloon_btn(restaurantMeta);


  balloon_buttons.onclick = function (event) {
    modal.style.display = "block";
    curr_restaurant= event.target.id;
    modal_data.innerHTML = display_restaurant_menu();
  }
  close.onclick = function () {
    curr_restaurant = "";
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if(event.path[1].className == "item"){
      itemName = event.path[1].getElementsByTagName('b')[0].innerText;
      modal_data.innerHTML = menu_item_data(itemName);
    }else if(event.target.id == "cancel_order"){ //closes modal + clears cart
      clearCart();
      modal.style.display = "none";
    }else if (event.target.id == "cancel_add"){
      modal_data.innerHTML = display_restaurant_menu();
    }else if (event.target.id == "add_to_cart"){
      modal_data.innerHTML = display_restaurant_menu();
    }else if (event.target.id == "checkout"){
      console.log(listCart());
      console.log(totalCost());
    }
  }
}
