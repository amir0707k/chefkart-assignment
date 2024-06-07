import { useEffect, useState } from "react"
import { DishesContext } from "./DishesContext"

export const DishesProvider = ({children}) => {
    const [dishes, setDishes] = useState([])
    const [popularDishes, setPopularDishes] = useState([])
    useEffect(  () => {
        const fetchData =async () => {
            try {
            const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
            const result = await response.json()
            console.log(result);
            await setDishes(result.dishes)
            await setPopularDishes(result.popularDishes)
        } catch (error) {
            console.log(error);
        }
        }

        fetchData()
    }, [])
    console.log(dishes);
    return (
        <DishesContext.Provider value={{dishes, popularDishes}}>
            {children}
        </DishesContext.Provider>
    )
}