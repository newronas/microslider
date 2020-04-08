# microslider
javascript micro slider, simple, fast and light. js slider for images.

## How to run it?

### HTML

```html
<!-- css style required, adapt the css code to your need -->
<style type="text/css">
  #slider {
    display:flex;
    padding:0;
    width:320px; /* set your width */
    margin:0 auto;
    overflow: hidden;
  }
  #slider > div {
    width:320px; /* set your width */
    flex: 0 0 320px; /* set your width */
    display: flex;
    justify-content: center;
  }
  #new-slider > div > img {
    max-width:100%;
  }
</style>

<div id="slider">
  <div>
    <img src="image-1.jpg" />
  </div>
  <div>
    <img src="image-2.jpg" />
  </div>
  <div>
    <img src="image-3.jpg" />
  </div>
</div>

<script src="microslider.js"></script>
```

### Javascript

```javascript
MS_.start({
  id: 'slider',
  stopped_timer: 2000,
  speed: 10
});
```
**id:** id of the element that contains the slider, default(null)\
**stopped_timer:** set the time an image stops before moving, default(2000)\
**speed:** set the movement speed, default(200)
