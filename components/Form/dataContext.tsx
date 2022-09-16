// create new react context

import React from 'react'
import useForm from './useData'

const DataContext = React.createContext({} as ReturnType<typeof useForm>)
export default DataContext
