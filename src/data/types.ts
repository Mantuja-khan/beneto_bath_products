export interface Product {
    id: string;
    name: string;
    price: string;
    img: string;
    category: "Faucets" | "Showers" | "Accessories";
    collection?: string;
    specifications: Record<string, string>;
    description: string;
}
