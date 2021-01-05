import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import db, {
  auth,
  signInFacebook,
  signInGithub,
  signInGoogle,
} from '../firebase';

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    addFish: PropTypes.func,
    updateFish: PropTypes.func,
    removeFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    storeId: PropTypes.string,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    // const user = auth.currentUser;
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        this.authHandler({ user });
      } else {
        // console.log(err);
      }
    });
    // console.log(user, tes);
    // console.log(auth);
  }

  authHandler = async (authData) => {
    // console.log(authData);
    const data = await (
      await db.ref(`${this.props.storeId}`).once('value')
    ).toJSON();
    if (!data.owner) {
      // console.log(data);
      await db.ref(`${this.props.storeId}/owner`).set(authData.user.uid);
    }
    this.setState({
      uid: authData.user.uid,
      owner: data.owner || authData.user.uid,
    });
  };

  authenticate = (provider) => {
    // console.log(this.props.storeId)
    auth
      .signInWithPopup(
        provider === 'Facebook'
          ? signInFacebook
          : provider === 'Github'
          ? signInGithub
          : signInGoogle
      )
      .then(this.authHandler);
  };

  logout = async () => {
    await auth.signOut();
    this.setState({
      uid: null,
    });
  };

  render() {
    const {
      fishes,
      addFish,
      updateFish,
      removeFish,
      loadSampleFishes,
    } = this.props;
    const logoutBtn = <button onClick={this.logout}>Sign Out</button>;

    if (!this.state.uid) {
      return (
        <>
          <Login authenticate={this.authenticate} />
          {/* <button onClick={this.authHandler}>cek</button> */}
        </>
      );
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, You are not the valid owner!</p>
          {logoutBtn}
        </div>
      );
    }
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logoutBtn}
        {Object.keys(fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            removeFish={removeFish}
            updateFish={updateFish}
            fish={fishes[key]}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
