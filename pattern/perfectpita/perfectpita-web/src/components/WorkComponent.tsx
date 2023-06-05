import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { Ingredient } from "../models/types"
import { FC, useState } from "react"
import { Fieldset } from 'primereact/fieldset';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const WorkComponent: FC<{
    ingredients: Ingredient[]
}> = ({
    ingredients
}) => {

        const [workName, setWorkName] = useState<string>()
        const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>({ name: undefined, lot: undefined, amount: undefined })
        const [showCreateWorkGroup, setShowCreateWorkGroup] = useState<boolean>(false)
        const [workIngredients, setWorkIngredients] = useState<Ingredient[]>([])
        const [workLot, setWorkLot] = useState<string>('')

        const onClickPrepareIngredient = () => {
            // create ingredient
            // setShowWorkOutputGroup(true)
            // setIngredients(ingredients => [...ingredients, { name: workName, lot: workLot, measure: workMeasure }])
            // setWorkName('')
            // setWorkLot('')
            // setWorkMeasure(0)
        }

        const onClickCreateIngredient = () => {
            setShowCreateWorkGroup(true)
            setWorkLot(Math.random().toString())
        }

        const onClickAddIngredient = () => {
            setWorkIngredients([...workIngredients, selectedIngredient])
        }

        const measureBodyTemplate = (ingredient: Ingredient): string => {
            return ingredient.amount?.mass + ' ' + ingredient.amount?.unit?.code
        }

        return (
            <div>
                <Button
                    type="submit"
                    label="Create Work"
                    icon="pi pi-check"
                    className="p-ml-2"
                    onClick={e => onClickCreateIngredient()}
                />
                {
                    showCreateWorkGroup &&
                    <div className="card">
                        <div className="p-fluid p-grid">
                            <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                                <span className="p-float-label">
                                    <InputText id="inputName" value={workName} onChange={e => setWorkName(e.target.value)} />
                                    <label htmlFor="inputName">Name</label>
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
                            <Button
                                type="submit"
                                label="Add ingredient"
                                icon="pi pi-check"
                                className="p-ml-2"
                                onClick={e => onClickAddIngredient()}
                            />
                        </div>

                        <Button
                            type="submit"
                            label="Start Work"
                            icon="pi pi-check"
                            className="p-ml-2"
                            onClick={e => onClickPrepareIngredient()}
                        />
                    </div>
                }
                <Fieldset legend={workName}>
                    <p className="m-0">
                        Work lot: {workLot}
                    </p>
                    <DataTable value={workIngredients} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="name" header="Ingredient name"></Column>
                        <Column field="lot" header="Lot"></Column>
                        <Column field="measure" header="Amount" body={measureBodyTemplate}></Column>
                    </DataTable>
                </Fieldset>

            </div>
        )
    }