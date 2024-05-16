export type Product = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string,
}

export type User = {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "password": string,
    "role": string,
}