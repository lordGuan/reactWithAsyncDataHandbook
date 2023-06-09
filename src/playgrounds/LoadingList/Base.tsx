import React, {useEffect, useState} from 'react'
import {getList, ListItem} from "../../api";
import Card from "../../components/Card";
import Table from "../../components/Table";

function BaseLoadingList() {
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState<ListItem[]>([])

    useEffect(() => {
        setLoading(true)

        getList().then((res) => {
            setList(res)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const Desc = (<>
        <p>
            你需要两个状态，一个是 loading，一个是 list。当存在多个需要loading的时候，你需要多个loading状态。
        </p>
        <p>
            很多时候可能忘记catch的时候也应当取消loading
        </p>
    </>)

    return <Card header={'Base'} footer={Desc}>
        {loading ?
            <div>Loading...</div> :
            <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]} list={list}/>
        }
    </Card>
}

export default BaseLoadingList