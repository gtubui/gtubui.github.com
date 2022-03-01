Parse.initialize('x3kjJoazxO1qh4Jxsrvd6OciU1cG1Xf98l8la2aT','acqlo6WFXsQHH3ezFWoDqYK82Tg4hrstcghrt5U4'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

const newBtn = document.getElementById('newbtn');
const editBtns = document.querySelectorAll('.fa-edit');
const addFriendForm = document.getElementById('add-friend');
const editFriendForm = document.getElementById('edit-friend');
const friendList = document.querySelector('main ol');
const inputs = document.querySelectorAll('#add-friend input:not([type=submit])');

newBtn.addEventListener('click', function(event) {
    event.preventDefault();
    addFriendForm.className = 'add-friend-onscreen';
})

addFriendForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // addFriendForm.className = 'add-friend-offscreen';
    addFriend();
})

async function addFriend() {
    const newFriend = {};

    for (let i=0; i<inputs.length; i++) {
        let key = inputs[i].getAttribute('name');
        let value = inputs[i].value;
        newFriend[key] = value;
    }
    if(newFriend.firstname !='' && newFriend.lastname !='' && newFriend.email !='') {
        const newFriendData = new Parse.Object('Friends');
        newFriendData.set('firstname', newFriend.firstname);
        newFriendData.set('lastname', newFriend.lastname);
        newFriendData.set('email', newFriend.email);
        newFriendData.set('facebook', newFriend.facebook);
        newFriendData.set('twitter', newFriend.twitter);
        newFriendData.set('instagram', newFriend.instagram);
        newFriendData.set('linkedin', newFriend.linkedin);
        try {
            const result = await newFriendData.save();
            console.log('friends created', result);
            resetFormFields();
            addFriendForm.className = 'add-friend-offscreen';
            friendList.innerHTML = '';
            displayFriends();
        } catch (error) {
            console.error('Error while creating friend: ', error)
        }
    } else {
        alert('you did not fill out all the required fields');
    }
}

for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', function(event) {
        event.preventDefault();
        editFriendForm.className = 'edit-friend-onscreen'
    })
}

editFriendForm.addEventListener('submit', function(event) {
    event.preventDefault();
    editFriendForm.className = 'edit-friend-offscreen';
})

function resetFormFields() {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('fbook').value = 'https://facebook.com';
    document.getElementById('twitter').value = 'https://twitter.com';
    document.getElementById('insta').value = 'https://instagram.com';
    document.getElementById('linkedin').value = 'https://linkedin.com';
}

async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    const results = await query.ascending('lastname').find();
    console.log(results);

    results.forEach(function(eachFriend) {
        const id = eachFriend.id;
        const lastname = eachFriend.get('lastname');
        const firstname = eachFriend.get('firstname');
        const email = eachFriend.get('email');
        const facebook = eachFriend.get('facebook');
        const twitter = eachFriend.get('twitter');
        const instagram = eachFriend.get('instagram');
        const linkedin = eachFriend.get('linkedin');

        const theListItem = document.createElement('li');
        theListItem.setAttribute('id', `r-${id}`);
        theListItem.innerHTML = 
            `<div class="name">${firstname} ${lastname}</div>
            <div class="email"><i class="fas fa-envelope-squre"></i>${email}</div>
            <div class="social">
                <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
                <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
                <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
            </div>
            <i class="fas fa-edit" id="e-${id}"></i>
            <i class="fas fa-times-circle" id="d-${id}"></i>`;

        friendList.append(theListItem);
    })
}
displayFriends();

(async () => {
    const Friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(Friends);
    try {
        const results = await query.find();
        for (const object of results) {
            const lastname = object.get('lastname')
            const firstname = object.get('firstname')
            const email = object.get('email')
            const facebook = object.get('facebook');
            const twitter = object.get('twitter')
            const instagram = object.get('instagram');
            const linkedin = object.get('linkedin')
            console.log(lastname);
            console.log(firstname);
            console.log(email);
            console.log(facebook);
            console.log(twitter);
            console.log(instagram);
            console.log(linkedin);
        }
    } catch(error) {
        console.error('Error while fetching Friends', error);
    }
})