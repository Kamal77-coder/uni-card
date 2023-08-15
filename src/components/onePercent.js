


function OnePercentComp(props) {

    const {
        firstLine , 
        secondLine , 
        subTitle,
        flexStyle : {
            style : flexStyle,
            headingStyle,
            secondLineStyle
        },
        iconStyle,
    } = props
    

    return (
        <div className="one-percent-comp" style={flexStyle} id = {iconStyle}>
            <div className='description'>
                <div className="header">
                    <span className="strong-des" style={headingStyle}>{firstLine}</span>
                    <span className="strong-sub" style = {secondLineStyle}>{secondLine}</span>
                </div>
                <span className="desc-sub">{subTitle}</span>
            </div>
            <div className= {`${iconStyle} ${iconStyle.includes("screen") ? "":"comp-icon"}`} ></div>
        </div>
    );
}

export default OnePercentComp;