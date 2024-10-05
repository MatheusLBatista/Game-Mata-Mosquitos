var height = 0
var width = 0
var lives = 1
var time = 15

var createMosquitoTime = 1500

var level = window.location.search
level = level.replace('?', '')

if(level === 'normal'){

    createMosquitoTime = 1500

} else if(level === 'hard'){

    createMosquitoTime = 1000

} else if (level ==='impossible'){

    createMosquitoTime = 750

}

function adjustGamesSize(){
    height = window.innerHeight
    width = window.innerWidth
    
    console.log(width, height)
}

adjustGamesSize()

var stopwatch = setInterval(function() {

    time--

    if(time < 0){

        clearInterval(stopwatch)
        clearInterval(createMosquito)
        window.location.href = 'victory.html'

    } else {
        document.getElementById('stopwatch').innerHTML = time
    }
    
}, 1000);

function randomPosition(){

    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(lives>3){
            window.location.href = 'game_over.html'
        }

        else{
            document.getElementById('life' + lives).src="imagens/imagens/coracao_vazio.png"
        
            lives++
        }
    }

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY)

    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/imagens/mosca.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position ='absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function randomSize(){
    var randomClass = Math.floor (Math.random() * 3)

    switch (randomClass){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function randomSide(){
    var randomSide = Math.floor (Math.random() * 2)

    switch (randomSide){
        case 0:
            return 'sideA'

        case 1:
            return 'sideB'
    }
}