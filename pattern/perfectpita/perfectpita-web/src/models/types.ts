export type Unit = {
    name?: string
    code?: string
}

export type Measure = {
    mass?: number
    unit?: Unit
}

export type Ingredient = {
    id?: string
    name?: string
    lot?: string
    severity?: string
    status?: string
    image?: string
    description?: string
    category?: string
    price?: number
    quantity?: number
    amount?: number
    rating?: number
    inventoryStatus?: 'INSTOCK' | 'OUTOFSTOCK'
    dateCreated?: number
    createdBy?:string
    dateUpdated?: number
    updatedBy?: string
}


export type Work = {
    name?: string
    lot?: string
    workIngredients?: WorkIngredient[]
    dateCreated?: number
    createdBy?:string
    dateUpdated?: number
    updatedBy?: string
}

export type WorkIngredient = {
    ingredient?: Ingredient
    amount?: Measure
}

export type StringMap = {
    [key: string]: string
}

export const Severity = {
    normal: 'success',
    warning: 'warning',
    recall: 'danger'
}


