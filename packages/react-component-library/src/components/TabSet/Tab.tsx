import React from 'react'

export interface TabProps {
  title: React.ReactElement | string
  children: React.ReactElement | string
  isActive?: boolean
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>
}

Tab.displayName = 'Tab'
