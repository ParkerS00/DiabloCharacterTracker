const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6 space-y-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      <div className="text-white">Loading...</div>
    </div>
  );
};

export default Loading;
