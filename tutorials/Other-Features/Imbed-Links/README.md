# How to Imbed Links into your Images

If you want to embed links into your images, you would have to replace thise code found in main.js:
If you want to embed links into your images, you would have to replace this code found in main.js:
```bash
<div id="images">
  ${cubes
    .map(
      (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
    )
    .join("")}
</div>
```

With this:
```bash
<div id="images">
  <a href="https://example.com/page1" target="_blank">
    <img src="./cubeDrawings/cube1.webp" alt="cube1" />
  </a>
  <a href="https://example.com/page2" target="_blank">
    <img src="./cubeDrawings/cube2.webp" alt="cube2" />
  </a>
  <a href="https://example.com/page3" target="_blank">
    <img src="./cubeDrawings/cube3.webp" alt="cube3" />
  </a>
  <a href="https://example.com/page4" target="_blank">
    <img src="./cubeDrawings/cube4.webp" alt="cube4" />
  </a>
</div>
```

Where you would have to specify the location of each of the images by changing what comes after "src=" and changing the example weblinks to what corresponds to your image. "How to Change the Images on your Website" gives more detail on how to change the images to your own.
