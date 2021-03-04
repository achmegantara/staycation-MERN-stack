import React from "react";
import Button from "elements/Button";
import IconText from "parts/iconText";

export default function Footer() {
    return (
        <Footer>
            <div className="container">
                <div className="row">
                        <div className="col">
                            <IconText></IconText>
                            <p className="brand-tagLine">
                                We Kaboom your beuty holiday instantly and memorable.
                            </p>
                        </div>  
                        <div className="col-2 mr-5">
                            <h6 className="mt-2">For Beginners</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button type="link" href="/register">
                                        New Account
                                    </Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/properties">
                                        Start Booking a Room
                                    </Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/use-payments">
                                        Use Payments
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button type="link" href="/careers">
                                        Our Careers
                                    </Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/privacy">
                                        Privacy
                                    </Button>
                                </li>
                                <li className="list-group-item">
                                    <Button type="link" href="/terms">
                                        Terms & Conditions
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                        <h6 className="mt-2">Connect Us</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Button isExternal type="link" href="mailto:support@staycation.id">
                                        support@staycation.id
                                    </Button>
                                </li>
                                <li className="list-group-item">
                                    <Button isExternal type="link" href="tel:+622122001996">
                                        +6221 - 2208 - 1996
                                    </Button>
                                </li>
                                <li className="list-group-item">
                                    <span>Staycation, Kemang, Jakarta.</span>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </Footer>
    )
}
