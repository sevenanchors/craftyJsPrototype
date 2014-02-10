Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('Actor, Fourway, Color')
            .fourway(4)
            .color('rgb(20, 75, 40)');
    }
});