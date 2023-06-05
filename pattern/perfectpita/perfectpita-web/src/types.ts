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
    children?: React.JSX.Element | React.JSX.Element[]
}

export type StringMap = {
    [key: string]: string
}





