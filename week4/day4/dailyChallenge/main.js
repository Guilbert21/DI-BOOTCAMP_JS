class Video {
    constructor(title, uploader, seconds) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }


    watch(){
        const sentence = `You watched all ${this.time} time of ${this.title}!`;
        console.log("sentence:", sentence);
    }
}

const vidData = [
    {
        title: "Mickey",
        uploader: "Guilbert",
        time: 100
    },
    {
        title: "Looney Tunes",
        uploader: "Alexis",
        time: 200
    },
    {
        title: "The Simpsons",
        uploader: "Antonio",
        time: 300
    },
    {
        title: "the famous",
        uploader: "David",
        time: 300
    },
    {
        title: "Drive to survive",
        uploader: "Unknown",
        time: 300
    }
];

const videos = [];
for (const vidData of vidData) {
    const uploader = video.uploader;
    const title = video.title;
    const time = video.time;
    const video = new Video(title, uploader, time);
    videos.push(video);

}
console.log("videos:", videos);



