import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
    removeFish: PropTypes.func,
  };
  handleChange = (e) => {
    // console.log(e.currentTarget.value);
    const properti = e.currentTarget.name;
    const value =
      properti === 'price'
        ? Number(e.currentTarget.value)
        : e.currentTarget.value;
    const input = {
      [properti]: value,
    };
    this.props.updateFish(this.props.index, input);
  };
  render() {
    const { fish, index, removeFish } = this.props;
    return (
      <form className="fish-edit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fish.name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={fish.price}
          onChange={this.handleChange}
        />
        <select name="status" value={fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={fish.desc} onChange={this.handleChange} />
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={fish.image}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={() => removeFish(index)}>
          Remove Fish
        </button>
      </form>
    );
  }
}

export default EditFishForm;
