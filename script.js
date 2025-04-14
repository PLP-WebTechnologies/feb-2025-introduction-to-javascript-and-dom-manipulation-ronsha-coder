function changeText() {
    const paragraph = document.getElementById("paragraph");
    paragraph.textContent = "The text has been changed!";
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px";
    paragraph.style.backgroundColor = "#f0f0f0";
  }
  
  function toggleElement() {
    const container = document.getElementById("container");
    const existingElement = document.getElementById("new-element");
  
    if (existingElement) {
      container.removeChild(existingElement);
    } else {
      const newElement = document.createElement("p");
      newElement.id = "new-element";
      newElement.textContent = "A new element has been added!";
      container.appendChild(newElement);
    }
  }
  