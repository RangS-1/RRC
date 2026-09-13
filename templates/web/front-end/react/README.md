# RRC - RangS Reusable Components

This is React Section, where you can use a basic component that important on web development. Even though this project is not done, i think this will be useful either for me or you!

## Available Components
1. Navigation Bar
2. Header
3. Tag
4. Article
5. Article Body (Paragraph and others)
6. Card (No Img)
7. Footer

## How To Use!
1. Open your React Project and copy components you want, in this example i use Header.
2. For components, copy it on /src/component/.
3. For CSS, copy it on /src/assets/css/.
4. Then open your App.jsx and import it like this
```Jsx
import Header from './component/Header.jsx'

function App() {
  return(
    <>
      <Header headtitle="Header Title" headsubtitle="Header SubTitle"/>
    </>
  )  
}

export default App
```
5. You see headtitle and headsubtitle right there? that was properties, In there you can change the code. Example:
```
<Header headtitle="RangS" headsubtitle="A Simple Portfolio Website"/>
```
6. You did it! That's the example to use this Projects. Didn't Understand? why don't you learn React then?

## License
This Project is using MIT License, you can use this project whatever you want without Credit Me! Good Luck.
<br>
And as always, "Made from Programmer to Programmer".