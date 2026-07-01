export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    category: 'printing' | 'binding' | 'copying' | 'specialized';
}

export interface ProductItem {
    id: string;
    name: string;
    specification: string;
    price: string;
    image: string;
    category: 'paper' | 'stationery' | 'stamps';
}