import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

export function Loading() {
    return (
        <div className="flex-1 h-[calc(100vh-65px)] overflow-y-auto">
            <Skeleton height={720} borderRadius={16} className="mt-[10px]" />
            <div className="my-[10px]">
                <Skeleton height={28} width="70%" />
            </div>
            <div className="flex items-center gap-x-[15px] my-[10px]">
                <Skeleton width={80} height={36} borderRadius={18} />
                <Skeleton width={80} height={36} borderRadius={18} />
                <Skeleton width={100} height={36} borderRadius={18} />
                <Skeleton width={60} height={36} borderRadius={18} />
            </div>
            <div className="bg-gray-100 rounded-2xl p-[20px] mt-[10px]">
                <div className="flex items-center justify-between gap-x-[50px]">
                    <div className="flex items-center gap-x-[10px]">
                        <Skeleton circle width={50} height={50} />
                        <div>
                            <Skeleton width={150} height={18} />
                            <div className="mt-[5px]">
                                <Skeleton width={100} height={14} />
                            </div>
                        </div>
                    </div>
                    <Skeleton width={120} height={36} borderRadius={18} />
                </div>
                <div className="flex items-center gap-x-[10px] mt-[15px]">
                    <Skeleton width={60} height={14} />
                    <Skeleton width={80} height={14} />
                </div>
                <div className="mt-[10px]">
                    <Skeleton count={3} height={14} />
                </div>
            </div>
            <div className="mt-[20px]">
                <Skeleton width={150} height={24} className="mb-[15px]" />
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex gap-x-[10px] mb-[15px]">
                        <Skeleton circle width={40} height={40} />
                        <div className="flex-1">
                            <Skeleton width={120} height={14} />
                            <div className="mt-[5px]">
                                <Skeleton count={2} height={14} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}