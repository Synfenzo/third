//alert("hej")

document.addEventListener("DOMContentLoaded",() => {
 
    let a ;
    let b ;

   // let summa = a + b;

    //console.log(summa);



        document.querySelector("#summera")?.addEventListener("click",() => {

            a = (document.querySelector("#a") as HTMLInputElement).value;
            b = (document.querySelector("#b") as HTMLInputElement).value;

            let summa = (Math.PI * parseInt(a) * parseInt(a) * parseInt(b) / 3);
            
            let svar = (document.querySelector("#summa")as HTMLElement).textContent = summa.toString();

        }
        );



});