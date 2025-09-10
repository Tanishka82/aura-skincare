import logo from "./logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import VitaminCserum from "./VitaminCserum.jpg";
import Blood_Balm from "./Blood_Balm.jpg";
import backgroundvideo from "./backgroundvideo.mp4";
import DamaskRosecreamEyecream from "./DamaskRosecreamEyecream.jpg";
import RoseWaterHydrosol from "./RoseWaterHydrosol.jpg";
import SaffronRaspberryFaceOil from "./SaffronRaspberryFaceOil.jpg";
import TamanuFacewash from "./TamanuFacewash.jpg";
import NightCream from "./NightCream.jpg";
import PreBioticSerum from "./PreBioticSerum.jpg";
import BHASerum from "./BHASerum.jpg";
import HelicrypsumFaceoil from "./HelicrypsumFaceoil.jpg";
import HempFacewash from "./HempFacewash.jpg";
import PrickleyPearEyerollon from "./PrickleyPearEyerollon.jpg";
import UnderEyecreamquincollagen from "./UnderEyecreamquincollagen.jpg";
import VitaminCfacemask from "./VitaminCfacemask.png";
import Sheabutter from "./Sheabutter.png";
import SunscreenGel from "./SunscreenGel.jpg";
import niacinamide from "./niacinamide.jpg";
import freshface from "./freshface.png";
import DeTanFaceGel from "./DeTanFaceGel.jpg";
import AntiacneFaceWash from "./AntiacneFaceWash.jpg";
import Antiacneserum from "./Antiacneserum.jpg";
import Antiagingretinol from "./Antiagingretinol.jpg";
import hydration from "./hydration.jpeg";
import imagetwo from "./imagetwo.jpg";
import blood_balm_two from "./blood_balm_two.png";
import blood_balm_four from "./blood_balm_four.png";
import blood_balm_final from "./blood_balm_final.png";
export const assets = {
  logo,
  hero_img,
  cart_icon,
  bin_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
  VitaminCserum,
  Blood_Balm,
  backgroundvideo,
  DamaskRosecreamEyecream,
  RoseWaterHydrosol,
  SaffronRaspberryFaceOil,
  TamanuFacewash,
  NightCream,
  PreBioticSerum,
  BHASerum,
  HelicrypsumFaceoil,
  HempFacewash,
  PrickleyPearEyerollon,
  UnderEyecreamquincollagen,
  VitaminCfacemask,
  Sheabutter,
  SunscreenGel,
  niacinamide,
  freshface,
  DeTanFaceGel,
  AntiacneFaceWash,
  Antiacneserum,
  Antiagingretinol,
  hydration,
  imagetwo,
  blood_balm_two,
  blood_balm_four,
  blood_balm_final,
  // Make sure to import these if you intend to use them
  add_icon: null, // or the actual import if you have the file
  order_icon: null, // or the actual import if you have the file
  upload_area: null, // or the actual import if you have the file
  parcel_icon: null, // or the actual import if you have the file
};

export const products = [
  {
    _id: "jcone",
    name: "Blood Orange and Rosehip Lip Balm",
    description: "A deep nourishing Ecocert Certified organic lip balm.",
    price: 299,
    image: [Blood_Balm, blood_balm_two, blood_balm_four, blood_balm_final],
    category: "JuicyChemistry",
    subCategory: "LipCare",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "jctwo",
    name: "Damask Rose and Coffee Eye Cream",
    description:
      "This organic eye cream with Damask Rose (Gulab) and Coffee is a blend of essential fatty acids rich plant butters and oils that deeply moisturise the under eyes, reduce dark circles and fine lines.",
    price: 362,
    image: [DamaskRosecreamEyecream],
    category: "JuicyChemistry",
    subCategory: "EyeCream",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "jcthree",
    name: "Bulgarian Rose Water - (Hydrosol)",
    description:
      "Our certified organic, therapeutic-grade, Bulgarian Rose Water is 100% pure, natural & organic hydrosol. It is produced using a unique steam distillation technique combining centuries and traditions and modern technology of pure, fresh rose petals. 100% organically grown and harvested from the heart of the Bulgarian Rose Valley.When used as a facial toner, Damascus Rose Water tones the skin, balances the pH of the skin and cleanses the skin of all impurities. Soothes irritation and instantly perks up dull, tired-looking skin by actively retaining moisture and brightening the skin.Different in chemical composition from a desi gulab jal, Bulgarian Rose Water has an enchanting fragrance with toning & regenerating properties that fight skin ageing.",
    price: 340,
    image: [RoseWaterHydrosol],
    category: "JuicyChemistry",
    subCategory: "Hydrosol",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "jcfour",
    name: "Saffron and Red Raspberry Facial Oil",
    description:
      "This 100% Organic Kumkumadi Facial Oil is a blend of antioxidant-rich carrier oils, therapeutic essential oils and organic saffron (kesar) petals. It deeply moisturises the skin, restores your skin's glow, and helps promote a healthier skin barrier.",
    price: 455,
    image: [SaffronRaspberryFaceOil],
    category: "JuicyChemistry",
    subCategory: "Hydrosol",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "jcfive",
    name: "Tamanu, Kakadu Plum and Frankincense Face Wash",
    description:
      "An organic face wash for pigmentation and glowing skin gently cleanses the skin, while its antioxidant-rich formula helps promote even skin tone. It is a purifying and balancing cleanser that gently removes makeup, oils, pollutants, and impurities.Enriched with native botanical extracts for antioxidant protection plus soothing and calming botanicals that have anti-inflammatory properties. Assists with breakouts and hormonal acne creating a balanced complexion.",
    price: 238,
    image: [TamanuFacewash],
    category: "JuicyChemistry",
    subCategory: "FaceWash",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "jcsix",
    name: "Australian Sandalwood and Myrrh Night Cream",
    description:
      "This organic blend of Sandalwood (Chandan), Myrrh along with plant butters and oils helps deeply moisturise dry skin, delays the signs of ageing, and improves both the skin's texture and tonicity over time..",
    price: 489,
    image: [NightCream],
    category: "JuicyChemistry",
    subCategory: "FaceCream",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "jcseven",
    name: "Pre-Biotic Barrier Repair Serum",
    description:
      "This intensive solutions kit gets you 7 days closer to a healthier and strengthened skin surface. This barrier repair serum comes with Pichia Mushroom's prebiotic ferment supports a healthy microbiome and promotes skin regeneration. The bright-red resin called Dragon's Blood forms a protective barrier to shield skin against environmental stressors. Along with Gotu Kola, it helps repair the skin's barrier and supports collagen renewal. Lapsana improves radical resistance, and Brahmi soothes irritated skin. Being a humectant, Hyaluronic acid prevents moisture loss and improves skin's elasticity.",
    price: 599,
    image: [PreBioticSerum],
    category: "JuicyChemistry",
    subCategory: "Serum",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "jceight",
    name: "BHA Clarifying Serum",
    description:
      "Rich in Salicin, Willow Bark is a potent anti-inflammatory and exfoliating agent whereas Pineapple is a powerhouse of Bromelain. This naturally activated serum is formulated to unclog pores, control breakouts, combat hyperpigmentation and repair damaged skin. Antioxidant-rich White Tea and Turmeric helps reduce oxidative stress.",
    price: 799,
    image: [PreBioticSerum],
    category: "JuicyChemistry",
    subCategory: "Serum",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "jcnine",
    name: "Helichrysum and Rosehip Facial Oil",
    description:
      "This 100% organic facial oil for pigmentation is made with nourishing carrier oils and stimulating essential oils to help even out pigmentation, improve your skin's texture and promote overall skin health.",
    price: 455,
    image: [HelicrypsumFaceoil],
    category: "JuicyChemistry",
    subCategory: "Serum",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "jcten",
    name: "Hemp, Tea Tree and Neem Face Wash",
    description:
      "This gentle, yet potent, purifying formula is specifically designed to deep clean and balance oily and combination skin. Our unique blend of certified organic ingredients works in harmony to combat hormonal acne and breakouts, while effectively removing excess sebum, makeup, and impurities for a fresh and luminous appearance.Enriched with native botanical extracts for antioxidant protection plus soothing and calming botanicals that have calming properties our face wash helps reduce breakouts and hormonal acne creating a balanced complexion.",
    price: 601,
    image: [HempFacewash],
    category: "JuicyChemistry",
    subCategory: "FaceCream",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "jceleven",
    name: "Prickly Pear, Chia and Tamanu Roll On",
    description:
      "A versatile formula suitable for all skin types, designed to reduce dark circles and fine lines, helping to rejuvenate and brighten the under-eye area for a refreshed look.",
    price: 480,
    image: [PrickleyPearEyerollon],
    category: "JuicyChemistry",
    subCategory: "EyeCream",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "jctwelve",
    name: "Vitamin C Brightening Face Serum",
    description:
      "A versatile formula suitable for all skin types, designed to reduce dark circles and fine lines, helping to rejuvenate and brighten the under-eye area for a refreshed look.",
    price: 799,
    image: [VitaminCserum],
    category: "JuicyChemistry",
    subCategory: "Serum",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "tmcone",
    name: "Under Eye Cream -Quinoa & Collagen ",
    description:
      "A dermatologically-tested daytime solution to bid dark circles & puffiness goodbye.",
    price: 209,
    image: [UnderEyecreamquincollagen],
    category: "TheManCompany",
    subCategory: "EyeCream",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "tmctwo",
    name: "Vitamin C Sheet Mask - Vitamin C & Aloe Vera -Beard friendly face mask",
    description:
      "First ever 2-piece beard-friendly sheet mask for glowing skin.",
    price: 349,
    image: [VitaminCfacemask],
    category: "TheManCompany",
    subCategory: "SheetMask",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "tmcthree",
    name: "Moisturising Cream -Shea Butter And Vitamin E Facecream",
    description: "he daily dose of goodness your skin deserves",
    price: 349,
    image: [Sheabutter],
    category: "TheManCompany",
    subCategory: "FaceCream",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "tmcfour",
    name: "Sunscreen Gel SPF 50 PA+++ Facecream",
    description:
      "Introducing our Sunscreen Gel SPF 50 PA+++ specially crafted for the modern man's active lifestyle. Infused with nourishing Aloe Vera, rejuvenating Tomato Extract, and skin-loving Vitamin E, this non-comedogenic, oil-free formula provides superior sun protection without leaving any white cast. Shield your skin from harmful UV rays while enjoying a lightweight, refreshing feel.",
    price: 349,
    image: [SunscreenGel],
    category: "TheManCompany",
    subCategory: "FaceCream",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "tmcfive",
    name: " Niacinamide Face Serum -Dark Spots Reduction Serum",
    description: "Clear & blemish-free skin coming your way.",
    price: 499,
    image: [niacinamide],
    category: "TheManCompany",
    subCategory: "Serum",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "tmcsix",
    name: "Ultimate hydration Sheet Mask",
    description:
      "The sheet mask is designed to repair the damage that was caused by pollution and harmful UV rays.An antioxidant, Aloe Vera visibility and significantly improves the texture of your skin",
    price: 299,
    image: [freshface],
    category: "TheManCompany",
    subCategory: "SheetMask",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "tmcseven",
    name: "De-Tan Face Gel I Aloe Vera & Turmeric Facewash",
    description:
      "Regular sun exposure causes skin to tan, and we’re here to ban it.",
    price: 299,
    image: [DeTanFaceGel],
    category: "TheManCompany",
    subCategory: "FaceWash",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "tmceight",
    name: "Anti-Acne Face Wash - Neem & Salicylic Acid Facewash",
    description: "Ditch the acne & embrace clear skin",
    price: 225,
    image: [AntiacneFaceWash],
    category: "TheManCompany",
    subCategory: "FaceWash",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
  {
    _id: "tmcnine",
    name: "2% Salicylic Acid - Anti-Acne Face Serum",
    description:
      " Gentle yet potent everyday exfoliant to reduce acne & excess oil.",
    price: 225,
    image: [Antiacneserum],
    category: "TheManCompany",
    subCategory: "Serum",
    sizes: ["1 x Item"],
    bestSeller: false,
  },
  {
    _id: "tmcten",
    name: "1% Retinol - Anti-Aging Face Serum",
    description: "A powerful age-reviving potion.",
    price: 499,
    image: [Antiagingretinol],
    category: "TheManCompany",
    subCategory: "Serum",
    sizes: ["1 x Item"],
    bestSeller: true,
  },
];
