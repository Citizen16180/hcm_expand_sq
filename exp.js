function run() {
var interval = setInterval(function() {
    var h1Elements = document.querySelectorAll('h1');
    
    h1Elements.forEach(function(element) {
        if (element.textContent.trim() === "Skills and Qualifications") {
            console.log('Found the h1 element with the desired text!');
			expand();
            clearInterval(interval); // stop the recurring function
        }
    });
}, 2000);
};

function expand() {
    var elements = document.querySelectorAll('.x3ae.x3ad.hideInEditMode.xeq.p_AFIconOnly > a');

    elements.forEach(function(element) {
        if(element) {
            element.click();
        } else {
            console.log('Element not found!');
        }
    });
}

run();
