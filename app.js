$(document).ready(function () {
    var friends = ['Melissa', 'Amy', 'Matt', 'Brennan', 'John'];
    var locations = [
        'Conservatory', 'Lounge', 'Kitchen', 'Library', 'Hall',
        'Study', 'Ballroom', 'Dining Room', 'Billiard Room', 'Server Room'
    ];
    var weapons = [
        'a door', 'a tea kettle', 'a stop sign', 'a crock pot', 'some thick book about mastering C from the 80s',
        'a Yu-gi-oh Duel Deck', 'a pair of Heelys', 'a Tamagotchi', 'Lawn Darts', 'a Furby',
        'a Bop-It', 'a Sony Walkman', 'a board game of Clue', 'an IBM Model M Keyboard', 'a Tesla Model 3',
        'a first-aid kit (in an ironic twist of events)', 'an AOL Disc', 'an Easy Bake Oven', 'Leprechaun 6: Back 2 tha Hood on DVD', 'a wild dingo'
    ];

    for (var i = 1; i <= 100; i++) {
        var accusation = ('<h3 id=\'' + i + '\'>Accusation ' + i + '</h3>');
        $('body').append(accusation);
        $('#' + i).click(displayAccusation(i));
        (i % 2 == 0) ? $('#' + i).addClass('alert alert-primary') : $('#' + i).addClass('alert alert-info');

    }

    function displayAccusation(i) {
        return function () {
            alert('I accuse ' + friends[(friends.length > i ? i : i % friends.length)]
                + ', with ' + weapons[(weapons.length > i ? i : i % weapons.length)]
                + ' in the ' + locations[(locations.length > i ? i : i % locations.length)]);
        }
    };
});