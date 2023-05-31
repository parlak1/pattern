export type Ingredient = {
    name: string | undefined
    lot: string | undefined
    measure: number | null
    children?: React.JSX.Element | React.JSX.Element[]
}

export const measures = [
    { name: 'Pound', code: 'lb' },
    { name: 'Ounce', code: 'oz' },
    { name: 'Gallon', code: 'gal' },
    { name: 'Gram', code: 'g' },
    { name: 'Liter', code: 'l' }
]

/*Object.keys(obj).forEach((prop)=> console.log(prop));*/

