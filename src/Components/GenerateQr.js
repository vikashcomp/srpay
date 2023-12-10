import React from 'react';
import QRCode from 'qrcode.react';

const GenerateQr = (props) => {
    const handleScan = (data) => {
        if (data) {
            window.location.href = `https://example.com/payment?amount=${data}`;
        }
    };

    const handleError = error => {
        console.error(error);
    };

    const isMobileChrome = () => {
        return navigator.userAgent.match('Chrome') && navigator.userAgent.match('Mobile');
    };

    return (
        <>
            <QRCode value={props.value}  />
        </>
    )
}

export default GenerateQr;
