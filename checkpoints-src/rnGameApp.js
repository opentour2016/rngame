
let React = require('react-native');


// Associar checkpoint atual aqui para facilitar desenvolvimento! Have fun!
// Intro page: 'CheckPointIntro'

let CHECKPOINT_ATUAL_NAME = 'CheckPoint4Final';


let {
  View,
  Navigator
} = React;

let CheckPointIntro = require('./checkpoint-intro/src/home/home');
let CheckPoint1Init= require('./checkpoint1-init/src/home/home');
let CheckPoint1Final = require('./checkpoint1-final/src/home/home');
let CheckPoint2Init= require('./checkpoint2-init/src/home/home');
let CheckPoint2Final = require('./checkpoint2-final/src/home/home');
let CheckPoint3Init= require('./checkpoint3-init/src/home/home');
let CheckPoint3Final = require('./checkpoint3-final/src/home/home');
let CheckPoint4Final = require('./checkpoint4-final/src/main-app');
let CheckPoint4Init = require('./checkpoint4-init/src/main-app');



let CHECKPOINTS = {
  CheckPointIntro,
  CheckPoint1Init,
  CheckPoint1Final,
  CheckPoint2Init,
  CheckPoint2Final,
  CheckPoint3Init,
  CheckPoint3Final,
  CheckPoint4Init,
  CheckPoint4Final
};

let CHECKPOINT_ATUAL = CHECKPOINTS[CHECKPOINT_ATUAL_NAME];

let RnGameApp = React.createClass({

  render(){
    return (
      <CHECKPOINT_ATUAL sceneTransition={this.props.sceneTransition} />
    );
  }

});

/*
 * Exportar o componente para ser usado
 */
module.exports = RnGameApp;
