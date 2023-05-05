import React, {useState} from 'react'
import {getList, ListItem} from "../../api";
import Card from "../../components/Card";
import Table from "../../components/Table";

function BaseLoadingList() {
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState<ListItem[]>([])

    const handleLoad = () => {
        setLoading(true)

        getList().then((res) => {
            setList(res)
        }).finally(() => {
            setLoading(false)
        })
    }

    const Header = <>
        <p>Base</p>
        <button onClick={handleLoad}>Load</button>
    </>

    const Desc = (<>
        <p>
            完全依赖手动触发还是比较简单的
        </p>
    </>)

    return <Card header={Header} footer={Desc}>
        {loading ?
            <div>Loading...</div> :
            <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]} list={list}/>
        }
    </Card>
}

export default BaseLoadingList