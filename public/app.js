const $firstTeam = document.querySelector('#firstTeam');
const $secondTeam = document.querySelector('#secondTeam');
const $thirdTeam = document.querySelector('#thirdTeam');

const $toSecondTeamFromFirst = document.querySelector('#toSecondTeamFromFirst');
const $allToSecondTeam = document.querySelector('#allToSecondTeam');
const $toFirstTeam = document.querySelector('#toFirstTeam');
const $allToFirstTeam = document.querySelector('#allToFirstTeam');
const $toThirdTeam = document.querySelector('#toThirdTeam');
const $toSecondTeamFromThird = document.querySelector('#toSecondTeamFromThird');

const $teamsContainer = document.querySelector('main');

function moveSelectedComrades(fromTeam, toTeam) {
    const arrWithComrades = [...fromTeam.children];
    const selectedComrades = arrWithComrades.filter(comrade => comrade.selected);
    
    selectedComrades.forEach(comrade => {
        toTeam.prepend(comrade);
    });
}

function moveAllComrades(fromTeam, toTeam) {
    while (fromTeam.children.length > 0) {
        toTeam.prepend(fromTeam.children[0]);
    }
}

$teamsContainer.addEventListener('click', (event) => {
    const target = event.target;
    
    switch (target.id) {
        case 'toSecondTeamFromFirst':
            moveSelectedComrades($firstTeam, $secondTeam);
            break;
        case 'allToSecondTeam':
            moveAllComrades($firstTeam, $secondTeam);
            break;
        case 'toFirstTeam':
            moveSelectedComrades($secondTeam, $firstTeam);
            break;
        case 'allToFirstTeam':
            moveAllComrades($secondTeam, $firstTeam);
            break;
        case 'toThirdTeam':
            moveSelectedComrades($secondTeam, $thirdTeam);
            break;
        case 'toSecondTeamFromThird':
            moveSelectedComrades($thirdTeam, $secondTeam);
            break;
        default:
            break;
    } 
});

document.addEventListener('click', (event) => {
    const $allSelects = document.querySelectorAll('select');
    $allSelects.forEach($select => {
        if (!$select.contains(event.target)) {
            $select.selectedIndex = -1;
        }
    });
});