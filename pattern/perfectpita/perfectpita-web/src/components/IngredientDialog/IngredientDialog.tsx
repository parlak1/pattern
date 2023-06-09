import React, { useState, FC } from "react"
import { Ingredient, Unit } from "../../models/types"
import { Dialog } from "primereact/dialog"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import './IngredientDialog.css'
import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { measures } from "../../common/db"

export const IngredientDialog: FC<{
    dialogHeader: string,
    visibleDialog: boolean
    setVisibleDialog(setter: boolean): void,
    ingredients: Ingredient[],
    setIngredients(ingredient: Ingredient[]): void
}> = ({
    dialogHeader,
    visibleDialog,
    setVisibleDialog,
    ingredients,
    setIngredients
}) => {

        const [ingredient, setIngredient] = useState<Ingredient>({})
        const [selectedUnit, setSelectedUnit] = useState<Unit>()

        const footerContent = (
            <div>
                <Button
                    label="Cancel"
                    icon="pi pi-times"
                    onClick={() => setVisibleDialog(false)}
                    className="p-button-text"
                />
                <Button
                    label="Add Ingredient"
                    icon="pi pi-check"
                    onClick={() => onClickPrepareIngredient()}
                    autoFocus
                />
            </div>
        )

        const onClickPrepareIngredient = () => {
            setIngredients([...ingredients, {
                name: ingredient.name,
                lot: ingredient.lot,
                amount: ingredient.amount,
                dateCreated: getNow(),
                createdBy: 'ahmet sallabas'
            }])
            setIngredient({})
            setVisibleDialog(false)
        }

        const getNow = (): number => new Date().getTime()

        return (
            <Dialog
                header={dialogHeader}
                visible={visibleDialog}
                style={{ width: '50vw' }}
                onHide={() => setVisibleDialog(false)}
                footer={footerContent}
            >
                <div className="card">
                    <div className="p-fluid p-grid">
                        <div className="p-field p-col-12 p-md-4 input-element">
                            <span className="p-float-label">
                                <InputText
                                    id="inputName"
                                    value={ingredient.name}
                                    onChange={e => setIngredient(ingredient => { ingredient.name = e.target.value; return ingredient })}
                                />
                                <label htmlFor="inputName">Name</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4 input-element">
                            <span className="p-float-label">
                                <InputText
                                    id="inputLot"
                                    value={ingredient.lot}
                                    onChange={e => setIngredient(ingredient => { ingredient.lot = e.target.value; return ingredient })}
                                />
                                <label htmlFor="inputLot">Lot</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4 input-element">
                            <span className="p-float-label flex justify-content-center">
                                <InputNumber
                                    id="inputAmount"
                                    value={ingredient.amount?.mass}
                                    onChange={e => setIngredient(ingredient => {
                                        ingredient.amount 
                                        ? ingredient.amount.mass = e.value 
                                        : ingredient.amount.mass = null;
                                        ingredient.amount ? ingredient.amount.unit = selectedUnit : null;
                                        return ingredient
                                    })}
                                />
                                <label htmlFor="inputAmount">Amount</label>
                                <div className="card flex justify-content-center">
                                    <Dropdown
                                        value={selectedUnit}
                                        onChange={e => setSelectedUnit(e.value)}
                                        options={measures}
                                        optionLabel="name"
                                        placeholder="Select unit"
                                        className="w-full md:w-14rem"
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
//onChange={e => setIngredient((e: any, ingredient: Ingredient) => ingredient.amount = e.value)}