import React from "react";
import {
    selector,
    useRecoilCallback,
    useRecoilValueLoadable,
} from "recoil";
import {getList} from "../../api";
import Table from "../../components/Table";
import Card from "../../components/Card";


const List = selector({
    key: "List2",
    get: async () => {
        return await getList()
    }
})


const LoadingListWithRecoil = () => {
    const listLoadable = useRecoilValueLoadable(List)
    const handleLoad = useRecoilCallback(({refresh}) => () => {
        refresh(List)
    })
    const Header = <>
        <p>Recoil</p>
        <button onClick={handleLoad}>Load</button>
    </>
    const Desc = (<>
        <p>
            Recoil似乎并不能按照需求来加载async selector
        </p>

    </>)
    return (
        <Card header={Header} footer={Desc}>
            {listLoadable.state !== "hasValue" ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={listLoadable.contents}/>
            }
        </Card>
    );
}

export default LoadingListWithRecoil;