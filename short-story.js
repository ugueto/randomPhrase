/* The following is a portfolio project for GitHub. 
It is a bot which creates a pseudo philosophical statement and prints it out everytime
the program runs. 
Perhaps one day I'll turn it into a twitter bot. -> Inspiration from @MagicRealismBot */

/* It is longer and annoying but for readibility purposes I'll output arrays horizontally. */

const articles = ['A', 'The']
const nouns = ['copper', 
    'dust',
    'wilderness',
    'tongue',
    'leg',
    'voice',
    'drain',
    'mailbox',
    'seed',
    'kettle',
    'silver',
    'rock',
    'language',
    'butter',
    'debt',
    'decision',
    'talk',
    'tank',
    'cheese',
    'religion',
    'surprise',
    'bead',
    'ground',
    'yak',
    'side',
    'color',
    'sail',
    'loaf',
    'sink',
    'sea',
    'cub'];

const adjectives = ['delirious',
    'legal',
    'billowy',
    'lying',
    'outstanding',
    'adhesive',
    'lacking',
    'pushy',
    'steep',
    'sneaky',
    'closed',
    'annoying',
    'brown',
    'broad',
    'dizzy',
    'offbeat',
    'youthful',
    'capricious',
    'cagey',
    'noiseless',
    'organic',
    ];

const verbs = [
    'strengthen',
    'remain',
    'nail',
    'drip',
    'pack',
    'tickle',
    'cheer',
    'park',
    'zip',
    'burn',
    'wait',
    'interest',
    'surprise',
    'blush',
    'plug',
    'pop',
    'guess',
    'last',
    'decorate',
    'puncture'];

const structureOne = ['is', 'was', 'will be', 'should be', 'must be', 'could be', 'can be', 'might be', 'would be'];

const structureTwo = ['must', 'should', 'might', 'would', 'can', 'will'];

const storyMaker = () => {
    let randomChoice = Math.floor(Math.random() * 2);
    let randomArticle = articles[randomChoice];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    let shortStory = '';

    if (randomChoice === 0) {
        shortStory = `${randomArticle} ${randomNoun} ${structureOne[Math.floor(Math.random() * structureOne.length)]} ${randomAdjective}.`;
    } else {
        shortStory = `${randomArticle} ${randomNoun} ${structureTwo[Math.floor(Math.random() * structureTwo.length)]} ${randomVerb}.`;
    }
    return shortStory;
}

console.log(storyMaker());