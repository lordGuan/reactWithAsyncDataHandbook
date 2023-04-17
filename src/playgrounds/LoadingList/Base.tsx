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
            setLoading(false)
        })
    }, [])

    return <Card header={'Base Loading List'}>
        {loading ?
            <div>Loading...</div> :
            <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]} list={list}/>
        }
    </Card>
}

export default BaseLoadingList