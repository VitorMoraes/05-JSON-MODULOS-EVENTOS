const Text = {
    reverse: function(str) {
        let r = '';    
        for(i = (str.length-1); i >= 0; i--){
            r += str[i];
        }
        console.log(r);
    },

};