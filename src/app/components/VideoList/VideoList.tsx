export const VideoList = () => {
    const videoList = [
        {
            name: "video 1",
            src: "./video-1.avi"
        },
        {
            name: "video 2",
            src: "./video-1.avi"
        },
        {
            name: "video 3",
            src: "./video-1.avi"
        },
    ];

    return ( 
        <ul className="list-disc">
            {videoList.map((item, index) => {
                return (
                    <li key={`video-${index}`}>
                        <a href={item.src} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item.name}</a>
                    </li>)
            })}
        </ul>
    );
}