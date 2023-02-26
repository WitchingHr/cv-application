# CV Application

## Abstract
Resume builder built with `create-react-app`, created for The Odin Project curriculum. 

App features assorted editable input fields that update a rendered resume, with the ability to print out the resume. The app also features an image uploader to update the Avatar picture, and a dynamic layout, ready for desktop and mobile layouts.

This is my first **React** project, woo! Feels good to finally get to this point where I can start structuring my projects with a frontend framework. 

Creating the editor and the resume was very straightforward. When it came time to "connecting" them with props, I ran into some issues. Ended up creating a data structure and passed that data around to components. 

Another challenge was using a single Input component to update different data based on where the Input was nested. I ended up passing props to the Inputs that basically told it what the parent component was and used that as parameters to update the specific data. I'm sure there is a better way to handle this and I need to figure it out in my next project. I was able to make this one, in a relatively clean way (for a first React project).

Additionally, I learned how to use the input file type to upload and retrieve data (to set avatar picture). 

## Lessons learned

-   React!
-   Creating Components
-   Using hooks (useState, useContext, useRef)
-   Conditional Rendering
-   Passing Props to other Components
-   Using file picker to add an image
-   Refactoring wet code to be more DRY and scalable

## Asset sources

Icons were designed by myself using Figma