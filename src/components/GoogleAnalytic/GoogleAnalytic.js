import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function GoogleAnalytics() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        
        const gtag = window.gtag;

        if (!gtag) {
            // Load Google Analytics script dynamically
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=G-RZR37FSYKG`;

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-RZR37FSYKG');
            };

            document.head.appendChild(script);
            return;
        }

        // Google Analytics tracking code
        try {
            if (location.pathname !== window.location.pathname && navigate.isPush) {
                gtag('config', 'G-RZR37FSYKG', {
                    'page_title': document.title,
                    'page_location': window.location.href,
                    'page_path': location.pathname,
                });
            }
        } catch (error) {
            console.error('Error in Google Analytics tracking:', error);
        }
    }, [location, navigate]);

    return null;
}

export default GoogleAnalytics;
