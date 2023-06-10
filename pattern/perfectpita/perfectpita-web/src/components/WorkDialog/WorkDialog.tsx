import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Dialog } from "primereact/dialog"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { FC, useState } from "react"
import { measures } from "../../common/db"
import { getNow } from "../../common/util"
import { Ingredient, Measure, Unit, Work } from "../../models/types"

export const WorkDialog: FC<{
    dialogHeader: string,
    visibleDialog: boolean
    setVisibleDialog(setter: boolean): void,
    ingredients: Ingredient[],
    works: Work[],
    setWorks(works: Work[]): void
}> = ({
    dialogHeader,
    visibleDialog,
    setVisibleDialog,
    ingredients,
    works,
    setWorks
}) => {
        const [work, setWork] = useState<Work>({})
        const [ingredient, setIngredient] = useState<Ingredient>({})
        const [ingredientAmount, setIngredientAmount] = useState<any>()
        const [selectedUnit, setSelectedUnit] = useState<Unit>()
        const [selectedIngredients, setSelectedIngredients] = useState<any>()

        const dialogFooter = <>
                <Button
                    label="Cancel"
                    icon="pi pi-times"
                    onClick={() => setVisibleDialog(false)}
                    className="p-button-text"
                />
                <Button
                    label="Start Work"
                    icon="pi pi-check"
                    onClick={() => onClickStartwork()}
                    autoFocus
                />
            </>

        const onClickStartwork = () => {
            setWork(work => setUpWork(work, ingredient, ingredientAmount))
            setWorks([work, ...works])
            setWork({ workIngredients: [] })
            setVisibleDialog(false)
        }

        const setUpWork = (work: Work, ingredient: Ingredient, ingredientAmount: Measure): Work => {
            work.lot = getNow().toString()
            work.workIngredients?.push({ ingredient: ingredient, amount: ingredientAmount })
            // work.workIngredients
            //     ? work.workIngredients = [...work.workIngredients, { ingredient: ingredient, amount: ingredientAmount }]
            //     : work.workIngredients = [{ ingredient: ingredient, amount: ingredientAmount }]
            return work
        }

        const amountBodyTemplate = () => {
            return <span className="p-float-label flex justify-content-center">
            <InputNumber
                id="inputMeasure"
                value={ingredientAmount}
                onChange={e => setIngredientAmount(e.value ?? 0)}
            />
            <label htmlFor="inputMeasure">Amount</label>
            <div className="card flex justify-content-center">
                <Dropdown
                id="inputUnit"
                    value={selectedUnit}
                    onChange={e => setSelectedUnit(e.value)}
                    options={measures}
                    optionLabel="name"
                    placeholder="Select unit"
                    className="w-full md:w-14rem"
                />
            <label htmlFor="inputUnit">Unit</label>
            </div>
        </span>
        }

        return (
            <Dialog
                header={dialogHeader}
                visible={visibleDialog}
                style={{ width: '50vw' }}
                onHide={() => setVisibleDialog(false)}
                footer={dialogFooter}
            >
                <div className="card">
                    <div className="p-fluid p-grid">
                        <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                            <span className="p-float-label">
                                <InputText id="inputName" value={work.name} onChange={e => setWork(work => { work.name = e.target.value; return work })} />
                                <label htmlFor="inputName">Work name</label>
                            </span>
                        </div>
                        {/* <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                            <span className="p-float-label flex justify-content-center">
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
                                        placeholder="Select unit"
                                        className="w-full md:w-14rem"
                                    />
                                </div>
                            </span>
                        </div> */}
                        <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                            <span className="p-float-label">
                                <div className="card">
                                    <DataTable
                                        value={ingredients}
                                        selection={selectedIngredients}
                                         onSelectionChange={e => setSelectedIngredients(e.value)}
                                    >
                                        <Column
                                            selectionMode="multiple"
                                            headerStyle={{ width: '3rem' }}
                                        />
                                        <Column
                                            field="name"
                                            header="Name"
                                        />
                                        <Column
                                            field="lot"
                                            header="Lot"
                                        />
                                           <Column
                                            field="lot"
                                            header="Amount"
                                            body={amountBodyTemplate}
                                        />
                                    </DataTable>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }