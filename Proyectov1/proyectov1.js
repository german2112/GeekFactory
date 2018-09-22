

/*let formulario = document.getElementById("lista");
formulario.style.display="none";*/

let objetoCriterios={
  nombre: "",
  prioridad:0,
  tipo:"",
  escala:""
}

let arrayCriterios=[];

function agregarCriterio(){
  objetoCriterios.nombre = document.getElementById("nombre").value;
  objetoCriterios.tipo = document.getElementById("tipoCriterio").value;
  objetoCriterios.escala = document.getElementById("calificacion").value;

  let objCopia=Object.assign({},objetoCriterios);
  arrayCriterios.push(objCopia);
  objetoCriterios={
    nombre:"",
    prioridad:0,
    tipo:"",
    escala: ""
  }
  recuperarCriterios(arrayCriterios);
}

function recuperarCriterios(arr){
  let ul=document.getElementById('lista');
  for(let i=arr.length-1;i<arr.length;i++){
    let li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML+=arr[i].nombre+" "+arr[i].tipo+" "+arr[i].escala;
  }
}

