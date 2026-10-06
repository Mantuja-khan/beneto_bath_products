import { Product } from "../types";

import WCP_001 from "@/beneto_imgs/WCP001.jpg";
import WCP_002 from "@/beneto_imgs/WCP002.jpg";
import WCP_003 from "@/beneto_imgs/WCP003.jpg";
import NZJ_002 from "@/beneto_imgs/NZJ002.png";
import NZJ_003 from "@/beneto_imgs/NZJ003.png";
import ptmt_conn_pipe from "@/beneto_imgs/ptmt_conn_pipe.png";
import ss_conn_pipe from "@/beneto_imgs/ss_conn_pipe.png";
import HFT_001 from "@/beneto_imgs/HFT001.jpg";
import HFT_002 from "@/beneto_imgs/HFT002.jpg";
import HFT_003 from "@/beneto_imgs/HFT003.jpg";
import HFT_004 from "@/beneto_imgs/HFT004.jpg";
import HFT_005 from "@/beneto_imgs/HFT005.jpg";
import HFT_006 from "@/beneto_imgs/HFT006.jpg";
import HEX_001 from "@/beneto_imgs/HEX001.jpg";
import EXT_001 from "@/beneto_imgs/EXT001.jpg";
import EXT_003 from "@/beneto_imgs/EXT003.jpg";
import EXT_004 from "@/beneto_imgs/EXT004.jpg";
import EXT_005 from "@/beneto_imgs/EXT005.jpg";

export const alliedsProducts: Product[] = [
    // Health Faucets
    {
        id: "allied-hft-001",
        name: "HFT001 (Brass) Health Faucet with 1.0 Meter Flexible Chain",
        price: "₹1,440",
        img: HFT_001,
        category: "Accessories",
        collection: "Allieds",
        description: "Premium heavy-duty brass health faucet with precision flow trigger and 1.0 meter high-pressure flexible chain.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Accessories: "1.0 Meter Flexible Chain",
            Type: "Health Faucet",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-hft-002",
        name: "HFT002 (Brass) Health Faucet with 1.0 Meter Flexible Chain",
        price: "₹1,380",
        img: HFT_002,
        category: "Accessories",
        collection: "Allieds",
        description: "Round brass health faucet with smooth operating lever and 1.0 meter flexible chain.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Accessories: "1.0 Meter Flexible Chain",
            Type: "Health Faucet",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-hft-003",
        name: "HFT003 (ABS) Health Faucet with 1.0 Meter Flexible Chain",
        price: "₹995",
        img: HFT_003,
        category: "Accessories",
        collection: "Allieds",
        description: "High quality ABS health faucet in mirror chrome finish with 1.0 meter flexible chain.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Accessories: "1.0 Meter Flexible Chain",
            Type: "Health Faucet",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-hft-004",
        name: "HFT004 (ABS) Health Faucet with 1.0 Meter Flexible Chain",
        price: "₹995",
        img: HFT_004,
        category: "Accessories",
        collection: "Allieds",
        description: "Contemporary design ABS health faucet featuring 1.0 meter flexible chain and precision spray.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Accessories: "1.0 Meter Flexible Chain",
            Type: "Health Faucet",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-hft-005",
        name: "HFT005 (ABS) Health Faucet with 1.0 Meter Flexible Chain",
        price: "₹890",
        img: HFT_005,
        category: "Accessories",
        collection: "Allieds",
        description: "Vega styling ABS health faucet with high durability chrome plating and 1.0 meter flexible chain.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Accessories: "1.0 Meter Flexible Chain",
            Type: "Health Faucet",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-hft-006",
        name: "HFT006 (ABS) Health Faucet with 1.0 Meter Flexible Chain",
        price: "₹790",
        img: HFT_006,
        category: "Accessories",
        collection: "Allieds",
        description: "Kuro styling ABS health faucet with ergonomic soft trigger and 1.0 meter flexible chain.",
        specifications: {
            Material: "ABS",
            Finish: "Chrome",
            Accessories: "1.0 Meter Flexible Chain",
            Type: "Health Faucet",
            Warranty: "5 Years",
        },
    },

    // Waste Coupling
    {
        id: "allied-wcp-001",
        name: "WCP001 Waste Coupling Full Thread – 32mm (Brass)",
        price: "₹495",
        img: WCP_001,
        category: "Accessories",
        collection: "Allieds",
        description: "Premium heavy-duty brass 32mm waste coupling with full thread design for leak-proof washbasin installations.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Size: "32mm",
            Thread: "Full Thread",
            Type: "Waste Coupling",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-wcp-002",
        name: "WCP002 Waste Coupling Full Thread – 32mm (SS)",
        price: "₹325",
        img: WCP_002,
        category: "Accessories",
        collection: "Allieds",
        description: "Stainless steel full thread 32mm waste coupling engineered for durability, corrosion resistance, and optimal drainage.",
        specifications: {
            Material: "Stainless Steel (SS)",
            Finish: "Chrome / Mirror Polished",
            Size: "32mm",
            Thread: "Full Thread",
            Type: "Waste Coupling",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-wcp-003",
        name: "WCP003 Waste Coupling Full Thread – 32mm in 6 Inch (Brass)",
        price: "₹695",
        img: WCP_003,
        category: "Accessories",
        collection: "Allieds",
        description: "Extended 6 inch (150mm) full thread 32mm brass waste coupling ideal for thick vanity tops, vessel sinks, and countertop basins.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Size: "32mm in 6 Inch (150mm)",
            Thread: "Full Thread",
            Type: "Waste Coupling Long",
            Warranty: "5 Years",
        },
    },

    // PTMT Connection Pipes
    {
        id: "allied-ccp-001",
        name: "CCP001 PTMT Connection Pipe – 18 inch",
        price: "₹105",
        img: ptmt_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "High durability PTMT flexible connection pipe 18 inch with brass hex nuts for leak-proof water connections.",
        specifications: {
            Material: "PTMT",
            Size: "18 inch (450mm)",
            Type: "Flexible Connection Pipe",
            Warranty: "2 Years",
        },
    },
    {
        id: "allied-ccp-002",
        name: "CCP002 PTMT Connection Pipe – 24 inch",
        price: "₹120",
        img: ptmt_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "High durability PTMT flexible connection pipe 24 inch with brass hex nuts for geyser, basin, and cistern connection.",
        specifications: {
            Material: "PTMT",
            Size: "24 inch (600mm)",
            Type: "Flexible Connection Pipe",
            Warranty: "2 Years",
        },
    },
    {
        id: "allied-ccp-003",
        name: "CCP003 PTMT Connection Pipe – 30 inch",
        price: "₹140",
        img: ptmt_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "High durability PTMT flexible connection pipe 30 inch with heavy brass insert nuts for extended reach.",
        specifications: {
            Material: "PTMT",
            Size: "30 inch (750mm)",
            Type: "Flexible Connection Pipe",
            Warranty: "2 Years",
        },
    },
    {
        id: "allied-ccp-004",
        name: "CCP004 PTMT Connection Pipe – 36 inch",
        price: "₹160",
        img: ptmt_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "High durability PTMT flexible connection pipe 36 inch delivering maximum flexibility for demanding plumbing runs.",
        specifications: {
            Material: "PTMT",
            Size: "36 inch (900mm)",
            Type: "Flexible Connection Pipe",
            Warranty: "2 Years",
        },
    },

    // SS Connection Pipes
    {
        id: "allied-ccp-006",
        name: "CCP006 SS Connection Pipe – 18 inch",
        price: "₹185",
        img: ss_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "Heavy-duty SS 304 braided stainless steel flexible connection pipe 18 inch with chrome plated hex nuts.",
        specifications: {
            Material: "SS 304 Braided",
            Size: "18 inch (450mm)",
            Type: "SS Braided Connection Pipe",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-ccp-007",
        name: "CCP007 SS Connection Pipe – 24 inch",
        price: "₹215",
        img: ss_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "Heavy-duty SS 304 braided stainless steel flexible connection pipe 24 inch with chrome plated hex nuts.",
        specifications: {
            Material: "SS 304 Braided",
            Size: "24 inch (600mm)",
            Type: "SS Braided Connection Pipe",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-ccp-008",
        name: "CCP008 SS Connection Pipe – 30 inch",
        price: "₹265",
        img: ss_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "Heavy-duty SS 304 braided stainless steel flexible connection pipe 30 inch with chrome plated hex nuts.",
        specifications: {
            Material: "SS 304 Braided",
            Size: "30 inch (750mm)",
            Type: "SS Braided Connection Pipe",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-ccp-009",
        name: "CCP009 SS Connection Pipe – 36 inch",
        price: "₹295",
        img: ss_conn_pipe,
        category: "Accessories",
        collection: "Allieds",
        description: "Heavy-duty SS 304 braided stainless steel flexible connection pipe 36 inch with chrome plated hex nuts.",
        specifications: {
            Material: "SS 304 Braided",
            Size: "36 inch (900mm)",
            Type: "SS Braided Connection Pipe",
            Warranty: "5 Years",
        },
    },

    // Nozzle Jets
    {
        id: "allied-nzj-002",
        name: "NZJ002 Nozzle Jet – Universal",
        price: "₹525",
        img: NZJ_002,
        category: "Accessories",
        collection: "Allieds",
        description: "Universal fitting nozzle jet with flexible pipe and mounting clamp designed for modern commodes and water closets.",
        specifications: {
            Material: "ABS / Brass",
            Finish: "Chrome",
            Type: "Universal Nozzle Jet",
            Warranty: "3 Years",
        },
    },
    {
        id: "allied-nzj-003",
        name: "NZJ003 Nozzle Jet – American",
        price: "₹510",
        img: NZJ_003,
        category: "Accessories",
        collection: "Allieds",
        description: "American style nozzle jet with flexible pipe and clamp engineered for high pressure hygiene spray and quick installation.",
        specifications: {
            Material: "ABS / Brass",
            Finish: "Chrome",
            Type: "American Nozzle Jet",
            Warranty: "3 Years",
        },
    },

    // Hex Nipple & Extension Nipples
    {
        id: "allied-hex-001",
        name: "HEX001 Hex Nipple",
        price: "₹120",
        img: HEX_001,
        category: "Accessories",
        collection: "Allieds",
        description: "Heavy-duty brass hex nipple with precision threading for leak-proof pipe joint connections.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Type: "Hex Nipple",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-ext-001",
        name: "EXT001 Extension Nipple 1.0 inch",
        price: "₹105",
        img: EXT_001,
        category: "Accessories",
        collection: "Allieds",
        description: "Premium brass extension nipple 1.0 inch with chrome finish engineered for precision plumbing alignment.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Size: "1.0 inch (25mm)",
            Type: "Extension Nipple",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-ext-003",
        name: "EXT004 Extension Nipple 1.5 inch",
        price: "₹145",
        img: EXT_003,
        category: "Accessories",
        collection: "Allieds",
        description: "Premium brass extension nipple 1.5 inch with high quality chrome finish for extended wall reach.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Size: "1.5 inch (38mm)",
            Type: "Extension Nipple",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-ext-004",
        name: "EXT003 Extension Nipple 2 inch",
        price: "₹195",
        img: EXT_004,
        category: "Accessories",
        collection: "Allieds",
        description: "Heavy-duty brass extension nipple 2.0 inch designed for deep wall piping connections.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Size: "2.0 inch (50mm)",
            Type: "Extension Nipple",
            Warranty: "5 Years",
        },
    },
    {
        id: "allied-ext-005",
        name: "EXT004 Extension Nipple 2.5 inch",
        price: "₹240",
        img: EXT_005,
        category: "Accessories",
        collection: "Allieds",
        description: "Heavy-duty brass extension nipple 2.5 inch for maximum reach and reliable leak-free installations.",
        specifications: {
            Material: "Brass",
            Finish: "Chrome",
            Size: "2.5 inch (65mm)",
            Type: "Extension Nipple",
            Warranty: "5 Years",
        },
    },
];
