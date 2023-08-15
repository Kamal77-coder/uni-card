


function OnePercentComp(props) {

    const {
        firstLine , 
        secondLine , 
        subtitle,
        flexStyle : {
            style : flexStyle
        },
        img,
        iconStyle
    } = props
    console.log(iconStyle)

    return (
        <div className="one-percent-comp" style={flexStyle}>
            <div className='description'>
                <div className="header">
                    <span className="strong-des">{firstLine}</span>
                    <span className="strong-sub">{secondLine}</span>
                </div>
                <span className="desc-sub">{subtitle}</span>
            </div>
            <div className= {`${iconStyle} comp-icon`} ></div>
        </div>
    );
}

export default OnePercentComp;