import React from 'react'

const Card: React.FC<{
    header: React.ReactNode,
    children: React.ReactNode
}> = ({header, children}) => {
    return (
        // tailwindcss border: 1px solid className
        <div className={"border border-red-100 rounded-[5px] w-1/5"}>
            <div className={'text-2xl p-[20px]'}>
                {header}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card