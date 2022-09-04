// create new react context

import React from 'react'
import useData from './useData'

const DataContext = React.createContext({} as ReturnType<typeof useData>)
export default DataContext
