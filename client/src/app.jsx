import React from 'react';
import BackgroundImage from './component/background.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    }
    this.fetchRandFeaturedFilm = this.fetchRandFeaturedFilm.bind(this);
  }

  componentDidMount(){
    this.fetchRandFeaturedFilm();
  }

  fetchRandFeaturedFilm(){
    fetch('/api/rand')
    .then(res => res.json())
    .then((res) => {
      this.setState({film: res[0]});
    });
  }


  render(){
    return(
      <div>
        <BackgroundImage film={this.state.film}/>
      </div>
    );
  }
}

export default App;
