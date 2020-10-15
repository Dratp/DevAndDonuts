export interface DonutList{
    count: number;
    results: Donuts;
}

export interface Donuts {
    id: number;
    ref: string;
    name: string;
}

export interface Donut {
    id: number;
    ref: string;
    name: string;
    calories: string;
    extras: string[];
    photo: string;
    photo_attribution: string;
}