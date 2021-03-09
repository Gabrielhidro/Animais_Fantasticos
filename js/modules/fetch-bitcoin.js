export default function initFetchBitcoin(){
    fetch("https://blockchain.info/ticker")
    .then(responde => responde.json())
    .then(json => {
        const btcPreco = document.querySelector(".btc-preco")
        btcPreco.innerHTML = (1000 / json.BRL.sell).toFixed(4) //to fixed seleciona quantas casas decimais 
    
    })
}


