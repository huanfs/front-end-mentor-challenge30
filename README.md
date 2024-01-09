# simple card component

## style guide
- this app have only one component called *user*.
- all contents's inside and *#root* div.
- this div have and `display:flex` and `flex-direction:column` to align the element
one above other.
- at last, have and div called *.user* with a user picture and user name.
- this *.user* div have an `display:flex` and `align-items:center` to align elements.
- finaly, *#root* div has an `gap:1em` to make and space between elements.

### code operation
- this code's built in **react + vite + sass**
- this react app uses a `useRef` hook from *react*.
- H1 tag and #root div uses refereces *title* and *box* respectively.
- H1 actives the functions *mouseIn* and *mouseOut*.
- on mouse enter the element, starts *mouseIn* function, changing the color os H1 element and changing the styles of *box* who refer *#root* making then a `box-shadow:15px 15px 0 var(--Black)`.
- on mouse leaves the element, back to normal styles changing then back to `box-shadow:10px 10px 0 var(--black)` and turning H1 tag color to black again.