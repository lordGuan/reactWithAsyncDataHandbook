import React from "react";
import useSWR from 'swr'
import {getList, ListItem} from "../../api";
import Table from "../../components/Table";
import Card from "../../components/Card";


const LoadingListWithSWR = () => {
    const {isLoading, data} = useSWR<ListItem[]>('list', getList, {
        fallbackData: [],
    })
    const Desc = (<>
        <p>
            同样提供loading状态，但是不需要额外的状态管理。
        </p>
        <p>
            通过key来区分是否需要重新请求
        </p>
        <p>
            提供了fallbackData来确保数据结构正确，减少一定判断压力
        </p>
    </>)
    return (
        <Card header={'SWR'} footer={Desc}>
            {isLoading ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={data || []}/>
            }
        </Card>
    );
}

export default LoadingListWithSWR;