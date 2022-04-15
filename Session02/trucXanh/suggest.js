let cover01 = document.createElement("div");
cover01.style.backgroundColor = "orange";
cover01.style.width = "100px";
cover01.style.height = "100px";
cover01.style.top = "100px";
cover01.style.left = "100px";
document.body.appendChild(cover01);

function createLabel(index){
    let label = document.createElement("div");
    label.innerText = index;
    label.style.position = "absolute";
    label.style.top = "35px";
    label.style.left = "50px";
    label.style.fontSize = "30px";
    return label;
}

let label01 = createLabel(1);
cover01.appendChild(label01);
// create card
    // create image
    // create cover
    // create label
    // open
    // close
    // hide

// create 20 cards ( 20 index, 10 value )
    // display cards
    // shuffle cards
    // first card
    // second card
    // matched ? hide : close
