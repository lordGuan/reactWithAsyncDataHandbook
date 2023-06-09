import React from "react";
import {selector, useRecoilValueLoadable} from "recoil";
import {getList} from "../../api";
import Table from "../../components/Table";
import Card from "../../components/Card";

const List = selector({
    key: "List",
    // get: async () => {
    //     return await getList()
    // }
    get: () => {
        return getList()
    }
})

const LoadingListWithRecoil = () => {
    const listLoadable = useRecoilValueLoadable(List)
    const Desc = (<>
        <p>
            使用recoil的async selector，结合useRecoilValueLoadable，可以很方便的实现loading状态的管理。
        </p>
        <p>
            需要时可以提升为共享状态，以高效复用数据，不会重复请求。
        </p>
    </>)
    return (
        <Card header={'Recoil'} footer={Desc}>
            {listLoadable.state !== "hasValue" ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={listLoadable.contents}/>
            }
        </Card>
    );
}

export default LoadingListWithRecoil;