import OnePercentComp from "./onePercent";
import { 
    screeOneProps,
    screenTwoProps
 } from "./constants/componentProps";
 import BenefitComponent from "./featureDescription";
function MobileDescription(props){
    return <div className="mobile-description">
        <OnePercentComp
   {...screeOneProps}
    />
    <OnePercentComp
   {...screenTwoProps}
    />
    <BenefitComponent/>
    </div>
}

export default MobileDescription