setTimeout(function () {
    console.log("Hello, World!");
    setTimeout(function () {
        console.log('Tick', 1);
    }, 1000);
}, 1000);
