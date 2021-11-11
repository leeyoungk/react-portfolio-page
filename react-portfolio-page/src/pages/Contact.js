import React from "react";
import Modal from 'react-bootstrap/Modal'

export default function Contact() {
    return (
        
        <Modal.Dialog>
            <Modal.Header>
            <Modal.Title>Contact Information</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <ul>
                    <li><a href="tel:+12533141284">+1-253-314-1284</a></li>
                    <li><a href="mailto: khanhtruong1992@gmail.com" target="_blank">khanhtruong1992@gmail.com</a></li>
                    <li><a href="https://github.com/leeyoungk" target="_blank">github</a></li>
                    <li><a href="https://twitter.com/intent/tweet?screen_name=home&ref_src=twsrc%5Etfw" target="_blank">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/khanh-truong-2a838620b/">LinkedIn</a></li>
            </ul>
            </Modal.Body>
        </Modal.Dialog>
    )


}

