function computerPlay() {
    let num = Math.random() * 10;
    
    if (num > 6.6) {
        return 'Scissors';
    } else if (num < 3.3 ) {
        return 'Rock';
    } else {
        return 'Paper'
    }
}