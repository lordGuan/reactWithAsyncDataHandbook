import React from 'react'
import BaseLoadingList from "./Base";
import LoadingListWithRecoil from "./WithRecoil";
import LoadingListWithSWR from "./WithSWR";

function LoadingList() {

    return (
        <div className={'flex justify-start items-stretch gap-2'}>
            <BaseLoadingList/>
            <LoadingListWithRecoil/>
            <LoadingListWithSWR/>
        </div>
    )
}

export default LoadingList