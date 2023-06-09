import React, { useState, FC } from "react"
import { Ingredient, Unit } from "../../models/types"
import { Dialog } from "primereact/dialog"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import './IngredientDialog.css'
import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { measures } from "../../common/db"
import { getNow } from "../../common/util"

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
                    onClick={() => onClickCreateIngredient()}
                    autoFocus
                />
            </div>
        )

        const onClickCreateIngredient = () => {
            setIngredients([{
                name: ingredient.name,
                lot: ingredient.lot,
                amount: ingredient.amount,
                dateCreated: getNow(),
                createdBy: 'ahmet sallabas'
            }, ...ingredients])
            setIngredient({})
            setVisibleDialog(false)
        }

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
                                    onChange={e => setIngredient(old => {
                                        old.name = e.target.value
                                        return old
                                    })}
                                />
                                <label htmlFor="inputName">Name</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4 input-element">
                            <span className="p-float-label">
                                <InputText
                                    id="inputLot"
                                    value={ingredient.lot}
                                    onChange={e => setIngredient(old => {
                                        old.lot = e.target.value
                                        return old
                                    })}
                                />
                                <label htmlFor="inputLot">Lot</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4 input-element">
                            <span className="p-float-label flex justify-content-center">
                                <InputNumber
                                    id="inputAmount"
                                    value={ingredient.amount?.mass}
                                    onChange={e => {setIngredient((old: Ingredient) => {
                                            let amount = old.amount ?? {}
                                            amount = {mass: e.value ?? undefined}
                                            old.amount = amount
                                            return old
                                        })
                                    }
                                    }
                                />
                                <label htmlFor="inputAmount">Amount</label>
                                <div className="card flex justify-content-center">
                                    <Dropdown
                                        value={ingredient.amount?.unit}
                                        onChange={e => setIngredient((old: Ingredient) => {
                                            let amount = old.amount ?? {}
                                            amount.unit = e.value
                                            old.amount = amount
                                            return old
                                        })}
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