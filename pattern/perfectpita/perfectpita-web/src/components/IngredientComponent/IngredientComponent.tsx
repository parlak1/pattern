import { FC, MouseEvent, ReactElement, useRef, useState } from "react"

import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { InputText } from "primereact/inputtext"
import { Ingredient } from '../../models/types'
import { Mode } from '../../models/types'
import { IngredientDialog } from "../IngredientDialog/IngredientDialog"

export const IngredientComponent: FC<{
    ingredients: Ingredient[],
    setIngredients(ingredient: Ingredient[]): void
}> = ({
    ingredients,
    setIngredients
}) => {
        const dt = useRef<DataTable<Ingredient[]>>(null)
        const [selectedIngredient, setSelectedIngredient] = useState<any>({})
        const [globalFilter, setGlobalFilter] = useState<string>()
        const [dialogHeader, setDialogHeader] = useState<string>('')
        const [dialogVisibility, setVisibleDialog] = useState<boolean>(false)
        const [mode, setMode] = useState<string>(Mode.create)

        const onClickCreate = (e: any): void => {
            setDialogHeader('New Ingredient')
            setVisibleDialog(true)
            setMode(Mode.create)
        }

        const onClickUsage = (e: any): void => {
            setDialogHeader(() => `Details for "${selectedIngredient.name}"`)
            setVisibleDialog(true)
            setMode(Mode.read)
        }

        const onClickUpdate = (e: any): void => {
            setDialogHeader(() => `Update "${selectedIngredient.name}"`)
            setVisibleDialog(true)
            setMode(Mode.update)
        }

        const onClickDelete = (e: any): void => {
            setDialogHeader(() => `Delete "${selectedIngredient.name}"`)
            setVisibleDialog(true)
            setMode(Mode.delete)
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
                    onClick={onClickCreate}
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
                    selectionMode="single"
                >
                    <Column
                        field="name"
                        header="Name"
                    />
                    <Column
                        field="lot"
                        header="Lot"
                    />
                    <Column
                        field="amount"
                        header="Amount"
                        body={(ingredient) => <>{ingredient.amount?.mass + ' ' + ingredient.amount?.unit?.code}</>}
                    />
                    <Column
                        header={<Button icon="pi pi-cog" rounded text aria-label="Manage" disabled />}
                        body={statusBodyTemplate}
                        headerStyle={{ width: '148px' }}
                    />
                </DataTable>

                <IngredientDialog
                    dialogHeader={dialogHeader}
                    dialogVisibility={dialogVisibility}
                    setVisibleDialog={setVisibleDialog}
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                    mode={mode}
                />

            </div>
        )
    }