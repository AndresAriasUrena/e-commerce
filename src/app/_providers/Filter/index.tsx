'use client';

import React, { ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface IContextType {
    categoryFilters: string[]
    setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
    sort: string
    setSort: React.Dispatch<SetStateAction<string>>
}

export const INITAL_FILTER_DATA = {
    categoryFilters: [],
    setCategoryFilters: () => [],
    sort: '',
    setSort: () => '',
}

const FilterContext = createContext<IContextType>(INITAL_FILTER_DATA);

export const FilterProvider = ({ children }: {children: ReactNode}) =>{
    const [categoryFilters, setCategoryFilters] = useState([])
    const [sort,setSort] = useState('-createdAt')
    
    return(
        <FilterContext.Provider value={{
            categoryFilters,
            setCategoryFilters,
            sort,
            setSort,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = ()=> useContext(FilterContext)