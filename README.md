## &lt;morph-tabbar-item&gt;

Tab bar item that morphs for current mobile OS.

## Getting Started:
For the information about how to clone the desired repository, running the local server and testing, please refer to this [link](https://github.com/moduware/polymorph-components/blob/master/INFO.md).


  ## Demo
  - Here is a quick demo of the morph-tabbar-item element.

  <p align="center">
    <img src="demo-images/ios-demo.png" alt="IOS morph-tabbar-item demo"/>
  </p>

  ```html

  <template>
    <h3>Ios morph-tabbar-item</h3>
    <morph-tabbar-item id="first-item" platform="ios" name="Favorite" not-selected-image="../img/icon.svg" selected-image="../img/icon_selected.svg">
    </morph-tabbar-item>
    <morph-tabbar-item id="second-item" platform="ios" name="Favorite" not-selected-image="../img/icon.svg" selected-image="../img/icon_selected.svg" selected>
    </morph-tabbar-item>
  </template>

  ```

  <p align="center">
    <img src="demo-images/android-demo.png" alt="Android morph-tabbar-item demo"/>
  </p>


  ```html

  <demo-snippet>
    <template>
      <h3>Android morph-tabbar-item with label demo</h3>
      <morph-tabbar-item id="first-item" platform="android" name="favorite" not-selected-image="../img/icon.svg" selected-image="../img/icon_selected.svg" label>
      </morph-tabbar-item>
      <morph-tabbar-item id="second-item" platform="android" name="favorite" not-selected-image="../img/icon.svg" selected-image="../img/icon_selected.svg" label selected>
      </morph-tabbar-item>
    </template>
  </demo-snippet>

  ```

### Attributes

|      Custom Attribute      |   Type  |                                   Description                                  |              Default              |
|:--------------------------:|:-------:|:------------------------------------------------------------------------------:|:---------------------------------:|
|       **`platform`**       |  String | Name of the platform, get assigned<br> automatically by the morph element.     | Either **`andorid`** or **`ios`** |
| **`name`** <br> `required` |  String | Parent element uses the name attribute<br> to be able to manipulate the items. | **`false`**                       |
|         **`label`**        | Boolean | To have a tabbar item with label assign it to **`true`**.                      | **`false`**                       |
| **`not-selected-image`**   |  String | Image source for not selected state of the item.                               | **`null`**                        |
|    **`selected-image`**    |  String | Image source for selected state of the item.                                   | **`not-selected-image`**          |
|       **`selected`**       | Boolean | If  **`true`**, item is the selected one.                                      | **`false`**                       |

### Styling

-For Android platform;

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--color`                        | Color of the tabbar item               | #fff
`--ripple-color`                 | Color of the ripple effect on the item | `var(--color)`
`--ripple-color-selected`        | Ripple effect color of selected item   | #fff
`--selected-label-color-android` | Label text color of the selected item  | #fff

-For IOS platform;

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--color`                        | Color of the tabbar item               | #8e8e93
`--selected-label-color-ios`     | Label text color of the selected item  | #007aff
