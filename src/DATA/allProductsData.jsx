const allProductsData = [


    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Chain Bracelet",
        price: 250,
        category: "Bracelets",
        images: [
            "https://i.ebayimg.com/images/g/JwsAAOSw9QthsMSP/s-l1200.webp",
        ],
        promotion: "10% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Silver Cuff Bracelet",
        price: 180,
        category: "Bracelets",
        images: [
            "https://cdn.shopaccino.com/kosh/products/37363-d-i-12-party-eme-7x5-mm-7x55-mm-diamond-bracelet-kn-1-940332_l.jpg?v=508",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Tennis Bracelet",
        price: 1290,
        category: "Bracelets",
        images: [
            "https://www.gembleu.com/cdn/shop/products/Gembleu-bracelets-J20746-WG-1.jpg?v=1624027960",
        ],
        promotion: "Free Shipping",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Leather Wrap Bracelet",
        price: 95,
        category: "Bracelets",
        images: [
            "https://www.nektanewyork.com/cdn/shop/products/20-carat-men-s-diamond-cuban-link-chain-bracelet-36422668648664_1500x.jpg?v=1646733773",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Beaded Charm Bracelet",
        price: 75,
        category: "Bracelets",
        images: [
            "https://sites.jewelfeed.com/si688/catalog/items/71dad221-3f9f-40a4-9a8b-f0006df949f5.jpg.800x800_q85_background.jpg",
        ],
        promotion: "20% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Amethyst Stretch Bracelet",
        price: 60,
        category: "Bracelets",
        images: [
            "https://www.shafteldiamonds.com/wp-content/uploads/2024/02/170-00247.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Turquoise Bangle",
        price: 120,
        category: "Bracelets",
        images: [
            "https://i.etsystatic.com/24278338/r/il/9bb664/2468094216/il_1080xN.2468094216_euoz.jpg",
        ],
        promotion: "Buy One Get One",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Pearl Bracelet",
        price: 140,
        category: "Bracelets",
        images: [
            "https://jewelryexchange.com/wp-content/uploads/2022/07/4XX01-527936.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Sapphire Link Bracelet",
        price: 350,
        category: "Bracelets",
        images: [
            "https://img.fruugo.com/product/3/72/29532723_max.jpg",
        ],
        promotion: "15% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Rose Gold Clasp Bracelet",
        price: 299,
        category: "Bracelets",
        images: [
            "https://i.etsystatic.com/10751201/r/il/fe93c4/875095501/il_570xN.875095501_20su.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Modern Geometric Bracelet",
        price: 200,
        category: "Bracelets",
        images: [
            "https://heidikjeldsen.co.uk/wp-content/uploads/2016/12/Heidi-Kjeldsen-Stylish-Diamond-3.00cts-18ct-White-Gold-Tennis-Bracelet-BL1256-1000x1000.jpg",
        ],
        promotion: "10% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Vintage Lace Bracelet",
        price: 165,
        category: "Bracelets",
        images: [
            "https://images-na.ssl-images-amazon.com/images/I/5113p53QaML._AC_UL600_SR600,600_.jpg",
        ],
        promotion: "Limited Edition",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Citrine Sun Bracelet",
        price: 85,
        category: "Bracelets",
        images: [
            "https://i.etsystatic.com/14821669/r/il/bf3365/3473836693/il_570xN.3473836693_7c2b.jpg",
        ],
        promotion: "New Arrival",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Adjustable Cord Bracelet",
        price: 50,
        category: "Bracelets",
        images: [
            "https://i.etsystatic.com/14821669/r/il/c5573c/3512181392/il_570xN.3512181392_pw0q.jpg",
        ],
        promotion: "Sale",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Black Onyx Cuff",
        price: 180,
        category: "Bracelets",
        images: [
            "https://i.etsystatic.com/23504537/r/il/e7245a/3082202968/il_570xN.3082202968_nfcw.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Black skine Cuff",
        price: 180,
        category: "Bracelets",
        images: [
            "https://i.etsystatic.com/31650239/r/il/e28d5a/4189930042/il_570xN.4189930042_d4rx.jpg",
        ],
        promotion: null,
    }, {
        id: Math.random().toString(36).substring(7),
        name: "Sapphire Stud Earrings",
        price: 349,
        category: "Earrings",
        images: [
            "https://www.lilaclare.com/cdn/shop/products/Handmade_Gemstone_Earrings_blue_quartz_2048x.png?v=1676787956",
        ],
        promotion: "15% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Emerald Drop Earrings",
        price: 279,
        category: "Earrings",
        images: [
            "https://www.handmadesask.com/cdn/shop/products/OnyxEarrings_large_54a71d4b-1004-407e-b433-c52c99054bdb_300x300.webp?v=1665271328",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Hoop Earrings",
        price: 799,
        category: "Earrings",
        images: [
            "https://sosilversogold.com.au/cdn/shop/products/C001-ONX.jpg?v=1656558844",
        ],
        promotion: "Free Gift Wrap",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Chandelier Earrings",
        price: 599,
        category: "Earrings",
        images: [
            "https://www.gemondo.com/cdn/shop/products/214e824901925__orig.jpg?v=1678289749",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Pearl Stud Earrings",
        price: 199,
        category: "Earrings",
        images: [
            "https://murphyjewellers.ie/source/wp-content/uploads/2023/06/WSBZ00308WBO-2.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Amethyst Teardrop Earrings",
        price: 159,
        category: "Earrings",
        images: [
            "https://whitbyjetstore.co.uk/cdn/shop/products/Sterling_Silver_Whitby_Jet_Oval_Drop_Earrings._e2036._4fefdcff-1ca4-4e81-8a1e-5dc9a3c25516_300x300@2x.webp?v=1673303327",
        ],
        promotion: "20% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Ruby Circle Drop Earrings",
        price: 449,
        category: "Earrings",
        images: [
            "https://m.media-amazon.com/images/I/51Y0EMoppAL._UF350,350_QL80_.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Silver Hoop Earrings",
        price: 89,
        category: "Earrings",
        images: [
            "https://ae01.alicdn.com/kf/H21e88d9f7f9f4f95b5d74f7d5fd8af86A/Men-s-Stainless-Steel-Horizontal-Bar-Earrings-Jewelry-Titanium-Fashion-Stud-Earrings-Boy-Punk-black-Earrings.png",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Tennis Drop Earrings",
        price: 1299,
        category: "Earrings",
        images: [
            "https://innovatodesign.com/cdn/shop/files/right_click_image__17fa8a87-5bb0-471c-b3e2-dc61618e9996_600x600.jpg?v=1708511275",
        ],
        promotion: "Free Shipping",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Opal Stud Earrings",
        price: 299,
        category: "Earrings",
        images: [
            "https://media.takealot.com/covers_images/eb74a0cf7c634cf0818f098bf28be9d2/s-pdpxl.file",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Leaf Earrings",
        price: 499,
        category: "Earrings",
        images: [
            "https://zpwholesale.com/cdn/shop/products/19743_2F1486416317_2F6367-yg-drk-blue-hydroquartz-dangles_1024x1024.jpg?v=1504384238",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Sapphire Loop Earrings",
        price: 379,
        category: "Earrings",
        images: [
            "https://images.squarespace-cdn.com/content/v1/60c314860587be508c64d75d/1667653038838-40LVY3C1BLWANAN7UUP5/Linear%2BHoops%2B9Y%2BWhite%2BBackground.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Emerald Halo Earrings",
        price: 349,
        category: "Earrings",
        images: [
            "https://lubdub.co.in/wp-content/uploads/2023/12/O1CN01by0pmb27QKVjR3Sgg_1116277791-0-cib.jpg",
        ],
        promotion: "10% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Solitaire Studs",
        price: 899,
        category: "Earrings",
        images: [
            "https://previews.123rf.com/images/pandavector/pandavector1612/pandavector161200513/67684976-earrings-with-gems-icon-in-outline-style-isolated-on-white-background-jewelry-and-accessories-symbol.jpg",
        ],
        promotion: "Free Shipping",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Rose Gold Flare Earrings",
        price: 329,
        category: "Earrings",
        images: [
            "https://kyklosshop.com/cdn/shop/files/1451GEwbgBT.jpg?v=1699441973&width=2048",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Turquoise Bead Earrings",
        price: 149,
        category: "Earrings",
        images: [
            "https://www.zales.com/productimages/processed/V-19960004_0_320.jpg?pristine=true",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Cross Earrings",
        price: 599,
        category: "Earrings",
        images: [
            "https://www.zalesoutlet.com/productimages/processed/V-20408960_0_565.jpg?pristine=true",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Dangle Earrings",
        price: 199,
        category: "Earrings",
        images: [
            "https://zoom.jewelryimages.net/edge/qualitygem/images/edge/210-03500.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Ruby Stud Earrings",
        price: 379,
        category: "Earrings",
        images: [
            "https://img.nihaojewelry.com/product/2019/1/3/1205802276103524352.jpg",
        ],
        promotion: "15% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Cluster Earrings",
        price: 699,
        category: "Earrings",
        images: [
            "https://static.vecteezy.com/system/resources/previews/016/446/526/non_2x/jewelry-earrings-isolated-on-white-background-free-vector.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Sapphire Pendant",
        price: 349,
        category: "Necklace ",
        images: [
            "https://gldn.com/cdn/shop/files/gldn-gold-floral-pendant-necklaces.jpg?v=1683220945",
        ],
        promotion: "15% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Emerald Necklace",
        price: 279,
        category: "Necklace",
        images: [
            "https://www.bloom-boutique.co.uk/media/catalog/product/s/t/sterling-silver-mother-of-pearl-fine-heart-personalised-necklace-07.jpg?width=265&height=265&store=default&image-type=image",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Stud Necklace",
        price: 799,
        category: "Earrings",
        images: [
            "https://accessorizelondon.in/cdn/shop/products/MA-28224682001_1.jpg?crop=center&height=1500&v=1657018951&width=1500",
        ],
        promotion: "Free Gift Wrap",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Chain Necklace",
        price: 599,
        category: "Necklace",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2i3MqCzOwqmLIHkLDETVL1uvE89dofpjPfA&usqp=CAU",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Pearl Necklace",
        price: 199,
        category: "Necklace",
        images: [
            "https://www.eu-bloom-boutique.com/media/catalog/product/p/e/personalised-star-birthstone-necklace-07_1.jpg?width=265&height=265&store=euro&image-type=image",
            "https://i.etsystatic.com/12787123/r/il/216890/3388777418/il_570xN.3388777418_mn93.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Amethyst Necklace",
        price: 159,
        category: "Necklace",
        images: [
            "https://i.etsystatic.com/12787123/r/il/216890/3388777418/il_570xN.3388777418_mn93.jpg",
            "https://i.etsystatic.com/12787123/r/il/216890/3388777418/il_570xN.3388777418_mn93.jpg",
        ],
        promotion: "20% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Ruby Necklace",
        price: 449,
        category: "Necklace",
        images: [
            "https://cdn.shopify.com/s/files/1/1197/3138/files/Gold-Pearl-and-Semi-Precious-Amazonite-Charm-Pendant-Necklace-N504-105_61828b00-2ecf-4ed6-ad98-08bda6339fb9_540x.jpg?v=1709583936",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Silver Hoop Necklace",
        price: "$89",
        category: "Necklace",
        images: [
            "https://cdn.myka.com/digital-asset/products/sweetheart-necklace-with-engraved-beads-in-gold-vermeil-33.jpg",
        ],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Tennis Necklace",
        price: "$1299",
        category: "Necklace",
        images: ["https://ie.pandora.net/dw/image/v2/BJRN_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw8ea1cd52/productimages/singlepackshot/368425C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5"],
        promotion: "Free Shipping",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Opal Necklace",
        price: 299,
        category: "Necklace",
        images: ["https://emmaisraelsson.com/bilder/artiklar/neck130.jpg?m=1687780712"],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Bangle",
        price: "$499",
        category: "Necklace",
        images: ["https://i.ebayimg.com/images/g/HpwAAOSwZmdjeJjz/s-l400.jpg"],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Sapphire Ring",
        price: 379,
        category: "Necklace",
        images: ["https://www.jewelili.com/cdn/shop/products/61RiXuIdUYL_2400x.jpg?v=1646809064"],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Emerald Stud Earrings",
        price: 349,
        category: "Necklace",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHIASlz3L-VvqkTR3CQ_GtJTZWyjruxTQ0MmRzp4LZhEwGNH3ewzRCGgGAwlbpqGKJzk&usqp=CAU"],
        promotion: "10% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Solitaire Ring",
        price: 899,
        category: "Necklace",
        images: ["https://www.jtidiamondco.com/wp-content/uploads/2018/11/N1214WG.jpg"],
        promotion: "Free Shipping",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Rose Gold Necklace",
        price: 329,
        category: "Necklace",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet8HSuSmLNnoiDbMxdja-5c6TPSsWOPxxCESWj7bkV6-V9tzJbsS17n6F2GKsGYRp-ek&usqp=CAU"],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Turquoise Bracelet",
        price: 149,
        category: "Necklace",
        images: ["https://www.rajjewels.com/media/catalog/product/cache/35ee8e651dee9f77109dd3d0747e56b7/d/n/dns3671_1_.jpg"],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Cross Pendant",
        price: 599,
        category: "Necklace",
        images: ["https://www.vanrijkestatejewellers.com/cdn/shop/products/24002.jpg"],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Gold Dangle Earrings",
        price: 199,
        category: "Necklace",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyg2CyfdLIY4hsSJ0xFXJWeU6R1HVsVrS3qJJ2596SYGcCz9OGWN8A8tGGkL4Uo6WPP64&usqp=CAU"],
        promotion: null,
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Ruby Bracelet",
        price: 379,
        category: "Necklace",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvwOjcTRz7rsMeFMOkrIaSkj71beKnJCkoulc6FJFi7-ThYvwKqz6L6_oWCcgKvIMFQU&usqp=CAU"],
        promotion: "15% Off",
    },
    {
        id: Math.random().toString(36).substring(7),
        name: "Diamond Cluster Ring",
        price: 699,
        category: "Necklace",
        images: ["https://images.vestiairecollective.com/cdn-cgi/image/f=auto/produit/39541849-1_7.jpg"],
        promotion: null,
    },
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

]
export default allProductsData;