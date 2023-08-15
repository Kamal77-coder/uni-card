const ctaProps = [
    {
    arr :     [
        {
            title : "Instagram",
            key : "insta",
            url : "https://www.instagram.com/uni_cards/",
         },
         {
            title : "Linkedin",
            key : "linkedin",
            url : "https://www.linkedin.com/company/uni-cards/",
         },
         {
            title : "Twitter",
            key : "twitter",
            url : "https://twitter.com/cards_uni",
         },
         {
            title : "Careers",
            key : "careers",
            url : "https://careers.uni.cards/",
         },
         
    ],
   classname : "footer-link"
},
{
    arr : [
        {
            title : "Credit Card KFS | ",
            key : "career-card-kfs",
            url : "https://www.uni.cards/credit-card-key-facts",
         },
         {
            title : "Credit Card T&Cs | ",
            key : "creditCardTc",
            url : "https://www.uni.cards/docs/Credit_Card_MITC.pdf",
         },
         {
            title : "Uni T&Cs | ",
            key : "uniTnc",
            url : "https://www.uni.cards/privacy-policy-main",
         },
         {
            title : "Lending Partner TnCs",
            key : "lendingPartner",
            url : "https://www.uni.cards/nbfc-terms",
         },
         
    ],
    classname : "link"
},

]


function Cta(props) {
    const {
        ctaProps ,
        classname
    } = props
    const onClick = (url) => {
        window.open(url)
    }
    return <div
    style = {{
        display : "flex",
        columnGap : "10px"
    }}
    >
        {ctaProps.map((prop) => {
            const {
                title , 
                key , 
                url
            } = prop
            return <span onClick={() => onClick(url)} key = {key} className = {classname}>
                {title}
            </span>
        })}
    </div>
}

function CtaContainer() {
    return <div style = {{
        display : "flex",
        flexDirection : "row",
        columnGap : "383px"
    }}>
        {
            ctaProps.map((prop) => {
             const {
                arr,
                classname
             } = prop
               return <Cta
               ctaProps = {arr}
               classname = {classname}
               />
            })
        }
    </div>
}

export default CtaContainer