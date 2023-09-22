import { ReactElement } from 'react'
import { Route } from 'react-router-dom'

interface IRenderMultiRoutesArgs {
  paths: string[]
  element: ReactElement
}

export const renderMultiRoutes = ({ element: Element, paths, ...rest }: IRenderMultiRoutesArgs) => {
  return paths.map((path: string) => {
    return <Route key={path} path={path} {...rest} element={Element} />
  })
}
