import { useState } from 'react'
import './App.css'

import PrimeReact from 'primereact/api'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { WorkComponent } from './WorkComponent'
import { IngredientComponent } from './IngredientComponent'
import { Ingredient} from './types'

const App = () => {

    PrimeReact.ripple = true
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

    return (
        <div>
            {
                <IngredientComponent 
                    ingredients={ingredients} 
                    setIngredients={setIngredients} 
                />
            }
            {
                <WorkComponent
                    ingredients={ingredients}
                />
            }
        </div>
    )
}

export default App;
