import React from "react";
import {selector, useRecoilValueLoadable} from "recoil";
import {getList} from "../../api";
import Table from "../../components/Table";
import Card from "../../components/Card";

const List = selector({
    key: "List",
    get: async () => {
        return await getList()
    }
})

const LoadingListWithRecoil = () => {
    const listLoadable = useRecoilValueLoadable(List)
    return (
        <Card header={'Base Loading List'}>
            {listLoadable.state !== "hasValue" ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={listLoadable.contents}/>
            }
        </Card>
    );
}

export default LoadingListWithRecoil;