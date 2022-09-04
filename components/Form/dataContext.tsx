// create new react context

import React from 'react'
import useData from './useData'

const DataContext = React.createContext(null as ReturnType<typeof useData>)
export default DataContext
