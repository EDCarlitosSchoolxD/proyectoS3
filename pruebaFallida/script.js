const xhr = new XMLHttpRequest();
const myApp = document.getElementById("myApp");
const marca = document.getElementById("marca");
const procesadores = document.getElementById('procesadores');

let listPro =[]


  marca.addEventListener("change", function(){
  //console.log(this.value);
   peticion("./procesador.php",'POST','procesador',this.value, function(xd){
     listPro = xd;
   });
   pintarComboBox(listPro,procesadores);

});

function pintarComboBox(array,cBox) {
    cBox.innerHTML = "";
    array.forEach((arr,i) => {
        cBox.innerHTML +=('beforebegin',`<option value="${arr}">${arr}</option>`)
    });
}

/*


*/
function peticion(url, method,name,value,callback) {
  console.log("Se ejecuta antes");
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      myApp.innerHTML = xhr.responseText;

       const resultado = JSON.parse(xhr.responseText);
        if(callback) return callback(resultado);
      }
  };

  xhr.send(`${name}=${value}`); // Envio la solicitud
  console.log("Se ejecuta despues");
}
