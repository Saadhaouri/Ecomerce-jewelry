const RingsData = [
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Solitaire Ring",
        price: 1200,
        category: "Rings",
        images: [
            "https://www.jared.com/productimages/processed/V-993088400_0_800.jpg?pristine=true",
        ],
        promotion: "20% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Ruby Heart Ring",
        price: 850,
        category: "Rings",
        images: [
            "https://www.diamondsdubai.ae/wp-content/uploads/2021/05/RN02-6.jpg",
        ],
        promotion: "Valentine's Special",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Emerald Band",
        price: 650,
        category: "Rings",
        images: [
            "https://thediamondoak.com/cdn/shop/collections/tiffany_1.10_PS-8.jpg?v=1635470014",
        ],
        promotion: "Free Shipping",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Sapphire Halo Ring",
        price: 980,
        category: "Rings",
        images: [
            "https://cdn11.bigcommerce.com/s-t4k1ukevvr/products/4035/images/13951/HS10-350-1__29566.1704806541.1280.1280.jpg?c=1",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Eternity Band",
        price: 300,
        category: "Rings",
        images: [
            "https://www.withclarity.com/cdn/shop/products/RB1551739-WHITE-SIDEVIEW_ce9ba7af-823c-4a58-bc58-33c766833fb6.jpg?v=1690534483",
        ],
        promotion: "Buy One Get One 50% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Silver Claddagh Ring",
        price: 120,
        category: "Rings",
        images: [
            "https://cdn.jewelryimages.net/galleries/stuller_inc/CONFIG.4958171.jpg?v=47",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Pearl Stacking Ring",
        price: 150,
        category: "Rings",
        images: [
            "https://classicdiamonds.co.uk/cdn/shop/products/CD43_CDCSG-300A_7.0PL-1.9mm__00001-resized_1200x.jpg?v=1638282703",
        ],
        promotion: "15% Off First Purchase",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Rose Gold Infinity Ring",
        price: 200,
        category: "Rings",
        images: [
            "https://simonwestjewellery.com/cdn/shop/products/SIMON_WEST_SHOPIFY_2048PX-0093_2048x.jpg?v=1648608296",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Vintage Art Deco Ring",
        price: 430,
        category: "Rings",
        images: [
            "https://www.pascoes.co.nz/content/products/sterling-silver-violet-cubic-zirconia-cluster-ring-1821251-172513.jpg",
        ],
        promotion: "20% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Morganite Cushion Ring",
        price: 500,
        category: "Rings",
        images: [
            "https://cdn.jewelryimages.net/galleries/stuller_inc/CONFIG.4958171.jpg?v=47",
        ],
        promotion: "New Arrival",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Turquoise and Silver Ring",
        price: 220,
        category: "Rings",
        images: [
            "https://www.withclarity.com/cdn/shop/products/RB1551739-WHITE-SIDEVIEW_ce9ba7af-823c-4a58-bc58-33c766833fb6.jpg?v=1690534483",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Black Onyx Ring",
        price: 190,
        category: "Rings",
        images: [
            "https://www.macintyres.co.uk/22202-thickbox/platinum-3-stone-diamond-ring-152cts.jpg",
        ],
        promotion: "Limited Edition",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Citrine Minimalist Ring",
        price: 85,
        category: "Rings",
        images: [
            "https://s1.1zoom.me/big0/38/Closeup_Brilliant_Ring_White_background_517989_1268x1024.jpg",
        ],
        promotion: "Exclusive",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Adjustable Leaf Ring",
        price: 50,
        category: "Rings",
        images: [
            "https://previews.123rf.com/images/boykung/boykung1303/boykung130300037/18362282-jewellery-ring-on-a-white-background.jpg",
        ],
        promotion: "Sale",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Moissanite Engagement Ring",
        price: 1500,
        category: "Rings",
        images: [
            "https://previews.123rf.com/images/boykung/boykung1711/boykung171100050/90695258-jewellery-ring-on-a-white-background-high-resolution-3d-image.jpg",
        ],
        promotion: "Free Wedding Band",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Opal Eternity Band",
        price: 340,
        category: "Rings",
        images: [
            "https://previews.123rf.com/images/dimjul/dimjul1602/dimjul160200004/52653136-jewellery-ring-with-diamond-isolated-on-white-background.jpg",
        ],
        promotion: "15% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Garnet Birthstone Ring",
        price: 260,
        category: "Rings",
        images: [
            "https://previews.123rf.com/images/jewelry3dstudio/jewelry3dstudio2208/jewelry3dstudio220800016/190615516-%E7%99%BD%E3%81%84%E8%83%8C%E6%99%AF%E3%81%AB%E3%82%B8%E3%83%A5%E3%82%A8%E3%83%AA%E3%83%BC%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E5%A9%9A%E7%B4%84%E6%8C%87%E8%BC%AA%E3%80%813d%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Stackable Geometric Ring",
        price: 125,
        category: "Rings",
        images: [
            "https://cdn.jewelryimages.net/galleries/martinflyer/CM03MYQ-C-7.0RD_2.jpg?v=25",
        ],
        promotion: "Buy 2 Get 1 Free",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Lapis Lazuli Ring",
        price: 190,
        category: "Rings",
        images: [
            "https://previews.123rf.com/images/dimjul/dimjul1602/dimjul160200004/52653136-jewellery-ring-with-diamond-isolated-on-white-background.jpg",
        ],
        promotion: "20% Off for Members",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Slim Gold Band with Diamonds",
        price: 500,
        category: "Rings",
        images: [
            "https://previews.123rf.com/images/eldoctore/eldoctore1109/eldoctore110900002/10652477-wedding-gold-diamond-ring-isolated-on-white-background.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Engraved Silver Signet Ring",
        price: 300,
        category: "Rings",
        images: [
            "https://cdn.jewelryimages.net/galleries/igc/N0079SMA075RD14KYE.jpg?v=14",
        ],
        promotion: "New Arrival",
    }
];

export default RingsData;
