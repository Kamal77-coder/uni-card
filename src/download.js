function Download() {

    const onPlayStoreClick = () => {
        window.open("https://play.google.com/store/apps/details?id=cards.uni.app.credit&referrer=af_tranid%3D2w5yhOGCII3ZyL4u0R_jrQ", "_self")
    }
    return <div className="Download">
        <div style = {
            {
                fontSize : "42px",
                fontWeight : "500",
            }
        }>Download now to get started</div>
        <div
        style = {
            {
                display : "flex",
                columnGap : "4px"
            }
        }
        >
            <div className="btn-container" onClick={onPlayStoreClick}>
                <div className="playStore">
                </div>
                <div>
                    Google Play
                </div>
            </div>
            <div className="btn-container" onClick={onPlayStoreClick}>
                <div className="appStore">
                </div>
                <div>
                    App Store
                </div>
            </div>
        </div>
    </div>
}

export default Download