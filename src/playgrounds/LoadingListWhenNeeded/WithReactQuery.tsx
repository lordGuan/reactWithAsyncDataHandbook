import React, {useCallback} from 'react'
import {useMutation} from "@tanstack/react-query";
import Table from "../../components/Table";
import {getList} from "../../api";
import Card from "../../components/Card";

const LoadingListWithReactQuery = () => {
    const {isLoading, data, mutate} = useMutation(['loadingListWithReactQuery'], getList)
    const handleLoad = useCallback(() => {
        mutate()
    }, [mutate])
    const Header = <>
        <p>React Query</p>
        <button onClick={handleLoad}>Load</button>
    </>
    const Desc = (<>
        <p>
            与useSWR类似提供手动mutate的方式来触发请求
        </p>
    </>)
    return (
        <Card header={Header} footer={Desc}>
            {isLoading ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={data || []}/>
            }
        </Card>
    );
}

export default LoadingListWithReactQuery;