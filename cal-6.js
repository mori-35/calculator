const btn = document.querySelector('#btn');
const btnAC = document.querySelector('#btnAC');
const btnLB = document.querySelector('#btnLB');
const btnRB = document.querySelector('#btnRB');
const btnDeath = document.querySelector('#btnDeath');


const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btnP = document.querySelector('#btnP');
const btnM = document.querySelector('#btnM');
const btnX = document.querySelector('#btnX');
const btnD = document.querySelector('#btnD');
/*const btnEX = document.querySelector('#btnEX');*/
const btnR = document.querySelector('#btnR');

const p1 = document.querySelector('#p1');
const re = document.querySelector('#re');
/*----------------------------定義-------------------*/

btnDeath.addEventListener('click',()=> {
    x="";
    y="";
    z=[];
    
    re.innerText=" G A M E O V E R !!";
})


/*--------------------------数字ボタン------------------*/
let x = "";
let y ="";
let z =[];
let zz = [];
let w = 0;


btn0.addEventListener('click',() => {
    x = x + "0";
    y = y + "0";
    re.innerText = x;
})

btn1.addEventListener('click',() => {
    x = x + "1";
    y = y + "1";
    re.innerText = x;
})
btn2.addEventListener('click',() => {
    x = x + "2";
    y = y + "2";
    re.innerText = x;
})

btn3.addEventListener('click',() => {
    x = x + "3";
    y = y + "3";
    re.innerText = x;
})

btn4.addEventListener('click',() => {
    x = x + "4";
    y = y + "4";
    re.innerText = x;
})
btn5.addEventListener('click',() => {
    x = x + "5";
    y = y + "5";
    re.innerText = x;
})

btn6.addEventListener('click',() => {
    x = x + "6";
    y = y + "6";
    re.innerText = x;
})
btn7.addEventListener('click',() => {
    x = x + "7";
    y = y + "7";
    re.innerText = x;
})

btn8.addEventListener('click',() => {
    x = x + "8";
    y = y + "8";
    re.innerText = x;
})

btn9.addEventListener('click',() => {
    x = x + "9";
    y = y + "9";
    re.innerText = x;
})



/*--------------------------数字ボタン------------------*/

/*--------------------------演算ボタン------------------*/
btnP.addEventListener('click',() => {

    x = x + " + ";
    z.push(y);
    z.push("+");

    y = "";
    re.innerText = x;

    console.log("足し算");
    console.log(z);
})

btnM.addEventListener('click',() => {
    x = x + " - ";
    z.push(y);

     console.log(z);

    if(z.indexOf("") !== -1) {
        z[z.indexOf("")] = 0
    }
    z.push("-");

    y = "";

    re.innerText = x;
})


btnX.addEventListener('click',() => {
    x = x + " × ";
    z.push(y);
    z.push("*");

    y = "";
    re.innerText = x;
})

btnD.addEventListener('click',() => {
    x = x + " ÷ ";
    z.push(y);
    z.push("/");

    y = "";
    re.innerText = x;
})

/*btnEX.addEventListener('click',() => {
    x = x + "^";
    z.push(y);
    z.push("**");

    y = "";
    re.innerText = x;
})*/


btnR.addEventListener('click' , () => {

    console.log("CalculateStart");
    z.push(y)
    y = "";

    equalSpeed(z);

    if(!isNaN(z[0])) {
    x = x + " = " + z[0];
    re.innerText = x;

    } else {
        re.innerText = "エラー";
    } 

});

btnAC.addEventListener('click', () => {
    x="";
    y="";
    z=[];
    
    re.innerText = "結果";

})

btnLB.addEventListener('click',() => {
    x = x + " ( ";
    zz.push(z);
    z = [];
    y="";
    re.innerText = x;

    console.log(zz);
});

btnRB.addEventListener('click',() => {
    x = x + " ) ";
    z.push(y);

    re.innerText = x;
    console.log(zz +"です");
    equalSpeed(z);

    zz.push(z[0]);
console.log(zz);
    z = [];

    z = zz[zz.length -2];

    y = zz[zz.length -1];
console.log(z);
console.log(y);
    zz.splice(zz.length-2,2)
console.log(zz);
 
});



/*------------------equalSpeed　ここから---------------------*/

let equalSpeed = (num) => {

console.log(z); /*check*/ 

while(num.indexOf('**')>=0) {

    let i = num.indexOf('**')
    let n = parseFloat(num[i-1]) ** parseFloat(num[i+1]);
    num[i-1] = n;
    num.splice(i,2);
    console.log(num);  /*check*/ 
}

while(num.indexOf('*')>=0 || num.indexOf('/') >=0) {
    let i = num.indexOf('*')
    let j = num.indexOf('/')

    if((i !== -1 && i<j) || j === -1) {

         let n = parseFloat(num[i-1]) * parseFloat(num[i+1]);
         num[i-1] = n;
         num.splice(i,2);
         console.log(num);  /*check*/ 

    } else if((j !==-1 && i>j) || i=== -1) {

        let n = parseFloat(num[j-1]) / parseFloat(num[j+1]);
        num[j-1] = n;
        num.splice(j,2);
        console.log(num);  /*check*/ 
    }

}

while(num.indexOf('+')>=0 || num.indexOf('-') >=0) {
    let i = num.indexOf('+')
    let j = num.indexOf('-')

    if((i !== -1 && i<j) || j === -1) {

         let n = parseFloat(num[i-1]) + parseFloat(num[i+1]);
         num[i-1] = n;
         num.splice(i,2);
         console.log(num);  /*check*/ 

    } else if((j !==-1 && i>j) || i=== -1) {

        let n = parseFloat(num[j-1]) - parseFloat(num[j+1]);
        num[j-1] = n;
        num.splice(j,2);
        console.log(num);  /*check*/ 
    }

}

}

/*--------------------テスト--------------*/
