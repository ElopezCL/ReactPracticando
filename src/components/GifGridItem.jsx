import React from 'react'

export const GifGridItem = ({title,url,id}) => {
    return (
        <>
            <div className="card" key={id}>
                <img src={url} alt={title} className="s" />
                <h3>{title}</h3>
            </div>
        </>
    )
}
