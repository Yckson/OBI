class Event{
    constructor(typo, value){
        this.typo = typo;
        this.val = value;
    }
    
    static sumTimer(friendsList, timer){
        for (var c = 0; c < friendsList.length; c++){
            if (friendsList[c].status){
                friendsList[c].totalTime += timer;
            }
        }
        
        return friendsList;
    }
    
    static finalTime (friendsList){
        for (var c = 0; c < friendsList.length; c++){
            if (friendsList[c].status){
                friendsList[c].totalTime = -1;
            }
        }
        return friendsList;
    }
}

class Friend{
    constructor(name){
        this.name = name;
        this.totalTime = 0;
        this.status = false;
    }
    
    static canAddNewFriend(list, friend){
        for (var c = 0; c < list.length; c++){
            if (list[c].name == friend[1] || friend[0] == 'T'){
                return false;
            }
            
        }   
        return true;
    }
    
    static findFriendByName(name, friendsList){
        for (var c = 0; c < friendsList.length; c++){
            if (name == friendsList[c].name){
                return c;
            }
        }
    }
    
    static setStatus(name, friendsList, state){
        friendsList[(this.findFriendByName(name, friends))].status = state;
        return friendsList;
    }
    
    static sortFriendsByName(friendsList){
        return (friendsList.sort(function (a, b){
            return (a.name - b.name);
        }));
    }
}


let N = Number.parseInt(prompt('Número de registros:'));
let events = Array();
let input;
let new_event;

for (var c = 0; c < N; c++){
    input = prompt('Evento:');
    input = input.split(' ');
    new_event = new Event(input[0], Number.parseInt(input[1]));
    events.push(new_event);
}

let friends = Array();
let new_friend;
let timer;
let pause = 0;

for (var c = 0; c < events.length; c++){
    
    if (Friend.canAddNewFriend(friends, [events[c].typo, events[c].val])){
        new_friend = new Friend(events[c].val);
        friends.push(new_friend);
        console.log(new_friend);
    }
    
    switch (events[c].typo){
        case 'R':
            friends = Event.sumTimer(friends, 1)
            friends = Friend.setStatus(events[c].val, friends, true);
            timer = 0;
            break;
        case 'E':
            friends = Friend.setStatus(events[c].val, friends, false);
            break;
        default:
            timer = events[c].val;
            pause = 2;
            friends = Event.sumTimer(friends, timer);
            break;
    }
    if (pause == 0){
        friends = Event.sumTimer(friends, timer);
    }
    else {
        pause -= 1;
    }
    timer = 1
    
}

friends = Friend.sortFriendsByName(Event.finalTime(friends));
console.log(friends);
