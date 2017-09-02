import React, { Component } from 'react';
//import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux';
import {
    fetchCategories,
    fetchPostsByCategory
} from '../actions';

const styles = {
  customWidth: {
    width: 200,
  },
};

class CategoriesMenu extends Component {

  componentWillMount() {
    this.props.fetchCategories();
}

  render() {

    const { fetchPostsByCategory } = this.props;
    const categories = this.props.categories;
    const handleChange = (event, value) => this.props.fetchPostsByCategory(value)
    const currentCategory = this.props.currentCategory
    return (
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          onChange={handleChange}
          openImmediately={true}
          value={currentCategory}
          >
            {categories.map(((category, index) => (
                          <MenuItem item key={(index).toString()}
                            value={category.path}
                            primaryText={category.name}
                             />
                          )))}
        </IconMenu>
    );
  }
}

const mapStateToProps = ({categories}) => {
    return {
        categories: categories.categories,
        currentCategory: categories.currentCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesMenu);
