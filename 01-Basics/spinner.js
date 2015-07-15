function getSpinner(){
    var count = 0;
    return {
        getValue : function(){ return count ; },
        up : function(){  ++count; },
        down : function() {  --count; }
    };
}