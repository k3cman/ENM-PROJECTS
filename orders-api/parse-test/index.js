let order =
  'a:2:{s:32:"2865ec6484c2674e4abdabf300478f6d";a:7:{s:5:"rowid";s:32:"2865ec6484c2674e4abdabf300478f6d";s:2:"id";s:6:"125843";s:4:"name";s:25:"EASIL LISABON WC ŠOLJA S";s:3:"qty";s:1:"1";s:5:"price";d:2961.9499999999998;s:7:"options";a:6:{s:5:"ident";s:13:"2510B99199001";s:14:"packaging_size";s:1:"1";s:5:"mu_ps";s:3:" ";s:2:"mu";s:3:"KOM";s:6:"weight";s:4:"18.5";s:17:"central_warehouse";s:1:"1";}s:8:"subtotal";d:2961.9499999999998;}s:32:"381b17b88ee0f651a98dcc325d267ae4";a:7:{s:5:"rowid";s:32:"2865ec6484c2674e4abdabf300478f6d";s:2:"id";s:6:"125843";s:4:"name";s:25:"EASIL LISABON WC ŠOLJA S";s:3:"qty";s:1:"1";s:5:"price";d:2961.9499999999998;s:7:"options";a:6:{s:5:"ident";s:13:"2510B99199001";s:14:"packaging_size";s:1:"1";s:5:"mu_ps";s:3:" ";s:2:"mu";s:3:"KOM";s:6:"weight";s:4:"18.5";s:17:"central_warehouse";s:1:"1";}s:8:"subtotal";d:2961.9499999999998;}s:32:"381b17b88ee0f651a98dcc325d267ae4";a:7:{s:5:"rowid";s:32:"2865ec6484c2674e4abdabf300478f6d";s:2:"id";s:6:"125843";s:4:"name";s:25:"EASIL LISABON WC ŠOLJA S";s:3:"qty";s:1:"1";s:5:"price";d:2961.9499999999998;s:7:"options";a:6:{s:5:"ident";s:13:"2510B99199001";s:14:"packaging_size";s:1:"1";s:5:"mu_ps";s:3:" ";s:2:"mu";s:3:"KOM";s:6:"weight";s:4:"18.5";s:17:"central_warehouse";s:1:"1";}s:8:"subtotal";d:2961.9499999999998;}s:32:"381b17b88ee0f651a98dcc325d267ae4";a:7:{s:5:"rowid";s:32:"381b17b88ee0f651a98dcc325d267ae4";s:2:"id";s:6:"125854";s:4:"name";s:18:"EASIL SLICE LVB 45";s:3:"qty";s:1:"1";s:5:"price";d:1533.6600000000001;s:7:"options";a:6:{s:5:"ident";s:13:"2510B9919900F";s:14:"packaging_size";s:1:"1";s:5:"mu_ps";s:3:" ";s:2:"mu";s:3:"KOM";s:6:"weight";s:1:"8";s:17:"central_warehouse";s:1:"1";}s:8:"subtotal";d:1533.6600000000001;}}';

const arr = order.substr(45).split(';a:7:{s:5:"rowid";');

console.log(arr);

//item name
const name = arr[1].match(new RegExp('s:4:"name";' + "(.*)" + 's:3:"qty"'));
const name2 = arr[3].match(new RegExp('s:4:"name";' + "(.*)" + 's:3:"qty"'));
//console.log(name);
//console.log(name2);

const extractName = name[1].split(/"/);
//console.log(extractName[1]);

//Product Name
const productName = arr[1]
  .match(new RegExp('s:4:"name";' + "(.*)" + 's:3:"qty"'))[1]
  .split(/"/)[1];
//console.log(productName);

//Price -- ROUND VALUE
const price = arr[1].match(new RegExp('"price";d:' + "(.*)" + ";s:7"))[1];
//console.log(price);

//Quantity
const quantity = arr[1]
  .match(new RegExp('"qty";s:1:' + "(.*)" + ';s:5:"price";'))[1]
  .split(/"/)[1];

console.log("product name", productName, "price", price, "quantity", quantity);

const parsedOrder = [];

function get() {
  for (var i = 0; i < arr.lenght; i++) {
    parsedOrder.push("nemanja");
  }
}
