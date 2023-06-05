export type Unit = {
    name: string | undefined
    code: string | undefined
}

export type Measure = {
    mass: number | undefined
    unit: Unit | undefined
}

export type Ingredient = {
    name: string | undefined
    lot: string | undefined
    amount: Measure | undefined
}

export type StringMap = {
    [key: string]: string
}





