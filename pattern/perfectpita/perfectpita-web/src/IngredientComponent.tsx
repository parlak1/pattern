import React, { FC, useState } from "react"

import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { Ingredient, Measures } from './types'

export const IngredientComponent: FC<{
    ingredients: Ingredient[],
    setIngredients(ingredient: Ingredient[]): void
}> = ({
    ingredients,
    setIngredients
}) => {

        const [ingredientName, setIngredientName] = useState<string>()
        const [ingredientLot, setIngredientLot] = useState<string>()
        const [ingredientMeasure, setIngredientMeasure] = useState<number>()
        const [selectedMeasure, setSelectedMeasure] = useState({ name: '', code: '', amount: 0 })
        const [showWorkOutputGroup, setShowWorkOutputGroup] = useState<boolean>(false)
        const [showCreateIngredientGroup, setShowCreateIngredientGroup] = useState<boolean>(false)

        const onClickPrepareIngredient = () => {
            setShowWorkOutputGroup(true)
            // create ingredient
            setIngredients([...ingredients, { name: ingredientName, lot: ingredientLot, measure: {ingredientMeasure, selectedMeasure} }])
            setIngredientName('')
            setIngredientLot('')
            setIngredientMeasure(0)
        }

        const onClickCreateIngredient = () => {
            setShowCreateIngredientGroup(true)
        }

        return (
            <div>
                <Button
                    type="submit"
                    label="Create Ingredient"
                    icon="pi pi-check"
                    className="p-ml-2"
                    onClick={e => onClickCreateIngredient()}
                />
                {
                    showCreateIngredientGroup &&
                    <div className="card">
                        <div className="p-fluid p-grid">
                            <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                                <span className="p-float-label">
                                    <InputText id="inputName" value={ingredientName} onChange={e => setIngredientName(e.target.value)} />
                                    <label htmlFor="inputName">Ingredient name</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                                <span className="p-float-label">
                                    <InputText id="inputLot" value={ingredientLot} onChange={e => setIngredientLot(e.target.value)} />
                                    <label htmlFor="inputLot">Ingredient lot</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                                <span className="p-float-label">
                                    <InputNumber
                                        id="inputMeasure"
                                        value={ingredientMeasure}
                                        onChange={e => setIngredientMeasure(e.value ?? 0)}
                                    />
                                    <label htmlFor="inputMeasure">Ingredient amount</label>
                                    <div className="card flex justify-content-center">
                                        <Dropdown
                                            value={selectedMeasure}
                                            onChange={e => setSelectedMeasure(e.value)}
                                            options={Measures}
                                            optionLabel="name"
                                            placeholder="Select a Measurement"
                                            className="w-full md:w-14rem"
                                        />
                                    </div>
                                </span>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            label="Add Ingredient"
                            icon="pi pi-check"
                            className="p-ml-2"
                            onClick={e => onClickPrepareIngredient()}
                        />
                    </div>
                }
            </div>
        )
    }