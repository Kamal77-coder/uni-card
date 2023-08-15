
export const screeOneProps = {
    firstLine : "We’ve all heard of instant groceries, now say hello to ",
    secondLine : "instant credit.",
    subTitle : "0% hassle, 100% paperless. Get your Uni Card instantly.",
    flexStyle :  {
      style :{
        display : "flex",
        flexDirection : "row",
        background: "black",
        width : "100%",
        textAlign : "center",
        justifyContent : "center"
      },
      headingStyle : {
        fontSize: "40px",
        color : "white",
        fontWeight : "500"
      },
    },
    iconStyle : "app-screen1 screen-icon",
}


export const screenTwoProps = {
    firstLine : "With Uni,",
    secondLine : "you’re always in control.",
    subTitle : "Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.    ",
    flexStyle :  {
      style :{
        display : "flex",
        flexDirection : "row",
        background: "black",
        width : "100%",
        textAlign : "center",
        justifyContent : "center"
      },
      headingStyle : {
        fontSize: "40px",
        color : "white",
        fontWeight : "500",
        display :"block",
      },
    },
    iconStyle : "app-screen2 screen-icon"
}

export const onePercentComponentProps = [
    {
        firstLine : "1% assured cashback on your spends.",
        secondLine : "The more you spend, the more you earn.",
        subTitle : "Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.",
        flexStyle : {
          style : {
            display : "flex",
            flexDirection : "row"
          }
    },
    iconStyle : "one-percent-icon",
    key : "one-percent-icon",
    },
    {
        firstLine : "5x more value than your cashback,",
        secondLine : "only at the Uni Store.",
        subTitle : "" ,
        flexStyle : {
            style :
          {
            display : "flex",
            flexDirection : "row-reverse"
          }
        },
        iconStyle : "five-x-reward",
        key : "five-x-reward"
    },
    {
        firstLine : "Zero Forex Markup.",
        secondLine : "Go international, without any fees.",
        subTitle : "",
        flexStyle :  {
          style :{
            display : "flex",
            flexDirection : "row"
          }
        },
        iconStyle : "forex",
        key : "forex",
    }
]

