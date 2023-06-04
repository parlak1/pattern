export type Measure = {
    name: string | undefined
    code: string | undefined
}

export const Measures = [
    { name: 'Pound', code: 'lb' },
    { name: 'Ounce', code: 'oz' },
    { name: 'Gallon', code: 'gal' },
    { name: 'Gram', code: 'g' },
    { name: 'Liter', code: 'l' }
]

export type Ingredient = {
    name: string | undefined
    lot: string | undefined
    measure: {amount: number, unit: Measure} | undefined
    children?: React.JSX.Element | React.JSX.Element[]
}

export type StringMap = {
    [key: string]: string
}





