import "./CommentsCard.scss";

export default function CommentsCard({ selectedVideo }) {
  return (
    <div className="comments__container">
      {selectedVideo &&
        selectedVideo.map((comment) => (
          <div key={comment.id} className="comments__card">
            <div className="comments__card-wrapper1">
              <div className="comments__card-img"></div>
            </div>
            <div className="comments__card-wrapper2">
              <div className="comments__card-wrapper2-nameDate">
                <p className="comments__card-wrapper2-name">{comment.name}</p>
                <p className="comments__card-wrapper2-date">
                  {new Date(comment.timestamp).toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
              <p className="comments__card-wrapper2-text">{comment.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

// const [selectedVideo, setSelectedVideo] = useState([]);
// useEffect(() => {
//   const baseUrl = "https://project-2-api.herokuapp.com/videos";
//   const apiKey = "2bd1529e-9731-4ea5-974c-934934bdc239";

//   const fetchSingleVideo = async () => {
//     if (selectedVideo) {
//       const searchSingleVideo = (videoId) =>
//         `${baseUrl}/${videoId}?api_key=${apiKey}`;
//       try {
//         if (selectedVideo && selectedVideo.id) {
//           // if (selectedVideo.id) {
//           const { data } = await axios.get(
//             searchSingleVideo(selectedVideo.id)
//           );
//           setSelectedVideo(data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };
//   fetchSingleVideo();
// }, [selectedVideo]);
