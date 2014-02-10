Crafty.c('Tree', {
    init: function() {
        //requires the Grid component (grid.js) to be able to call the "at" function
        this.requires('2D, Canvas, Grid, Color');
        //sets the color
        this.color('rgb(20, 125, 40)');
    }
});