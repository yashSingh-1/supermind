import {
    AutomationDuoToneWhite,
    HomeDuoToneWhite,
    RocketDuoToneWhite,
    SettingsDuoToneWhite,
  } from '@/icons'
  import { v4 as uuid } from 'uuid'
  
  export type FieldProps = {
    label: string
    id: string
  }
  
  type SideBarProps = {
    icon: React.ReactNode
  } & FieldProps
   
  export const SIDEBAR_MENU: SideBarProps[] = [
    {
      id: uuid(),
      label: 'home',
      icon: <HomeDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'history',
      icon: <AutomationDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'generation',
      icon: <RocketDuoToneWhite />,
    },
    {
      id: uuid(),
      label: 'survey',
      icon: <SettingsDuoToneWhite />,
    },
  ]