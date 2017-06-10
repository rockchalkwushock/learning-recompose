# withHandlers()

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## API

```js
withHandlers(
  handlerCreators: {
    [handlerName: string]: (props: Object) => Function
  } |
  handlerCreatorsFactory: (initialProps) => {
    [handlerName: string]: (props: Object) => Function
  }
): HigherOrderComponent
```

## Screenshot

Coming Soon