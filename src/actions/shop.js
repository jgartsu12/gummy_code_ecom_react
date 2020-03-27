import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All Food'
            },
            {
                _id: 1,
                title: 'Breakfast'
            },
            {
                _id: 2,
                title: 'Wraps'
            },
            {
                _id: 3,
                title: 'Burritos'
            },
            {
                _id: 4,
                title: 'Paninis'
            },
            {
                _id: 5,
                title: 'Bakery'
            },
            {
                _id: 6,
                title: 'Coffee & Tea'
            },
            {
                _id: 7,
                title: 'Daily Soups'
            },
        ]

    })
}


export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Breakfast Sandwhich',
                description: 'A delicious two egg sandwhich, with your choice of cheese, meat (sausage, bacon, ham, or taylor ham), and choice of artisan bread.',
                price: 4.85,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 1,
                title: 'Omelets',
                description: 'Three egg ommlete with your choice of cheese, meat, or vegetables. Comes with side of hashbrown or sweet potatoe homefries, and artisan sourdough. Choice of Chefs, Western, Feta & Spinach, Bacon, Crossfit, Tomato & Fresh Basil Special Omeletes as well',
                price: 12.00,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 2,
                title: 'Breakfast Wrap',
                description: 'A delicious two egg wrap, with your choice of cheese, meat (sausage, bacon, ham, or taylor ham), or vegetables, and choice of wrap. Gluten free wrap available.',
                price: 7.98,
                belongsTo: [0, 1, 4],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 3,
                title: 'BBQ Chicken Cheddar Wrap',
                description: 'BBQ sauce with chicken tenders and cheddar cheese in a sundried tomato wrap.',
                price: 10.00,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 4,
                title: 'BBQ Cheddar Pulled Pork Wrap',
                description: 'BBQ sauce with pulled pork and cheddar cheese in a sundried tomatoe wrapp',
                price: 11.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 5,
                title: 'Chicken Fajita Wrap',
                description: 'Chicken Tenders, Cheddar Cheese, Peppers & Onions in plain wrap',
                price: 9.99,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 6,
                title: 'Italian Chicken Wrap',
                description: 'Chicken Tenders, Mozzarella, Eggplant, Tomato & Tomato Sauce',
                price: 11.99,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 7,
                title: 'Buffalo Chicken Tender',
                description: 'Chicken Tenders, Hot Sauce, Blue Cheese & Romaine',
                price: 8.75 ,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 8,
                title: 'Grilled Chicken Caesar',
                description: 'Grilled Chicken, Romaine & Caesar Dressing',
                price: 8.75 ,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 9,
                title: 'Turkey Club',
                description: 'Turkey, Bacon, Swiss, Lettuce, Tomato & Mayo',
                price: 8.75 ,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 8,
                title: 'Cape Cod',
                description: 'Turkey, Mayo, Stuffing & Cranberry Sauce',
                price: 8.75 ,
                belongsTo: [0, 2],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 9,
                title: 'Tomato Basil Mozzarella',
                description: 'Sliced Tomato, Fresh Mozzarella, Pesto & Herb Basil',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 10,
                title: 'Grilled Veggie',
                description: 'Grilled Zucchini, Sqaush, Eggplant, Pesto & Mozzarella',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 11,
                title: 'Chicken Apple & Brie',
                description: 'Roasted Chicken, Brie, Apple & Honey Mustard',
                price: 12.00,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 12,
                title: 'Grilled Chickne Mozzarella',
                description: 'Grilled Chicken, Romaine, Sliced Tomato, Fresh Mozzarella, Pesto & Herb Basil',
                price: 12.75,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 13,
                title: 'Chicken Reuben',
                description: 'Sliced Chicken, Coleslaw, Bacon, Swiss, & Russian Dressing',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 14,
                title: 'Classic Reuben',
                description: 'Corned Beef, Sauerkraut, Swiss Cheese, & Russian Dressing',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 15,
                title: 'Cuban',
                description: 'Slow Briased Pork, Ham, Pickles, Swiss & Mustard in Wedge',
                price: 9.50,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 16,
                title: 'Chicken Parmesian',
                description: 'Chicken cutlet with parmesian cheese, tomato sauce in wedge',
                price: 9.50,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 17,
                title: 'Marley',
                description: 'Jerk Chicken, Frizzled Onions, Pepper Jack Cheese & BBQ sauce on hard roll',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 18,
                title: 'Spicy Chicken Burrito',
                description: 'Spicy Chicken Breast, Rice, Beans & Cheese',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 19,
                title: 'Flank Steak Burrito',
                description: 'Grilled Steak, onions, peppers & cheese',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 20,
                title: 'Tuscan Burrito',
                description: 'Grilled Veggies, Brown Rice, Pesto, & Goat Cheese',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 21,
                title: 'Ground Turkey Burrito',
                description: 'Ground Turkey, Refried Beans, Onions & Peppers',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 22,
                title: 'Black Bean Burrito',
                description: 'Black Beans, Brown Rice, Sauteed Peppers & Onions with or without cheese',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 23,
                title: 'The Stag',
                description: 'BBQ Pulled Pork, Eggs, cheedar on wrap',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 24,
                title: 'Tomato Basil Mozzarella',
                description: 'Sliced Tomato, Fresh Mozzarella, Pesto & Herb Basil',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 25,
                title: 'Egg Plates',
                description: 'Two eggs fried or scrambled to your liking with toast and potatoes',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 26,
                title: 'Organic Chef\'s Made Bagels',
                description: 'Fresh bagels made daily by baker/owner',
                price: 2.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 27,
                title: 'Homemade Croissants',
                description: 'Croissants made daily by baker',
                price: 3.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 28,
                title: 'Housemade Almond Croissants',
                description: 'Croissant made with almonds and almond paste',
                price: 3.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 29,
                title: 'French Toast Sticks',
                description: 'Artsian Bread soaked in eggs',
                price: 4.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 30,
                title: 'Home Fresh Baked Muffins',
                description: 'Homemade Muffins',
                price: 2.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 31,
                title: 'Fresh Fruit salad',
                description: 'Fresh Cut Fruit mixed',
                price: 4.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 32,
                title: 'Steel Cut Oatmeal',
                description: 'Steel Cut oats',
                price: 5.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 33,
                title: 'Hot Coffee',
                description: 'Fresh Organic Coffee',
                price: 2.86, // how to have diff prices for diff sizes?
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 34,
                title: 'Hot Tea',
                description: 'Organic Tea Selection',
                price: 9.86, // different size prices
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 35,
                title: 'Iced coffee',
                description: 'Ice Jims Organic Coffee',
                price: 9.86, //price adj
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 36,
                title: 'Iced Tea',
                description: 'Iced Tea home brewed',
                price: 9.86, //price adj size
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 37,
                title: 'Italian Wedding Soup',
                description: 'Veggie Broth with homemade artisan meatballs',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 38,
                title: 'Chicken Noodle Soup',
                description: 'Chicken broth with noodles and chicken',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 39,
                title: 'Chicken Motzah Ball Soup',
                description: 'Chicken broth with motzah balls and chicken',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 40,
                title: 'Tomatoe Soup',
                description: 'Garden picken tomatoes made into soup with cream',
                price: 9.86,
                belongsTo: [0,3],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
        ]
    })
}