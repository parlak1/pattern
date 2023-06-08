import { Button } from "primereact/button"
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Fieldset } from 'primereact/fieldset'
import { InputText } from "primereact/inputtext"
import { FC, useRef, useState } from "react"
import { Ingredient, Unit, Work } from "../../models/types"
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
        const dt = useRef<any>(null)
        const [dialogHeader, setDialogHeader] = useState('')
        const [globalFilter, setGlobalFilter] = useState<any>()
        const [selectedWork, setSelectedWork] = useState<any>()
        const [visibleDialog, setVisibleDialog] = useState<boolean>(false)


        const openNew = () => {
            setVisibleDialog(true)
            // setDialogHeader('New Ingredient')
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
                    <Column field="name" header="Name"></Column>
                    <Column field="lot" header="Lot" ></Column>
                    <Column field="workIngredients" header="Ingredients used" body={work => JSON.stringify(work.workIngredients)}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>

                {/* <Fieldset legend="work.name">
                    <p className="m-0">
                        Work lot: "work.lot"
                    </p>
                    <DataTable value={workIngredients} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="name" header="Ingredient name"></Column>
                        <Column field="lot" header="Lot"></Column>
                        <Column field="measure" header="Amount" body={ingredientAmount + ' ' + selectedUnit?.code}></Column>
                    </DataTable>
                </Fieldset> */}

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