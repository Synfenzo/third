"use strict";
//alert("hej")
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    var a;
    var b;
    // let summa = a + b;
    //console.log(summa);
    var volym = function (radie, hojd) {
        return Math.PI * (radie) * (radie) * (hojd) / 3;
    };
    (_a = document.querySelector("#summera")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        a = document.querySelector("#a").value;
        b = document.querySelector("#b").value;
        var summa = volym(parseInt(a), parseInt(b));
        // for(let i = 0; i<10;i++){
        //     let x = i * 10;
        //     console.log(x);
        // }
        var svar = document.querySelector("#summa").textContent = summa.toString();
    });
});
