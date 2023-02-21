function keyPressed() {
    updateState('play')

    switch (keyCode){
        case LEFT_ARROW:
            if(direction != 'right') direction = 'left'
        break;
        case RIGHT_ARROW:
            if(direction != 'left') direction = 'right'
        break;
        case UP_ARROW:
            if(direction != 'bottom') direction = 'top'
        break;
        case DOWN_ARROW:
            if(direction != 'top') direction = 'bottom'
        break;
        case ESCAPE || BACKSPACE:
            direction = null
            updateState('pause')
        break;
    }
}