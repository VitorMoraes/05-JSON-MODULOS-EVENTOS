// function teste() {
//     msg = 'Hello';
//      // sem var/let/const vai global      
//      if(true){
//         var opa = '!!!';
//         let eita = '???';
//      }
//      // var vale para o escopo da função, let e const não!!!!!
//     console.log(msg + 'teste' + opa + eita);// vai dá errado no eita.
//     console.log(msg + 'teste' + opa);// sem o eita dá certo. 
    
// }

// teste();

// namesapce Main (semelhante ao Math)
const Main = { //JSON :js Object Notation 
    teste: function() {
        console.log('main teste');
    },
    //para chamar a teste(ou qualquer função do seu JSON) coloque Main.teste()
    outra: function() {
        console.log('outra');
    },
    curso: 'INFO'
};

const Outro = {}
// camelCase
Outro.qualquerCoisa = 'qualquer';

Text.reverse('oi');