import VideoPlayer from "./_components/VideoPlayer";

export default function Home() {
  const videoList = [
    "/video/video1.mp4",
    "/video/video2.mp4",
    "/video/video3.mp4",
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <VideoPlayer videos={videoList} />
    </main>
  );
}
