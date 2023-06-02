    export type ObjeTipim = {
        ilk: number,
        ikinci: number
    }

    function returnSingleValue(inputA: number, inputB: number) { // 3, 5
        return inputA + inputB
    } // 8

    function returnMultiValue(inputA: number, inputB: number): ObjeTipim { // 3, 5
        return {"ilk":inputA*2, "ikinci":inputB*3}
        // return [inputA*2, inputB*3]
        
    } // [6, 15]
    // {"ilk":6, "ikici":15}

    let a = {} // obje
    let b = [] // array
    let c = () => {} // function

    let d:string
    let e:number
    let f:boolean
    let g:null
    let h:undefined
    let i:unknown
    let j:any
    let k:void
    let l:never
    let m:object

    const mySuperCallerFunction = () =>{
        let acabaNe: ObjeTipim
        // acabaNe = returnSingleValue(2, 3) // 5
        acabaNe = returnMultiValue(4, 5) // {"ilk": 8, "ikinci": 15}

        let {ilk, ikinci} = acabaNe

        // let mySyperArr = ['apple', 'orange']
        let[ilkim, ikincim] = ['apple', 'orange'] 
        // ilkim = 'apple'
        // ikincim = 'orange'
    }