window.App = {
  apiUrl: "",
  apiEndpoints: {
    phonePeMerchantId: "GOMECHANICTEST",
    frontend_server: "kabeiricorp.com",
    frontend_serverWithProtocol: "https:\u002F\u002Fkabeiricorp.com",
    api_server: "gomechanic.app",
    api_get: "https:\u002F\u002Fgomechanic.app\u002Fapi\u002F",
    api_post: "https:\u002F\u002Fgomechanic.app\u002Fapi\u002F",
    dev_api: "https:\u002F\u002Fgomechanic.app\u002Fapi\u002F",
    api_workshop: "https:\u002F\u002Feapp.gomechanic.app\u002F",
    api_ML: "https:\u002F\u002Fleads.gomechanic.app\u002F",
    razorpay_key: "rzp_live_pzbsPvSznJ5bij",
    acc_razorpay_key: "rzp_live_LtUFD8KqG4ubmp",
    payStackKey: "pk_test_b8b18201500bfebce8d7fce0ab2b87e5d045ad3e",
    paytmKey: "uM4GJ@2Ls4cana#D",
    paytmMID: "TARGET27525097087873",
    paytmWebsite: "WEBSTAGING",
    paytmChannel: "WEB",
    paytmIndustry: "Retail",
    paytmClientId: "merchant-go-mechanic-uat",
    paytmClientSecret: "inPUs0XMYwRUgKeCfPv82ly6Vsyq74Bg",
    forceNigeria: undefined,
    forceMalaysia: undefined,
    accessories_url: "https:\u002F\u002Faccessories.gomechanic.app\u002F",
    api_bike: "https:\u002F\u002Fleads.gomechanic.app\u002F",
    gtm_id: "GTM-MP32Z3Z",
    accessories_gtm_id: "GTM-P88D3ST",
  },
  state: {
    city: {
      city_icon:
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcities\u002FNew York.png",
      contact_number: "8398970970",
      created_at: { date: 1568896809000 },
      id: 13,
      latitude: 30.7333,
      longitude: 76.7794,
      name: "New York",
      sequence_id: 10,
      sitemap_name: "chandigarh",
      updated_at: { date: 1593528686000 },
      website_icon:
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgm-retail-app\u002FCities\u002Fchandigarh.png",
    },
    cart: [],
    cardetails: { brand: null, model: null, fuel: null },
    accessoriesCarDetail: { brand: null, model: null, fuel: null, year: null },
    accessoriesCarBrand: {},
    accessoriesVehicleType: "Car",
    bikedetails: { brand: null, model: null, fuel: null },
    marketingHeaderText: "on",
    device: "DESKTOP",
    user: {},
    brand: null,
    serviceType: null,
    setMonsoonCatId: null,
    serviceWarranty: {},
    milesProductData: {},
    amcMilesData: null,
    isAmcUser: null,
    allCities: [],
    allBrands: [],
    popularBrands: [],
    footer: {
      aboutUs: [
        { link: "\u002Ffaq", name: "FAQs" },
        { link: "\u002Fcontact-us", name: "Contact Us" },
        { link: "\u002Fcareers", name: "Careers" },
        { link: "\u002Fterms", name: "Terms and Conditions" },
        { link: "\u002Fprivacy", name: "Privacy Policy" },
        { link: "\u002Fpartners", name: "KabeiriCorp Partners" },
        { link: "\u002Fstores", name: "Workshop Locator" },
        { link: "\u002Foffers", name: "Offers" },
        { link: "\u002Freviews", name: "Reviews" },
        {
          accessories: true,
          link: "\u002Freturn-policy",
          name: "Return Policy",
        },
        {
          accessories: true,
          link: "\u002Frefund",
          name: "Refund\u002FCancellation",
        },
        {
          accessories: true,
          link: "\u002Fshipping-charges",
          name: "Shipping Charges",
        },
        { link: "\u002Fdirectory", name: "Directory" },
      ],
      luxuryBrands: [
        { slug_id: "mercedes", name: "Mercedes", id: 26 },
        { slug_id: "bmw", name: "BMW", id: 20 },
        { slug_id: "audi", name: "Audi", id: 18 },
        { slug_id: "volvo", name: "Volvo", id: 30 },
        { slug_id: "mitsubishi", name: "Mitsubishi", id: 10 },
        { slug_id: "jaguar", name: "Jaguar", id: 22 },
        { slug_id: "porsche", name: "Porsche", id: 28 },
        { slug_id: "rolls-royce", name: "Rolls Royce", id: 29 },
        { slug_id: "ferrari", name: "Ferrari", id: 21 },
        { slug_id: "land-rover", name: "Land Rover", id: 24 },
      ],
      popularBrands: [
        { slug_id: "maruti-suzuki", name: "Maruti Suzuki", id: 9 },
        { slug_id: "hyundai", name: "Hyundai", id: 7 },
        { slug_id: "honda", name: "Honda", id: 6 },
        { slug_id: "toyota", name: "Toyota", id: 15 },
        { slug_id: "tata", name: "Tata", id: 14 },
        { slug_id: "mahindra", name: "Mahindra", id: 8 },
        { slug_id: "chevrolet", name: "Chevrolet", id: 1 },
        { slug_id: "fiat", name: "Fiat", id: 4 },
        { slug_id: "renault", name: "Renault", id: 12 },
        { slug_id: "kia", name: "Kia", id: 38 },
        { slug_id: "skoda", name: "Skoda", id: 13 },
        { slug_id: "volkswagen", name: "Volkswagen", id: 16 },
      ],
      servicesType: [
        { name: "Scheduled Services", slug: "car-repair" },
        { name: "AC Services", slug: "car-ac-repair" },
        { name: "Cleaning & Detailing", slug: "car-cleaning-service" },
        { name: "Lights & Fitments", slug: "car-lights-replacement" },
        { name: "Denting Painting", slug: "car-dent-paint" },
        { name: "Insurance Services", slug: "car-insurance" },
        { name: "Custom Repair", slug: "custom-repair" },
        { name: "Batteries", slug: "car-battery-replacement" },
        { name: "Tyres", slug: "car-tyre-replacement" },
        { name: "Detailing Services", slug: "car-detailing" },
        { name: "Windshields & Glass", slug: "windshield-glass-replacement" },
      ],
    },
    accFooter: [],
    policy: {},
    home: {
      cityWiseCarousel: {
        chandigarh: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Fchandrayaan-wallet-web.webp",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002Fdefault.pngis_delete",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002Fdefault.pngis_delete",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002Findianewwebsite13prob02.jpg?v=1692947726.345555",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Fac-3.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Fcoats-4.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Ftyre-5.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Fmiles-6.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Fbattery-7.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Fcustom-8.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Fwindshield-lights-9.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F01082023\u002Ftowinng-10.png",
        ],
      },
      images: [
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FWebsite\u002Fmob-1.jpg",
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F1.jpg?version=1603872634.041465",
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F2.jpg?version=1603176857.045026",
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F3.jpg?version=1603176862.054001",
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F4.jpg?version=1603176868.748763",
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F5.jpg?version=1603176873.582355",
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F6.jpg?version=1603176891.844695",
        "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002F7.jpg?version=1603176896.383294",
      ],
      monsoonData: {
        data: [
          {
            deeplink:
              "https:\u002F\u002Fkabeiricorp.com\u002Fhigh-performance-car-ac-service\u002F?pagename=SERVICE_DETAIL_PAGE&category_id=13&id=4110",
            weather_service_name: "AC Service & Repair",
            weather_service_url:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002Findianewperformance_banner5prob00.jpg?version=1675770258.93823",
          },
          {
            deeplink:
              "https:\u002F\u002Fkabeiricorp.com\u002Fcar-interior-spa\u002F?pagename=SERVICE_DETAIL_PAGE&category_id=34&id=221",
            weather_service_name: "Car Interior Spa",
            weather_service_url:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002Findianewperformance_banner5prob01.jpg?version=1675770565.993028",
          },
          {
            deeplink:
              "https:\u002F\u002Fkabeiricorp.com\u002F?pagename=AMC_FRAGMENT",
            weather_service_name: "Miles Membership",
            weather_service_url:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002Findianewperformance_banner5prob02.jpg?version=1675770356.146875",
          },
          {
            deeplink:
              "https:\u002F\u002Fkabeiricorp.com\u002Fcar-meguiar-ceramic-coating\u002F?pagename=SERVICE_DETAIL_PAGE&category_id=37&id=7173",
            weather_service_name: "Ceramic Coating",
            weather_service_url:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fretail-carousel\u002Findianewperformance_banner5prob03.jpg?version=1675770495.354573",
          },
        ],
        subtitle: "",
        title: "KabeiriCorp Summer Spice",
      },
      popularService: [
        {
          heading: "Genuine Parts",
          image:
            "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FWebsite\u002Fpath_52.png",
        },
        {
          heading: "Warranty",
          image:
            "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FWebsite\u002Fgroup_224.png",
        },
        {
          heading: "Affordable",
          image:
            "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FWebsite\u002Fgroup_251.png",
        },
        {
          heading: "Pickup & Drop",
          image:
            "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FWebsite\u002Fmaps_and_flags.png",
        },
      ],
      ratingItems: [
        { subtitle: "Cars Serviced", title: "2 million+" },
        { subtitle: "Happy Customers", title: "1 million+" },
        { subtitle: "Average Rating", title: "4.7" },
        { subtitle: "Touch Points In India", title: "800+" },
      ],
      youtubeads: {
        banner: [
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob0.jpg?version=1612605821.078668",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob1.jpg?version=1612605827.506067",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob2.jpg?version=1612605831.154942",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob3.jpg?version=1612605837.720266",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob4.jpg?version=1612605841.863712",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob5.jpg?version=1612605846.403962",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob6.jpg?version=1612605853.074843",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob7.jpg?version=1612605866.190085",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob8.jpg?version=1612605909.862564",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob9.jpg?version=1612605913.030139",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob10.jpg?version=1612605918.96397",
          "https:\u002F\u002Fretail-carousel.s3.ap-south-1.amazonaws.com\u002Fwebsite1prob11.jpg?version=1612605923.452963",
        ],
        level1: [
          "https:\u002F\u002Fwebsiteasset.s3.ap-south-1.amazonaws.com\u002FNew+Website\u002Fcomponents\u002FyouTubeAds\u002Fapp-image.jpg",
        ],
        reviews: [
          {
            content:
              "My 2018 Honda CRV was having trouble while running on bumpy roads. After Looking at this issue I decided to download the KabeiriCorp App. The App was very swift and easy to navigate and I was able to find the right service for the trouble I was facing in my car!",
            customer_name: " Gaurav Khanna",
            garage: "Janta Garage, Gurgaon",
            heading: "Very Swift App",
            source: "Google",
          },
          {
            content:
              "I decided to download the KabeiriCorp App on a friends suggestion to book Standard Service for my 2020 Kia Seltos. The description clearly explains each and every inclusion of the services listed on the App. Moreover estimated cost and service time of your chosen car is also shared very accurately.",
            customer_name: "Ridhi Dalal",
            garage: "Motorades Sec-56, Gurgaon",
            heading: "All Details Shared First Hand",
            source: "Twitter",
          },
          {
            content:
              "I downloaded the KabeiriCorp App after striking through an Ad on Instagram, I wanted an AC gas top-up for my Hyundai Grand i-10. The response time on the App was very quick and i was easily able to select the AC gas top up service and got the booking confirmed in a jiffy!",
            customer_name: "Harsh Singh",
            garage: "Janta Garage, Gurgaon",
            heading: "Responsive App",
            source: "Facebook",
          },
          {
            content:
              "I was pretty sceptical about trying a third party car-service provider. Took a chance to try the KabeiriCorp App and I must say that the overall experience from finding the right service for my 2019 Tata Harrier to booking the service and receiving confirmation was seemless!",
            customer_name: "Karan Mahajan",
            garage: "Motorades Sec-56, Gurgaon",
            heading: "Great Experience",
            source: "Google",
          },
          {
            content:
              "Downloaded the KabeiriCorp App after a colleague recommended me to give it a try. Booked a Deep Cleaning Service for my 2016 Toyota Fortuner. The App’s design provided me with an accurate estimate for my car specifically and also stated the estimate time taken for each of the service!",
            customer_name: "Vani Gautam",
            garage: "Janta Garage, Gurgaon",
            heading: "Accurate Details",
            source: "Twitter",
          },
          {
            content:
              "KabeiriCorp App has been an indispensable part of all of my car’s journey. The App is not only smooth and detailed but also very responsive to the slightest of queries. Having the experience of using the KabeiriCorp App, I would definitely recommend everyone to give it a shot once!",
            customer_name: "Lakshay Verma",
            garage: "Motorades Sec-56, Gurgaon",
            heading: "Highly Recommended",
            source: "Facebook",
          },
        ],
        title: "Services that make your Car Winter Ready",
      },
    },
    serviceGuide: {
      bikeEnquiry: [
        {
          heading: "Services Offered",
          list: [
            "Scheduled bike services",
            "Denting and painting services",
            "Customer specific custom job",
          ],
          subHeading:
            "With KabeiriCorp, you can choose from a wide assortment of bike services in India . Apart from periodic bike servicing, we also offer:",
        },
        {
          heading: "Multi Payment Options",
          list: [
            "Instamojo payment link",
            "Paytm wallet",
            "Bank Account Transfer",
            "Payment with cash",
          ],
          subHeading:
            "We offer various payment modes at every KabeiriCorp workshop in India.",
        },
        {
          heading: "Services At your Convenience",
          subHeading:
            "You get FREE pick-up and drop service for your bike at your location in India as per your selected time slot. However, you can also bring in your bike for the service at the nearest KabeiriCorp workshop.",
        },
      ],
      "car-ac-repair": [
        {
          heading: "KabeiriCorp car AC service",
          list: [
            "Regular AC maintenance helps clean and disinfect the system and keeps the AC in good working order.",
            "The compressor is the most important component of the car AC system. Routine maintenance and proper lubrication reduce the risk of premature compressor failure.",
            "General AC maintenance includes checking the cabin air filter which traps pollen, bacteria, dust, and exhaust fumes preventing headaches, allergic reactions, or breathing problems.",
          ],
          subHeading: "",
        },
        {
          heading: "{{$carBrandModelDetails}} AC services offered",
          listWithHeading: [
            {
              heading: "AC Gas Recharge: ",
              subHeading:
                "AC gas top up and\u002For replacement using R134a refrigerant and AC gas charging machine.",
            },
            {
              heading: "AC Condenser Cleaning: ",
              subHeading:
                "AC Condenser cleaning using a high-pressure jet washer and chemical reagents.",
            },
            {
              heading: "AC Cooling Coil\u002FEvaporator Cleaning: ",
              subHeading:
                "AC cooling coil and evaporator cleaning using specialised cleaning solvent.",
            },
            {
              heading: "AC Filter Service: ",
              subHeading:
                " AC filter (HVAC) cleaning or replacement (as per manufacturer recommendation).",
            },
            {
              heading: "AC Diagnosis & Check-up: ",
              subHeading:
                "AC high-pressure and low-pressure leakage testing\u002Fdetection using AC gas charging machine.",
            },
            {
              heading: "AC Vents & Dashboard Cleaning: ",
              subHeading:
                "AC vent and blower cleaning using non-tacky dashboard polishing solvent.",
            },
          ],
          subHeading: " You can choose from our best AC services:",
        },
        {
          heading: "Industry-rated top-notch equipment",
          subHeading:
            "We employ only the cutting edge in industry standard automotive AC service equipment. From automatic AC gas recharging apparatus, AC gas leak detection tools, refrigerant recovery tools, flushing equipment and other specialised tools specific to your {{$carBrandModelDetails}}. Visit the nearest KabeiriCorp workshop in {{$metaCity}}.",
        },
        {
          heading: "Warranty on car AC services",
          subHeading:
            "When you choose KabeiriCorp, you get the KabeiriCorp Advantage. Your car service is assured under our 1000kms\u002F1 month warranty policy anywhere in {{$metaCity}}. Now, book with confidence.",
        },
      ],
      "car-accessories": [
        {
          heading: "Car Accessories in {{$metaCity}}",
          subHeading:
            "Car Accessories offered by KabeiriCorp {{$metaCity}} enable you to have a better driving experience in your {{$carBrandModelDetails}} by making your drive comfortable & convenient. You can choose from a wide range of car accessories with KabeiriCorp {{$metaCity}}.",
        },
        {
          heading: "Car Accessories Available:",
          list: [
            "KabeiriCorp Car Air Purifier",
            "KabeiriCorp Wireless Charging UV Box",
            "KabeiriCorp Super Vacuum Cleaner",
            "KabeiriCorp Handy Tyre inflator",
          ],
          subHeading:
            "We offer a wide range of car accessories for all cars of any make and model at KabeiriCorp {{$metaCity}}. These include:",
        },
        {
          heading: "Car Accessories Made Smart",
          subHeading:
            "All the KabeiriCorp car accessories available in {{$metaCity}} are specially designed to make your car driving experience, a better one. These accessories include a variety of products out of which some products help you maintain your car while the others ensure a clean and healthy drive.",
        },
        {
          heading: "Warranty on Car Accessories",
          subHeading:
            "All the car accessories at KabeiriCorp {{$metaCity}} come with a 1-year warranty. No questions asked!",
        },
      ],
      "car-battery-replacement": [
        {
          heading: "KabeiriCorp Battery services",
          list: [
            "A car battery is responsible for powering the car’s ignition, fuel system, the engine, and all the electronic components of a car when both stationary and in motion.",
            "Regular car battery maintenance or battery replacement is required to ensure the proper functioning of car electronics.",
            "A typical car battery can last you upto 4 years, but this does depend on any additional accessory fitted to the car.",
          ],
          subHeading:
            "KabeiriCorp is your go-to place for 100% genuine batteries with original manufacturer warranty:",
        },
        {
          heading: "{{$carBrandModelDetails}} Battery services offered",
          listWithHeading: [
            {
              heading: "Doorstep Battery Replacement: ",
              subHeading:
                "Buy brand new car battery from leading battery manufacturers like Amaron, Exide, SF-Sonic, Luminous etc.",
            },
            {
              heading: "Battery Exchange: ",
              subHeading:
                "Exchange your old car battery and get the best discount on a new car battery purchase.",
            },
            {
              heading: "Battery Health Checkup: ",
              subHeading:
                "We provide car battery health checkup service to ascertain the usable life of your car battery",
            },
            {
              heading: "Battery Recharging Service: ",
              subHeading:
                "Avail {{$carBrandModelDetails}} battery re-charging service, Volts\u002FAmperage and water\u002Facid level check-up.",
            },
          ],
          subHeading: "You can choose from a variety of battery services: ",
        },
        {
          heading: "Free Doorstep Battery Replacement",
          subHeading:
            "Get FREE doorstep battery replacement from the convenience of your home. We stock only branded car batteries from reputed battery brands like Exide, SF-Sonic, Okaya, Luminous etc. Safe and efficient car battery recharging stations to ensure the best service in {{$metaCity}}.",
        },
        {
          heading: "Manufacturer Warranty on Car Battery",
          subHeading:
            "When you choose KabeiriCorp, you get the KabeiriCorp Advantage. Avail manufacturer warranty on new car battery purchase redeemable nation-wide and anywhere across {{$metaCity}}.",
        },
      ],
      "car-cleaning-service": [
        {
          heading: "Car care services in {{$metaCity}}",
          list: [
            "Car cleaning service is the best way to remove all the dust, dirt, mud and other unsightly build-ups from your car.",
            "Washing and waxing will help protect the delicate paintwork on your car. Regular car care will go a long way in keeping your car as new as day one.",
            "Interior car care is a crucial service that de-contaminates and sanitizes the interior, upholstery, seats, carpet etc.",
          ],
          subHeading: "",
        },
        {
          heading: "{{$carBrandModelDetailsWithCar}} care services offered",
          list: [
            "Interior and exterior cleaning services",
            "Rubbing and polishing services",
            "Anti-rust underbody treatment",
            "Ceramic and Teflon coating",
            "Paint Protection Film (PPF)",
            "Tyre dressing and alloy cleaning",
          ],
          subHeading:
            "Choose from a category of finest car services, available at your nearest KabeiriCorp workshop in {{$metaCity}}.",
        },
        {
          heading: "Premium car care products",
          subHeading:
            "Every KabeiriCorp workshop across {{$metaCity}} uses the highest quality, specially formulated, PH neutral car care products from global brands like 3M, Würth and Xxtra Armor to give your {{$carBrandModelDetails}} the best possible shine.",
        },
        {
          heading: "Specialised car care equipment",
          subHeading:
            "Professional {{$carBrandModelDetails}} cleaning and detailing require speciality tools and machines. That is why every KabeiriCorp workshop in {{$metaCity}} is equipped with Industry grade buffing and polishing machines, automatic pressure washers and other car care tools along with special car care products are put to use to get the best results.",
        },
      ],
      "car-dent-paint": [
        {
          heading:
            "{{$carBrandModelDetails}} Denting Painting service in {{$metaCity}}",
          list: [
            "A cost-effective way to maintain a vehicle for prolonged use",
            "Ignoring paint damage can cause rusting problems.",
            "A car with dents and scratches holds less value in the resale market.",
          ],
          subHeading:
            "A dent here, a ding there. Driving in India is no less than a challenge. That is why we offer the best denting\u002Fpainting services in {{$metaCity}}",
        },
        {
          heading: "Denting Painting services offered",
          list: [
            "Per panel denting and painting service",
            "Full body denting and painting service",
            "Fibre and plastic dent removal",
            "Custom denting and painting repairs",
          ],
          subHeading:
            "We offer denting\u002Fpainting services for all cars of any make and model at your nearest KabeiriCorp auto body workshop in {{$metaCity}}:",
        },
        {
          heading: "Highly equipped auto-body workshop",
          listWithHeading: [
            {
              heading:
                "Specialised {{$carBrandModelDetails}} Auto-body Workshop:",
              subHeading:
                "Precision denting and painting equipment and hermetically sealed paint booth for the best results.",
            },
            {
              heading: "Nippon Paint\u002F Grade-A Primer:",
              subHeading:
                "Premium Nippon paint with Grade-A primer offering 100% colour match for a showroom new finish.",
            },
            {
              heading: "2 Year Warranty On Paint:",
              subHeading:
                "We offer a 2-year unconditional warranty clause on paint across every KabeiriCorp workshop.",
            },
          ],
          subHeading: "",
        },
        {
          heading: "Warranty on Denting\u002FPainting services",
          subHeading:
            "With our denting\u002Fpainting services, we offer a 2-year warranty clause across every KabeiriCorp workshop in {{$metaCity}}.",
        },
      ],
      "car-detailing": [
        {
          heading: "Car Detailing Services in {{$metaCity}}",
          subHeading:
            "Car Detailing Services offered by KabeiriCorp {{$metaCity}} enable you to avail detailing and coating services for your {{$carBrandModelDetails}} without facing any hassle. We at KabeiriCorp {{$metaCity}} use only the best products in the industry for your {{$carBrandModelDetails}} detailing and coating services.",
        },
        {
          heading: "Detailing Service Inclusions:",
          list: [
            "PPF- Paint Protection Film",
            "Ceramic Coating",
            "Teflon Coating",
            "Silencer Coating",
            "Anti-Rust Underbody Coating",
          ],
          subHeading:
            "We offer Detailing Services for all cars of any make and model at KabeiriCorp {{$metaCity}}. The detailing services include:",
        },
        {
          heading: "Specialised Tools & Equipment",
          subHeading:
            "All the KabeiriCorp workshops across {{$metaCity}} have specialised tools, modern equipment and best-in-class detailing products which ensure that the detailing or coating on your {{$carBrandModelDetails}} is done well and delivers the best performance. Our trained mechanics also ensure that the detailing and coating are done perfectly before delivering your vehicle.",
        },
        {
          heading: "Warranty on Detailing Services",
          subHeading:
            "All the detailing services at KabeiriCorp {{$metaCity}} come with a warranty. However, the warranty period may vary with the service you choose.",
        },
      ],
      "car-insurance": [
        {
          heading:
            "{{$carBrandModelDetails}} Car insurance repairs in {{$metaCity}}",
          listWithHeading: [
            {
              heading: "Claim Assistance:",
              subHeading:
                "With corporate tie-ups with all insurance companies, we help you speed-up the insurance claim process making the experience that simple and easy.",
            },
            {
              heading: "Huge Savings:",
              subHeading:
                "Pay upto 50% less and save upto 25% on insurance car repairs compared to a dealership garage. Best prices in {{$metaCity}} guaranteed!",
            },
            {
              heading: "Instant Quotation:",
              subHeading:
                "Fill in your vehicle details and get personalised insurance repair quotes for your {{$carBrandModelDetails}} repair in just 2 hours.",
            },
            {
              heading: "Inclusive Warranty:",
              subHeading:
                "Get inclusive warranty on service and spares anywhere in {{$metaCity}} with 2 years of unconditional warranty on paint with KabeiriCorp.",
            },
            {
              heading: "Genuine Spares:",
              subHeading:
                "Only 100% genuine OEM and OES spares and high-quality consumables are used in your car. Nothing but the best.",
            },
          ],
          subHeading: "",
        },
        {
          heading: "Insurance Repair services offered",
          list: [
            "Doorstep Windshield Replacement",
            "24x7 Roadside Assistance & Towing",
            "Free Doorstep Pick-up and Drop",
          ],
          subHeading:
            "Get the best insurance repairs for your car in {{$metaCity}}:",
        },
        {
          heading: "Network Warranty Across {{$metaCity}}",
          subHeading:
            "Wherever you go, our warranty goes with you. Get covered with our unrestricted city-wide warranty policy that extends across all KabeiriCorp garages in {{$metaCity}}",
        },
        {
          heading: "Highly Equipped Workshops",
          subHeading:
            "Every KabeiriCorp workshop is equipped with speciality dent pulling tools, precision paint booths and industry qualified mechanics who are trained to operate automotive equipment.",
        },
      ],
      "car-lights-replacement": [
        {
          heading: "Light & Fitment Services in {{$metaCity}}",
          subHeading:
            "Headlight Replacement and Taillight Replacement Services offered by KabeiriCorp {{$metaCity}} enable you to get your {{$carDetails}} headlights and taillights replaced without facing any hassle. Get OEM\u002FOES developed headlight\u002Ftaillight assemblies for your {{$carDetails}} with KabeiriCorp {{$metaCity}}.",
        },
        {
          heading: "Light & Fitment Services Inclusions:",
          list: [
            "Headlight Replacement Service",
            "Tail Light Replacement Service",
            "Horn Replacement Service",
          ],
          subHeading:
            "We offer light replacement services for all cars of any make and model at KabeiriCorp {{$metaCity}}. The light replacement service includes:",
        },
        {
          heading: "Specialised Tools & Equipment",
          subHeading:
            "All the KabeiriCorp workshops across {{$metaCity}} have specialised tools and modern equipment which ensure that the headlight, taillight or the horn on your {{$carDetails}} is fitted well in place and functions completely. Our trained mechanics also ensure that the front or the rear bumper is fitted back well if they need to be opened to carry out the light replacement service.",
        },
        {
          heading: "Warranty on Light & Fitment Services",
          subHeading:
            "All the headlight\u002Ftaillight replacement services at KabeiriCorp {{$metaCity}} come with a 1-month warranty on fitting.",
        },
      ],
      "car-repair": [
        {
          heading: "Scheduled car service in {{$metaCity}}",
          list: [
            "Periodic car servicing is essential for a smooth and trouble-free car ownership experience.",
            "Crucial components like brake pads, tyres, the engine oil have a finite life-span and need replacement periodically.",
            "You can lower your cost of ownership by spending fair on routine maintenance, saving you a lot of time and money.",
            "A well-cared car will run and look better in the long run and always hold a higher value.",
          ],
          subHeading: "",
        },
        {
          heading: "{{$carBrandModelDetailsWithCar}}  services offered",
          listWithHeading: [
            {
              heading: "Basic Car Service:",
              subHeading:
                "all the bare essential services to keep your car up and running.",
            },
            {
              heading: "Standard Car Service:",
              subHeading:
                "the most popular service package. Benefits of the basic scheme with additional services",
            },
            {
              heading: "Comprehensive Car Service:",
              subHeading:
                "KabeiriCorp's signature package with bumper-to-bumper car servicing",
            },
          ],
          subHeading: "You can choose from our top 3 service packages:",
        },
        {
          heading: "Industry-rated top-notch equipment",
          subHeading:
            "At every KabeiriCorp workshop in {{$metaCity}} We employ only the cutting edge in industry standard car service equipment. From automatic AC gas recharging apparatus, laser automated wheel balancing\u002Falignment machine, OBD2 diagnostic scanner, ECU programming devices and specialised tools specific to your car.",
        },
        {
          heading: "Warranty on car services",
          subHeading:
            "When you choose KabeiriCorp, you get the KabeiriCorp Advantage. Your {{$carBrandModelDetails}} service is assured under our 1000kms\u002F1 month warranty policy anywhere in {{$metaCity}}. Now, book with confidence.",
        },
      ],
      "car-service-center": [
        {
          heading:
            "{{$carBrandModelDetails}} Wheel care service in {{$metaCity}}",
          list: [
            "Regular wheel care reduces rolling resistance and helps increase fuel efficiency.",
            "Car tyres have a limited life-span. Wheel care services maintain and preserve tyre life.",
            "Improves vehicle stability and contributes to a smoother driving experience",
            "Checking on periodic wheel maintenance prevents unexpected car issue or breakdowns",
          ],
          subHeading: "",
        },
        {
          heading: "Wheel and rim care services offered",
          listWithHeading: [
            {
              heading: "Tyre Rotation:",
              subHeading:
                "Each tyre is removed from the vehicle and moved to a different position as per the rotation pattern.",
            },
            {
              heading: "Wheel Alignment:",
              subHeading:
                "Laser Wheel Alignment that corrects the toe, thrust camber and caster adjustment of your car",
            },
            {
              heading: "Wheel Balancing:",
              subHeading:
                "Automated Wheel Balancing service includes weight correction to extract manufacturer tolerances",
            },
          ],
          subHeading:
            "We have various wheel care services available at your nearest KabeiriCorp workshop in {{$metaCity}}:",
        },
        {
          heading: "{{$carBrandModelDetails}} Precision wheel care equipment",
          subHeading:
            "Every KabeiriCorp workshop in {{$metaCity}} employs only the best, industry-grade advanced 3D wheel alignment machinery and heavy-duty wheel balancing equipment that detects wheel uniformity, tyre and rim runout.",
        },
        {
          heading: "Wheel care service for safety",
          subHeading:
            "The tyres are the only thing keeping your car on the road. A thrown-off alignment, unbalanced wheels, under-inflated can significantly alter the driving dynamics of the car. The slightest of misalignment can cause a bumpy ride, uneven tyre-tread wear or even steering and suspension issues.",
        },
      ],
      "car-suspension-fitment": [
        {
          heading: "Suspension & Fitments Services Offered",
          subHeading:
            "KabeiriCorp in {{$city}} provides a bunch of Suspension & Fitment Services for your {{$carBrandModelDetails}} to make sure that your car remains in the best condition.",
        },
        {
          heading: "Suspension & Fitments Services Inclusions",
          list: [
            "Front Shock Absorber Replacement Service",
            "Rear Shock Absorber Replacement Service",
            "Mud Flaps Service",
            "Horn Replacement Service",
            "EPS Module Repair",
            "Steering Rack Repair",
            "Engine Mounting Replacement",
            "Fuel Pump Replacement",
            "Starter Motor Repair",
          ],
          subHeading: "The Suspension & Fitments Services include:",
        },
        {
          heading: "Common Problems with {{$carBrandModelDetails}}",
          listWithHeading: [
            {
              heading: "Faulty Steering System",
              subHeading:
                "A faulty steering system can increase the chances of major accidents, malfunctions and other mishappenings. The symptoms are the stiff steering wheel, loose steering wheel, noises while turning, steering wheel vibration while cornering and many more. If you see any of the symptoms mentioned above, visit the nearby car service centre.",
            },
            {
              heading: "Suspension Issues",
              subHeading:
                "Are you feeling a bumpy ride in your {{$carBrandModelDetails}} while travelling or realising the wheel alignment is wrong? If yes, then the poor suspension can be an issue. Suspension is one of the most important components in the car. It helps keep your car stable and makes your travel smooth and comfortable. If you feel a bump while driving or realise that one side of the car is bending more than the other, then visit the car service centre for your car service.",
            },
            {
              heading: "Bad Horn",
              subHeading:
                "While using the car regularly, a faulty horn can be a big problem. Horn issues can arise because of a faulty relay or a wiring malfunctioning. Visit the car workshop immediately for the Horn Replacement.",
            },
          ],
          subHeading: "",
        },
        {
          heading:
            "{{$carBrandModelDetails}} Suspension & Fitments Services Explained",
          listWithHeading: [
            {
              heading: "Shock Absorber Replacement",
              subHeading:
                "Are you feeling noisy suspension? KabeiriCorp uses the best car shocker, so you won’t feel bumpy rides anymore. KabeiriCorp recommend a Front Shock Absorber Replacement Service & Rear Shock Absorber Replacement Service. Under this service, we include Shocker Strut\u002FDamper OES Replacement, Shocker Mount, and Shocker Coil Spring (Additional Charges).",
            },
            {
              heading: "Mud Flaps",
              subHeading:
                "We at KabeiriCorp offer 100% Genuine OEM\u002FOES spare parts for your {{$carBrandModelDetails}} and offer a 1 Month Warranty on Fitting. Book your appointment at any KabeiriCorp car workshop and save 40%.",
            },
            {
              heading: "Horn Replacement",
              subHeading:
                "Get the Horn Replacement done for your {{$carBrandModelDetails}} at a 40% lesser price than other local car garages. Our technicians check Faulty Relay\u002FCoupler, Wiring Malfunctioning, and much more.",
            },
            {
              heading: "EPS Module Repair",
              subHeading:
                "KabeiriCorp offers EPS Module Repair to give you a better steer handling experience in your {{$carBrandModelDetails}}. We, at KabeiriCorp, recommend this car service in the case of Hard Steering and EPS Light On. This service includes a Steering Rack, Steering Motor (Additional if Needed) and Doorstep Free Pickup & Drop.",
            },
            {
              heading: "Steering Rack Repair",
              subHeading:
                "KabeiriCorp makes sure to service your {{$carBrandModelDetails}} steering and give you a quality ride. We at KabeiriCorp, recommend this service in the case of Hard Steering and Steering Fluid Leakage. Under this service, we include Steering Rack Repair, Steering Bush Kit, Lathe Work, Wheel Alignment Included, Steering Rod Resurfacing, Calibration and Pinion Cost (Additional, If Needed) and Doorstep Free Pickup & Drop.",
            },
          ],
          subHeading: "",
        },
        {
          heading:
            "Post Car Suspension & Fitments Service Tips For {{$carBrandModelDetails}}",
          listWithHeading: [
            {
              heading: "Inspect the Shocker & Strut",
              subHeading:
                "After getting your car suspension repaired, the best way to keep your suspension in good condition is to check the Shocker or Strut. If you feel the Shocker or Strut is leaking, then it is important to get it replaced at your nearest car service centre.",
            },
            {
              heading: "Inspect Wheel Alignment",
              subHeading:
                "Checking the wheel alignment is the most important thing to do after the suspension repair. If the wheels are not aligned, it can put a lot of force on the suspension.",
            },
            {
              heading: "Check the Power Steering System",
              subHeading:
                "A Power Steering Vehicle needs a regular check-up, and its power steering fluid must be checked regularly. The owner has to make sure that it is always clean; otherwise, it will cause problems to the steering wheel, suspension and other components of the vehicle.",
            },
          ],
          subHeading: "",
        },
      ],
      "car-tyre-replacement": [
        {
          heading: "KabeiriCorp Tyre service",
          list: [
            "Car tyres are the only point of contact for your car with the road, therefore your need to make sure your car tyres are balanced and in perfect condition.",
            "Car tyres have a finite life span and should be replaced every 4 years or 40,000 kms, whichever comes earlier.",
            "Factors that can be indicators for tyre replacement are; uneven tread wear, cracks, cupping, bulges & bubbles and sidewall damage.",
          ],
          subHeading: "Why choose KabeiriCorp tyre services?",
        },
        {
          heading: "Tyre services offered",
          listWithHeading: [
            {
              heading: "Tyre Replacement\u002FPurchase: ",
              subHeading:
                "Buy {{$carBrandModelDetails}} tyres from leading brands like MRF, Michelin, Apollo, Bridgestone etc.",
            },
            {
              heading: "Tyre Fitting: ",
              subHeading:
                "Get complimentary tyre fitting with every new car tyre purchase with KabeiriCorp.",
            },
            {
              heading: "Tyre Rotation: ",
              subHeading:
                "Tyre Rotation ensure even wear and tear of your car tyres.",
            },
            {
              heading: "Wheel Balancing: ",
              subHeading:
                "Laser-assisted wheel balancing with precious counterweights.",
            },
            {
              heading: "Nitrogen Inflation: ",
              subHeading:
                "Nitrogen is proven to boost fuel mileage by upto 10%.",
            },
          ],
          subHeading: "You can choose from various tyre services:",
        },
        {
          heading: "Industry-rated top-notch equipment",
          subHeading:
            "We employ only the cutting edge technology in tyre replacement, wheel balancing\u002Falignment and tyre rotation service. From specialised tyre replacement jigs, nitrogen gas inflators and other tools specific to your {{$carBrandModelDetails}}. Visit the nearest KabeiriCorp workshop in {{$metaCity}}",
        },
        {
          heading: "Dealership Warranty on Car Tyres",
          subHeading:
            "When you choose KabeiriCorp, you get the KabeiriCorp Advantage. Your new car tyres are covered under dealership warranty straight from the tyre manufacture anywhere in {{$metaCity}}. Now, book with confidence.",
        },
      ],
      "custom-repair": [
        {
          heading: "Custom Car Services in {{$metaCity}}",
          subHeading:
            "Squealing brakes? Electrical issues? Noisy suspension? Just tell us your requirements and get a call back within 2 hrs with a personalised quotation exclusively for your car at the best KabeiriCorp Workshops in {{$metaCity}}",
        },
        {
          heading: "Custom Car Services offered",
          list: [
            "Clutch plate replacement service",
            "Suspension repairs",
            "Custom electrical repairs",
            "Engine Overhauling",
            "Transmission\u002FGearbox repairs",
            "Steering system repairs",
          ],
          subHeading:
            "We offer a host of services for individual requirements at every KabeiriCorp workshop in {{$metaCity}}. Our services range from:",
        },
        {
          heading: "Industry-rated top notch equipment",
          subHeading:
            "At every KabeiriCorp workshop in {{$metaCity}}, we employ only the cutting edge in industry standard car service equipment. From automatic AC gas recharging apparatus, laser automated wheel balancing\u002Falignment machine, OBD2 diagnostic scanner, ECU programming devices and specialised tools specific to your car.",
        },
        {
          heading: "Warranty on car services",
          subHeading:
            "When you choose KabeiriCorp, you get the KabeiriCorp Advantage. Your {{$carBrandModelDetails}} service is assured under our 1000kms\u002F1 month warranty policy anywhere in {{$metaCity}}. Now, book with confidence.",
        },
      ],
      default: [
        {
          heading: "Services Offered",
          list: [
            "Scheduled car services",
            "Exterior and interior car care services",
            "Denting and painting services",
            "Wheel, rim and alloy care",
            "Customer specific custom job",
            "Cashless insurance repairs",
          ],
          subHeading:
            "With KabeiriCorp, you can choose from a wide assortment of car services in {{$metaCity}} . Apart from periodic car servicing,we also offer:",
        },
        {
          heading: "Multi Payment Options",
          list: [
            "Instamojo payment link",
            "Paytm wallet",
            "Bank Account Transfer",
            "Payment with cash",
          ],
          subHeading:
            "We offer various payment modes at every KabeiriCorp workshop in {{$metaCity}}:",
        },
        {
          heading: "Services At your Convenience",
          subHeading:
            "You get FREE pick-up and drop service for your car at your location in {{$metaCity}} as per your selected time slot. However, you can also bring in your car for the service at the nearest KabeiriCorp workshop.",
        },
      ],
      "sos-service": [
        {
          heading: "",
          subHeading:
            "Who wants to get stuck in an emergency with their {{$carBrandModelDetails}}? Well, no one. However, these situations are sometimes unavoidable, like car fluid leakage, clutch breakdown or brake failure. KabeiriCorp provides SOS Services for {{$carBrandModelDetails}} in {{$metaCity}} to get you out of these emergencies. With KabeiriCorp SOS Services, you get quick support and rapid resolution for emergency scenarios to get you and your car on the road shortly.",
        },
        {
          heading: "Services listed under KabeiriCorp SOS Service Category",
          list: [
            "Battery Jumpstart Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Car Engine Scanning Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Car Fluid Leakage Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Car Self Starter Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Clutch Breakdown Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Car Flooding Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Insurance Accident Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Brake Failure Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Wrong Fuel Emergency Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            "Critical Dashboard Light Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
          ],
          subHeading: "",
        },
        {
          heading:
            "SOS Services available for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}",
          listWithHeading: [
            {
              heading: "Battery Jumpstart Service:",
              subHeading:
                "KabeiriCorp assists you with Battery Jumpstart Service in {{$metaCity}} by certified Battery Technicians for {{$carBrandModelDetailsWithCar}} at your location.",
            },
            {
              heading: "Car Engine Scanning Service:",
              subHeading:
                "Under this service, we offer engine scanning using an OEM-Approved Scanner, compatible with every model of {{$carBrandModelDetailsWithCar}}.",
            },
            {
              heading: "Car Fluid Leakage Service:",
              subHeading:
                "Worried about car fluid leakage? We are here to assist you with Fluid Leakage detection and instant health diagnosis in no time.",
            },
            {
              heading: "Car Self Starter Service:",
              subHeading:
                "Having Car Self Starter Issues? Get expert starter Motor Inspection with a Battery Health Inspection facility for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}.",
            },
            {
              heading: "Clutch Breakdown Service:",
              subHeading:
                "We assist you during Clutch Breakdown and provide a Clutch Inspection Service with a complementary towing facility under this service.",
            },
            {
              heading: "Car Flooding Service:",
              subHeading:
                "Under this Service, we offer express Flood Recovery Service and instant car health diagnosis to get you out of emergencies in no time.",
            },
            {
              heading: "Insurance Accident Service:",
              subHeading:
                "We offer Roadside Assistance for Insurance Accidents and claim assistance for {{$carBrandModelDetails}} in {{$metaCity}} from a trained expert. Rest assured!",
            },
            {
              heading: "Brake Failure Service:",
              subHeading:
                "We offer assistance for Brake Failure Issues for {{$carBrandModelDetails}} in {{$metaCity}} with RSA Certified Towing Service near you.",
            },
            {
              heading: "Wrong Fuel Emergency Service:",
              subHeading:
                "In case of wrong fuel filled up in your {{$carBrandModelDetails}} in {{$metaCity}}, we provide Fuel System Inspection with included Towing Facility.",
            },
            {
              heading: "Critical Dashboard Light Service:",
              subHeading:
                "We provide Critical Dashboard Light Service in case of Dashboard Warning Light or Electrical Malfunction in every model of {{$carBrandModelDetails}} in {{$metaCity}}.",
            },
          ],
          subHeading: "",
        },
        {
          heading:
            "Benefits of selecting KabeiriCorp SOS Service for {{$carBrandModelDetailsWithCar}} in {{$metaCity}}",
          listWithHeading: [
            {
              heading: "Quick Response Time:",
              subHeading:
                "The average response time under KabeiriCorp SOS Services for {{$carBrandModelDetailsWithCar}} is less than 10 minutes. We understand the need for a quick solution to the Emergency solutions. Hence, we ensure to assist you with all SOS services in {{$metaCity}} and provide a solution in no time.",
            },
            {
              heading: "Dedicated Service Buddy:",
              subHeading:
                "A dedicated Service Buddy will assist you with all your car requirements under emergencies. They will keep you updated throughout the process and help you with any issues.",
            },
            {
              heading: "Estimate for Repair and Replacement:",
              subHeading:
                "The Service Buddy will provide you with an estimate for repair or replacement for the visible damage. However, the estimate may vary depending on internal damages after inspection.",
            },
            {
              heading: "Professional Service at your doorstep:",
              subHeading:
                "KabeiriCorp assists you with the best and affordable SOS Services at your location in {{$metaCity}} for your {{$carBrandModelDetails}} at affordable rates to ensure you get expert service during emergencies.",
            },
            {
              heading: "Multiple Payment Options:",
              subHeading:
                "We offer multiple payment options for every Car SOS Service, such as Instamojo payment link, Payment with cash, Paytm wallet, Credit\u002FDebit card, and net banking.",
            },
          ],
          subHeading:
            "We understand the need of having professional assistance during emergencies. Hence, the KabeiriCorp SOS Services consist of services that require prompt action, such as Battery Jumpstart Service, Car Engine Scanning Service, Car Fluid Leakage Service, Clutch Breakdown Service, Car Flooding Service, Brake Failure Service, Wrong Fuel Emergency Service for {{$carBrandModelDetails}} at well-equipped KabeiriCorp car garages in {{$metaCity}}.",
        },
      ],
      "windshield-glass-replacement": [
        {
          heading: "Windshield & Glass Replacement in {{$metaCity}}",
          subHeading:
            "Windshield & Glass Replacement Services offered by KabeiriCorp {{$metaCity}} enables you to get your {{$carBrandModelDetails}} windshield and glasses replaced without facing any hassle. We at KabeiriCorp {{$metaCity}} use only ARAI certified glasses for your {{$carBrandModelDetails}} windshield & glass replacement services.",
        },
        {
          heading: "Windshield & Glass Replacement Services Inclusions:",
          list: [
            "Front Windshield Replacement",
            "Rear Windshield Replacement",
            "Door Glass Replacement",
          ],
          subHeading:
            "We offer windshield & glass replacement services for all cars of any make and model at KabeiriCorp {{$metaCity}}. The windshield & glass replacement service includes:",
        },
        {
          heading: "Specialised Tools & Equipment",
          subHeading:
            "All the KabeiriCorp workshops across {{$metaCity}} have specialised tools, modern equipment and best-in-class glass adhesives which ensure that the windshield or glass replacement on your {{$carBrandModelDetails}} is done perfectly and lasts long. Our trained mechanics also ensure that the glass fits well in place and test it for its endurance before delivering your vehicle.",
        },
        {
          heading: "Warranty on Detailing Services",
          subHeading:
            "All the windshield and glass replacements done at KabeiriCorp {{$metaCity}} come with a standard 1-Month warranty on fitment.",
        },
      ],
    },
    luxuryBrands: [],
    reviewsCurrentCity: [
      {
        content:
          "I visited KabeiriCorp in New York for wheel alignment. There, I got all the required information and suggestion along with perfectly aligned wheels of my car. I would highly recommend you to check it out and enjoy the friendly experience.",
        customer_name: "Krishna Gupta",
        garage: "KabeiriCorp - Sector 82, New York",
        heading: "Geat personal experience",
        source: "Google",
      },
      {
        content:
          "I had my front bumper and headlights of my car broken after the driver in front of me suddenly stopped and we had an accident. KabeiriCorp in New York helped me with the insurance claim and also got my car fixed in a few days. It was really fast as I was expecting it to take longer.",
        customer_name: "Parul Gupta",
        garage: "KabeiriCorp - Sector 11, New York",
        heading: "Easy and Fast",
        source: "Google",
      },
      {
        content:
          "I had my car repaired by KabeiriCorp in New York. They are pretty committed towards their work as my car was picked up and dropped on time. Also, till now I'm satisfied with the work done on my car. Happy to have taken services provided by KabeiriCorp.",
        customer_name: "Simar Arora",
        garage: "KabeiriCorp -  Sector 64, New York",
        heading: "Committed Staff",
        source: "Google",
      },
      {
        content:
          "Honestly! They have the capability to grow, as they have a great variety of services and a staff of helpful nature. I was delighted with the services provided for my car. There were no problems I faced after the service. I would always prefer KabeiriCorp in New York as my first choice for car servicing.",
        customer_name: "Hemant Kumar",
        garage: "KabeiriCorp - Sector 74, New York",
        heading: "Wonderful assistance",
        source: "Google",
      },
      {
        content:
          "Hassle-free pickup and drop off. Got denting and rubbing polishing done in my car. They also procured mud flaps for me. Great service overall and seamless communication over WhatsApp. Will get servicing done from them next time from the same workshop in New York.",
        customer_name: "Manpreet Singh",
        garage: "KabeiriCorp - Nayagaon, New York",
        heading: "Takes extra leap to assist you",
        source: "Twitter",
      },
      {
        content:
          "Fantastic experience with the KabeiriCorp in New York. I had an AC issue going from a long time so decided to get it repaired from KabeiriCorp. My air conditioning system was repaired in just 2 hours and their skilled staff is also very friendly. I will gladly give them a visit for any car hassles now.",
        customer_name: "Gunjot Arora",
        garage: "KabeiriCorp - Tribune Colony, New York",
        heading: "Quick and friendly",
        source: "Twitter",
      },
    ],
    seoServiceDetails: [],
    warrantySelectedTab: null,
    warrantyDetails: {},
    obdDetails: {},
    how_gomech_works: [
      {
        image:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fwebsiteasset\u002FNew%20Website\u002Fcomponents\u002FHomepage\u002FSelect-The-Perfect-Car-Service.png",
        subtitle: "From KabeiriCorp's broad portfolio of services",
        title: "Select The Perfect Car Service",
      },
      {
        image:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fwebsiteasset\u002FNew%20Website\u002Fcomponents\u002FHomepage\u002FSchedule-Free-Doorstep-Pick-up.png",
        subtitle: "We offer free pick up and drop for all services booked",
        title: "Schedule Free Doorstep Pick-up",
      },
      {
        image:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fwebsiteasset\u002FNew%20Website\u002Fcomponents\u002FHomepage\u002Ftrack-your-car-service-real-time.png",
        subtitle: "We will take care of everything from here!",
        title: "Track Your Car Service Real-Time",
      },
      {
        image:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fwebsiteasset\u002FNew%20Website\u002Fcomponents\u002FHomepage\u002FEarn-While-We-Service.png",
        subtitle: "Spread the word! You get Rs.750. Your friends get Rs.750!",
        title: "Earn While We Service",
      },
    ],
    gomech_benefits: [],
    servicesTypesList: [
      {
        slug: "car-repair",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F1.png",
        name: "Periodic Services",
        id: 0,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-schedule-services-v3.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FPeriodic%20Services\u002FService%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FPeriodic%20Services\u002FService%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FPeriodic.jpg",
        ],
      },
      {
        slug: "car-ac-repair",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F5.png",
        name: "AC Service & Repair",
        id: 13,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-ac-services-v3.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FAC%20Service%20_%20Repair\u002FAC%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FAC%20Service%20_%20Repair\u002FAC%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FAC.jpg",
        ],
      },
      {
        slug: "car-battery-replacement",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Fbattery-v3.svg",
        name: "Batteries",
        id: -4,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-battery-v3.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FBatteries\u002FBatt%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FBatteries\u002FBatt%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FBattery.jpg",
        ],
      },
      {
        slug: "car-tyre-replacement",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Ftyre-v3.svg",
        name: "Tyres & Wheel Care",
        id: 21,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-tyre-v3.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FTyre%20_%20Wheel%20Care\u002FWheel%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FTyre%20_%20Wheel%20Care\u002FWheel%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FTyres.jpg",
        ],
      },
      {
        slug: "car-dent-paint",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Fdenting-painting-v3.svg",
        name: "Denting & Painting",
        id: 16,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-denting-painting-v3.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FDenting%20_%20Painting\u002FDenting%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FDenting%20_%20Painting\u002FDenting%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FDent_Paint.jpg",
        ],
      },
      {
        slug: "car-detailing",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F8.png",
        name: "Detailing Services",
        id: 37,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-cleaning-detailing-v3.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FDetailing%20Services\u002FDetail%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FDetailing%20Services\u002FDetail%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FDetailing.jpg",
        ],
      },
      {
        slug: "car-cleaning-service",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxhdpi\u002F4.png",
        name: "Car Spa & Cleaning",
        id: 34,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fwebsiteasset\u002FNew Website\u002Fcomponents\u002FCategory Active icon\u002F4.png",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FCar%20Spa%20_%20Cleaning\u002FClean%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FCar%20Spa%20_%20Cleaning\u002FClean%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FSpa.jpg",
        ],
      },
      {
        slug: "custom-repair",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002FCar-Inspection.png",
        name: "Car Inspections",
        id: 38,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-car-Inspection.png",
        is_miles: undefined,
        new_tag: "New",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FCar%20Inspections\u002FInspect%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FCar%20Inspections\u002FInspect%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FInspection.jpg",
        ],
      },
      {
        slug: "windshield-glass-replacement",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F10.png",
        name: "Windshields & Lights",
        id: -1,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-glass-cuatom-reair.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FWindshield%20_%20Lights\u002FWind%20a.jpg",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FWindshield%20_%20Lights\u002FWind%20b.jpg",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FWindshield%20_%20Lights.jpg",
        ],
      },
      {
        slug: "car-suspension-fitment",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002FSuspension-_-Fitments.png",
        name: "Suspension & Fitments",
        id: 49,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fwebsiteasset\u002FNew Website\u002Fcomponents\u002FCategory Active icon\u002F9.png",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FSuspension%20_%20Fitments\u002FFitments%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FSuspension%20_%20Fitments\u002FFitments%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FSuspension%20_%20Fitments.jpg",
        ],
      },
      {
        slug: "car-lights-replacement",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002FClutch-_-Bumpers.png",
        name: "Clutch & Body Parts",
        id: 10,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-clutch-%26-Bumpers.png",
        is_miles: undefined,
        new_tag: "New",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FClutch%20_%20Bumpers\u002FClutch%20a.jpg",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FClutch%20_%20Bumpers\u002FClutch%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FClutch%20_%20Bumpers%20.jpg",
        ],
      },
      {
        slug: "car-insurance",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finsurance-v3.svg",
        name: "Insurance Claims",
        id: -2,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002Finactive-insurance-v3.svg",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: undefined,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FInsurance%20Claims\u002FInsurance%20a.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fbbanr\u002FInsurance%20Claims\u002FInsurance%20b.png",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002FBrands%20We%20Use\u002FInsurance.jpg",
        ],
      },
      {
        slug: "sos-service",
        selectedIcon:
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002FSos-active.png",
        name: "SOS Service",
        id: 50,
        icon: "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons\u002FSos-inactive.png",
        is_miles: undefined,
        new_tag: "",
        is_sos_service: true,
        miscellaneous: [
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fsos\u002Fbanner\u002Fsos-banner-a%20(1).jpg",
          "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fsos\u002Fbanner\u002Fsos-banner-b.jpg",
        ],
      },
    ],
    categoryView: [
      {
        data: [
          {
            description: "Periodic Services",
            display: 3,
            display_order_sort: 1,
            display_row: 1,
            id: 0,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F1.png",
            name: "Periodic Services",
            new_tag: "",
            seoDescription:
              "Book Car Service and Repair at best Service Centers and Garages with free pickup and drop",
            seoTitle: "Car Service and Mechanic Repair",
            slug: "car-repair",
            tag: "35%",
            video_url: "https:\u002F\u002Fyoutu.be\u002FXaMX-awKG0Y",
          },
          {
            description: "AC Service & Repair",
            display: 3,
            display_order_sort: 2,
            display_row: 1,
            id: 13,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F5.png",
            name: "AC Service & Repair",
            new_tag: "",
            seoDescription:
              "Book Car AC Service and Repair at best Service Centers and Garages with free pickup and drop",
            seoTitle: "Car AC Service and Repair",
            slug: "car-ac-repair",
            tag: "30%",
            video_url: "https:\u002F\u002Fyoutu.be\u002Fyei8J7E-zqk",
          },
          {
            description: "Batteries",
            display: 3,
            display_order_sort: 3,
            display_row: 1,
            id: -4,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F3.png",
            name: "Batteries",
            new_tag: "",
            seoDescription:
              "Looking for car battery replacement & repair ? KabeiriCorp offers batteries from brands such as Exide, Amaron and SF Sonic with 30% savings",
            seoTitle: "Car Battery Replacement",
            slug: "car-battery-replacement",
            tag: "",
            video_url:
              "https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=OrR7Y_KVgt4",
          },
          {
            description: "Tyres & Wheel Care",
            display: 3,
            display_order_sort: 4,
            display_row: 1,
            id: 21,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F6.png",
            name: "Tyres & Wheel Care",
            new_tag: "",
            seoDescription:
              "Book Wheel Care, Tyre Replacement and Wheel Alignment at Best Service Centers and Garages",
            seoTitle: "Car Service Center Near Me",
            slug: "car-tyre-replacement",
            tag: "",
            video_url:
              "https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=0KTIksTMDrs",
          },
        ],
        grid: 4,
        title: "Scheduled Services",
      },
      {
        data: [
          {
            description: "Denting & Painting",
            display: 3,
            display_order_sort: 1,
            display_row: 2,
            id: 16,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F2.png",
            name: "Denting & Painting",
            new_tag: "",
            seoDescription:
              "Book Denting and Painting Service at Best Service Centers and Garages with 100% Colour Match Guarantee",
            seoTitle: "Car Denting Painting Service",
            slug: "car-dent-paint",
            tag: "30%",
            video_url: "",
          },
          {
            description: "Detailing Services",
            display: 3,
            display_order_sort: 2,
            display_row: 2,
            id: 37,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F8.png",
            name: "Detailing Services",
            new_tag: "",
            seoDescription:
              "Looking for Car Detailing Services in {{$metaCity}}? Choose from PPF, Ceramic Coating, Teflon Coating and much more with KabeiriCorp and enjoy Free Pickup and Drop.",
            seoTitle:
              "Best Car Detailing Services in {{$metaCity}} - KabeiriCorp",
            slug: "car-detailing",
            tag: "",
            video_url: "https:\u002F\u002Fyoutu.be\u002F4roYZKi1Bg8",
          },
          {
            description: "Car Spa & Cleaning",
            display: 3,
            display_order_sort: 3,
            display_row: 2,
            id: 34,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F4.png",
            name: "Car Spa & Cleaning",
            new_tag: "",
            seoDescription:
              "Book Car Cleaning and Washing at Best Service Centers and Garages near you",
            seoTitle: "Car Cleaning Service",
            slug: "car-cleaning-service",
            tag: "",
            video_url: "https:\u002F\u002Fyoutu.be\u002F4roYZKi1Bg8",
          },
          {
            description: "Car Inspections",
            display: 5,
            display_order_sort: 4,
            display_row: 2,
            id: 38,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002FCar-Inspection.png",
            name: "Car Inspections",
            new_tag: "New",
            seoDescription:
              "Facing Issues With Your Car? Now Avail Top-Notch {{$carBrandModelDetailsWithCar}} Car Inspection Service And Know More About Your Car's Health By Our Experts in {{$metaSubZoneCity}}",
            seoTitle:
              "{{$carBrandModelDetailsWithCar}} Car Inspection Service in {{$metaSubZoneCity}} - KabeiriCorp",
            slug: "custom-repair",
            tag: "",
            video_url: "https:\u002F\u002Fyoutu.be\u002F4roYZKi1Bg8",
          },
        ],
        grid: 4,
        title: "Value Added Services",
      },
      {
        data: [
          {
            description: "Windshield & Lights",
            display: 3,
            display_order_sort: 2,
            display_row: 3,
            id: -1,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F10new.png",
            name: "Windshield & Lights",
            new_tag: "",
            seoDescription:
              "Need Windshield & Car Door Glass Replacement in {{$metaCity}}? Get High-Quality Front Rear Windshield & Door Glass Replacement Services with Free Pickup & Drop.",
            seoTitle:
              "Car Windshield & Glass Replacement in {{$metaCity}} - KabeiriCorp",
            slug: "windshield-glass-replacement",
            tag: "",
            video_url: "",
          },
          {
            description: "Suspension & Fitments",
            display: 5,
            display_order_sort: 1,
            display_row: 3,
            id: 49,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002FSuspension-_-Fitments.png",
            name: "Suspension & Fitments",
            new_tag: "",
            seoDescription:
              "Need {{$carBrandModelDetailsWithCar}} Suspension & Fitments Service in {{$metaSubZoneCity}}? Now, Get The Best-in-Class Car Suspension & Fitments Service by Leading Car Experts.",
            seoTitle:
              "{{$carBrandModelDetailsWithCar}} Suspension & Fitments Repair in {{$metaSubZoneCity}} - KabeiriCorp",
            slug: "car-suspension-fitment",
            tag: "",
            video_url: "https:\u002F\u002Fyoutu.be\u002F4roYZKi1Bg8",
          },
          {
            description: "Clutch & Fitments",
            display: 3,
            display_order_sort: 3,
            display_row: 3,
            id: 10,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F11new.png",
            name: "Clutch & Body Parts",
            new_tag: "New",
            seoDescription:
              "Book {{$carBrandModelDetailsWithCar}} Clutch & Bumper Replacement in {{$metaSubZoneCity}} by Experienced Professionals And Get Free Pickup & Drop.",
            seoTitle:
              "{{$carBrandModelDetailsWithCar}} Clutch & Bumper Replacement in {{$metaSubZoneCity}} - KabeiriCorp",
            slug: "car-lights-replacement",
            tag: "30% OFF",
            video_url: "",
          },
          {
            description: "Insurance Claims",
            display: 3,
            display_order_sort: 4,
            display_row: 3,
            id: -2,
            image:
              "https:\u002F\u002Fgomechprod.blob.core.windows.net\u002Fgomech-retail\u002Fgomechanic_assets\u002Fcategory_icons_new\u002Fxxxhdpi\u002F7.png",
            name: "Insurance Claims",
            new_tag: "",
            seoDescription:
              "Book Car Insurance Service and Repairs Claims at Best Cashless Workshops",
            seoTitle: "Car Insurance Claim and Garage",
            slug: "car-insurance",
            tag: "Upto Rs 1000*",
            video_url: "",
          },
        ],
        grid: 4,
        title: "Mechanical Repairs",
      },
    ],
    servicesDetails: {},
    regions: [
      { name: "Mohali", sitename: "mohali" },
      { name: "Zirakpur", sitename: "zirakpur" },
      { name: "Panchkula", sitename: "panchkula" },
      { name: "Manimajra", sitename: "manimajra" },
    ],
    selectedRegion: null,
    offersPage: {},
    faqs: [
      {
        A: "We offer a wide variety of car service for you to choose from. With KabeiriCorp, you can avail periodic car servicing, wheel balancing and alignment, car denting painting services, paint protection service, custom required repairs and even car repairs under an insurance claim.",
        Q: "What kind of car service does KabeiriCorp offer in New York?",
      },
      {
        A: "The charges for a basic car service starts at just Rs 1,999 at KabeiriCorp. This, however, depends on the car make and model. You can fill in your car’s make, model and fuel type to get the best price for your car service.",
        Q: "What is the basic charge for a car service with KabeiriCorp?",
      },
      {
        A: "Absolutely not! When you choose KabeiriCorp, you choose convenience. Get doorstep pick-up and delivery absolutely FREE of any cost. Its time for you to sit back and relax!",
        Q: "Do I have to drop my car at the workshop for my car service?",
      },
      {
        A: "Every car is assigned a workshop based on various factors like serviceability, spare parts availability, location and then some. Rest assured, your car will get the best service in New York.",
        Q: "Can I choose a workshop of my choice for my car repair in New York?",
      },
      {
        A: "KabeiriCorp is a network of multi-brand car service centers spread across multiple locations in New York. We offer the best car services at the most affordable prices. Not only you get a wide selection of car services to choose from, but you also save up to 40% on car service compared to what is charged at authorised service centers.",
        Q: "Why should I choose KabeiriCorp against Authorised Service Centers and other service providers?",
      },
      {
        A: "With KabeiriCorp, you get an unconditional 1000kms\u002F1month network warranty on car repairs and services redeemable anywhere in New York. No questions asked!",
        Q: "What if I am not satisfied with my car service with KabeiriCorp?",
      },
    ],
    blogs: [],
    carSelection: null,
    isUserLoggedIn: null,
    orderDateTime: {
      timeSlots: [
        { label: "10AM - 12PM", startHour: 10, value: "10:00:00" },
        { label: "12PM - 2PM", startHour: 12, value: "12:00:00" },
        { label: "2PM - 4PM", startHour: 14, value: "14:00:00" },
        { label: "4PM - 6PM", startHour: 16, value: "16:00:00" },
      ],
      date: "2023-08-22",
      time: "10:00:00",
      mode: 0,
      dateString: "TUE 22 AUG, 2023",
    },
    coupon: "",
    bikeenquirs: {},
    workShop: {},
    userSelectedCarId: null,
    carForCart: null,
    currentPageData: null,
    reviewPageData: {},
    cartRules: [
      {
        retail_service_type_id: 0,
        type: "SAME_SERVICE_TYPE_SINGLE_SELECT_SERVICE",
      },
      {
        all_inclusive_service_id: 2825,
        retail_service_type_id: 16,
        type: "SAME_SERVICE_TYPE_ALL_INCLUSIVE_SERVICE",
      },
    ],
    isPhonePeRequest: false,
    isPaytmRequest: false,
    currency: { symbol: "₹ ", text: "Rs. ", isoFormat: "INR" },
    ip: "204.19.162.34",
    isNigerianRequest: false,
    isMalaysiaRequest: false,
    isCountry: "United States of America",
    isLat: 40.714272,
    isLong: -74.005966,
    topContent:
      "Get free pick up and drop with professional periodic car service, car repair, wheel care services, cashless insurance claim and much more in the City of Gardens New York. ",
    tableData: [],
    cartResolved: false,
    accessoriesCartResolved: false,
    apiEndpoints: {
      phonePeMerchantId: "GOMECHANICTEST",
      frontend_server: "kabeiricorp.com",
      frontend_serverWithProtocol: "https:\u002F\u002Fkabeiricorp.com",
      api_server: "gomechanic.app",
      api_get: "https:\u002F\u002Fgomechanic.app\u002Fapi\u002F",
      api_post: "https:\u002F\u002Fgomechanic.app\u002Fapi\u002F",
      dev_api: "https:\u002F\u002Fgomechanic.app\u002Fapi\u002F",
      api_workshop: "https:\u002F\u002Feapp.gomechanic.app\u002F",
      api_ML: "https:\u002F\u002Fleads.gomechanic.app\u002F",
      razorpay_key: "rzp_live_pzbsPvSznJ5bij",
      acc_razorpay_key: "rzp_live_LtUFD8KqG4ubmp",
      payStackKey: "pk_test_b8b18201500bfebce8d7fce0ab2b87e5d045ad3e",
      paytmKey: "uM4GJ@2Ls4cana#D",
      paytmMID: "TARGET27525097087873",
      paytmWebsite: "WEBSTAGING",
      paytmChannel: "WEB",
      paytmIndustry: "Retail",
      paytmClientId: "merchant-go-mechanic-uat",
      paytmClientSecret: "inPUs0XMYwRUgKeCfPv82ly6Vsyq74Bg",
      forceNigeria: undefined,
      forceMalaysia: undefined,
      accessories_url: "https:\u002F\u002Faccessories.gomechanic.app\u002F",
      api_bike: "https:\u002F\u002Fleads.gomechanic.app\u002F",
      gtm_id: "GTM-MP32Z3Z",
      accessories_gtm_id: "GTM-P88D3ST",
    },
    segmentList: [],
    categoryList: [],
    accessoriesBanner: [],
    accCities: [],
    activeSegment: {},
    activeCategory: {},
    userAccessoriesCart: {},
    lead: null,
    carouselBanners: [],
    cityWiseRegions: [],
    brandWiseModels: {},
    accessoriesPageType: [],
    isCrawlerRequest: false,
    storeList: {},
    gmbData: {
      faq: [
        {
          A: "Trusted by over a million car owners, KabeiriCorp is India’s most loved car service provider with over 2 million+ cars serviced. We offer a wide variety of car services from basic car servicing to car insurance repairs. Get the best prices on your car service with upto 40% savings. Also, avail free doorstep pickup and drop right from your home, anywhere in {{$commonCity ?? ''}}",
          Q: "Why should I choose KabeiriCorp over other service providers in {{$storeLocation}} {{$commonCity ?? ''}}?",
        },
        {
          A: "Booking your car service is as easy as 1-2-3. Just select your car brand\u002Fmodel\u002Ffuel type, choose your service package, mention your preferred time slot and that’s it! You have just booked your car service.",
          Q: "How can I book my car service with KabeiriCorp in {{$storeLocation}} {{$commonCity ?? ''}}?",
        },
        {
          A: "You can choose from a plethora of car services with KabeiriCorp. Need an oil change? we have the service for you. Want car coating? We offer Teflon and Ceramic coating. Need repairs under insurance? We offer cashless insurance claim facility. The possibilities are endless.",
          Q: "What kind of car services can I avail with KabeiriCorp?",
        },
        {
          A: "A basic car service package starts at just ₹1,999. The basic service package covers all the bare essentials that your car needs to stay road-worthy. You can also upgrade your car service experience with our Standard and Comprehensive car service packages.",
          Q: "What are the basic charges for my car service in {{$commonCity ?? ''}}?",
        },
        {
          A: "The nearest KabeiriCorp workshop is right around the corner located at {{$storeAddress}}. However, you can avail FREE doorstep pick-up and drop right from the comfort of your home. No need to step out of your home, sit back and relax!",
          Q: "Do I have to drop my car to the workshop?",
        },
        {
          A: "100% customer satisfaction is the highest priority for us. Therefore, KabeiriCorp offers a 1000 kms or 1-month network warranty on car services redeemable anywhere across {{$commonCity ?? ''}}. No questions asked!",
          Q: "What if I am not satisfied with my car service?",
        },
      ],
      welcome: [
        {
          A: "Trusted by a million happy customers, KabeiriCorp offers 500+ Quality Car services & Repairs with upto 40% Savings & Network Warranty on all Car Services. You can rely on KabeiriCorp for an easy, efficient and economical car servicing experience.",
          Q: "Why should one choose KabeiriCorp for car services in {{$city}}?",
        },
        {
          A: "At KabeiriCorp, you can choose from a wide variety of car services, including Periodic Services, Denting & Painting, Car Detailing Services, Windshield & Lights, Suspension & Fitments, Car Spa, Car Insurance Services etc. Check our website for more details.",
          Q: "What are the car services offered by KabeiriCorp in {{$city}}?",
        },
        {
          A: "There are multiple ways to book your car services with KabeiriCorp, like on the mobile app (available on Android and iOS) and the website. You can also tele-book your car service in {{$city}} by calling us at +91-9388893888.",
          Q: "How can I book my car service with KabeiriCorp?",
        },
        {
          A: "Yes, KabeiriCorp provides free doorstep Pick-up and Drop for your car from your desired location in {{$city}}. You can avail of this irrespective of the car services you opt for at no extra cost. That's a KabeiriCorp promise!",
          Q: "Does KabeiriCorp offer a pickup service for my car in {{$city}}?",
        },
        {
          A: "Generally, a car service or repair takes 4 to hours from start to finish. However, the service time for your car depends on the service package or car service you choose. The approximate time is mentioned for every car service listed on the App\u002FWebsite.",
          Q: "How much time does a car service take at KabeiriCorp?",
        },
        {
          A: "KabeiriCorp offers various payment options such as Instamojo payment links, Popular Wallets (Paytm, Google Pay, PhonePe etc.), Exclusive Bank Offers, Pay Later Options, Major UPI payment portals, Net Banking\u002FMobile Banking, IMPS\u002FNEFT\u002FRTGS, and Credit\u002FDebit cards.",
          Q: "What are the different payment modes available at KabeiriCorp?",
        },
        {
          A: "When you choose our Free Pick-Up and Drop service, we assign you a Dedicated Valet approved by KabeiriCorp, who will come to your location and safely pick up your car.",
          Q: "Who will come to pick up the car from my location in {{$city}}?",
        },
        {
          A: "Absolutely, at KabeiriCorp, your car service is assured under our 1000Kms\u002F1-Month Network Warranty applicable PAN India across all the KabeiriCorp Workshops.",
          Q: "Does KabeiriCorp provide any warranty with the car services?",
        },
      ],
    },
    storePage: false,
    administrativeArea: false,
    storeName: false,
    selectedStore: null,
    nearByStore: null,
    storeLocation: null,
    starProductsList: [],
    hotCategoriesList: [],
    productPanelPage: {},
    productDetailsPage: {},
    segmentDetailPage: {},
    segmentPageDetails: {},
    accHomePageDetails: {},
    accBrandPageDetails: {},
    categoryPageDetails: {},
    carModelPage: {},
    carBrandPageData: {},
    accessoriesCollectionPage: {},
    showServicesCollapsed: 2,
    initialQueryString: "",
    showMap: true,
    accessoriesFaq: {},
    displayConfigurations: {
      APP_DOWNLOAD: true,
      FOOTER: true,
      OUR_PARTNERS: true,
      SERVICES_DETAILS_V3: true,
      SERVICE_GUIDE: true,
      SERVICE_GUIDE_API_V2: true,
    },
    displayPossibleSctions: {},
    addOnServices: null,
    selectedAddressId: null,
    toast: { show: false, text: "" },
    selectedPaymentMethod: "ONLINE",
    categoryWiseReviews: {},
    servicesDetailsFromServer: null,
    serviceWiseReview: {},
    WarrantyCard: null,
    TimeSelect: null,
    UserRemarks: "",
    cartBoosters: {},
    priceListData: [
      {
        id: 4,
        name: "Car Inspection\u002FDiagnostics",
        price: 499,
        savings: "15%",
      },
      { id: 9, name: "Inspection", price: 499, savings: "25%" },
      { id: 10, name: " Door Glass Replacement ", price: 700, savings: "30%" },
      { id: 5, name: "Regular AC Service ", price: 999, savings: "15%" },
    ],
    serviceBuddyData: {},
    flipkartSelectedServices: [],
    lazadaSelectedServices: [],
    carPageData: {},
    accCollectionDataV2: {},
    activeCarsList: [],
    accessoriesEnquiryData: {},
    accessoriesEnquiryFooterData: {},
    retailAccessoriesPage: null,
    selectedPaymentMethodType: null,
    selectedPaymentMethodName: null,
    accSearchData: {},
    accBlogs: null,
    isCarWaleUrl: false,
    accCategoryWiseAppReviews: null,
    sosFaqs: {
      faqs: [
        {
          answer:
            "Your car can be troublesome at times, leading to unexpected breakdowns. KabeiriCorp range of SOS emergency services like Battery Jumpstart, Wheel Lift & Tow, Fluid Leakage Assist etc., to help you and your car get back on the road in no time.",
          question: "What is KabeiriCorp's SOS Assistance Service?",
        },
        {
          answer:
            "The base charges for KabeiriCorp SOS Services start at ₹500, which are calculated on 3 factors, viz vehicles type (Hatchback, Sedan, SUV, etc.), mode of towing opted or applicable (Flatbed or Wheel Lift), and the distance between your location and the nearest workshop.",
          question:
            "What are the charges for KabeiriCorp's SOS Assistance Services?",
        },
        {
          answer:
            "KabeiriCorp is to your rescue! Our Service Buddy takes around 3-5 minutes to cater to your request. However, the time to reach you can vary between 30 mins to 2 hours, depending on your location.",
          question:
            "What is the response time for KabeiriCorp's SOS Assistance?",
        },
        {
          answer:
            "Services mentioned as a part of SOS are offered strictly for critical emergency situations that require rapid resolution and support. These services are based on common emergency scenarios to provide quick support to the customers.",
          question:
            "Are the Services mentioned under SOS different from the usual offerings?",
        },
      ],
      tnc: {
        bullets: [
          "KabeiriCorp's SOS Service will be available for 7 days from 10:00 a.m. to 7:00 p.m. only.",
          "KabeiriCorp shall not be held responsible for delay if the customer fails in providing the correct location due to any reason.",
          "The KabeiriCorp Service Buddy will provide you with an estimate for repair or replacement as per the visible damages.",
          "The estimate may vary depending on your vehicle's internal damage after a thorough inspection of your car at a KabeiriCorp workshop.",
        ],
        sub_title: "Terms & Conditions",
        text: "KabeiriCorp SOS Services Terms and Conditions",
        title: "SOS 24X7 Assistance",
      },
    },
  },
};
