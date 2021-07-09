import React from 'react'

export const Cards = ({title, content, style="primary", secondaryContent}) => {
    const a = ``
    return (
        <div className={`card border-${style} mb-3 cases-card`} >
            <div className="card-header flexbox">{title}</div>
            <div className={`card-body text-${style} flexbox`}>
                <h4 className="card-text">{content}</h4>{secondaryContent && <h6 className="text1">{secondaryContent}</h6>}
            </div>
        </div>
    )
}
