import {
  getRandomFunnyComment,
  getRandomName,
  USER_ICON
} from "../utils/constant";
const comments = [
  {
    name: "Shiva",
    message: getRandomFunnyComment(),
    replies: [
      {
        name: "vignesh",
        message: getRandomFunnyComment(),
        replies: [
          {
            name: "kannan",
            message: getRandomFunnyComment(),
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: "karthik",
    message: getRandomFunnyComment(),
    replies: [
      {
        name: getRandomName(),
        message: getRandomFunnyComment(),
        replies: [
          {
            name: getRandomName(),
            message: getRandomFunnyComment(),
            replies: [
              {
                name: getRandomName(),
                message: getRandomFunnyComment(),
                replies: [
                  {
                    name: getRandomName(),
                    message: getRandomFunnyComment(),
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: getRandomName(),
    message: getRandomFunnyComment(),
    replies: [
      {
        name: getRandomName(),
        message: getRandomFunnyComment(),
        replies: []
      }
    ]
  }
];

export const CommentBox = (props) => {
  const replies  = props?.data.replies;
  return (
    <div className="border-l ml-2 p-4 my-2 bg-gray-950 m-1">
      <div className=" flex justify-start items-center ">
        <img alt="user-icon" src={USER_ICON} className="w-10  " />
        <p className="text-bold items-center pl-2">{props?.data?.name}</p>
      </div>
      <p className="pl-12">- {props?.data?.message}</p>

      <div>
        {replies && replies.length>=1 &&
          replies.map((reply,index) => <CommentBox key={reply.name+index} data={reply}/>)}
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="mt-10 py-5">
      <h1 className="text-xl my-5">Comment</h1>
      <div>
        {comments && comments.map((comment,index) => <CommentBox key={comment.name+index}data={comment} />)}
      </div>
    </div>
  );
};

export default Comment;
