var up = document.querySelectorAll('#Up');
var down=document.querySelectorAll('#down');
var val = document.querySelectorAll('#val');
var add=document.querySelectorAll('#Addbutton');

add.forEach((value, index) => {
    value.addEventListener('click', () => {
        let va = val[index];

        let n = parseInt(va.textContent);
        if (n <= 9) {
            va.textContent = n + 1;
        }
    })
});

up.forEach((value, index) => {
    value.addEventListener('click', () => {
        let va = val[index];

        let n = parseInt(va.textContent);
        if (n <= 9) {
            va.textContent = n + 1;
        }
    })
});

down.forEach((value,index)=>{
    value.addEventListener('click',()=>{
        let va = val[index];

        let n = parseInt(va.textContent);
        if (n > 0) {
            va.textContent = n - 1;
        }
    })
});


function checkOut(){
    
   var product=document.querySelectorAll('.product');
    var output=new Array();
    var quantity=new Array();
   product.forEach((value,index)=>{
    var qty=parseInt(value.querySelector("#val").textContent);
    var img=value.querySelector('.Productimages').getAttribute('src');
    if(qty>0)
    { 
        output.push(img);
        quantity.push(qty);
        // console.log(qty);
    }
   });

   localStorage.setItem("checkOut", JSON.stringify(output));
   localStorage.setItem("quanity", JSON.stringify(quantity));

//    var y=JSON.parse(localStorage.getItem("quanity"));
//     y.forEach((value)=>{
//         console.log(value);
//     })
}
