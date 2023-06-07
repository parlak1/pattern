import { FC, useRef, useState } from "react"

import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Ingredient } from '../models/types'
import { Dialog } from 'primereact/dialog'
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Toolbar } from 'primereact/toolbar'
import { Tag } from 'primereact/tag'

export const IngredientComponent: FC<{
    ingredients: Ingredient[],
    setIngredients(ingredient: Ingredient[]): void
}> = ({
    ingredients,
    setIngredients
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

        const [ingredientName, setIngredientName] = useState<string>()
        const [ingredientLot, setIngredientLot] = useState<string>()
        const [selectedIngredient, setSelectedIngredient] = useState<any>()
        const [product, setProduct] = useState(emptyProduct)
        const [submitted, setSubmitted] = useState(false)
        const [productDialog, setProductDialog] = useState(false)
        const [deleteProductsDialog, setDeleteProductsDialog] = useState(false)
        const [selectedProducts, setSelectedProducts] = useState<any>(null)
        const dt = useRef<any>(null)
        const [globalFilter, setGlobalFilter] = useState<any>()
        const [visibleDialog, setVisibleDialog] = useState<boolean>(false)
        const header = (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                <h4 className="m-0">Manage Ingredients</h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={e => setGlobalFilter((e.target as HTMLInputElement).value)} placeholder="Search..." />
                </span>
            </div>
        )
        const footerContent = (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => setVisibleDialog(false)} className="p-button-text" />
                <Button label="Add Ingredient" icon="pi pi-check" onClick={() => onClickPrepareIngredient()} autoFocus />
            </div>
        )

        const onClickPrepareIngredient = () => {
            setIngredients([...ingredients, { name: ingredientName, lot: ingredientLot, severity: 'success', status: 'normal' }])
            setIngredientName('')
            setIngredientLot('')
            setVisibleDialog(false)
        }

        const leftToolbarTemplate = () => {
            return (
                <div className="flex flex-wrap gap-2">
                    <Button
                        label="New Ingredient"
                        icon="pi pi-plus"
                        severity="success"
                        onClick={openNew}
                    />
                    <Button
                        label="Delete Ingredient"
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

        const openNew = () => {
            setProduct(emptyProduct)
            setSubmitted(false)
            setProductDialog(true)
            setVisibleDialog(true)
        }

        const rightToolbarTemplate = () => 
            <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />

        const exportCSV = () => {
            dt.current?.exportCSV()
        }

        const statusBodyTemplate = (ingredinet: Ingredient) => {
            // return <Tag value={ingredinet.status} severity={ingredinet.severity}></Tag>
            return <Button label="See where it is used" link />
        }

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
                {/* <Button
                    label="Create Ingredient"
                    icon="pi pi-external-link"
                    onClick={() => setVisibleDialog(true)}
                /> */}
                <Dialog
                    header="Create New Ingredient"
                    visible={visibleDialog}
                    style={{ width: '50vw' }}
                    onHide={() => setVisibleDialog(false)}
                    footer={footerContent}
                >
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
                        </div>
                    </div>
                </Dialog>

                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                <DataTable
                    ref={dt}
                    value={ingredients}
                    selection={selectedIngredient}
                    onSelectionChange={e => setSelectedIngredient(e.value)}
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
                    <Column field="name" header="Ingredient name" editor={(options) => textEditor(options)}></Column>
                    <Column field="lot" header="Lot" editor={(options) => textEditor(options)}></Column>
                    <Column header="Works it is used" body={statusBodyTemplate}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
        )
    }