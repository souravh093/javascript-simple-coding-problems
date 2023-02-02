const lyrics = 'tumi bondhu kala pakhi ami jno ki bosonto kala tomai bolta pari ni';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
// const doesExist = lyrics.toLowerCase().includes('paKHi'.toLowerCase());
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist)

// ====================================================

// indexOf

console.log(lyrics.indexOf('kala'));

// 

if (lyrics.indexOf('kala') !== -1) {
    console.log("exists inside the string")
}

// startsWith
console.log(lyrics.startsWith('tumi'));

// endsWith
const fileName = 'myVide.mp4';
const otherFile = 'hero.png';

console.log(otherFile.endsWith('.png'));
