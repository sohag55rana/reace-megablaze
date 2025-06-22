import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by MEGABLAZE Industries Ltd</p>
                </>
            </footer>
        </div>
    );
};

export default Footer;