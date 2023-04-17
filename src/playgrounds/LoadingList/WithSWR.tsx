import React from "react";
import useSWR from 'swr'
import {getList, ListItem} from "../../api";
import Table from "../../components/Table";
import Card from "../../components/Card";


const LoadingListWithRecoil = () => {
    const {isLoading, data} = useSWR<ListItem[]>('list', getList, {
        fallbackData: [],
    })
    return (
        <Card header={'Base Loading List'}>
            {isLoading ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={data || []}/>
            }
        </Card>
    );
}

export default LoadingListWithRecoil;