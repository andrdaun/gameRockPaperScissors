function playGame(playerChoice) {
  highlightChoice(playerChoice);
  showSpinner();

  setTimeout(() => {
    const choices = ["камень", "ножницы", "бумага"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    hideSpinner();
    removeHighlight(playerChoice);

    showResultModal("Принимаем ваши ставки...");
    setTimeout(() => {
      const winner = determineWinner(playerChoice, computerChoice);
      showResultModal(`Ставки сделаны, победитель: ${winner}`);
    }, 2000);
  }, 2000);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Ничья";
  } else if (
    (playerChoice === "камень" && computerChoice === "ножницы") ||
    (playerChoice === "ножницы" && computerChoice === "бумага") ||
    (playerChoice === "бумага" && computerChoice === "камень")
  ) {
    return "Игрок";
  } else {
    return "Компьютер";
  }
}

function highlightChoice(choice) {
  document.getElementById(`image-${choice}`);
}

function removeHighlight(choice) {
  document.getElementById(`image-${choice}`);
}

function showSpinner() {
  document.getElementById("spinner").style.display = "block";
}

function hideSpinner() {
  document.getElementById("spinner").style.display = "none";
}

function showResultModal(message) {
  const resultModal = document.getElementById("result-modal");
  resultModal.innerText = message;
  resultModal.style.display = "block";
  setTimeout(() => {
    resultModal.style.display = "none";
  }, 4000);
}
