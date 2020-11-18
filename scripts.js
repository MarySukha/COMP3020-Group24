
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

function balloon_btn() {
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
  });
  return temp;
}

function display_restaurant_menu(){
  let temp = '<div class="restaurant_menu">';
  let menu = restaurant_menus["McDonald's"];
  
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
}

function selection_buttons() {
  let options = ["Sandwiches", "Burgers", "Desserts", "Barbecue", "Sushi", "Coffee", "Breakfast"];
  let temp='';
  options.forEach(option=>{
    temp+='<a href="#" class="btn btn__outline--Vegetarian btn--round">'+option+'</a>';
  });
 return temp;
}

window.onload = function(){
  let modal = document.getElementById("myModal");
  let balloon_buttons = document.getElementById("balloon_buttons");
  let close = document.getElementById("close");
  let select_buttons = document.getElementById("select_buttons");
  let modal_data = document.getElementById("modal_data");
  let item_form = document.getElementById("menu_custom");
  var itemName, itemPrice;

  select_buttons.innerHTML = selection_buttons();
  balloon_buttons.innerHTML = balloon_btn();


  balloon_buttons.onclick = function () {
    modal.style.display = "block";
    modal_data.innerHTML = display_restaurant_menu();
  }
  close.onclick = function () {modal.style.display = "none";}

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