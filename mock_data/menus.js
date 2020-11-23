/* NOTE: every item has to have a "custom", and every customization has to have a "price" */

let restaurant_menus = { 
  "McDonald%27s": [
  {name: "Breakfast", items: [
    {
      name: "Egg McMuffin",
      price: "3.75",
      calories: 290,
      desc: "Our signature breakfast sandwich. boasts one freshly-cracked Canada Grade A large egg topped with Canadian bacon and a slice of tasty processed cheddar cheese, sitting happily on a toasted English muffin.",
      img: "./static/menu_pictures/t-mcdonalds-Egg-McMuffin.jpg?",
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
              {name: 'remove_cheese', value: 'Remove Cheese', price: 0},
              {name: 'remove_bacon', value: 'Remove Canadian Back Bacon', price: 0},
              {name: 'remove_egg', value: 'Remove Round Egg', price: 0},
              {name: 'remove_muffin', value: 'Remove English Muffin', price: 0},
              {name: 'remove_butter', value: 'Remove Butter', price: 0}
            ]
          }
        ]
      }
    },
    {
      name: "Hash Brown",
      price: "1.89",
      calories: 160,
      desc: "That crisp, flaky, fluffy-on-the-inside favourite. A perfect breakfast companion, and irresistible on its own.",
      img: "./static/menu_pictures/mcdonalds-hashbrowns.jpg?",
      custom: {}
    },
    {
      name: "Hotcakes with Syrup and Butter",
      price: "3.80",
      calories: 550,
      desc: "Three golden-brown, melt-in-your-mouth hotcakes topped with butter and tasty syrup.",
      img: "./static/menu_pictures/mcdonalds-hotcakes-syrup-butter.jpg?",
      custom: {}
    },
    {
      name: "Breakfast Burrito",
      price: "2.00",
      calories: 280,
      desc: "A savoury mix of fluffy eggs, green peppers, onions, sausage and processed cheddar cheese all wrapped in a warm whole wheat flour tortilla.",
      img: "./static/menu_pictures/mcdonalds_breakfast_burrito.jpg?",
      custom: {}
    }
  ]},
  {name: "Burgers", items: [
    { 
      name: "Hamburger",
      price: "2.19",
      calories: 240,
      desc: "The comforting taste of the juicy and delicious 100% Canadian beef burger, topped with tangy pickles, ketchup, mustard and the sweet bite of onion, all on a freshly toasted bun. Just like you remember.",
      img: "./static/menu_pictures/mcdonalds-hamburger.jpg?",
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
              {name: 'remove_mustard', value: 'Remove Mustard', price: 0},
              {name: 'remove_ketchup', value: 'Remove Ketchup', price: 0},
              {name: 'remove_onions', value: 'Remove Onions', price: 0},
              {name: 'remove_pickles', value: 'Remove Pickles', price: 0},
              {name: 'remove_meat', value: 'Remove Meat Patty', price: 0},
              {name: 'remove_bun', value: 'Remove Bun', price: 0}
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
      img: "./static/menu_pictures/mcdonalds-fries-medium.jpg?",
      custom: {
        multi: [
          {
            name: "Excludes",
            options: [{name: 'remove_salt', value: 'Remove Salt', price: 0}]
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
    },
    {
      name: "Brownie RMHC Cookie",
      price: "0.99",
      calories: 140,
      desc: "Part brownie. Part cookie. All delicious. Enjoy a decadent brownie cookie that's soft on the inside, crunchy on the outside, and delicious all around.",
      img: "./static/menu_pictures/mcdonalds-rmhc-brownie-cookie.jpg?",
      custom: {}
    },
    {
      name: "Poutine",
      price: "4.89",
      calories: 870,
      desc: "Rich and tasty gravy? Melty, mouth-watering cheese curds? On our World Famous Fries? You better believe it!",
      img: "./static/menu_pictures/mcdonalds-poutine.jpg?",
      custom: {}
    },
    {
      name: "Fruit and Fibre Muffin",
      price: "1.78",
      calories: 380,
      desc: "A perfect companion to coffee; a quick-and-easy mid-morning or afternoon treat. With a choice of five delectable flavours including Banana Chocolate Chunk, Blueberry, Carrot, Fruit n Fibre and Cranberry Orange. Enjoy one today!",
      img: "./static/menu_pictures/mcdonalds-fruit-n-fibre-muffin.jpg?",
      custom: {}
    }
  ]},
  {name: "Beverages", items: [
    { 
      name: "Fruitopia Strawberry Passion",
      price: "1.49",
      calories: 170,
      desc: "Real fruit beverage with added vitamin C, no artificial flavours and no caffeine.",
      img: "./static/menu_pictures/mcdonalds-fruitopia-strawberry-passion.jpg?",
      custom:{
        single: [
          {
            name: "Ice",
            options: [
              {name: 'regular_ice', value: 'Regular Ice', price: 0},
              {name: 'extra_ice', value: 'Extra Ice', price: 0},
              {name: 'remove_ice', value: 'Remove Ice', price: 0}
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
    },
    {
      name: "Premium Roast Brewed Coffee",
      price: "1.89",
      calories: 4,
      desc: "Brewed from 100% Arabica beans, flame-roasted for a rich, delicious full-bodied flavour &#8208; in your choice of regular or decaf.",
      img: "./static/menu_pictures/mcdonalds-coffee.jpg?",
      custom: {}
    },
    {
      name: "Latte",
      price: "2.89",
      calories: 170,
      desc: "Treat yourself with the smooth and sophisticated Latte, made with our signature McCaf&egrave; espresso and topped with fresh Canadian milk, steamed and frothed. Visit today!",
      img: "./static/menu_pictures/mcdonalds-latte-2-milk.jpg?",
      custom: {}
    },
    {
      name: "Real Fruit Smoothie with yogurt",
      price: "3.69",
      calories: 240,
      desc: "Get a taste of real fruit smoothie blended to perfection with ice. Enjoy it with or without yogurt.",
      img: "./static/menu_pictures/mcdonalds-strawberry-banana-smoothie-yogurt.jpg?",
      custom: {}
    },
    {
      name: "Coca-Cola",
      price: "2.39",
      calories: 190,
      desc: "The original, refreshing ice-cold cola that goes well with your meal and completes the experience.",
      img: "./static/menu_pictures/mcdonalds-coca-cola.jpg?",
      custom: {}
    }
  ]},
],"Pizza Hotline": [
  {name: "Pizza", items: [
    {
      name: "Italian Classic",
      price: "18.25",
      calories: 2100,
      desc: "Fresh Cut Onion, Dry-Cured Pepperoni,Traditional Italian Sausage, Kalamata Sliced Olive, Roasted Red Pepper and Fresh Green Pepper.",
      img: "./static/menu_pictures/Italian_Classic.png?",
      custom: {}
    },
    {
      name: "PRIMO PEPPERONI",
      price: "15.20",
      calories: 2050,
      desc: "Lots of Dry-Cured Pepperoni and Extra Mozzarella Cheese.",
      img: "./static/menu_pictures/PRIMO_PEPPERONI.png?",
      custom: {}
    },
    {
      name: "SPICY HAWAIIAN",
      price: "16.40",
      calories: 1900,
      desc: "Traditional Italian Sausage, Banana, Pepper, Pineapple and Cheddar Cheese.",
      img: "./static/menu_pictures/SPICY_HAWAIIAN.png?",
      custom: {}
    },
    {
      name: "MEATY DELIGHT",
      price: "18.90",
      calories: 2350,
      desc: "Genoa Salami, Ham, Dry-Cured Pepperoni, Traditional Italian Sausage, Seasoned Beef and Ground Bacon",
      img: "./static/menu_pictures/MEATY_DELIGHT.png?",
      custom: {}
    },
    {
      name: "GARDEN VEGGIE",
      price: "15.00",
      calories: 1930,
      desc: "Fresh Mushroom, Fresh Cut Onion, Kalamata Sliced Olive, Pineapple, Fresh Green Pepper and Fresh Tomato",
      img: "./static/menu_pictures/GARDEN_VEGGIE.png?",
      custom: {}
    }

  ]},
  {name: "Sides", items: [
    {
      name: "Pepperoni Cheese Sticks",
      price: "6.00",
      calories: 90,
      desc: "Mouth watering cheesesticks with Garlic butter base loaded with 100% Real Cheese and then topped with Dry Cured Pepperoni slices",
      img: "./static/menu_pictures/Pepperoni_Cheese_Sticks.png?",
      custom: {}
    },
    {
      name: "Taco Cheese Sticks",
      price: "6.00",
      calories: 120,
      desc: "Mouth-watering cheese sticks with Garlic butter base loaded with Mozzarella Cheese and then topped with Sesoned Beef and Spicy Jalapeno slices",
      img: "./static/menu_pictures/Taco_Cheese_Sticks.png?",
      custom: {}
    },
    {
      name: "Chicken Bacon Ranch",
      price: "7.00",
      calories: 700,
      desc: "Grilled chicken strips, side bacon, mozzarella cheese with ranch dressing on soft Ciabatta bread, lightly toasted to perfection.",
      img: "./static/menu_pictures/Chicken_Bacon_Ranch.png?",
      custom: {}
    }
  ]},
  {name: "Beverages", items: [
    {
      name: "2L Pop",
      price: "2.99",
      calories: 800,
      desc: "Pepsi, Diet Pepsi, 7Up, Dr Pepper, Ginger Ale, Orange Crush, Root Beer, or Iced Tea",
      img: "./static/menu_pictures/2L_Pop.png?",
      custom: {}
    },
    {
      name: "6 Can Pop Pack",
      price: "6.00",
      calories: 150,
      desc: "Any 6: Pepsi, Diet Pepsi, 7Up, Dr Pepper, Ginger Ale, Orange Crush, Root Beer, or Iced Tea.",
      img: "./static/menu_pictures/6_Can_Pop_Pack.png?",
      custom: {}
    },
    {
      name: "Lipton Pure Leaf Iced Tea",
      price: "3.00",
      calories: 350,
      desc: "547 ml bottle of refreshing Iced Tea.",
      img: "./static/menu_pictures/Lipton_Pure_Leaf_Iced_Tea.jpg?",
      custom: {}
    }
  ]}
],"Boston Pizza": [
  {name: "Pizza", items: [
    {
      name: "EL DORADO",
      price: "27.99",
      calories: 2100,
      desc: "Signature pizza sauce, chorizo sausage, seasoned ground beef, pizza mozzarella, red onions, jalapeno peppers, and fresh tomatoes.",
      img: "./static/menu_pictures/EL_DORADO.png?",
      custom: {}
    },
    {
      name: "BOURBON BBQ CHICKEN",
      price: "27.99",
      calories: 2340,
      desc: "House-made Bourbon BBQ sauce, bacon, BBQ chicken, balsamic-roasted red onions, pizza mozzarella and cheddar cheese. Finished with a buttermilk ranch drizzle.",
      img: "./static/menu_pictures/BOURBON_BBQ_CHICKEN.png?",
      custom: {}
    },
    {
      name: "ROYAL HAWAIIAN",
      price: "27.99",
      calories: 2200,
      desc: "Sweet Thai honey garlic, Gouda, provolone, Parmesan, pizza mozzarella, red onions, smoked prosciutto, bacon, pineapple, and toasted sesame seeds.",
      img: "./static/menu_pictures/ROYAL_HAWAIIAN.png?",
      custom: {}
    },
    {
      name: "TUSCAN",
      price: "27.99",
      calories: 2200,
      desc: "Marinara sauce, pizza mozzarella, cheddar, spicy chicken breast, roasted garlic, fresh spinach, sun-dried tomatoes and feta.",
      img: "./static/menu_pictures/TUSCAN.png?",
      custom: {}
    },
    {
      name: "THE MEATEOR",
      price: "26.99",
      calories: 2500,
      desc: "Beefy Bolognese sauce, pizza mozzarella, smoked ham, pepperoni, seasoned ground beef and spicy Italian sausage.",
      img: "./static/menu_pictures/THE_MEATEOR.png?",
      custom: {}
    }
  ]},
  {name: "Snacks & Sides", items: [
    {
      name: "SIDE FRIES",
      price: "6.99",
      calories: 500,
      desc: "No one's going to be mad at you because you ordered too many fries.",
      img: "./static/menu_pictures/SIDE_FRIES.png?",
      custom: {}
    },
    {
      name: "SIDE GARLIC MASHED POTATOES",
      price: "4.99",
      calories: 450,
      desc: "A heaping helping of garlicky, fluffy carb-a-licious goodness.",
      img: "./static/menu_pictures/SIDE_GARLIC_MASHED_POTATOES.png?",
      custom: {}
    },
    {
      name: "SIDE SEASONAL VEGETABLES",
      price: "3.99",
      calories: 200,
      desc: "So much easier than growing, harvesting, and sauteing your own side order.",
      img: "./static/menu_pictures/SIDE_SEASONAL_VEGETABLES.png?",
      custom: {}
    }
  ]},
  {name: "Beverages", items: [
    {
      name: "KIM CRAWFORD SAUVIGNON BLANC",
      price: "39.99",
      calories: 1100,
      desc: "750 ml Wine Bottle.",
      img: "./static/menu_pictures/KIM_CRAWFORD_SAUVIGNON_BLANC.png?",
      custom: {}
    },
    {
      name: "Heineken",
      price: "7.50",
      calories: 400,
      desc: "355 mL Can. Available in Singles, 6-packs and 12-packs.",
      img: "./static/menu_pictures/Heineken.png?",
      custom: {}
    },
    {
      name: "SINGLE BOTTLE OF POP",
      price: "2.50",
      calories: 300,
      desc: "7Up, Pepsi, Diet Pepsi, MUG Root Beer, Brisk Iced Tea 591 mL Bottle.",
      img: "./static/menu_pictures/SINGLE_BOTTLE_OF_POP.png?",
      custom: {}
    },
    {
      name: "BOTTLED WATER",
      price: "3.49",
      calories: 0,
      desc: "Aquafina Bottled Water (591ml)",
      img: "./static/menu_pictures/BOTTLED_WATER.png?",
      custom: {}
    }
  ]},
  {name: "Salads", items: [
    {
      name: "PINEAPPLE, BEET & GOAT CHEESE SALAD",
      price: "16.49",
      calories: 700,
      desc: "Garden greens, pineapple, beets, red onions, roasted red peppers, goat cheese, slivered almonds, and balsamic dressing.",
      img: "./static/menu_pictures/PINEAPPLE_BEET_GOAT_CHEESE_SALAD.png?",
      custom: {}
    },
    {
      name: "CHICKEN PECAN SALAD",
      price: "17.99",
      calories: 1200,
      desc: "Garden greens, candied pecans, pizza mozzarella, cheddar, bacon, cucumbers, carrots, tomatoes, and ranch dressing.",
      img: "./static/menu_pictures/CHICKEN_PECAN_SALAD.png?",
      custom: {}
    },
    {
      name: "THAI CHICKEN SALAD",
      price: "16.49",
      calories: 700,
      desc: "Grilled chicken breast, carrots, beets, crunchy Asian noodles, pineapple and green onions, on a bed of romaine lettuce and quinoa and rice blend with Thai chili citrus dressing and sesame seeds.",
      img: "./static/menu_pictures/THAI_CHICKEN_SALAD.png?",
      custom: {}
    }
  ]},
  {name: "Desserts", items: [
    {
      name: "APPLE BLOSSOM",
      price: "6.99",
      calories: 300,
      desc: "Freshly baked Canadian Northern Spy apples in a flaky pastry shell. Served with vanilla ice cream and drizzled with caramel sauce",
      img: "./static/menu_pictures/APPLE_BLOSSOM.png?",
      custom: {}
    },
    {
      name: "NEW YORK CHEESECAKE",
      price: "7.99",
      calories: 400,
      desc: "Traditional New York-style cheesecake with a graham cracker crust",
      img: "./static/menu_pictures/NEW_YORK_CHEESECAKE.png?",
      custom: {}
    },
    {
      name: "CHOCOLATE EXPLOSION CHEESECAKE",
      price: "8.99",
      calories: 600,
      desc: "Creamy chocolate mousse with chunks of cheesecake, caramel, toffee, pecans and almonds on a chocolate crust.",
      img: "./static/menu_pictures/CHOCOLATE_EXPLOSION_CHEESECAKE.png?",
      custom: {}
    }
  ]}
],"Burger King": [
  {name: "Burgers", items: [
    {
      name: "Roadhouse King",
      price: "9.89",
      calories: 1280,
      desc: "The Roadhouse KING Sandwich features two quarter-pound savoury flame-grilled beef patties, topped with four half-strips of thick-cut smoked bacon, crispy onion rings, tangy barbeque sauce, American cheese, and creamy mayonnaise all on a sesame seed bun.",
      img: "./static/menu_pictures/Roadhouse-King-Silo-500x540_CR.png?",
      custom: {}
    },
    {
      name: "Big King XL",
      price: "8.79",
      calories: 990,
      desc: "Now made with 2X more of Burger King's famous Stacker Sauce, the Big King XL is back and bigger than ever. With over half a pound of flame-grilled beef, all the fixings, and now double the stacker sauce, the Big King XL will satisfy any hunger.",
      img: "./static/menu_pictures/BigKingXL_500x540_prod.png?",
      custom: {}
    },
    {
      name: "Quarter Pound King",
      price: "7.69",
      calories: 580,
      desc: "The Quarter Pound King features a quarter-pound savoury flame-grilled beef patty, topped with all of the classic favourites: melted cheese, freshly sliced onions, zesty pickles, ketchup, and mustard all on a toasted sesame seed bun.",
      img: "./static/menu_pictures/QuarterPndKing_500x540_CR.png?",
      custom: {}
    },
    {
      name: "WHOPPER",
      price: "6.99",
      calories: 660,
      desc: "The WHOPPER Sandwich is a quarter pound (based on pre-cooked patty weight) of savoury flame-grilled beef topped with juicy tomatoes, fresh-cut lettuce, creamy mayonnaise, crunchy pickles, and sliced white onions on a toasted sesame seed bun.",
      img: "./static/menu_pictures/Whopper_500x540_CR_1.png?",
      custom: {}
    },
    {
      name: "Cheeseburger",
      price: "2.49",
      calories: 280,
      desc: "You can't go wrong with Cheeseburger. A signature flame-grilled beef patty topped with a simple layer of melted cheese, crunchy pickles, yellow mustard, and ketchup on a toasted sesame seed bun.",
      img: "./static/menu_pictures/BK_Cheeseburger.png?",
      custom: {}
    }
  ]},
  {name: "Breakfast", items: [
    {
      name: "Hash Browns",
      price: "1.89",
      calories: 250,
      desc: "Make your morning sizzle with a side of crunchy and golden hash browns.",
      img: "./static/menu_pictures/BK_Hashbrowns.png?",
      custom: {}
    },
    {
      name: "French Toast Sticks",
      price: "3.59",
      calories: 310,
      desc: "Sweet, golden brown, and piping hot, French Toast Sticks are perfect for dipping in a side of sweet syrup.",
      img: "./static/menu_pictures/French_Toast_Sticks.png?",
      custom: {}
    },
    {
      name: "Sausage, Egg, & Cheese CROISSAN'WICH",
      price: "5.49",
      calories: 480,
      desc: "The grab-and-go Sausage, Egg, & Cheese CROISSAN'WICH is piled high with savoury sizzling sausage, eggs, and melted cheese on a toasted, flaky croissant.",
      img: "./static/menu_pictures/Sausage_Egg_Cheese_CROISSANWICH.png?",
      custom: {}
    },
    {
      name: "Sausage, Egg, & Cheese English Muffin",
      price: "5.49",
      calories: 360,
      desc: "The Sausage, Egg, & Cheese English Muffin Sandwich is a combination of savoury sizzling sausage, tender eggs, and melted cheese nestled inside a toasted English muffin.",
      img: "./static/menu_pictures/Muffin_Sausage_Egg_Cheese.png?",
      custom: {}
    },
    {
      name: "Pancakes Platter",
      price: "4.79",
      calories: 450,
      desc: "Three warm, fluffy pancakes flavoured with a hint of vanilla and served with syrup.",
      img: "./static/menu_pictures/BK_PANCAKES_PLATTER.png?",
      custom: {}
    }
  ]},
  {name: "Beverages", items: [
    {
      name: "Hot Chocolate",
      price: "1.79",
      calories: 130,
      desc: "Delicious and creamy, hot chocolate is simply a classic treat.",
      img: "./static/menu_pictures/BK_Hot_Chocolate.png?",
      custom: {}
    },
    {
      name: "Smooth Roast Coffee",
      price: "1.79",
      calories: 5,
      desc: "Smooth Roast Coffee is made from 100% Arabica beans that delivers a balanced mild flavour and pairs perfectly with breakfast, lunch or dinner.",
      img: "./static/menu_pictures/BK_Coffee.png?",
      custom: {}
    },
    {
      name: "Tea",
      price: "1.79",
      calories: 0,
      desc: "Delicious hot tea made just your way.",
      img: "./static/menu_pictures/BK-Tea.png?",
      custom: {}
    },
    {
      name: "Soft Drink",
      price: "2.70",
      calories: 250,
      desc: "7Up, Pepsi, Diet Pepsi, MUG Root Beer.",
      img: "./static/menu_pictures/BK_Coca_Cola.png?",
      custom: {}
    }
  ]},
  {name: "Desserts", items: [
    {
      name: "Apple Turnover",
      price: "1.69",
      calories: 260,
      desc: "The Apple Turnover has a flaky, golden crust with a delicious, warm apple filling. It's the perfect way to finish any meal.",
      img: "./static/menu_pictures/Apple_Turnover.png?",
      custom: {}
    },
    {
      name: "Chocolate Fudge Sundae",
      price: "2.19",
      calories: 260,
      desc: "Cool and creamy, the made-to-order Chocolate Fudge Sundae is prepared with a velvety vanilla soft serve and finished with a delicious fudge swirl.",
      img: "./static/menu_pictures/Chocolate_Fudge_Sundae.png?",
      custom: {}
    }
  ]}
],"Bento Sushi": [
  {name: "Sushi", items: [
    {
      name: "TOKI COMBO",
      price: "8.99",
      calories: 470,
      desc: "ALLERGEN ALERT: CRUSTACEAN, WHEAT, SOY, FISH, EGG, MUSTARD, SESAME. MAY CONTAIN MILK, SULPHITES.",
      img: "./static/menu_pictures/Toki-Combo.jpg?",
      custom: {}
    },
    {
      name: "HIKARI COMBO",
      price: "12.89",
      calories: 480,
      desc: "ALLERGEN ALERT:FISH, CRUSTACEAN, WHEAT, SOY, EGG, MUSTARD, SESAME. MAY CONTAIN MILK, SULPHITES.",
      img: "./static/menu_pictures/Hikari-Combo_Clear-1024x1024.jpg?",
      custom: {}
    },
    {
      name: "VEGETABLE CRUNCH ROLL",
      price: "4.99",
      calories: 400,
      desc: "ALLERGEN ALERT:CONTAINS: WHEAT, SOY, EGG, MUSTARD, SESAME, SULPHITES. MAY CONTAIN FISH, CRUSTACEAN, MILK.",
      img: "./static/menu_pictures/Vegetable-Crunch-Roll-1024x1024.jpg?",
      custom: {}
    },
    {
      name: "PHILADELPHIA ROLL",
      price: "6.99",
      calories: 360,
      desc: "ALLERGEN ALERT:FISH, MILK, WHEAT, SOY, MUSTARD, SESAME. MAY CONTAIN EGG, CRUSTACEAN, SULPHITES.",
      img: "./static/menu_pictures/Philadelphia-Roll-1024x1024.jpg?",
      custom: {}
    },
    {
      name: "CALIFORNIA FAMILY PACK",
      price: "15.99",
      calories: 310,
      desc: "ALLERGEN ALERT:FISH, MILK, WHEAT, SOY, MUSTARD, SESAME. MAY CONTAIN EGG, CRUSTACEAN, SULPHITES.",
      img: "./static/menu_pictures/California-Family-Pack-1-1024x1024.jpg?",
      custom: {}
    }
  ]},
  {name: "Bowls", items: [
    {
      name: "Orange Chicken Bowl",
      price: "6.99",
      calories: 710,
      desc: "ALLERGEN ALERT:WHEAT, SOY, EGG, MILK. MAY CONTAIN FISH, CRUSTACEAN, MUSTARD, SESAME, SULPHITES.",
      img: "./static/menu_pictures/Orange-Chicken-Donburi-1024x1024.jpg?",
      custom: {}
    },
    {
      name: "TEMPURA SHRIMP UDON SOUP",
      price: "5.99",
      calories: 470,
      desc: "ALLERGEN ALERT:CONTAINS: SOY, WHEAT, FISH, CRUSTACEAN, EGG. MAY CONTAIN MILK, MUSTARD, SESAME, SULPHITES.",
      img: "./static/menu_pictures/Udon-Noodle-Bowl-1024x1024.jpg?",
      custom: {}
    },
    {
      name: "Chicken Teriyaki Donburi",
      price: "4.99",
      calories: 460,
      desc: "ALLERGEN ALERT: CONTAINS: WHEAT, SOY, SESAME. MAY CONTAIN FISH, CRUSTACEAN, EGG, MILK, MUSTARD, SULPHITES.",
      img: "./static/menu_pictures/Chicken-Teriyaki-Rice-bowl-1024x1024.jpg?",
      custom: {}
    },
    {
      name: "RAMEN - CHASU WITH TONKOTSU",
      price: "9.99",
      calories: 1060,
      desc: "ALLERGEN ALERT:SOY, WHEAT, FISH, SESAME, SULPHITES, EGG. MAY CONTAIN CRUSTACEAN, MUSTARD, MILK.",
      img: "./static/menu_pictures/Ramen-Noodle-Bowl-1024x1024.jpg?",
      custom: {}
    },
    {
      name: "HONEY GARLIC CHICKEN NOODLE BOWL",
      price: "7.99",
      calories: 450,
      desc: "ALLERGEN ALERT: CONTAINS: SOY, WHEAT, SESAME. MAY CONTAIN FISH, CRUSTACEAN, EGG, MILK, MUSTARD, SULPHITES.",
      img: "./static/menu_pictures/Honey-Garlic-Chicken-Noodle-Bowl-1-1024x1024.jpg?",
      custom: {}
    }
  ]}
]};