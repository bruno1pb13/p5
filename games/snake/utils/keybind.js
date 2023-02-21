function keyPressed() {

    switch (keyCode){
        case LEFT_ARROW:
            if(direction != 'right') direction = 'left'
            updateState('play')
        break;
        case RIGHT_ARROW:
            if(direction != 'left') direction = 'right'
            updateState('play')
        break;
        case UP_ARROW:
            if(direction != 'bottom') direction = 'top'
            updateState('play')
        break;
        case DOWN_ARROW:
            if(direction != 'top') direction = 'bottom'
            updateState('play')
        break;
        case ESCAPE || BACKSPACE:
            direction = null
            updateState('pause')
        break;
    }
}