const SideBarButton = ({title,id}) => {
  return (
      <div className="flex items-center p-2 rounded-lg hover:bg-gray-900 cursor-pointer">
        <img
          alt="homepage"
          src={"https://img.icons8.com/?size=100&id="+ id +"&format=png&color=FFFFFF"}
          className="w-6 mr-4"
        />
        <span className="text-md font-semibold flex self-end">{title}</span>
      </div>
  );
};

export default SideBarButton;
