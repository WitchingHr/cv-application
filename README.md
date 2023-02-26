# CV Application

<img width="1470" alt="Screenshot 2023-02-26 at 3 55 40 PM" src="https://user-images.githubusercontent.com/41353202/221437210-2b1018ba-6d7f-4fa1-baee-e2dc0c69c506.png">
<p align="middle">
<img width="499" alt="Screenshot 2023-02-26 at 3 56 38 PM" src="https://user-images.githubusercontent.com/41353202/221437233-bb150496-a7ec-46ca-afc5-551d34ea8c93.png">
<img width="499" alt="Screenshot 2023-02-26 at 3 56 52 PM" src="https://user-images.githubusercontent.com/41353202/221437236-d30dd6ce-eb6f-40eb-8354-8e0d779b14f0.png">
</p>

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
