import { Button } from "primereact/button"
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from "primereact/inputtext"
import { FC, ReactElement, useRef, useState } from "react"
import { Ingredient, Work, WorkIngredient } from "../../models/types"
import { WorkDialog } from "../WorkDialog/WorkDialog"

export const WorkComponent: FC<{
    ingredients: Ingredient[],
    works: Work[],
    setWorks(work: Work[]): void
}> = ({
    ingredients,
    works,
    setWorks
}) => {
        const dt = useRef<DataTable<Ingredient[]>>(null)
        const [dialogHeader, setDialogHeader] = useState('')
        const [globalFilter, setGlobalFilter] = useState<string>()
        const [selectedWork, setSelectedWork] = useState<any>()
        const [visibleDialog, setVisibleDialog] = useState<boolean>(false)

        const openNew = () => {
            setVisibleDialog(true)
            setDialogHeader('Create Work')
        }

        const exportCSV = () => {
            dt.current?.exportCSV()
        }

        const header = (
            <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                <Button
                    label="New Work"
                    icon="pi pi-plus"
                    severity="success"
                    onClick={openNew}
                />
                <h2 className="m-0">Works</h2>
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


        const bodyTemplate = (workIngredients: WorkIngredient[]) =>
            JSON.stringify(workIngredients)
        // workIngredients.map(wi => wi.ingredient?.name + ' ' + wi.ingredient?.amount?.unit)
        // .ingredientAmount + ' ' + selectedUnit?.code


        const workIngredientsBody = (work: Work) =>
            <DataTable value={work.workIngredients} tableStyle={{ minWidth: '50rem' }} showGridlines >
                <Column
                    field="name"
                    header="Name"
                    body={workIngredient => workIngredient.ingredient.name}
                />
                <Column
                    field="lot"
                    header="Lot"
                    body={workIngredient => workIngredient.ingredient.lot}
                />
                <Column
                    field="workIngredients"
                    header="Amount"
                    body={workIngredient => workIngredient.amount + ' ' + workIngredient.measure?.unit?.code}
                />
            </DataTable>

        const statusBodyTemplate = (ingredinet: Ingredient): ReactElement => {
            return <>
                <Button
                    title="See the work details"
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

        return (
            <div>
                <DataTable
                    ref={dt}
                    value={works}
                    selection={selectedWork}
                    onSelectionChange={e => setSelectedWork(e.value)}
                    dataKey="id"
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter}
                    header={header}
                >
                    <Column
                        field="name"
                        header="Name"
                        headerTooltip="Work name"
                        headerTooltipOptions={{ position: "bottom" }}
                    />
                    <Column
                        field="lot"
                        header="Lot"
                        headerTooltip="Work lot"
                        headerTooltipOptions={{ position: "bottom" }}
                    />
                    <Column
                        field="workIngredients"
                        header="Ingredients used"
                        headerTooltipOptions={{ position: "bottom" }}
                        headerStyle={{}}
                        headerTooltip="Ingredients used in a given work"
                        body={workIngredientsBody}
                        style={{ padding: 0 }}
                    />
                    <Column
                        headerTooltip="Manage a work"
                        headerTooltipOptions={{ position: "bottom" }}
                        body={statusBodyTemplate}
                        headerStyle={{ width: '148px', textAlign: 'center' }}
                        header={<Button icon="pi pi-cog" rounded text aria-label="Manage" disabled />}
                    />
                </DataTable>

                <WorkDialog
                    dialogHeader={dialogHeader}
                    visibleDialog={visibleDialog}
                    setVisibleDialog={setVisibleDialog}
                    ingredients={ingredients}
                    setWorks={setWorks}
                    works={works}
                />

            </div>
        )
    }