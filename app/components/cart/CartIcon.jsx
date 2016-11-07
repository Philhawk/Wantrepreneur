//React
import React from 'react';
import {Link} from 'react-router';

import {FontIcon,Badge,IconButton,ActionHome } from 'material-ui';
//Dialog modol

/* ---  Component --- */
class CartIcon extends React.Component {
//
  render() {

    return (
      <div>
        <Badge badgeContent={this.props.cart ? this.props.cart.length : ''} style ={{color:'#333333', padding:'1px 15px 10px 10px'}}badgeStyle={{top: 2, right: 0, fontSize: 15}}>
          <IconButton tooltip="My Cart">
            <Link to="/cart">
              <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} >shopping_cart</FontIcon>
            </Link>
          </IconButton>
        </Badge>
      </div>
    );
  }
}

export default CartIcon;
