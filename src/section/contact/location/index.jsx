import React from 'react';

const LoactionInMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871.6064277083433!2d85.79757277704395!3d20.250005171102895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7e6dd33ce01%3A0xa636c8ead2f33eed!2sLove%20Khati!5e0!3m2!1sen!2sin!4v1711313234440!5m2!1sen!2sin"

            className='w-full h-full rounded-md'
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    )
}

export default LoactionInMap;