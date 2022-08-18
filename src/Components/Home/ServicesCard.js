import React from "react";
import Services from "./Services";
const ServicesCard = () => {
    const services = [
        {
            id: 1,
            title: "Discover the cities party scene",
            address: "Uttara",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "nightlife",
            description: "Details product here",
            price: 25,
            category: "experience",
            rating: 4.9,
            reviews: 20,
            guests: 4,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },

        {
            id: 2,
            title: "Notebook 15.6 inch Laptop",
            address: "Rajshahi",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "entertainment",
            description: "Details product here",
            category: "experience",
            price: 25,
            rating: 4.8,
            reviews: 20,
            guests: 5,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },
        {
            id: 3,
            title: "J4105 14.1 Inch RAM 6GB",
            address: "Jessore",
            img: "https://i.ibb.co/Fh1FmD8/gallery-bg.jpg",
            placeType: "photo class",
            description: "Details product here",
            category: "home",
            price: 15,
            rating: 4.5,
            reviews: 18,
            guests: 4,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: false,
            kitchen: true,
            cancelationFlexibility: true,
        },

        {
            id: 4,
            title: "DDR4 8G J4105 14.1 Inch ",
            address: "Jhenaidah",
            img: "https://i.ibb.co/MMt2VZy/gallery4.jpg",
            placeType: "photography",
            description: "Details product here",
            category: "experience",
            price: 18,
            rating: 4.8,
            reviews: 20,
            guests: 5,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },
        {
            id: 4,
            title: "15.6 Inch Large Memory",
            address: "Bandorban",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "photo class",
            description: "Details product here",
            category: "home",
            price: 32,
            rating: 4.8,
            reviews: 20,
            guests: 6,
            bedroom: 2,
            beds: 3,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },
        {
            id: 5,
            title: "Monster Tulpar T5 V20.3 ",
            address: "saint martin",
            img: "https://i.ibb.co/Jq1K6K3/Screenshot-1.png",
            placeType: "nightlife",
            description: "Details product here",
            category: "experience",
            price: 25,
            rating: 4.8,
            reviews: 20,
            guests: 6,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },

        {
            id: 6,
            title: "Amdr7 Ultra-Thin Gaming ",
            address: "Cox Bazar",
            img: "https://i.ibb.co/7zjs4JN/gallery1.jpg",
            placeType: "entertainment",
            description: "Details product here",
            category: "experience",
            price: 12.99,
            rating: 4.9,
            reviews: 20,
            guests: 6,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: false,
            kitchen: true,
            cancelationFlexibility: true,
        },

        {
            id: 7,
            title: "Notebook 15.6 inch Laptop",
            address: "Sylhet",
            img: "https://i.ibb.co/Bwf7y47/gallery2.jpg",
            placeType: "nightlife",
            description: "Details product here",
            category: "experience",
            price: 25,
            rating: 4.8,
            reviews: 20,
            guests: 5,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: false,
            kitchen: false,
            cancelationFlexibility: true,
        },
        {
            id: 8,
            title: "J4105 14.1 Inch RAM 6GB",
            address: "Bagura",
            img: "https://i.ibb.co/T4YzQVD/gallery3.jpg",
            placeType: "entertainment",
            description: "Details product here",
            category: "home",
            price: 25,
            rating: 5,
            reviews: 12,
            guests: 4,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },

        {
            id: 9,
            title: "DDR4 8G J4105 14.1 Inch ",
            address: "Khulna",
            img: "https://i.ibb.co/WnfStWG/gallery8.jpg",
            placeType: "nightlife",
            description: "Details product here",
            category: "home",
            price: 25,
            rating: 4.8,
            reviews: 20,
            guests: 5,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },
        {
            id: 10,
            title: "15.6 Inch Large Memory",
            address: "Mirpur",
            img: "https://i.ibb.co/KKgJVLb/gallery5.jpg",
            placeType: "photography",
            description: "Details product here",
            category: "home",
            price: 25,
            rating: 5,
            reviews: 15,
            guests: 4,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: false,
            cancelationFlexibility: true,
        },
        {
            id: 11,
            title: "Monster Tulpar T5 V20.3 ",
            address: "Chittagong",
            img: "https://i.ibb.co/NrQs1Qc/gallery6.jpg",
            placeType: "nightlife",
            description: "Details product here",
            category: "home",
            price: 25,
            rating: 4.8,
            reviews: 20,
            guests: 6,
            bedroom: 2,
            beds: 2,
            baths: 2,
            wifi: true,
            airCondition: true,
            kitchen: true,
            cancelationFlexibility: true,
        },
    ];

    const experienceCollection = services.filter((service) => service.category === "experience");
    const homeCollection = services.filter((service) => service.category === "home");

    return (
        <div>
            <Services maxHight={130} itemToShow={4} services={experienceCollection}>
                Experience
            </Services>
            <Services maxHight={180} itemToShow={3} services={homeCollection}>
                Homes
            </Services>
        </div>
    );
};

export default ServicesCard;
