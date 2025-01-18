import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"

type Props = {
    title: string,
    icon: React.ReactNode,
    description: string
    strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description: 'Automate your Response in Instagram and become more efficient.',
        icon: <InstagramDuoToneBlue />,
        strategy: 'INSTAGRAM'
        // There should be a global function to integrate this 
    },
    {
        title: 'Connect Instagram',
        description: 'Automate your Response in Instagram and become more efficient.',
        icon: <SalesForceDuoToneBlue />,
        strategy: 'CRM'
    }
]