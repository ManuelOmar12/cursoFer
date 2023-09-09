interface AudioPlayer{
    autoVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}
interface Details{
    author:string;
    year:number;
}
const audioPlayer: AudioPlayer ={
    autoVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author: "Ed sheeran",
        year: 0
    } 
}

// const song ='New Song';
// const{song:another, songDuration:duration,
//     details
// }= audioPlayer;
// const{author}= details;
// console.log(`Song:`,another)
// console.log(`Song:`,audioPlayer.songDuration)

// console.log(`Author:`,audioPlayer.details.author)

const [,,trunks='Not found']:string[]=['g','v'];

console.error('personaje',trunks|| 'no hay  personaje');
export{};