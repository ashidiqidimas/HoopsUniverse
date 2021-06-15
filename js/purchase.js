// let searchBar = $("#dropdown-trigger");
//
// searchBar.addEventListener("focus", () => {
//     alert("test");
//     });

// searchBar.add('focus', function (event) {
//    alert("yes");
// });

function test(btn) {
    alert(`#${btn}`);
}

// Size Selection
function updateSizeLabels(btn) {
    // alert("clicked " + btnId);
    let sizeButtons = $(".size-option button");
    sizeButtons.removeClass("selected-type");
    // let target = `#${btn}`;
    // console.log(target);
    let selectedType = $(`#${btn}`);
    selectedType.addClass("selected-type");
}

function selectedSize(btn) {
    let sizes = $(".size button");
    sizes.removeClass("selected-size");
    let selectedSize = $(`#${btn}`);
    selectedSize.addClass("selected-size")
}

// Quantity selection
function increment(btn) {
    let counterLabel = $("#current-quantity");
    let counterInString = counterLabel.html();
    var counterInInt = parseInt(counterInString);
    counterInInt++;
    document.getElementById("current-quantity").innerText = counterInInt.toString();
}

function decrement(btn) {
    let counterLabel = $("#current-quantity");
    let counterInString = counterLabel.html();
    var counterInInt = parseInt(counterInString);
    counterInInt--;

    if (counterInInt === 0) {
        alert("Sorry you have to choose at least 1 item to order");
    } else {
        document.getElementById("current-quantity").innerText = counterInInt.toString();
    }
}