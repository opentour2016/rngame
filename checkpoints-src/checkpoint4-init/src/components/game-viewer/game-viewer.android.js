let React = require('react-native');


let {
  View,
  Text,
  ViewPagerAndroid,
  StyleSheet
} = React;


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
            <View key={game.name} style={styles.pageStyle1}>
            <GameCard key={game.key}
                          name={game.name}
                          image={game.image}/>
            </View>

        )
      })
    };

    return(
      <ViewPagerAndroid
      style={styles.gamesContainer}
      initialPage={0}>
      { renderGames() }
    </ViewPagerAndroid>
    )
  }
});

const styles = StyleSheet.create({
  pageStyle1: {
    padding: 10,
    backgroundColor: '#ccc'
  },
  gamesContainer:{
    flex:1
  },
});


module.exports = GameViewer;
