import React from "react";
import ProductSearch from "./ProductSearch";

const data = [
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 1,
        shop: "Shop 1",
        name: "Product 1",
        description: "Product 1 description",
        actualPrice: 100,
        discountPrice: 50,
        ratting: 4,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        shop: "Shop 2",
        name: "Product 2",
        description: "Product 2 description",
        actualPrice: 200,
        discountPrice: 100,
        ratting: 3,
        image: "https://picsum.photos/200/300",
    },
    {
        id: 3,
        shop: "Shop 3",
        name: "Product 3",
        description: "Product 3 description",
        actualPrice: 300,
        discountPrice: 150,
        ratting: 2.5,
        image: "https://picsum.photos/200/300",
    },
];

export default function Index() {
    return <div>{data && <ProductSearch products={data} />}</div>;
}
