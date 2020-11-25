let cart = [];
let id_var = 0;

class Item {
  constructor(name, price, count, custom, id) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.custom = custom;
    this.id = id;
  }
}

function addItem(name, price, custom){
  let basePrice = Number(price);
  let addOns = Number(0);
  for(let i in cart){
    if (cart[i].name === name && (JSON.stringify(cart[i].custom)==JSON.stringify(custom))){
      cart[i].count += curr_count;
      return;
    }
  }
  for(let i in custom){
    if(custom[i].type == "multi"){
      addOns += Number(custom[i].price);
    }else if(custom[i].type == "single" && Number(custom[i].price) > 0){
      basePrice = Number(custom[i].price);
    }
  }
  let totalPrice = Number(basePrice+addOns);
  let item = new Item(name, totalPrice.toFixed(2), curr_count, custom, id_var++);
  cart.push(item);
  curr_count = 1;
  console.log(cart);
  if(curr_item.id != null){
    modal_data.innerHTML = display_cart();
    curr_item = {};
  }
}

function removeItem(id){
  cart = cart.filter( item => item.id != id );
  modal_data.innerHTML = display_cart();
}

function clearCart(){
  cart = [];
}

function edit_count(val){
  temp = curr_count + val;
  if(temp > 0){curr_count = temp;}
  document.getElementById("count").innerHTML = curr_count;
}

function totalCost(){
  let cost = 0, taxTotal = 0, totalCost = 0;
  let taxPercentGST = 0.05;
  let taxPercentPST = 0.07;
  let delivery = 5;
  let result = {};
  for(let i in cart){
    cost += (cart[i].price * cart[i].count);
  }
  gst = cost*taxPercentGST;
  pst = cost*taxPercentPST;
  totalCost = cost + gst + pst + delivery;
  result = {subtotal: cost.toFixed(2), delivery: delivery.toFixed(2), gst: gst.toFixed(2), pst: pst.toFixed(2), total: totalCost.toFixed(2)}
  return result;
}

function listCart(){
  let cartCopy = [];
  for(let i in cart){
    let item = cart[i];
    let itemCopy = {};
    for(let p in item){
      itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}

$("#add_to_cart").live("click", function () {
  let item_name = document.getElementById("menu_item_name").innerHTML;
  let item_price = document.getElementById("menu_item_price").innerHTML;
  let custom = [];
  $("input:checkbox:checked").each(function () {
      custom.push({
        type: "multi",
        name: $(this).attr("id"),
        value: $(this).val(),
        price: $(this).attr("price"),
      });
  });
  $("input:radio:checked").each(function () {
    custom.push({
      type: "single",
      name: $(this).attr("id"),
      value: $(this).val(),
      price: $(this).attr("price"),
    });
  });
  if($("textarea").val()){ custom.push({ name: "comment", value: $("textarea").val(), price: 0 })};
  addItem(item_name, item_price, custom);
  console.log(custom)
});

$("#edit_cart").live("click", function () {
  let item_name = document.getElementById("menu_item_name").innerHTML;
  let item_price = document.getElementById("menu_item_price").innerHTML;
  let custom = [];
  $("input:checkbox:checked").each(function () {
      custom.push({
        name: $(this).attr("id"),
        value: $(this).val(),
        price: $(this).attr("price")
      });
  });
  $("input:radio:checked").each(function () {
    custom.push({
      name: $(this).attr("id"),
      value: $(this).val(),
      price: $(this).attr("price"),
    });
  });
  if($("textarea").val()){ custom.push({ name: "comment", value: $("textarea").val(), price: 0 })};
  removeItem(curr_item.id);
  addItem(item_name, item_price, custom);
});