import React, { useState, useEffect } from 'react'
import './App.css'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { Dropdown } from 'primereact/dropdown';

import PrimeReact from 'primereact/api'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

    type Ingredient = {
        name: string | undefined
        lot: string | undefined
        measure: string | undefined
        children?: JSX.Element | JSX.Element[]
    }

    const measures = [
        { name: 'Pound', code: 'lb' },
        { name: 'Ounce', code: 'oz' },
        { name: 'Gallon', code: 'gal' },
        { name: 'Gram', code: 'g' },
        { name: 'Liter', code: 'l' }
    ]


const App = () => {

    PrimeReact.ripple = true
    const[showWorkInputGroup, setShowWorkInputGroup] = useState<boolean>(false)
    const[showWorkOutputGroup, setShowWorkOutputGroup] = useState<boolean>(false)
    const[workName, setWorkName] = useState<string>()
    const[workMeasure, setWorkMeasure] = useState<string>()
    const[workLot, setWorkLot] = useState<string>()
    const [selectedMeasure, setSelectedMeasure] = useState({name: '', code: ''})
    const[ingredients, setIngredients] = useState<Ingredient[]>([])
//     const[works, setWorks] = useState([])

//     useEffect(() => {
//     })

    const onClickCreateIngredient = () => {
        setShowWorkInputGroup(true)
    }

    const onClickPrepareIngredient = () => {
        // create ingredient
        const ingredient = {name: workName, measure: workMeasure, lot: workLot}
        setShowWorkOutputGroup(true)
        setIngredients(ingredients => [...ingredients, ingredient])
    }


  return (
    <div>
        <Button
            type="submit"
            label="Create Ingredient"
            icon="pi pi-check"
            className="p-ml-2"
            onClick={e => onClickCreateIngredient()}
        />
        {
            showWorkInputGroup &&
            <div>
                <div className="card">
                    <div className="p-fluid p-grid">
                        <div className="p-field p-col-12 p-md-4" style={{marginTop: 30}}>
                            <span className="p-float-label">
                                <InputText id="inputName" value={workName} onChange={e => setWorkName(e.target.value)} />
                                <label htmlFor="inputName">Name</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4" style={{marginTop: 30}}>
                            <span className="p-float-label">
                                <InputText id="inputLot" value={workLot} onChange={e => setWorkLot(e.target.value)} />
                                <label htmlFor="inputLot">Lot</label>
                            </span>
                        </div>
                        <div className="p-field p-col-12 p-md-4" style={{marginTop: 30}}>
                            <span className="p-float-label">
                                <InputText id="inputMeasure" value={workMeasure} onChange={e => setWorkMeasure(e.target.value)} />
                                <label htmlFor="inputMeasure">Measure</label>
                                <div className="card flex justify-content-center">
                                    <Dropdown
                                        value={selectedMeasure}
                                        onChange={e => setSelectedMeasure(e.value)}
                                        options={measures}
                                        optionLabel="name"
                                        placeholder="Select a Measurement"
                                        className="w-full md:w-14rem"
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <Button
                    type="submit"
                    label="Add Ingredient"
                    icon="pi pi-check"
                    className="p-ml-2"
                    onClick={e => onClickPrepareIngredient()}
                />
            </div>
        }
        {
            showWorkOutputGroup &&
            <Card title={workName} subTitle={`Lot: ${workLot}`} style={{marginTop: 30}}>
                <p className="m-0">
                    Amount: {workMeasure} {selectedMeasure.code} {ingredients.toString()}
                </p>
            </Card>
        }
    </div>
  )
}

export default App;
