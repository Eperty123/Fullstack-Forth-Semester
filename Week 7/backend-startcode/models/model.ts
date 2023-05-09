interface Car {
    id: string;
    model: string;
    year: number;
    price: number;
    color: string;

    [key: string]: any;
}

interface CarData {
    cars : Car[];
}