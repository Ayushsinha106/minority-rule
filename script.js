const player0 = document.querySelector('#player0')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const player3 = document.querySelector('#player3')
const player4 = document.querySelector('#player4')
const player5 = document.querySelector('#player5')
const player6 = document.querySelector('#player6')
const player7 = document.querySelector('#player7')
const player8 = document.querySelector('#player8')
const player9 = document.querySelector('#player9')
const player10 = document.querySelector('#player10')
const player11 = document.querySelector('#player11')
const player12 = document.querySelector('#player12')
const player13 = document.querySelector('#player13')
const player14 = document.querySelector('#player14')
const player15 = document.querySelector('#player15')
const player16 = document.querySelector('#player16')
const player17 = document.querySelector('#player17')
const player18 = document.querySelector('#player18')
const player19 = document.querySelector('#player19')
const player20 = document.querySelector('#player20')


const chatBox = document.querySelector('.chatBox')
const chatBody = document.querySelector('.chatBody')
const showChat = document.querySelector('.showChat')
const startDiv = document.querySelector('.startDiv')
const playAgain = document.querySelector('.playAgain')
const startGame = document.querySelector('#startGame')
const players = document.querySelector('.players')
const selectionDiv = document.querySelector('.selectionDiv')
const questionDiv = document.querySelector('.questionDiv')
const yesOption = document.querySelector('.yesOption')
const noOption = document.querySelector('.noOption')
const winnerDiv = document.querySelector('.winnerDiv')
const question = document.querySelector('#question')
const yesScore = document.querySelector('.yesScore')
const noScore = document.querySelector('.noScore')
const scoreBoard = document.querySelector('.scoreBoard')
const timerElement = document.querySelector('#timer')
const timer = document.querySelector('.timer')
const nextGameDiv = document.querySelector('.nextGameDiv')
const nextGame = document.querySelector('#nextGame')
const winnerPlayerName = document.querySelector('#winnerPlayerName')
const winnerPic = document.querySelector('#winnerPic')
const winnnerPlayerDiv = document.querySelector('#winnnerPlayerDiv')
const winnerPlayerName1 = document.querySelector('#winnerPlayerName1')
const winnerPic1 = document.querySelector('#winnerPic1')
const winnerPlayerDiv1 = document.querySelector('#winnerPlayerDiv1')

let storedImageSrc = "";
let storedText = "";

function player1Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 8) {
        return 'YES'
    } else {
        return 'NO'
    }
}

function player2Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 10) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player3Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 5) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player4Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number < 10) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player5Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 7) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player6Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 8) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player7Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 11) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player8Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 8) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player9Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 9) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player10Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 5) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player11Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 6) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player12Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 9) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player13Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 12) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player14Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number < 8) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player15Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number < 36) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player16Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 15) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player17Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 10) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player18Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 17) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player19Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 11) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player20Answer() {
    let number = Math.floor(Math.random() * 20)
    if (number > 10) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function player0Answer() {

}

// window.addEventListener('beforeunload', function (e) {
//     // Cancel the event
//     e.preventDefault();

//     // Chrome requires returnValue to be set
//     e.returnValue = '';

//     // Display a confirmation dialog
//     const confirmationMessage = 'Are you sure you want to leave this page?';
//     e.returnValue = confirmationMessage;
//     return confirmationMessage;
// });


let isYesButtonClicked = false;
let isNoButtonClicked = false;

function handleYesClick() {
    if (!isYesButtonClicked) {
        // Perform your action here
        console.log("Yes Button Clicked!");

        // Disable the button to prevent further clicks
        selectionDiv.style.display = 'none'

        isYesButtonClicked = true;
    }
}
function handleNoClick() {
    if (!isNoButtonClicked) {
        // Perform your action here
        console.log("No Button Clicked!");

        // Disable the button to prevent further clicks
        selectionDiv.style.display = 'none'

        isNoButtonClicked = true;
    }
}


const allAnswers = ['player0Answer', 'player1Answer', 'player2Answer', 'player3Answer', 'player4Answer', 'player5Answer', 'player6Answer', 'player7Answer', 'player8Answer', 'player9Answer', 'player10Answer', 'player11Answer', 'player12Answer', 'player13Answer', 'player14Answer', 'player15Answer', 'player16Answer', 'player17Answer', 'player18Answer', 'player19Answer', 'player20Answer',]

const functionMap = {
    'player0Answer': player0Answer,
    'player1Answer': player1Answer,
    'player2Answer': player2Answer,
    'player3Answer': player3Answer,
    'player4Answer': player4Answer,
    'player5Answer': player5Answer,
    'player6Answer': player6Answer,
    'player7Answer': player7Answer,
    'player8Answer': player8Answer,
    'player9Answer': player9Answer,
    'player10Answer': player10Answer,
    'player11Answer': player11Answer,
    'player12Answer': player12Answer,
    'player13Answer': player13Answer,
    'player14Answer': player14Answer,
    'player15Answer': player15Answer,
    'player16Answer': player16Answer,
    'player17Answer': player17Answer,
    'player18Answer': player18Answer,
    'player19Answer': player19Answer,
    'player20Answer': player20Answer,
}


const Questions = ['Money is everything', 'Thw Winner of this game is me', 'this game is easy', 'there are prime number of players here', 'i prefer light novel over manga', 'this game will end in tie', 'only 1 person win this game', 'two players win this game', 'sometime liaing is good', 'ronaldo is worst player', 'liar game is best manga', 'edogawa conan is best']
let newQuestions = [];

let winningPlayers = []
let nextQuestion = []
let LosingPlayers = []
let winningPlayerCount = 0



let value = [];
let time = 60;

startGame.onclick = () => {
    startDiv.style.display = 'none';
    players.style.display = 'flex';
    const randomIndex = Math.floor(Math.random() * Questions.length);
    const randomQuestion = Questions[randomIndex];

    newQuestions = Questions.filter(item => item !== randomQuestion)

    questionDiv.style.display = 'flex';
    timer.style.display = 'flex';
    question.innerHTML = randomQuestion;
    gameStart(newQuestions, allAnswers)

}

function nextGameFunc() {
    console.log('Clisked')
    LosingPlayers.forEach((el) => {
        const lose = window[el]
        lose.querySelector('.lose').style.display = 'flex';
        const playerContainer1 = lose.parentNode;
        playerContainer1.style.display = "none";
        scoreBoard.style.display = 'none';
    })
    scoreBoard.style.display = 'none'
    timer.style.display = 'flex'
    value = gameStart(nextQuestion, winningPlayers)
    nextGameDiv.style.display = 'none'
    winningPlayers.splice(0, winningPlayerCount)

}



function playAgainFunc() {
    window.location.reload();
}


function gameStart(q, all) {

    const randomIndex = Math.floor(Math.random() * q.length);
    const randomQuestion = q[randomIndex];
    nextQuestion = q.filter(item => item !== randomQuestion)
    console.log(nextQuestion)

    selectionDiv.style.display = 'flex'


    question.innerHTML = randomQuestion;

    let countYes = 0;
    let countNo = 0;


    let yesPlayer = [];
    let noPlayer = [];

    let playerFunction = []

    const player4Parent = player4.parentNode
    const player0Parent = player0.parentNode
    let flex = player4Parent.style.display
    console.log(player4Parent)
    console.log(flex)
    console.log(typeof flex)
    if (player4Parent.style.display == '') {
        console.log('Akiyama Solos')
    }

    if (all.length == 2) {
        alert('Both Player Wins The Game')
        question.style.display = 'none'
        nextGame.style.display = 'none'
        scoreBoard.style.display = 'none'
        selec
        yesScore.innerHTML = 0
        noScore.innerHTML = 0
    }
    if (all.length == 1) {
        alert(all[0], ' Wins The Game')

    }

    for (const ans of all) {
        const result = functionMap[ans]();
        if (ans == 'player0Answer') {
            if (isYesButtonClicked) {
                console.log('yes yes yes yes')
            } else {
                console.log('no no no no')
            }
        } else {

            if (result == 'YES') {
                countYes++
                yesPlayer.push(ans)
                playerFunction.push(ans)
            } else {
                countNo++
                noPlayer.push(ans);
                playerFunction.push(ans)
            }
        }
        // const div = ans.replace('Answer', '');
        // const ImgSrc = div.querySelector('img').src
        // const chatDialogue = document.createElement('div')
        // const chatImg = document.createElement('img')
        // const playerDialogue = document.createElement('span')
        // chatImg.src = ImgSrc
        // chatDialogue.appendChild(chatImg)
        // chatDialogue.appendChild(playerDialogue)
        // chatDialogue.classList.add('chatDialogue')
        // chatBody.appendChild(chatDialogue)
    }


    yesScore.textContent = countYes
    console.log('No Of Yes', countYes)
    console.log('No Of No', countNo)
    noScore.textContent = countNo

    let yesplayerDiv = yesPlayer.map(function (element) {
        return element.replace('Answer', '');
    });
    let noPlayerDiv = noPlayer.map(function (element) {
        return element.replace('Answer', '');
    });

    console.log('Players who said YES', yesPlayer)
    console.log('Players who said NO', noPlayer)

    all.forEach((e) => {
        if (e == 'player0Answer'){
            console.log('Nothing')
        }else{
            let div = e.replace('Answer', '');
            div = window[div]
            const ImgSrc = div.querySelector('img').src
            const chatDialogue = document.createElement('div')
            const chatImg = document.createElement('img')
            const playerDialogue = document.createElement('span')
    
            yesPlayer.forEach((el) => {
                if (e == el) {
                    const randomValue = Math.random();
                    if (randomValue >= 0.32) {
                        playerDialogue.textContent = 'I am going with Yes'
                    } else {
                        playerDialogue.textContent = 'I am going with no'
                    }
                }
            })
            noPlayer.forEach((el) => {
                if (e == el) {
                    const randomValue = Math.random();
                    if (randomValue >= 0.25) {
                        playerDialogue.textContent = 'I am going with no'
                    } else {
                        playerDialogue.textContent = 'I am going with Yes'
                    }
                }
            })
    
            chatImg.src = ImgSrc
            chatDialogue.appendChild(chatImg)
            chatDialogue.appendChild(playerDialogue)
            chatDialogue.classList.add('chatDialogue')
            chatBody.appendChild(chatDialogue)

        }
    })

    let countdown;
    time = 60;
    if (!countdown) {
        countdown = setInterval(updateTimer, 1000)
    }
    function stopTimer() {
        clearInterval(countdown);
        countdown = null;
        timer.style.display = 'none'
    }

    function updateTimer() {
        timerElement.textContent = time;
        time--;

        if (time < 0) {
            stopTimer();
            time = 60
            if (player0.parentNode.style.display == '') {

                if (isYesButtonClicked) {
                    countYes++
                    yesPlayer.push('player0Answer')
                    playerFunction.push('player0Answer')
                    yesplayerDiv.push('player0')
                    isYesButtonClicked = false
                } else if (isNoButtonClicked) {
                    countNo++
                    noPlayer.push('player0Answer')
                    playerFunction.push('player0Answer')
                    noPlayerDiv.push('player0')
                    isNoButtonClicked = false
                } else {
                    if (countNo > countYes) {
                        noPlayer.push('player0Answer')
                        playerFunction.push('player0Answer')
                        noPlayerDiv.push('player0')
                    } else if (countYes > countNo) {
                        yesPlayer.push('player0Answer')
                        playerFunction.push('player0Answer')
                        yesplayerDiv.push('player0')
                    }
                }
            } else {
                selectionDiv.style.display = 'none'
            }
            console.log(all)
            yesPlayer.forEach((e) => {
                if (e == 'player0Answer'){
                    console.log('Nothing')
                }else{
                    let div = e.replace('Answer', '');
                    div = window[div]
                    const chatDialogue = chatBody.querySelector('div')
                    const chatImg = chatDialogue.querySelector('img')
                    const playerDialogue = chatDialogue.querySelector('span')
                    
                    chatDialogue.removeChild(chatImg)
                    chatDialogue.removeChild(playerDialogue)
                    chatBody.removeChild(chatDialogue)
                    console.log('remove')   
                }
                console.log('done')
            })
            noPlayer.forEach((e) => {
                if (e == 'player0Answer'){
                    console.log('Nothing')
                }else{
                    let div = e.replace('Answer', '');
                    div = window[div]
                    const chatDialogue = chatBody.querySelector('div')
                    const chatImg = chatDialogue.querySelector('img')
                    const playerDialogue = chatDialogue.querySelector('span')
                    
                    chatDialogue.removeChild(chatImg)
                    chatDialogue.removeChild(playerDialogue)
                    chatBody.removeChild(chatDialogue)
                    console.log('remove')   
                }
                console.log('done')
            })

            console.log("Time's up!");
            yesScore.textContent = countYes
            noScore.textContent = countNo

            scoreBoard.style.display = 'flex';
            selectionDiv.style.display = 'none'

            nextGameDiv.style.display = 'flex'


            // all.forEach((e) => {
            //     if (e == 'player0Answer'){
            //         console.log('Nothing')
            //     }else{
            //         let div = e.replace('Answer', '');
            //         div = window[div]
            //         const chatDialogue = chatBody.querySelector('div')
            //         const chatImg = chatDialogue.querySelector('img')
            //         const playerDialogue = chatDialogue.querySelector('span')
                    
            //         chatDialogue.removeChild(chatImg)
            //         chatDialogue.removeChild(playerDialogue)
            //         chatBody.removeChild(chatDialogue)
            //         console.log('remove')   
            //     }
            //     console.log('done')
            // })

            if (countYes == 1 || countNo == 1) {
                if (countYes == 1) {
                    noPlayer.forEach(function (e) {
                        e = e.replace('Answer', '')
                        let element = window[e]
                        element.querySelector('.lose').style.display = 'flex'
                        LosingPlayers.push(e)
                    })
                    scoreBoard.style.display = 'flex'
                    selectionDiv.style.display = 'none'
                    question.style.display = 'flex'
                    noScore.textContent = countNo
                    yesScore.textContent = "1"
                    setTimeout(function () {
                        // Code to execute after the delay
                        question.style.display = 'none'
                        scoreBoard.style.display = 'none'
                        nextGame.style.display = 'none'
                        winnerDiv.style.display = 'flex';
                        const name = yesplayerDiv[0]
                        const play = window[name]
                        winnerPic.src = play.querySelector('img').src
                        console.log(play.querySelector('img').src)
                        players.style.display = 'none'
                        const winName = name + 'Name';
                        const winNameVar = window[winName]
                        winnerPlayerName.textContent = winNameVar.innerHTML;
                        playAgain.style.display = 'flex';
                        winnerPic1.style.display = 'none';
                        winnerPlayerName1.style.display = 'none';
                        winnerPlayerDiv1.style.display = 'none';
                        console.log('Action after 5000 milliseconds');
                    }, 5000)
                } else {
                    yesPlayer.forEach(function (e) {
                        e = e.replace('Answer', '')
                        let element = window[e]
                        element.querySelector('.lose').style.display = 'flex'
                        LosingPlayers.push(e)
                    })
                    scoreBoard.style.display = 'flex'
                    selectionDiv.style.display = 'none'
                    question.style.display = 'flex'
                    noScore.textContent = 1
                    yesScore.textContent = countYes
                    setTimeout(function () {
                        // Code to execute after the delay
                        question.style.display = 'none'
                        scoreBoard.style.display = 'none'
                        nextGame.style.display = 'none'
                        winnerDiv.style.display = 'flex';
                        const name = noPlayerDiv[0]
                        const play = window[name]
                        winnerPic.src = play.querySelector('img').src
                        console.log(play.querySelector('img').src)
                        players.style.display = 'none'
                        const winName = name + 'Name';
                        const winNameVar = window[winName]
                        winnerPlayerName.textContent = winNameVar.innerHTML;
                        playAgain.style.display = 'flex';
                        winnerPic1.style.display = 'none';
                        winnerPlayerName1.style.display = 'none';
                        winnerPlayerDiv1.style.display = 'none';
                        console.log('Action after 5000 milliseconds');
                    }, 5000)
                }
            } else if (countYes == 0 || countNo == 0) {
                if (countNo == 0) {
                    noScore.textContent = '0'
                    console.log('Akiyama Wins')
                    if (player4Parent.style.display == '') {
                        all.forEach(function (e) {
                            if (e == 'player4Answer') {
                                console.log('Akiyama Solos')
                            } else {
                                e = e.replace('Answer', '')
                                let element = window[e]
                                element.querySelector('.lose').style.display = 'flex'
                                LosingPlayers.push(e)
                            }
                        })
                        scoreBoard.style.display = 'flex'
                        selectionDiv.style.display = 'none'
                        question.style.display = 'flex'
                        yesScore.textContent = countYes
                        noScore.textContent = "1"

                        setTimeout(function () {
                            // Code to execute after the delay
                            question.style.display = 'none'
                            scoreBoard.style.display = 'none'
                            nextGame.style.display = 'none'
                            winnerDiv.style.display = 'flex';
                            const name = 'player4'
                            const play = window[name]
                            winnerPic.src = play.querySelector('img').src
                            console.log(play.querySelector('img').src)
                            players.style.display = 'none'
                            const winName = name + 'Name';
                            const winNameVar = window[winName]
                            winnerPlayerName.textContent = winNameVar.innerHTML;
                            playAgain.style.display = 'flex';
                            winnerPic1.style.display = 'none';
                            winnerPlayerName1.style.display = 'none';
                            winnerPlayerDiv1.style.display = 'none';
                            console.log('Action after 5000 milliseconds');
                        }, 5000)
                    }
                    // alert('All Players Choose YES')
                    console.log(all.length)
                    if (winningPlayers.length >= 20) {
                        console.log('already full')
                    } else {

                        yesPlayer.forEach((e) => {
                            winningPlayers.push(e)
                        })
                        noPlayer.forEach((e) => {
                            winningPlayers.push(e)
                        })
                        winningPlayerCount = winningPlayers.length
                    }
                    time = 60
                    yesScore.textContent = all.length
                    return

                } else {
                    console.log('Akiyama Wins')
                    yesScore.textContent = '0'
                    if (player4Parent.style.display == '') {

                        all.forEach(function (e) {
                            if (e == 'player4Answer') {
                                console.log('Akiyama Solos')
                            } else {
                                e = e.replace('Answer', '')
                                let element = window[e]
                                element.querySelector('.lose').style.display = 'flex'
                                LosingPlayers.push(e)
                            }
                        })
                        scoreBoard.style.display = 'flex'
                        selectionDiv.style.display = 'none'
                        question.style.display = 'flex'
                        yesScore.textContent = '1'
                        noScore.textContent = countNo

                        setTimeout(function () {
                            // Code to execute after the delay
                            question.style.display = 'none'
                            scoreBoard.style.display = 'none'
                            nextGame.style.display = 'none'
                            winnerDiv.style.display = 'flex';
                            const name = 'player4'
                            const play = window[name]
                            winnerPic.src = play.querySelector('img').src
                            console.log(play.querySelector('img').src)
                            players.style.display = 'none'
                            const winName = name + 'Name';
                            const winNameVar = window[winName]
                            winnerPlayerName.textContent = winNameVar.innerHTML;
                            playAgain.style.display = 'flex';
                            winnerPic1.style.display = 'none';
                            winnerPlayerName1.style.display = 'none';
                            winnerPlayerDiv1.style.display = 'none';
                            console.log('Action after 5000 milliseconds');
                        }, 5000)

                    }
                    // alert('All Players Choose NO')
                    console.log(all.length)
                    if (winningPlayers.length >= 20) {
                        console.log('already full')
                    } else {

                        yesPlayer.forEach((e) => {
                            winningPlayers.push(e)
                        })
                        noPlayer.forEach((e) => {
                            winningPlayers.push(e)
                        })
                        winningPlayerCount = winningPlayers.length
                    }
                    time = 60
                    noScore.textContent = all.length
                    return
                }
            }
            else if (countYes == countNo) {
                console.log('Play Again Same no of Yes No')

                if (winningPlayers.length >= 20) {
                    console.log('already full')
                } else {

                    yesPlayer.forEach((e) => {
                        winningPlayers.push(e)
                    })
                    noPlayer.forEach((e) => {
                        winningPlayers.push(e)
                    })
                    winningPlayerCount = winningPlayers.length
                }
                time = 60
                alert('There are same no. of YES & No, Play Again')
                return

            } else if (countYes == 1 && countNo == 0) {
                alert(yesplayerDiv[0], 'wins the  Game')

            } else if (countNo == 1 && countYes == 0) {
                alert(noPlayerDiv[0], 'wins the  Game')

            }
            else if (countYes > countNo) {
                yesplayerDiv.forEach(function (e) {
                    let element = window[e]
                    element.querySelector('.lose').style.display = 'flex'
                    LosingPlayers.push(e)
                })
                noPlayer.forEach(e => {
                    winningPlayers.push(e)
                })

                

                if (winningPlayers.length > 20) {
                    winningPlayers.splice(0, 20)
                }
                winningPlayerCount = noPlayer.length
                console.log(winningPlayers)

                // Me Winning

                // if(all.length < 8){
                //     if (player0Parent.style.display == ''){

                //     }

                // }

                // winning person div
                if (winningPlayers.length == 1) {
                    question.style.display = 'none'
                    scoreBoard.style.display = 'none'
                    selectionDiv.style.display = 'none'

                    nextGame.style.display = 'none'
                    winnerDiv.style.display = 'flex';
                    const name = winningPlayers[0].replace('Answer', '')
                    const play = window[name]
                    winnerPic.src = play.querySelector('img').src
                    console.log(play.querySelector('img').src)
                    players.style.display = 'none'
                    const winName = name + 'Name';
                    const winNameVar = window[winName]
                    winnerPlayerName.textContent = winNameVar.innerHTML;
                    playAgain.style.display = 'flex';
                    winnerPic1.style.display = 'none';
                    winnerPlayerName1.style.display = 'none';
                    winnerPlayerDiv1.style.display = 'none';
                }
                if (winningPlayers.length == 2) {
                    question.style.display = 'none'
                    scoreBoard.style.display = 'none'
                    selectionDiv.style.display = 'none'

                    nextGame.style.display = 'none'
                    winnerDiv.style.display = 'flex';
                    const name = winningPlayers[0].replace('Answer', '')
                    const play = window[name]
                    const img = play
                    winnerPic.src = play.querySelector('img').src
                    console.log(play.querySelector('img').src)
                    players.style.display = 'none'
                    const winName = name + 'Name';
                    const winNameVar = window[winName]
                    winnerPlayerName.textContent = winNameVar.innerHTML;
                    playAgain.style.display = 'flex';
                    const name1 = winningPlayers[1].replace('Answer', '')
                    const play1 = window[name1]
                    winnerPic1.src = play1.querySelector('img').src
                    const winName1 = name1 + 'Name';
                    const winNameVar1 = window[winName1]
                    winnerPlayerName1.textContent = winNameVar1.innerHTML
                }
                time = 60
            }
            else if (countNo > countYes) {
                noPlayerDiv.forEach(function (e) {
                    let element = window[e]
                    element.querySelector('.lose').style.display = 'flex'
                    LosingPlayers.push(e)
                })
                yesPlayer.forEach(e => {
                    winningPlayers.push(e)
                })


                if (winningPlayers.length > 20) {
                    winningPlayers.splice(0, 20)
                }
                console.log(winningPlayers)
                winningPlayerCount = yesPlayer.length

                if (winningPlayers.length == 1) {
                    question.style.display = 'none'
                    scoreBoard.style.display = 'none'
                    nextGame.style.display = 'none'
                    selectionDiv.style.display = 'none'
                    winnerDiv.style.display = 'flex';
                    const name = winningPlayers[0].replace('Answer', '')
                    const play = window[name]
                    const img = play
                    winnerPic.src = play.querySelector('img').src
                    console.log(play.querySelector('img').src)
                    players.style.display = 'none'
                    const winName = name + 'Name';
                    const winNameVar = window[winName]
                    winnerPlayerName.textContent = winNameVar.innerHTML;
                    playAgain.style.display = 'flex';

                    winnerPic1.style.display = 'none';
                    winnerPlayerName1.style.display = 'none';
                    winnerPlayerDiv1.style.display = 'none';

                }
                if (winningPlayers.length == 2) {
                    question.style.display = 'none'
                    scoreBoard.style.display = 'none'
                    selectionDiv.style.display = 'none'
                    nextGame.style.display = 'none'
                    winnerDiv.style.display = 'flex';
                    const name = winningPlayers[0].replace('Answer', '')
                    const play = window[name]
                    winnerPic.src = play.querySelector('img').src
                    console.log(play.querySelector('img').src)
                    players.style.display = 'none'
                    const winName = name + 'Name';
                    const winNameVar = window[winName]
                    winnerPlayerName.textContent = winNameVar.innerHTML;
                    playAgain.style.display = 'flex';
                    const name1 = winningPlayers[1].replace('Answer', '')
                    const play1 = window[name1]
                    winnerPic1.src = play1.querySelector('img').src
                    const winName1 = name1 + 'Name';
                    const winNameVar1 = window[winName1]
                    winnerPlayerName1.textContent = winNameVar1.innerHTML

                }
                time = 60
            }

        }
    }


    
    



}

let storedName;
let storedImgSrc;

function storeData() {
    const imageInput = document.getElementById("imageInput");
    const textInput = document.getElementById("textInput");


    // Get the selected image file
    const selectedFile = imageInput.files[0];

    if (selectedFile) {
        // Read the image source as a Data URL
        const reader = new FileReader();
        reader.onload = function (event) {
            storedImageSrc = event.target.result;
            storedImgSrc = localStorage.setItem('ImageName', storedImageSrc)
            player0.querySelector('img').src = storedImageSrc;
            console.log("Image Source:", storedImageSrc);
        };
        reader.readAsDataURL(selectedFile);
    } else {
        const imgName = localStorage.getItem('ImageName')
        player0.querySelector('img').src = imgName;
        console.log('empty img')

    }
    // Get the text input value
    storedText = textInput.value;
    if (storedText == '') {
        const name = localStorage.getItem('PersonName')
        player0.parentNode.querySelector('span').textContent = name
        console.log('empty text')
    } else {
        player0.parentNode.querySelector('span').textContent = storedText
        localStorage.setItem('PersonName', storedText)
    }
    console.log("Text:", storedText);
    document.querySelector('.form').style.display = 'none'
    startDiv.style.display = 'flex'
}

function chatBoxNone() {
    chatBox.style.display = 'none'
    showChat.style.display = 'flex'
    players.style.display = 'flex'
}
function chatBoxFlex() {
    chatBox.style.display = 'flex'
    showChat.style.display = 'none'
    players.style.display = 'none'

}
