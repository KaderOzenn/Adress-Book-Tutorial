import React, { Component } from 'react'; 
import { Navbar,NavbarBrand,NavbarToggler,Collapse, Nav, NavItem, NavLink,} from 'reactstrap'; 
class AppHeader extends Component { 
    state = { 
        isOpen: false
    };
    toggle = this.toggle.bind(this); 
    toggle() { // 6
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { // 7
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2346%2FPNG%2F512%2Fcontacts_address_book_icon_142901.png&imgrefurl=https%3A%2F%2Ficon-icons.com%2Ficon%2Fcontacts-address-book%2F142901&tbnid=-zWQ1jjzFatHuM&vet=12ahUKEwiGnvOav8P0AhVKKewKHZN8BOQQMygMegUIARDUAQ..i&docid=pYn3LAGOYZgzsM&w=512&h=512&q=address%20Book&hl=en&ved=2ahUKEwiGnvOav8P0AhVKKewKHZN8BOQQMygMegUIARDUAQ" width="128" className="d-inline-block align-top" alt="" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Address</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Book</NavLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>;
    }
}
export default AppHeader;