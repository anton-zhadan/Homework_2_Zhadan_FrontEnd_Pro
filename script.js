price = 0;
applePrice = 10;
orangePrice = 12;
kiwiPrice = 15;

prompt ('Do you want fruits?');
if ('yes') {
    alert ("Ok, let's start! 😉");
    //if ('no'){
        //alert ("Oh, bye 😔.")
    //}
}

prompt ("Do you want 🍎?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🍎."));
    sum = x*10;
    alert (sum);
}

prompt ("Do you want 🍊?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🍊."));
    sum = x*12;
    alert (sum);
}

prompt ("Do you want 🥝?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🥝"));
    sum = x*15;
    alert (sum);
}

price_all_fruits = x*10+x*12+x*15;

document.write(`<h1>Final price is ${price_all_fruits}</h1>`);