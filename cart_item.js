var cart = [];
var id_var = 0;

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
  var totalPrice = Number(price);

  for(var i in cart){
    if (cart[i].name === name && (JSON.stringify(cart[i].custom)==JSON.stringify(custom))){
      cart[i].count += count;
      return;
    }
  }
  for(var i in custom){
    console.log(custom[i].price);
    totalPrice += (+custom[i].price);
  }
  var item = new Item(name, totalPrice.toFixed(2), 1, custom, id_var++);
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
  var cost = 0, taxTotal = 0, totalCost = 0;
  var taxPercent = 0.13;

  for(var i in cart){
    cost += (cart[i].price * cart[i].count);
  }

  taxTotal = taxPercent * cost;
  totalCost = cost + taxTotal;

  var text = "subtotal: " + cost.toFixed(2) + " tax: " + taxTotal.toFixed(2) + " total: " + totalCost.toFixed(2);

  return text;
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

$("#add_to_cart").live("click", function () {
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
      price: $(this).attr("price")
    });
  });
  if($("textarea").val()){ custom.push({ comments: $("textarea").val(), price: 0 })};
  addItem(item_name, item_price, custom);
});
