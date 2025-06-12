const Video = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-10 mb-10 w-5/6 max-w-screen-lg">
        <iframe
          src="https://www.youtube.com/embed/Xs0hR3QIQNE?si=qkDfhaD82i5ogqoe"
          className="mt-5 mb-5 aspect-video w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default Video;
