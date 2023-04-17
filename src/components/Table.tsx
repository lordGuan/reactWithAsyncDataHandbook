import React from 'react'

export type Col = {
    label: string,
    index: string
}

const Table: React.FC<{ cols: Col[], list: any[] }> = ({cols, list}) => {
    return (
        <div>
            <div>
                <ul className={'flex justify-start items-center bg-amber-200'}>
                    {
                        cols.map((col) => {
                            return <li className={'flex-1 text-center p-[10px]'}>{col.label}</li>
                        })
                    }
                </ul>
            </div>
            <div>
                {
                    list.map((item) => {
                        return <ul className={'flex justify-start items-center even:bg-gray-50 odd:bg-green-50'}>
                            {
                                cols.map((col) => {
                                    return <li className={'flex-1 text-center p-[10px]'}>{item[col.index]}</li>
                                })
                            }
                        </ul>
                    })
                }
            </div>
        </div>
    )
}

export default Table