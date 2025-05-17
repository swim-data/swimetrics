"use client";

import VideoGridElement from "@/app/dashboard/video/video-grid-item";

const videos = [
    {
        id: "1",
        title: "Product Demo - How to use our new features",
        thumbnail:
            "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
        duration: "3:45",
        uploadDate: "Today",
        fileSize: "24 MB",
    },
    {
        id: "2",
        title: "Team Meeting - Q2 Planning Session",
        thumbnail:
            "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
        duration: "45:12",
        uploadDate: "Yesterday",
        fileSize: "120 MB",
    },
    {
        id: "3",
        title: "Marketing Campaign - Summer Launch",
        thumbnail:
            "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
        duration: "12:30",
        uploadDate: "2 days ago",
        fileSize: "56 MB",
    },
    {
        id: "4",
        title: "Customer Interview - Feedback Session",
        thumbnail:
            "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
        duration: "28:15",
        uploadDate: "1 week ago",
        fileSize: "85 MB",
    },
    {
        id: "5",
        title: "Tutorial - Advanced Features Walkthrough",
        thumbnail:
            "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
        duration: "15:20",
        uploadDate: "2 weeks ago",
        fileSize: "42 MB",
    },
    {
        id: "6",
        title: "Webinar - Industry Trends and Insights",
        thumbnail:
            "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
        duration: "52:40",
        uploadDate: "1 month ago",
        fileSize: "145 MB",
    },
];

export default function VideoPage() {
    return (
        <>
            <h1 className="text-xl font-bold mb-3">Videos</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map((video) => (
                    <VideoGridElement
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        thumbnail={video.thumbnail}
                        duration={video.duration}
                        uploadDate={video.uploadDate}
                        fileSize={video.fileSize}
                        onClick={() =>
                            console.log(`Playing video: ${video.id}`)
                        }
                    />
                ))}
            </div>
        </>
    );
}
