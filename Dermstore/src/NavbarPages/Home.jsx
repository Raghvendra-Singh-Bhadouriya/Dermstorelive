import React, {useState, useEffect} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*import Carousel from 'react-multi-carousel';*/
/*import 'react-multi-carousel/lib/styles.css';*/
import "./Home.css"
import Cart from "./Cart"
/*import "node_modules/slick-carousel/slick/slick.css";*/


export default function Home(){
    const [cartItems, setCartItems] = useState([]);
//=================================================================================//
{1}   function ArrofImg(){
        const imageArr = [
            {
                id:1,
                img: "https://static.thcdn.com/images/small/webp/widgets/208-us/53/original-DS_Round_Nav_-_Untitled_Page_%2841%29-120753.png"
            },
            {
                id:2,
                img: "https://static.thcdn.com/images/small/webp/widgets/208-us/05/original-DS_Round_Nav_-_Untitled_Page_%2842%29-120805.png",
            },
            {
                id:3,
                img: "https://static.thcdn.com/images/small/webp/widgets/208-us/18/original-DS_Round_Nav_-_Untitled_Page_%2843%29-120918.png",
            },
            {
                id:4,
                img: "https://static.thcdn.com/images/small/webp/widgets/208-us/45/original-DS_Round_Nav_-_Untitled_Page_%2844%29-120945.png",
            },
            {
                id:5,
                img: "https://static.thcdn.com/images/small/webp/widgets/208-us/30/original-DS_Round_Nav_-_Untitled_Page_%2845%29-121030.png",
            },
            {
                id:6,
                img: "https://static.thcdn.com/images/small/webp/widgets/208-us/15/original-DS_Round_Nav_-_Untitled_Page_%2846%29-121115.png",
            }
        ]
        console.log(imageArr)

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
          };

        return(
            <>
            <div id="main-image-container">
                <div className="six-slider-image">
                <Slider {...settings}>
                    {imageArr.map((i) => {
                        return(
                            <>
                            <div className="circular-image-container" key={i.id}>
                                <img src={i.img}/>
                            </div>
                            </>
                        )
                    })}
                   </Slider>
                </div>
            </div>
            </>
        )
    };

//================================================================================//
{2}  function ArrofBestSeller(){

    

        const BestSeller = [
            {
                id:1,
                name:"EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
                off:"20% Off With Code REFRESH",
                rating:"rating 5.8",
                reviews:"5098 Reviews",
                rs:"$43.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-2005107167153588.jpg"
            },
            {
                id:2,
                name:"SkinMedica tNS Advanced+ Serum (1 oz.)",
                off:"20% off With Code REFRESH + $150 Gift",
                rating:"rating 5.5",
                reviews:"449 Reviews",
                rs:"$295.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/12596429-5594867613443995.jpg"
            },
            {
                id:3,
                name:"PCA SKIN Hyaluronic Acid Boosting Serum 3oz (Worth $351)",
                off:"20% off With Code REFRESH + $50 Gift",
                rating:"rating 5.9",
                reviews:"328 Reviews",
                rs:"$315.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/12937610-6835043948796158.jpg"
            },
            {
                id:4,
                name:"Augustinus Bader The Rich Cream 50ml",
                off:"20% Off With Code REFRESH",
                rating:"rating 5.1",
                reviews:"41 Reviews",
                rs:"$300.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/13315093-7444974668249790.jpg"
            },
            {
                id:5,
                name:"iS Clinical Pro-Heal Serum Advance Plus (1fl.oz.)",
                off:"Double Points",
                rating:"rating 5.9",
                reviews:"355 Reviews",
                rs:"$158.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/11291965-1894871578716777.jpg"
            },
            {
                id:6,
                name:"Neocutis LUMIERE®FIRM RICHE Extra Moisturizing llluminating Tightening Eye Cream (0.5 fl. oz.)",
                off:"20% Of With Code REFRESH",
                rating:"rating 5.8",
                reviews:"155 Reviews",
                rs:"$125.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/12664555-1915073435052740.jpg"
            },
            {
                id:7,
                name:"Dr Dennis Gross Alpha Beta Universal Daily Peel (60 Pack, Worth $204)",
                off:"20% Of With Code REFRESH",
                rating:"rating 5",
                reviews:"25 Reviews",
                rs:"$153.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/13156807-2034893783165696.jpg"
            },
            {
                id:8,
                name:"Oribe Gold Lust Repair and Restore Shampoo and Conditioner Bundle",
                off:"Double Points + Oribe Gift",
                rating:"rating 5.9",
                reviews:"235 Reviews",
                rs:"$101.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/13938587-1455002659983370.jpg"
            },
            {
                id:9,
                name:"NuFACE Trinity+ Starter Kit",
                off:"20% off With code REFRESH + NuFACE Gift",
                rating:"rating 5",
                reviews:"1 Reviews",
                rs:"$395.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/13837547-6014976747066721.jpg"
            },
            {
                id:10,
                name:"iS Clinical Cleansing Complex (6 fl. oz.)",
                off:"Double Points",
                rating:"rating 5.8",
                reviews:"1008 Reviews",
                rs:"$40.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/11291496-1824871578503201.jpg"
            },
            {
                id:11,
                name:"EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)",
                off:"20% Off With Code REFRESH",
                rating:"rating 5.8",
                reviews:"1505 Reviews",
                rs:"$45.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/11370312-8345107169104971.jpg"
            },
            {
                id:12,
                name:"EltaMD Exclusive UV Clear SPF 46 Broad-Spectrum Duo ($82 Value)",
                off:"20% Off With Duo ($82 Value)",
                rating:"rating 5.8",
                reviews:"5098 Reviews",
                rs:"$73.00",
                img:"https://static.thcdn.com/images/small/webp//productimg/original/12538013-1635075250569337.jpg"
            }
        ]
        console.log(BestSeller);

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
          };

          const addToCart = (product) => {
            setCartItems([...cartItems, product]);
          };


        return(
            <>
            <div id="best-seller-main-container">
                <div className="slider-container">
                    <Slider {...settings}>
                        {BestSeller.map((d) => {
                            return(
                                <>
                                <div className="product-details-container" key={d.id}>
                                    <div className="product-img-container">
                                        <img src={d.img}/>
                                    </div>
                                    <div className="product-text-container">
                                        <p style={{lineHeight:"20px"}}>{d.name}</p>
                                        <p style={{lineHeight:"20px", border:"1px solid gray", fontSize:"14px", paddingTop:'2%', paddingBottom:"2%"}}>{d.off}</p>  
                                        <p style={{lineHeight:"normal"}}>{d.rating}</p>
                                        <p style={{lineHeight:"14px"}}>{d.reviews}</p>
                                        <p style={{lineHeight:"21px",fontWeight:"700"}}>{d.rs}</p>
                                        <button onClick={() => addToCart(d)}>QUICK BUY</button>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <Cart cartItems={cartItems}/>
            </>
        )
}

//==============================================================================================//
{3}    function BestSellerOffer(){
    const SellerOfferdata = [
        {
            id:13,
            name:"EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
            off:"20% Off With Code REFRESH",
            rating:"rating 5.8",
            reviews:"5098 Reviews",
            rs:"$43.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-2005107167153588.jpg"
        },
        {
            id:14,
            name:"SkinMedica tNS Advanced+ Serum (1 oz.)",
            off:"20% off With Code REFRESH + $150 Gift",
            rating:"rating 5.5",
            reviews:"449 Reviews",
            rs:"$295.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/12596429-5594867613443995.jpg"
        },
        {
            id:15,
            name:"PCA SKIN Hyaluronic Acid Boosting Serum 3oz (Worth $351)",
            off:"20% off With Code REFRESH + $50 Gift",
            rating:"rating 5.9",
            reviews:"328 Reviews",
            rs:"$315.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/12937610-6835043948796158.jpg"
        },
        {
            id:16,
            name:"Augustinus Bader The Rich Cream 50ml",
            off:"20% Off With Code REFRESH",
            rating:"rating 5.1",
            reviews:"41 Reviews",
            rs:"$300.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/13315093-7444974668249790.jpg"
        },
        {
            id:17,
            name:"iS Clinical Pro-Heal Serum Advance Plus (1fl.oz.)",
            off:"Double Points",
            rating:"rating 5.9",
            reviews:"355 Reviews",
            rs:"$158.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/11291965-1894871578716777.jpg"
        },
        {
            id:18,
            name:"Neocutis LUMIERE®FIRM RICHE Extra Moisturizing llluminating Tightening Eye Cream (0.5 fl. oz.)",
            off:"20% Of With Code REFRESH",
            rating:"rating 5.8",
            reviews:"155 Reviews",
            rs:"$125.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/12664555-1915073435052740.jpg"
        },
        {
            id:19,
            name:"Dr Dennis Gross Alpha Beta Universal Daily Peel (60 Pack, Worth $204)",
            off:"20% Of With Code REFRESH",
            rating:"rating 5",
            reviews:"25 Reviews",
            rs:"$153.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/13156807-2034893783165696.jpg"
        },
        {
            id:20,
            name:"Oribe Gold Lust Repair and Restore Shampoo and Conditioner Bundle",
            off:"Double Points + Oribe Gift",
            rating:"rating 5.9",
            reviews:"235 Reviews",
            rs:"$101.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/13938587-1455002659983370.jpg"
        },
        {
            id:21,
            name:"NuFACE Trinity+ Starter Kit",
            off:"20% off With code REFRESH + NuFACE Gift",
            rating:"rating 5",
            reviews:"1 Reviews",
            rs:"$395.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/13837547-6014976747066721.jpg"
        },
        {
            id:22,
            name:"iS Clinical Cleansing Complex (6 fl. oz.)",
            off:"Double Points",
            rating:"rating 5.8",
            reviews:"1008 Reviews",
            rs:"$40.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/11291496-1824871578503201.jpg"
        },
        {
            id:23,
            name:"EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)",
            off:"20% Off With Code REFRESH",
            rating:"rating 5.8",
            reviews:"1505 Reviews",
            rs:"$45.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/11370312-8345107169104971.jpg"
        },
        {
            id:24,
            name:"EltaMD Exclusive UV Clear SPF 46 Broad-Spectrum Duo ($82 Value)",
            off:"20% Off With Duo ($82 Value)",
            rating:"rating 5.8",
            reviews:"5098 Reviews",
            rs:"$73.00",
            img:"https://static.thcdn.com/images/small/webp//productimg/original/12538013-1635075250569337.jpg"
        }
    ]
    console.log(SellerOfferdata);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };

       return(
           <>
           <div id="bestseller-parent-div">
               <p>Up to 20% off the Bestsellers</p>
               <p>Most-loved for a reason: Save on sure-to-please bestselling formulas & tools.</p>
               <div id="bestseller-child-container">
                    <div className="bestseller-right-bigImage-container">
                        <img src="https://static.thcdn.com/images/medium/webp/widgets/208-us/27/original-676x556-013627.jpg"/>
                    </div>
                    <div className="bestseller-left-slider-container">
                        <Slider {...settings} >
                            {SellerOfferdata.map((offer) => {
                                return(
                                <div className="product-details-container" key={offer.id}>
                                    <div className="product-img-container" >
                                        <img  src={offer.img}/>
                                    </div>
                                    <div className="product-text-container">
                                        <p style={{lineHeight:"20px", fontSize:"14px",fontWeight:"bold"}}>{offer.name}</p>
                                        <p style={{lineHeight:"20px", border:"1px solid gray", fontSize:"14px", paddingTop:'2%', paddingBottom:"2%"}}>{offer.off}</p>  
                                        <p style={{lineHeight:"normal"}}>{offer.rating}</p>
                                        <p style={{lineHeight:"14px"}}>{offer.reviews}</p>
                                        <p style={{lineHeight:"21px",fontWeight:"700"}}>{offer.rs}</p>
                                        <button>QUICK BUY</button>
                                    </div>
                                </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
           </>
       )
   }

//===============================================Beauty Refresh Sale========================================================//
function BeautyRefreshSale(){
    const RefreshSaleData = [
        {
            id:25,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/38/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%282%29-010338.png",
            reach:"AUGUSTINUS BADER",
        },
        {
            id:26,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/53/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%284%29-010653.png",
            reach:"SUNDAY RILEY",
        },
        {
            id:27,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/03/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%289%29-012403.png",
            reach:"ORIBE",
        },
        {
            id:28,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/03/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%286%29-011303.png",
            reach:"NEOCUTIS",
        },
        {
            id:29,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/55/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%283%29-010455.png",
            reach:"PCA SKIN",
        },
        {
            id:30,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/55/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%288%29-012255.png",
            reach:"JANE IREDALE",
        },
        {
            id:31,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/48/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%2811%29-081148.png",
            reach:"COLORESCIENCE",
        },
        {
            id:32,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/43/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%287%29-011543.png",
            reach:"R+CO",
        },
        {
            id:33,
            img:"https://static.thcdn.com/images/small/webp/widgets/208-us/14/original-Dermstore_Anniversary_Sale_Trade_Trending_-_Untitled_Page_%2810%29-104814.png",
            reach:"TARTE",
        },
    ]

    console.log(RefreshSaleData)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };

    return(
        <>
        <div id="refreshsale-main-container">
            <p className="refreshsale-heading">Beauty Refresh Sale: Up to 20% off + 2x Points on Select Brands</p>
            <div className="refreshsale-slider-container">
                <Slider {...settings}>
                {RefreshSaleData.map((refreshsale) => {
                    return(
                        <>
                        <div key={refreshsale.id} className="refreshsale-product-child-div">
                            <img src={refreshsale.img}/>
                            <button>{refreshsale.reach}</button>
                        </div>
                        </>
                    )
                })}
                </Slider>
            </div>
        </div>
        </>
    )
}

//==============================================Spring Ready Beauty Section=============================================================//
    function SpringReadyBeauty(){
        const SpringReady = [
            {
                id:1,
                title:"Up to 20% off + 2x points on Makeup",
                shopnow:"SHOP NOW",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/01/original-Dermstore_Anniversary_Sale_Priority_-_Trade_-_Untitled_Page_%2828%29-093201.png",
            },
            {
                id:2,
                title:"Up to 20% off + 2x points on Kits & Sets",
                shopnow:"SHOP NOW",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/14/original-Dermstore_Anniversary_Sale_Priority_-_Trade_-_Untitled_Page_%2825%29-093214.png",
            },
            {
                id:3,
                title:"Up to 20% off + 2x points on Fragrance",
                shopnow:"SHOP NOW",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/17/original-Dermstore_Anniversary_Sale_Priority_-_Trade_-_Untitled_Page_%2827%29-093217.png",
            },
        ]
        console.log(SpringReady)

        return(
            <>
            <div id="springready-beauty-main-div">
                <p>Spring-Ready Beauty</p>
                <div className="springready-beauty-child-div">
                    {SpringReady.map((spReady) => {
                        return(
                            <>
                            <div key={spReady.id} className="springready-beauty-product-div">
                                <img src={spReady.img}/>
                                <p>{spReady.title}</p>
                                <button>{spReady.shopnow}</button>
                            </div>
                            </>
                        )
                    })} 
                </div>
            </div>
            
            </>
        )
    }

/*===================================================From The Blog Section===========================================================*/
    function FromtheBlog(){
        const Blogdata = [
            {
                id:1,
                title:"Our Top Picks From The Beauty Refresh Sale",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/55/original-Dermstore_Anniversary_Sale_Priority_-_Trade_-_Untitled_Page_%2832%29-061055.png",
            },
            {
                id:2,
                title:"Isn’t It Iconic: Natura Bissé Is February’s Editor Obsession",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/38/original-300x180-082238.jpeg",
            },
            {
                id:3,
                title:"Routine Refresh: The Barrier Strengthening Routine",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/57/original-1228_58634_THG0035884_DS_JN_January_Campaign_Batching_Shot_3_300x180-061357.jpeg",
            },
            {
                id:4,
                title:"Chasing The Elusive Holy Grail Routine? Start Here",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/22/original-1228_58634_THG0035884_DS_JN_January_Campaign_Batching_Shot_2_300x180-061222.jpeg",
            },
            {
                id:5,
                title:"Beauty Made Mindful: What Inspires These Five Conscious Beauty Brand Founders",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/59/original-HP_Banner_Template_-_Untitled_Page_%286%29-043159.png",
            },
            {
                id:6,
                title:"Retinol by Decade: The Formulas for Your 20s, 30s, 40s and Beyond",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/43/original-1019-STDCRE-42681-DS-AMR-Brand_Rooms_Batching-08-300x180-105943.jpg",
            },
            {
                id:7,
                title:"9 Best Cleansers for Skin That’s Feeling Sensitive",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/21/original-New_Project_%288%29-042821.jpg",
            },
            {
                id:8,
                title:"Everything You Need to Know About Vitamin C, The Most Underrated Ingredient in Skincare",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/08/Untitled_design_%2830%29-095908.png",
            },
            {
                id:9,
                title:"Better Together: Meet the Sidekick Ingredients to the Hero You Know and Love",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/31/skinceutical-vitamin-c-082631.jpg",
            },
            {
                id:10,
                title:"Skin Care Tools & Devices You Should Use to Elevate Your Skin Care Routine",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/30/original-300x180-043430.jpeg",
            },
            {
                id:11,
                title:"Protect Like a Doctor",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/05/300x180.jpeg-125505.jpg",
            },
            {
                id:12,
                title:"Niacinamide & Acne: Everything You Need to Know About Vitamin B3 and Blemishes",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/13/300x180-112613.jpg",
            },
            {
                id:13,
                title:"What Causes Skin Cancer?",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/44/300x180.jpeg-112844.jpg",
            },
            {
                id:14,
                title:"18 Hair, Skin and Body Products to Shop from Allure’s Best of Beauty Awards",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/26/allure_blog-091926.jpg",
            },
            {
                id:15,
                title:"Your Must-Have SkinCeuticals Serum Wardrobe",
                img:"https://static.thcdn.com/images/small/webp/widgets/208-us/18/SkinC_300x180-055918.png",
            },
        ]
        console.log(Blogdata)

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
        }

        return(
            <>
            <div id="fromtheblog-main-div">
                <p>From The Blog</p>
                <div className="fromtheblog-slider-div">
                    <Slider {...settings}>
                    {Blogdata.map((blogdata) => {
                        return(
                            <>
                            <div key={blogdata.id} className="fromtheblog-product-div">
                                <img src={blogdata.img}/>
                                <p>{blogdata.title}</p>
                            </div>
                            </>
                        )
                    })}
                    </Slider>
                </div>
            </div>
            </>
        )
    }
    
    return(
        <>
        Home Section
        <div id="home-top-bigimg-container">
            <img src="https://static.thcdn.com/images/large/webp/widgets/208-us/13/original-Dermstore_-_Distupters_2__-_Untitled_Page_%2840%29-091313.png"/>
        </div>
        <ArrofImg/>
        <ArrofBestSeller/>
        <div id="home-mid-bigimg-container">
            <img src="https://static.thcdn.com/images/large/webp/widgets/208-us/23/original-DS-BRS-Disruptor-Desktop-Sale-Eminence-041423.jpg"/>
        </div>
        <BestSellerOffer/>
        <BeautyRefreshSale/>
        <div id="home-last-bigimg-container">
            <img src="https://static.thcdn.com/images/large/webp/widgets/208-us/32/original-DS-BRS-HP-Desktop-Sale-%2410_1640_x_244-103432.jpg"/>
        </div>
        <SpringReadyBeauty/>
        <FromtheBlog/>
        </>
    )
    
    
}

