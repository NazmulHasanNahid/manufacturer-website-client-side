import React from "react";

const Blog = () => {
  return (
    <div className="px-20">
    
      <div class="card card-side bg-base-100 my-5 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">1.How will you improve the performance of a React Application?</h2>
          <p>According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance. In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.</p>
          <h2 className="font-bold">React performance optimization techniques</h2>
          <li>Keeping component state local where necessary</li>
          <li>Memoizing React components to prevent unnecessary re-renders</li>
          <li>Using React.memo()</li>
          <li>Using the useCallback Hook</li>
          <li>Code-splitting in React using dynamic import()</li>
          <li>Lazy loading images in React</li>
        </div>
       
      </div>
      <div class="card card-side my-5 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">2.What are the different ways to manage a state in a React application?</h2>
          <p>Managing state in your React apps isn’t as simple as using useState or useReducer. Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose? In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
          <h2 className="font-bold">The Four Kinds of React State to Manage</h2>
         <li>Local state</li>
         <li>Global state</li>
         <li>Server state</li>
         <li>URL state</li>
        </div>
       
      </div>
      <div class="card card-side my-5 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">3.How does prototypical inheritance work?</h2>
          <p>What does inheritance mean in JavaScript? Its simple, the inheritance means: “objects/classes inherit from other objects/classes” through prototypes. for example: function Person(first, last, age, eyecolor)</p>
          <h2 className="font-bold">What are the 4 ways to create inheritance in JS?</h2>
         <li>Object as literal.</li>
         <li>Constructor Invocation Pattern.</li>
         <li>The create() method.</li>
         <li>Using class after ES6.</li>
        </div>
       
      </div>
      <div class="card card-side my-5 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">3.How does prototypical inheritance work?</h2>
          <p>What does inheritance mean in JavaScript? Its simple, the inheritance means: “objects/classes inherit from other objects/classes” through prototypes. for example: function Person(first, last, age, eyecolor)</p>
          <h2 className="font-bold">What are the 4 ways to create inheritance in JS?</h2>
         <li>Object as literal.</li>
         <li>Constructor Invocation Pattern.</li>
         <li>The create() method.</li>
         <li>Using class after ES6.</li>
        </div>
       
      </div>
      <div class="card card-side my-5 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">4.Why should we not update the state directly??</h2>
          <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components. In React, every state update causes the component being updated to re-render. Because re-rendering is an expensive operation, making state updates synchronously can cause serious performance issues, for example, increasing load times or causing your application to crash. By batching state updates, React avoids unnecessary re-renders, boosting performance overall. I hope you enjoyed this article!</p>
        </div>
       
      </div>
      <div class="card card-side my-5 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">5.What is Unit Testing?</h2>
          <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
          <h2 className="font-bold">Why Unit Testing?</h2>
          <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end</p>
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
