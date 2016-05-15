let React = require('react-native');

//TODO #2 - importar o componente ViewPagerAndroid (fornecido pelo react-native)

let {
  View,
  Text,
  Dimensions,
  StyleSheet
} = React;

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
          <View key={game.name} style={styles.cardContainer}>
              <GameCard key={game.key}
                        name={game.name}
                        image={game.image}/>
          </View>

        )
      })
    };

    //TODO #3: Adicionar ViewPagerAndroid
    /*
     *      <ViewPagerAndroid
     *          style={styles.gamesContainer}
     *         initialPage={0}>
     *
     */
    return(
      <View style={styles.gamesContainer}>

            { renderGames() }

      </View>
    )
  }
});

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  },
  gamesContainer:{
    flex:1,
    backgroundColor: '#cccccc',
  },
});


module.exports = GameViewer;
