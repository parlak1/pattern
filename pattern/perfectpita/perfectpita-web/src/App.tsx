import { useState } from 'react'
import './App.css'

import PrimeReact from 'primereact/api'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { WorkComponent } from './components/WorkComponent/WorkComponent'
import { IngredientComponent } from './components/IngredientComponent/IngredientComponent'
import { Ingredient, Work } from './models/types'

const App = () => {
    PrimeReact.ripple = true
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [works, setWorks] = useState<Work[]>([])

    return (
        <div>
            <IngredientComponent
                ingredients={ingredients}
                setIngredients={setIngredients}
            />
            <WorkComponent
                ingredients={ingredients}
                works={works}
                setWorks={setWorks}
            />
        </div>
    )
}

export default App;
