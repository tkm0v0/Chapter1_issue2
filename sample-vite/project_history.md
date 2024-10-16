# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# supabaseの設定を行う
- [JavaScriptクライアント ライブラリ](https://supabase.com/docs/reference/javascript/introduction)
```
@MacBook-Pro sample-vite % npm install @supabase/supabase-js

added 15 packages, and audited 295 packages in 6s

103 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % 
```

# Firebase Cliのインストール
```
@MacBook-Pro Chapter1_issue2 % cd sample-vite 
@MacBook-Pro sample-vite % npm install firebase

removed 591 packages, and audited 376 packages in 2s

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % npm add firebase

up to date, audited 376 packages in 572ms

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % npm add add firebase-tools

added 592 packages, and audited 968 packages in 19s

155 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MacBook-Pro sample-vite % firebase login
Already logged in as gmail.com
@MacBook-Pro sample-vite % firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and 
(optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: study-record-930dc (study-record)
i  Using project study-record-930dc (study-record)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/index.html already exists. Overwrite? Yes
✔  Wrote dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

@MacBook-Pro sample-vite % npm run build

> sample-vite@0.0.0 build
> vite build

vite v5.2.6 building for production...
✓ 108 modules transformed.
dist/index.html                    0.45 kB │ gzip:  0.32 kB
dist/assets/index-DuUS2S-g.css     0.05 kB │ gzip:  0.07 kB
dist/assets/browser-jdKbRPld.js    0.57 kB │ gzip:  0.40 kB
dist/assets/index-kHuSM879.js    248.02 kB │ gzip: 74.63 kB
✓ built in 590ms
@MacBook-Pro sample-vite % firebase deploy

=== Deploying to 'study-record-930dc'...

i  deploying hosting
i  hosting[study-record-930dc]: beginning deploy...
i  hosting[study-record-930dc]: found 5 files in dist
✔  hosting[study-record-930dc]: file upload complete
i  hosting[study-record-930dc]: finalizing version...
✔  hosting[study-record-930dc]: version finalized
i  hosting[study-record-930dc]: releasing new version...
✔  hosting[study-record-930dc]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/study-record-930dc/overview
Hosting URL: https://study-record-930dc.web.app
@MacBook-Pro sample-vite % 
```
# makeコマンドで一発でデプロイできるようにする
```
@MacBook-Pro Chapter1_issue2 % cd sample-vite 
@MacBook-Pro sample-vite % touch Makefile
@MacBook-Pro sample-vite % make deploy
npm run build

> sample-vite@0.0.0 build
> vite build

vite v5.2.6 building for production...
✓ 108 modules transformed.
dist/index.html                    0.45 kB │ gzip:  0.31 kB
dist/assets/index-DuUS2S-g.css     0.05 kB │ gzip:  0.07 kB
dist/assets/browser-DG1nDJhn.js    0.57 kB │ gzip:  0.40 kB
dist/assets/index-DFOREgO1.js    248.02 kB │ gzip: 74.65 kB
✓ built in 589ms
firebase deploy

=== Deploying to 'study-record-930dc'...

i  deploying hosting
i  hosting[study-record-930dc]: beginning deploy...
i  hosting[study-record-930dc]: found 5 files in dist
✔  hosting[study-record-930dc]: file upload complete
i  hosting[study-record-930dc]: finalizing version...
✔  hosting[study-record-930dc]: version finalized
i  hosting[study-record-930dc]: releasing new version...
✔  hosting[study-record-930dc]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/study-record-930dc/overview
Hosting URL: https://study-record-930dc.web.app
```
# jestとreact-testing-libraryをインストール
```
nameMacBook-Pro sample-vite % pwd
/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite
nameMacBook-Pro sample-vite % npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react
(#######⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠙ idealTree:@testing-library/jest-dom: timing idealTree:node_modules/@testing-library/jest-dom Com(#######⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠙ idealTree:@testing-library/jest-dom: timing idealTree:node_modules/@testing-library/jest-dom Com(#######⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠋ idealTree:@testing-library/jest-dom: timing idealTree:node_modules/@testing-library/jest-dom Com

added 439 packages, removed 4 packages, changed 24 packages, and audited 1403 packages in 17s

168 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (1 low, 3 moderate, 8 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
nameMacBook-Pro sample-vite % 
```

# テスト環境でも.envの環境変数を使えるようにしたいのでdotenvというライブラリをインストールする
```
nameMacBook-Pro sample-vite % npm i dotenv

added 1 package, and audited 1404 packages in 1s

169 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (1 low, 3 moderate, 8 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
nameMacBook-Pro sample-vite % 
```

# npm run testでテストが実行できるようにする
```
nameMacBook-Pro sample-vite % npm install --save-dev jest-environment-jsdom @babel/core @babel/preset-env 
npm WARN deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm WARN deprecated domexception@4.0.0: Use your platform's native DOMException instead

added 42 packages, changed 2 packages, and audited 1446 packages in 4s

171 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (1 low, 3 moderate, 8 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
nameMacBook-Pro sample-vite % 
```

# コマンドからテストを実行する
エラー
```
nameMacBook-Pro sample-vite % npm run test

> sample-vite@0.0.0 test
> jest

 FAIL  src/tests/sample.spec.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/jest.setup.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import "@testing-library/jest-dom";
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.079 s
Ran all test suites.
nameMacBook-Pro sample-vite % 
```

# コマンドからテストを再実行する
成功
```
nameMacBook-Pro sample-vite % npm run test

> sample-vite@0.0.0 test
> jest

 PASS  src/tests/sample.spec.js
  Sample Test
    ✓ should return true (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.791 s
Ran all test suites.
nameMacBook-Pro sample-vite % 
```

# 
```
nameMacBook-Pro Chapter1_issue2 % cd sample-vite 
nameMacBook-Pro sample-vite % npm run test

> sample-vite@0.0.0 test
> jest

 PASS  src/tests/sample.spec.js
 FAIL  src/tests/componenteSample.spec.jsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/src/supabase.js:8
    var supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
                             ^^^^

    SyntaxError: Cannot use 'import.meta' outside a module

      1 | import "./styles.css";
      2 | import { useState, useEffect } from "react";
    > 3 | import { supabase } from './supabase.js';
        | ^
      4 |
      5 | export const Todo = () => {
      6 |   const [form, setForm] = useState({ textInputDetail: "", textInputTime: "" });

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)
      at Object.require (src/Todo.jsx:3:1)
      at Object.require (src/tests/componenteSample.spec.jsx:1:1)

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.381 s
Ran all test suites.
nameMacBook-Pro sample-vite % 

```

## エラー
```
Jest が ECMAScript Modules (ESM) の構文、特に `import.meta.env` を解釈できていないことです。Vite プロジェクトは ESM を使用していますが、Jest のデフォルト設定は CommonJS を想定しているため、このような問題が発生しています。
```
# コンポーネントのエクスポート/インポートの不一致によるエラー
```
nameMacBook-Pro sample-vite % npm run test

> sample-vite@0.0.0 test
> jest

 PASS  src/tests/sample.spec.js
 FAIL  src/tests/componenteSample.spec.jsx
  ● Console

    console.error
      Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

       7 |   it("タイトルがHello Jestであること", () => {
       8 |     // testId(title)を指定して取得
    >  9 |     render(<App />);
         |            ^
      10 |     const title = screen.getByTestId("title");
      11 |     expect(title).toHaveTextContent("Hello Jest");
      12 |   });

      at printWarning (node_modules/react/cjs/react.development.js:209:30)
      at error (node_modules/react/cjs/react.development.js:183:7)
      at Object.createElementWithValidation [as createElement] (node_modules/react/cjs/react.development.js:2354:7)
      at Object.createElement (src/tests/componenteSample.spec.jsx:9:12)

    console.error
      Error: Uncaught [Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.]
          at reportException (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
          at innerInvokeEventListeners (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
          at invokeEventListeners (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
          at HTMLUnknownElementImpl._dispatch (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
          at HTMLUnknownElementImpl.dispatchEvent (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
          at HTMLUnknownElement.dispatchEvent (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
          at Object.invokeGuardedCallbackDev (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
          at invokeGuardedCallback (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
          at beginWork$1 (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:27451:7)
          at performUnitOfWork (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:26560:12)
          at workLoopSync (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:26466:5)
          at renderRootSync (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:26434:7)
          at performConcurrentWorkOnRoot (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:25738:74)
          at flushActQueue (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react/cjs/react.development.js:2667:24)
          at act (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react/cjs/react.development.js:2582:11)
          at /Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/@testing-library/react/dist/act-compat.js:47:25
          at renderRoot (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/@testing-library/react/dist/pure.js:180:26)
          at render (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/@testing-library/react/dist/pure.js:271:10)
          at Object.<anonymous> (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/src/tests/componenteSample.spec.jsx:9:11)
          at Promise.then.completed (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/utils.js:298:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/utils.js:231:10)
          at _callCircusTest (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:316:40)
          at processTicksAndRejections (node:internal/process/task_queues:95:5)
          at _runTest (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:252:3)
          at _runTestsForDescribeBlock (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:126:9)
          at _runTestsForDescribeBlock (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:121:9)
          at run (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:71:3)
          at runAndTransformResultsToJestFormat (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
          at jestAdapter (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
          at runTestInternal (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-runner/build/runTest.js:367:16)
          at runTest (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-runner/build/runTest.js:444:34)
          at Object.worker (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-runner/build/testWorker.js:106:12) {
        detail: Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
            at createFiberFromTypeAndProps (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:28439:17)
            at createFiberFromElement (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:28465:15)
            at reconcileSingleElement (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:15750:23)
            at reconcileChildFibers (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:15808:35)
            at reconcileChildren (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:19174:28)
            at updateHostRoot (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:19883:5)
            at beginWork (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:21615:14)
            at HTMLUnknownElement.callCallback (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
            at HTMLUnknownElement.callTheUserObjectsOperation (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
            at innerInvokeEventListeners (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
            at invokeEventListeners (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
            at HTMLUnknownElementImpl._dispatch (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
            at HTMLUnknownElementImpl.dispatchEvent (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
            at HTMLUnknownElement.dispatchEvent (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
            at Object.invokeGuardedCallbackDev (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
            at invokeGuardedCallback (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
            at beginWork$1 (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:27451:7)
            at performUnitOfWork (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:26560:12)
            at workLoopSync (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:26466:5)
            at renderRootSync (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:26434:7)
            at performConcurrentWorkOnRoot (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react-dom/cjs/react-dom.development.js:25738:74)
            at flushActQueue (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react/cjs/react.development.js:2667:24)
            at act (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/react/cjs/react.development.js:2582:11)
            at /Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/@testing-library/react/dist/act-compat.js:47:25
            at renderRoot (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/@testing-library/react/dist/pure.js:180:26)
            at render (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/@testing-library/react/dist/pure.js:271:10)
            at Object.<anonymous> (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/src/tests/componenteSample.spec.jsx:9:11)
            at Promise.then.completed (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/utils.js:298:28)
            at new Promise (<anonymous>)
            at callAsyncCircusFn (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/utils.js:231:10)
            at _callCircusTest (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:316:40)
            at processTicksAndRejections (node:internal/process/task_queues:95:5)
            at _runTest (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:252:3)
            at _runTestsForDescribeBlock (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:126:9)
            at _runTestsForDescribeBlock (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:121:9)
            at run (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/run.js:71:3)
            at runAndTransformResultsToJestFormat (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)
            at jestAdapter (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
            at runTestInternal (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-runner/build/runTest.js:367:16)
            at runTest (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-runner/build/runTest.js:444:34)
            at Object.worker (/Users/name_1/Desktop/_workspace_JISOU/workspace_chapter1-issue2/Chapter1_issue2/sample-vite/node_modules/jest-runner/build/testWorker.js:106:12),
        type: 'unhandled exception'
      }

       7 |   it("タイトルがHello Jestであること", () => {
       8 |     // testId(title)を指定して取得
    >  9 |     render(<App />);
         |           ^
      10 |     const title = screen.getByTestId("title");
      11 |     expect(title).toHaveTextContent("Hello Jest");
      12 |   });

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:4213:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4277:31)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27451:7)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26560:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26466:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26434:7)
      at performConcurrentWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:25738:74)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/tests/componenteSample.spec.jsx:9:11)

  ● Title Test › タイトルがHello Jestであること

    Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

       7 |   it("タイトルがHello Jestであること", () => {
       8 |     // testId(title)を指定して取得
    >  9 |     render(<App />);
         |           ^
      10 |     const title = screen.getByTestId("title");
      11 |     expect(title).toHaveTextContent("Hello Jest");
      12 |   });

      at createFiberFromTypeAndProps (node_modules/react-dom/cjs/react-dom.development.js:28439:17)
      at createFiberFromElement (node_modules/react-dom/cjs/react-dom.development.js:28465:15)
      at reconcileSingleElement (node_modules/react-dom/cjs/react-dom.development.js:15750:23)
      at reconcileChildFibers (node_modules/react-dom/cjs/react-dom.development.js:15808:35)
      at reconcileChildren (node_modules/react-dom/cjs/react-dom.development.js:19174:28)
      at updateHostRoot (node_modules/react-dom/cjs/react-dom.development.js:19883:5)
      at beginWork (node_modules/react-dom/cjs/react-dom.development.js:21615:14)
      at beginWork$1 (node_modules/react-dom/cjs/react-dom.development.js:27426:14)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom.development.js:26560:12)
      at workLoopSync (node_modules/react-dom/cjs/react-dom.development.js:26466:5)
      at renderRootSync (node_modules/react-dom/cjs/react-dom.development.js:26434:7)
      at performConcurrentWorkOnRoot (node_modules/react-dom/cjs/react-dom.development.js:25738:74)
      at flushActQueue (node_modules/react/cjs/react.development.js:2667:24)
      at act (node_modules/react/cjs/react.development.js:2582:11)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:180:26)
      at render (node_modules/@testing-library/react/dist/pure.js:271:10)
      at Object.<anonymous> (src/tests/componenteSample.spec.jsx:9:11)

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.643 s, estimated 2 s
Ran all test suites.
nameMacBook-Pro sample-vite % 

```
# 
```
nameMacBook-Pro sample-vite % npm run test

> sample-vite@0.0.0 test
> jest

 FAIL  src/tests/componenteSample.spec.jsx
  ● Title Test › タイトルがHello Jestであること

    TestingLibraryElementError: Unable to find an element by: [data-testid="title"]

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: white; flex-direction: column;"
        >
          <h2>
            loading...
          </h2>
          <p>
            読み込み中です。
          </p>
        </div>
      </div>
    </body>

       8 |     // testId(title)を指定して取得
       9 |     render(<Todo />);
    > 10 |     const title = screen.getByTestId("title");
         |                          ^
      11 |     expect(title).toHaveTextContent("Hello Jest");
      12 |   });
      13 | });

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:76:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:52:17
      at node_modules/@testing-library/dom/dist/query-helpers.js:95:19
      at Object.getByTestId (src/tests/componenteSample.spec.jsx:10:26)

 PASS  src/tests/sample.spec.js

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.384 s
Ran all test suites.
```
# 
```

```
# 
```

```
# 
```

```
