
function pesquisar(){
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")
    let numTabuada = document.getElementById("num-tabuada").value
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""
    if(!numTabuada){
        section.innerHTML = "<h1>Digite o número da tabuada!!</h1>"
        return
    }
    // Itera sobre cada dado da pesquisa
    for (let i=0; i < dados.length;i++){
        // Cria um novo elemento div para cada resultado
        //<a href="${dado.link}" target="_blank">Mais Informações</a>  
        if (dados[i].id == numTabuada){
            for(let y=0;y<dados[i].tabuada.length;y++){
                resultados += 
                    `<div class="item-resultado">
                        <h2>
                            ${dados[i].titulo}
                        </h2>
                        <a href="#" onclick="geraResultado(${y+1},${dados[i].id})"> <p class="descricao-meta">${dados[i].tabuada[y]}</p><br></a><br>
                    </div>` 
            }        
        }                      
    }   
    if(!resultados){
        section.innerHTML = "<h1>Número de tabuada não encontrado. Tente novamente!!</h1>"
        return
    }     
    section.innerHTML = resultados
}

function geraResultado(num,id){

    let section = document.getElementById("resultados-pesquisa")
    let resultado = ""

    resultado = "<h1>O resultado é: "+num*id+"<h1/>";
    section.innerHTML = resultado
}
