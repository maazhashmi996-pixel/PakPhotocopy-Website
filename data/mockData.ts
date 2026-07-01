import { ServiceItem, ProductItem } from '@/types';

export const servicesData: ServiceItem[] = [
    {
        id: '1',
        title: 'Standard Photocopy',
        description: 'High-speed bulk photocopying with crisp contrast.',
        price: 'Rs. 5 / page',
        image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=600',
        category: 'copying'
    },
    {
        id: '2',
        title: 'Book Printing',
        description: 'Complete book printing with offset and digital press quality.',
        price: 'Rs. 2.5 / page (Bulk)',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600',
        category: 'printing'
    },
    {
        id: '3',
        title: 'Wedding Cards Designing & Printing',
        description: 'Premium luxury wedding cards with gold foil and embossing.',
        price: 'Starting from Rs. 80 / card',
        image: '/cards.png',
        category: 'specialized'
    },
    {
        id: '4',
        title: 'Laser & Color Printing',
        description: 'Ultra HD laser prints for documents and presentations.',
        price: 'Rs. 25 / page',
        image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=600',
        category: 'printing'
    },
    {
        id: '5',
        title: 'Map Printing & Copying',
        description: 'Large-scale high-definition architectural map printing.',
        price: 'Rs. 150 / sq.ft',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600',
        category: 'specialized'
    },
    {
        id: '6',
        title: 'Thesis Hard Binding',
        description: 'University approved premium golden letter hard binding.',
        price: 'Rs. 1,200 / book',
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600',
        category: 'binding'
    },
    {
        id: '7',
        title: 'Ring & Grip Binding',
        description: 'Flexible spiral, wire-o, and grip plastic binding for reports.',
        price: 'Rs. 150 / copy',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600',
        category: 'binding'
    },
    {
        id: '8',
        title: 'Ammonia Print & Plotter Printing',
        description: 'Industrial blue/ammonia blueprints and high-end plotter outputs.',
        price: 'Rs. 90 / print',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600',
        category: 'specialized'
    },
    {
        id: '9',
        title: 'English & Urdu Composing',
        description: 'Professional InPage Urdu and MS Word English drafting and alignment.',
        price: 'Rs. 100 / page',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600',
        category: 'printing'
    },
    {
        id: '10',
        title: 'Flex & Large Format Printing',
        description: 'High-quality outdoor banners, panaflex, and vinyl printing.',
        price: 'Rs. 40 / sq.ft',
        image: '/flex.png',
        category: 'printing'
    },
    {
        id: '11',
        title: '42 Inches Wide Scanning & Lamination',
        description: 'Large scale document preservation with heavy duty press lamination.',
        price: 'Rs. 200 / running foot',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600',
        category: 'specialized'
    },
    {
        id: '12',
        title: 'PVC Smart Cards',
        description: 'Employee IDs, student cards, and visitor passes printing.',
        price: 'Rs. 120 / card',
        image: '/PVC.png',
        category: 'specialized'
    }
];

export const productsData: ProductItem[] = [
    {
        id: 'p1',
        name: 'A4 Size Paper Rim (80 Gram)',
        specification: 'Premium Double A / Passport quality, 500 sheets.',
        price: 'Rs. 1,450 / Rim',
        image: 'a4.png',
        category: 'paper'
    },
    {
        id: 'p2',
        name: 'A4 Size Paper Rim (100 Gram)',
        specification: 'Ultra white heavy paper, ideal for thesis & resumes.',
        price: 'Rs. 1,950 / Rim',
        image: 'a4-100.png',
        category: 'paper'
    },
    {
        id: 'p3',
        name: 'A3 Size Paper Rim (80 Gram)',
        specification: 'Large format engineering blueprint & ledger sheets.',
        price: 'Rs. 2,900 / Rim',
        image: 'A3.png',
        category: 'paper'
    },
    {
        id: 'p4',
        name: 'A3 Size Paper Rim (100 Gram)',
        specification: 'Premium heavy weight large format presentation sheets.',
        price: 'Rs. 3,800 / Rim',
        image: 'A3-100.png',
        category: 'paper'
    },
    {
        id: 'p5',
        name: 'Rubber & Laser Stamps',
        specification: 'Automatic self-inking stamps with custom vector engraving.',
        price: 'Starting from Rs. 450',
        image: '/stamp.png',
        category: 'stamps'
    },
    {
        id: 'p6',
        name: 'Premium Office Stationery Pack',
        specification: 'Files, folders, highlighters, and structural binding assets.',
        price: 'Varies on Selection',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600',
        category: 'stationery'
    }
];