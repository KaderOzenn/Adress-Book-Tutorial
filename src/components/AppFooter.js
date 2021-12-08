import React, { Fragment } from 'react';
class AppFooter extends React.Component {
    render() {
        return <Fragment>
            <hr className="featurette-divider" />
            <footer style={{ padding: "0 50px" }} className="navbar fixed-bottom">
                
                <p>© 2021 Simple-Talk · <a href="/">Term and Conditions</a></p>
            </footer>
        </Fragment>;
    }
}
export default AppFooter;