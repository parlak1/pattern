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
    severity: "success" | "warning" | "danger" | "info" | null | undefined
    status: string
}

export type WorkIngredient = {
    ingredient: Ingredient
    amount: Measure | undefined
}

export type StringMap = {
    [key: string]: string
}

export const Severity = {
    normal: 'success',
    warning: 'warning',
    recall: 'danger'
}



