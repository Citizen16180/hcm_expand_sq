window.onload = function() {
    setTimeout(expand, 5000);
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
