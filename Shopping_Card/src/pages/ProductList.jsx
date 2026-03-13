import React from 'react';
import ProductCard from '../components/ProductCard';
import Iphone15 from '../assets/product/Iphone15.jpg'
import Acer from '../assets/product/Acer.jpg'
import SamsungHDTv from '../assets/product/SamsungHDTv.jpg'
import Ovemb from '../assets/product/Ovemb.jpg'
import Nikon from '../assets/product/Nikon.jpg'
import OnePlus11 from '../assets/product/Oneplus11.jpg'
import Goboult from '../assets/product/Goboult.jpg'
import SonyTv from '../assets/product/SonyTv.jpg'
import hp from '../assets/product/hp.jpg'
import Sonatta from '../assets/product/Sonatta.jpg'
import PocoM3 from '../assets/product/PocoM3.jpg'
import Zhiyun from '../assets/product/Zhiyun.jpg'
import OnePlus from '../assets/product/Oneplus.jpg'
import Lenovo from '../assets/product/Lenovo.jpg'
import LG from '../assets/product/LG.jpg'
import Motorola from '../assets/product/Motorola.jpg'
import Analog from '../assets/product/Analog.jpg'
import Akaso from '../assets/product/Akaso.jpg'

import '../components/Product.css';

//image
import Delivery from '../assets/Items/Delivery.jpg'
import Location from "../assets/Items/Location.jpg"
import WhiteMan from "../assets/Items/WhiteMan.jpg"

const PRODUCTS = [
  {id: 1, name: "Motorola", price:"10000", image: Motorola},
  { id: 2, name: "Iphone15", price: "16777"  , image: Iphone15},
    { id: 3, name: "Acer", price: "39999"  , image: Acer},
    { id: 4, name: "Ovemb", price: "347" , image: Ovemb},
    { id: 5, name: "SamsungHdTv", price: "13490" ,image: SamsungHDTv},
    { id: 6, name: "Nikon", price: "65999" ,image: Nikon},
    { id: 7, name: "OnePlus11", price: "44999" ,image: OnePlus11},
    { id: 8, name: "Goboult", price: "859" ,image: Goboult},
    { id: 9, name :"SonyTv", price:"75490", image:SonyTv},
    { id: 10, name: "hp", price: "26809" ,image: hp},
    { id: 11, name: "Sonatta", price: "2795" ,image: Sonatta},
    { id: 12, name: "PocoM3", price: "13999" ,image: PocoM3},
    { id: 13, name: "Zhiyun", price: "53999" ,image: Zhiyun},
    { id: 14, name: "OnePlus", price: "1499" ,image: OnePlus},
    { id: 15, name: "Lenovo", price: "32999" ,image: Lenovo},
    {id: 16, name:"LG", price:"62990", image: LG},
    {id: 17, name:"Analog", price:"10145", image: Analog},
    {id: 18, name:"Akaso", price:"17574", image: Akaso}
];

function ProductList() {
  return (
    <>
    <div style={{ padding: 20 }}>
      
      <h2 style={{textAlign:"center", fontWeight:"bold", fontSize:"29px"}}>Products</h2>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>
    </div>

     <div className='delivery'>
    <div >
      <img className='delivery_boy' src={Delivery} alt="" />
    </div>
    <div className='delivery_items'>
        <h2>30 Minutes Fast</h2>
        <h2>Delivery Challange</h2>
        <h5>Span Flexible working hours, weekly <br />
        payments and insurace cocerafe !</h5>
        <img className='Location' src={Location} alt="" />
    </div>
    <div>
      <img className='WhiteMan' src={WhiteMan} alt="" />
    </div>
    </div>
    <div className='contact'>
      <div>
        <h2>Contact : 8870032399</h2>
      </div>
      <div>
        <h2>Website : www.Shopping_Card.com</h2>
      </div>
    </div>
    </>
  );
}
export default ProductList;
