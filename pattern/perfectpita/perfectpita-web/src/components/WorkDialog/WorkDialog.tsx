import { FC, useState } from "react"
import { Ingredient, Measure, Unit, Work } from "../../models/types"
import { Dialog } from "primereact/dialog"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { measures } from "../../common/db"
import { Button } from "primereact/button"
import { MultiSelect } from 'primereact/multiselect'
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"

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
        const [work, setWork] = useState<Work>({ workIngredients: [] })
        const [ingredient, setIngredient] = useState<Ingredient>({})
        const [ingredientAmount, setIngredientAmount] = useState<any>()
        const [selectedUnit, setSelectedUnit] = useState<Unit>()
        const [selectedIngredients, setSelectedIngredients] = useState<any>(null)

        const footerContent = (
            <div>
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
            </div>
        )

        const onClickStartwork = () => {
            setWork(work => setUpWork(work, ingredient, ingredientAmount))
            setWorks([...works, work])
            setWork({ workIngredients: [] })
            setVisibleDialog(false)

        }

        const setUpWork = (work: Work, ingredient: Ingredient, ingredientAmount: Measure): Work => {
            work.lot = new Date().getTime().toString()
            work.workIngredients.push({ ingredient: ingredient, amount: ingredientAmount })
            // work.workIngredients
            //     ? work.workIngredients = [...work.workIngredients, { ingredient: ingredient, amount: ingredientAmount }]
            //     : work.workIngredients = [{ ingredient: ingredient, amount: ingredientAmount }]
            return work
        }

        const groupedItemTemplate = (option: any) => {
            return 'xxx'
            // return (
            //     <div className="flex align-items-center">
            //         <img alt={option.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
            //         <div>{option.label}</div>
            //     </div>
            // )
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
                        <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                            <span className="p-float-label">
                                <InputText id="inputName" value={work.name} onChange={e => setWork(work => { work.name = e.target.value; return work })} />
                                <label htmlFor="inputName">Work name</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
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
                        </div>
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
                                            header="Ingredient name"
                                        />
                                        <Column
                                            field="lot"
                                            header="Ingredient lot"
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

