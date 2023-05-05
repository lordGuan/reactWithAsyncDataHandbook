import React, {useCallback} from "react";
import useSWRMutation from 'swr/mutation'
import {getList, ListItem} from "../../api";
import Table from "../../components/Table";
import Card from "../../components/Card";


const LoadingListWithSWR = () => {
    const {trigger, data, isMutating} = useSWRMutation<ListItem[]>('list', getList)
    const handleLoad = useCallback(async () => {
        await trigger()
    }, [trigger])
    const Header = <>
        <p>useSWR</p>
        <button onClick={handleLoad}>Load</button>
    </>
    const Desc = (<>
        <p>
            通过swr/mutation提供的useSWRMutation，可以很方便的实现按需init。提供trigger来触发，以isMutating来判断loading状态。
        </p>
    </>)
    return (
        <Card header={Header} footer={Desc}>
            {isMutating ?
                <div>Loading...</div> :
                <Table cols={[{label: 'Index', index: 'id'}, {label: 'Name', index: 'name'}]}
                       list={data || []}/>
            }
        </Card>
    );
}

export default LoadingListWithSWR;