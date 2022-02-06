### Vue infinite-scroll
> [Demo](https://vue-infinite-scroll-ruofanwei.vercel.app/)
### Features
- load more data with Lazy Loading while user scroll view to
bottom
    - [Method 1](https://github.com/ruofanwei/vue-infinite-scroll/tree/Method1/event-listeners) : use [event listeners on the scroll, resize and orientationChange events in the browser](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers-on-elements,-document-objects,-and-window-objects)
    - [Method 2](https://github.com/ruofanwei/vue-infinite-scroll/tree/Method2/Intersection-Observer) : using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) detect when an element enters the viewport and take an action
    - event listeners vs. Intersection Observer
        - using the Intersection Observer API action is triggered quicker
            > (the site doesn’t appear sluggish at all.)

        - using the event listeners, we had to add a timeout to make it performant
            > (slightly negative impact on the user experience as the data load is triggered with a slight delay.)

- e2e test
    - simulate user scroll view to bottom and observe the load more action


### Setup
- optimization the developer experience : make aliases for file paths
- commit message follow the [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0/)
- use [FakeStoreAPI](https://fakestoreapi.com/)

#### Preview
![](https://i.imgur.com/PMaRtIC.gif)