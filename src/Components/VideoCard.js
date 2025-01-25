import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const isOpen = useSelector((store) => store.feature.sideBarOpen);
  if (!info) return;
  const { snippet, statistics } = info;
  const diff = new Date() - new Date(snippet?.publishedAt);
  let time = Math.floor(diff / (1000 * 60 * 60 * 24));
  let since = "days";
  if (time === 0) {
    time = Math.floor(diff / (60 * 60 * 1000));
    since = "hours";
  }
  
  return (
    <div className={`grid-rows-2 my-4 rounded-xl m-2 items-center cursor-pointer`}>
      <img
        alt="video thumbnail"
        src={snippet?.thumbnails?.medium?.url}
        className="rounded-2xl w-full object-contain "
      />
      <div className="pt-2">
        <p className="font-semibold mb-1">{snippet?.title}</p>
        <p className="text-sm">{snippet?.channelTitle}</p>
        <div className="flex gap-1">
          <p className="text-sm" >{Math.floor(statistics?.viewCount / 10000)}K views</p> 
          <p className="text-sm">- {time + " " + since} ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
