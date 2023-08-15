import Cta from "./cta"
const compProps = [
    [
        "Indiqube Sigma No.3/B, Nexus","Koramangala 3rd Block SBI Colony,","Koramangala, Bengaluru, Karnataka",
        "560034"
    ],
    [
        "Contact Us: 080 68216821",
        "Email: care@uni.club"
    ]
]

function Footer() {
    return <footer className="Footer">
        <div className="uni-logo-2"></div>
        <div
        style={
            {
                display : "flex",
                flexDirection : "column",
                rowGap : "10px"
            }
        }
        >
        {
        compProps.map((arr) => {
            return <div 
            >
                {
                    arr.map((text) => {
                        return <span style={{
                            display : "block"
                        }}>
                            {text}
                        </span>
                    })
                }
            </div>
            
        })
       }
        </div>
        <div className="gradient-line"/>
        <Cta/>
    </footer>
}

export default Footer