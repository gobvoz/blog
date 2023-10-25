// @ts-nocheck

import { ArticleList, ArticleListType } from 'entities/article';
import { FC, memo } from 'react';

import { useAppTranslation } from 'shared/libs/hooks';

const article = {
  id: '1',
  profile: {
    id: '1',
    first: 'Morgan',
    last: 'Kane',
    age: '33',
    currency: 'USD',
    country: 'USA',
    city: 'New York',
    username: 'admin',
    avatar: 'https://i.pravatar.cc/300?img=4',
    about: 'admin of this blog',
  },
  title: '7 New JavaScript Features in ECMAScript 2022',
  subtitle:
    'ECMAScript (often abbreviated as ES) is a standardized programming language specification for JavaScript. It is developed and maintained by the ECMAScript Language Specification committee and is the standard on which JavaScript is based. The specification sets out the rules and guidelines for how the JavaScript language should behave, including syntax, data types, and built-in objects. ECMAScript versions are released periodically, with new versions bringing new features and capabilities to the language.',
  image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KionUgns58P78XvfAFeeuw.jpeg',
  createdAt: '31.01.2023',
  link: 'https://enlear.academy/7-new-javascript-features-in-ecmascript-2022-64a330f6eae2',
  views: '124',
  topics: ['Ecmascript', 'JavaScript', 'Features', 'JS', 'WebDevelopment'],
  body: [
    {
      id: '1',
      type: 'PARAGRAPH',
      content: [
        'ECMAScript (often abbreviated as ES) is a standardized programming language specification for JavaScript. It is developed and maintained by the ECMAScript Language Specification committee and is the standard on which JavaScript is based. The specification sets out the rules and guidelines for how the JavaScript language should behave, including syntax, data types, and built-in objects. ECMAScript versions are released periodically, with new versions bringing new features and capabilities to the language.',
        'ECMAScript is widely used for web development, server-side and client-side scripting, and for creating mobile and desktop applications. JavaScript, JScript, and ActionScript are some popular implementations of ECMAScript. JavaScript is the most widely-used implementation supported by all major web browsers. So in this article, I will discuss the most famous JavaScript Features in ECMAScript 2022.',
      ],
    },
    {
      id: '2',
      type: 'PARAGRAPH',
      content: [
        'ECMAScript (often abbreviated as ES) is a standardized programming language specification for JavaScript. It is developed and maintained by the ECMAScript Language Specification committee and is the standard on which JavaScript is based. The specification sets out the rules and guidelines for how the JavaScript language should behave, including syntax, data types, and built-in objects. ECMAScript versions are released periodically, with new versions bringing new features and capabilities to the language.',
        'ECMAScript is widely used for web development, server-side and client-side scripting, and for creating mobile and desktop applications. JavaScript, JScript, and ActionScript are some popular implementations of ECMAScript. JavaScript is the most widely-used implementation supported by all major web browsers. So in this article, I will discuss the most famous JavaScript Features in ECMAScript 2022.',
      ],
    },
    {
      id: '3',
      type: 'HEADER',
      content: ['1. Top-level await'],
    },
    {
      id: '4',
      type: 'PARAGRAPH',
      content: [
        'Top-level await is a feature that was proposed for inclusion in ECMAScript 2022. Still, it was later removed from the proposal due to concerns about its impact on the language’s semantics and the difficulty of implementing it in existing JavaScript engines.',
        'The feature would have allowed developers to use the await keyword outside of an async function, enabling them to use asynchronous code at the top level of their scripts, such as in the global scope or in module exports.',
        'This feature was highly debated some developers would have found it very useful, as it would have allowed them to write cleaner and more readable code, others argued that it would have introduced potential errors and confusion, as it would have allowed the use of await in unexpected places, and it would have also made it more difficult to understand the control flow of a program.',
        'Currently, top-level await is not a part of ECMAScript, and it’s uncertain if it will be added in future versions.',
      ],
    },
    {
      id: '5',
      type: 'HEADER',
      content: ['2. Method .at()'],
    },
    {
      id: '6',
      type: 'PARAGRAPH',
      content: [
        'The .at() the method is not a part of any official ECMAScript standard, but it may be available in some JavaScript libraries or frameworks.',
        'The .at() the method could be used to access an element of an array by its index, and it returns the element at the specified index. For example, if you have an array called myArray and you want to access the element at index 2, and you could use the following code:',
      ],
    },
    {
      id: '7',
      type: 'CODE',
      content: ['myArray.at(2);'],
    },
    {
      id: '8',
      type: 'PARAGRAPH',
      content: [
        'It is similar to the built-in Array.prototype.indexOf() method.',
        'It is worth noticing that JavaScript natively provides the bracket notation to access the elements of an array, for example:',
      ],
    },
    {
      id: '9',
      type: 'CODE',
      content: ['myArray[2];'],
    },
    {
      id: '10',
      type: 'PARAGRAPH',
      content: [
        'It is also important to notice that the .at() the method could have different behavior depending on your library or framework.',
        'Please let me know if you have more information about the context in which you have seen the method .at() so I can provide more detailed information.',
      ],
    },
    {
      id: '11',
      type: 'HEADER',
      content: ['3. Class Field Declarations'],
    },
    {
      id: '12',
      type: 'PARAGRAPH',
      content: [
        'Class Field Declarations is a feature proposed for inclusion in ECMAScript 2022. It allows developers to define class properties directly in the class definition rather than in the constructor. It provides a more concise syntax for defining class properties and a more intuitive way to set up initial values for class properties.',
        'Here is an example of how class field declarations can be used:',
        "In this example, the class fields myField and myField2 are defined directly in the class definition and are set to their initial values. This is equivalent to defining properties in the constructor using this.myField = 'initial value' and this.myField2 = 0.",
        'Class field declarations also support both public and private access modifiers, allowing you to control the accessibility of the fields.',
      ],
    },
    {
      id: '13',
      type: 'CODE',
      content: [
        'class MyClass {',
        '    #privateField;',
        '    publicField;',
        '    constructor () {',
        '        this.#privateField = "I\'m a private field";',
        '        this.publicField = "I\'m a public field";',
        '    }',
        '}',
      ],
    },
    {
      id: '14',
      type: 'PARAGRAPH',
      content: [
        'In this example, #privateField is a private field that can only be accessed within the class while publicField can be accessed from anywhere.',
        "This feature is currently in the proposal stage, and it's uncertain if it will be included in future versions of ECMAScript.",
      ],
    },
    {
      id: '15',
      type: 'HEADER',
      content: ['4. RegExp Match Indices'],
    },
    {
      id: '16',
      type: 'PARAGRAPH',
      content: [
        'A class static block is a feature proposed for inclusion in ECMAScript 2022, it allows developers to define a block of code that will be executed when the class is first accessed.',
        'The static block could be used to perform some setup or initialization tasks for the class, such as defining static properties or methods, setting up constants, or running some code that needs to be executed only once.',
        'Here is an example of how a class static block can be used:',
        '',
      ],
    },
    {
      id: '17',
      type: 'CODE',
      content: [
        'class MyClass {',
        '    static {',
        '        // code to be executed when the class is first accessed',
        "        MyClass.staticProp = 'initial value';",
        '    }',
        '    static staticProp;',
        '',
        '    constructor () {',
        '        // ...',
        '    }',
        '    ',
        '    myMethod () {',
        '        // ...',
        '    }',
        '}',
      ],
    },
    {
      id: '18',
      type: 'PARAGRAPH',
      content: [
        "In this example, the class static block is defined directly after the class definition, and it sets up the static property MyClass.staticProp to the initial value of 'initial value'.",
        'It’s worth noticing that this feature is currently in the proposal stage, and it’s uncertain if it will be included in future versions of ECMAScript.',
      ],
    },
    {
      id: '19',
      type: 'HEADER',
      content: ['5. Object.hasOwn() Method'],
    },
    {
      id: '20',
      type: 'PARAGRAPH',
      content: [
        'The correct method to check if an object has a property defined directly on it rather than on its prototype chain is Object.prototype.hasOwnProperty().',
        'For example, if you have an object called myObj and you want to check if it has a property called myProp, you could use:',
      ],
    },
    {
      id: '21',
      type: 'CODE',
      content: ["myObj.hasOwnProperty('myProp')"],
    },
    {
      id: '22',
      type: 'PARAGRAPH',
      content: [
        'The hasOwnProperty() the method returns a boolean indicating whether the object has the specified property as own (not inherited) property.',
        'It is also worth mentioning that you can use the in operator to check if a property exists in an object. However, it checks for both own and inherited properties, for example:',
      ],
    },
    {
      id: '23',
      type: 'CODE',
      content: ["'myProp' in myObj"],
    },
    {
      id: '24',
      type: 'PARAGRAPH',
      content: [
        'This line of code will return true whether the property exists directly on the object or in its prototype chain.',
      ],
    },
    {
      id: '25',
      type: 'HEADER',
      content: ['6. Error: .cause'],
    },
    {
      id: '26',
      type: 'PARAGRAPH',
      content: [
        'In JavaScript, an Error an object is a built-in object that represents an error. It has several properties, such as name, message, and stack, that provide information about the error that occurred.',
        'The .cause property is not a part of the official ECMAScript standard, but it may be available in some JavaScript libraries or frameworks. It could be used to store additional information about the error, such as the underlying cause of the error or the exception that was thrown.',
        'For example, if you have a library that wraps a third-party API and you want to propagate the errors that occur in the API, you could create your own error class that inherits from the built-in Error object and add a .cause property to store the original error.',
      ],
    },
    {
      id: '27',
      type: 'CODE',
      content: [
        'class ApiError extends Error {',
        '    constructor(cause, message) {',
        '        super(message);',
        '        this.cause = cause;',
        "        this.name = 'ApiError';",
        '    }',
        '}',
        '',
        'try {',
        '    // Call the third-party API',
        "    throw new Error('something went wrong');",
        '} catch (error) {',
        "    throw new ApiError(error, 'An error occurred while calling the API');",
        '}',
      ],
    },
    {
      id: '28',
      type: 'PARAGRAPH',
      content: [
        'In this example, the ApiError the class inherits from the built-in Error object and adds a cause property to store the original error.',
        'It’s worth noting that this feature is not part of the official ECMAScript specification, and it depends on your library or framework.',
      ],
    },
    {
      id: '30',
      type: 'HEADER',
      content: ['7. RegExp: match indices(‘d’ flag)'],
    },
    {
      id: '31',
      type: 'PARAGRAPH',
      content: [
        'The ‘d’ flag is a proposed feature for ECMAScript that would allow developers to use regular expressions to match text while also capturing the indices of the matched text. This can be useful for tasks such as highlighting matched text in a text editor or determining the location of matches in a larger string.',
        'When using the ‘d’ flag, the result of the regular expression match would be an object that contains information about the match, including the matched text, as well as the start and end indices of the match within the original string.',
        'Here is an example of how this feature might be used:',
      ],
    },
    {
      id: '32',
      type: 'CODE',
      content: [
        "let str = 'The quick brown fox jumps over the lazy dog.';",
        'let regex = /[a-z]+/g;',
        'let match = regex.exec(str);',
        'console.log(match.index); // 4',
        "console.log(match[0]); // 'quick'",
      ],
    },
    {
      id: '33',
      type: 'PARAGRAPH',
      content: [
        'This code matches any sequence of lowercase letters in the string “The quick brown fox jumps over the lazy dog.” and returns the first match and its index.',
        'With the ‘d’ flag:',
      ],
    },
    {
      id: '34',
      type: 'CODE',
      content: [
        "let str = 'The quick brown fox jumps over the lazy dog.';",
        'let regex = /[a-z]+/gd;',
        'let match = regex.exec(str);',
        'console.log(match.index); // {start:4, end:9}',
        "console.log(match[0]); // 'quick'",
      ],
    },
    {
      id: '35',
      type: 'PARAGRAPH',
      content: [
        'This code matches any sequence of lowercase letters in the string “The quick brown fox jumps over the lazy dog.” and returns the first match, its index, and the end index.',
        'It’s worth noting that this feature is not part of the official ECMAScript specification and is in the proposal stage, so it may not be supported in all JavaScript environments. You may have to use polyfills or transpilers to use it.',
      ],
    },
    {
      id: '36',
      type: 'HEADER',
      content: ['Conclusion'],
    },
    {
      id: '37',
      type: 'PARAGRAPH',
      content: [
        'In conclusion, ECMAScript 2022 is the latest version of the ECMAScript standard, which provides a set of rules and guidelines for programming languages such as JavaScript. It includes new features such as private class fields, optional chaining, and null coalescing, as well as updates to existing features. It is still in development and is expected to be finalized and published in 2022. These new features allow developers to write more efficient, expressive, and safe code. ECMAScript 2022 is a step forward in the evolution of JavaScript language, constantly updated to meet the new demands of developers and make it more powerful and versatile.',
        'Thank you for Reading !!!',
      ],
    },
  ],
};

const ArticlePage: FC = memo(() => {
  const { t } = useAppTranslation('article-page');

  return (
    <section>
      <ArticleList
        articleList={new Array(16).fill(0).map((_, index) => ({
          ...article,
          id: index,
        }))}
        isLoading={false}
        listType={ArticleListType.LIST}
      />
    </section>
  );
});

export { ArticlePage };
