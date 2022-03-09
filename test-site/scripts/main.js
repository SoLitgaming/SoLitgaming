let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fire.jpg') {
      myImage.setAttribute('src','images/newfire.jpg');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    } 
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'So L1t Gaming is happy to have you, ' + myName;
	}
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'So L1t Gaming is happy to have you, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}
