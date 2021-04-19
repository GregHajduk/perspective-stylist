import React from 'react'
import Footer from './Footer'

function PageMargin({children}) {
    return (
        <div className="page__margin">
            {children}
            <Footer />
        </div>
    )
}

export default PageMargin
