"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../_components/navbar/page';
import LoginContainer from '../login/page';
import Navicationbar from '../navicationbar/page';
import { useRouter } from "next/navigation";

const AuthWrapper = ({ children }) => {
    const router = useRouter();
    const [storedEmail, setStoredEmail] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const email = localStorage.getItem('storedEmail');
            setStoredEmail(email);
        }
    }, []);

    useEffect(() => {
        if (!storedEmail) {
            router.push('/login');
        }
    }, [router, storedEmail]);
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
