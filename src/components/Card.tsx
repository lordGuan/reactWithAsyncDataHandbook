import React from 'react'

const Card: React.FC<{
    header: React.ReactNode,
    children: React.ReactNode,
    footer?: React.ReactNode
}> = ({header, children, footer}) => {
    return (
        // tailwindcss border: 1px solid className
        <div className={"border border-red-100 rounded-[5px] w-1/5"}>
            <div className={'flex items-center justify-between text-2xl p-[20px]'}>
                {header}
            </div>
            <div>
                {children}
            </div>
            {
                footer && <div className={'text-[12px] leading-[14px] p-[20px] text-left'}>{footer}</div>
            }
        </div>
    )
}

export default Card