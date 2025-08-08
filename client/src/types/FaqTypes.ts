export interface FAQ {
    id: string;
    question: string;
    answer: string;
    createdAt: string;
}

export interface FAQResponse {
    message: string;
    data: FAQ[];
}