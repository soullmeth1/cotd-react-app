import React from 'react';
import Fish from './components/Fish';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Order from './components/Order';
import db from './firebase';

import sampleFishes from './sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    // console.log(localStorageRef, 'localstorage');
    if (localStorageRef) {
      // console.log(localStorageRef);
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    const starCountRef = db.ref(`${params.storeId}/fishes`);
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      // console.log(data, 'database');
      if (data) this.setState({ fishes: data });
    });
  }

  componentDidUpdate(...args) {
    // console.log(this.state, args[1], this.state === args[1], 'parameter');
    const { params } = this.props.match;
    if (Object.keys(this.state.fishes).length) {
      // console.log('database saved');
      db.ref(`${params.storeId}/fishes`).set(this.state.fishes);
    }
    // console.log(this.state.fishes, 'updatestate');
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    const last = { ...this.state.order };
    last[key] = last[key] + 1 || 1;
    this.setState({
      order: { ...last },
    });
  };

  removeFromOrder = (key) => {
    const last = { ...this.state.order };
    delete last[key];
    this.setState({
      order: { ...last },
    });
  };

  updateFish = (key, input) => {
    this.setState({
      fishes: {
        ...this.state.fishes,
        [key]: { ...this.state.fishes[key], ...input },
      },
    });
  };

  removeFish = (val) => {
    const fishes = {
      ...this.state.fishes,
      // ...Object.keys(this.state.fishes).reduce((acc, curr) => {
      //   // console.log(acc, curr);
      //   return curr === val ? acc : { ...acc, [curr]: this.state.fishes[curr] };
      // }, {}),
    };
    delete fishes[val];
    // console.log(val, fishes);
    this.setState({
      fishes,
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((val, i) => (
              <Fish
                key={val}
                index={val}
                fish={this.state.fishes[val]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          removeFish={this.removeFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
