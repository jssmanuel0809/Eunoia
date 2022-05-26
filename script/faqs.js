var accordion = document.getElementsByClassName("accordionBar");
 
for (var a = 0; a < accordion.length; a++) {
  accordion[a].onclick = function() {
    this.classList.toggle('is-open');
 
    var AccordContent = this.nextElementSibling;
    if (AccordContent.style.maxHeight) {
      AccordContent.style.maxHeight = null;
    } 
    else {
      AccordContent.style.maxHeight = AccordContent.scrollHeight + "px";
    }
  }
}