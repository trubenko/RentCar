var f = function(a) {
    console.log(a)
};

function throttle(f, ms) {
   return function() {
       var clear;

       if (clear) {
           clear = setTimeout(f, ms);
           clearTimeout(clear);
       }
       clear = setTimeout(f, ms);
   }
}

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
