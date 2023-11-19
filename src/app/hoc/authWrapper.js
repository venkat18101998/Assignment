"use client"
import Navbar from '../_components/navbar/page';
import LoginContainer from '../login/page';
import Navicationbar from '../navicationbar/page';


const AuthWrapper = ({ children }) => {
    let storedEmail = localStorage.getItem('storedEmail');
    return (
        <div>
            {storedEmail ? <><Navbar />
                <Navicationbar />
                {children}</> : <LoginContainer />}

        </div>
    )


}
export default AuthWrapper;
