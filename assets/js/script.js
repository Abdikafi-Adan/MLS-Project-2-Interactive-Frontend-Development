class AudioController{
constructor(){
    this.bgMusic = new Audio("assets/audio/One-Piece-Epic-Battle-Theme-bg.mp3");
    this.flipSound = new Audio("assets/audio/Card-flip-sound.mp3");
    this.matchSound = new Audio("assets/audio/match-sound.mp3");
    this.victorySound = new Audio("assets/audio/victory-sound.mp3");
    this.gameOverSound = new Audio("assets/audio/game-over.mp3");
    this.bgMusic.volume = 0.09;
    this.bgMusic.loop = true;
}

startMusic(){
    this.bgMusic.play();
}

 stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }

}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
  //  let game = new onePiece(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
       //     game.startGame();
       
       let audioController = new AudioController();
        audioController.startMusic();
        });
    });

  cards.forEach(card => {
     card.addEventListener('click', () => {
    //   game.flipCard(card);
    });
 });
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

