interface coordParams {
    latitude:number;
    longitude:number;
    address:string;
    latitudeDelta:number;
    longitudeDelta:number
}

export interface restaurantParams {
    _id:string;
    name:string;
    description:string;
    imageUrl:string;
    foodType:string
    time:string;
    deliveryTimeFrom:number;
    deliveryTimeTo:number;
    deliveryMethod:string;
    rating:number;
    ratingCount:number;
    coords:coordParams

}

export interface restaurantCategoryParams {
    _id:string;
    name:string;
    imageUrl:string
}


export interface menuParams{
    _id:string;
    menuName: string;
    description:string;
    restaurantId:string
}

export interface additives{
    _id:string;
    name:string;
    parentId:string;
    price?:number
    disabled?:boolean
}

interface additivesParams{
    _id?:string;
    additiveType:string;
    additiveInfo:additives[]
}
export interface menuItemParams {
    _id: string;
    name?:string;
    image?:string;
    description?:string;
    price:number;
    quantity:number;
    menuId?:string;
    restaurantId?:string
    additives?:additivesParams[]
    selectedAdditives?:additives[]
    additiveTotal?:number
    subTotal?:number
    totalPrice?:number;
    qCount?:number
    length?:number;
    deliveryTimeFrom?:number
    deliveryTimeTo?:number

}

export interface CartItem {
    cart: menuItemParams[];
}

export interface CartState {
    cart:{
        cart:menuItemParams[];
        length:number
    }
}