import re

collections_path = r"c:\Users\gold\Downloads\beneto\bathbliss\src\data\collections.ts"

with open(collections_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update imports
old_import = """// ================= WCP =================
import wcp_001 from "@/assets/WCP-001.jpg";
import wcp_002 from "@/assets/WCP-002.jpg";
import wcp_003 from "@/assets/WCP-003.jpg";
import wcp_004 from "@/assets/WCP-004.jpg";
import wcp_005 from "@/assets/WCP-005.jpg";"""

new_import = """// ================= WCP, CCP, NZJ =================
import wcp_001 from "@/beneto_imgs/WCP001.jpg";
import wcp_002 from "@/beneto_imgs/WCP002.jpg";
import wcp_003 from "@/beneto_imgs/WCP003.jpg";
import nzj_002 from "@/beneto_imgs/NZJ002.jpg";
import nzj_003 from "@/beneto_imgs/NZJ003.jpg";
import ptmt_conn_pipe from "@/beneto_imgs/ptmt_conn_pipe.jpg";
import ss_conn_pipe from "@/beneto_imgs/ss_conn_pipe.jpg";"""

if old_import in content:
    content = content.replace(old_import, new_import, 1)
    print("Updated imports successfully")
else:
    # Try normalizing newlines
    old_import_crlf = old_import.replace("\n", "\r\n")
    new_import_crlf = new_import.replace("\n", "\r\n")
    if old_import_crlf in content:
        content = content.replace(old_import_crlf, new_import_crlf, 1)
        print("Updated imports successfully (CRLF)")
    else:
        print("Warning: old_import pattern not found!")

# 2. Add hft-001 if missing in collectionProducts
if 'id: "hft-001"' not in content:
    hft_002_pattern = '    {\n        id: "hft-002",'
    hft_001_block = """    {
        id: "hft-001",
        name: "HFT001 (Brass) Health Faucet with 1.0 Meter Flexible Chain",
        price: "₹1,440",
        img: hft_001,
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
        id: "hft-002", """
    if hft_002_pattern in content:
        content = content.replace(hft_002_pattern, hft_001_block, 1)
        print("Added hft-001 successfully")
    else:
        hft_002_crlf = hft_002_pattern.replace("\n", "\r\n")
        hft_001_crlf = hft_001_block.replace("\n", "\r\n")
        if hft_002_crlf in content:
            content = content.replace(hft_002_crlf, hft_001_crlf, 1)
            print("Added hft-001 successfully (CRLF)")
        else:
            print("Warning: hft-002 pattern not found!")

# 3. Replace waste coupling block with new products
old_wcp_block = """    // ================= Waste Coupling =================

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
    },"""

new_allieds_accessories_block = """    // ================= Waste Coupling =================

    {
        id: "wcp-001",
        name: "WCP001 Waste Coupling Full Thread – 32mm (Brass)",
        price: "₹495",
        img: wcp_001,
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
        id: "wcp-002",
        name: "WCP002 Waste Coupling Full Thread – 32mm (SS)",
        price: "₹325",
        img: wcp_002,
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
        id: "wcp-003",
        name: "WCP003 Waste Coupling Full Thread – 32mm in 6 Inch (Brass)",
        price: "₹695",
        img: wcp_003,
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

    // ================= Connection Pipes (PTMT) =================

    {
        id: "ccp-001",
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
        id: "ccp-002",
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
        id: "ccp-003",
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
        id: "ccp-004",
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

    // ================= Connection Pipes (SS) =================

    {
        id: "ccp-006",
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
        id: "ccp-007",
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
        id: "ccp-008",
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
        id: "ccp-009",
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

    // ================= Nozzle Jets =================

    {
        id: "nzj-002",
        name: "NZJ002 Nozzle Jet – Universal",
        price: "₹525",
        img: nzj_002,
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
        id: "nzj-003",
        name: "NZJ003 Nozzle Jet – American",
        price: "₹510",
        img: nzj_003,
        category: "Accessories",
        collection: "Allieds",
        description: "American style nozzle jet with flexible pipe and clamp engineered for high pressure hygiene spray and quick installation.",
        specifications: {
            Material: "ABS / Brass",
            Finish: "Chrome",
            Type: "American Nozzle Jet",
            Warranty: "3 Years",
        },
    },"""

if old_wcp_block in content:
    content = content.replace(old_wcp_block, new_allieds_accessories_block, 1)
    print("Replaced waste coupling block successfully")
else:
    old_wcp_crlf = old_wcp_block.replace("\n", "\r\n")
    new_wcp_crlf = new_allieds_accessories_block.replace("\n", "\r\n")
    if old_wcp_crlf in content:
        content = content.replace(old_wcp_crlf, new_wcp_crlf, 1)
        print("Replaced waste coupling block successfully (CRLF)")
    else:
        print("Warning: old_wcp_block pattern not found!")

with open(collections_path, "w", encoding="utf-8") as f:
    f.write(content)

print("collections.ts update complete")
