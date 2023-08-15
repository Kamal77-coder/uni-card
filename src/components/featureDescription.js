import { descriptionProps } from "./constants/descriptionComponentProps"

function Description(props) {
    const {
        iconClass,
        heading , 
        subHeading,
        subHeadingClass
    } = props

    return <div key= {iconClass} className = "description-container">
        <div className={`${iconClass} description-icon`}></div>
        <div className="description-heading">{heading}</div>
        <div className="description-subheading">{subHeading}</div>
        <div className={subHeadingClass}></div>
    </div>
}

function BenefitComponent (props){
    return <div className="BenefitComponent">
       {
        descriptionProps.map((prop)=> {
            return <Description
            {...prop}/>
        })
       }
    </div>
}
export default BenefitComponent