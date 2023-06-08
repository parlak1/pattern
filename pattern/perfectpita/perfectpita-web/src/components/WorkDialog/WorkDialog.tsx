import { FC, useState } from "react"
import { Ingredient, Measure, Unit, Work } from "../../models/types"
import { Dialog } from "primereact/dialog"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { measures } from "../../common/db"
import { Button } from "primereact/button"

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
            setWork(work => setWorkIngredients(work, ingredient, ingredientAmount))
            setWorks([...works, work])
            setVisibleDialog(false)
        }

        const setWorkIngredients = (work: Work, ingredient: Ingredient, ingredientAmount: Measure): Work => {
            work.workIngredients
                ? work.workIngredients = [...work.workIngredients, { ingredient: ingredient, amount: ingredientAmount }]
                : work.workIngredients = [{ ingredient: ingredient, amount: ingredientAmount }]
            return work
        }


        return (
            <Dialog header="Create Work" visible={visibleDialog} style={{ width: '50vw' }} onHide={() => setVisibleDialog(false)} footer={footerContent}>
                <div className="card">
                    <div className="p-fluid p-grid">
                        <div className="p-field p-col-12 p-md-4" style={{ marginTop: 30 }}>
                            <span className="p-float-label">
                                <InputText id="inputName" value={work.name} onChange={e => setWork(work => { work.name = e.target.value; return work })} />
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
                                        value={ingredient}
                                        onChange={e => setIngredient(e.value)}
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
        )
    }

