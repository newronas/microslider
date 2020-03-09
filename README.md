# microslider
javascript micro slider, simple, fast and light. Sliding js images

## How to run it?

### HTML

```html
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
