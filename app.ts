//alert("hej")

document.addEventListener("DOMContentLoaded",() => {
 
    let a ;
    let b ;

   // let summa = a + b;

    //console.log(summa);

        let volym = (radie:number,hojd:number) => {
            return Math.PI * (radie) * (radie) * (hojd) / 3;
        }

        document.querySelector("#summera")?.addEventListener("click",() => {

            a = (document.querySelector("#a") as HTMLInputElement).value;
            b = (document.querySelector("#b") as HTMLInputElement).value;

            let summa = volym(parseInt(a),parseInt(b));

            
            // for(let i = 0; i<10;i++){
            //     let x = i * 10;
            //     console.log(x);
            // }
            
            let svar = (document.querySelector("#summa")as HTMLElement).textContent = summa.toString();

        }
        );



});