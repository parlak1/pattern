import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { Ingredient, Unit, WorkIngredient } from "../models/types"
import { FC, useState } from "react"
import { Fieldset } from 'primereact/fieldset';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { measures } from "../common/db"
import { Dialog } from "primereact/dialog"

export const WorkComponent: FC<{
    ingredients: Ingredient[]
}> = ({
    ingredients
}) => {

        const [workName, setWorkName] = useState<string>()
        const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>({ name: undefined, lot: undefined })
        const [workIngredients, setWorkIngredients] = useState<Ingredient[]>([])
        const [workLot, setWorkLot] = useState<string>('')
        const [ingredientAmount, setIngredientAmount] = useState<number | undefined>()
        const [selectedUnit, setSelectedUnit] = useState<Unit>()
        const [workIngredientXs, setWorkIngredientXs] = useState<WorkIngredient[]>([])
        const [visibleDialog, setVisibleDialog] = useState<boolean>(false)
        const footerContent = (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => setVisibleDialog(false)} className="p-button-text" />
                <Button label="Add Ingredient" icon="pi pi-check" onClick={() => onClickAddIngredient()} autoFocus />
            </div>
        )

        const onClickCreateIngredient = () => {
            setWorkLot(Math.random().toString())
            setVisibleDialog(true)
        }

        const onClickAddIngredient = () => {
            setWorkIngredients([...workIngredients, selectedIngredient])
            setWorkIngredientXs([...workIngredientXs, { ingredient: selectedIngredient, amount: { mass: ingredientAmount, unit: selectedUnit } }])
        }

        return (
            <div>
                <Button
                    label="Create Work"
                    icon="pi pi-external-link"
                    onClick={() => onClickCreateIngredient()}
                />
                <Dialog header="Create Work" visible={visibleDialog} style={{ width: '50vw' }} onHide={() => setVisibleDialog(false)} footer={footerContent}>
                    <div className="card">
                        <div className="p-fluid p-grid">
                            <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                                <span className="p-float-label">
                                    <InputText id="inputName" value={workName} onChange={e => setWorkName(e.target.value)} />
                                    <label htmlFor="inputName">Work name</label>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                                <span className="p-float-label">
                                    <InputNumber
                                        id="inputMeasure"
                                        value={ingredientAmount}
                                        onChange={e => setIngredientAmount(e.value ?? 0)}
                                    />
                                    <label htmlFor="inputMeasure">Ingredient amount</label>
                                    <div className="card flex justify-content-center">
                                        <Dropdown
                                            value={selectedUnit}
                                            onChange={e => setSelectedUnit(e.value)}
                                            options={measures}
                                            optionLabel="name"
                                            placeholder="Select a Measurement"
                                            className="w-full md:w-14rem"
                                        />
                                    </div>
                                </span>
                            </div>
                            <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                                <span className="p-float-label">
                                    <div className="card flex justify-content-center">
                                        <Dropdown
                                            id="inputIngredient"
                                            value={selectedIngredient}
                                            onChange={e => setSelectedIngredient(e.value)}
                                            options={ingredients}
                                            optionLabel="name"
                                            placeholder="Select a Measurement"
                                            className="w-full md:w-14rem"
                                        />
                                        <label htmlFor="inputIngredient">Ingredient</label>
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                </Dialog>
                <Fieldset legend={workName}>
                    <p className="m-0">
                        Work lot: {workLot}
                    </p>
                    <DataTable value={workIngredients} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="name" header="Ingredient name"></Column>
                        <Column field="lot" header="Lot"></Column>
                        <Column field="measure" header="Amount" body={ingredientAmount + ' ' + selectedUnit?.code}></Column>
                    </DataTable>
                </Fieldset>

            </div>
        )
    }