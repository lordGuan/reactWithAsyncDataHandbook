import React from 'react'
import {useQuery} from "@tanstack/react-query";
import Table from "../../components/Table";
import {getList} from "../../api";
import Card from "../../components/Card";

const LoadingListWithReactQuery = () => {
    const {isLoading, data} = useQuery(['loadingListWithReactQuery'], getList)
    const Desc = (<>
        <p>
            同样提供loading状态，需要额外的顶层Provider
        </p>
        <p>
            key属性的方式不太相同
        </p>
        <p>
            如果提供了initialData，那么在请求完成之前，会使用initialData作为数据，无法触发loading
        </p>
    </>)
    return (
        <Card header={'React Query'} footer={Desc}>
            {isLoading ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={data || []}/>
            }
        </Card>
    );
}

export default LoadingListWithReactQuery;