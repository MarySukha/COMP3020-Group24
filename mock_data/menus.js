let restaurant_menus = { 
  "McDonald's": [
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
    {
      name: "Sausage 'N Egg McMuffin",
      price: "3.89",
      calories: 430,
      desc: "The savoury taste of sausage, tasty processed cheddar cheese and a freshly-cracked Canada Grade A egg add up to triple deliciousness on a toasty English muffin.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-sausage-n-egg-mcmuffin.jpg?$Product_Desktop$",
      custom: {}
    },
    {
      name: "Hash Brown",
      price: "1.89",
      calories: 160,
      desc: "That crisp, flaky, fluffy-on-the-inside favourite. A perfect breakfast companion, and irresistible on its own.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-hashbrowns.jpg?$Product_Desktop$",
    },
    {
      name: "Hotcakes with Syrup and Butter",
      price: "3.80",
      calories: 550,
      desc: "Three golden-brown, melt-in-your-mouth hotcakes topped with butter and tasty syrup.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-hotcakes-syrup-butter.jpg?$Product_Desktop$",
    },
    {
      name: "Breakfast Burrito",
      price: "2.00",
      calories: 280,
      desc: "A savoury mix of fluffy eggs, green peppers, onions, sausage and processed cheddar cheese all wrapped in a warm whole wheat flour tortilla.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-breakfast-burrito.jpg?$Product_Desktop$",
    }
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
    },
    {
      name: "Brownie RMHC Cookie",
      price: "0.99",
      calories: 140,
      desc: "Part brownie. Part cookie. All delicious. Enjoy a decadent brownie cookie that's soft on the inside, crunchy on the outside, and delicious all around.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-rmhc-brownie-cookie.jpg?$Product_Desktop$",
    },
    {
      name: "Poutine",
      price: "4.89",
      calories: 870,
      desc: "Rich and tasty gravy? Melty, mouth-watering cheese curds? On our World Famous Fries? You better believe it!",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-poutine.jpg?$Product_Desktop$",
    },
    {
      name: "Fruit and Fibre Muffin",
      price: "1.78",
      calories: 380,
      desc: "A perfect companion to coffee; a quick-and-easy mid-morning or afternoon treat. With a choice of five delectable flavours including Banana Chocolate Chunk, Blueberry, Carrot, Fruit ‘n Fibre and Cranberry Orange. Enjoy one today!",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-fruit-n-fibre-muffin.jpg?$Product_Desktop$",
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
    },
    {
      name: "Premium Roast Brewed Coffee",
      price: "1.89",
      calories: 4,
      desc: "Brewed from 100% Arabica beans, flame-roasted for a rich, delicious full-bodied flavour &#8208; in your choice of regular or decaf.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-coffee.jpg?$Product_Desktop$",
    },
    {
      name: "Latte",
      price: "2.89",
      calories: 170,
      desc: "Treat yourself with the smooth and sophisticated Latte, made with our signature McCaf&egrave; espresso and topped with fresh Canadian milk, steamed and frothed. Visit today!",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-latte-2-milk.jpg?$Product_Desktop$",
    },
    {
      name: "Real Fruit Smoothie with yogurt",
      price: "3.69",
      calories: 240,
      desc: "Get a taste of real fruit smoothie blended to perfection with ice. Enjoy it with or without yogurt.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-strawberry-banana-smoothie-yogurt.jpg?$Product_Desktop$",
    },
    {
      name: "Coca-Cola",
      price: "2.39",
      calories: 190,
      desc: "The original, refreshing ice-cold cola that goes well with your meal and completes the experience.",
      img: "https://www.mcdonalds.com/is/image/content/dam/ca/nfl/web/nutrition/products/header/en/mcdonalds-coca-cola.jpg?$Product_Desktop$",
    }
  ]},
],"Pizza Hotline": [
  {name: "Pizza", items: [
    {
      name: "Italian Classic",
      price: "18.25",
      calories: 2100,
      desc: "Fresh Cut Onion, Dry-Cured Pepperoni,Traditional Italian Sausage, Kalamata Sliced Olive, Roasted Red Pepper and Fresh Green Pepper.",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5e2f7173871cb.png?",
    },
    {
      name: "PRIMO PEPPERONI",
      price: "15.20",
      calories: 2050,
      desc: "Lots of Dry-Cured Pepperoni and Extra Mozzarella Cheese.",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5e2f728fc8d93.png?",
    },
    {
      name: "SPICY HAWAIIAN",
      price: "16.40",
      calories: 1900,
      desc: "Traditional Italian Sausage, Banana, Pepper, Pineapple and Cheddar Cheese.",
      img: "https://preo.gumlet.com/usr/channel/14/menuItem/5e2f733c2ade5.png",
    },
    {
      name: "MEATY DELIGHT",
      price: "18.90",
      calories: 2350,
      desc: "Genoa Salami, Ham, Dry-Cured Pepperoni, Traditional Italian Sausage, Seasoned Beef and Ground Bacon",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5e2f7202c7907.png?",
    },
    {
      name: "GARDEN VEGGIE",
      price: "15.00",
      calories: 1930,
      desc: "Fresh Mushroom, Fresh Cut Onion, Kalamata Sliced Olive, Pineapple, Fresh Green Pepper and Fresh Tomato",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5e2f7103edbce.png?",
    }

  ]},
  {name: "Sides", items: [
    {
      name: "Pepperoni Cheese Sticks",
      price: "6.00",
      calories: 90,
      desc: "Mouth watering cheesesticks with Garlic butter base loaded with 100% Real Cheese and then topped with Dry Cured Pepperoni slices",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5e2f6d1766908.png?",
    },
    {
      name: "Taco Cheese Sticks ",
      price: "6.00",
      calories: 120,
      desc: "Mouth-watering cheese sticks with Garlic butter base loaded with Mozzarella Cheese and then topped with Sesoned Beef and Spicy Jalapeno slices",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5e3073091f190.png?",
    },
    {
      name: "Chicken Bacon Ranch",
      price: "7.00",
      calories: 700,
      desc: "Grilled chicken strips, side bacon, mozzarella cheese with ranch dressing on soft Ciabatta bread, lightly toasted to perfection.",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5b3518b74e156.png?",
    }
  ]},
  {name: "Beverages", items: [
    {
      name: "2L Pop",
      price: "2.99",
      calories: 800,
      desc: "Pepsi, Diet Pepsi, 7Up, Dr Pepper, Ginger Ale, Orange Crush, Root Beer, or Iced Tea",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5b579e4889b75.png?",
    },
    {
      name: "6 Can Pop Pack",
      price: "6.00",
      calories: 150,
      desc: "Any 6: Pepsi, Diet Pepsi, 7Up, Dr Pepper, Ginger Ale, Orange Crush, Root Beer, or Iced Tea.",
      img: "https://preo.gumlet.io/usr/channel/14/menuItem/5b4f8c8a33560.png?",
    },
    {
      name: "Lipton Pure Leaf Iced Tea",
      price: "3.00",
      calories: 350,
      desc: "547 ml bottle of refreshing Iced Tea.",
      img: "https://i5.walmartimages.ca/images/Enlarge/394/424/6000202394424.jpg",
    }
  ]}
],"Boston Pizza": [
  {name: "Pizza", items: [
    {
      name: "EL DORADO",
      price: "27.99",
      calories: 2100,
      desc: "Signature pizza sauce, chorizo sausage, seasoned ground beef, pizza mozzarella, red onions, jalapeno peppers, and fresh tomatoes.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/pizza/bp-originals/el-pizzo/images/high-resolution/2019-01-28-ElPizzo_1440x800.png",
    },
    {
      name: "BOURBON BBQ CHICKEN",
      price: "27.99",
      calories: 2340,
      desc: "House-made Bourbon BBQ sauce, bacon, BBQ chicken, balsamic-roasted red onions, pizza mozzarella and cheddar cheese. Finished with a buttermilk ranch drizzle.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/pizza/bp-originals/bourbon-bbq-chicken/images/high-resolution/2019-01-28-BourbonBBQChicken_1440x800.png",
    },
    {
      name: "ROYAL HAWAIIAN",
      price: "27.99",
      calories: 2200,
      desc: "Sweet Thai honey garlic, Gouda, provolone, Parmesan, pizza mozzarella, red onions, smoked prosciutto, bacon, pineapple, and toasted sesame seeds.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/pizza/bp-originals/hawaii-pie-ohh/images/high-resolution/2019-01-28-HawaiiPieOhh_1440x800.png",
    },
    {
      name: "TUSCAN",
      price: "27.99",
      calories: 2200,
      desc: "Marinara sauce, pizza mozzarella, cheddar, spicy chicken breast, roasted garlic, fresh spinach, sun-dried tomatoes and feta.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/pizza/international/tuscan/images/high-resolution/201705-tuscan-1400x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "THE MEATEOR",
      price: "26.99",
      calories: 2500,
      desc: "Beefy Bolognese sauce, pizza mozzarella, smoked ham, pepperoni, seasoned ground beef and spicy Italian sausage.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/pizza/bp-originals/the-meateor/images/high-resolution/201705-meateor-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    }
  ]},
  {name: "Snacks & Sides", items: [
    {
      name: "SIDE FRIES",
      price: "6.99",
      calories: 500,
      desc: "No one's going to be mad at you because you ordered too many fries.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/sides/side-foods/side-fries/images/high-resolution/2019-side-fries-website-menuitem-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "SIDE GARLIC MASHED POTATOES",
      price: "4.99",
      calories: 450,
      desc: "A heaping helping of garlicky, fluffy carb-a-licious goodness.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/sides/side-foods/side-garlic-mashed-potatoes/images/high-resolution/2019-side-garlic-mashed-potatoes-website-menuitem-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "SIDE SEASONAL VEGETABLES",
      price: "3.99",
      calories: 200,
      desc: "So much easier than growing, harvesting, and sauteing your own side order.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/sides/side-foods/side-seasonal-vegetables/images/high-resolution/2019-side-seasonal-vegetables-website-menuitem-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    }
  ]},
  {name: "Beverages", items: [
    {
      name: "KIM CRAWFORD SAUVIGNON BLANC",
      price: "39.99",
      calories: 1100,
      desc: "750 ml Wine Bottle.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/alcoholic_beverages/cans-051520/Kim%20Crawford%20SB%20750ml%201440%20x%20800.png/jcr:content/renditions/cq5dam.web.1280.1280.png"
    },
    {
      name: "Heineken",
      price: "7.50",
      calories: 400,
      desc: "355 mL Can. Available in Singles, 6-packs and 12-packs.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/alcoholic_beverages/resized-june3-2020/beer/Heineken-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "SINGLE BOTTLE OF POP",
      price: "2.50",
      calories: 300,
      desc: "7Up®, Pepsi®, Diet Pepsi®, MUG® Root Beer, Brisk® Iced Tea 591 mL Bottle. Delivery / Pick-Up only.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/beverages/Pepsi-Mixed-Pack-591mL-v2-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "BOTTLED WATER",
      price: "3.49",
      calories: 0,
      desc: "Aquafina® Bottled Water (591ml)",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/beverages/Aquafina%20591mL%201440%20x%20800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    }
  ]},
  {name: "Salads", items: [
    {
      name: "PINEAPPLE, BEET & GOAT CHEESE SALAD",
      price: "16.49",
      calories: 700,
      desc: "Garden greens, pineapple, beets, red onions, roasted red peppers, goat cheese, slivered almonds, and balsamic dressing.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/salads/entree-salads/pineapple-beet-and-goat-cheese-salad/images/high-resolution/2019-01-28-PineappleBeetGoatCheeseSalad_1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "CHICKEN PECAN SALAD",
      price: "17.99",
      calories: 1200,
      desc: "Garden greens, candied pecans, pizza mozzarella, cheddar, bacon, cucumbers, carrots, tomatoes, and ranch dressing.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/salads/entree-salads/crispy-chicken-pecan-salad/images/high-resolution/2019-chicken-pecan-salad-entree-glutenwise-website-menuitem-1440x800.png",
    },
    {
      name: "THAI CHICKEN SALAD",
      price: "16.49",
      calories: 700,
      desc: "Grilled chicken breast, carrots, beets, crunchy Asian noodles, pineapple and green onions, on a bed of romaine lettuce and quinoa and rice blend with Thai chili citrus dressing and sesame seeds.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/salads/entree-salads/thai-chicken-salas/images/high-resolution/2019-thai-chicken-salad-website-menuitem-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    }
  ]},
  {name: "Desserts", items: [
    {
      name: "APPLE BLOSSOM",
      price: "6.99",
      calories: 300,
      desc: "Freshly baked Canadian Northern Spy apples in a flaky pastry shell. Served with vanilla ice cream and drizzled with caramel sauce",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/desserts/2019-canadian-apple-pie/images/2019-canadian-apple-pie-website-menuitem-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "NEW YORK CHEESECAKE",
      price: "7.99",
      calories: 400,
      desc: "Traditional New York–style cheesecake with a graham cracker crust",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/desserts/new-york-cheesecake/images/high-resolution/201705-cheescake-1440x800.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    },
    {
      name: "CHOCOLATE EXPLOSION CHEESECAKE",
      price: "8.99",
      calories: 600,
      desc: "Creamy chocolate mousse with chunks of cheesecake, caramel, toffee, pecans and almonds on a chocolate crust.",
      img: "https://bostonpizza.com/content/dam/bostonpizza/menu/desserts/chocolate-explosion/images/high-resolution/201705-chocolate-explosion-1440x800.png",
    }
  ]}
],"Burger King": [
  {name: "Burgers", items: [
    {
      name: "Roadhouse King",
      price: "9.89",
      calories: 1280,
      desc: "The Roadhouse KING™ Sandwich features two quarter-pound savoury flame-grilled beef patties, topped with four half-strips of thick-cut smoked bacon, crispy onion rings, tangy barbeque sauce, American cheese, and creamy mayonnaise all on a sesame seed bun.",
      img: "https://bk-ca-prd-01.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-500x540_CR.png",
    },
    {
      name: "Big King® XL",
      price: "8.79",
      calories: 990,
      desc: "Now made with 2X more of Burger King's famous Stacker Sauce, the Big King XL is back and bigger than ever. With over half a pound of flame-grilled beef, all the fixings, and now double the stacker sauce, the Big King XL will satisfy any hunger.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/558c6e8a4acac652724f331d13d459204493dd0c-400x266.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "Quarter Pound King",
      price: "7.69",
      calories: 580,
      desc: "The Quarter Pound King™ features a quarter-pound savoury flame-grilled beef patty, topped with all of the classic favourites: melted cheese, freshly sliced onions, zesty pickles, ketchup, and mustard all on a toasted sesame seed bun.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/5e858f28e6f0f2534a8bd4695082d8efe535d50c-400x266.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "WHOPPER",
      price: "6.99",
      calories: 660,
      desc: "The WHOPPER® Sandwich is a quarter pound (based on pre-cooked patty weight) of savoury flame-grilled beef topped with juicy tomatoes, fresh-cut lettuce, creamy mayonnaise, crunchy pickles, and sliced white onions on a toasted sesame seed bun. WHOPPER® is a registered mark of Burger King Corporation.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/50069e6e08f42c8eb5407e1088c4a905c2a60c72-400x266.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "Cheeseburger",
      price: "2.49",
      calories: 280,
      desc: "You can't go wrong with Cheeseburger. A signature flame-grilled beef patty topped with a simple layer of melted cheese, crunchy pickles, yellow mustard, and ketchup on a toasted sesame seed bun.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/947c4c25566edee40a840682f1770ed14e033255-592x344.png?w=320&fm=webp&q=40&fit=max",
    }
  ]},
  {name: "Breakfast", items: [
    {
      name: "Hash Browns",
      price: "1.89",
      calories: 250,
      desc: "Make your morning sizzle with a side of crunchy and golden hash browns.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/4bcbeec79902224107fd58140c16bb6eb946918a-400x266.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "French Toast Sticks",
      price: "3.59",
      calories: 310,
      desc: "Sweet, golden brown, and piping hot, French Toast Sticks are perfect for dipping in a side of sweet syrup.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/762b75c140e14e4ae9c2dd1e02a8f70a20233638-400x266.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "Sausage, Egg, & Cheese CROISSAN'WICH",
      price: "5.49",
      calories: 480,
      desc: "The grab-and-go Sausage, Egg, & Cheese CROISSAN'WICH® is piled high with savoury sizzling sausage, eggs, and melted cheese on a toasted, flaky croissant.",
      img: "https://bk-ca-prd-01.s3.amazonaws.com/sites/burgerking.ca/files/Detail_Croissanwich_Sausage_egg_cheese.png",
    },
    {
      name: "Sausage, Egg, & Cheese English Muffin",
      price: "5.49",
      calories: 360,
      desc: "The Sausage, Egg, & Cheese English Muffin Sandwich is a combination of savoury sizzling sausage, tender eggs, and melted cheese nestled inside a toasted English muffin.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/546c4446da94eb6ddbee72f5f28f9d031d003993-400x266.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "Pancakes Platter",
      price: "4.79",
      calories: 450,
      desc: "Three warm, fluffy pancakes flavoured with a hint of vanilla and served with syrup.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/149dad511339b1e94011cf5927ba069fdc2983da-400x266.png?w=320&fm=webp&q=40&fit=max",
    }
  ]},
  {name: "Beverages", items: [
    {
      name: "Hot Chocolate",
      price: "1.79",
      calories: 130,
      desc: "Delicious and creamy, hot chocolate is simply a classic treat.",
      img: "https://bk-ca-prd-01.s3.amazonaws.com/sites/burgerking.ca/files/Detail-Hot%20Chocolate.png",
    },
    {
      name: "Smooth Roast Coffee",
      price: "1.79",
      calories: 5,
      desc: "Smooth Roast Coffee is made from 100% Arabica beans that delivers a balanced mild flavour and pairs perfectly with breakfast, lunch or dinner.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/23089bc5d8c85058f0bb653c2c000a9c41b82baa-870x570.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "Tea",
      price: "1.79",
      calories: 0,
      desc: "Delicious hot tea made just your way.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/23089bc5d8c85058f0bb653c2c000a9c41b82baa-870x570.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "Soft Drink",
      price: "2.70",
      calories: 250,
      desc: "7Up, Pepsi, Diet Pepsi, MUG Root Beer.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/914d4622706ce315e17fec221b684a2b71526c4d-348x252.png?w=320&fm=webp&q=40&fit=max",
    }
  ]},
  {name: "Desserts", items: [
    {
      name: "HERSHEY'S® Sundae Pie",
      price: "2.19",
      calories: 310,
      desc: "Say hello to the HERSHEY'S® Sundae Pie. One part crunchy chocolate crust and one part chocolate creme filling garnished with a delicious topping of fudge drizzle and real HERSHEY's chocolate chips. The HERSHEY'S trademark and trade dress are used under license by Burger King Corporation.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/c7c4c8b8d1d2b6fa594d00a1fa969dbf6d8e9740-400x266.png?w=320&fm=webp&q=40&fit=max",
    },
    {
      name: "Apple Turnover",
      price: "1.69",
      calories: 260,
      desc: "The Apple Turnover has a flaky, golden crust with a delicious, warm apple filling. It's the perfect way to finish any meal.",
      img: "https://bk-ca-prd-01.s3.amazonaws.com/sites/burgerking.ca/files/Hero-Apple%20Turnover.png",
    },
    {
      name: "Chocolate Fudge Sundae",
      price: "2.19",
      calories: 260,
      desc: "Cool and creamy, the made-to-order Chocolate Fudge Sundae is prepared with a velvety vanilla soft serve and finished with a delicious fudge swirl.",
      img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ea2d1fc0648270180e6c4dcfa123d170a5aec6bf-400x266.png?w=320&fm=webp&q=40&fit=max",
    }
  ]}
],"Bento Sushi": [
  {name: "Sushi", items: [
    {
      name: "TOKI COMBO",
      price: "8.99",
      calories: 470,
      desc: "ALLERGEN ALERT: CRUSTACEAN, WHEAT, SOY, FISH, EGG, MUSTARD, SESAME. MAY CONTAIN MILK, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/09/Toki-Combo_Clear-1024x1024.jpg",
    },
    {
      name: "HIKARI COMBO",
      price: "12.89",
      calories: 480,
      desc: "ALLERGEN ALERT:FISH, CRUSTACEAN, WHEAT, SOY, EGG, MUSTARD, SESAME. MAY CONTAIN MILK, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/09/Hikari-Combo_Clear-1024x1024.jpg",
    },
    {
      name: "VEGETABLE CRUNCH ROLL",
      price: "4.99",
      calories: 400,
      desc: "ALLERGEN ALERT:CONTAINS: WHEAT, SOY, EGG, MUSTARD, SESAME, SULPHITES. MAY CONTAIN FISH, CRUSTACEAN, MILK.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/05/Vegetable-Crunch-Roll-1024x1024.jpg",
    },
    {
      name: "PHILADELPHIA ROLL",
      price: "6.99",
      calories: 360,
      desc: "ALLERGEN ALERT:FISH, MILK, WHEAT, SOY, MUSTARD, SESAME. MAY CONTAIN EGG, CRUSTACEAN, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/04/Philadelphia-Roll-1024x1024.jpg",
    },
    {
      name: "CALIFORNIA FAMILY PACK",
      price: "15.99",
      calories: 310,
      desc: "ALLERGEN ALERT:FISH, MILK, WHEAT, SOY, MUSTARD, SESAME. MAY CONTAIN EGG, CRUSTACEAN, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/04/California-Family-Pack-1-1024x1024.jpg",
    }
  ]},
  {name: "Bowls", items: [
    {
      name: "Orange Chicken Bowl",
      price: "6.99",
      calories: 710,
      desc: "ALLERGEN ALERT:WHEAT, SOY, EGG, MILK. MAY CONTAIN FISH, CRUSTACEAN, MUSTARD, SESAME, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/03/Orange-Chicken-Donburi-1024x1024.jpg",
    },
    {
      name: "TEMPURA SHRIMP UDON SOUP",
      price: "5.99",
      calories: 470,
      desc: "ALLERGEN ALERT:CONTAINS: SOY, WHEAT, FISH, CRUSTACEAN, EGG. MAY CONTAIN MILK, MUSTARD, SESAME, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/05/Udon-Noodle-Bowl-1024x1024.jpg",
    },
    {
      name: "Chicken Teriyaki Donburi",
      price: "4.99",
      calories: 460,
      desc: "ALLERGEN ALERT: CONTAINS: WHEAT, SOY, SESAME. MAY CONTAIN FISH, CRUSTACEAN, EGG, MILK, MUSTARD, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/02/Chicken-Teriyaki-Rice-bowl-1024x1024.jpg",
    },
    {
      name: "RAMEN – CHASU WITH TONKOTSU",
      price: "9.99",
      calories: 1060,
      desc: "ALLERGEN ALERT:SOY, WHEAT, FISH, SESAME, SULPHITES, EGG. MAY CONTAIN CRUSTACEAN, MUSTARD, MILK.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/02/Ramen-Noodle-Bowl-1024x1024.jpg",
    },
    {
      name: "HONEY GARLIC CHICKEN NOODLE BOWL",
      price: "7.99",
      calories: 450,
      desc: "ALLERGEN ALERT: CONTAINS: SOY, WHEAT, SESAME. MAY CONTAIN FISH, CRUSTACEAN, EGG, MILK, MUSTARD, SULPHITES.",
      img: "https://www.bentosushi.com/wp-content/uploads/2019/02/Honey-Garlic-Chicken-Noodle-Bowl-1-1024x1024.jpg",
    }
  ]}
]};
