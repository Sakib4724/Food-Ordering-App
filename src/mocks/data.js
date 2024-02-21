export const MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "5170",
              name: "Theobroma",
              city: "Mumbai",
              slugs: { restaurant: "theobroma-powai-powai", city: "mumbai" },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
              locality: "Parksite",
              areaName: "Vikhroli West",
              costForTwo: "40000",
              costForTwoMessage: "₹400 for two",
              cuisines: ["Bakery", "Desserts"],
              avgRating: 4.6,
              feeDetails: {
                restaurantId: "5170",
                fees: [
                  { name: "distance", fee: 4900 },
                  { name: "time" },
                  { name: "special" },
                ],
                totalFee: 4900,
                icon: "v1648635511/Delivery_fee_new_cjxumu",
                message: "3 kms | ₹49 Delivery fee will apply",
              },
              parentId: "1040",
              avgRatingString: "4.6",
              totalRatingsString: "10K+ ratings",
              sla: {
                restaurantId: "5170",
                deliveryTime: 27,
                minDeliveryTime: 25,
                maxDeliveryTime: 30,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 44,
                slaString: "25-30 MINS",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-02-09 23:59:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "FLAT125 off",
                shortDescriptionList: [
                  {
                    meta: "FLAT125 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Free Delivery",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "FLAT125 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Free Delivery",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "theobroma-powai-powai",
              multiOutlet: true,
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message:
                    "Shop no 25, Kailas Industrial Complex, C wing, Parksite, Behind Godrej, Vikhroli West, Mumbai -400079",
                },
                { title: "Cuisines", message: "Bakery,Desserts" },
              ],
              logo: "v1643287103/Gourmet-Rework/Theobroma.png",
              totalRatings: 10000,
              aggregatedDiscountInfoV2: {
                header: "FLAT125 off",
                shortDescriptionList: [
                  {
                    meta: "FLAT125 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Free Delivery",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "FLAT125 off | Use FLATDEAL",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Free Delivery",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/5170",
              },
              expectationNotifiers: [
                {
                  text: "3 kms | ₹49 Delivery fee will apply",
                  icon: { imageId: "v1648635511/Delivery_fee_new_cjxumu" },
                  popup: { cta: {} },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  enrichedText: "<b>3 kms</b> | ₹49 Delivery fee will apply",
                  halfCardPopup: { halfCardPopupHeader: {} },
                },
              ],
              generalPurposeInfoListV2: [
                { cta: { info: { recordings: {} }, linkCta: {} } },
              ],
              ratingSlab: "RATING_SLAB_5",
              restaurantCategory: "RESTAURANT_CATEGORY_GOURMET",
              backgroundImage: "v1642746515/G%20menu%20headers/Theobroma.png",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              nearestOutletNudge: {
                nearestOutletInfo: {
                  siblingOutlet: {
                    id: "693079",
                    city: "0",
                    slugs: {},
                    areaName: "Powai",
                    costForTwo: "0",
                    feeDetails: {},
                    sla: {
                      deliveryTime: 16,
                      lastMileTravel: 1.1,
                      slaString: "16 MINS",
                      lastMileTravelString: "1.1 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: { restaurantClosedMeta: {} },
                    aggregatedDiscountInfo: { visible: true },
                    badges: {},
                    aggregatedDiscountInfoV2: { visible: true },
                    availabilityServiceabilityMessage:
                      "Temporarily closed for delivery",
                    cartOrderabilityNudgeBanner: {
                      parameters: {},
                      presentation: {},
                    },
                  },
                },
                nearestOutletComms: {
                  title: { text: "Get your order 11 min faster" },
                  subTitle: { text: "Switch to the faster outlet" },
                },
              },
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              latLong: "19.1131207,72.9181073",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "FLAT ₹125 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["5950d903-d48d-4796-afa9-7a8aabd6e10e"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLATDEAL",
                      description: "ABOVE ₹849",
                      offerType: "offers",
                      restId: "5170",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/be912a4c543f00172d9f82c033ee7239",
                      offerIds: ["42eb1978-2b05-4ddd-b76e-29925da863b7"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE RUPAY100",
                      description: "ABOVE ₹129",
                      offerType: "offers",
                      restId: "5170",
                      offerLogo:
                        "rng/md/ads/production/be912a4c543f00172d9f82c033ee7239",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹300",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/15fb1cfe885005447dc8375e7970600f",
                      offerIds: ["c313f07b-4a9c-451e-ab52-586759f42642"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE CITIFOODIE",
                      description: "ABOVE ₹1200",
                      offerType: "offers",
                      restId: "5170",
                      offerLogo:
                        "rng/md/ads/production/15fb1cfe885005447dc8375e7970600f",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT ₹30 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/7f31c9e47ddd7e6a3c16d21553c0ca60",
                      offerIds: ["269c382d-796f-45cd-bd15-0b8b891c5e0c"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE SIMPL30",
                      description: "ABOVE ₹300",
                      offerType: "offers",
                      restId: "5170",
                      offerLogo:
                        "rng/md/ads/production/7f31c9e47ddd7e6a3c16d21553c0ca60",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
                habitMilestoneInfo: { callout: {} },
                loyaltyDiscoverPresentationInfo: { logoCtx: {} },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {},
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: { attributes: { displayText: "VEG" } },
                      nonvegFilter: { attributes: { displayText: "NONVEG" } },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922850",
                              name: "Valentine's Chocolate & Strawberry Cake [385g]",
                              category: "Valentine's Day Specials",
                              description:
                                "Dark chocolate mousseline, and a fresh strawberry jam, layered between rich eggless chocolate sponge. Finished with rosettes of dark chocolate Ganache.",
                              imageId: "12b7cbbedd5d55f1b27ec6e249490f19",
                              inStock: 1,
                              isVeg: 1,
                              price: 42500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922854",
                              name: "Valentine's Chocolate Rochers Gift Box [9 Pcs]",
                              category: "Valentine's Day Specials",
                              description:
                                "Chocolate coated delicacies in an assortment of 3 flavours -  i. Dark chocolate Chocos and fig, ii. Dark chocolate Almond and  Raisins, iv.Milk chocolate Hazelnut & Orange",
                              imageId: "a2872fe9c942cd249844c0de0a7d5748",
                              inStock: 1,
                              isVeg: 1,
                              price: 49000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922853",
                              name: "Valentine's Strawberry Cheesecake Cup [106g]",
                              category: "Valentine's Day Specials",
                              description:
                                "Cheesecake with strawberry jelly on a buttery biscuit base, topped with fresh strawberries and fresh cream, decorated with chocolate hearts",
                              imageId: "eca1d1c70eed702308a460b3a0123c92",
                              inStock: 1,
                              isVeg: 1,
                              price: 19000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922851",
                              name: "Valentine's Assorted Cupcakes [2 Pcs]",
                              category: "Valentine's Day Specials",
                              description:
                                "Our signature red velvet cupcake and chocolate cupcake, paired together for the perfect Valentine's date",
                              imageId: "add09306a17fa0c26fadf3eb8dd96362",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922852",
                              name: "Valentine's Assorted Eggless Brownies [2 Pcs]",
                              category: "Valentine's Day Specials",
                              description:
                                "Our signature eggless choco chip brownie and eggless cookie brownie, paired together for the perfect Valentine's date",
                              imageId: "c361884f3bdd84607b2979bf59831a6a",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "69018420",
                              name: "Almond Rocks [250g]",
                              category: "Valentine's Day Specials",
                              description:
                                "Almonds coated with dark chocolate.",
                              imageId: "5c071677a01c683f496e602c0f2f91e3",
                              inStock: 1,
                              isVeg: 1,
                              price: 57500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "37 ratings",
                                  ratingCountV2: "37",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752707",
                              name: "Almond Rocks [1/2kg]",
                              category: "Valentine's Day Specials",
                              description:
                                "Almonds coated with dark chocolate.",
                              imageId: "262659468458ede3cf19db524041cde2",
                              inStock: 1,
                              isVeg: 1,
                              price: 115000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100163790",
                              name: "Indulgence Hamper",
                              category: "Gifting",
                              description:
                                "An assortment of our signature products - Assorted brownies - [choco chip (2), walnut (1), overload (1), cookie (1) & millionaire (1)],Choco Chip Cookies (8 pcs), Dense loaf, Butter cookies, Mava cake, Almond biscotti, Chocolate coated biscuits, Bana",
                              imageId: "a79539dd08dab525567b4b8386d4a5d9",
                              inStock: 1,
                              price: 300000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "76939065",
                              name: "Luxury Hamper",
                              category: "Gifting",
                              description:
                                "An assortment of our signature products - Assorted eggless brownies - [choco chip (2), walnut (1), outrageous (1), cookie (1)& millionaire (1)], Choco Chip Cookies (8 pcs), Dense loaf, Butter cookies, Mava cake, Black pepper sourdough crackers & Almo",
                              imageId: "b12df3244a5a2817ad644bb7da6a7dd7",
                              inStock: 1,
                              price: 210000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "76939063",
                              name: "Premium Hamper",
                              category: "Gifting",
                              description:
                                "An assortment of our signature products - Assorted eggless brownies - [choco chip (1), walnut (1), outrageous (1), cookie (1)], Double Choco Chip Cookies (8 pcs), Dense loaf, Butter cookies, Ragi crackers & Butter palmiers",
                              imageId: "6f121c775297f6266d1bf371e2d56b97",
                              inStock: 1,
                              price: 150000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753052",
                              name: "Walnut Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Chocolate brownie topped with toasted walnuts.",
                              imageId: "d53b1f37316df558b222efcd039e9f73",
                              inStock: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "123 ratings",
                                  ratingCountV2: "123",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752814",
                              name: "Choco Chip Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Chocolate brownie with chocolate chips.",
                              imageId: "b6584b4759bae681703b1969f0c384a8",
                              inStock: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "76 ratings",
                                  ratingCountV2: "76",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752875",
                              name: "Cookie Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Chocolate chip brownie base, topped with a layer of chocolate chip cookie dough. Two much fun!",
                              imageId: "84035a935c8c280c80b268c8147c06ef",
                              inStock: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "94 ratings",
                                  ratingCountV2: "94",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753033",
                              name: "Overload Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Chocolate brownie loaded with generous amounts of real dark chocolate.",
                              imageId: "9b4338e04c9f96314fbc56960fd389cb",
                              inStock: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "224 ratings",
                                  ratingCountV2: "224",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753022",
                              name: "Millionaire Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Soft buttery caramel sandwiched between our chocolate chip brownie and layer of dark chocolate truffle.",
                              imageId: "8f43488044792d94a36e0981b54c05c9",
                              inStock: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "115 ratings",
                                  ratingCountV2: "115",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752728",
                              name: "Assorted Brownies Box [12 Pcs]",
                              category: "Brownies",
                              description:
                                "An assortment of signature Theobroma brownies - Walnut brownies (2), Choco Chip brownies (4), Millionaire brownies (2), Cookie brownies (2), Overload Brownies (2)",
                              imageId: "d70a23f7207f48474963b0c675911976",
                              inStock: 1,
                              price: 128000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752744",
                              name: "Assorted Brownies Box [6 Pcs]",
                              category: "Brownies",
                              description:
                                "An assortment of signature Theobroma brownies - Walnut brownie (1), Choco Chip brownies (2), Millionaire brownie (1), Cookie brownie (1), Overload Brownie (1)",
                              imageId: "1e50173648f04463c47af8477f0a6324",
                              inStock: 1,
                              price: 64000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "103 ratings",
                                  ratingCountV2: "103",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752918",
                              name: "Eggless Choco Chip Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Eggless Chocolate brownie with chocolate chips.",
                              imageId: "b6584b4759bae681703b1969f0c384a8",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753001",
                              name: "Eggless Walnut Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Eggless chocolate brownie topped with toasted walnuts.",
                              imageId: "d53b1f37316df558b222efcd039e9f73",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "127 ratings",
                                  ratingCountV2: "127",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752948",
                              name: "Eggless Cookie Brownie [1 Piece]",
                              category: "Brownies",
                              description:
                                "Eggless chocolate chip brownie base, topped with a layer of chocolate chip cookie dough. Two much fun!",
                              imageId: "84035a935c8c280c80b268c8147c06ef",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "62 ratings",
                                  ratingCountV2: "62",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Valentine's Day Specials",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922850",
                              name: "Valentine's Chocolate & Strawberry Cake [385g]",
                              category: "Valentine's Day Specials",
                              description:
                                "Dark chocolate mousseline, and a fresh strawberry jam, layered between rich eggless chocolate sponge. Finished with rosettes of dark chocolate Ganache.",
                              imageId: "12b7cbbedd5d55f1b27ec6e249490f19",
                              inStock: 1,
                              isVeg: 1,
                              price: 42500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922854",
                              name: "Valentine's Chocolate Rochers Gift Box [9 Pcs]",
                              category: "Valentine's Day Specials",
                              description:
                                "Chocolate coated delicacies in an assortment of 3 flavours -  i. Dark chocolate Chocos and fig, ii. Dark chocolate Almond and  Raisins, iv.Milk chocolate Hazelnut & Orange",
                              imageId: "a2872fe9c942cd249844c0de0a7d5748",
                              inStock: 1,
                              isVeg: 1,
                              price: 49000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922853",
                              name: "Valentine's Strawberry Cheesecake Cup [106g]",
                              category: "Valentine's Day Specials",
                              description:
                                "Cheesecake with strawberry jelly on a buttery biscuit base, topped with fresh strawberries and fresh cream, decorated with chocolate hearts",
                              imageId: "eca1d1c70eed702308a460b3a0123c92",
                              inStock: 1,
                              isVeg: 1,
                              price: 19000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922851",
                              name: "Valentine's Assorted Cupcakes [2 Pcs]",
                              category: "Valentine's Day Specials",
                              description:
                                "Our signature red velvet cupcake and chocolate cupcake, paired together for the perfect Valentine's date",
                              imageId: "add09306a17fa0c26fadf3eb8dd96362",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "133922852",
                              name: "Valentine's Assorted Eggless Brownies [2 Pcs]",
                              category: "Valentine's Day Specials",
                              description:
                                "Our signature eggless choco chip brownie and eggless cookie brownie, paired together for the perfect Valentine's date",
                              imageId: "c361884f3bdd84607b2979bf59831a6a",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "69018420",
                              name: "Almond Rocks [250g]",
                              category: "Valentine's Day Specials",
                              description:
                                "Almonds coated with dark chocolate.",
                              imageId: "5c071677a01c683f496e602c0f2f91e3",
                              inStock: 1,
                              isVeg: 1,
                              price: 57500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "37 ratings",
                                  ratingCountV2: "37",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752707",
                              name: "Almond Rocks [1/2kg]",
                              category: "Valentine's Day Specials",
                              description:
                                "Almonds coated with dark chocolate.",
                              imageId: "262659468458ede3cf19db524041cde2",
                              inStock: 1,
                              isVeg: 1,
                              price: 115000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Strawberry Specials",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129013202",
                              name: "Strawberry & Fresh Cream Cake [1/2kg]",
                              category: "Strawberry Specials",
                              description:
                                "Serves 1 | Fresh Strawberries, on layers of diplomat cream, strawberry jam &Â layers of soft vanilla cake, covered with flaked almonds.",
                              imageId: "720b13365d468fc21489b18dfaff24c1",
                              inStock: 1,
                              isVeg: 1,
                              price: 72500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129013203",
                              name: "Chocolate & Strawberry Cake [1/2kg]",
                              category: "Strawberry Specials",
                              description:
                                "Serves 1 | Layers of creamy chocolate mousse Â & moist chocolate sponge,Â topped with fresh strawberries.",
                              imageId: "ead6bc1d490b6047dcee74c0fcf06586",
                              inStock: 1,
                              isVeg: 1,
                              price: 72500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "106620357",
                              name: "Strawberry Cheesecake [1/2kg]",
                              category: "Strawberry Specials",
                              description:
                                "Serves 1 | Cheesecake with strawberry jelly on a buttery biscuit base, toppedÂ with fresh strawberries and fresh cream.",
                              imageId: "f696cfcac9217763bb4350f78ffd77a6",
                              inStock: 1,
                              isVeg: 1,
                              price: 77500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129013204",
                              name: "Strawberry & Fresh Cream Pastry [1 Piece]",
                              category: "Strawberry Specials",
                              description:
                                "Serves 1 | Fresh Strawberries, on layers of fresh cream, strawberry jam &Â layers of soft vanilla cake.",
                              imageId: "7fefbb8b8ff22bd1a26c7eb2fed8e03a",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129013205",
                              name: "Chocolate & Strawberry Pastry [1 Piece]",
                              category: "Strawberry Specials",
                              description:
                                "Serves 1 | Layers of creamy chocolate mousse Â & moist chocolate sponge,Â topped with fresh strawberries.",
                              imageId: "f9a1cf3d0b3a98d8b2a716ccd6566530",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "80232295",
                              name: "Strawberry Tart [1 Piece]",
                              category: "Strawberry Specials",
                              description:
                                "Serves 1 | Buttery tart shell, filled with a strawberry jam, and diplomatÂ cream, topped with fresh cream and fresh strawberries.",
                              imageId: "a73bfde0f8ccc9516243fc1a9ac2f5d0",
                              inStock: 1,
                              isVeg: 1,
                              price: 21500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Gifting",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "132233877",
                              name: "Indulgence Hamper (Eggless)",
                              category: "Gifting",
                              description:
                                "Serves 1 | An assortment of signature products- Assorted Eggless Brownies (6 pcs) - [Choco chip (2), Walnut (1), Cookie (1), Outrageous (1), Millionaire (1)], Choco Chip Cookies (8 pcs), Eggless Dense loaf, Cheese Crackers, Eggless Mava Cake, Orange Cookies [12",
                              imageId: "a79539dd08dab525567b4b8386d4a5d9",
                              inStock: 1,
                              isVeg: 1,
                              price: 300000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "132233876",
                              name: "Luxury Hamper (Eggless)",
                              category: "Gifting",
                              description:
                                "Serves 1 | An assortment of signature products- Assorted Eggless Brownies (6 pcs) - [Choco chip (2), Walnut (1), Cookie (1) , Outrageous (1), Millionaire (1)], Choco Chip cookies (8 pcs), Eggless Dense loaf, Orange Cookies [12 Pcs], Eggless Mava Cake, Eggless B",
                              imageId: "ae2866da7d053115a5671a81bab04613",
                              inStock: 1,
                              isVeg: 1,
                              price: 220000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "132233875",
                              name: "Premium Hamper (Eggless)",
                              category: "Gifting",
                              description:
                                "Serves 1 | An assortment of signature products- Assorted Eggless Brownies (4 pcs) - [Choco chip (1), Walnut (1), Cookie (1), Outrageous (1)], Chocolate Chip Cookies (8 pcs), Eggless Dense loaf, Butter Cookies (8 pcs), Ragi Crackers, Butter Palmiers.",
                              imageId: "6f121c775297f6266d1bf371e2d56b97",
                              inStock: 1,
                              isVeg: 1,
                              price: 160000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100163790",
                              name: "Indulgence Hamper",
                              category: "Gifting",
                              description:
                                "An assortment of our signature products - Assorted brownies - [choco chip (2), walnut (1), overload (1), cookie (1) & millionaire (1)],Choco Chip Cookies (8 pcs), Dense loaf, Butter cookies, Mava cake, Almond biscotti, Chocolate coated biscuits, Bana",
                              imageId: "a79539dd08dab525567b4b8386d4a5d9",
                              inStock: 1,
                              price: 300000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "76939065",
                              name: "Luxury Hamper",
                              category: "Gifting",
                              description:
                                "An assortment of our signature products - Assorted eggless brownies - [choco chip (2), walnut (1), outrageous (1), cookie (1)& millionaire (1)], Choco Chip Cookies (8 pcs), Dense loaf, Butter cookies, Mava cake, Black pepper sourdough crackers & Almo",
                              imageId: "b12df3244a5a2817ad644bb7da6a7dd7",
                              inStock: 1,
                              price: 210000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "76939063",
                              name: "Premium Hamper",
                              category: "Gifting",
                              description:
                                "An assortment of our signature products - Assorted eggless brownies - [choco chip (1), walnut (1), outrageous (1), cookie (1)], Double Choco Chip Cookies (8 pcs), Dense loaf, Butter cookies, Ragi crackers & Butter palmiers",
                              imageId: "6f121c775297f6266d1bf371e2d56b97",
                              inStock: 1,
                              price: 150000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75595748",
                              name: "Choice of Eggless Brownie + Choice of Coffee",
                              category: "Combos",
                              description:
                                "Serves 1 | Any eggless brownie and coffee of choice.",
                              imageId: "79dd9ca90abc87f2c47de42017a57ac2",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36153225",
                                    name: "Eggless Brownie",
                                    variations: [
                                      {
                                        name: "Eggless Choco Chip Brownie [1 Piece]",
                                        price: 105,
                                        default: 1,
                                        id: "112379198",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105257",
                                          variationId: "112233746",
                                        },
                                      },
                                      {
                                        name: "Eggless Walnut Brownie [1 Piece]",
                                        price: 105,
                                        id: "112379199",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105257",
                                          variationId: "112233746",
                                        },
                                      },
                                      {
                                        name: "Eggless Cookie Brownie [1 Piece]",
                                        price: 105,
                                        id: "112379200",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105257",
                                          variationId: "112233746",
                                        },
                                      },
                                      {
                                        name: "Eggless Millionaire Brownie [1 Piece]",
                                        price: 110,
                                        id: "112379201",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105257",
                                          variationId: "112233746",
                                        },
                                      },
                                      {
                                        name: "Eggless Outrageous Chocolate Brownie [1 Piece]",
                                        price: 110,
                                        id: "112379202",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105257",
                                          variationId: "112233746",
                                        },
                                      },
                                      {
                                        name: "Eggless Crumble Brownie [1 Piece]",
                                        price: 105,
                                        id: "112788947",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105257",
                                          variationId: "112233746",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "36105257",
                                    name: "Coffee selection",
                                    variations: [
                                      {
                                        name: "Cappuccino",
                                        price: 130,
                                        default: 1,
                                        id: "112233746",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Latte",
                                        price: 130,
                                        id: "112233747",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379198",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233746",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379198",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233747",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379199",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233746",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379199",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233747",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379200",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233746",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379200",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233747",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379201",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233746",
                                      },
                                    ],
                                    price: 24000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379201",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233747",
                                      },
                                    ],
                                    price: 24000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379202",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233746",
                                      },
                                    ],
                                    price: 24000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112379202",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233747",
                                      },
                                    ],
                                    price: 24000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112788947",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233746",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153225",
                                        variationId: "112788947",
                                      },
                                      {
                                        groupId: "36105257",
                                        variationId: "112233747",
                                      },
                                    ],
                                    price: 23500,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 23500,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "80232300",
                              name: "Choice of Eggless Pastry + Choice of Coffee",
                              category: "Combos",
                              description:
                                "Serves 1 | Any eggless pastry and coffee of choice.",
                              imageId: "af295461606eb47ffb93cda090e361b6",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36153227",
                                    name: "Eggless Pastry",
                                    variations: [
                                      {
                                        name: "Hazelnut Praline Mousse Pastry [1 Piece]",
                                        price: 155,
                                        id: "112379204",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105259",
                                          variationId: "112233750",
                                        },
                                      },
                                      {
                                        name: "Eggless Dutch Truffle Pastry [1 Piece]",
                                        price: 115,
                                        default: 1,
                                        id: "112379206",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105259",
                                          variationId: "112233750",
                                        },
                                      },
                                      {
                                        name: "Eggless Red Velvet Pastry [1 Piece]",
                                        price: 135,
                                        id: "112379208",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105259",
                                          variationId: "112233750",
                                        },
                                      },
                                      {
                                        name: "Eggless Fresh Cream Pineapple Pastry [1 Piece]",
                                        price: 135,
                                        id: "112379210",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105259",
                                          variationId: "112233750",
                                        },
                                      },
                                      {
                                        name: "Eggless Opium Pastry [1 Piece]",
                                        price: 140,
                                        id: "112379212",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105259",
                                          variationId: "112233750",
                                        },
                                      },
                                      {
                                        name: "Chocoholic Pastry [1 Piece]",
                                        price: 140,
                                        id: "112379213",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105259",
                                          variationId: "112233750",
                                        },
                                      },
                                      {
                                        name: "Eggless Cream Cheese & Lemon Pastry [1 Piece]",
                                        price: 135,
                                        id: "112788946",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105259",
                                          variationId: "112233750",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "36105259",
                                    name: "Coffee selection",
                                    variations: [
                                      {
                                        name: "Cappuccino",
                                        price: 130,
                                        default: 1,
                                        id: "112233750",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Latte",
                                        price: 130,
                                        id: "112233751",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379204",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233750",
                                      },
                                    ],
                                    price: 28500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379204",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233751",
                                      },
                                    ],
                                    price: 28500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379206",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233750",
                                      },
                                    ],
                                    price: 24500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379206",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233751",
                                      },
                                    ],
                                    price: 24500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379208",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233750",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379208",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233751",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379210",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233750",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379210",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233751",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379212",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233750",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379212",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233751",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379213",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233750",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112379213",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233751",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112788946",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233750",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153227",
                                        variationId: "112788946",
                                      },
                                      {
                                        groupId: "36105259",
                                        variationId: "112233751",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 24500,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "80232301",
                              name: "Choice of Veg Sandwich / Roll + Choice of Coffee",
                              category: "Combos",
                              description:
                                "Serves 1 | Any veg sandwich and coffee of choice.",
                              imageId: "bf5e9ab00a8ca1ed134087a9cb365112",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36105260",
                                    name: "Veg Sandwiches & Rolls",
                                    variations: [
                                      {
                                        name: "Paneer Junglee Roll [190g]",
                                        price: 170,
                                        default: 1,
                                        id: "112233753",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105261",
                                          variationId: "112233754",
                                        },
                                      },
                                      {
                                        name: "Spinach Corn & Cheese Sandwich [250g]",
                                        price: 190,
                                        id: "112233752",
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105261",
                                          variationId: "112233754",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "36105261",
                                    name: "Coffee selection",
                                    variations: [
                                      {
                                        name: "Cappuccino",
                                        price: 130,
                                        default: 1,
                                        id: "112233754",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Latte",
                                        price: 130,
                                        id: "112233755",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36105260",
                                        variationId: "112233752",
                                      },
                                      {
                                        groupId: "36105261",
                                        variationId: "112233754",
                                      },
                                    ],
                                    price: 32000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36105260",
                                        variationId: "112233752",
                                      },
                                      {
                                        groupId: "36105261",
                                        variationId: "112233755",
                                      },
                                    ],
                                    price: 32000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36105260",
                                        variationId: "112233753",
                                      },
                                      {
                                        groupId: "36105261",
                                        variationId: "112233754",
                                      },
                                    ],
                                    price: 30000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36105260",
                                        variationId: "112233753",
                                      },
                                      {
                                        groupId: "36105261",
                                        variationId: "112233755",
                                      },
                                    ],
                                    price: 30000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 30000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75595669",
                              name: "Choice of Brownie + Choice of Coffee",
                              category: "Combos",
                              description:
                                "Serves 1 | Any brownie and coffee of choice.",
                              imageId: "79dd9ca90abc87f2c47de42017a57ac2",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36105262",
                                    name: "Coffee selection",
                                    variations: [
                                      {
                                        name: "Cappuccino",
                                        price: 130,
                                        default: 1,
                                        id: "112233756",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Latte",
                                        price: 130,
                                        id: "112233757",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36105262",
                                        variationId: "112233756",
                                      },
                                    ],
                                    price: 13000,
                                    addonCombinations: [
                                      {
                                        groupId: "129424574",
                                        addonId: "110074678",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074688",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074687",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074679",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074684",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110764909",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36105262",
                                        variationId: "112233757",
                                      },
                                    ],
                                    price: 13000,
                                    addonCombinations: [
                                      {
                                        groupId: "129424574",
                                        addonId: "110074678",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074688",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074687",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074679",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110074684",
                                      },
                                      {
                                        groupId: "129424574",
                                        addonId: "110764909",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "129424574",
                                  groupName: "Brownies",
                                  choices: [
                                    {
                                      id: "110074678",
                                      name: "Walnut Brownie [1 Piece]",
                                      price: 10500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "110074688",
                                      name: "Choco Chip Brownie [1 Piece]",
                                      price: 10500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "110074679",
                                      name: "Overload Brownie [1 Piece]",
                                      price: 11000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "110074684",
                                      name: "Millionaire Brownie [1 Piece]",
                                      price: 11000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "110764909",
                                      name: "Crumble Brownie [1 Piece]",
                                      price: 10500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "110074687",
                                      name: "Cookie Brownie [1 Piece]",
                                      price: 10500,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 13000,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "24 ratings",
                                  ratingCountV2: "24",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "75595715",
                              name: "Choice of Pastry + Choice of Coffee",
                              category: "Combos",
                              description:
                                "Serves 1 | Any pastry and coffee of choice.",
                              imageId: "uxmx3jpz0zjr1jm40gqm",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36153229",
                                    name: "Pastry",
                                    variations: [
                                      {
                                        name: "Red Velvet Pastry [1 Piece]",
                                        price: 135,
                                        id: "112379220",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105258",
                                          variationId: "112233748",
                                        },
                                      },
                                      {
                                        name: "Fresh Cream Pineapple Pastry [1 Piece]",
                                        price: 135,
                                        id: "112379221",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105258",
                                          variationId: "112233748",
                                        },
                                      },
                                      {
                                        name: "Opium Pastry [1 Piece]",
                                        price: 140,
                                        id: "112379222",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105258",
                                          variationId: "112233748",
                                        },
                                      },
                                      {
                                        name: "Devils Mousse Pastry [1 Piece]",
                                        price: 140,
                                        id: "112379223",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105258",
                                          variationId: "112233748",
                                        },
                                      },
                                      {
                                        name: "Dutch Truffle Pastry [1 Piece]",
                                        price: 115,
                                        default: 1,
                                        id: "112379219",
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36105258",
                                          variationId: "112233748",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "36105258",
                                    name: "Coffee selection",
                                    variations: [
                                      {
                                        name: "Cappuccino",
                                        price: 130,
                                        default: 1,
                                        id: "112233748",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Latte",
                                        price: 130,
                                        id: "112233749",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379219",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233748",
                                      },
                                    ],
                                    price: 24500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379219",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233749",
                                      },
                                    ],
                                    price: 24500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379220",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233748",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379220",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233749",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379221",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233748",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379221",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233749",
                                      },
                                    ],
                                    price: 26500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379222",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233748",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379222",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233749",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379223",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233748",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36153229",
                                        variationId: "112379223",
                                      },
                                      {
                                        groupId: "36105258",
                                        variationId: "112233749",
                                      },
                                    ],
                                    price: 27000,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 24500,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Brownies",
                      categories: [
                        {
                          title: "EGG",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131709526",
                                  name: "Crumble Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Serves 1 | Choco chip dark chocolate brownie topped with a rich bittersweet chocolate crumble.",
                                  imageId: "b8279caa26189f27b48b59ae317e8f1d",
                                  inStock: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753052",
                                  name: "Walnut Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Chocolate brownie topped with toasted walnuts.",
                                  imageId: "d53b1f37316df558b222efcd039e9f73",
                                  inStock: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "123 ratings",
                                      ratingCountV2: "123",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752814",
                                  name: "Choco Chip Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Chocolate brownie with chocolate chips.",
                                  imageId: "b6584b4759bae681703b1969f0c384a8",
                                  inStock: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "76 ratings",
                                      ratingCountV2: "76",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752875",
                                  name: "Cookie Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Chocolate chip brownie base, topped with a layer of chocolate chip cookie dough. Two much fun!",
                                  imageId: "84035a935c8c280c80b268c8147c06ef",
                                  inStock: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "94 ratings",
                                      ratingCountV2: "94",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753033",
                                  name: "Overload Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Chocolate brownie loaded with generous amounts of real dark chocolate.",
                                  imageId: "9b4338e04c9f96314fbc56960fd389cb",
                                  inStock: 1,
                                  price: 11000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "224 ratings",
                                      ratingCountV2: "224",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753022",
                                  name: "Millionaire Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Soft buttery caramel sandwiched between our chocolate chip brownie and layer of dark chocolate truffle.",
                                  imageId: "8f43488044792d94a36e0981b54c05c9",
                                  inStock: 1,
                                  price: 11000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "115 ratings",
                                      ratingCountV2: "115",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752728",
                                  name: "Assorted Brownies Box [12 Pcs]",
                                  category: "Brownies",
                                  description:
                                    "An assortment of signature Theobroma brownies - Walnut brownies (2), Choco Chip brownies (4), Millionaire brownies (2), Cookie brownies (2), Overload Brownies (2)",
                                  imageId: "d70a23f7207f48474963b0c675911976",
                                  inStock: 1,
                                  price: 128000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752744",
                                  name: "Assorted Brownies Box [6 Pcs]",
                                  category: "Brownies",
                                  description:
                                    "An assortment of signature Theobroma brownies - Walnut brownie (1), Choco Chip brownies (2), Millionaire brownie (1), Cookie brownie (1), Overload Brownie (1)",
                                  imageId: "1e50173648f04463c47af8477f0a6324",
                                  inStock: 1,
                                  price: 64000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "103 ratings",
                                      ratingCountV2: "103",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "EGGLESS",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131709525",
                                  name: "Eggless Crumble Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Serves 1 | Choco chip dark chocolate brownie topped with a rich bittersweet chocolate crumble.",
                                  imageId: "b8279caa26189f27b48b59ae317e8f1d",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752918",
                                  name: "Eggless Choco Chip Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Eggless Chocolate brownie with chocolate chips.",
                                  imageId: "b6584b4759bae681703b1969f0c384a8",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753001",
                                  name: "Eggless Walnut Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Eggless chocolate brownie topped with toasted walnuts.",
                                  imageId: "d53b1f37316df558b222efcd039e9f73",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "127 ratings",
                                      ratingCountV2: "127",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752948",
                                  name: "Eggless Cookie Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Eggless chocolate chip brownie base, topped with a layer of chocolate chip cookie dough. Two much fun!",
                                  imageId: "84035a935c8c280c80b268c8147c06ef",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "62 ratings",
                                      ratingCountV2: "62",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752987",
                                  name: "Eggless Millionaire Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Soft buttery caramel sandwiched between our chocolate chip brownie and layer of dark chocolate truffle.",
                                  imageId: "8f43488044792d94a36e0981b54c05c9",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 11000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "41 ratings",
                                      ratingCountV2: "41",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752993",
                                  name: "Eggless Outrageous Chocolate Brownie [1 Piece]",
                                  category: "Brownies",
                                  description:
                                    "Outrageous eggless brownie is loaded with chocolate and made with flax seeds and ground almonds.",
                                  imageId: "36227654414a4d33e4ba88674551b811",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 11000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "104 ratings",
                                      ratingCountV2: "104",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752745",
                                  name: "Assorted Eggless Brownies Box [12 Pcs]",
                                  category: "Brownies",
                                  description:
                                    "An assortment of signature Theobroma eggless brownies - Walnut brownies (2), Choco Chip brownies (4), Millionaire brownies (2), Cookie brownies (2), Outrageous Brownies (2)",
                                  imageId: "d70a23f7207f48474963b0c675911976",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 128000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "25 ratings",
                                      ratingCountV2: "25",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752749",
                                  name: "Assorted Eggless Brownies Box [6 Pcs]",
                                  category: "Brownies",
                                  description:
                                    "An assortment of signature Theobroma eggless brownies - Walnut brownie (1), Choco Chip brownies (2), Millionaire brownie (1), Cookie brownie (1), Outrageous Brownie (1)",
                                  imageId: "1e50173648f04463c47af8477f0a6324",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 64000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "172 ratings",
                                      ratingCountV2: "172",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Cakes",
                      categories: [
                        {
                          title: "EGGLESS",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131709527",
                                  name: "Eggless Cream Cheese & Lemon Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Serves 1 | Tangy lime & cream cheese mousse, layered between soft vanilla sponge cake, coated with a lemon and white chocolate glaze.",
                                  imageId: "245e492155e6b4f324df093f5006bf14",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 65000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752957",
                                  name: "Eggless Dutch Truffle Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Dark chocolate ganache with chocolate sponge.",
                                  imageId: "0c71af5802733076da2d49147b595667",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 57500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "232 ratings",
                                      ratingCountV2: "232",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "69018419",
                                  name: "Eggless Fresh Cream Pineapple Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Fresh cream cake with home made pineapple compote.",
                                  imageId: "6f46ef359dc4981ae6a0e757f1f6e434",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 65000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "291 ratings",
                                      ratingCountV2: "291",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "69018432",
                                  name: "Eggless Red Velvet Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Red velvet sponge layered with cream cheese frosting enhanced with lime juice.",
                                  imageId: "cfab1cfd6fefa5db5bbdd47ff10db686",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 67500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "291 ratings",
                                      ratingCountV2: "291",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "69018437",
                                  name: "Eggless Opium Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "A light chocolate cake topped with dark chocolate whipped cream.",
                                  imageId: "c6c4819fcc1a4a15dc2984803f7228f7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 67500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "129 ratings",
                                      ratingCountV2: "129",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "69018426",
                                  name: "Chocoholic Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Three layers of chocolate mousse: white, milk and dark chocolate mousse layered in this crowd-favourite cake.",
                                  imageId: "e24e30aee6c0bacd2b68d10b396a55e7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 70000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "243 ratings",
                                      ratingCountV2: "243",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "69018430",
                                  name: "Hazelnut Praline Mousse Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Homemade Hazelnut praline, chocolate mousse sandwiched between chocolate sponge cake and covered with a hazelnut chocolate glaze and toasted hazelnuts.",
                                  imageId: "9fe46a2de9203dd6bf93f1167c42142b",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 77500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "169 ratings",
                                      ratingCountV2: "169",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752961",
                                  name: "Eggless Dutch Truffle Cake [1kg]",
                                  category: "Cakes",
                                  description:
                                    "Dark chocolate ganache with chocolate sponge.",
                                  imageId: "8782b12108d1d08f13509059265ba9b1",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 115000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "69 ratings",
                                      ratingCountV2: "69",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "70046569",
                                  name: "Eggless Fresh Cream Pineapple Cake [1kg]",
                                  category: "Cakes",
                                  description:
                                    "Fresh cream cake with home made pineapple compote.",
                                  imageId: "6f46ef359dc4981ae6a0e757f1f6e434",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 130000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "32 ratings",
                                      ratingCountV2: "32",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "EGG",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752894",
                                  name: "Dutch Truffle Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Dark chocolate ganache with chocolate sponge.",
                                  imageId: "49f9b4fb6dcbd0be4e2a2a81240dc8fe",
                                  inStock: 1,
                                  price: 57500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "90 ratings",
                                      ratingCountV2: "90",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "69018431",
                                  name: "Fresh Cream Pineapple Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Fresh cream cake with home made pineapple compote.",
                                  imageId: "6f46ef359dc4981ae6a0e757f1f6e434",
                                  inStock: 1,
                                  price: 65000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "230 ratings",
                                      ratingCountV2: "230",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "88406394",
                                  name: "Red Velvet Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "Red velvet sponge layered with cream cheese frosting enhanced with lime juice.",
                                  imageId: "cfab1cfd6fefa5db5bbdd47ff10db686",
                                  inStock: 1,
                                  price: 67500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "160 ratings",
                                      ratingCountV2: "160",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "88406400",
                                  name: "Opium Cake [1/2kg]",
                                  category: "Cakes",
                                  description:
                                    "A light chocolate cake topped with dark chocolate whipped cream.",
                                  imageId: "88b5656ff0190728dcb2eb606bffc6f0",
                                  inStock: 1,
                                  price: 67500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "208 ratings",
                                      ratingCountV2: "208",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Pastries",
                      categories: [
                        {
                          title: "EGGLESS",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "131709528",
                                  name: "Eggless Cream Cheese & Lemon Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Serves 1 | Tangy lime & cream cheese mousse, layered between soft vanilla sponge cake, coated with a lemon and white chocolate glaze.",
                                  imageId: "ab0dcc1ed5bd10a8229e4e5eb4f1711a",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752963",
                                  name: "Eggless Dutch Truffle Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Dark chocolate ganache with chocolate sponge.",
                                  imageId: "f958476b81fe991a6d665a6f5cb332c9",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "218 ratings",
                                      ratingCountV2: "218",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752977",
                                  name: "Eggless Fresh Cream Pineapple Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Fresh cream cake with home made pineapple compote.",
                                  imageId: "iorqeeddj0iiwlzl9wxq",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "208 ratings",
                                      ratingCountV2: "208",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752998",
                                  name: "Eggless Red Velvet Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Red velvet sponge layered with cream cheese frosting enhanced with lime juice.",
                                  imageId: "m6zcb9uitpu4b3rtcl1w",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "164 ratings",
                                      ratingCountV2: "164",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752991",
                                  name: "Eggless Opium Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "A light chocolate cake topped with dark chocolate whipped cream.",
                                  imageId: "cd750ed227e65e19eea310cacc4f9b8a",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "110 ratings",
                                      ratingCountV2: "110",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752824",
                                  name: "Chocoholic Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Three layers of chocolate mousse: white, milk and dark chocolate mousse.",
                                  imageId: "8b30e94570a48e6d0506b0c960ab6da4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "267 ratings",
                                      ratingCountV2: "267",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753014",
                                  name: "Hazelnut Praline Mousse Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Homemade Hazelnut praline, chocolate mousse sandwiched between chocolate sponge cake and covered with a hazelnut chocolate glaze and toasted hazelnuts.",
                                  imageId: "v0tcnbnxbqmjv75xue8s",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "192 ratings",
                                      ratingCountV2: "192",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752718",
                                  name: "Assorted Box of Eggless Pastries [4 Pcs]",
                                  category: "Pastries",
                                  description:
                                    "An assortment of eggless pastries - Eggless Dutch Truffle Pastry (1), Eggless Fresh Cream Pineapple Pastry (1), Eggless Red Velvet Pastry (1) & Eggless Opium Pastry (1)",
                                  imageId: "0659db808ba5ec15dc765d5172099228",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 53000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "51 ratings",
                                      ratingCountV2: "51",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "EGG",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753006",
                                  name: "Fresh Cream Pineapple Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Fresh cream cake with home made pineapple compote.",
                                  imageId: "2e676dc88778330c25507709eecd0c49",
                                  inStock: 1,
                                  price: 13500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "236 ratings",
                                      ratingCountV2: "236",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753047",
                                  name: "Red Velvet Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Red velvet sponge layered with cream cheese frosting enhanced with lime juice.",
                                  imageId: "m6zcb9uitpu4b3rtcl1w",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "121 ratings",
                                      ratingCountV2: "121",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753030",
                                  name: "Opium Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "A light chocolate cake topped with dark chocolate whipped cream.",
                                  imageId: "55b427192b04dded3e69f492f127f572",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "109 ratings",
                                      ratingCountV2: "109",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752884",
                                  name: "Devils Mousse Pastry [1 Piece]",
                                  category: "Pastries",
                                  description:
                                    "Suitable for people who do not consume gluten. It’s a flourless sponge based chocolate pastry. Similar to a chocolate mousse that is baked in an oven.",
                                  imageId: "3a6701eedf6fdd0aac7257e58a3e6861",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "113 ratings",
                                      ratingCountV2: "113",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desserts & Cupcakes",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752849",
                              name: "Chocolate Tart [1 Piece]",
                              category: "Desserts & Cupcakes",
                              description: "Thick chocolate ganache in a tart.",
                              imageId: "9f0cf1b1e47f81a064f0153fb4fdd947",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "92 ratings",
                                  ratingCountV2: "92",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753019",
                              name: "Lemon Tart [1 Piece]",
                              category: "Desserts & Cupcakes",
                              description:
                                "Golden brown shortbread crust filled with rich lemon filling.",
                              imageId: "362107bf1be389ff119b7d9b0afbe995",
                              inStock: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "92 ratings",
                                  ratingCountV2: "92",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "80232347",
                              name: "Chocolate Mousse Cup [100g]",
                              category: "Desserts & Cupcakes",
                              description: "Light and cream chocolate mousse.",
                              imageId: "56b21ed43442e7cfd70622dc9841a7a3",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "129 ratings",
                                  ratingCountV2: "129",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752927",
                              name: "Chocolate Cupcake [1 Piece]",
                              category: "Desserts & Cupcakes",
                              description:
                                "Chocolate cupcake with chocolate buttercream frosting.",
                              imageId: "xoynoxhkclaqoeveib5l",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "92 ratings",
                                  ratingCountV2: "92",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753000",
                              name: "Vanilla & Blueberry Cupcake [1 Piece]",
                              category: "Desserts & Cupcakes",
                              description:
                                "Moist & fluffy vanilla cupcake filled with blueberry jam & topped with blueberry butter cream frosting.",
                              imageId: "qphryhmvdfs5rszxtivc",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "42 ratings",
                                  ratingCountV2: "42",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752930",
                              name: "Chocolate & Hazelnut Cupcake [1 Piece]",
                              category: "Desserts & Cupcakes",
                              description:
                                "Dense chocolate cupcake filled with chocolate hazelnut spread & topped with hazelnut buttercream frosting.",
                              imageId: "z2m1x2buxgwzcoy3ut0i",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752713",
                              name: "Assorted Cupcakes Box [4 Pcs]",
                              category: "Desserts & Cupcakes",
                              description:
                                "An assortment of signature Theobroma cupcakes - Eggless chocolate cupcake (1), Eggless Red Velvet cupcake (1), Eggless Chocolate & Hazelnut cupcake (1), Eggless Vanilla & Blueberry cupcake (1)",
                              imageId: "rrkpzlvtdkok3bzseltj",
                              inStock: 1,
                              isVeg: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Breads",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88406475",
                              name: "French Baguette [140g]",
                              category: "Breads",
                              description:
                                "A french bread loaf with a crisp outer crust, chewy texture and a soft crumb.",
                              imageId: "117e9f0626993b1823d0cfb8cada5eb5",
                              inStock: 1,
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68922378",
                              name: "Wheat Bread Loaf [400g]",
                              category: "Breads",
                              description:
                                "Soft & spongy bread made with whole wheat and wheat flour.",
                              imageId: "71790e5b9cccc8b876c9fa7eb4dc2f3c",
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "283 ratings",
                                  ratingCountV2: "283",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68922377",
                              name: "Multigrain Loaf [400g]",
                              category: "Breads",
                              description:
                                "Soft & spongy bread made with homemade multi-grain flour & covered with a multi seed mix.",
                              imageId: "6efd945769b25a8ef4a9cb2c0dfe5b53",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "194 ratings",
                                  ratingCountV2: "194",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Tea Cakes",
                      categories: [
                        {
                          title: "EGG",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752880",
                                  name: "Dense Loaf [350g]",
                                  category: "Tea Cakes",
                                  description:
                                    "A rich chocolate cake made with melted chocolate.",
                                  imageId: "270802eeaa462f34b5bdfc350ea9764c",
                                  inStock: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "57 ratings",
                                      ratingCountV2: "57",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125996404",
                                  name: "Mava Cake [300g]",
                                  category: "Tea Cakes",
                                  description:
                                    "A moist and buttery cake made with mava (khoya).",
                                  imageId: "5669ef5de4ca8d58174d138a4fea9ec4",
                                  inStock: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "38 ratings",
                                      ratingCountV2: "38",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125996402",
                                  name: "Banana Cake [200g]",
                                  category: "Tea Cakes",
                                  description:
                                    "Soft, moist cakey bread made with mashed ripe bananas.",
                                  imageId: "e6c6fea60992de02d56aab757d277aec",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "43 ratings",
                                      ratingCountV2: "43",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125996406",
                                  name: "Pound Cake [210g]",
                                  category: "Tea Cakes",
                                  description:
                                    "Rich buttery vanilla cake made with a traditional recipe.",
                                  imageId: "f9607c0e05bdff94f448605097a75dd0",
                                  inStock: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "24 ratings",
                                      ratingCountV2: "24",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "EGGLESS",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752951",
                                  name: "Eggless Dense Loaf [260g]",
                                  category: "Tea Cakes",
                                  description:
                                    "A rich chocolate cake made with melted chocolate.",
                                  imageId: "c4e595691be43e194ec093a10a1e46c2",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "16 ratings",
                                      ratingCountV2: "16",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "88406477",
                                  name: "Eggless Mava Cake [225g]",
                                  category: "Tea Cakes",
                                  description:
                                    "A moist and buttery cake made with mava (khoya).",
                                  imageId: "e34878cb7dd5cebe29597b73679c2db4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "34 ratings",
                                      ratingCountV2: "34",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752913",
                                  name: "Eggless Banana Cake [200g]",
                                  category: "Tea Cakes",
                                  description:
                                    "Soft and moist cakey bread made with mashed ripe bananas.",
                                  imageId: "6cb9da8b16196ff59a1c3abd88954111",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Biscuits, Cookies & Crackers",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121693465",
                              name: "Sesame Tuilles [100g]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Thin & crispy tuilles with a butter & sesame flavour.",
                              imageId: "da63ac12a9576871a59fa536d45ca316",
                              inStock: 1,
                              isVeg: 1,
                              price: 11500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "122349121",
                              name: "Hazelnut Cookies [8 Pcs]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Crunchy cookies with hazelnut bits and hazelnut praline, coated in dark chocolate. Best enjoyed with milk or on their own.",
                              imageId: "88ea0b5f81c1d69ffe8301703cc3f23c",
                              inStock: 1,
                              isVeg: 1,
                              price: 32500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752758",
                              name: "Butter Cookies [8 Pcs]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Our Butter Cookies are crisp eggless vanilla cookies made with almond flour. They have a mild caramelised flavour and are the perfect tea-time accompaniment.",
                              imageId: "gyg9sjx5iufuihmxuwmn",
                              inStock: 1,
                              isVeg: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "35 ratings",
                                  ratingCountV2: "35",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752870",
                              name: "Coconut Macaroons [8 Pcs]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Crisp on the outside, soft on the inside and filled with lots of desiccated coconut, these cookies are the ideal teatime accompaniment.",
                              imageId: "fee1ce8847f6a725eb104800bfd3c7bd",
                              inStock: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752837",
                              name: "Chocolate Coated Biscuits [10 Pcs]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Our Chocolate Biscuits are loved by kids and adults alike, coated in milk or dark chocolate.",
                              imageId: "tkfvqzppeltltdrwgami",
                              inStock: 1,
                              isVeg: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "53 ratings",
                                  ratingCountV2: "53",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753042",
                              name: "Butter Palmiers [50g]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Also known as Elephant ears or Palm hearts. Puff pastry made with butter rolled in caster sugar and caramelized.",
                              imageId: "34afa89627b93b593cc846e2fdf120ef",
                              inStock: 1,
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "75 ratings",
                                  ratingCountV2: "75",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752703",
                              name: "Almond Biscotti [150g]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Double baked Italian biscuit loaded with almonds and flavoured with fennel seeds and a hint of orange.",
                              imageId: "c3d1408f31978ba12affe7d44366f93b",
                              inStock: 1,
                              price: 20500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "46 ratings",
                                  ratingCountV2: "46",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752922",
                              name: "Chocolate Chip Cookies [8 Pcs]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Vanilla cookie dough with dark chocolate chunks baked to give you a soft, melt in mouth cookie.",
                              imageId: "97813e95ee0119f836e818f4e9b805e1",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752954",
                              name: "Double Choco Chip Cookies [8 Pcs]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Chocolate cookie dough with dark chocolate chunks baked to give you a soft, melt in mouth cookie.",
                              imageId: "1b54d4d09bf3a154480e754292d9e7cd",
                              inStock: 1,
                              isVeg: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752780",
                              name: "Cheese Crackers [100g]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Made with cheese, butter & a touch of mustard and chilli",
                              imageId: "8c0865617931b124df04ba7d976ea05d",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752754",
                              name: "Black Pepper Sourdough Crackers [100g]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Baked crispy crackers made with whole wheat flour, sourdough and black pepper.",
                              imageId: "e0448b76d2e595226e7aec5568433df0",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "62 ratings",
                                  ratingCountV2: "62",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753045",
                              name: "Ragi Crackers [100g]",
                              category: "Biscuits, Cookies & Crackers",
                              description:
                                "Baked crispy crackers made with wheat flour, ragi flour & enriched with the goodness of honey, flax seed & sesame seeds.",
                              imageId: "2cceb01b6d50095a42ad1bd19c80bf54",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "34 ratings",
                                  ratingCountV2: "34",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Sandwiches & Savories",
                      categories: [
                        {
                          title: "NONVEG",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752803",
                                  name: "Chicken Mayonaise Roll [190g]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "Soft roll filled with roasted chicken tossed with home made mustard mayonnaise.",
                                  imageId: "1ce7229ca5f192d34af424da763f8ee4",
                                  inStock: 1,
                                  price: 20500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "68922395",
                                  name: "Roasted Chicken & Mustard Sandwich [250g]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "Sliced chicken breast, topped with sliced tomato, cheese, lettuce and mustard sauce sandwiched between marble bread (Combination of multigrain and white bread).",
                                  imageId: "wbw6jdawqtypcbpoutar",
                                  inStock: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "145 ratings",
                                      ratingCountV2: "145",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752808",
                                  name: "Chicken Tikka Sandwich [250g]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "Smoky chicken tikka in soft multigrain bread, with roasted peppers & garlic mayo.",
                                  imageId: "818664bfe471afe4d2d1176fd1a255e9",
                                  inStock: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "15 ratings",
                                      ratingCountV2: "15",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752784",
                                  name: "Chicken and Cheese Butter Puff [1 Piece]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "A flaky butter pastry with a bechamel sauce, herb-roasted chicken & cheese filling.",
                                  imageId: "86e6da791821bccdd437abcc26c9eb45",
                                  inStock: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "77 ratings",
                                      ratingCountV2: "77",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753043",
                                  name: "Quiche Non-Veg [1 Piece]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "It’s a pie made by filling a pastry with a mixture of chicken, cream, cheese and vegetables and is baked.",
                                  imageId: "6576a3ace2eb1822e17595d478b07e3e",
                                  inStock: 1,
                                  price: 14000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "163 ratings",
                                      ratingCountV2: "163",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "VEG",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753036",
                                  name: "Paneer Junglee Roll [190g]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "Grated fresh malai paneer with fresh mint, ketchup, chilly, coriander and processed cheese mashed to form a sweet tangy and cheesy filling stuffed in a soft white roll.",
                                  imageId: "7ccddf7b960d39405c6c95b030ab9df7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753049",
                                  name: "Spicy Paneer Butter Puff [1 Piece]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "A flaky buttery golden crust puff filled with a cheesy paneer & vegetable filling.",
                                  imageId: "c42dd0ec32ad072d7ee175d2c8c9e927",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 9500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "41 ratings",
                                      ratingCountV2: "41",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753044",
                                  name: "Quiche Veg [1 Piece]",
                                  category: "Sandwiches & Savories",
                                  description:
                                    "Its a pie made by filling a pastry with a mixture of cream, cheese and vegetables and is baked.",
                                  imageId: "417889e5ac9923c56b8a77c4e26f6af7",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "46 ratings",
                                      ratingCountV2: "46",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Croissants & Danishes",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "131709529",
                              name: "Custard Danish [1 Piece]",
                              category: "Croissants & Danishes",
                              description:
                                "Serves 1 | A traditional, flaky buttery danish pastry filled with a creamy custard.",
                              imageId: "0bf588c8bd9e28d25a6b04ad36d62610",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125752769",
                              name: "Butter Croissant [1 Piece]",
                              category: "Croissants & Danishes",
                              description:
                                "Flaky pastry laminated with butter.",
                              imageId: "0bd3db71154c3d9adcf4c69ae01639c0",
                              inStock: 1,
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "273 ratings",
                                  ratingCountV2: "273",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "125753035",
                              name: "Pain Au Chocolat [1 Piece]",
                              category: "Croissants & Danishes",
                              description:
                                "Chocolate folded between flaky Danish pastry dough.",
                              imageId: "db2e5b37278daa95d824f5b6e3a97f7a",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "270 ratings",
                                  ratingCountV2: "270",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Beverages",
                      categories: [
                        {
                          title: "HOT BEVERAGES",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "61129390",
                                  name: "Latte",
                                  category: "Beverages",
                                  description:
                                    "Coffee drink made with espresso and steamed milk.",
                                  imageId: "d9991f59922914b6b8067337b1a05558",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "36 ratings",
                                      ratingCountV2: "36",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "80232381",
                                  name: "Cappuccino",
                                  category: "Beverages",
                                  description:
                                    "Espresso-based coffee drink prepared with steamed milk foam.",
                                  imageId: "5619525677c450563670a620baa40b6b",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "98 ratings",
                                      ratingCountV2: "98",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "80232383",
                                  name: "Hot Chocolate",
                                  category: "Beverages",
                                  description:
                                    "Creamy, silky, smooth & Chocolaty -  a piping hot beverage made with real dark chocolate, fresh cream, and milk, Not",
                                  imageId: "317e615d89f96480880dd8d083580d1b",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "160 ratings",
                                      ratingCountV2: "160",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "COLD BEVERAGES",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125753051",
                                  name: "Valencia Orange Juice [200 ml]",
                                  category: "Beverages",
                                  description:
                                    "100% natural cold-pressed Valencia Orange juice, with no added sugar or preservatives.",
                                  imageId: "5e77aa50ce94baa40c85bfa0b1e2b204",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "118022786",
                                  name: "Classic Mango Juice [200 ml]",
                                  category: "Beverages",
                                  description:
                                    "A blend of 100% natural cold-pressed mango and pineapple juice, with no added sugar or preservatives.",
                                  imageId: "4e8279b6b378cc205a1b1dcff30bf738",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "125752854",
                                  name: "Classic Cold Coffee [300ml]",
                                  category: "Beverages",
                                  description:
                                    "Refreshing and ready-to-drink, our classic cold coffee is an all-time favorite.",
                                  imageId: "49d21e4727bf72d444696d05be811a31",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14300,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 11522008000094"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Theobroma",
                      area: "Vikhroli West",
                      completeAddress:
                        "Shop no 25, Kailas Industrial Complex, C wing, Parksite, Behind Godrej, Vikhroli West, Mumbai -400079",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "19997764-6a33-43dd-8fe3-0d1fbe19932d",
  sid: "c2hcda1f-a105-4a14-a228-9187df8baacc",
  deviceId: "67359c6d-2293-2ec2-ca7a-a027696fdc08",
  csrfToken: "xsnb4PVigKPU-wuGsp3r5Oi50Ou352XBSV81aQ2g",
};

export const RESTRAUNT_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "COVCELQ4KICAjYOlkOfrITCnEzgC",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Sakib, what's on your mind?",
              headerStyling: { padding: { left: 16, top: 16, bottom: 4 } },
            },
            layout: {
              rows: 1,
              columns: 10,
              horizontalScrollEnabled: true,
              itemSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 8, top: 8, right: 12, bottom: 4 },
              },
              scrollBar: {},
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: { theme: "THEME_TYPE_DARK" },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "750588",
                  imageId:
                    "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                    text: "Chinese",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chinese",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                  frequencyCapping: {},
                },
                {
                  id: "750592",
                  imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                  frequencyCapping: {},
                },
                {
                  id: "750582",
                  imageId:
                    "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
                    text: "North Indian",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for north indian",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
                  frequencyCapping: {},
                },
                {
                  id: "762797",
                  imageId:
                    "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                    text: "Burgers",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for burger",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                  frequencyCapping: {},
                },
                {
                  id: "750580",
                  imageId:
                    "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                    text: "pizzas",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pizza",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                  frequencyCapping: {},
                },
                {
                  id: "750223",
                  imageId:
                    "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                    text: "Rolls",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for roll",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                  frequencyCapping: {},
                },
                {
                  id: "749874",
                  imageId:
                    "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for cakes",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                  frequencyCapping: {},
                },
                {
                  id: "750584",
                  imageId:
                    "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                    text: "South Indian",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for south indian",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                  frequencyCapping: {},
                },
                {
                  id: "750203",
                  imageId:
                    "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open",
                  },
                  entityId: "80476",
                  frequencyCapping: {},
                },
                {
                  id: "749761",
                  imageId:
                    "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                    text: "Khichdi",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for khicdhi",
                    altTextCta: "open",
                  },
                  entityId: "80456",
                  frequencyCapping: {},
                },
                {
                  id: "750226",
                  imageId:
                    "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                  frequencyCapping: {},
                },
                {
                  id: "750207",
                  imageId:
                    "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                    text: "Pasta",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pasta",
                    altTextCta: "open",
                  },
                  entityId: "80480",
                  frequencyCapping: {},
                },
                {
                  id: "750597",
                  imageId:
                    "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                    text: "Ice Cream",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for icecream",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                  frequencyCapping: {},
                },
                {
                  id: "749879",
                  imageId:
                    "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                    text: "Chole Bhature",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chhole bhatoore",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                  frequencyCapping: {},
                },
                {
                  id: "750237",
                  imageId:
                    "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                    text: "Poori",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for poori",
                    altTextCta: "open",
                  },
                  entityId: "80378",
                  frequencyCapping: {},
                },
                {
                  id: "749774",
                  imageId:
                    "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    text: "Noodles",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for noodles",
                    altTextCta: "open",
                  },
                  entityId: "80464",
                  frequencyCapping: {},
                },
                {
                  id: "750572",
                  imageId:
                    "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                    text: "Pure Veg",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for veg",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                  frequencyCapping: {},
                },
                {
                  id: "750644",
                  imageId:
                    "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                    text: "Idli",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for idly",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                  frequencyCapping: {},
                },
                {
                  id: "750132",
                  imageId:
                    "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                    text: "Dosa",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for dosa",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                  frequencyCapping: {},
                },
                {
                  id: "750249",
                  imageId:
                    "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                    text: "Shawarma",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for shawarma",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                  frequencyCapping: {},
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.2941,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 1.2444,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "whats_on_your_mind",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "750588",
                    imageId:
                      "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                      text: "Chinese",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chinese",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                    frequencyCapping: {},
                  },
                  {
                    id: "750592",
                    imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                    frequencyCapping: {},
                  },
                  {
                    id: "750582",
                    imageId:
                      "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
                      text: "North Indian",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for north indian",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
                    frequencyCapping: {},
                  },
                  {
                    id: "762797",
                    imageId:
                      "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                      text: "Burgers",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for burger",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                    frequencyCapping: {},
                  },
                  {
                    id: "750580",
                    imageId:
                      "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                      text: "pizzas",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pizza",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                    frequencyCapping: {},
                  },
                  {
                    id: "750223",
                    imageId:
                      "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                      text: "Rolls",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for roll",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                    frequencyCapping: {},
                  },
                  {
                    id: "749874",
                    imageId:
                      "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cakes",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                  },
                  {
                    id: "750584",
                    imageId:
                      "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                      text: "South Indian",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for south indian",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                    frequencyCapping: {},
                  },
                  {
                    id: "750203",
                    imageId:
                      "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId: "80476",
                    frequencyCapping: {},
                  },
                  {
                    id: "749761",
                    imageId:
                      "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                      text: "Khichdi",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for khicdhi",
                      altTextCta: "open",
                    },
                    entityId: "80456",
                    frequencyCapping: {},
                  },
                  {
                    id: "750226",
                    imageId:
                      "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                  },
                  {
                    id: "750207",
                    imageId:
                      "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                      text: "Pasta",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pasta",
                      altTextCta: "open",
                    },
                    entityId: "80480",
                    frequencyCapping: {},
                  },
                  {
                    id: "750597",
                    imageId:
                      "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                      text: "Ice Cream",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for icecream",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                    frequencyCapping: {},
                  },
                  {
                    id: "749879",
                    imageId:
                      "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                      text: "Chole Bhature",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chhole bhatoore",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                    frequencyCapping: {},
                  },
                  {
                    id: "750237",
                    imageId:
                      "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                      text: "Poori",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for poori",
                      altTextCta: "open",
                    },
                    entityId: "80378",
                    frequencyCapping: {},
                  },
                  {
                    id: "749774",
                    imageId:
                      "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                      text: "Noodles",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for noodles",
                      altTextCta: "open",
                    },
                    entityId: "80464",
                    frequencyCapping: {},
                  },
                  {
                    id: "750572",
                    imageId:
                      "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                      text: "Pure Veg",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for veg",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                    frequencyCapping: {},
                  },
                  {
                    id: "750644",
                    imageId:
                      "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                      text: "Idli",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for idly",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                    frequencyCapping: {},
                  },
                  {
                    id: "750132",
                    imageId:
                      "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                      text: "Dosa",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for dosa",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                    frequencyCapping: {},
                  },
                  {
                    id: "750249",
                    imageId:
                      "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                      text: "Shawarma",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for shawarma",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                    frequencyCapping: {},
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Top restaurant chains in Mumbai",
              action: {},
              headerStyling: { padding: { left: 16, top: 28, bottom: 18 } },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 16, right: 12, bottom: 12 },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#02060C",
                width: 54,
                height: 4,
                scrollStyling: { padding: { top: 6, bottom: 24 } },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "top_brands_for_you",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "24498",
                      name: "Domino's Pizza",
                      cloudinaryImageId: "gxrgpkr9ibl0x5beihej",
                      locality: "Next to Movie Time Cinema",
                      areaName: "Marol Sakinaka",
                      costForTwo: "₹400 for two",
                      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
                      avgRating: 4.2,
                      parentId: "2456",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 02:55:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/dominos-pizza-next-to-movie-time-cinema-marol-sakinaka-mumbai-24498",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "5170",
                      name: "Theobroma",
                      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
                      locality: "Parksite",
                      areaName: "Vikhroli West",
                      costForTwo: "₹400 for two",
                      cuisines: ["Bakery", "Desserts"],
                      avgRating: 4.6,
                      parentId: "1040",
                      avgRatingString: "4.6",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                            shortDescription: "Perfect Cake Delivery",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId:
                                    "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                  shortDescription: "Perfect Cake Delivery",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/theobroma-parksite-vikhroli-west-mumbai-5170",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "226267",
                      name: "Chai Point",
                      cloudinaryImageId: "xxvsjsmulr4of73a6hgu",
                      locality: "opp. Nirali Hospital",
                      areaName: "Powai",
                      costForTwo: "₹150 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "North Indian",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food",
                      ],
                      avgRating: 4.3,
                      parentId: "1607",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 33,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-15 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chai-point-opp-nirali-hospital-powai-mumbai-226267",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "5933",
                      name: "Burger King",
                      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      locality: "Marol",
                      areaName: "Marol",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 4.2,
                      parentId: "166",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 05:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-king-marol-mumbai-5933",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "23745",
                      name: "McDonald's",
                      cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
                      locality: "Shivai Andheri Saki Naka",
                      areaName: "Saki Naka",
                      costForTwo: "₹400 for two",
                      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                      avgRating: 4.4,
                      parentId: "630",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 04:45:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹199",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/mcdonalds-shivai-andheri-saki-naka-mumbai-23745",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "7012",
                      name: "KFC",
                      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
                      locality: "Powai",
                      areaName: "Powai",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food",
                      ],
                      avgRating: 4.3,
                      parentId: "547",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 18,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹179",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/kfc-powai-mumbai-7012",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "31860",
                      name: "Subway",
                      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
                      locality: "Hiranandani Business Park, Powai",
                      areaName: "Powai",
                      costForTwo: "₹350 for two",
                      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                      avgRating: 4.4,
                      parentId: "2",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 04:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/subway-hiranandani-business-park-powai-mumbai-31860",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "466651",
                      name: "EatFit",
                      cloudinaryImageId: "543307dc74eeb9dc5e0a58c81fe54996",
                      locality: "Vikhroli West",
                      areaName: "Powai",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Chinese",
                        "Healthy Food",
                        "Tandoor",
                        "Pizzas",
                        "North Indian",
                        "Thalis",
                        "Biryani",
                      ],
                      avgRating: 4.3,
                      parentId: "76139",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/eatfit-vikhroli-west-powai-mumbai-466651",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "289303",
                      name: "BOX8 - Desi Meals",
                      cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
                      locality: "Chandivali",
                      areaName: "Powai",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "North Indian",
                        "Biryani",
                        "Thalis",
                        "Home Food",
                      ],
                      avgRating: 4.3,
                      parentId: "10655",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 19,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "14-24 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 02:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "EVERY ITEM",
                        subHeader: "@ ₹179",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/box8-desi-meals-chandivali-powai-mumbai-289303",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "32580",
                      name: "Starbucks Coffee",
                      cloudinaryImageId: "182191ab163770437b62861a6f987709",
                      locality: "Central Avenue Road",
                      areaName: "Powai",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream",
                      ],
                      avgRating: 4.4,
                      parentId: "195515",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/starbucks-coffee-central-avenue-road-powai-mumbai-32580",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "156157",
                      name: "The Good Bowl",
                      cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
                      locality: "Model Kitchen Powai",
                      areaName: "Vikhroli West",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Biryani",
                        "North Indian",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.3,
                      parentId: "7918",
                      avgRatingString: "4.3",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 2.7,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "2.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/the-good-bowl-model-kitchen-powai-vikhroli-west-mumbai-156157",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "79300",
                      name: "Chinese Wok",
                      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
                      locality: "Narayan Plaza",
                      areaName: "Powai",
                      costForTwo: "₹250 for two",
                      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
                      avgRating: 4.1,
                      parentId: "61955",
                      avgRatingString: "4.1",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chinese-wok-narayan-plaza-powai-mumbai-79300",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "14013",
                      name: "Chaayos Chai+Snacks=Relax",
                      cloudinaryImageId: "cace805a6ba74137571d0f7ac92302b1",
                      locality: "Powai Business Centre",
                      areaName: "Powai",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets",
                      ],
                      avgRating: 4.5,
                      parentId: "281782",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.9,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-15 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-business-centre-powai-mumbai-14013",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "6892",
                      name: "Baskin Robbins - Ice Cream Desserts",
                      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
                      locality: "NAHAR AMRIT SHAKTI",
                      areaName: "CHANDIVALI",
                      costForTwo: "₹250 for two",
                      cuisines: ["Desserts", "Ice Cream"],
                      avgRating: 4.7,
                      veg: true,
                      parentId: "5588",
                      avgRatingString: "4.7",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 17,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 01:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                            shortDescription: "Perfect Cake Delivery",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId:
                                    "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                  shortDescription: "Perfect Cake Delivery",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-nahar-amrit-shakti-chandivali-mumbai-6892",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "247334",
                      name: "Wow! Momo",
                      cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
                      locality: "Chandivali",
                      areaName: "Chandivali",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.3,
                      parentId: "1776",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 1.1,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹99",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/wow-momo-chandivali-mumbai-247334",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "19845",
                      name: "Faasos - Wraps, Rolls & Shawarma",
                      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
                      locality: "Behind Chandivali Ice Factory",
                      areaName: "Chandivali",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.3,
                      parentId: "21809",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹129",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-behind-ice-factory-chandivali-mumbai-19845",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "62951",
                      name: "LunchBox - Meals and Thalis",
                      cloudinaryImageId: "msr3pvi4p1wcvlr7ou7i",
                      locality: "Behind Chandivali Ice Factory",
                      areaName: "Chandivali",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Biryani",
                        "North Indian",
                        "Punjabi",
                        "Healthy Food",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.5,
                      parentId: "4925",
                      avgRatingString: "4.5",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 1.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "1.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹159",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-behind-ice-factory-chandivali-mumbai-62951",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "30908",
                      name: "Natural Ice Cream",
                      cloudinaryImageId: "q8xs6nilykpjkminxvzb",
                      locality: "Powai",
                      areaName: "Powai",
                      costForTwo: "₹150 for two",
                      cuisines: ["Ice Cream", "Desserts"],
                      avgRating: 4.8,
                      parentId: "2093",
                      avgRatingString: "4.8",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 16,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/natural-ice-cream-powai-mumbai-30908",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "79952",
                      name: "NIC Ice Creams",
                      cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
                      locality: "IIT market",
                      areaName: "Powai",
                      costForTwo: "₹120 for two",
                      cuisines: ["Ice Cream", "Desserts"],
                      avgRating: 4.6,
                      veg: true,
                      parentId: "6249",
                      avgRatingString: "4.6",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 2.5,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "2.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 02:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹149",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/nic-ice-creams-iit-market-powai-mumbai-79952",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "14344",
                      name: "Cafe Coffee Day",
                      cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
                      locality: "Paradise Buliding",
                      areaName: "Powai lake",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food",
                      ],
                      avgRating: 4.2,
                      parentId: "1",
                      avgRatingString: "4.2",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 18,
                        lastMileTravel: 0.4,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "0.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 02:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹159",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-paradise-buliding-powai-lake-mumbai-14344",
                      type: "WEBLINK",
                    },
                  },
                ],
                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.41111112,
                    reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.7027027,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                  layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                },
                collectionId: "84124",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            title: "Restaurants with online food delivery in Mumbai",
            id: "popular_restaurants_title",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            sortConfigs: [
              {
                key: "relevance",
                title: "Relevance (Default)",
                selected: true,
                defaultSelection: true,
              },
              { key: "deliveryTimeAsc", title: "Delivery Time" },
              { key: "modelBasedRatingDesc", title: "Rating" },
              { key: "costForTwoAsc", title: "Cost: Low to High" },
              { key: "costForTwoDesc", title: "Cost: High to Low" },
            ],
            restaurantCount: 1906,
            facetList: [
              {
                label: "Delivery Time",
                id: "deliveryTime",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Fast Delivery",
                    id: "deliveryTimefacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filter by",
              },
              {
                label: "Cuisines",
                id: "catalog_cuisines",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Afghani",
                    id: "query_afghani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "American",
                    id: "query_american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Andhra",
                    id: "query_andhra",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Arabian",
                    id: "query_arabian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Asian",
                    id: "query_asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Assamese",
                    id: "query_assamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Awadhi",
                    id: "query_awadhi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bakery",
                    id: "query_bakery",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Barbecue",
                    id: "query_barbecue",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bengali",
                    id: "query_bengali",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Beverages",
                    id: "query_beverages",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Biryani",
                    id: "query_biryani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "British",
                    id: "query_british",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burger",
                    id: "query_burger",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burgers",
                    id: "query_burgers",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burmese",
                    id: "query_burmese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cafe",
                    id: "query_cafe",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cakes and Pastries",
                    id: "query_cakes_and_pastries",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chaat",
                    id: "query_chaat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chettinad",
                    id: "query_chettinad",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chinese",
                    id: "query_chinese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Coastal",
                    id: "query_coastal",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Combo",
                    id: "query_combo",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Continental",
                    id: "query_continental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Desserts",
                    id: "query_desserts",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "European",
                    id: "query_european",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Fast Food",
                    id: "query_fast_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "French",
                    id: "query_french",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Goan",
                    id: "query_goan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Greek",
                    id: "query_greek",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Grill",
                    id: "query_grill",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Gujarati",
                    id: "query_gujarati",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Healthy Food",
                    id: "query_healthy_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Home Food",
                    id: "query_home_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Hyderabadi",
                    id: "query_hyderabadi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream",
                    id: "query_ice_cream",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream Cakes",
                    id: "query_ice_cream_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indian",
                    id: "query_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indonesian",
                    id: "query_indonesian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian",
                    id: "query_italian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian-American",
                    id: "query_italian-american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Jain",
                    id: "query_jain",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Japanese",
                    id: "query_japanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Juices",
                    id: "query_juices",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kebabs",
                    id: "query_kebabs",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kerala",
                    id: "query_kerala",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Keto",
                    id: "query_keto",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Konkan",
                    id: "query_konkan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Korean",
                    id: "query_korean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lebanese",
                    id: "query_lebanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lucknowi",
                    id: "query_lucknowi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Maharashtrian",
                    id: "query_maharashtrian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Malwani",
                    id: "query_malwani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mangalorean",
                    id: "query_mangalorean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mediterranean",
                    id: "query_mediterranean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mexican",
                    id: "query_mexican",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Middle Eastern",
                    id: "query_middle_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Momos",
                    id: "query_momos",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mongolian",
                    id: "query_mongolian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mughlai",
                    id: "query_mughlai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Navratri Special",
                    id: "query_navratri_special",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Nepalese",
                    id: "query_nepalese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Eastern",
                    id: "query_north_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Indian",
                    id: "query_north_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriental",
                    id: "query_oriental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriya",
                    id: "query_oriya",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Paan",
                    id: "query_paan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pan-Asian",
                    id: "query_pan-asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Parsi",
                    id: "query_parsi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pastas",
                    id: "query_pastas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pizzas",
                    id: "query_pizzas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Punjabi",
                    id: "query_punjabi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rajasthani",
                    id: "query_rajasthani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rolls",
                    id: "query_rolls",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rolls & Wraps",
                    id: "query_rolls_&_wraps",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Salads",
                    id: "query_salads",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Seafood",
                    id: "query_seafood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sindhi",
                    id: "query_sindhi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Snacks",
                    id: "query_snacks",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "South Indian",
                    id: "query_south_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Special Discount from (The Scoop)",
                    id: "query_special_discount_from_(the_scoop)",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Street Food",
                    id: "query_street_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sushi",
                    id: "query_sushi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sweets",
                    id: "query_sweets",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tandoor",
                    id: "query_tandoor",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tex-Mex",
                    id: "query_tex-mex",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thai",
                    id: "query_thai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thalis",
                    id: "query_thalis",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tibetan",
                    id: "query_tibetan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Turkish",
                    id: "query_turkish",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Use code VADAPAV10 to avail this offer!",
                    id: "query_use_code_vadapav10_to_avail_this_offer!",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Vietnamese",
                    id: "query_vietnamese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Waffle",
                    id: "query_waffle",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                canSearch: true,
                subLabel: "Filter by cuisine",
                openFilter: true,
              },
              {
                label: "Explore",
                id: "explore",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "New on Swiggy",
                    id: "newfacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Swiggy Exclusives",
                    id: "isExclusivefacetquery1",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
              },
              {
                label: "Ratings",
                id: "rating",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Ratings 4.5+",
                    id: "ratingfacetquery3",
                    analytics: {},
                  },
                  {
                    label: "Ratings 4.0+",
                    id: "ratingfacetquery4",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ratings 3.5+",
                    id: "ratingfacetquery5",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filter by",
              },
              {
                label: "Veg/Non-Veg",
                id: "isVeg",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Pure Veg",
                    id: "isVegfacetquery2",
                    analytics: {},
                    openFilter: true,
                  },
                  { label: "Non Veg", id: "isVegfacetquery3", analytics: {} },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Filter by",
              },
              {
                label: "Offers",
                id: "restaurantOfferMultiTd",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Offers",
                    id: "restaurantOfferMultiTdfacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Restaurants with",
              },
              {
                label: "Cost for two",
                id: "costForTwo",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Rs. 300-Rs. 600",
                    id: "costForTwofacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Greater than Rs. 600",
                    id: "costForTwofacetquery4",
                    analytics: {},
                  },
                  {
                    label: "Less than Rs. 300",
                    id: "costForTwofacetquery5",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filter by",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: { columns: 4 },
            id: "restaurant_grid_listing",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "24498",
                      name: "Domino's Pizza",
                      cloudinaryImageId: "gxrgpkr9ibl0x5beihej",
                      locality: "Next to Movie Time Cinema",
                      areaName: "Marol Sakinaka",
                      costForTwo: "₹400 for two",
                      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
                      avgRating: 4.2,
                      parentId: "2456",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 02:55:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/dominos-pizza-next-to-movie-time-cinema-marol-sakinaka-mumbai-24498",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "693079",
                      name: "Theobroma",
                      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
                      locality: "Chandivali",
                      areaName: "Powai",
                      costForTwo: "₹400 for two",
                      cuisines: ["Desserts"],
                      avgRating: 4.5,
                      parentId: "1040",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 15,
                        lastMileTravel: 1.1,
                        serviceability: "SERVICEABLE",
                        slaString: "10-15 mins",
                        lastMileTravelString: "1.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                            shortDescription: "Perfect Cake Delivery",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId:
                                    "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                  shortDescription: "Perfect Cake Delivery",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/theobroma-chandivali-powai-mumbai-693079",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "226267",
                      name: "Chai Point",
                      cloudinaryImageId: "xxvsjsmulr4of73a6hgu",
                      locality: "opp. Nirali Hospital",
                      areaName: "Powai",
                      costForTwo: "₹150 for two",
                      cuisines: [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "North Indian",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food",
                      ],
                      avgRating: 4.3,
                      parentId: "1607",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 33,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "30-35 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-15 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/chai-point-opp-nirali-hospital-powai-mumbai-226267",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "5933",
                      name: "Burger King",
                      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      locality: "Marol",
                      areaName: "Marol",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 4.2,
                      parentId: "166",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 30,
                        lastMileTravel: 3.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 05:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-king-marol-mumbai-5933",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "668678",
                      name: "McDonald's",
                      cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
                      locality: "ATL Corporate Park",
                      areaName: "Saki Vihar Powai",
                      costForTwo: "₹400 for two",
                      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                      avgRating: 4.6,
                      parentId: "630",
                      avgRatingString: "4.6",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:45:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹199",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/mcdonalds-atl-corporate-park-saki-vihar-powai-mumbai-668678",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "7012",
                      name: "KFC",
                      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
                      locality: "Powai",
                      areaName: "Powai",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food",
                      ],
                      avgRating: 4.3,
                      parentId: "547",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 18,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "15-20 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 01:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "ITEMS",
                        subHeader: "AT ₹179",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/kfc-powai-mumbai-7012",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "657091",
                      name: "Subway",
                      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
                      locality: "LAKE PRIMROSE",
                      areaName: "Chandivali Powai",
                      costForTwo: "₹350 for two",
                      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                      avgRating: 4.1,
                      parentId: "2",
                      avgRatingString: "4.1",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 1.1,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "1.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-09 05:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/subway-lake-primrose-chandivali-powai-mumbai-657091",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "466651",
                      name: "EatFit",
                      cloudinaryImageId: "543307dc74eeb9dc5e0a58c81fe54996",
                      locality: "Vikhroli West",
                      areaName: "Powai",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Chinese",
                        "Healthy Food",
                        "Tandoor",
                        "Pizzas",
                        "North Indian",
                        "Thalis",
                        "Biryani",
                      ],
                      avgRating: 4.3,
                      parentId: "76139",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 3,
                        serviceability: "SERVICEABLE",
                        slaString: "25-30 mins",
                        lastMileTravelString: "3.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "brand",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/eatfit-vikhroli-west-powai-mumbai-466651",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "731683",
                      name: "La Pino'z Pizza",
                      cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
                      locality: "Rambaugh",
                      areaName: "Shankaracharya Marg,Powai Mumbai",
                      costForTwo: "₹800 for two",
                      cuisines: [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.1,
                      parentId: "4961",
                      avgRatingString: "4.1",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 0.4,
                        serviceability: "SERVICEABLE",
                        slaString: "20-25 mins",
                        lastMileTravelString: "0.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2024-02-08 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹199",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                          message: "Free Delivery",
                          logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                          },
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-rambaugh-shankaracharya-marg-powai-mumbai-mumbai-731683",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                ],
                theme: "SeoRestaurantListingGridWidget",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            message: "Show More",
            id: "show_more_button",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Places to Eat Across Cities",
            brands: [
              {
                text: "Best Restaurants in Bangalore",
                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pune",
                link: "https://www.swiggy.com/city/pune/best-restaurants",
              },
              {
                text: "Best Restaurants in Mumbai",
                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
              },
              {
                text: "Best Restaurants in Delhi",
                link: "https://www.swiggy.com/city/delhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolkata",
                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
              },
              {
                text: "Best Restaurants in Chennai",
                link: "https://www.swiggy.com/city/chennai/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaipur",
                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagpur",
                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kochi",
                link: "https://www.swiggy.com/city/kochi/best-restaurants",
              },
              {
                text: "Best Restaurants in Surat",
                link: "https://www.swiggy.com/city/surat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehradun",
                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
              },
              {
                text: "Best Restaurants in Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
              },
              {
                text: "Best Restaurants in Patna",
                link: "https://www.swiggy.com/city/patna/best-restaurants",
              },
              {
                text: "Best Restaurants in Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhopal",
                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
              },
              {
                text: "Best Restaurants in Agra",
                link: "https://www.swiggy.com/city/agra/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida",
                link: "https://www.swiggy.com/city/noida/best-restaurants",
              },
              {
                text: "Best Restaurants in Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
              },
              {
                text: "Best Restaurants in Guwahati",
                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
              },
              {
                text: "Best Restaurants in Mysore",
                link: "https://www.swiggy.com/city/mysore/best-restaurants",
              },
              {
                text: "Best Restaurants in Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranchi",
                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizag",
                link: "https://www.swiggy.com/city/vizag/best-restaurants",
              },
              {
                text: "Best Restaurants in Udaipur",
                link: "https://www.swiggy.com/city/udaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vadodara",
                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Cuisines Near Me",
            brands: [
              {
                text: "Chinese Restaurant Near Me",
                link: "https://www.swiggy.com/chinese-restaurants-near-me",
              },
              {
                text: "South Indian Restaurant Near Me",
                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
              },
              {
                text: "Indian Restaurant Near Me",
                link: "https://www.swiggy.com/indian-restaurants-near-me",
              },
              {
                text: "Kerala Restaurant Near Me",
                link: "https://www.swiggy.com/kerala-restaurants-near-me",
              },
              {
                text: "Korean Restaurant Near Me",
                link: "https://www.swiggy.com/korean-restaurants-near-me",
              },
              {
                text: "North Indian Restaurant Near Me",
                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
              },
              {
                text: "Seafood Restaurant Near Me",
                link: "https://www.swiggy.com/seafood-restaurants-near-me",
              },
              {
                text: "Bengali Restaurant Near Me",
                link: "https://www.swiggy.com/bengali-restaurants-near-me",
              },
              {
                text: "Punjabi Restaurant Near Me",
                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
              },
              {
                text: "Italian Restaurant Near Me",
                link: "https://www.swiggy.com/italian-restaurants-near-me",
              },
              {
                text: "Andhra Restaurant Near Me",
                link: "https://www.swiggy.com/andhra-restaurants-near-me",
              },
              {
                text: "Biryani Restaurant Near Me",
                link: "https://www.swiggy.com/biryani-restaurants-near-me",
              },
              {
                text: "Japanese Restaurant Near Me",
                link: "https://www.swiggy.com/japanese-restaurants-near-me",
              },
              {
                text: "Arabian Restaurant Near Me",
                link: "https://www.swiggy.com/arabian-restaurants-near-me",
              },
              {
                text: "Fast Food Restaurant Near Me",
                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
              },
              {
                text: "Jain Restaurant Near Me",
                link: "https://www.swiggy.com/jain-restaurants-near-me",
              },
              {
                text: "Gujarati Restaurant Near Me",
                link: "https://www.swiggy.com/gujarati-restaurants-near-me",
              },
              {
                text: "Thai Restaurant Near Me",
                link: "https://www.swiggy.com/thai-restaurants-near-me",
              },
              {
                text: "Pizzas Restaurant Near Me",
                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
              },
              {
                text: "Asian Restaurant Near Me",
                link: "https://www.swiggy.com/asian-restaurants-near-me",
              },
              {
                text: "Cafe Restaurant Near Me",
                link: "https://www.swiggy.com/cafe-restaurants-near-me",
              },
              {
                text: "Continental Restaurant Near Me",
                link: "https://www.swiggy.com/continental-restaurants-near-me",
              },
              {
                text: "Mexican Restaurant Near Me",
                link: "https://www.swiggy.com/mexican-restaurants-near-me",
              },
              {
                text: "Mughlai Restaurant Near Me",
                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
              },
              {
                text: "Sushi Restaurant Near Me",
                link: "https://www.swiggy.com/sushi-restaurants-near-me",
              },
              {
                text: "Mangalorean Restaurant Near Me",
                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
              },
              {
                text: "Tibetan Restaurant Near Me",
                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
              },
              {
                text: "Barbecue Restaurant Near Me",
                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
              },
              {
                text: "Maharashtrian Restaurant Near Me",
                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
              },
              {
                text: "Nepalese Restaurant Near Me",
                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
              },
              {
                text: "Rajasthani Restaurant Near Me",
                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
              },
              {
                text: "Turkish Restaurant Near Me",
                link: "https://www.swiggy.com/turkish-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Explore Every Restaurants Near Me",
            brands: [
              {
                text: "Explore Restaurants Near Me",
                link: "https://www.swiggy.com/restaurants-near-me",
              },
              {
                text: "Explore Top Rated Restaurants Near Me",
                link: "https://www.swiggy.com/best-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            title: "For better experience,download the Swiggy app now",
            androidAppImage: "portal/m/play_store.png",
            androidAppLink:
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            iosAppImage: "portal/m/app_store.png",
            iosAppLink:
              "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            id: "app_install_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            cities: [
              {
                text: "Bangalore",
                link: "https://www.swiggy.com/city/bangalore",
              },
              { text: "Gurgaon", link: "https://www.swiggy.com/city/gurgaon" },
              {
                text: "Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad",
              },
              { text: "Delhi", link: "https://www.swiggy.com/city/delhi" },
              { text: "Mumbai", link: "https://www.swiggy.com/city/mumbai" },
              { text: "Pune", link: "https://www.swiggy.com/city/pune" },
              { text: "Kolkata", link: "https://www.swiggy.com/city/kolkata" },
              { text: "Chennai", link: "https://www.swiggy.com/city/chennai" },
              {
                text: "Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad",
              },
              {
                text: "Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh",
              },
              { text: "Jaipur", link: "https://www.swiggy.com/city/jaipur" },
              { text: "Kochi", link: "https://www.swiggy.com/city/kochi" },
              {
                text: "Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore",
              },
              { text: "Lucknow", link: "https://www.swiggy.com/city/lucknow" },
              { text: "Nagpur", link: "https://www.swiggy.com/city/nagpur" },
              {
                text: "Vadodara",
                link: "https://www.swiggy.com/city/vadodara",
              },
              { text: "Indore", link: "https://www.swiggy.com/city/indore" },
              {
                text: "Guwahati",
                link: "https://www.swiggy.com/city/guwahati",
              },
              { text: "Vizag", link: "https://www.swiggy.com/city/vizag" },
              { text: "Surat", link: "https://www.swiggy.com/city/surat" },
              {
                text: "Dehradun",
                link: "https://www.swiggy.com/city/dehradun",
              },
              { text: "Noida", link: "https://www.swiggy.com/city/noida" },
              {
                text: "Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana",
              },
              { text: "Trichy", link: "https://www.swiggy.com/city/trichy" },
              {
                text: "Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada",
              },
              { text: "Kanpur", link: "https://www.swiggy.com/city/kanpur" },
              { text: "Mysore", link: "https://www.swiggy.com/city/mysore" },
              { text: "Nashik", link: "https://www.swiggy.com/city/nashik" },
              { text: "Udaipur", link: "https://www.swiggy.com/city/udaipur" },
              {
                text: "Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry",
              },
              { text: "Agra", link: "https://www.swiggy.com/city/agra" },
              {
                text: "Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad",
              },
              {
                text: "Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar",
              },
              { text: "Kota", link: "https://www.swiggy.com/city/kota" },
              { text: "Madurai", link: "https://www.swiggy.com/city/madurai" },
              {
                text: "Allahabad",
                link: "https://www.swiggy.com/city/allahabad",
              },
              { text: "Manipal", link: "https://www.swiggy.com/city/manipal" },
              {
                text: "Amritsar",
                link: "https://www.swiggy.com/city/amritsar",
              },
              {
                text: "Bareilly",
                link: "https://www.swiggy.com/city/bareilly",
              },
              { text: "Meerut", link: "https://www.swiggy.com/city/meerut" },
              { text: "Bhopal", link: "https://www.swiggy.com/city/bhopal" },
              { text: "Ooty", link: "https://www.swiggy.com/city/ooty" },
              {
                text: "Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar",
              },
              { text: "Raipur", link: "https://www.swiggy.com/city/raipur" },
              { text: "Bikaner", link: "https://www.swiggy.com/city/bikaner" },
              { text: "Rajkot", link: "https://www.swiggy.com/city/rajkot" },
              {
                text: "Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode",
              },
              {
                text: "Central Goa",
                link: "https://www.swiggy.com/city/central-goa",
              },
              { text: "Sirsa", link: "https://www.swiggy.com/city/sirsa" },
              { text: "Gwalior", link: "https://www.swiggy.com/city/gwalior" },
              {
                text: "Thrissur",
                link: "https://www.swiggy.com/city/thrissur",
              },
              {
                text: "Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur",
              },
              {
                text: "Tirupati",
                link: "https://www.swiggy.com/city/tirupati",
              },
              { text: "Tirupur", link: "https://www.swiggy.com/city/tirupur" },
              { text: "Vellore", link: "https://www.swiggy.com/city/vellore" },
              {
                text: "Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram",
              },
              {
                text: "Warangal",
                link: "https://www.swiggy.com/city/warangal",
              },
              {
                text: "Varanasi",
                link: "https://www.swiggy.com/city/varanasi",
              },
              {
                text: "Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru",
              },
              { text: "Patna", link: "https://www.swiggy.com/city/patna" },
              { text: "Ranchi", link: "https://www.swiggy.com/city/ranchi" },
              {
                text: "Faridabad",
                link: "https://www.swiggy.com/city/faridabad",
              },
              { text: "Guntur", link: "https://www.swiggy.com/city/guntur" },
              { text: "Ujjain", link: "https://www.swiggy.com/city/ujjain" },
              { text: "Patiala", link: "https://www.swiggy.com/city/patiala" },
              { text: "Karnal", link: "https://www.swiggy.com/city/karnal" },
              {
                text: "Kakinada",
                link: "https://www.swiggy.com/city/kakinada",
              },
              {
                text: "Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry",
              },
              {
                text: "Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur",
              },
              { text: "Bhilai", link: "https://www.swiggy.com/city/bhilai" },
              { text: "Anand", link: "https://www.swiggy.com/city/anand" },
              {
                text: "Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar",
              },
              { text: "Jammu", link: "https://www.swiggy.com/city/jammu" },
              { text: "Muktsar", link: "https://www.swiggy.com/city/muktsar" },
              { text: "Panipat", link: "https://www.swiggy.com/city/panipat" },
              { text: "Dhanbad", link: "https://www.swiggy.com/city/dhanbad" },
              { text: "Hubli", link: "https://www.swiggy.com/city/hubli" },
              { text: "Belgaum", link: "https://www.swiggy.com/city/belgaum" },
              {
                text: "Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur",
              },
              {
                text: "Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur",
              },
              { text: "Solapur", link: "https://www.swiggy.com/city/solapur" },
              {
                text: "Shillong",
                link: "https://www.swiggy.com/city/shillong",
              },
              { text: "Cuttack", link: "https://www.swiggy.com/city/cuttack" },
              { text: "Aligarh", link: "https://www.swiggy.com/city/aligarh" },
              { text: "Salem", link: "https://www.swiggy.com/city/salem" },
              { text: "Jodhpur", link: "https://www.swiggy.com/city/jodhpur" },
              { text: "Ajmer", link: "https://www.swiggy.com/city/ajmer" },
              { text: "Jhansi", link: "https://www.swiggy.com/city/jhansi" },
              {
                text: "Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur",
              },
              {
                text: "Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur",
              },
              { text: "Erode", link: "https://www.swiggy.com/city/erode" },
              { text: "Nellore", link: "https://www.swiggy.com/city/nellore" },
              {
                text: "Rourkela",
                link: "https://www.swiggy.com/city/rourkela",
              },
              {
                text: "Anantapur",
                link: "https://www.swiggy.com/city/anantapur",
              },
              { text: "Kurnool", link: "https://www.swiggy.com/city/kurnool" },
              {
                text: "Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar",
              },
              {
                text: "Phagwara",
                link: "https://www.swiggy.com/city/phagwara",
              },
              { text: "Ambala", link: "https://www.swiggy.com/city/ambala" },
              { text: "Ballari", link: "https://www.swiggy.com/city/ballari" },
              {
                text: "Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur",
              },
              {
                text: "Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli",
              },
              {
                text: "Bathinda",
                link: "https://www.swiggy.com/city/bathinda",
              },
              { text: "Mathura", link: "https://www.swiggy.com/city/mathura" },
              {
                text: "Haridwar",
                link: "https://www.swiggy.com/city/haridwar",
              },
              {
                text: "Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri",
              },
              { text: "Sangli", link: "https://www.swiggy.com/city/sangli" },
              {
                text: "Amravati",
                link: "https://www.swiggy.com/city/amravati",
              },
              {
                text: "Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh",
              },
              {
                text: "Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil",
              },
              {
                text: "KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari",
              },
              { text: "Kadapa", link: "https://www.swiggy.com/city/kadapa" },
              {
                text: "Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad",
              },
              {
                text: "Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga",
              },
              {
                text: "Davanagere",
                link: "https://www.swiggy.com/city/davanagere",
              },
              { text: "Roorkee", link: "https://www.swiggy.com/city/roorkee" },
              { text: "Nanded", link: "https://www.swiggy.com/city/nanded" },
              { text: "Rewa", link: "https://www.swiggy.com/city/rewa" },
              { text: "Satna", link: "https://www.swiggy.com/city/satna" },
              {
                text: "Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur",
              },
              { text: "Valsad", link: "https://www.swiggy.com/city/valsad" },
              { text: "Vapi", link: "https://www.swiggy.com/city/vapi" },
              { text: "Chhapra", link: "https://www.swiggy.com/city/chhapra" },
              {
                text: "Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala",
              },
              { text: "Kollam", link: "https://www.swiggy.com/city/kollam" },
              { text: "Silchar", link: "https://www.swiggy.com/city/silchar" },
              {
                text: "Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha",
              },
              { text: "Sonipat", link: "https://www.swiggy.com/city/sonipat" },
              { text: "Rohtak", link: "https://www.swiggy.com/city/rohtak" },
              { text: "Mehsana", link: "https://www.swiggy.com/city/mehsana" },
              { text: "Kullu", link: "https://www.swiggy.com/city/kullu" },
              { text: "Dhule", link: "https://www.swiggy.com/city/dhule" },
              { text: "Dharwad", link: "https://www.swiggy.com/city/dharwad" },
              { text: "Latur", link: "https://www.swiggy.com/city/latur" },
              {
                text: "Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram",
              },
              { text: "Khammam", link: "https://www.swiggy.com/city/khammam" },
              { text: "Hampi", link: "https://www.swiggy.com/city/hampi" },
              {
                text: "Nainital",
                link: "https://www.swiggy.com/city/nainital",
              },
              { text: "Akola", link: "https://www.swiggy.com/city/akola" },
              {
                text: "Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi",
              },
              { text: "Gaya", link: "https://www.swiggy.com/city/gaya" },
              {
                text: "Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar",
              },
              { text: "Dewas", link: "https://www.swiggy.com/city/dewas" },
              { text: "Korba", link: "https://www.swiggy.com/city/korba" },
              {
                text: "Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie",
              },
              { text: "Jalgaon", link: "https://www.swiggy.com/city/jalgaon" },
              {
                text: "Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar",
              },
              {
                text: "Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur",
              },
              { text: "Hapur", link: "https://www.swiggy.com/city/hapur" },
              { text: "Morena", link: "https://www.swiggy.com/city/morena" },
              { text: "Hassan", link: "https://www.swiggy.com/city/hassan" },
              { text: "Hisar", link: "https://www.swiggy.com/city/hisar" },
              { text: "Godhra", link: "https://www.swiggy.com/city/godhra" },
              { text: "Kolar ", link: "https://www.swiggy.com/city/kolar" },
              { text: "Rampur", link: "https://www.swiggy.com/city/rampur" },
              { text: "Sitapur", link: "https://www.swiggy.com/city/sitapur" },
              { text: "Etawah", link: "https://www.swiggy.com/city/etawah" },
              {
                text: "Porbandar",
                link: "https://www.swiggy.com/city/porbandar",
              },
              { text: "Nadiad", link: "https://www.swiggy.com/city/nadiad" },
              { text: "Sagar", link: "https://www.swiggy.com/city/sagar" },
              { text: "Morbi", link: "https://www.swiggy.com/city/morbi" },
              {
                text: "Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara",
              },
              {
                text: "Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru",
              },
              {
                text: "Singrauli",
                link: "https://www.swiggy.com/city/singrauli",
              },
              {
                text: "Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi",
              },
              { text: "Katni", link: "https://www.swiggy.com/city/katni" },
              { text: "Khandwa", link: "https://www.swiggy.com/city/khandwa" },
              { text: "Eluru", link: "https://www.swiggy.com/city/eluru" },
              {
                text: "Malappuram",
                link: "https://www.swiggy.com/city/malappuram",
              },
              {
                text: "Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh",
              },
              { text: "Deoghar", link: "https://www.swiggy.com/city/deoghar" },
              { text: "Khanna", link: "https://www.swiggy.com/city/khanna" },
              { text: "Bidar", link: "https://www.swiggy.com/city/bidar" },
              {
                text: "Madikeri",
                link: "https://www.swiggy.com/city/madikeri",
              },
              {
                text: "Haldwani",
                link: "https://www.swiggy.com/city/haldwani",
              },
              {
                text: "Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad",
              },
              {
                text: "Malegaon",
                link: "https://www.swiggy.com/city/malegaon",
              },
              {
                text: "Dindigul",
                link: "https://www.swiggy.com/city/dindigul",
              },
              {
                text: "Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur",
              },
              { text: "Beed", link: "https://www.swiggy.com/city/beed" },
              {
                text: "Junagadh",
                link: "https://www.swiggy.com/city/junagadh",
              },
              { text: "Asansol", link: "https://www.swiggy.com/city/asansol" },
              { text: "Beawar", link: "https://www.swiggy.com/city/beawar" },
              {
                text: "Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh",
              },
              {
                text: "Parbhani",
                link: "https://www.swiggy.com/city/parbhani",
              },
              { text: "Gondia", link: "https://www.swiggy.com/city/gondia" },
              {
                text: "Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji",
              },
              { text: "Jalna", link: "https://www.swiggy.com/city/jalna" },
              {
                text: "Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal",
              },
              {
                text: "Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri",
              },
              { text: "Moga", link: "https://www.swiggy.com/city/moga" },
              { text: "Abohar", link: "https://www.swiggy.com/city/abohar" },
              { text: "Adoni", link: "https://www.swiggy.com/city/adoni" },
              {
                text: "Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle",
              },
              {
                text: "Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai",
              },
              { text: "Satara", link: "https://www.swiggy.com/city/satara" },
              { text: "Ambur", link: "https://www.swiggy.com/city/ambur" },
              {
                text: "Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar",
              },
              { text: "Ratlam", link: "https://www.swiggy.com/city/ratlam" },
              {
                text: "Moradabad",
                link: "https://www.swiggy.com/city/moradabad",
              },
              {
                text: "Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam",
              },
              { text: "Ongole", link: "https://www.swiggy.com/city/ongole" },
              {
                text: "Kottayam",
                link: "https://www.swiggy.com/city/kottayam",
              },
              {
                text: "Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga",
              },
              {
                text: "Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra",
              },
              { text: "Unnao", link: "https://www.swiggy.com/city/unnao" },
              {
                text: "Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr",
              },
              {
                text: "Durgapur",
                link: "https://www.swiggy.com/city/durgapur",
              },
              {
                text: "Siliguri",
                link: "https://www.swiggy.com/city/siliguri",
              },
              { text: "Pali", link: "https://www.swiggy.com/city/pali" },
              {
                text: "Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem",
              },
              {
                text: "Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam",
              },
              {
                text: "Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar",
              },
              { text: "Bhiwani", link: "https://www.swiggy.com/city/bhiwani" },
              {
                text: "Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore",
              },
              { text: "Kaithal", link: "https://www.swiggy.com/city/kaithal" },
              { text: "Jagtial", link: "https://www.swiggy.com/city/jagtial" },
              {
                text: "Palakkad",
                link: "https://www.swiggy.com/city/palakkad",
              },
              { text: "Guna", link: "https://www.swiggy.com/city/guna" },
              {
                text: "Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam",
              },
              {
                text: "Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan",
              },
              {
                text: "Baripada",
                link: "https://www.swiggy.com/city/baripada",
              },
              { text: "Orai", link: "https://www.swiggy.com/city/orai" },
              { text: "Bhadrak", link: "https://www.swiggy.com/city/bhadrak" },
              { text: "Batala", link: "https://www.swiggy.com/city/batala" },
              {
                text: "Firozpur",
                link: "https://www.swiggy.com/city/firozpur",
              },
              { text: "Barnala", link: "https://www.swiggy.com/city/barnala" },
              { text: "Raigarh", link: "https://www.swiggy.com/city/raigarh" },
              { text: "Nagaon", link: "https://www.swiggy.com/city/nagaon" },
              {
                text: "Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri",
              },
              {
                text: "Balurghat",
                link: "https://www.swiggy.com/city/balurghat",
              },
              { text: "Giridih", link: "https://www.swiggy.com/city/giridih" },
              {
                text: "Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur",
              },
              {
                text: "Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur",
              },
              { text: "Vidisha", link: "https://www.swiggy.com/city/vidisha" },
              { text: "Dimapur", link: "https://www.swiggy.com/city/dimapur" },
              {
                text: "Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad",
              },
              { text: "Imphal", link: "https://www.swiggy.com/city/imphal" },
              {
                text: "Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur",
              },
              {
                text: "Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur",
              },
              {
                text: "Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur",
              },
              {
                text: "Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli",
              },
              {
                text: "Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia",
              },
              {
                text: "Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam",
              },
              {
                text: "Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon",
              },
              {
                text: "Kashipur",
                link: "https://www.swiggy.com/city/kashipur",
              },
              {
                text: "Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur",
              },
              {
                text: "Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur",
              },
              {
                text: "Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati",
              },
              {
                text: "Chittoor",
                link: "https://www.swiggy.com/city/chittoor",
              },
              {
                text: "Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai",
              },
              { text: "Hardoi", link: "https://www.swiggy.com/city/hardoi" },
              { text: "Basti", link: "https://www.swiggy.com/city/basti" },
              {
                text: "Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi",
              },
              {
                text: "Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur",
              },
              { text: "Hospet", link: "https://www.swiggy.com/city/hospet" },
              { text: "Budaun", link: "https://www.swiggy.com/city/budaun" },
              { text: "Neemuch", link: "https://www.swiggy.com/city/neemuch" },
              {
                text: "Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit",
              },
              { text: "Barshi", link: "https://www.swiggy.com/city/barshi" },
              {
                text: "Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar",
              },
              { text: "Wardha", link: "https://www.swiggy.com/city/wardha" },
              { text: "Sehore", link: "https://www.swiggy.com/city/sehore" },
              {
                text: "Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram",
              },
              {
                text: "Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh",
              },
              {
                text: "Pathankot",
                link: "https://www.swiggy.com/city/pathankot",
              },
              { text: "Puri", link: "https://www.swiggy.com/city/puri" },
              {
                text: "Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur",
              },
              {
                text: "Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
              },
              {
                text: "Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar",
              },
              { text: "Bhuj", link: "https://www.swiggy.com/city/bhuj" },
              {
                text: "Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham",
              },
              { text: "Bharuch", link: "https://www.swiggy.com/city/bharuch" },
              { text: "Navsari", link: "https://www.swiggy.com/city/navsari" },
              { text: "Amreli", link: "https://www.swiggy.com/city/amreli" },
              {
                text: "Palanpur",
                link: "https://www.swiggy.com/city/palanpur",
              },
              {
                text: "Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara",
              },
              {
                text: "Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh",
              },
              { text: "Sikar", link: "https://www.swiggy.com/city/sikar" },
              { text: "Churu", link: "https://www.swiggy.com/city/churu" },
              { text: "Alwar", link: "https://www.swiggy.com/city/alwar" },
              { text: "Bhiwadi", link: "https://www.swiggy.com/city/bhiwadi" },
              {
                text: "Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur",
              },
              {
                text: "Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu",
              },
              { text: "Bundi", link: "https://www.swiggy.com/city/bundi" },
              {
                text: "Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur",
              },
              { text: "Purulia", link: "https://www.swiggy.com/city/purulia" },
              {
                text: "Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman",
              },
              {
                text: "Raniganj",
                link: "https://www.swiggy.com/city/raniganj",
              },
              {
                text: "Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling",
              },
              {
                text: "Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri",
              },
              {
                text: "Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh",
              },
              { text: "Dholpur", link: "https://www.swiggy.com/city/dholpur" },
              {
                text: "Uluberia",
                link: "https://www.swiggy.com/city/uluberia",
              },
              {
                text: "Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip",
              },
              { text: "Bongaon", link: "https://www.swiggy.com/city/bongaon" },
              {
                text: "Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara",
              },
              { text: "Habra", link: "https://www.swiggy.com/city/habra" },
              {
                text: "Firozabad",
                link: "https://www.swiggy.com/city/firozabad",
              },
              {
                text: "Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda",
              },
              {
                text: "Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur",
              },
              { text: "Bijapur", link: "https://www.swiggy.com/city/bijapur" },
              {
                text: "Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal",
              },
              { text: "Raichur", link: "https://www.swiggy.com/city/raichur" },
              {
                text: "Bahraich",
                link: "https://www.swiggy.com/city/bahraich",
              },
              {
                text: "Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh",
              },
              {
                text: "Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh",
              },
              { text: "Jind", link: "https://www.swiggy.com/city/jind" },
              { text: "Rewari", link: "https://www.swiggy.com/city/rewari" },
              { text: "Palwal", link: "https://www.swiggy.com/city/palwal" },
              { text: "Hathras", link: "https://www.swiggy.com/city/hathras" },
              {
                text: "Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur",
              },
              { text: "Banda", link: "https://www.swiggy.com/city/banda" },
              {
                text: "Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur",
              },
              {
                text: "Faridkot",
                link: "https://www.swiggy.com/city/faridkot",
              },
              {
                text: "Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur",
              },
              {
                text: "Suryapet",
                link: "https://www.swiggy.com/city/suryapet",
              },
              {
                text: "Adilabad",
                link: "https://www.swiggy.com/city/adilabad",
              },
              {
                text: "Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet",
              },
              {
                text: "Faizabad",
                link: "https://www.swiggy.com/city/faizabad",
              },
              {
                text: "Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri",
              },
              { text: "Gonda", link: "https://www.swiggy.com/city/gonda" },
              {
                text: "Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai",
              },
              {
                text: "Medinipur",
                link: "https://www.swiggy.com/city/medinipur",
              },
              { text: "Nagda", link: "https://www.swiggy.com/city/nagda" },
              { text: "Raiganj", link: "https://www.swiggy.com/city/raiganj" },
              {
                text: "Deoria City",
                link: "https://www.swiggy.com/city/deoria-city",
              },
              {
                text: "Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur",
              },
              { text: "Shamli", link: "https://www.swiggy.com/city/shamli" },
              {
                text: "Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar",
              },
              { text: "Ballia", link: "https://www.swiggy.com/city/ballia" },
              {
                text: "Guntakal",
                link: "https://www.swiggy.com/city/guntakal",
              },
              {
                text: "Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda",
              },
              { text: "Etah", link: "https://www.swiggy.com/city/etah" },
              {
                text: "Berhampore",
                link: "https://www.swiggy.com/city/berhampore",
              },
              {
                text: "Gudivada",
                link: "https://www.swiggy.com/city/gudivada",
              },
              { text: "Haldia", link: "https://www.swiggy.com/city/haldia" },
              {
                text: "Santipur",
                link: "https://www.swiggy.com/city/santipur",
              },
              {
                text: "Basirhat",
                link: "https://www.swiggy.com/city/basirhat",
              },
              { text: "Udgir", link: "https://www.swiggy.com/city/udgir" },
              {
                text: "Proddatur",
                link: "https://www.swiggy.com/city/proddatur",
              },
              {
                text: "Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam",
              },
              {
                text: "Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur",
              },
              {
                text: "Chandausi",
                link: "https://www.swiggy.com/city/chandausi",
              },
              { text: "Bhind", link: "https://www.swiggy.com/city/bhind" },
              { text: "Mandya", link: "https://www.swiggy.com/city/mandya" },
              {
                text: "Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot",
              },
              {
                text: "Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar",
              },
              {
                text: "Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga",
              },
              {
                text: "Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad",
              },
              {
                text: "Modinagar",
                link: "https://www.swiggy.com/city/modinagar",
              },
              {
                text: "Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri",
              },
              {
                text: "Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad",
              },
              { text: "Jaunpur", link: "https://www.swiggy.com/city/jaunpur" },
              {
                text: "Port Blair",
                link: "https://www.swiggy.com/city/port-blair",
              },
              { text: "Jorhat", link: "https://www.swiggy.com/city/jorhat" },
              { text: "Nandyal", link: "https://www.swiggy.com/city/nandyal" },
              {
                text: "Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif",
              },
              { text: "Buxar", link: "https://www.swiggy.com/city/buxar" },
              { text: "Siwan", link: "https://www.swiggy.com/city/siwan" },
              { text: "Dehri", link: "https://www.swiggy.com/city/dehri" },
              { text: "Bettiah", link: "https://www.swiggy.com/city/bettiah" },
              {
                text: "Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj",
              },
              { text: "Saharsa", link: "https://www.swiggy.com/city/saharsa" },
              { text: "Hajipur", link: "https://www.swiggy.com/city/hajipur" },
              {
                text: "Motihari",
                link: "https://www.swiggy.com/city/motihari",
              },
              { text: "Sasaram", link: "https://www.swiggy.com/city/sasaram" },
              { text: "Munger", link: "https://www.swiggy.com/city/munger" },
              { text: "Katihar", link: "https://www.swiggy.com/city/katihar" },
              { text: "Arrah", link: "https://www.swiggy.com/city/arrah" },
              {
                text: "Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam",
              },
              {
                text: "Begusarai",
                link: "https://www.swiggy.com/city/begusarai",
              },
              { text: "Neyveli", link: "https://www.swiggy.com/city/neyveli" },
              { text: "Waidhan", link: "https://www.swiggy.com/city/waidhan" },
              {
                text: "Markapur",
                link: "https://www.swiggy.com/city/markapur",
              },
              {
                text: "Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur",
              },
              { text: "Bhatkal", link: "https://www.swiggy.com/city/bhatkal" },
              { text: "Gokak", link: "https://www.swiggy.com/city/gokak" },
              { text: "Itarsi", link: "https://www.swiggy.com/city/itarsi" },
              { text: "Dhar", link: "https://www.swiggy.com/city/dhar" },
              {
                text: "Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon",
              },
              {
                text: "Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur",
              },
              {
                text: "Namakkal",
                link: "https://www.swiggy.com/city/namakkal",
              },
              {
                text: "Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri",
              },
              {
                text: "Bhandara",
                link: "https://www.swiggy.com/city/bhandara",
              },
              {
                text: "Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar",
              },
              {
                text: "Siddipet",
                link: "https://www.swiggy.com/city/siddipet",
              },
              { text: "Gadwal", link: "https://www.swiggy.com/city/gadwal" },
              {
                text: "Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural",
              },
              {
                text: "Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy",
              },
              {
                text: "Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu",
              },
              {
                text: "Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala",
              },
              { text: "Sangrur", link: "https://www.swiggy.com/city/sangrur" },
              {
                text: "Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur",
              },
              { text: "Ramgarh", link: "https://www.swiggy.com/city/ramgarh" },
              { text: "Bantwal", link: "https://www.swiggy.com/city/bantwal" },
              {
                text: "Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura",
              },
              { text: "Buldana", link: "https://www.swiggy.com/city/buldana" },
              { text: "Karad", link: "https://www.swiggy.com/city/karad" },
              {
                text: "Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri",
              },
              { text: "Tiptur", link: "https://www.swiggy.com/city/tiptur" },
              {
                text: "Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam",
              },
              {
                text: "Mancherial",
                link: "https://www.swiggy.com/city/mancherial",
              },
              {
                text: "Balrampur",
                link: "https://www.swiggy.com/city/balrampur",
              },
              {
                text: "Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki",
              },
              { text: "Malout", link: "https://www.swiggy.com/city/malout" },
              {
                text: "Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib",
              },
              { text: "Ropar", link: "https://www.swiggy.com/city/ropar" },
              { text: "Nangal", link: "https://www.swiggy.com/city/nangal" },
              { text: "Narnaul", link: "https://www.swiggy.com/city/narnaul" },
              {
                text: "Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh",
              },
              {
                text: "Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar",
              },
              { text: "Dausa", link: "https://www.swiggy.com/city/dausa" },
              {
                text: "Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad",
              },
              {
                text: "Samastipur",
                link: "https://www.swiggy.com/city/samastipur",
              },
              { text: "Purnea", link: "https://www.swiggy.com/city/purnea" },
              {
                text: "Berhampur",
                link: "https://www.swiggy.com/city/berhampur",
              },
              { text: "Malda", link: "https://www.swiggy.com/city/malda" },
              { text: "Tuni", link: "https://www.swiggy.com/city/tuni" },
              { text: "Puttur", link: "https://www.swiggy.com/city/puttur" },
              {
                text: "Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty",
              },
              { text: "Nirmal", link: "https://www.swiggy.com/city/nirmal" },
              {
                text: "Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur",
              },
              { text: "Tanuku", link: "https://www.swiggy.com/city/tanuku" },
              { text: "Dahod", link: "https://www.swiggy.com/city/dahod" },
              { text: "Barmer", link: "https://www.swiggy.com/city/barmer" },
              {
                text: "Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city",
              },
              {
                text: "Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh",
              },
              {
                text: "Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib",
              },
              { text: "Nakodar", link: "https://www.swiggy.com/city/nakodar" },
              {
                text: "Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar",
              },
              { text: "Vyara", link: "https://www.swiggy.com/city/vyara" },
              { text: "Bardoli", link: "https://www.swiggy.com/city/bardoli" },
              { text: "Halol", link: "https://www.swiggy.com/city/halol" },
              { text: "Bijnor", link: "https://www.swiggy.com/city/bijnor" },
              {
                text: "Sangamner",
                link: "https://www.swiggy.com/city/sangamner",
              },
              {
                text: "Baramati",
                link: "https://www.swiggy.com/city/baramati",
              },
              { text: "Betul", link: "https://www.swiggy.com/city/betul" },
              {
                text: "Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur",
              },
              {
                text: "Balaghat",
                link: "https://www.swiggy.com/city/balaghat",
              },
              {
                text: "Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi",
              },
              {
                text: "Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram",
              },
              {
                text: "Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram",
              },
              { text: "Sirsi", link: "https://www.swiggy.com/city/sirsi" },
              { text: "Theni", link: "https://www.swiggy.com/city/theni" },
              { text: "Karur", link: "https://www.swiggy.com/city/karur" },
              { text: "Karwar", link: "https://www.swiggy.com/city/karwar" },
              {
                text: "Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur",
              },
              { text: "Kannur", link: "https://www.swiggy.com/city/kannur" },
              { text: "Noida 1", link: "https://www.swiggy.com/city/noida-1" },
              {
                text: "Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla",
              },
              {
                text: "Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha",
              },
              { text: "Kadiri", link: "https://www.swiggy.com/city/kadiri" },
              { text: "Kavali", link: "https://www.swiggy.com/city/kavali" },
              { text: "Tezpur", link: "https://www.swiggy.com/city/tezpur" },
              {
                text: "Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam",
              },
              {
                text: "Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara",
              },
              {
                text: "Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali",
              },
              {
                text: "Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad",
              },
              { text: "Jagraon", link: "https://www.swiggy.com/city/jagraon" },
              { text: "Mansa", link: "https://www.swiggy.com/city/mansa" },
              {
                text: "Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city",
              },
              { text: "Fazilka", link: "https://www.swiggy.com/city/fazilka" },
              { text: "Baddi", link: "https://www.swiggy.com/city/baddi" },
              { text: "Solan", link: "https://www.swiggy.com/city/solan" },
              {
                text: "Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj",
              },
              {
                text: "Balangir",
                link: "https://www.swiggy.com/city/balangir",
              },
              {
                text: "Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem",
              },
              { text: "Hansi", link: "https://www.swiggy.com/city/hansi" },
              {
                text: "Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar",
              },
              {
                text: "Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj",
              },
              {
                text: "Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda",
              },
              { text: "Tohana", link: "https://www.swiggy.com/city/tohana" },
              {
                text: "Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar",
              },
              {
                text: "Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar",
              },
              {
                text: "Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra",
              },
              {
                text: "Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada",
              },
              {
                text: "Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
              },
              { text: "Veraval", link: "https://www.swiggy.com/city/veraval" },
              { text: "Daman", link: "https://www.swiggy.com/city/daman" },
              { text: "Chiplun", link: "https://www.swiggy.com/city/chiplun" },
              {
                text: "Silvassa",
                link: "https://www.swiggy.com/city/silvassa",
              },
              { text: "Lonavla", link: "https://www.swiggy.com/city/lonavla" },
              {
                text: "Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon",
              },
              {
                text: "Golaghat",
                link: "https://www.swiggy.com/city/golaghat",
              },
              {
                text: "Duliajan",
                link: "https://www.swiggy.com/city/duliajan",
              },
              { text: "Bolpur", link: "https://www.swiggy.com/city/bolpur" },
              {
                text: "Madhubani",
                link: "https://www.swiggy.com/city/madhubani",
              },
              {
                text: "Balasore",
                link: "https://www.swiggy.com/city/balasore",
              },
              {
                text: "Palampur",
                link: "https://www.swiggy.com/city/palampur",
              },
              { text: "Kotdwar", link: "https://www.swiggy.com/city/kotdwar" },
              { text: "Koppal", link: "https://www.swiggy.com/city/koppal" },
              { text: "Chikhli", link: "https://www.swiggy.com/city/chikhli" },
              { text: "Dahanu", link: "https://www.swiggy.com/city/dahanu" },
              {
                text: "Itanagar",
                link: "https://www.swiggy.com/city/itanagar",
              },
              { text: "Rangpo", link: "https://www.swiggy.com/city/rangpo" },
              { text: "Aizawl", link: "https://www.swiggy.com/city/aizawl" },
              { text: "Gangtok", link: "https://www.swiggy.com/city/gangtok" },
              {
                text: "Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai",
              },
              { text: "Kannauj", link: "https://www.swiggy.com/city/kannauj" },
              {
                text: "Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar",
              },
              { text: "Palani", link: "https://www.swiggy.com/city/palani" },
              {
                text: "Bilimora",
                link: "https://www.swiggy.com/city/bilimora",
              },
              { text: "Boisar", link: "https://www.swiggy.com/city/boisar" },
              { text: "Kohima", link: "https://www.swiggy.com/city/kohima" },
              {
                text: "Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun",
              },
              { text: "Dumka", link: "https://www.swiggy.com/city/dumka" },
              {
                text: "Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand",
              },
              {
                text: "Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj",
              },
              {
                text: "Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur",
              },
              {
                text: "Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna",
              },
              { text: "Baran", link: "https://www.swiggy.com/city/baran" },
              {
                text: "Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur",
              },
              {
                text: "Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti",
              },
              { text: "Pusad", link: "https://www.swiggy.com/city/pusad" },
              {
                text: "Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar",
              },
              { text: "Manali", link: "https://www.swiggy.com/city/manali" },
              { text: "Diu", link: "https://www.swiggy.com/city/diu" },
              {
                text: "Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon",
              },
              {
                text: "Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara",
              },
              {
                text: "Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar",
              },
              { text: "Almora", link: "https://www.swiggy.com/city/almora" },
              {
                text: "Jhargram",
                link: "https://www.swiggy.com/city/jhargram",
              },
              {
                text: "Arambagh",
                link: "https://www.swiggy.com/city/arambagh",
              },
              { text: "Bhadohi", link: "https://www.swiggy.com/city/bhadohi" },
              { text: "Tenkasi", link: "https://www.swiggy.com/city/tenkasi" },
              {
                text: "Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur",
              },
              {
                text: "Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram",
              },
              { text: "Rajgarh", link: "https://www.swiggy.com/city/rajgarh" },
              {
                text: "Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh",
              },
              { text: "Washim", link: "https://www.swiggy.com/city/washim" },
              {
                text: "Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur",
              },
              { text: "Suri", link: "https://www.swiggy.com/city/suri" },
              {
                text: "Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur",
              },
              {
                text: "Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur",
              },
              {
                text: "Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb",
              },
              { text: "Wayanad", link: "https://www.swiggy.com/city/wayanad" },
              {
                text: "Perambalur",
                link: "https://www.swiggy.com/city/perambalur",
              },
              {
                text: "Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi",
              },
              {
                text: "Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh",
              },
              { text: "Mahoba", link: "https://www.swiggy.com/city/mahoba" },
              {
                text: "Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi",
              },
              {
                text: "Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha",
              },
              {
                text: "Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad",
              },
              {
                text: "Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai",
              },
              {
                text: "Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam",
              },
              {
                text: "Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani",
              },
              {
                text: "Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur",
              },
              {
                text: "Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram",
              },
              {
                text: "Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam",
              },
              { text: "Sirkali", link: "https://www.swiggy.com/city/sirkali" },
              {
                text: "Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam",
              },
              { text: "Digboi", link: "https://www.swiggy.com/city/digboi" },
              {
                text: "Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali",
              },
              { text: "Nalbari", link: "https://www.swiggy.com/city/nalbari" },
              {
                text: "Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city",
              },
              {
                text: "Mukerian",
                link: "https://www.swiggy.com/city/mukerian",
              },
              { text: "Hosur", link: "https://www.swiggy.com/city/hosur" },
              {
                text: "Palakollu",
                link: "https://www.swiggy.com/city/palakollu",
              },
              {
                text: "Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem",
              },
              { text: "Barh", link: "https://www.swiggy.com/city/barh" },
              { text: "Palghar", link: "https://www.swiggy.com/city/palghar" },
              {
                text: "Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar",
              },
              {
                text: "Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur",
              },
              {
                text: "Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa",
              },
              { text: "Haveri", link: "https://www.swiggy.com/city/haveri" },
              {
                text: "Karaikal",
                link: "https://www.swiggy.com/city/karaikal",
              },
              { text: "Jjajjar", link: "https://www.swiggy.com/city/jjajjar" },
              {
                text: "Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar",
              },
              { text: "Rangia", link: "https://www.swiggy.com/city/rangia" },
              {
                text: "Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur",
              },
              { text: "Una", link: "https://www.swiggy.com/city/una" },
              {
                text: "Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery",
              },
              {
                text: "Rayagada",
                link: "https://www.swiggy.com/city/rayagada",
              },
              {
                text: "Paradeep",
                link: "https://www.swiggy.com/city/paradeep",
              },
              {
                text: "Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta",
              },
              { text: "Jamui", link: "https://www.swiggy.com/city/jamui" },
              {
                text: "Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa",
              },
              {
                text: "Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram",
              },
              {
                text: "Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai",
              },
              { text: "Araria", link: "https://www.swiggy.com/city/araria" },
              {
                text: "North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur",
              },
              {
                text: "Rajampet",
                link: "https://www.swiggy.com/city/rajampet",
              },
              {
                text: "Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai",
              },
              {
                text: "Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur",
              },
              { text: "Hojai", link: "https://www.swiggy.com/city/hojai" },
              {
                text: "Khagaria",
                link: "https://www.swiggy.com/city/khagaria",
              },
              { text: "Dasuya", link: "https://www.swiggy.com/city/dasuya" },
              { text: "Gudur", link: "https://www.swiggy.com/city/gudur" },
              {
                text: "Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta",
              },
              { text: "Piler", link: "https://www.swiggy.com/city/piler" },
              {
                text: "SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil",
              },
              { text: "Nabha", link: "https://www.swiggy.com/city/nabha" },
              {
                text: "LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara",
              },
              {
                text: "Jangipur",
                link: "https://www.swiggy.com/city/jangipur",
              },
              { text: "Roha", link: "https://www.swiggy.com/city/roha" },
            ],
            id: "footer_content",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            citySlug: "mumbai",
            lat: "19.1211588",
            lng: "72.8979674",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            gandalfRequest:
              '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-da01eb9e-6a72-439a-a366-d435ccb3496e","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
            id: "meta_data",
            metaInfo: {
              pageType: "FOOD_HOME_PAGE",
              pageTitle:
                "Order Food Online from India's Best Food Delivery Service | Swiggy",
              pageMetaDescription:
                "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
              pageKeywords:
                "Food delivery, Online food order, Online food dleivery",
            },
            screenType: "filteredCollection",
            seoParams: {
              apiName: "FoodHomePage",
              seoUrl: "www.swiggy.com",
              pageType: "FOOD_HOME_PAGE",
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    cacheExpiryTime: 240,
    nextFetch: 1,
  },
  tid: "19997764-6a33-43dd-8fe3-0d1fbe19932d",
  sid: "c1r2e6e0-4bf0-4c9f-8614-85d798f4dba9",
  deviceId: "67359c6d-2293-2ec2-ca7a-a027696fdc08",
  csrfToken: "pfJCW3cWiIBS-HcYe4rfS0RWbIfuHFClkAaFPSQo",
};
