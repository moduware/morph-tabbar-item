## &lt;morph-tabbar-item&gt;

Tab bar item that morphs for current mobile OS.

## Getting Started:
For the information about how to clone the desired repository, running the local server and testing, please refer to this [link].(https://github.com/moduware/polymorph-components/blob/master/INFO.md)


  ## Demo
  - Here is a quick demo of the morph-tabbar-item element.


  ![alt text](https://user-images.githubusercontent.com/15607784/32865094-84053a22-ca16-11e7-8bfc-52640140e8e8.png)


  ```html

  <template>
    <h3>Ios morph-tabbar-item</h3>
    <morph-tabbar-item id="first-item" platform="ios" name="Favorite" not-selected-image="../img/icon.svg" selected-image="../img/icon_selected.svg">
    </morph-tabbar-item>
    <morph-tabbar-item id="second-item" platform="ios" name="Favorite" not-selected-image="../img/icon.svg" selected-image="../img/icon_selected.svg" selected>
    </morph-tabbar-item>
  </template>

  ```


  ![alt text](https://user-images.githubusercontent.com/15607784/32865554-76e172aa-ca18-11e7-9197-bd9d50b72e52.png)


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
`--selected-text-color-android`  | Text color of selected item            | #fff
`--selected-label-color-android` | Label text color of the selected item  | #fff

-For IOS platform;

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--color`                        | Color of the tabbar item               | #8e8e93
`--selected-text-color-ios`      | Label text color of the selected item  | #007aff
`--selected-label-color-ios`     | Label text color of the selected item  | #007aff
