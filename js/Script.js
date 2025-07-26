// Ranks
const RANKS = {
    FLAG: 0,
    PRIVATE: 1,
    SEARGEANT: 2,
    SECOND_LT: 3,
    FIRST_LT: 4,
    CAPTAIN: 5,
    MAJOR: 6,
    LT_COLONEL: 8,
    COLONEL: 9,
    ONE_STAR_GENERAL: 9,
    TWO_STAR_GENERAL: 10,
    THREE_STAR_GENERAL: 11,
    FOUR_STAR_GENERAL: 12,
    FIVE_STAR_GENERAL: 13,
    SPY: 14
};

// Function to display rank based on constant
function showRank(rank) {
    const rankNames = {
        [RANKS.FLAG]: "Flag",
        [RANKS.PRIVATE]: "Private",
        [RANKS.SEARGEANT]: "Sergeant",
        [RANKS.SECOND_LT]: "2nd Lieutenant",
        [RANKS.FIRST_LT]: "1st Lieutenant",
        [RANKS.CAPTAIN]: "Captain",
        [RANKS.MAJOR]: "Major",
        [RANKS.LT_COLONEL]: "Lieutenant Colonel",
        [RANKS.COLONEL]: "Colonel",
        [RANKS.ONE_STAR_GENERAL]: "* - General",
        [RANKS.TWO_STAR_GENERAL]: "** - General",
        [RANKS.THREE_STAR_GENERAL]: "*** - General",
        [RANKS.FOUR_STAR_GENERAL]: "**** - General",
        [RANKS.FIVE_STAR_GENERAL]: "***** - General",
        [RANKS.SPY]: "Spy"
    };

    alert(rankNames[rank] || "Unknown rank");
}

// General event handler for button clicks
function handleButtonClick(rank) {
    showRank(rank);
}

// Dynamic button assignment
document.querySelectorAll('.btn-container button').forEach(button => {
    button.addEventListener('click', () => {
        const rank = parseInt(button.getAttribute('data-rank'));
        handleButtonClick(rank);
    });
});