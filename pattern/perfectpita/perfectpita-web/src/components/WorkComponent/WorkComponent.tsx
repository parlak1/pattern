import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { InputNumber } from "primereact/inputnumber"
import { InputText } from "primereact/inputtext"
import { Ingredient, Unit, Work, WorkIngredient } from "../../models/types"
import { FC, useRef, useState } from "react"
import { Fieldset } from 'primereact/fieldset'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { measures } from "../../common/db"
import { Dialog } from "primereact/dialog"
import { Toolbar } from "primereact/toolbar"

export const WorkComponent: FC<{
    ingredients: Ingredient[],
    works: Work[],
    setWorks(work: Work[]): void
}> = ({
    ingredients,
    works,
    setWorks
}) => {
        let emptyProduct = {
            id: null,
            name: '',
            image: null,
            description: '',
            category: null,
            price: 0,
            quantity: 0,
            rating: 0,
            inventoryStatus: 'INSTOCK'
        }
        const [workName, setWorkName] = useState<string>()
        const [selectedIngredient, setSelectedIngredient] = useState<any>()
        const [workIngredients, setWorkIngredients] = useState<Ingredient[]>([])
        const [workLot, setWorkLot] = useState<string>('')
        const [ingredientAmount, setIngredientAmount] = useState<number | undefined>()
        const [selectedUnit, setSelectedUnit] = useState<Unit>()
        const [workIngredientXs, setWorkIngredientXs] = useState<WorkIngredient[]>([])
        const dt = useRef<any>(null)
        const [globalFilter, setGlobalFilter] = useState<any>()
        const [product, setProduct] = useState(emptyProduct)
        const [selectedWork, setSelectedWork] = useState<any>()
        const [deleteProductsDialog, setDeleteProductsDialog] = useState(false)
        const [selectedProducts, setSelectedProducts] = useState<any>(null)
        const [submitted, setSubmitted] = useState(false)
        const [productDialog, setProductDialog] = useState(false)
        const [visibleDialog, setVisibleDialog] = useState<boolean>(false)
        const header = (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                <h4 className="m-0">Manage Works</h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={e => setGlobalFilter((e.target as HTMLInputElement).value)} placeholder="Search..." />
                </span>
            </div>
        )
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
            setVisibleDialog(false)
        }

        const openNew = () => {
            setProduct(emptyProduct)
            setSubmitted(false)
            setProductDialog(true)
            setVisibleDialog(true)
        }

        const leftToolbarTemplate = () => {
            return (
                <div className="flex flex-wrap gap-2">
                    <Button
                        label="New Work"
                        icon="pi pi-plus"
                        severity="success"
                        onClick={openNew}
                    />
                    <Button
                        label="Delete Work"
                        icon="pi pi-trash"
                        severity="danger"
                        onClick={confirmDeleteSelected}
                        disabled={!selectedProducts || !selectedProducts.length}
                    />
                </div>
            )
        }
        const confirmDeleteSelected = () => {
            setDeleteProductsDialog(true)
        }

        const statusBodyTemplate = (ingredinet: Ingredient) => <Button label="See where it is used" link />

        const rightToolbarTemplate = () =>
            <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={() => dt.current?.exportCSV()} />

        const onRowEditComplete = (e: any) => {
            let _ingredients = [...ingredients]
            let { newData, index } = e

            _ingredients[index] = newData

            setSelectedIngredient(_ingredients)
        }

        const textEditor = (options: any) => {
            return <InputText type="text" value={options.value} onChange={e => options.editorCallback(e.target.value)} />;
        }

        return (
            <div>
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
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                <DataTable
                    ref={dt}
                    value={works}
                    selection={selectedWork}
                    onSelectionChange={e => setSelectedWork(e.value)}
                    dataKey="id"
                    paginator
                    rows={10}
                    editMode="row"
                    onRowEditComplete={onRowEditComplete}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter}
                    header={header}
                >
                    <Column field="name" header="Work name" editor={(options) => textEditor(options)}></Column>
                    <Column field="lot" header="Lot" editor={(options) => textEditor(options)}></Column>
                    <Column header="Ingredients used" body={statusBodyTemplate}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>

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