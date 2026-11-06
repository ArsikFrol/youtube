import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

export function Loading() {
    return (
        <div className='w-[570px] pb-[10px] flex flex-col h-[calc(100vh-65px)] overflow-y-auto'>
            {
                [...Array(10)].map((_, i) => {
                    return (
                        <div key={i} className="flex gap-x-[10px] p-[5px] rounded-2xl">
                            <Skeleton width={330} height={200} borderRadius={16} />
                            <div className="w-[210px]">
                                <Skeleton width="100%" height={20} />
                                <div className="mt-[5px]">
                                    <Skeleton width="70%" height={20} />
                                </div>
                                <div className="flex items-center gap-x-[5px] my-[5px]">
                                    <Skeleton circle width={30} height={30} />
                                    <Skeleton width={120} height={14} />
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <Skeleton width={60} height={14} />
                                    <Skeleton width={10} height={14} />
                                    <Skeleton width={80} height={14} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}