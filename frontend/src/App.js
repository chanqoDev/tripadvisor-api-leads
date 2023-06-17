// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// import { fetchRestaurantData } from "../src/services/api";
const dummyData = [
  {
    restaurantsId:
      "Restaurant_Review-g38954-d4927761-Reviews-Kmacho_s_Mexican_Restaurant_and_Cantina-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/fd/d6/18/photo2jpg.jpg",
    heroImgRawHeight: 413,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 4927761,
    name: "Kmacho's Mexican Restaurant and Cantina",
    averageRating: 4,
    userReviewCount: 344,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Mexican", "Southwestern"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: {
        url: "NjJ2Xy9Db21tZXJjZT9wPURlbGl2ZXJ5X0Nob3dOb3cmc3JjPTE4Mzc5MDc2OSZnZW89NDkyNzc2MSZmcm9tPWRhdGEmYXJlYT1yZXNlcnZhdGlvbl9idXR0b24mc2xvdD0xJm1hdGNoSUQ9MSZvb3M9MCZjbnQ9MSZzaWxvPTM4MDYwJmJ1Y2tldD05MzQ5MTAmbnJhbms9MSZjcmFuaz0xJmNsdD1SJnR0eXBlPVJlc3RhdXJhbnQmdG09MjY2ODU5MTAxJm1hbmFnZWQ9ZmFsc2UmY2FwcGVkPWZhbHNlJmdvc294PTZFNGtoaDBIdE5YQUwwZXBxLUp1QkppOUh1NEt3WmtCY1RZYVBBS1Bjdnl6UnpKLW1ncEFhUDBJVXFDNDRidWJOR2k5STZudUJQbVhtdW5UMkY3WTJlZ0UxVVFtek1wQU5HdWljbWEySnZFJmNzPTE5YmUxYzM3YzcwMzM0ZjdjYTIxNDYyZWYzNmM0YmJmMV9xTFM=",
        nameInCommerceTool: "Delivery_ChowNow",
        name: "ChowNow",
        logo: "https://static.tacdn.com/img2/branding/hotels/chownow_v2_05.11.2020.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: false,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Dinner out with family&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4927761-r813936389-Kmacho_s_Mexican_Restaurant_and_Cantina-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Our local favorite.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4927761-r773122844-Kmacho_s_Mexican_Restaurant_and_Cantina-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d8093587-Reviews-Ginger_Sue_s-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/d5/e2/0b/photo3jpg.jpg",
    heroImgRawHeight: 413,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 8093587,
    name: "Ginger Sue's",
    averageRating: 4.5,
    userReviewCount: 156,
    currentOpenStatusCategory: "CLOSED",
    currentOpenStatusText: "Closed Now",
    establishmentTypeAndCuisineTags: ["American"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: {
        url: "dHQ3Xy9Db21tZXJjZT9wPUdydWJodWImc3JjPTE4MzU1MTYzNiZnZW89ODA5MzU4NyZmcm9tPWRhdGEmYXJlYT1yZXNlcnZhdGlvbl9idXR0b24mc2xvdD0xJm1hdGNoSUQ9MSZvb3M9MCZjbnQ9MSZzaWxvPTI1NzY4JmJ1Y2tldD04NTI1MDgmbnJhbms9MSZjcmFuaz0xJmNsdD1SJnR0eXBlPVJlc3RhdXJhbnQmdG09MjY2ODU5MTAxJm1hbmFnZWQ9ZmFsc2UmY2FwcGVkPWZhbHNlJmdvc294PUktQURsZzd3WThscUVxOTJoR09DUEg5eXhLYW80Zm5KdG9ZZGQ1VExjdG9DVksyRWFxY0NpOXJPTXJVQ3lFYnl2WUtsb0J3WFFsRG5sN3Q4aFRWQ2ZHRm9tNTdybzZ2NWJNRmQyUzhwYVFJJmNzPTFjYzI3NDZjNTYyOTYxODA5ODI4OTY2YWM4NTcxMDY1YV9vd0c=",
        nameInCommerceTool: "Grubhub",
        name: "Grubhub",
        logo: "https://static.tacdn.com/img2/branding/hotels/grubhub_05.11.2022.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "http://gingersues.com/lunch-menu/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Great place for a great breakfast!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d8093587-r883920977-Ginger_Sue_s-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Outstanding breakfast&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d8093587-r881839484-Ginger_Sue_s-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d819319-Reviews-Texas_Roadhouse-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/fb/77/41/photo2jpg.jpg",
    heroImgRawHeight: 413,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 819319,
    name: "Texas Roadhouse",
    averageRating: 4,
    userReviewCount: 188,
    currentOpenStatusCategory: "OPENING",
    currentOpenStatusText: "Opens in 29 min",
    establishmentTypeAndCuisineTags: ["American", "Steakhouse"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "http://www.texasroadhouse.com/menu",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;meat lovers place&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d819319-r738249686-Texas_Roadhouse-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;Early Bird Special prior to 5:30 pm dining&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d819319-r716527174-Texas_Roadhouse-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d3540555-Reviews-Johnny_s_Italian_Steakhouse-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/a2/94/04/midwest-s-best-filet.jpg",
    heroImgRawHeight: 367,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 3540555,
    name: "Johnny's Italian Steakhouse",
    averageRating: 4,
    userReviewCount: 210,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Italian", "American"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://johnnysitaliansteakhouse.com/olathe/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;My husband thoroughly enjoyed his <b>steak</b> after the fix, and an additional dess...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d3540555-r887370069-Johnny_s_Italian_Steakhouse-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;... Steakhouse as my go=to place for great steaks, seafood, <b>pasta</b>, and salads.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d3540555-r780077137-Johnny_s_Italian_Steakhouse-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d2179566-Reviews-Minsky_s_Pizza_Cafe_Bar-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/02/b3/8c/fe/minsky-s-pizza-cafe-bar.jpg",
    heroImgRawHeight: 412,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 2179566,
    name: "Minsky's Pizza Cafe & Bar",
    averageRating: 4.5,
    userReviewCount: 136,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Italian", "American"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://minskys.com/locations-menus/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Best pizza place in Olathe&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2179566-r893793006-Minsky_s_Pizza_Cafe_Bar-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Minsky’s on a Friday!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2179566-r885329830-Minsky_s_Pizza_Cafe_Bar-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d916970-Reviews-Johnny_s_BBQ_Olathe-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/50/9e/95/20160213-134906-largejpg.jpg",
    heroImgRawHeight: 450,
    heroImgRawWidth: 450,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 916970,
    name: "Johnny's BBQ Olathe",
    averageRating: 4,
    userReviewCount: 138,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Barbecue"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Surprised at Great Quality&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d916970-r684756367-Johnny_s_BBQ_Olathe-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Good BBQ&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d916970-r664512822-Johnny_s_BBQ_Olathe-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d2475979-Reviews-First_Watch-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/03/d0/0e/ca/first-watch.jpg",
    heroImgRawHeight: 412,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 2475979,
    name: "First Watch",
    averageRating: 4.5,
    userReviewCount: 85,
    currentOpenStatusCategory: "CLOSED",
    currentOpenStatusText: "Closed Now",
    establishmentTypeAndCuisineTags: ["American", "Healthy"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "http://www.firstwatch.com/menu",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Down Home Style&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2475979-r749319542-First_Watch-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Best Breakfast!!!!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2475979-r747052937-First_Watch-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d23367202-Reviews-Burger_Shed_Olathe-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-o/29/05/e9/67/caption.jpg",
    heroImgRawHeight: 347,
    heroImgRawWidth: 391,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 23367202,
    name: "Burger Shed Olathe",
    averageRating: 5,
    userReviewCount: 21,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://eatatburgershed.com/olathe/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;<b>Great Burgers</b>!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d23367202-r793159929-Burger_Shed_Olathe-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great <b>burger</b>, shake and server&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d23367202-r869807852-Burger_Shed_Olathe-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d862579-Reviews-MI_Ranchito-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/1e/ce/52/photo1jpg.jpg",
    heroImgRawHeight: 450,
    heroImgRawWidth: 450,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 862579,
    name: "MI Ranchito",
    averageRating: 4.5,
    userReviewCount: 147,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Mexican"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://www.miranchitokc.com/menus-1",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;I had the flairs and hubby had the Jalisco <b>chimichanga</b>.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d862579-r835232828-MI_Ranchito-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;The complimentary chips and <b>salsa</b> (it’s very mild) are great.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d862579-r870332929-MI_Ranchito-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d4809236-Reviews-Carmens_Cocina_II-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/06/e4/4c/97/carmens-cocina-ii.jpg",
    heroImgRawHeight: 410,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 4809236,
    name: "Carmens Cocina II",
    averageRating: 4.5,
    userReviewCount: 51,
    currentOpenStatusCategory: "CLOSED",
    currentOpenStatusText: "Closed Now",
    establishmentTypeAndCuisineTags: ["Mexican", "Southwestern"],
    priceTag: "$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: false,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Carmen’s&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4809236-r871477404-Carmens_Cocina_II-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Authentic Mexican food, hidden gem!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4809236-r851385167-Carmens_Cocina_II-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d679787-Reviews-54th_Street_Grill_Bar-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/07/41/a1/f1/54th-street-grill.jpg",
    heroImgRawHeight: 367,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 679787,
    name: "54th Street Grill & Bar",
    averageRating: 4,
    userReviewCount: 165,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Bar"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "http://www.54thstreetgrill.com/menu.html",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;The best I’ve had, and I’ve eaten tons of <b>French Dip</b>.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d679787-r876246990-54th_Street_Grill_Bar-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;The barbecued ribs were great with <b>mashed potatoes</b> and roasted veggies - very...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d679787-r840114993-54th_Street_Grill_Bar-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d883553-Reviews-Jumpin_Catfish-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/02/b8/23/45/jumpin-catfish.jpg",
    heroImgRawHeight: 412,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 883553,
    name: "Jumpin Catfish",
    averageRating: 4,
    userReviewCount: 145,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Seafood"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "http://www.jumpincatfish.com",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Absolutely Delightful <b>Seafood</b>&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d883553-r757045936-Jumpin_Catfish-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;I love the <b>crab legs</b>, I absolutely love the baked quail.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d883553-r889725401-Jumpin_Catfish-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d2570325-Reviews-LongHorn_Steakhouse-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/07/99/65/bb/parmesan-crusted-chicken.jpg",
    heroImgRawHeight: 413,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 2570325,
    name: "LongHorn Steakhouse",
    averageRating: 4.5,
    userReviewCount: 85,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Steakhouse"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;... about your wonderful <b>salmon</b> entre.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2570325-r830613483-LongHorn_Steakhouse-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;always tops!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2570325-r830613483-LongHorn_Steakhouse-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d474370-Reviews-Cracker_Barrel-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/0d/cc/bb/52/photo0jpg.jpg",
    heroImgRawHeight: 733,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 474370,
    name: "Cracker Barrel",
    averageRating: 4,
    userReviewCount: 111,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "International"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: {
        url: "T1cyXy9Db21tZXJjZT9wPUdydWJodWImc3JjPTIxMzExODIyMiZnZW89NDc0MzcwJmZyb209ZGF0YSZhcmVhPXJlc2VydmF0aW9uX2J1dHRvbiZzbG90PTEmbWF0Y2hJRD0xJm9vcz0wJmNudD0xJnNpbG89MjU3NjgmYnVja2V0PTg1MjUwOCZucmFuaz0xJmNyYW5rPTEmY2x0PVImdHR5cGU9UmVzdGF1cmFudCZ0bT0yNjY4NTkxMDEmbWFuYWdlZD1mYWxzZSZjYXBwZWQ9ZmFsc2UmZ29zb3g9SS1BRGxnN3dZOGxxRXE5MmhHT0NQSDl5eEthbzRmbkp0b1lkZDVUTGN0b0NWSzJFYXFjQ2k5ck9NclVDeUVieTJ2dTlQb1BMdDVJUmFzMTYwTmNkMHF2VDF5NUYyNTl5OTFUeEdaUFZoLXcmY3M9MTJmZmI3OGFiZGY1OGZmNjA4ZWZlMTNlMDBlMTIzYjNmX1h0ag==",
        nameInCommerceTool: "Grubhub",
        name: "Grubhub",
        logo: "https://static.tacdn.com/img2/branding/hotels/grubhub_05.11.2022.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: false,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;I had hashbrowns, my husband had <b>fries</b>.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d474370-r829175503-Cracker_Barrel-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;The pickup <b>line</b> was well organized with signage placed to direct the flow of...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d474370-r820035460-Cracker_Barrel-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38844-d3497938-Reviews-Minsky_s_Pizza-Lenexa_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/02/b3/79/dd/minsky-s-pizza.jpg",
    heroImgRawHeight: 412,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 3497938,
    name: "Minsky's Pizza",
    averageRating: 4.5,
    userReviewCount: 223,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Italian", "Pizza"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://minskys.com/locations-menus/",
    isDifferentGeo: true,
    parentGeoName: "Lenexa",
    distanceTo: "5.2 mi",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;Cheeseburger <b>pizza</b> on the original crust is our favorite.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38844-d3497938-r881614119-Minsky_s_Pizza-Lenexa_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;Great midwestern favor for the pepperoni, <b>dough</b> was light and just the right...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38844-d3497938-r789251192-Minsky_s_Pizza-Lenexa_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d1073469-Reviews-Mi_Ranchito-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/07/c9/31/4c/mi-ranchito.jpg",
    heroImgRawHeight: 977,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 1073469,
    name: "Mi Ranchito",
    averageRating: 4.5,
    userReviewCount: 84,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Mexican"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: false,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;another wonderful evening meal&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d1073469-r870371409-Mi_Ranchito-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Dinner a success for all&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d1073469-r840145274-Mi_Ranchito-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d4280635-Reviews-Sake_Sushi_Asian_Fusion-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/03/f3/a6/31/getlstd-property-photo.jpg",
    heroImgRawHeight: 412,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 4280635,
    name: "Sake Sushi Asian Fusion",
    averageRating: 4.5,
    userReviewCount: 60,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Japanese", "Sushi"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;First time with real sushi&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4280635-r769762307-Sake_Sushi_Asian_Fusion-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great selection&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4280635-r741162475-Sake_Sushi_Asian_Fusion-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d15215858-Reviews-Toni_s_Italian_Restaurant-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/2d/2f/62/photo1jpg.jpg",
    heroImgRawHeight: 450,
    heroImgRawWidth: 450,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 15215858,
    name: "Toni's Italian Restaurant",
    averageRating: 4.5,
    userReviewCount: 31,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Italian", "Pizza"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: {
        url: "VDA1Xy9Db21tZXJjZT9wPURlbGl2ZXJ5X1NsaWNlJnNyYz0yMTk0NjM1NjImZ2VvPTE1MjE1ODU4JmZyb209ZGF0YSZhcmVhPXJlc2VydmF0aW9uX2J1dHRvbiZzbG90PTEmbWF0Y2hJRD0xJm9vcz0wJmNudD0xJnNpbG89MzMwMjUmYnVja2V0PTg5MTcyOSZucmFuaz0xJmNyYW5rPTEmY2x0PVImdHR5cGU9UmVzdGF1cmFudCZ0bT0yNjY4NTkxMDEmbWFuYWdlZD1mYWxzZSZjYXBwZWQ9ZmFsc2UmZ29zb3g9OURNdmliRFRXZE5hRmVHWUw4UVRha3l2MUxCWVphR3BlQjRNRUhuLWh2Mm1aQk4zNzZFSFZDR3VzVElSeG1KOFExVDJwWVI4b1Vwa21NUUg2OEI3SXlnZzNMa04wMmhrTHRTN2E3VVpSQlkmY3M9MWNiM2RjMWE2MDU3YTQyYmQxNjY5M2EyNDgzNGUyOWIxX2FWcQ==",
        nameInCommerceTool: "Delivery_Slice",
        name: "Slice",
        logo: "https://static.tacdn.com/img2/branding/hotels/slice_04.09.2019.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "http://www.menufy.com",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;<b>Pizza</b> is best in the city!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d15215858-r832410022-Toni_s_Italian_Restaurant-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;... served with <b>olive</b> oil and balsamic ...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d15215858-r778398219-Toni_s_Italian_Restaurant-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d805369-Reviews-Chapala-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/ba/af/1c/photo0jpg.jpg",
    heroImgRawHeight: 450,
    heroImgRawWidth: 450,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 805369,
    name: "Chapala",
    averageRating: 4.5,
    userReviewCount: 65,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Mexican", "Southwestern"],
    priceTag: "$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: false,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Very Good&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d805369-r787288943-Chapala-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great first time visit&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d805369-r778397689-Chapala-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d4294489-Reviews-Twin_Peaks_Restaurants-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/15/ae/3e/6e/twin-peaks-restaurants.jpg",
    heroImgRawHeight: 450,
    heroImgRawWidth: 450,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 4294489,
    name: "Twin Peaks Restaurants",
    averageRating: 4,
    userReviewCount: 81,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Bar"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://twinpeaksrestaurant.com/menu/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Good food for a sports bar, the name...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4294489-r650789695-Twin_Peaks_Restaurants-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;No agent Cooper’s blueberry pie&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4294489-r559322456-Twin_Peaks_Restaurants-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d4960676-Reviews-Spin_Neapolitan_Pizza-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/0f/de/09/70/spin-neapolitan-pizza.jpg",
    heroImgRawHeight: 733,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 4960676,
    name: "Spin Neapolitan Pizza",
    averageRating: 4.5,
    userReviewCount: 45,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Pizza"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: {
        url: "bzZkXy9Db21tZXJjZT9wPUdydWJodWImc3JjPTE3NzIwOTA5MCZnZW89NDk2MDY3NiZmcm9tPWRhdGEmYXJlYT1yZXNlcnZhdGlvbl9idXR0b24mc2xvdD0xJm1hdGNoSUQ9MSZvb3M9MCZjbnQ9MSZzaWxvPTI1NzY4JmJ1Y2tldD04NTI1MDgmbnJhbms9MSZjcmFuaz0xJmNsdD1SJnR0eXBlPVJlc3RhdXJhbnQmdG09MjY2ODU5MTAxJm1hbmFnZWQ9ZmFsc2UmY2FwcGVkPWZhbHNlJmdvc294PUktQURsZzd3WThscUVxOTJoR09DUEg5eXhLYW80Zm5KdG9ZZGQ1VExjdG9DVksyRWFxY0NpOXJPTXJVQ3lFYnllcllsb2JZUXJHdkF6MTRkeHlseU13T2E3Y3FjaC0zbE5MM3dpR1lBS3RvJmNzPTE4Nzk1NjU3ODgwYmM5MGQzNDc3NzViYjYyZTM3MGJmZF9LTko=",
        nameInCommerceTool: "Grubhub",
        name: "Grubhub",
        logo: "https://static.tacdn.com/img2/branding/hotels/grubhub_05.11.2022.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://www.spinpizza.com/menu-main-street/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Pizza and Salad Dinner&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4960676-r819955037-Spin_Neapolitan_Pizza-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great food&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4960676-r728023450-Spin_Neapolitan_Pizza-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d925241-Reviews-Red_Robin_Gourmet_Burgers-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/09/07/cc/23/red-robin-gourmet-burgers.jpg",
    heroImgRawHeight: 309,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 925241,
    name: "Red Robin Gourmet Burgers",
    averageRating: 4,
    userReviewCount: 72,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: false,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Good burgers&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d925241-r833069013-Red_Robin_Gourmet_Burgers-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;Food for 13 people delivered hot, fast...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d925241-r789571372-Red_Robin_Gourmet_Burgers-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d3902988-Reviews-Johnny_s_Tavern-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/b5/0a/35/nachos.jpg",
    heroImgRawHeight: 413,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 3902988,
    name: "Johnny's Tavern",
    averageRating: 4,
    userReviewCount: 53,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Bar"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://www.johnnystavern.com/menus/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Slow Service But Good Food!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d3902988-r793328659-Johnny_s_Tavern-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great food and fun place to&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d3902988-r785094279-Johnny_s_Tavern-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d390695-Reviews-Jose_Pepper_s-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/0b/6d/91/51/taco-al-carbon-and-flauntas.jpg",
    heroImgRawHeight: 977,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 390695,
    name: "Jose Pepper's",
    averageRating: 4,
    userReviewCount: 66,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Mexican", "Southwestern"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Jose Peppers&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d390695-r879833510-Jose_Pepper_s-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Food great, service wasn&#39;t&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d390695-r782142003-Jose_Pepper_s-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d4655811-Reviews-Jersey_Mike_s_Subs-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/de/06/0f/chipotle-cheese-steak.jpg",
    heroImgRawHeight: 413,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 4655811,
    name: "Jersey Mike's Subs",
    averageRating: 5,
    userReviewCount: 20,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Pizza", "Fast Food"],
    priceTag: "$",
    offers: {
      slot1Offer: {
        url: "TXJPXy9Db21tZXJjZT9wPUdydWJodWImc3JjPTE3MTc1OTA5NSZnZW89NDY1NTgxMSZmcm9tPWRhdGEmYXJlYT1yZXNlcnZhdGlvbl9idXR0b24mc2xvdD0xJm1hdGNoSUQ9MSZvb3M9MCZjbnQ9MSZzaWxvPTI1NzY4JmJ1Y2tldD04NTI1MDgmbnJhbms9MSZjcmFuaz0xJmNsdD1SJnR0eXBlPVJlc3RhdXJhbnQmdG09MjY2ODU5MTAxJm1hbmFnZWQ9ZmFsc2UmY2FwcGVkPWZhbHNlJmdvc294PUktQURsZzd3WThscUVxOTJoR09DUEg5eXhLYW80Zm5KdG9ZZGQ1VExjdG9DVksyRWFxY0NpOXJPTXJVQ3lFYnlQQmVDVFlMT2xmWXZVX0Q5Q2N6S1JobC1mNzVmNjZ6M1diU0ozZ1hWSHVzJmNzPTFhZWM2OTQxOTM1ODcwNzNjYjNjM2MzYzEzYzkzNzQ3M19yaDM=",
        nameInCommerceTool: "Grubhub",
        name: "Grubhub",
        logo: "https://static.tacdn.com/img2/branding/hotels/grubhub_05.11.2022.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://www.jerseymikes.com/menu",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Lunch for the crew&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4655811-r629889547-Jersey_Mike_s_Subs-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great food - good service&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4655811-r626603375-Jersey_Mike_s_Subs-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d2253794-Reviews-The_Rub_Bar_B_Que_Catering-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/b6/ca/0a/the-rub-bar-b-que-catering.jpg",
    heroImgRawHeight: 413,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 2253794,
    name: "The Rub Bar-B-Que & Catering",
    averageRating: 3.5,
    userReviewCount: 64,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Barbecue"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: false,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Good Food&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2253794-r882957477-The_Rub_Bar_B_Que_Catering-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great food!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d2253794-r820894299-The_Rub_Bar_B_Que_Catering-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d3730939-Reviews-Asian_Pearl-Olathe_Kansas",
    heroImgUrl: "",
    heroImgRawHeight: 0,
    heroImgRawWidth: 0,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 3730939,
    name: "Asian Pearl",
    averageRating: 4.5,
    userReviewCount: 29,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Chinese", "Asian"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: {
        url: "cW92Xy9Db21tZXJjZT9wPUdydWJodWImc3JjPTEzMTM5OTY3MSZnZW89MzczMDkzOSZmcm9tPWRhdGEmYXJlYT1yZXNlcnZhdGlvbl9idXR0b24mc2xvdD0xJm1hdGNoSUQ9MSZvb3M9MCZjbnQ9MSZzaWxvPTI1NzY4JmJ1Y2tldD04NTI1MDgmbnJhbms9MSZjcmFuaz0xJmNsdD1SJnR0eXBlPVJlc3RhdXJhbnQmdG09MjY2ODU5MTAxJm1hbmFnZWQ9ZmFsc2UmY2FwcGVkPWZhbHNlJmdvc294PUktQURsZzd3WThscUVxOTJoR09DUEg5eXhLYW80Zm5KdG9ZZGQ1VExjdG9DVksyRWFxY0NpOXJPTXJVQ3lFYnlWd3lqdWVqdTloNDVIU2EyM1gxVGZiNk5XNDBEMnFzRlJEOGMyMC1TYWY0JmNzPTE1NGNiNDM2NzAzMDAwYWMyMWY0YWE1OWJkMjk4NmM0Nl83WWI=",
        nameInCommerceTool: "Grubhub",
        name: "Grubhub",
        logo: "https://static.tacdn.com/img2/branding/hotels/grubhub_05.11.2022.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl:
      "https://f78da2c195405a71d70f-4c126c04436e65ad571024dae88cb322.ssl.cf1.rackcdn.com/636867988795396453+AsianPearl_CateringMenu.pdf",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;My favorite <b>Asian food</b> in KC metro&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d3730939-r828882495-Asian_Pearl-Olathe_Kansas.html",
        },
        {
          reviewText:
            "&#x201c;Great Lunch, Relaxing Atmosphere Friendly...&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d3730939-r842981325-Asian_Pearl-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d10477763-Reviews-Austins_Bar_and_Grill-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/0e/1a/29/94/big-bar-tvs.jpg",
    heroImgRawHeight: 733,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 10477763,
    name: "Austins Bar and Grill",
    averageRating: 4,
    userReviewCount: 41,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["American", "Bar"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: {
        url: "OHJKXy9Db21tZXJjZT9wPURlbGl2ZXJ5X0Nob3dOb3cmc3JjPTE4Mzc5MDUxOCZnZW89MTA0Nzc3NjMmZnJvbT1kYXRhJmFyZWE9cmVzZXJ2YXRpb25fYnV0dG9uJnNsb3Q9MSZtYXRjaElEPTEmb29zPTAmY250PTEmc2lsbz0zODA2MCZidWNrZXQ9OTM0OTEwJm5yYW5rPTEmY3Jhbms9MSZjbHQ9UiZ0dHlwZT1SZXN0YXVyYW50JnRtPTI2Njg1OTEwMSZtYW5hZ2VkPWZhbHNlJmNhcHBlZD1mYWxzZSZnb3NveD02RTRraGgwSHROWEFMMGVwcS1KdUJKaTlIdTRLd1prQmNUWWFQQUtQY3Z5elJ6Si1tZ3BBYVAwSVVxQzQ0YnViTkdpOUk2bnVCUG1YbXVuVDJGN1kyYnVjSFctUllybU56RExEOXN2eHpYUSZjcz0xZDRkZWRlN2ZkY2JiNDlhNDcyYTE4ZTg0YTdkNmNkMGNfWmdM",
        nameInCommerceTool: "Delivery_ChowNow",
        name: "ChowNow",
        logo: "https://static.tacdn.com/img2/branding/hotels/chownow_v2_05.11.2020.png",
        id: null,
        bookable: false,
        lockable: false,
        racable: false,
        pickerOptions: null,
        disclaimerText: "",
        headerText: "Get food delivered",
        subText: "",
        buttonText: "Order online",
        trackingEvent: "order_online_click",
        seeAllRestaurantsUrl: "/Restaurants-g38954-Olathe_Kansas.html",
        specialOfferText: null,
      },
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: "https://austinsbarandgrill.com/menu/",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText:
            "&#x201c;The place is definitely a <b>sports bar</b> that serves food.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d10477763-r860489640-Austins_Bar_and_Grill-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Fun Time&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d10477763-r860489640-Austins_Bar_and_Grill-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d8069634-Reviews-Crazy_Good_Eats_Barbeque-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/69/81/48/kc-original-and-sweet.jpg",
    heroImgRawHeight: 393,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 8069634,
    name: "Crazy Good Eats Barbeque",
    averageRating: 4,
    userReviewCount: 58,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Barbecue", "American"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl:
      "https://crazygoodeats.com/wp-content/uploads/2020/12/CGE-Restaurant-Menu-11.16.20.pdf",
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Best burnt ends!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d8069634-r659280845-Crazy_Good_Eats_Barbeque-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Great BBQ!&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d8069634-r626603503-Crazy_Good_Eats_Barbeque-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
  {
    restaurantsId:
      "Restaurant_Review-g38954-d4105018-Reviews-Olive_Garden_Italian_Restaurant-Olathe_Kansas",
    heroImgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/0f/57/c7/0f/enjoying-food-at-olive.jpg",
    heroImgRawHeight: 733,
    heroImgRawWidth: 550,
    squareImgUrl: "",
    squareImgRawLength: 0,
    locationId: 4105018,
    name: "Olive Garden Italian Restaurant",
    averageRating: 4,
    userReviewCount: 71,
    currentOpenStatusCategory: "OPEN",
    currentOpenStatusText: "Open Now",
    establishmentTypeAndCuisineTags: ["Italian"],
    priceTag: "$$ - $$$",
    offers: {
      slot1Offer: null,
      slot2Offer: null,
    },
    hasMenu: true,
    menuUrl: null,
    isDifferentGeo: false,
    parentGeoName: "Olathe",
    distanceTo: "",
    reviewSnippets: {
      reviewSnippetsList: [
        {
          reviewText: "&#x201c;Delicious as always.&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4105018-r864668180-Olive_Garden_Italian_Restaurant-Olathe_Kansas.html",
        },
        {
          reviewText: "&#x201c;Dinner Pickup&#x201d;",
          reviewUrl:
            "/ShowUserReviews-g38954-d4105018-r819956675-Olive_Garden_Italian_Restaurant-Olathe_Kansas.html",
        },
      ],
    },
    awardInfo: null,
    isLocalChefItem: false,
    isPremium: false,
    isStoryboardPublished: false,
    hasRestaurantSpecialOffer: false,
  },
];

function App() {
  // const [restaurants, setRestaurantData] = useState([]);
  // useEffect(() => {
  //   const locationIds = ["38954"]; //   LS : 44588, KC : 38815, Ola : 38954 Lenexa: 3497938
  //   const fetchData = async () => {
  //     try {
  //       const allData = await Promise.all(
  //         locationIds.map(async (locationId) => {
  //           const data = await fetchRestaurantData(locationId);
  //           return data;
  //         })
  //       );

  //       const mergedData = allData.flat();
  //       setRestaurantData(mergedData);

  //       console.log(mergedData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [openRows, setOpenRows] = useState([]);
  const handleRowToggle = (restaurantsId) => {
    if (openRows.includes(restaurantsId)) {
      setOpenRows(openRows.filter((rowId) => rowId !== restaurantsId));
    } else {
      setOpenRows([...openRows, restaurantsId]);
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 900, margin: "auto" }}
      style={{ marginBottom: 10, marginTop: 20 }}
    >
      <Table aria-label="collapsible table">
        <TableHead style={{ border: "unset" }}>
          <TableRow>
            <TableCell />
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Restaurant Name
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              City
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              RestaurantsId
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((data) => (
            <React.Fragment key={data.restaurantsId}>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleRowToggle(data.restaurantsId)}
                  >
                    {openRows.includes(data.restaurantsId) ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="right">
                  {data.currentOpenStatusText}
                </TableCell>
                <TableCell align="right">{data.parentGeoName}</TableCell>
                <TableCell align="center">{data.restaurantsId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
                >
                  <Collapse
                    in={openRows.includes(data.restaurantsId)}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box sx={{ margin: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Additional Information
                      </Typography>
                      <img
                        src={data.heroImgUrl}
                        alt={data.name}
                        height="auto"
                        width="250"
                      />
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    // <div>
    //   {dummyData.map((data) => (
    //     <div key={data.restaurantsId}>
    //       <img
    //         src={data.heroImgUrl}
    //         alt={data.name}
    //         height="auto"
    //         width="250"
    //       />
    //       <h3>{data.name}</h3>
    //       <p>Open Status: {data.currentOpenStatusText}</p>
    //       <p>Cuisine Tags: {data.establishmentTypeAndCuisineTags.join(", ")}</p>
    //       <p>Parent Geo Name: {data.parentGeoName}</p>
    //       <p>RestaurantsId: {data.restaurantsId}</p>
    //     </div>
    //   ))}
    // </div>

    // Dynamic Loading Resturant Search
    /**  
    <div className="App">
      {restaurants.length > 0 ? (
        <div>
          <h2>Restaurant Data</h2>
          {restaurants.map(
            ({
              restaurantsId,
              name,
              averageRating,
              priceTag,
              currentOpenStatusText,
              parentGeoName,
              userReviewCount,
            }) => (
              <div key={restaurantsId}>
                <h3>{name}</h3>
                <p>Rating: {averageRating}</p>
                <p>Price: {priceTag}</p>
                <p>Status: {currentOpenStatusText}</p>
                <p>Address: {parentGeoName}</p>
                <p>Review Count: {userReviewCount}</p>
                <p>restaurantsId: {restaurantsId}</p>
                <hr />
              </div>
            )
          )}
        </div>
      ) : (
        <p>No restaurant data available.</p>
      )}
    </div>
    */
  );
}
export default App;
