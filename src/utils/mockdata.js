const resList =[
    {
        "statusCode": 0,
        "data": {
          "statusMessage": "done successfully",
          "pageOffset": {
            "nextOffset": "CIlNEOskKICAkoDRlc3CJTDIDjgE",
            "widgetOffset": {
              "restaurantCountWidget": "",
              "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
              "inlineFacetFilter": "",
              "collectionV5MastheadWidget": ""
            }
          },
          "cards": [
            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                  "collectionId": "83649",
                  "title": "Biryani",
                  "description": "Taste these delectable classics, delectable biryanis to make your day.",
                  "imageId": "v1674029961/PC_Creative%20refresh/3D_bau/collections_new/Biriyani.png",
                  "aspectRatio": "3.44",
                  "cta": {
                    "link": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani,layout_cuisine_biryani,ads_pc_biryani,biryani",
                    "type": "collectionv2"
                  },
                  "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                  "count": "127 restaurants"
                }
              }
            },
            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                  "sortConfigs": [
                    {
                      "key": "relevance",
                      "title": "Relevance (Default)",
                      "selected": true,
                      "defaultSelection": true
                    },
                    {
                      "key": "deliveryTimeAsc",
                      "title": "Delivery Time"
                    },
                    {
                      "key": "modelBasedRatingDesc",
                      "title": "Rating"
                    },
                    {
                      "key": "costForTwoAsc",
                      "title": "Cost: Low to High"
                    },
                    {
                      "key": "costForTwoDesc",
                      "title": "Cost: High to Low"
                    }
                  ],
                  "restaurantCount": 127,
                  "facetList": [
                    {
                      "label": "Veg/Non-veg",
                      "id": "isVeg",
                      "selection": "SELECT_TYPE_SINGLESELECT",
                      "facetInfo": [
                        {
                          "label": "Pure veg",
                          "id": "isVegfacetquery2",
                          "analytics": {
                            
                          },
                          "openFilter": true
                        },
                        {
                          "label": "Non Veg",
                          "id": "isVegfacetquery3",
                          "analytics": {
                            
                          }
                        }
                      ],
                      "viewType": "VIEW_TYPE_FLATTENED",
                      "subLabel": "Filter by"
                    },
                    {
                      "label": "Delivery Time",
                      "id": "deliveryTime",
                      "selection": "SELECT_TYPE_SINGLESELECT",
                      "facetInfo": [
                        {
                          "label": "Less than 30 mins",
                          "id": "deliveryTimefacetquery2",
                          "analytics": {
                            
                          },
                          "openFilter": true
                        },
                        {
                          "label": "Less than 45 mins",
                          "id": "deliveryTimefacetquery3",
                          "analytics": {
                            
                          }
                        }
                      ],
                      "viewType": "VIEW_TYPE_FLATTENED",
                      "subLabel": "Filter by"
                    },
                    {
                      "label": "Cost for two",
                      "id": "costForTwo",
                      "selection": "SELECT_TYPE_MULTISELECT",
                      "facetInfo": [
                        {
                          "label": "Rs. 300-Rs. 600",
                          "id": "costForTwofacetquery3",
                          "analytics": {
                            
                          },
                          "openFilter": true
                        },
                        {
                          "label": "Greater than Rs. 600",
                          "id": "costForTwofacetquery4",
                          "analytics": {
                            
                          }
                        },
                        {
                          "label": "Less than Rs. 300",
                          "id": "costForTwofacetquery5",
                          "analytics": {
                            
                          },
                          "openFilter": true
                        }
                      ],
                      "viewType": "VIEW_TYPE_HALF_CARD",
                      "subLabel": "Filter by"
                    }
                  ]
                }
              }
            },
            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                  "layout": {
                    "rows": 1,
                    "widgetPadding": {
                      "left": 16,
                      "top": 20,
                      "right": 16,
                      "bottom": 16
                    },
                    "scrollBar": {
                      
                    },
                    "widgetTheme": {
                      "defaultMode": {
                        "backgroundColour": "#FFFFFF",
                        "theme": "THEME_TYPE_LIGHT"
                      },
                      "darkMode": {
                        "backgroundColour": "#1B3028",
                        "theme": "THEME_TYPE_DARK"
                      }
                    }
                  },
                  "id": "restaurantCountWidget",
                  "gridElements": {
                    "infoWithStyle": {
                      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                      "text": "127 restaurants to explore",
                      "headerStyling": {
                        "textSize": 15,
                        "textColor": "text_color_highest_emphasis",
                        "textFontName": "FONT_NAME_HEADER_H5",
                        "maxLines": 1
                      }
                    }
                  }
                }
              }
            },
            {
              "card": {
                "card":  {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  "info": {
                    "id": "287158",
                    "name": "Hotel Garwa Satyampuram (Veg & NonVeg)",
                    "cloudinaryImageId": "wamlxz58rwqjouvw07rm",
                    "locality": "Bhekrai Nagar",
                    "areaName": "Hadapsar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                      "Biryani",
                      "Chinese",
                      "Maharashtrian",
                      "North Indian",
                      "Indian"
                    ],
                    "avgRating": 3.9,
                    "feeDetails": {
                      "restaurantId": "287158",
                      "fees": [
                        {
                          "name": "BASE_DISTANCE",
                          "fee": 4800
                        },
                        {
                          "name": "BASE_TIME"
                        },
                        {
                          "name": "ANCILLARY_SURGE_FEE"
                        }
                      ],
                      "totalFee": 4800
                    },
                    "parentId": "11406",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=9503776~p=1~eid=0000018b-e31e-7e2b-14d8-345f005a012b~srvts=1700322508331~83649",
                    "sla": {
                      "deliveryTime": 26,
                      "lastMileTravel": 4.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "26 mins",
                      "lastMileTravelString": "4.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2023-11-18 23:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "textBased": {
                          
                        },
                        "imageBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                      "title": {
                        
                      },
                      "subTitle": {
                        
                      },
                      "message": {
                        
                      },
                      "customIcon": {
                        
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    }
                  },
                  "analytics": {
                    
                  },
                  "cta": {
                    "link": "swiggy://menu?restaurant_id=287158&source=collection&query=Biryani",
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
          ],
          "firstOffsetRequest": true,
          "nextFetch": 3
        },
        "tid": "76c599d7-24b7-4c7b-89dc-a67c87940c18",
        "sid": "aj944bd3-3dda-47ce-9518-33ed92bd01b3",
        "deviceId": "126df502-7325-47aa-bc29-7c74208f433a",
        "csrfToken": "YHfBB3Bo07i7-gYGs-P4cJAH1ibzbES1TQ4LTWv0"
      }
];

export default resList;