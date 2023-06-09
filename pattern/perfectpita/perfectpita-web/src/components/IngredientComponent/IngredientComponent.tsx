import { FC, MouseEvent, ReactElement, useRef, useState } from "react"

import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { InputText } from "primereact/inputtext"
import { Ingredient } from '../../models/types'
import { IngredientDialog } from "../IngredientDialog/IngredientDialog"

export const IngredientComponent: FC<{
    ingredients: Ingredient[],
    setIngredients(ingredient: Ingredient[]): void
}> = ({
    ingredients,
    setIngredients
}) => {
        const dt = useRef<any>(null)
        const [selectedIngredient, setSelectedIngredient] = useState<any>()
        const [globalFilter, setGlobalFilter] = useState<any>()
        const [dialogHeader, setDialogHeader] = useState('')
        const [visibleDialog, setVisibleDialog] = useState<boolean>(false)

        const openNew = () => {
            setVisibleDialog(true)
            setDialogHeader('New Ingredient')
        }

        const exportCSV = () => {
            dt.current?.exportCSV()
        }

        const header = (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                <Button
                    label="New Ingredient"
                    icon="pi pi-plus"
                    severity="success"
                    onClick={openNew}
                />
                <h2 className="m-0">Ingredients</h2>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        type="search"
                        onInput={e => setGlobalFilter((e.target as HTMLInputElement).value)}
                        placeholder="Search..."
                        style={{ marginRight: '3px' }}
                    />
                    <Button
                        label="Export"
                        icon="pi pi-upload"
                        className="p-button-help"
                        onClick={exportCSV}
                    />
                </span>
            </div>
        )


        const onClickUsage = (e: any): void => {
            setDialogHeader(() => `Details for ${e.target.value}`)
            setVisibleDialog(true)
        }

        const onClickUpdate = (e: any): void => {
            setDialogHeader(() => `Update ${e.target.value}`)
            setVisibleDialog(true)
        }

        const onClickDelete = (e: any): void => {
            setDialogHeader(() => `Delete ${e.target.value}`)
            setVisibleDialog(true)
        }

        const amountBodyTemplate = (ingredinet: Ingredient): ReactElement =>
            <>{ingredinet.amount?.mass + ' ' + ingredinet.amount?.unit?.code}</>

        const statusBodyTemplate = (ingredinet: Ingredient): ReactElement => {
            return <>
                <Button
                    title="Usage: see where this ingredient is used"
                    icon="pi pi-question"
                    onClick={e => onClickUsage(e)}
                    severity="help"
                    rounded
                    text
                />
                <Button
                    title="Update"
                    icon="pi pi-pencil"
                    onClick={e => onClickUpdate(e)}
                    severity="secondary"
                    rounded
                    text
                />
                <Button
                    title="Delete"
                    icon="pi pi-trash"
                    onClick={e => onClickDelete(e)}
                    severity="danger"
                    rounded
                    text
                />
            </>
        }

        const dateBodyTemplate = (ingredinet: Ingredient) =>
            <>{new Date(ingredinet.dateCreated ?? 0).toLocaleDateString("en-GB", { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</>

        return (
            <div>
                <DataTable
                    ref={dt}
                    value={ingredients}
                    selection={selectedIngredient}
                    onSelectionChange={e => setSelectedIngredient(e.value)}
                    dataKey="id"
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter}
                    header={header}
                    sortMode="multiple"
                >
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="lot" header="Lot" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="createdBy" header="Created By" sortable></Column>
                    <Column field="dateCreated" header="Date Created" body={dateBodyTemplate} sortable></Column>
                    <Column body={statusBodyTemplate} headerStyle={{ width: '148px' }}></Column>
                </DataTable>

                <IngredientDialog
                    dialogHeader={dialogHeader}
                    visibleDialog={visibleDialog}
                    setVisibleDialog={setVisibleDialog}
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                />
            </div>
        )
    }

            // return <Tag value={ingredinet.status} severity={ingredinet.severity}></Tag>

    // const onClickUsage = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
    //     setDialogHeader(() => `Update ${e.target}`)
    //     setVisibleDialog(true)
    // }