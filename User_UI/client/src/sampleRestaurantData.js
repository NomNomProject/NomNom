const restaurantData = [
  {
    resId: 1,
    resName: 'The Bird',
    resActive: true,
    resContact: {email: 'TheBird@tomtom.com', phone: '123-123-1234'},
    resAddress: '115 Montgomery Street, San Francisco CA 94105',
    resLocation: [37.790343, -122.402202],
    transHist: [
      { meal: 'Chicken Sandwhich', customer: 'Kevin', status: 'pickedUp', price: 4.50, quantity: 1 },
    ],
    resMeals: [
      { name: 'Chicken Sandwhich', active: true, price: 4.50, quantity: 5, picture: 'https://www.omahasteaks.com/gifs/990x594/rb035.jpg' },
      { name: 'Green Beans', active: false, price: 1, quantity: 0, picture: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/9/23/0/CCPLBSP1H_Heavenly-Sauteed-String-Beans-with-Garlic_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516897726695.jpeg' },
      { name: 'Mashed Potatoes', active: false, price: 1, quantity: 0, picture: 'https://www.skinnytaste.com/wp-content/uploads/2018/01/Instant-Pot-Mashed-Potatoes-1-5.jpg' }
    ],
    resStats: { totalMeals: 348, revenue: 5002.98, turtles: 89, YUMYUM: 200 }
  },
  {
    resId: 2,
    resName: 'Golden Gate Bakery',
    resActive: true,
    resContact: {email: 'GoldenGateBakery@tomtom.com', phone: '122-122-1222'},
    resAddress: '1029 Grant Avenue, San Francisco CA 94133',
    resLocation: [37.796389, -122.406721],
    transHist: [
      { meal: 'Pork Bun', customer: 'Adrian', status: 'pickedUp', price: 10, quantity: 4 },
    ],
    resMeals: [
      { name: 'Pork Bun', active: true, price: 2.50, quantity: 8, picture: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/08/05/pork-buns-ck-1734314-x.jpg?itok=n7Pis2lZ' },
      { name: 'Pinapple Bun', active: false, price: 2.50, quantity: 0, picture: 'https://du7ybees82p4m.cloudfront.net/5767fb25d52a76.13134167.jpg?wresIdth=1820&height=1023' },
      { name: 'Croissant', active: false, price: 3.00, quantity: 0, picture: 'https://www.seriouseats.com/recipes/images/2011/08/20110817-166611-flour-croissants.jpg' }
    ],
    resStats: { totalMeals: 559, revenue: 2789.54, turtles: 76, YUMYUM: 467 }
  },
  {
    resId: 3,
    resName: 'Fogo de Chao',
    resActive: true,
    resContact: {email: 'Fogo@tomtom.com', phone: '223-334-4444'},
    resAddress: '201 S 3rd Street Suite 100, San Francisco, CA 94103',
    resLocation: [37.784736, -122.400133],
    transHist: [
      { meal: '12oz Ribeye', customer: 'Bryce', status: 'pickedUp', price: 24, quantity: 2 },
    ],
    resMeals: [
      { name: '12oz Ribeye', active: true, price: 12, quantity: 10, picture: 'https://www.calvettimeats.com/wp-content/uploads/2016/12/Black-Angus-Beef-Ribeye-Steak-12-oz-1024x684.jpg' },
      { name: 'Lamb Shank', active: true, price: 10, quantity: 4, picture: 'https://www.ibreatheimhungry.com/wp-content/uploads/2019/04/IPlambshanks3.jpg' },
      { name: '6oz Sirloin', active: false, price: 11, quantity: 0, picture: 'https://cdn.shopify.com/s/files/1/1727/0315/products/Sirloin_steak-1.jpg?v=1484941276' }
    ],
    resStats: { totalMeals: 1293, revenue: 7889.23, turtles: 539, YUMYUM: 8867 }
  }
];

module.exports = {
  restaurantData
}