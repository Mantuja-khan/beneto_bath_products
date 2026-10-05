import os

allieds_path = r"c:\Users\gold\Downloads\beneto\bathbliss\src\data\collections\allieds.ts"

allieds_content = """import { Product } from "../types";
import CCD_212 from "@/assets/CCD-212.jpg";
import CCD_213 from "@/assets/CCD-213.jpg";
import CCD_214 from "@/assets/CCD-214.jpg";
import CCD_215 from "@/assets/CCD-215.jpg";
import CCD_216 from "@/assets/CCD-216.jpg";
import CCD_217 from "@/assets/CCD-217.jpg";
import CCD_218 from "@/assets/CCD-218.jpg";
import CCD_220 from "@/assets/CCD-220.jpg";
import CCP_021 from "@/assets/CCP-021.jpg";
import CCP_022 from "@/assets/CCP-022.jpg";
import FLV_251 from "@/assets/FLV-251.jpg";
import FLV_253 from "@/assets/FLV-253.jpg";
import FLV_254 from "@/assets/FLV-254.jpg";
import FLV_255 from "@/assets/FLV-255.jpg";
import FLV_257 from "@/assets/FLV-257.jpg";
import PAV_001 from "@/assets/PAV-001.jpg";
import PAV_002 from "@/assets/PAV-002.jpg";
import PAV_003 from "@/assets/PAV-003.jpg";
import PAV_004 from "@/assets/PAV-004.jpg";
import PAV_005 from "@/assets/PAV-005.jpg";
import WCP_001 from "@/beneto_imgs/WCP001.jpg";
import WCP_002 from "@/beneto_imgs/WCP002.jpg";
import WCP_003 from "@/beneto_imgs/WCP003.jpg";
import NZJ_002 from "@/beneto_imgs/NZJ002.jpg";
import NZJ_003 from "@/beneto_imgs/NZJ003.jpg";
import ptmt_conn_pipe from "@/beneto_imgs/ptmt_conn_pipe.jpg";
import ss_conn_pipe from "@/beneto_imgs/ss_conn_pipe.jpg";
import HFT_001 from "@/beneto_imgs/HFT001.jpg";
import HFT_002 from "@/beneto_imgs/HFT002.jpg";
import HFT_003 from "@/beneto_imgs/HFT003.jpg";
import HFT_004 from "@/beneto_imgs/HFT004.jpg";
import HFT_005 from "@/beneto_imgs/HFT005.jpg";
import HFT_006 from "@/beneto_imgs/HFT006.jpg";

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

    // Other Allied Plumbing Accessories
    { id: "ccd-212", name: "CCD-212 Allied Accessories", price: "₹1200", img: CCD_212, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "ccd-213", name: "CCD-213 Allied Accessories", price: "₹1250", img: CCD_213, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "ccd-214", name: "CCD-214 Allied Accessories", price: "₹1300", img: CCD_214, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "ccd-215", name: "CCD-215 Allied Accessories", price: "₹1350", img: CCD_215, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "ccd-216", name: "CCD-216 Allied Accessories", price: "₹1400", img: CCD_216, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "ccd-217", name: "CCD-217 Allied Accessories", price: "₹1450", img: CCD_217, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "ccd-218", name: "CCD-218 Allied Accessories", price: "₹1500", img: CCD_218, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "ccd-220", name: "CCD-220 Allied Accessories", price: "₹1600", img: CCD_220, category: "Accessories", collection: "Allieds", description: "Premium bathroom accessory from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },

    { id: "ccp-021", name: "CCP-021 Allied Part", price: "₹850", img: CCP_021, category: "Accessories", collection: "Allieds", description: "Durable plumbing component from Allieds.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "1 Year" } },
    { id: "ccp-022", name: "CCP-022 Allied Part", price: "₹900", img: CCP_022, category: "Accessories", collection: "Allieds", description: "Durable plumbing component from Allieds.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "1 Year" } },

    { id: "flv-251", name: "FLV-251 Flush Valve", price: "₹3100", img: FLV_251, category: "Accessories", collection: "Allieds", description: "High quality flush valve from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "flv-253", name: "FLV-253 Flush Valve", price: "₹3200", img: FLV_253, category: "Accessories", collection: "Allieds", description: "High quality flush valve from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "flv-254", name: "FLV-254 Flush Valve", price: "₹3300", img: FLV_254, category: "Accessories", collection: "Allieds", description: "High quality flush valve from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "flv-255", name: "FLV-255 Flush Valve", price: "₹3400", img: FLV_255, category: "Accessories", collection: "Allieds", description: "High quality flush valve from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "flv-257", name: "FLV-257 Flush Valve", price: "₹3500", img: FLV_257, category: "Accessories", collection: "Allieds", description: "High quality flush valve from the Allieds collection.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },

    { id: "pav-001", name: "PAV-001 Angle Valve", price: "₹600", img: PAV_001, category: "Accessories", collection: "Allieds", description: "Premium angle valve accessory.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "pav-002", name: "PAV-002 Angle Valve", price: "₹650", img: PAV_002, category: "Accessories", collection: "Allieds", description: "Premium angle valve accessory.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "pav-003", name: "PAV-003 Angle Valve", price: "₹700", img: PAV_003, category: "Accessories", collection: "Allieds", description: "Premium angle valve accessory.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "pav-004", name: "PAV-004 Angle Valve", price: "₹750", img: PAV_004, category: "Accessories", collection: "Allieds", description: "Premium angle valve accessory.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
    { id: "pav-005", name: "PAV-005 Angle Valve", price: "₹800", img: PAV_005, category: "Accessories", collection: "Allieds", description: "Premium angle valve accessory.", specifications: { Material: "Brass", Finish: "Chrome", Warranty: "5 Years" } },
];
"""

with open(allieds_path, "w", encoding="utf-8") as f:
    f.write(allieds_content)

print("allieds.ts updated successfully")
