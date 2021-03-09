export default function initFetchAnimais(){
    async function animaisFetch (url){

        const animaisResponse = await fetch(url)
        const animaisDados = await animaisResponse.json()
        const gridAnimais = document.getElementById("numeros-grid")
    
        animaisDados.forEach(animal => {
            const divAnimal = createAnimal(animal)
    
            gridAnimais.appendChild(divAnimal)
        });
    }
    
    function createAnimal(animal){
    
        const div = document.createElement("div")
    
        div.classList.add("numeros-animal")
        div.innerHTML = `<h3>${animal.nome}</h3>
        <span data-numero>${animal.total}</span>`
    
        return div;
    }
    
    animaisFetch('./animaisapi.json')
}
