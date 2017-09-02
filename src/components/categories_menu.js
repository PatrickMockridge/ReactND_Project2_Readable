import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
//import IconButton from 'material-ui/IconButton'
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
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
    const handleChange = (event, index, value) => this.props.fetchPostsByCategory(value)
    const categories = this.props.categories;
    const currentCategory = this.props.currentCategory
    return (
        <DropDownMenu
          onChange={handleChange}
          value={currentCategory}
          openImmediately={true}
          >
            {categories.map(((category, index) => (
                          <MenuItem item key={(index).toString()}
                            value={category.path}
                            primaryText={category.name}
                             />
                          )))}
        </DropDownMenu>
    );
  }
}

const mapStateToProps = ({categories}) => {
    return {
        categories: categories.categories
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
