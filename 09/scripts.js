(function () {

    let counter = 0;
  
    // Save this for later use
    const originalHTML = document.body.innerHTML;
    let messageWrapper = document.getElementById('message');
  
    document.onclick = function (event) {
      event.preventDefault();
      document.body.innerHTML = originalHTML;
      messageWrapper = document.getElementById('message');
    }
  
    document.onkeydown = function (event) {
      // Prevents the space bar from scrolling down when pressed
      if (event.keyCode === 32) {
        event.preventDefault();
      }
    }
  
    document.onkeyup = function (event) {
      const keyCodePressed = event.keyCode;
  
      const coordinates = helpers.generateCoordinates();
  
      messageWrapper.innerText = keyCodePressed + ' : ' + event.key;
  
      if (keyCodePressed === 13) {
        // Figure out how to append a div with a
        // message into the coordinateWrapper
        const enterMessageDiv = document.createElement('div');
        enterMessageDiv.innerText = 'Welcome to the Party!';
        messageWrapper.appendChild(enterMessageDiv);
  
      } else if (keyCodePressed === 67) {
  
        // c key for square
        const square = document.createElement('div');
        square.className = 'square';
        square.style.left = `${coordinates.x}px`;
        square.style.top = `${coordinates.y}px`;
        document.body.appendChild(square);
  
      } else if (keyCodePressed === 68) {
  
        const degreesRotation = Math.floor(Math.random() * 360);
  
        // i key for image
        const disco = document.createElement('img');
        disco.className = 'disco';
        disco.src = `img/disco.png`;
        
        disco.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
        disco.style.transform = `rotate(${degreesRotation}deg)`;
        document.body.appendChild(disco);

      } else if (keyCodePressed === 78) {

        console.log('dance1')
        const dance1 = document.createElement('img');
        dance1.className = 'dance1';
        dance1.src = `img/dance1.png`;

      
        document.body.appendChild(dance1);


      } else if (keyCodePressed === 70) {
        const dance4 = document.createElement('img');
        dance4.className = 'dance4';
        dance4.src = `img/dance4.gif`;
        
        dance4.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
        dance4.style.transform = `rotate(${degreesRotation}deg)`;
        document.body.appendChild(dance4);

  
      } else if (keyCodePressed === 65) {
        // a for animated
        helpers.removeClass('animated');
        document.body.classList.add('animated');
  
      } else if (keyCodePressed === 80) {
        const degreesRotation = Math.floor(Math.random() * 360);
  
        // p for prompt phrase
        const phrase = document.createElement('h3');
        phrase.className = 'phrase';
        phrase.style.left = `${coordinates.x}px`;
        phrase.style.top = `${coordinates.y}px`;
        phrase.innerText = getPhrase();
        phrase.style.color = helpers.generateRandomColorString(false);
        phrase.style.transform = `rotate(${degreesRotation}deg)`;
        document.body.appendChild(phrase);
  
      } else if (keyCodePressed === 32) {
        // Space bar randomly changes background color of the body
        helpers.removeClass('animated');
        document.body.style.backgroundColor = helpers.generateRandomColorString();
      }
  
      counter++;
      // always keeps the message on top of other elements
      messageWrapper.style.zIndex = counter;
    }
  
    const getPhrase = function () {
      const exclamations = ['Wow!', 'Neat!', 'Incredible!', 'JavaScript rules!', 'Bravo!', 'Fantastic!'];
      const index = Math.floor(Math.random() * exclamations.length);
      return exclamations[index];
    }
  
    setInterval(function () {
      messageWrapper.style.color = helpers.generateRandomColorString(false);
    }, 1000);
  
    // This object contains helper functions
    const helpers = {
  
      removeClass: (cssClass) => {
        if (document.body.classList.contains(cssClass)) {
          document.body.classList.remove(cssClass);
        }
      },
  
      generateCoordinates: () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
      },
  
      generateRandomColorString: (alpha = true) => {
        // random RBG values
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        // fully opaque if `false` is passed to function
        let a = 1;
        if (alpha) {
          a = Math.random();
        }
  
        return `rgba(${r},${g},${b},${a})`;
      }
  
    }
  
  }());
  