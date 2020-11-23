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
  let totalPrice = Number(price);
  for(let i in cart){
    if (cart[i].name === name && (JSON.stringify(cart[i].custom)==JSON.stringify(custom))){
      cart[i].count += count;
      return;
    }
  }
  for(let i in custom){ totalPrice += (+custom[i].price);}
  let item = new Item(name, totalPrice.toFixed(2), 1, custom, id_var++);
  cart.push(item);
}

function removeItem(id){
  // console.log(id);
  cart = cart.filter( item => item.id != id );
  // console.log(cart);
  modal_data.innerHTML = display_cart();
}

function clearCart(){
  cart = [];
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
  if($("textarea").val()){ custom.push({ value: $("textarea").val(), price: 0 })};
  addItem(item_name, item_price, custom);
});
