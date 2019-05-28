
// var is function scopped - visible anywhere inside the function
// Let is block scopped - visible only in block

function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }

    //tuce is *not* visible out here
 //   console.log(" tuce " + tuce);   
}

allyIlliterate();

function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    }

    //nish *is* visible out here
    console.log(" nish " + nish);
}

byE40();