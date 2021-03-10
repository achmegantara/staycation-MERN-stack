import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import ItemDetails from "json/itemDetails.json";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimony";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {

    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0,0);
    }

render(){
    const breadcrumb = [
        {pageTitle: "Home", pageHref: ""},
        {pageTitle: "Home Details", pageHref: ""}
    ];

    return (
    <>
    <Header {...this.props}></Header>
    <PageDetailTitle 
    breadcrumb={breadcrumb}
    data={ItemDetails}
    />
    <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
    <section className="container">
        <div className="row">
            <div className="col-7 pr-5">
                <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
                </Fade>
            </div>
            <div className="col-5">
            <Fade bottom>
            <BookingForm itemDetails={ItemDetails}></BookingForm>
            </Fade>
            </div>
        </div>
    </section>
    <Categories data={ItemDetails.categories}></Categories>
    <Testimonial data={ItemDetails.testimonial}></Testimonial>
    <Footer/>
    </>
);
}
}

