import { Component } from "react";


    class Header extends Component
    {

        render() {
            
            let { children } = this.props;
            return (
                <header>
                {children}
            </header>
            )
        }
    }


export default Header;
// const Header = ({ children }) => (
//     <header>
//         {children}
//     </header>