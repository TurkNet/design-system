# TurkNet Design System

## Installation

Install the package in your project directory with:

```shell
npm install @turk.net/design-system

// or

yarn add @turk.net/design-system
```

## Usage

```js
import { Alert } from '@turk.net/design-system'

const SampleComponent = () => {
  return (
    <Alert severity="warning">
      This Alert Component, The severity property changes alert color.
    </Alert>
  )
}
```

## Development

### 🚅 Quick start

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd design-system/

    # Install the dependencies
    yarn
    ```

2.  **Open the source code and start editing!**

    ```shell

    yarn start

    ```

3.  **Build storybook**

    ```shell

    yarn build

    ```

4.  **Build library**

    ```shell

    yarn build-library

    ```

### Learning Storybook

1. Read our introductory tutorial over at [Storybook tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).
