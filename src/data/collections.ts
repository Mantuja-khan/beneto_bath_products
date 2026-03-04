import faucetImg from "@/assets/product-faucet.jpg";
import showerImg from "@/assets/product-shower.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";
import { Product } from "./types";
import { keftoProducts } from "./collections/kefto";
import { elizzaProducts } from "./collections/elizza";
import { eldoraProducts } from "./collections/eldora";
import { vinciProducts } from "./collections/vinci";
import { reeqaProducts } from "./collections/reeqa";
import { kuroProducts } from "./collections/kuro";
import { alliedsProducts } from "./collections/allieds";

// ================= FKE Series ================
// ================= HFT =================
import hft_001 from "@/assets/HFT-001.jpg";
import hft_002 from "@/assets/HFT-002.jpg";
import hft_003 from "@/assets/HFT-003.jpg";
import hft_004 from "@/assets/HFT-004.jpg";
import hft_005 from "@/assets/HFT-005.jpg";
import hft_006 from "@/assets/HFT-006.jpg";
// ================= HSR =================
import hsr_451 from "@/assets/HSR-451.jpg";
import hsr_452 from "@/assets/HSR-452.jpg";
import hsr_453 from "@/assets/HSR-453.jpg";
import hsr_454 from "@/assets/HSR-454.jpg";
// ================= OHS =================
import ohs_401 from "@/assets/OHS-401.jpg";
import ohs_402 from "@/assets/OHS-402.jpg";
import ohs_403 from "@/assets/OHS-403.jpg";
import ohs_404 from "@/assets/OHS-404.jpg";
import ohs_411 from "@/assets/OHS-411.jpg";
import ohs_412 from "@/assets/OHS-412.jpg";
import ohs_413 from "@/assets/OHS-413.jpg";
import ohs_414 from "@/assets/OHS-414.jpg";
import ohs_415 from "@/assets/OHS-415.jpg";
import ohs_416 from "@/assets/OHS-416.jpg";
import ohs_417 from "@/assets/OHS-417.jpg";
import ohs_418 from "@/assets/OHS-418.jpg";
import ohs_419 from "@/assets/OHS-419.jpg";
import ohs_420 from "@/assets/OHS-420.jpg";
import ohs_421 from "@/assets/OHS-421.jpg";

// ================= SAM =================
import sam_001 from "@/assets/SAM-001.jpg";
import sam_002 from "@/assets/SAM-002.jpg";
import sam_003 from "@/assets/SAM-003.jpg";
import sam_004 from "@/assets/SAM-004.jpg";
import sam_005 from "@/assets/SAM-005.jpg";
import sam_006 from "@/assets/SAM-006.jpg";

// ================= AVI =================
import AVI_306 from "@/assets/AVI-306.jpg";
import AVI_302 from "@/assets/AVI-302.jpg";
import AVI_305 from "@/assets/AVI-305.jpg";
import AVI_304 from "@/assets/AVI-304.jpg";
import AVI_303 from "@/assets/AVI-303.jpg";
import AVI_307 from "@/assets/AVI-307.jpg";

// ================= AKE =================
import AKE_301 from "@/assets/AKE-301.jpg";
import AKE_302 from "@/assets/AKE-302.jpg";
import AKE_303 from "@/assets/AKE-303.jpg";
import AKE_304 from "@/assets/AKE-304.jpg";
import AKE_305 from "@/assets/AKE-305.jpg";
import AKE_306 from "@/assets/AKE-306.jpg";
import AKE_307 from "@/assets/AKE-307.jpg";
import AKE_308 from "@/assets/AKE-308.jpg";
import AKE_309 from "@/assets/AKE-309.jpg";
import AKE_311 from "@/assets/AKE-311.jpg";

// ================= CCD =================
import ccd_212 from "@/assets/CCD-212.jpg";
import CCD_213 from "@/assets/CCD-213.jpg";
import ccd_214 from "@/assets/CCD-214.jpg";
import ccd_215 from "@/assets/CCD-215.jpg";
import ccd_216 from "@/assets/CCD-216.jpg";
import CCD_217 from "@/assets/CCD-217.jpg";
import ccd_218 from "@/assets/CCD-218.jpg";
import CCD_220 from "@/assets/CCD-220.jpg";

// ================= FLV =================
import FLV_251 from "@/assets/FLV-251.jpg";
import FLV_253 from "@/assets/FLV-253.jpg";
import FLV_254 from "@/assets/FLV-254.jpg";
import FLV_255 from "@/assets/FLV-255.jpg";
import FLV_257 from "@/assets/FLV-257.jpg";


// ================= CCP =================
import CCP_021 from "@/assets/CCP-021.jpg";
import CCP_022 from "@/assets/CCP-022.jpg";

// ================= PAV =================
import pav_001 from "@/assets/PAV-001.jpg";
import pav_002 from "@/assets/PAV-002.jpg";
import pav_003 from "@/assets/PAV-003.jpg";
import pav_004 from "@/assets/PAV-004.jpg";
import pav_005 from "@/assets/PAV-005.jpg";
// ================= WCP =================
import wcp_001 from "@/assets/WCP-001.jpg";
import wcp_002 from "@/assets/WCP-002.jpg";
import wcp_003 from "@/assets/WCP-003.jpg";
import wcp_004 from "@/assets/WCP-004.jpg";
import wcp_005 from "@/assets/WCP-005.jpg";
import AAS_301 from "@/assets/AAS-301.jpg";
import AAS_302 from "@/assets/AAS-302.jpg";
import AAS_303 from "@/assets/AAS-303.jpg"
import AAS_304 from "@/assets/AAS-304.jpg"
import AAS_305 from "@/assets/AAS-305.jpg"
import AAS_306 from "@/assets/AAS-306.jpg"
import AAS_307 from "@/assets/AAS-307.jpg"
import { torricProducts } from "./collections/torric";
import { asterProducts } from "./collections/aster";
import { klickProducts } from "./collections/klick";


export const collectionProducts: Product[] = [
    // Faucets
    { id: "basin-mixer", name: "Basin Mixer", price: "₹4,500", img: faucetImg, category: "Faucets", collection: "Kefto", description: "A sleek basin mixer with smooth single-lever operation and ceramic disc cartridge for drip-free performance.", specifications: { "Material": "Brass", "Finish": "Chrome", "Cartridge": "Ceramic Disc", "Spout Height": "120mm", "Weight": "1.2 kg", "Warranty": "10 Years" } },
    { id: "pillar-cock", name: "Pillar Cock", price: "₹2,800", img: faucetImg, category: "Faucets", collection: "Elizza", description: "Classic pillar cock faucet with quarter-turn operation and durable chrome finish.", specifications: { "Material": "Brass", "Finish": "Chrome", "Operation": "Quarter Turn", "Height": "150mm", "Weight": "0.8 kg", "W Warranty": "10 Years" } },
    { id: "wall-mixer", name: "Wall Mixer", price: "₹6,200", img: faucetImg, category: "Faucets", collection: "Eldora", description: "Premium wall mixer with hot and cold water mixing, ideal for modern bathrooms.", specifications: { "Material": "Brass", "Finish": "Chrome", "Cartridge": "Ceramic Disc", "Connection": "15mm", "Weight": "1.8 kg", "Warranty": "10 Years" } },
    { id: "sink-cock", name: "Sink Cock", price: "₹3,100", img: faucetImg, category: "Faucets", collection: "Reeqa", description: "Functional sink cock with swivel spout for kitchen and utility areas.", specifications: { "Material": "Brass", "Finish": "Chrome", "Spout Type": "Swivel", "Spout Length": "200mm", "Weight": "1.0 kg", "Warranty": "10 Years" } },
    { id: "concealed-stop-cock", name: "Concealed stop cock", price: "₹3,500", img: faucetImg, category: "Faucets", collection: "Kuro", description: "Concealed stop cock with sleek flange for a clean bathroom look.", specifications: { "Material": "Brass", "Finish": "Chrome", "Size": "15mm", "Flange": "Included", "Weight": "0.6 kg", "Warranty": "10 Years" } },
    { id: "bib-cock", name: "Bib Cock", price: "₹2,200", img: faucetImg, category: "Faucets", collection: "Torric", description: "Durable bib cock for outdoor and utility water supply points.", specifications: { "Material": "Brass", "Finish": "Chrome", "Operation": "Quarter Turn", "Size": "15mm", "Weight": "0.5 kg", "Warranty": "10 Years" } },
    { id: "angle-cock", name: "Angle Cock", price: "₹1,800", img: faucetImg, category: "Faucets", collection: "Aster", description: "Compact angle cock for connecting water supply lines to fixtures.", specifications: { "Material": "Brass", "Finish": "Chrome", "Size": "15mm", "Type": "Angular", "Weight": "0.4 kg", "Warranty": "10 Years" } },
    { id: "long-body-cock", name: "Long Body Cock", price: "₹3,800", img: faucetImg, category: "Faucets", collection: "Klick", description: "Extended body cock ideal for filling buckets and bathtubs.", specifications: { "Material": "Brass", "Finish": "Chrome", "Spout Length": "180mm", "Operation": "Quarter Turn", "Weight": "1.1 kg", "Warranty": "10 Years" } },
    // Showers
    {
        id: "hft-001",
        name: "HFT-001 Square (Brass) with 1 Mtr Flexible Chain",
        price: "₹1408",
        img: hft_001,
        category: "Showers",
        description: "Square hand shower in brass with 1 meter flexible chain.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ccp-021",
        name: "CCP-021 Bottle Trap 32mm with 9\" Pipe",
        price: "₹1518",
        img: CCP_021,
        category: "Accessories",
        description: "Bottle trap 32mm with 9 inch pipe.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ccp-022",
        name: "CCP-022 Bottle Trap 32mm with 12\" Pipe",
        price: "₹1608",
        img: CCP_022,
        category: "Accessories",
        description: "Bottle trap 32mm with 12 inch pipe.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "aas-303",
        name: "AAS-303 Soap Dish",
        price: "₹398",
        img: AAS_303,
        category: "Accessories",
        description: "Soap dish.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "aas-305",
        name: "AAS-305 Towel Ring",
        price: "₹368",
        img: AAS_305,
        category: "Accessories",
        description: "Towel ring.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "aas-306",
        name: "AAS-306 Robe Hook",
        price: "₹264",
        img: AAS_306,
        category: "Accessories",
        description: "Robe hook.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "aas-304",
        name: "AAS-304 Tumbler Holder",
        price: "₹444",
        img: AAS_304,
        category: "Accessories",
        description: "Tumbler holder.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "aas-302",
        name: "AAS-302 Towel Rod 24\"",
        price: "₹624",
        img: AAS_302,
        category: "Accessories",
        description: "Towel rod 24 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "aas-307",
        name: "AAS-307 Toilet Paper Holder",
        price: "₹484",
        img: AAS_307,
        category: "Accessories",
        description: "Toilet paper holder.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "aas-301",
        name: "AAS-301 Towel Rack",
        price: "₹1728",
        img: AAS_301,
        category: "Accessories",
        description: "Towel rack.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "avi-305",
        name: "AVI-305 Towel Ring",
        price: "₹744",
        img: AVI_305,
        category: "Accessories",
        description: "Towel ring.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "avi-304",
        name: "AVI-304 Tumbler Holder",
        price: "₹758",
        img: AVI_304,
        category: "Accessories",
        description: "Tumbler holder.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "avi-303",
        name: "AVI-303 Soap Dish",
        price: "₹758",
        img: AVI_303,
        category: "Accessories",
        description: "Soap dish.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "avi-307",
        name: "AVI-307 Toilet Paper Holder",
        price: "₹654",
        img: AVI_307,
        category: "Accessories",
        description: "Toilet paper holder.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "avi-306",
        name: "AVI-306 Robe Hook",
        price: "₹618",
        img: AVI_306,
        category: "Accessories",
        description: "Robe hook.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "avi-302",
        name: "AVI-302 Towel Rod 24\"",
        price: "₹1088",
        img: AVI_302,
        category: "Accessories",
        description: "Towel rod 24 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-303",
        name: "AKE-303 Soap Dish",
        price: "₹764",
        img: AKE_303,
        category: "Accessories",
        description: "Soap dish.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-305",
        name: "AKE-305 Towel Ring",
        price: "₹854",
        img: AKE_305,
        category: "Accessories",
        description: "Towel ring.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-306",
        name: "AKE-306 Robe Hook",
        price: "₹338",
        img: AKE_306,
        category: "Accessories",
        description: "Robe hook.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-304",
        name: "AKE-304 Tumbler Holder",
        price: "₹764",
        img: AKE_304,
        category: "Accessories",
        description: "Tumbler holder.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-311",
        name: "AKE-311 Liquid Soap Dispenser",
        price: "₹938",
        img: AKE_311,
        category: "Accessories",
        description: "Liquid soap dispenser.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-307",
        name: "AKE-307 Toilet Paper Holder",
        price: "₹854",
        img: AKE_307,
        category: "Accessories",
        description: "Toilet paper holder.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-308",
        name: "AKE-308 Dual Soap Dish",
        price: "₹1444",
        img: AKE_308,
        category: "Accessories",
        description: "Dual soap dish.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-309",
        name: "AKE-309 Soap Dish with Tumbler",
        price: "₹1444",
        img: AKE_309,
        category: "Accessories",
        description: "Soap dish with tumbler.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-302",
        name: "AKE-302 Towel Rod 24\"",
        price: "₹1574",
        img: AKE_302,
        category: "Accessories",
        description: "Towel rod 24 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ake-301",
        name: "AKE-301 Towel Rack",
        price: "₹4898",
        img: AKE_301,
        category: "Accessories",
        description: "Towel rack.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ccd-213",
        name: "CCD-213 45mm Super High Flow Diverter Body",
        price: "₹3584",
        img: CCD_213,
        category: "Accessories",
        description: "45mm super high flow diverter body.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ccd-217",
        name: "CCD-217 20mm Concealed Stop Cock Body Forged with 3/4\" Fitting",
        price: "₹938",
        img: CCD_217,
        category: "Accessories",
        description: "20mm concealed stop cock body forged with 3/4 inch fitting.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ccd-220",
        name: "CCD-220 20mm Concealed Stop Cock Body Forged with 1/2\" Fitting",
        price: "₹924",
        img: CCD_220,
        category: "Accessories",
        description: "20mm concealed stop cock body forged with 1/2 inch fitting.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "flv-257",
        name: "FLV-257 32mm Single Push with Square Flange",
        price: "₹3388",
        img: FLV_257,
        category: "Accessories",
        description: "32mm single push with square flange.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "flv-253",
        name: "FLV-253 40mm Single Push with Round Flange",
        price: "₹3444",
        img: FLV_253,
        category: "Accessories",
        description: "40mm single push with round flange.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "flv-254",
        name: "FLV-254 40mm Double Push with Round Flange",
        price: "₹3528",
        img: FLV_254,
        category: "Accessories",
        description: "40mm double push with round flange.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "hft-002",
        name: "HFT-002 Round (Brass) with 1 Mtr Flexible Chain",
        price: "₹1388",
        img: hft_002,
        category: "Showers",
        description: "Round hand shower in brass with 1 meter flexible chain.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hft-003",
        name: "HFT-003 Square XL (ABS) with 1 Mtr Flexible Chain",
        price: "₹764",
        img: hft_003,
        category: "Showers",
        description: "Square XL hand shower in ABS with 1 meter flexible chain.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hft-004",
        name: "HFT-004 Altron (ABS) with 1 Mtr Flexible Chain",
        price: "₹754",
        img: hft_004,
        category: "Showers",
        description: "Altron hand shower in ABS with 1 meter flexible chain.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hft-005",
        name: "HFT-005 Vega (ABS) with 1 Mtr Flexible Chain",
        price: "₹748",
        img: hft_005,
        category: "Showers",
        description: "Vega hand shower in ABS with 1 meter flexible chain.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hft-006",
        name: "HFT-006 Kuro (ABS) with 1 Mtr Flexible Chain",
        price: "₹708",
        img: hft_006,
        category: "Showers",
        description: "Kuro hand shower in ABS with 1 meter flexible chain.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hsr-451",
        name: "HSR-451 Multiflow Round 100mm with 1.5 Mtr Flexible Hose",
        price: "₹1134",
        img: hsr_451,
        category: "Showers",
        description: "Multiflow round hand shower 100mm with 1.5 meter flexible hose.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hsr-452",
        name: "HSR-452 Multiflow Round 100mm with 1.5 Mtr Flexible Hose",
        price: "₹1124",
        img: hsr_452,
        category: "Showers",
        description: "Multiflow round hand shower 100mm with 1.5 meter flexible hose.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hsr-453",
        name: "HSR-453 Single Flow Round 100mm with 1.5 Mtr Flexible Hose",
        price: "₹1074",
        img: hsr_453,
        category: "Showers",
        description: "Single flow round hand shower 100mm with 1.5 meter flexible hose.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "hsr-454",
        name: "HSR-454 Single Flow Round 100mm with 1.5 Mtr Flexible Hose",
        price: "₹1068",
        img: hsr_454,
        category: "Showers",
        description: "Single flow round hand shower 100mm with 1.5 meter flexible hose.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-401",
        name: "OHS-401 Ultraslim Square 100mm (SS 304)",
        price: "₹564",
        img: ohs_401,
        category: "Showers",
        description: "Ultraslim square overhead shower 100mm in SS 304.",
        specifications: {
            Material: "SS 304",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-402",
        name: "OHS-402 Ultraslim Square 150mm (SS 304)",
        price: "₹878",
        img: ohs_402,
        category: "Showers",
        description: "Ultraslim square overhead shower 150mm in SS 304.",
        specifications: {
            Material: "SS 304",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-403",
        name: "OHS-403 Ultraslim Square 200mm (SS 304)",
        price: "₹1398",
        img: ohs_403,
        category: "Showers",
        description: "Ultraslim square overhead shower 200mm in SS 304.",
        specifications: {
            Material: "SS 304",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-404",
        name: "OHS-404 Ultraslim Square 300mm (SS 304)",
        price: "₹2324",
        img: ohs_404,
        category: "Showers",
        description: "Ultraslim square overhead shower 300mm in SS 304.",
        specifications: {
            Material: "SS 304",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-411",
        name: "OHS-411 Square 150mm x 150mm",
        price: "₹1318",
        img: ohs_411,
        category: "Showers",
        description: "Square overhead shower 150mm x 150mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-412",
        name: "OHS-412 Square 200mm x 200mm",
        price: "₹2098",
        img: ohs_412,
        category: "Showers",
        description: "Square overhead shower 200mm x 200mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-413",
        name: "OHS-413 6 Inch Round 150mm",
        price: "₹988",
        img: ohs_413,
        category: "Showers",
        description: "6 inch round overhead shower 150mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-414",
        name: "OHS-414 5 Inch Round 125mm",
        price: "₹784",
        img: ohs_414,
        category: "Showers",
        description: "5 inch round overhead shower 125mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-415",
        name: "OHS-415 9 Inch Round Full Chrome 220mm",
        price: "₹2398",
        img: ohs_415,
        category: "Showers",
        description: "9 inch round full chrome overhead shower 220mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Full Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-416",
        name: "OHS-416 4 Inch Mercury Single Flow Round 100mm",
        price: "₹614",
        img: ohs_416,
        category: "Showers",
        description: "4 inch mercury single flow round overhead shower 100mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
    {
        id: "ohs-417",
        name: "OHS-417 4 Inch Galaxy Round 100mm",
        price: "₹568",
        img: ohs_417,
        category: "Showers",
        description: "4 inch Galaxy round overhead shower 100mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-418",
        name: "OHS-418 3 Inch Jai SF Round 75mm",
        price: "₹508",
        img: ohs_418,
        category: "Showers",
        description: "3 inch Jai single flow round overhead shower 75mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-419",
        name: "OHS-419 4 Inch Safari SF Round 100mm",
        price: "₹598",
        img: ohs_419,
        category: "Showers",
        description: "4 inch Safari single flow round overhead shower 100mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-420",
        name: "OHS-420 4 Inch Safari Multi Flow Round 100mm",
        price: "₹674",
        img: ohs_420,
        category: "Showers",
        description: "4 inch Safari multi flow round overhead shower 100mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "ohs-421",
        name: "OHS-421 4 Inch Mercury Multi Flow Round 100mm",
        price: "₹684",
        img: ohs_421,
        category: "Showers",
        description: "4 inch Mercury multi flow round overhead shower 100mm.",
        specifications: {
            Material: "Stainless Steel",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "sam-001",
        name: "SAM-001 Shower Arm with Flange Round 9 Inch",
        price: "₹268",
        img: sam_001,
        category: "Showers",
        description: "Round shower arm with flange 9 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "sam-002",
        name: "SAM-002 Shower Arm with Flange Round 12 Inch",
        price: "₹358",
        img: sam_002,
        category: "Showers",
        description: "Round shower arm with flange 12 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "sam-003",
        name: "SAM-003 Shower Arm with Flange Round 15 Inch",
        price: "₹448",
        img: sam_003,
        category: "Showers",
        description: "Round shower arm with flange 15 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "sam-004",
        name: "SAM-004 Shower Arm with Flange Square 9 Inch",
        price: "₹314",
        img: sam_004,
        category: "Showers",
        description: "Square shower arm with flange 9 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "sam-005",
        name: "SAM-005 Shower Arm with Flange Square 12 Inch",
        price: "₹404",
        img: sam_005,
        category: "Showers",
        description: "Square shower arm with flange 12 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "sam-006",
        name: "SAM-006 Shower Arm with Flange Square 18 Inch",
        price: "₹584",
        img: sam_006,
        category: "Showers",
        description: "Square shower arm with flange 18 inch.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    // Accessories
    {
        id: "ccd-212",
        name: "CCD-212 40mm High Flow Concealed Diverter Body",
        price: "₹3058",
        img: ccd_212,
        category: "Accessories",
        description: "40mm high flow concealed diverter body.",
        specifications: {
            Material: "Brass",
            Finish: "Forged",
            Warranty: "5 Years",
        },
    },

    {
        id: "ccd-214",
        name: "CCD-214 46mm 3 Inlet Concealed Diverter Body",
        price: "₹4458",
        img: ccd_214,
        category: "Accessories",
        description: "46mm 3 inlet concealed diverter body.",
        specifications: {
            Material: "Brass",
            Finish: "Forged",
            Warranty: "5 Years",
        },
    },

    {
        id: "ccd-215",
        name: 'CCD-215 15mm Concealed Stop Cock Body with 1/2" Fitting',
        price: "₹824",
        img: ccd_215,
        category: "Accessories",
        description: '15mm concealed stop cock body forged with 1/2 inch fitting.',
        specifications: {
            Material: "Brass",
            Finish: "Forged",
            Warranty: "5 Years",
        },
    },

    {
        id: "ccd-216",
        name: 'CCD-216 15mm Concealed Stop Cock Body Heavy with 3/4" Fitting',
        price: "₹914",
        img: ccd_216,
        category: "Accessories",
        description: '15mm concealed stop cock body heavy forged with 3/4 inch fitting.',
        specifications: {
            Material: "Brass",
            Finish: "Forged",
            Warranty: "5 Years",
        },
    },

    {
        id: "ccd-218",
        name: "CCD-218 Wall Mounted Concealed Basin Mixer Body 35mm",
        price: "₹2498",
        img: ccd_218,
        category: "Accessories",
        description: "Wall mounted concealed basin mixer body 35mm.",
        specifications: {
            Material: "Brass",
            Finish: "Forged",
            Warranty: "5 Years",
        },
    },

    {
        id: "flv-251",
        name: "FLV-251 40mm Single Push with Square Flange",
        price: "₹3474",
        img: FLV_251,
        category: "Accessories",
        description: "40mm single push flush valve with square flange.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "flv-255",
        name: "FLV-255 32mm Single Push with Round Flange",
        price: "₹3358",
        img: FLV_255,
        category: "Accessories",
        description: "32mm single push flush valve with round flange.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    // ================= Waste Coupling =================

    {
        id: "wcp-001",
        name: "WCP-001 Waste Coupling 32mm Full Thread (SS)",
        price: "₹238",
        img: wcp_001,
        category: "Accessories",
        description: "32mm waste coupling full thread in stainless steel.",
        specifications: {
            Material: "SS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "wcp-002",
        name: "WCP-002 Waste Coupling 32mm Half Thread (SS)",
        price: "₹238",
        img: wcp_002,
        category: "Accessories",
        description: "32mm waste coupling half thread in stainless steel.",
        specifications: {
            Material: "SS",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "wcp-003",
        name: "WCP-003 Waste Coupling 32mm Full Thread (Brass)",
        price: "₹434",
        img: wcp_003,
        category: "Accessories",
        description: "32mm waste coupling full thread in brass.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "wcp-004",
        name: "WCP-004 Waste Coupling 32mm Half Thread (Brass)",
        price: "₹434",
        img: wcp_004,
        category: "Accessories",
        description: "32mm waste coupling half thread in brass.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "wcp-005",
        name: "WCP-005 Waste Coupling 32mm Full Thread Brass 150mm",
        price: "₹754",
        img: wcp_005,
        category: "Accessories",
        description: "32mm waste coupling full thread brass 150mm length.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    // ================= Angle Valves =================

    {
        id: "pav-001",
        name: "PAV-001 Turbo Angle Valve",
        price: "₹488",
        img: pav_001,
        category: "Accessories",
        description: "Turbo angle valve.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "pav-002",
        name: "PAV-002 Kuro Project Angle Valve",
        price: "₹504",
        img: pav_002,
        category: "Accessories",
        description: "Kuro project angle valve.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "pav-003",
        name: "PAV-003 Square Angle Cock with Flange",
        price: "₹574",
        img: pav_003,
        category: "Accessories",
        description: "Square angle cock with flange.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "pav-004",
        name: "PAV-004 Fusion Angle Valve",
        price: "₹474",
        img: pav_004,
        category: "Accessories",
        description: "Fusion angle valve.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },

    {
        id: "pav-005",
        name: "PAV-005 Triangle Angle Valve",
        price: "₹408",
        img: pav_005,
        category: "Accessories",
        description: "Triangle angle valve.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Warranty: "5 Years",
        },
    },
];

export const collections = [
    "Vinci", "Kefto", "Elizza", "Eldora", "Reeqa", "Kuro", "Torric",
    "Aster", "Klick", "Allieds",
] as const;

export const collectionDetails = [
    { name: "Vinci", img: faucetImg },
    { name: "Kefto", img: faucetImg },
    { name: "Elizza", img: showerImg },
    { name: "Eldora", img: faucetImg },
    { name: "Reeqa", img: faucetImg },
    { name: "Kuro", img: faucetImg },
    { name: "Torric", img: faucetImg },
    { name: "Aster", img: faucetImg },
    { name: "Klick", img: faucetImg },
    { name: "Allieds", img: accessoriesImg },
];

export type CollectionName = typeof collections[number];

export const categories = ["Faucets", "Showers", "Accessories"] as const;

export const brandExclusiveProducts: Product[] = [
    // Vinci
    ...vinciProducts,

    // Kefto
    ...keftoProducts,

    // Elizza
    ...elizzaProducts,

    // Eldora
    ...eldoraProducts,

    // Reeqa
    ...reeqaProducts,

    // Kuro
    ...kuroProducts,

    // Torric
    ...torricProducts,
    // Aster
    ...asterProducts,
    //Klick
    ...klickProducts,

    // Bathroom

    // Accessories
    { id: "accessories-1", name: "Towel Rack 24 inch", price: "₹2,500", img: accessoriesImg, category: "Accessories", collection: "Accessories", description: "Exclusive towel rack.", specifications: { Material: "Stainless Steel", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "accessories-2", name: "Soap Dish Holder", price: "₹600", img: accessoriesImg, category: "Accessories", collection: "Accessories", description: "Exclusive soap dish.", specifications: { Material: "Brass & Glass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "accessories-3", name: "Liquid Dispenser", price: "₹1,100", img: accessoriesImg, category: "Accessories", collection: "Accessories", description: "Exclusive liquid dispenser.", specifications: { Material: "Brass & Glass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "accessories-4", name: "Robe Hook Single", price: "₹400", img: accessoriesImg, category: "Accessories", collection: "Accessories", description: "Exclusive robe hook.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },

    // Allieds
    ...alliedsProducts,

    // Essentials
    { id: "essentials-1", name: "Flush Valve Dual", price: "₹3,200", img: accessoriesImg, category: "Accessories", collection: "Essentials", description: "Exclusive flush valve.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "essentials-2", name: "Urinal Spreader", price: "₹450", img: accessoriesImg, category: "Accessories", collection: "Essentials", description: "Exclusive urinal spreader.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "essentials-3", name: "Jet Spray", price: "₹650", img: accessoriesImg, category: "Accessories", collection: "Essentials", description: "Exclusive jet spray.", specifications: { Material: "Brass/ABS", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "essentials-4", name: "Toilet Paper Holder", price: "₹750", img: accessoriesImg, category: "Accessories", collection: "Essentials", description: "Exclusive paper holder.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
];

export const getProductsByCollection = (collection: string) =>
    collectionProducts.filter((p) => p.collection === collection);
