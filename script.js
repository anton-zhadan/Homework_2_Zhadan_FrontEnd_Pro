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
    sum = x*10+price;
    alert (sum);
}

prompt ("Do you want 🍊?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🍊."));
    sum = x*12+price;
    alert (sum);
}

prompt ("Do you want 🥝?");
if ('yes') {
    x = parseInt (prompt ("Enter count of 🥝"));
    sum = x*15+price;
    alert (sum);
}

document.write (price);