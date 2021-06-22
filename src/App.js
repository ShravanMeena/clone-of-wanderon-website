import React, { Component } from "react";
import Card from "./components/Card";
import Explore from "./components/Explore";
import Banner from "./components/Banner";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {title:"BACKPACKING TRIPS",url:"https://www.wanderon.in/svg/backpacking-trips.svg"},
    {title:"WEEKEND TRIPS",url:"https://www.wanderon.in/svg/weekend-trips.svg"},
    {title:"WORKCATIONS STAYS",url:"https://www.wanderon.in/svg/workcations.svg"},
    {title:"ADVENTURE COURSES",url:"https://www.wanderon.in/svg/scuba.svg"},
    {title:"CUSTOMISED TRIPS",url:"https://www.wanderon.in/svg/customised-trips.svg"},
    {title:"CORPORATE TRIPS",url:"https://www.wanderon.in/svg/corporate-trips.svg"},
]


const dataBanner = [
    {title:"Happy Travellers",url:"https://www.wanderon.in/svg/cover-travellers.svg"},
    {title:"5 Star Ratings",url:"https://www.wanderon.in/svg/cover-star.svg"},
    {title:"Itineraries",url:"https://www.wanderon.in/svg/cover-destination.svg"},
]


const dataForBackPacking = [
  {url:"https://www.wanderon.in/triplist/bir-billing/wanderon-bir-1.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-lahaul/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/tirthan-valley/wanderon-tirthan-1.jpg"},
  {url:"https://www.wanderon.in/triplist/chopta-tungnath/wanderon-chopta-1.jpg"},
  {url:"https://www.wanderon.in/triplist/mcleodganj-bir-billing/wanderon-bir-1.jpg"},
]


const dataTop = [
  {url:"https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg"},
  {url:"https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg"},
  
]  

export default class App extends Component {
  render() {
    return (
      <>
      <Banner data={dataBanner}/>
      <Explore title="Explore WanderOn" data = {data}/>
      <Card title="Trending Trips" data={dataTop}/>
      <Card title="Weekend Trips" data={dataForBackPacking}/>
      <Card title="Himalayan Escapades" data={dataTop}/>
      <Card title="Adventure Courses" data={dataForBackPacking}/>

      </>
    )
  }
}
