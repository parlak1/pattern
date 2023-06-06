import { FC, useRef, useState } from "react"

import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Ingredient } from '../models/types'
import { Dialog } from 'primereact/dialog'
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Toolbar } from 'primereact/toolbar'

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
        const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>({ name: undefined, lot: undefined })
        const [products, setProducts] = useState(null)
        const [product, setProduct] = useState(emptyProduct)
        const [submitted, setSubmitted] = useState(false)
        const [productDialog, setProductDialog] = useState(false)
        const [deleteProductsDialog, setDeleteProductsDialog] = useState(false)
        const [selectedProducts, setSelectedProducts] = useState(null)
        const dt = useRef(null)
        const [globalFilter, setGlobalFilter] = useState(null)

        const [visibleDialog, setVisibleDialog] = useState<boolean>(false)
        const footerContent = (
            <div>
                <Button label="Cancel" icon="pi pi-times" onClick={() => setVisibleDialog(false)} className="p-button-text" />
                <Button label="Add Ingredient" icon="pi pi-check" onClick={() => onClickPrepareIngredient()} autoFocus />
            </div>
        )
        const header = (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                <h4 className="m-0">Manage Products</h4>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={e => setGlobalFilter(e.target.value)} placeholder="Search..." />
                </span>
            </div>
        )

        const onClickPrepareIngredient = () => {
            setIngredients([...ingredients, { name: ingredientName, lot: ingredientLot }])
            setIngredientName('')
            setIngredientLot('')
            setVisibleDialog(false)
        }

        const leftToolbarTemplate = () => {
            return (
                <div className="flex flex-wrap gap-2">
                    <Button
                        label="New"
                        icon="pi pi-plus"
                        severity="success"
                        onClick={openNew}
                    />
                    <Button
                        label="Delete"
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
        }

        const rightToolbarTemplate = () => {
            return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
        }

        const exportCSV = () => {
            dt.current?.exportCSV()
        }

        return (
            <div>
                <Button
                    label="Create Ingredient"
                    icon="pi pi-external-link"
                    onClick={() => setVisibleDialog(true)}
                />
                <Dialog header="New Ingredient" visible={visibleDialog} style={{ width: '50vw' }} onHide={() => setVisibleDialog(false)} footer={footerContent}>
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
                    paginator rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter}
                    header={header}
                >
                    <Column field="name" header="Ingredient name"></Column>
                    <Column field="lot" header="Lot"></Column>
                </DataTable>
            </div>
        )
    }