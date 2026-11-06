import Header from "../Header/Header";
import SimilarVideos from "../SimilarVideos/SimilarVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function VideoPage() {
    return (
        <>
            <Header />
            <div className='flex gap-x-[20px]'>
                <VideoPlayer />
                <SimilarVideos />
            </div>
        </>
    )
}