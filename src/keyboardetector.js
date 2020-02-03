var i = 0,
initialScreenHeight = window.innerHeight, //Checks initial height of the screen 
initialScreenWidth = window.innerWidth,
types = ["text", "password", "email", "number", "search", "tel", "url"];

types.forEach((el) => {
    $('input[type="' + el + '"]').focus(addClass);
    $('input[type="' + el + '"]').blur(removeClass);
});
$('textarea').focus(addClass);
$('textarea').blur(removeClass);

function check() { //Actual screen height change checking code
    if (initialScreenHeight !== window.innerHeight && initialScreenWidth === window.innerWidth) {
        addClass();
        return true;
    } else {
        removeClass();
        return false;
    }
}

function addClass() { //Adds keyboard active class
    var fn = function () {
        if (initialScreenHeight !== window.innerHeight && initialScreenWidth === window.innerWidth) {
            $('#header').css('bottom', -Math.abs(initialScreenHeight - window.innerHeight));
        }
        $(window).off('resize', fn);
    };
    $(window).one('resize', fn);
}

function removeClass() { //Removes keyboard active class
    var fn = function () {
        setTimeout(function () {
            if (initialScreenHeight === window.innerHeight && initialScreenWidth === window.innerWidth) {
                $('#header').css('bottom', '');
            }
            $(window).off('resize', fn);
        }, 50);
    };
    $(window).one('resize', fn);
}