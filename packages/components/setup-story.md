# How to setup Storybook in React Typescript project

# Background

I use React with Typescript as my goto UI development without Storybook. I heard about it before but never planned to use it. Until I was about to start my new project, I decided to look into it again and just realised that it provides many benefits developing UI. After a session of searching and confusing setting up a project, I think it would be good if I summarize the steps here for referencing in the future. Before we begin, I would like to share the benefit of using Storybook in UI project.

## Why Storybook?

Storybook is a UI development tool that provide a way to record your UI component usage as scenario or story. It also provides a user interface to see your component usage scenario in action. What you will get for (almost) free are:

- Interactive document for your UI component — how it looks in different properties.
- [Snapshot unit testing ](https://jestjs.io/docs/en/snapshot-testing)(addon) — it can automatically generate snapshot testing all your component’s stories using Jest.
- It helps developer focusing on component development by defining component’s use case in the form of story.
- Its usefulness can be extended using addon. For example, you can add additional unit test code into related story ([Spec](https://github.com/mthuret/storybook-addon-specifications) addon). You can also add your own addon.

# Basic setup

> **Note** : this setup **create-react-app** version **2+ (this article use version 3)**
>
> Verify your version using `create-react-app -V`

1. **Create react project with typescript**

```
PROJECT=react-ts-storybook #change this to your own projectyarn create react-app $PROJECT --typescriptcd $PROJECT
```

**2. Add Storybook dependencies**

```
yarn add -D @storybook/react @types/storybook__react
```

**3. Add Storybook necessary configurations**

Create `config.ts` file

```
mkdir .storybooktouch .storybook/config.ts
```

Update `config.ts` file

```
import { configure } from "@storybook/react";const req = require.context("../src", true, /\.stories\.tsx$/);function loadStories() {
    req.keys().forEach(req);
}configure(loadStories, module);
```

**4. Add a sample react component**

Create `src/components/ColorButton.tsx`

```
mkdir src/componentstouch src/components/ColorButton.tsx
```

Update `ColorButton.tsx` as below

```
import React from "react"export interface IProps {
    color: string
    onClick?: (color: string) => void
}export default (props: IProps) => {    const {color, onClick} = props;    return <button style={{color}} onClick={() => onClick && onClick(color)}>Color Button</button>}
```

This is a very simple component that has `color` as a property as button color style.

**5. Add stories for the sample react component**

Create `src/components/ColorButton.stories.tsx`

```
touch src/components/ColorButton.stories.tsx
```

Update `ColorButton.stories.tsx` as below

```
import React from "react";import { storiesOf } from "@storybook/react";
import ColorButton from "./ColorButton";storiesOf("ColorButton", module)
    .add("red",        () => <ColorButton color="red" />
    )
    .add("blue",        () => <ColorButton color="blue" />
    )
```

This is a story of `ColorButton` with 2 scenarios. One is a button with`red` color and another is `blue` color.

**6. Add Storybook scripts into **`<strong class="hq fz">package.json</strong>`

```
..."scripts": {    ...

    "eject": "react-scripts eject",

    "storybook": "start-storybook -p 9009 -s public",
    "build-storybook": "build-storybook -s public"},...
```

**7. Start Storybook UI**

```
yarn storybook
```

At this point, there should be a browser opened as shown below.

![](https://miro.medium.com/max/60/1*AE0t1X23nYIjZsCCuPLayg.png?q=20)

![](https://miro.medium.com/max/1400/1*AE0t1X23nYIjZsCCuPLayg.png)

Storybook UI with a sample stories

# More useful setup

Below are a very useful Storybook addons. It is best following them in sequence.

# Snapshot Unit Test with Storyshots add-on

[Storyshots add-on](https://www.npmjs.com/package/@storybook/addon-storyshots) is used to integrate Storybook stories in unit test when run `yarn test` It covers UI snapshot test which is useful for regression testing.

1. **Add storyshots add-on dependencies**

```
yarn add -D @storybook/addon-storyshots @types/storybook__addon-storyshots require-context.macro react-test-renderer
```

**2. Update **`<strong class="hq fz">config.ts</strong>`** to be able to run under test**

```
import { configure } from "@storybook/react";
import requireContext from "require-context.macro";const req = requireContext("../src", true, /\.stories\.tsx$/);function loadStories() {
    req.keys().forEach(req);
}configure(loadStories, module);
```

**3. Add webpack config for Storybook to support the updated config**

```
touch .storybook/webpack.config.js
```

Update `webpack.config.js`

```
module.exports = ({ config, mode }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  };
```

**4. Add snapshots test file**

```
mkdir src/__test__touch src/__test__/storyshots.test.ts
```

Update `storyshots.test.ts`

```
import initStoryshots from '@storybook/addon-storyshots';initStoryshots({});
```

**5. Run unit test**

```
yarn test
```

You should see something like this as a result:

![](https://miro.medium.com/max/60/1*BhYHy8t6UBWjXBwYvRCNzg.png?q=20)

![](https://miro.medium.com/max/1400/1*BhYHy8t6UBWjXBwYvRCNzg.png)

snapshot test result

# See interaction result with Action add-on

[Action add-on](https://www.npmjs.com/package/@storybook/addon-actions) is used to log action events producing from the component so user can see the result of the action on Storybook UI.

1. **Add action add-on dependencies**

```
yarn add -D @storybook/addon-actions
```

**2. Register add-on**

```
touch .storybook/addons.ts
```

Update `addons.ts`

```
import '@storybook/addon-actions/register';
```

**3. Update sample component story to use action addon**

Update `src/components/ColorButton.stories.tsx`

```
import React from "react";import { storiesOf } from "@storybook/react";
import ColorButton from "./ColorButton";import { action } from "@storybook/addon-actions";storiesOf("ColorButton", module)
    .add("red",
        () => <ColorButton color="red" onClick={action("clicked")}/>
    )
    .add("blue",
        () => <ColorButton color="blue"  onClick={action("clicked")}/>
    )
```

We update `onClick` event to call `action` function to log event and its argument named `clicked`

**4. Run or Re-run **`<strong class="hq fz">yarn storybook</strong>`

You should see a new tab `actions` shown and when click a button, there should be a click message show as below.

![](https://miro.medium.com/max/60/1*UoXKpQEmukhJ4d0LKU013w.png?q=20)

![](https://miro.medium.com/max/1400/1*UoXKpQEmukhJ4d0LKU013w.png)

Action logs when click a button

> **Note** : if you found an error about missing dependencies such as
>
> **Cannot find module ‘babel-loader’**
>
> Try removing `yarn.lock` or `package.lock` and run `yarn` or `npm install` to reinstall everything again

# See component properties in action with Knob add-on

[Knob addon](https://www.npmjs.com/package/@storybook/addon-knobs) enables user to change component properties and see the actual change in real-time.

1. **Add dependencies**

```
yarn add -D @storybook/addon-knobs @types/storybook__addon-knobs
```

**2. Register addon into ** `<strong class="hq fz">.storybook/addons.ts</strong>`

```
...import '@storybook/addon-knobs/register';
```

**3. Update sample story to use knob addon **`<strong class="hq fz">ColorButton.stories.tsx</strong>`

```
import React from "react";import { storiesOf } from "@storybook/react";
import ColorButton from "./ColorButton";import { action } from "@storybook/addon-actions";
import { withKnobs, text, select} from '@storybook/addon-knobs';storiesOf("ColorButton", module)
    .addDecorator(withKnobs)
    .add("red",
        () => <ColorButton color={select("color", {Red: "red", Dark: "darkred"}, "red")} onClick={action("clicked")}/>
    )
    .add("blue",
        () => <ColorButton color={text("color", "blue")}  onClick={action("clicked")}/>
    )
```

We add `withKnobs` as decorator and use `select` and `text` function as an example.

**4. Run or Re-run **`<strong class="hq fz">yarn storybook</strong>`

You should see a new tab `Knobs` and when you select `red` scenario you will see that color option can be chosen and the component property will change accordingly.

![](https://miro.medium.com/max/60/1*HwwnK8Ds4IJ-1dwnskDlrQ.png?q=20)

![](https://miro.medium.com/max/1400/1*HwwnK8Ds4IJ-1dwnskDlrQ.png)

Knobs select options

![](https://miro.medium.com/max/60/1*HMct0IUpxd4vDtcirqq9Cw.png?q=20)

![](https://miro.medium.com/max/1400/1*HMct0IUpxd4vDtcirqq9Cw.png)

Knobs text option

> **Note** : if you found an error about missing dependencies such as
>
> **Cannot find module ‘babel-loader’**
>
> Try removing `<em class="fy">yarn.lock</em>` or `<em class="fy">package.lock</em>` and run `<em class="fy">yarn</em>` or `<em class="fy">npm install</em>` to reinstall everything again
