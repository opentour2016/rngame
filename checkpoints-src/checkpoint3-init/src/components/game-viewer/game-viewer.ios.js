let React = require('react-native');

let {
  View,
  Text,
  Dimensions,
  StyleSheet
} = React;

//TODO #2 - Fazer require do componente react-native-swiper
//let Swiper = require('react-native-swiper');

let windowSize = Dimensions.get('window');

let GameCard = require('../game-card/game-card');

let GameViewer = React.createClass({
    getInitialState() {
     return {
       gamesToDisplay: []
     }
    },
    componentWillMount(){
      this.setState({
        gamesToDisplay: [
          {
            key: 1,
            name: 'Snake',
            image: 'https://lh3.ggpht.com/rnoDJT-36V6_8fIyPGTgpQoSUqdTE5wa0SXEiPu0hsUqP68DNfvmveZlftj47eEhz3w=w300'
          },
          {
            key: 2,
            name: 'Tic Tac Toe',
            image: 'https://lh3.ggpht.com/ZJcrp1K-YB7Eq03iW_xBQwiUN54NEBTJ-JyPGMiYvVVtOhd09wXEr24GtpC33R5oQ68=w300'
          }
        ]
      });
    },
    render(){
      let renderGames = () => {
      return this.state.gamesToDisplay.map((game) => {
        return (
          <GameCard key={game.key}
                        name={game.name}
                        image={game.image}/>
        )
      })
    };

    //TODO #3 Utilizar Swiper
    /*
     *  <Swiper height={windowSize.height/2.2}>
     *  </Swiper>
     *
     */
    return(
      <View style={styles.gamesContainer}>

        {renderGames()}

      </View>
    )
  }
});

const styles = StyleSheet.create({
  Text:{
    fontSize: 24,
    color: '#00a4a4'
  },
  gamesContainer:{
    flex:1,
    backgroundColor: '#cccccc',
  },
});


module.exports = GameViewer;
