type Props = {
    type: "FREE" | "PRO",
    children: React.ReactNode
}

const SubscriptionPlan = ({type, children} : Props) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default SubscriptionPlan