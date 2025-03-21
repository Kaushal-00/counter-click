let currentCount = 9456783;

function displayDigits() {
    let currentCountArr = currentCount.toString().padStart(7, '0');
    for (let i = 0; i < currentCountArr.length; i++) {
        let digitElement = document.getElementById(`digit-${i + 1}`);
        digitElement.innerText = currentCountArr[i];
    }
}
displayDigits();

let clickBtns = document.querySelectorAll(".click-btn");
clickBtns.forEach(Btn => {
    Btn.addEventListener("click", () => {
        let value = parseInt(Btn.getAttribute("data-value"));
        currentCount = currentCount + value;
        displayDigits();
    });
});
