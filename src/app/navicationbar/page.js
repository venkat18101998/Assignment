"use client"
import { Toolbar, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

const Navicationbar = () => {

    const router = useRouter();
    const currentRoute = usePathname();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(router.pathname);
    }, [router.pathname]);

    const isActiveLink = (path) => {
        return path === activeLink ? { color: 'blue' } : { color: 'black' };
    };

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className="large-screen-view">
                <Toolbar>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '30px'
                        }}
                    >

                        <Typography
                            variant="h5"
                            component="span"

                        >
                            <Link href="/aboutUs"  className={currentRoute === "/aboutUs"
                                ? "link activeLink"
                                : "link nonActive"}>
                                About Us Template
                            </Link>
                        </Typography>
                        <Typography
                            variant="h5"
                            component="span"
                        >
                            <Link href="/blog"  className={currentRoute === "/blog"
                                ? "link activeLink"
                                : "link nonActive"}>
                                Blogs
                            </Link>
                        </Typography>
                        <Typography
                            variant="h5"
                            component="span"
                        >
                            <Link href="/logoGallery"  className={currentRoute === "/logoGallery"
                                ? "link activeLink"
                                : "link nonActive"}>
                                Logo Gallery
                            </Link>
                        </Typography>
                    </div>
                </Toolbar>
            </div>

            <div className="mobile-view">
                <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            position: 'relative',
                        }}
                    >
                        <img
                            src='icons-menu.png'
                            style={{ cursor: 'pointer', order: -1 }}
                            onClick={toggleMenu}
                        />

                        {showMenu && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: -197,
                                    width: '900%',
                                    background: '#f0f0f0',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 999,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '10px',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="span"
                                >
                                    <Link href="/aboutUs"   className={currentRoute === "/aboutUs"
                                ? "link activeLink"
                                : "link nonActive"}>
                                        About Us Template
                                    </Link>
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="span"
                                >
                                    <Link href="/blog"  className={currentRoute === "/blog"
                                ? "link activeLink"
                                : "link nonActive"}>
                                        Blogs
                                    </Link>
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="span"
                                >
                                    <Link href="/logoGallery"  className={currentRoute === "/logoGallery"
                                ? "link activeLink"
                                : "link nonActive"}>
                                        Logo Gallery
                                    </Link>
                                </Typography>
                            </div>
                        )}
                    </div>
                </Toolbar>
            </div>
        </div>
    )
}

export default Navicationbar
