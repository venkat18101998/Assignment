"use client"
import React, { useEffect } from 'react';
import Navbar from '../_components/navbar/page';
import LoginContainer from '../login/page';
import Navicationbar from '../navicationbar/page';
import { useRouter } from "next/navigation";

const AuthWrapper = ({ children }) => {
    let storedEmail = localStorage.getItem('storedEmail')
    const router = useRouter();
    useEffect(() => {
        if (!storedEmail) {
            router.push('/login');
        }
    }, [storedEmail]);

    console.log(storedEmail, "22");
    return (
        <div>
            {storedEmail ?
                <><Navbar />
                    <Navicationbar />
                    {children}</> : <LoginContainer />}

        </div>
    )

}
export default AuthWrapper;
