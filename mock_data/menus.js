let restaurant_menus = { "McDonald's": [
  {name: "Breakfast", items: [
    {
      name: "Egg McMuffin",
      price: "3.75",
      calories: 290,
      desc: "Our signature breakfast sandwich. boasts one freshly-cracked Canada Grade A large egg topped with Canadian bacon and a slice of tasty processed cheddar cheese, sitting happily on a toasted English muffin.",
      img: "https://imgur.com/CuEI33T.jpg",
      custom: {
        multi: [
          {
            name: "Extras",
            options: [
              {name: 'extra_cheese', value: 'Extra Cheese', price: 0.59},
              {name: 'extra_bacon', value: 'Extra Canadian Back Bacon', price: 0.79},
              {name: 'extra_egg', value: 'Extra Round Egg', price: 1.39},
              {name: 'extra_butter', value: 'Extra Butter', price: 0.00},
              {name: 'add_bacon', value: 'Add Bacon Strips', price: 1.39},
              {name: 'add_mayo', value: 'Add Mayo-Style Sauce', price: 0.30},
              {name: 'add_lettuce', value: 'Add Leaf Lettuce', price: 0.30},
              {name: 'add_tomato', value: 'Add Tomato', price: 0.59}
            ]
          },
          {
            name: "Excludes",
            options: [
              {name: 'remove_cheese', value: 'Remove Cheese'},
              {name: 'remove_bacon', value: 'Remove Canadian Back Bacon'},
              {name: 'remove_egg', value: 'Remove Round Egg'},
              {name: 'remove_muffin', value: 'Remove English Muffin'},
              {name: 'remove_butter', value: 'Remove Butter'}
            ]
          }
        ]
      }
    },
  ]},
  {name: "Burgers", items: [
    { 
      name: "Hamburger",
      price: "2.19",
      calories: 240,
      desc: "The comforting taste of the juicy and delicious 100% Canadian beef burger, topped with tangy pickles, ketchup, mustard and the sweet bite of onion, all on a freshly toasted bun. Just like you remember.",
      img: "https://imgur.com/ITMjzP0.jpg",
      custom: {
        multi: [
          {
            name: "Extras",
            options: [
              {name: 'extra_mustard', value: 'Extra Mustard', price: 0.00},
              {name: 'extra_ketchup', value: 'Extra Ketchup', price: 0.00},
              {name: 'extra_onions', value: 'Extra Onions', price: 0.00},
              {name: 'extra_pickles', value: 'Extra Pickles', price: 0.00},
              {name: 'add_bacon', value: 'Add Bacon Strips', price: 1.39},
              {name: 'add_mayo', value: 'Add Mayo-Style Sauce', price: 0.30},
              {name: 'add_lettuce', value: 'Add Shredded Lettuce', price: 0.30},
              {name: 'add_tomato', value: 'Add Tomato', price: 0.59}
            ]
          },
          {
            name: "Excludes",
            options: [
              {name: 'remove_mustard', value: 'Remove Mustard'},
              {name: 'remove_ketchup', value: 'Remove Ketchup'},
              {name: 'remove_onions', value: 'Remove Onions'},
              {name: 'remove_pickles', value: 'Remove Pickles'},
              {name: 'remove_meat', value: 'Remove Meat Patty'},
              {name: 'remove_bun', value: 'Remove Bun'}
            ]
          }
        ]
      }
    }
  ]},
  {name: "Snacks & Sides", items: [
    { 
      name: "World Famous Fries",
      price: "2.19",
      calories: 350,
      desc: "McDonald's World Famous Fries are always a delicious choice. Cut from whole potatoes grown on Canadian farms, our fries are cooked to golden perfection in a vegetable oil blend. Mmm... of course you want fries with that!",
      img: "https://imgur.com/a8ry3fJ.jpg",
      custom: {
        multi: [
          {
            name: "Excludes",
            options: [{name: 'remove_salt', value: 'Remove Salt'}]
          }
        ],
        single: [
          {
            name: "Size",
            options: [
              {name: 'small', value: 'Small', price: 2.19},
              {name: 'medium', value: 'Medium', price: 3.19},
              {name: 'large', value: 'Large', price: 3.89}
            ]
          }
        ]
      }
    }
  ]},
  {name: "Beverages", items: [
    { 
      name: "Fruitopia Strawberry Passion",
      price: "1.49",
      calories: 170,
      desc: "Real fruit beverage with added vitamin C, no artificial flavours and no caffeine.",
      img: "https://imgur.com/jKQQ075.jpg",
      custom:{
        single: [
          {
            name: "Ice",
            options: [
              {name: 'regular_ice', value: 'Regular Ice'},
              {name: 'extra_ice', value: 'Extra Ice'},
              {name: 'remove_ice', value: 'Remove Ice'}
            ]
          },
          {
            name: "Size",
            options: [
              {name: 'child', value: 'Child', price: 1.49},
              {name: 'small', value: 'Small', price: 2.09},
              {name: 'medium', value: 'Medium', price: 2.69},
              {name: 'large', value: 'Large', price: 3.19}
            ]
          }
        ]
      }
    }
  ]},
]};
