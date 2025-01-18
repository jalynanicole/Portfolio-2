# How to Update your Description to have a Scroll Mechanic

If you feel restricted for space in the text under your photos, just copy the code below and replace #description in your style.css file with said code. It will make it so that the text box is scrollable, so you don't have to worry about running out of space. Please modify the text box to fit your aesthetic! 
```bash
#description {
  /* Restrict description height and enable scrolling */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  max-height: 8em;  /* Changes the size of the text box */
  width: 35em;
  overflow-y: scroll;
  overflow-x: hidden;
  font-weight: 100;
  margin-left: 0em;
  margin-top: 0em;
  padding: 0.5em;
  background: rgba(0, 0, 0, 0.1); /* Changes the color of the background of the text box */
  border: 1px solid rgba(255, 255, 255, 0); /* Changes the color of the border of the text box */
  box-sizing: border-box;
  scrollbar-width: none; /* If you want to see your scroll bar - just delete this part*/
}
```
