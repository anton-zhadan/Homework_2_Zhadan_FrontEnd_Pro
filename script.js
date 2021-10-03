price = 0;
applePrice = 10;
orangePrice = 12;
kiwiPrice = 15;


let answer = prompt ('Do you want fruits?');
if (answer == 'yes') {
    alert ("Ok, let's start! 😉");

prompt ("Do you want 🍎?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🍎."));
    price = price + x*applePrice;
    alert (price);
}    

prompt ("Do you want 🍊?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🍊."));
    price = price + x*orangePrice;
    alert (price);
}

prompt ("Do you want 🥝?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🥝"));
    price = price + x*kiwiPrice;
    alert (price);
}

price = x*applePrice+x*orangePrice+x*kiwiPrice;
document.write(`<h1>Final price is ${price}</h1>`);
}   
else  {
    alert ("Oh, bye 😔."); 
}