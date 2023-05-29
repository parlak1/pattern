import React, { useState, useRef } from 'react';
import './App.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const App = () => {

    const[showWorkInputGroup, setShowWorkInputGroup] = useState<boolean>(false)
    const[showWorkOutputGroup, setShowWorkOutputGroup] = useState<boolean>(false)
    const[workName, setWorkName] = useState<string>()
    const[workMeasure, setWorkMeasure] = useState<string>()
    const[workLot, setWorkLot] = useState<string>()
    const[workTime, setWorkTime] = useState<string>()

    const onClickCreateWork = () => {
        setShowWorkInputGroup(true)
    }

    const setName = (value: string) => {
        setWorkName(value)
    }
    const setMeasure = (value: string) => {
        setWorkMeasure(value)
    }
    const setLot = (value: string) => {
        setWorkLot(value)
    }
    const setTime = (value: string) => {
        setWorkTime(value)
    }
    const onClickPrepareWork = () => {
        setShowWorkOutputGroup(true)
    }

  return (
    <div>
        <Button type="submit" label="Create Work" icon="pi pi-check" className="p-ml-2" onClick={(e) => onClickCreateWork()} />
        {
            showWorkInputGroup &&
            <div>
                <div>
                    Name: <InputText value={workName} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    Measure: <InputText value={workMeasure} onChange={(e) => setMeasure(e.target.value)} />
                </div>
                <div>
                    Lot: <InputText value={workLot} onChange={(e) => setLot(e.target.value)} />
                </div>
                <div>
                    Time: <InputText value={workTime} onChange={(e) => setTime(e.target.value)} />
                </div>
                <Button type="submit" label="Prepare Work" icon="pi pi-check" className="p-ml-2" onClick={(e) => onClickPrepareWork()} />
            </div>
        }
        {
            showWorkOutputGroup &&
            <div>
                "{workName}" with "{workLot}" having "{workMeasure}" is being prepared for "{workTime}"
            </div>
        }
    </div>
  )
}

export default App;
