title: Quasar Radio
---
<input type="hidden" data-fullpage-demo="radio">

## Basic Usage

``` html
<label>
  <radio :model.sync="option" value="opt1"></radio>
  Option 1
</label>
<label>
  <radio :model.sync="option" value="opt2"></radio>
  Option 2
</label>
```

## Inside of a List Usage

``` html
<div class="list bordered inner-delimiter">
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Option 1</div>
      <radio :model.sync="option" value="opt1"></radio>
    </div>
  </label>
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Option 2</div>
      <radio :model.sync="option" value="opt2"></radio>
    </div>
  </label>
</div>
```

``` html
<div class="list bordered inner-delimiter">
  <label class="item">
    <radio :model.sync="option" value="opt1"></radio>
    <div class="item-content">
        Option 1
    </div>
  </label>
  <label class="item">
    <radio :model.sync="option" value="opt2"></radio>
    <div class="item-content">
        Option 2
    </div>
  </label>
</div>
```
