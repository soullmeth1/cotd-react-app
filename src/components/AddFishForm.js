import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends Component {
  static propTypes = {
    addFish: PropTypes.func,
  };
  name = React.createRef();
  price = React.createRef();
  status = React.createRef();
  desc = React.createRef();
  image = React.createRef();
  createFish = (e) => {
    const fish = {
      name: this.name.current.value,
      price: this.price.current.value,
      status: this.status.current.value,
      desc: this.desc.current.value,
      image: this.image.current.value,
    };
    e.preventDefault();
    this.props.addFish(fish);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input ref={this.name} type="text" name="name" placeholder="Name" />
        <input ref={this.price} type="text" name="price" placeholder="Price" />
        <select name="status" ref={this.status} id="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={this.desc} name="desc" id="desc" />
        <input ref={this.image} type="text" name="image" placeholder="Image" />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
