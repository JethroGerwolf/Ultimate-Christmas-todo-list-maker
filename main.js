var itemCount =0;//will be used later 


const backgroundMusic = new Audio("sounds/background.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2;
// Play on first user interaction
function startMusic() {
    backgroundMusic.play();
    document.removeEventListener('click', startMusic);
}

// starts music on click
document.addEventListener('click', startMusic);

window.onload = () => {
    const savedList = JSON.parse(localStorage.getItem("tasks")) || [];
    savedList.forEach(task => addToList(task, false)); 
};


function addToList() {
    itemCount ++; 
    let checkButton = document.createElement("button");
        checkButton.textContent = "✓";
        checkButton.id = "checkButton";
        checkButton.onclick = function() {
            newDiv.remove();
            
        }
    var taskInput = document.getElementById('taskInput');  
    const task = taskInput.value.trim();
    let newDiv = document.createElement("div");
        newDiv.textContent = "🎄 " + task;
        newDiv.id = "item";

    let newButton = document.createElement("button");
        newButton.textContent = "Remove";
        newButton.id = "removeButton";
        newButton.onclick = function() {
            newDiv.remove();
            savedList();
        };

    if (task === '') {
        alert('Please enter a valid item.');
        return;
    }
    newDiv.appendChild(checkButton);
    newDiv.appendChild(newButton);
    document.getElementById('list').appendChild(newDiv);
    
    if (save) saveList();

    taskInput.value = "";
   
}
// Save 
function saveList() {
    const tasks = [];
    const listItems = document.querySelectorAll('#list div');
    listItems.forEach(div => {
        const text = div.firstChild.textContent.replace("🎄 ", "");
        tasks.push(text);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTextToList(text) {
    document.getElementById('list').innerHTML += '🎄 ' + text + '<br>';
}

// Reindeer animation
window.onload = () => {
    const r = document.getElementById("reindeer");
    r.classList.remove("hidden");


    function loopRun() {
        
        r.classList.add("hidden");     
        r.style.transition = "none";   
        r.style.left = "-100vw";       // moves back to the start
      

        requestAnimationFrame(() => {
            r.style.transition = "left 10s linear"; // movement speed
            r.classList.remove("hidden");         
                   

            requestAnimationFrame(() => {
                
                r.style.left = "100vw";  // run across screen
                        
            });
        });
        

    
        setTimeout(loopRun, 10000); //repeat after 10 seconds
    }

    loopRun();
};

function createSnowflake() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.textContent = "❄";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.fontSize = (Math.random() * 15 + 10) + "px";

    snow.style.animationDuration = (Math.random() * 3 + 3) + "s";
    snow.style.animationTimingFunction = "ease-in-out";

    document.getElementById("snow-container").appendChild(snow);

    // Remove snowflaker
    setTimeout(() => snow.remove(), 6000);
}

// Make a new snowflake every 100 ms
setInterval(createSnowflake, 100);