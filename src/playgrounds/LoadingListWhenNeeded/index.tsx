import React from 'react'
import BaseLoadingList from "./Base";
import LoadingListWithRecoil from "./WithRecoil";
import LoadingListWithSWR from "./WithSWR";
import LoadingListWithReactQuery from "./WithReactQuery";

function LoadingListWhenNeeded() {

    return (
        <div className={'flex justify-start items-stretch gap-2'}>
            <BaseLoadingList/>
            <LoadingListWithRecoil/>
            <LoadingListWithSWR/>
            <LoadingListWithReactQuery/>
        </div>
    )
}

export default LoadingListWhenNeeded