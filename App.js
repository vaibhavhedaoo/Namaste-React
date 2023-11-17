import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
* - Logo
* - NAV Items
* Body
* - Search 
* - Restaurant container
*   - Restaurant Card
*     - image
*     - name 
*     - star rating, cuisines, ETA,  
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105937/16_big6-768x591.png" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
const RestaurantCard= (props) =>{
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId} = resData?.card.card.info;
    //console.log(props);
    return(
        <div className="restaurant-card">
            {/* {console.log(resData.card.card.info.id)} */}
            <img className="food-image" 
            alt="Biryani"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData.card.card.info.sla.slaString}</h4>

        </div>
    );
}
const resList =[
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "437521",
                    "name": "Knight Riders",
                    "cloudinaryImageId": "72a1e3981e2294a9a75e017995b8de1b",
                    "locality": "Dhayarkar Wasti",
                    "areaName": "Mundhwa",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Chinese",
                        "Continental",
                        "Indian",
                        "Biryani",
                        "Italian",
                        "Desserts"
                    ],
                    "avgRating": 4.6,
                    "feeDetails": {
                        "restaurantId": "437521",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 4600
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 4600
                    },
                    "parentId": "119506",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "10+",
                    "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "39 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-18 03:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=437521&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "152231",
                    "name": "Kolkata Darbar",
                    "cloudinaryImageId": "eh8awbbnqfh04lspquz2",
                    "locality": "Mahadev Nagar",
                    "areaName": "Wadgaon Sheri",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Biryani",
                        "Bengali",
                        "Mughlai",
                        "North Indian",
                        "Beverages"
                    ],
                    "avgRating": 3.9,
                    "feeDetails": {
                        "restaurantId": "152231",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "119923",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "36 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=152231&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "565817",
                    "name": "Sky House",
                    "cloudinaryImageId": "564c6c2f5e83ea31f8eec2c0745f6809",
                    "locality": "Jambhulkar Chowk",
                    "areaName": "Wanowrie",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Hyderabadi",
                        "Tandoor",
                        "Mughlai",
                        "Snacks"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "565817",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "189319",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "9",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=565817&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "676467",
                    "name": "The Biryani Crew",
                    "cloudinaryImageId": "3203ffd9472a3824232b996502b8fe10",
                    "locality": "Pune Nagar Road",
                    "areaName": "Viman Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "Desserts"
                    ],
                    "feeDetails": {
                        "restaurantId": "676467",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "404456",
                    "avgRatingString": "--",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "33 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=676467&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "570661",
                    "name": "KD's Kitchen",
                    "cloudinaryImageId": "wahvuonjnffk1zoyidzb",
                    "locality": "Jagtap Chowk",
                    "areaName": "Kondhwa",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Indian"
                    ],
                    "feeDetails": {
                        "restaurantId": "570661",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "116112",
                    "avgRatingString": "--",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=570661&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "39267",
                    "name": "Naughty Angel Cafe",
                    "cloudinaryImageId": "ejsle9m56lw3t6qoenyv",
                    "locality": "Koregaon Park",
                    "areaName": "Koregaon Park",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Salads",
                        "Burgers",
                        "Cafe",
                        "Chinese",
                        "Biryani",
                        "Beverages"
                    ],
                    "avgRating": 4.1,
                    "feeDetails": {
                        "restaurantId": "39267",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "144719",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 5.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "5.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "ABOVE ₹159",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=39267&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "268095",
                    "name": "Express By Ab's",
                    "cloudinaryImageId": "2252a10694e9f3173fb88ff12d1ec988",
                    "locality": "Kalyani Nagar",
                    "areaName": "Kalyani Nagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "North Indian",
                        "Barbecue",
                        "Kebabs",
                        "Biryani"
                    ],
                    "avgRating": 3.9,
                    "feeDetails": {
                        "restaurantId": "268095",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "10320",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 5.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "31 mins",
                        "lastMileTravelString": "5.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=268095&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "568674",
                    "name": "Sheri",
                    "cloudinaryImageId": "sty4yly5wnocjef9fqxg",
                    "locality": "Keshav Nagar",
                    "areaName": "Mundhwa",
                    "costForTwo": "₹1400 for two",
                    "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Continental",
                        "Snacks",
                        "Beverages"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                        "restaurantId": "568674",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "341611",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "20+",
                    "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-18 01:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=568674&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "434852",
                    "name": "PUNJABI KI RASOI",
                    "cloudinaryImageId": "vllm68bfugbhqnt5kpvm",
                    "locality": "kharadi",
                    "areaName": "Hadapsar",
                    "costForTwo": "₹299 for two",
                    "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Beverages",
                        "Desserts",
                        "Fast Food",
                        "Indian",
                        "Maharashtrian",
                        "Punjabi",
                        "Snacks",
                        "Tandoor",
                        "Thalis",
                        "Kebabs"
                    ],
                    "avgRating": 3.6,
                    "feeDetails": {
                        "restaurantId": "434852",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "162342",
                    "avgRatingString": "3.6",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "36 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=434852&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "677011",
                    "name": "Biryani Dobara",
                    "cloudinaryImageId": "a0192c837933561adfd8fc23ad06daaa",
                    "locality": "Atharva Heights",
                    "areaName": "Kharadi",
                    "costForTwo": "₹399 for two",
                    "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Tandoor",
                        "Desserts"
                    ],
                    "feeDetails": {
                        "restaurantId": "677011",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 5200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 5200
                    },
                    "parentId": "317844",
                    "avgRatingString": "--",
                    "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "32 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:30:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=677011&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "378527",
                    "name": "Belly Tales",
                    "cloudinaryImageId": "shb36hmjjhvpwe0080bw",
                    "locality": "Joggers Park",
                    "areaName": "Kalyani Nagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Pizzas",
                        "Beverages"
                    ],
                    "avgRating": 4.1,
                    "feeDetails": {
                        "restaurantId": "378527",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7000
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7000
                    },
                    "parentId": "43248",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=378527&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "379132",
                    "name": "Rubaab Multicuisine family restaurant and bar",
                    "cloudinaryImageId": "linsxgqntmlezfqlogyj",
                    "locality": "Pune-Solapur Road",
                    "areaName": "Hadapsar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Indian",
                        "Seafood",
                        "Chinese"
                    ],
                    "avgRating": 4.2,
                    "feeDetails": {
                        "restaurantId": "379132",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 7200
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 7200
                    },
                    "parentId": "172847",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=379132&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "316124",
                    "name": "New Naaz Caterers Biryani House",
                    "cloudinaryImageId": "yz7hxjcxn3fvjlvllucm",
                    "locality": "Balaji Udhayam Nagar",
                    "areaName": "Wadgaon Sheri",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Biryani",
                        "Indian"
                    ],
                    "avgRating": 3.9,
                    "feeDetails": {
                        "restaurantId": "316124",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6500
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6500
                    },
                    "parentId": "147367",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 6.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "32 mins",
                        "lastMileTravelString": "6.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-18 00:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=316124&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "342564",
                    "name": "Rayalaseema Reddy's Restaurant",
                    "cloudinaryImageId": "ytwgjh1c3glz1dwe1ac0",
                    "locality": "Eon IT park Road",
                    "areaName": "Kharadi",
                    "costForTwo": "₹280 for two",
                    "cuisines": [
                        "South Indian",
                        "Hyderabadi",
                        "Biryani",
                        "Tandoor"
                    ],
                    "avgRating": 3.7,
                    "feeDetails": {
                        "restaurantId": "342564",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6500
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6500
                    },
                    "parentId": "167849",
                    "avgRatingString": "3.7",
                    "totalRatingsString": "500+",
                    "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 6.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "33 mins",
                        "lastMileTravelString": "6.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹650",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=342564&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "601885",
                    "name": "KGN Family Restaurant",
                    "cloudinaryImageId": "0b81ec7b10bb96c3590089f297b76667",
                    "locality": "Guru Govind Housing Society",
                    "areaName": "Kharadi",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Indian"
                    ],
                    "avgRating": 3.6,
                    "feeDetails": {
                        "restaurantId": "601885",
                        "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 6500
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        "totalFee": 6500
                    },
                    "parentId": "387442",
                    "avgRatingString": "3.6",
                    "totalRatingsString": "100+",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 6.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "6.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2023-11-17 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {}
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=601885&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
];
const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {
                    resList.map( restaurant => (
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)
                )}
                {/* Don't use the below code change it to dynamic code by using map function use above  */}
                {/* <RestaurantCard resData ={resList[0]} />
                <RestaurantCard resData ={resList[1]} />
                <RestaurantCard resData ={resList[2]} />
                <RestaurantCard resData ={resList[3]} />
                <RestaurantCard resData ={resList[4]} />
                <RestaurantCard resData ={resList[5]} />
                <RestaurantCard resData ={resList[6]} />
                <RestaurantCard resData ={resList[7]} />
                <RestaurantCard resData ={resList[8]} />
                <RestaurantCard resData ={resList[9]} />
                <RestaurantCard resData ={resList[10]} />
                <RestaurantCard resData ={resList[11]} />
                <RestaurantCard resData ={resList[12]} />
                <RestaurantCard resData ={resList[13]} /> */}
                {/* <RestaurantCard resName="Punjabi grill" cousine="Biryani, North Indian, Asian" rating="4.4" deliveryTime="30 minutes" ImageSrc="https://b.zmtcdn.com/data/dish_photos/42e/bacab4b2825c5d0b40bebd300d89b42e.jpg"/>
                <RestaurantCard resName="KFC" cousine="Fast food, Burger, Pizza" rating="4.2" deliveryTime="30 minutes" ImageSrc="https://i.pinimg.com/474x/8a/5c/44/8a5c44843f653b6fb6a4c53b2f0b3a89.jpg"/>
                <RestaurantCard resName="Burger King" cousine="Fast food" rating="3.3" deliveryTime="25 minutes" ImageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOiCqJrEgCf30uRyN1AE5aF2Tj91zJSn5qp-mCBBjBcGQn6zT_ErLtng3sEMO5BeAJaM&usqp=CAU"/>
                <RestaurantCard resName="Godavri snacks" cousine="South Indian" rating="4.0" deliveryTime="40 minutes" ImageSrc ="https://c.ndtvimg.com/2022-04/jt35llb_south-indian-breakfast-_625x300_11_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384"/> */}
            </div>
        </div>
    );
}
const AppLayout = () => {
    return (<div className="app">
        <Header/>
        <Body/>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);