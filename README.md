![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)
<a name="___top"></a>
<div align="center">
<link rel="icon" href="http://github.com/doctopus/ChatGPT-Mods" />


![logo](icon.png "Human Genome Project Animation")
</div>

[](1}}})
<a name="ChatGPT-Mods"></a> []({{{1)
# [ChatGPT-Mods &#9650;](#___top "click to go to top of document")

## Firefox Add-on to Add UI-UX improvements to ChatGPT


#### What is this? 
This is a Firefox Add-On to Modify how the ChatGPT page appears.
This modifies the page to modify the text, and present dense text, makes the code-block in light theme.

#### What it does?
This injects css and javascript to introduce a few UI/UX quality of life improvements.

#### Why it is needed?
Problem: 
    1. The default chatgpt page when opened in firefox with narrow window width, the enter button does not submit the chat anymore. In the default mode, enter button submits only if it is a wide screen. This add-on, keeps the function in narrow screen also. It keeps the shift-enter as next line while interpreting enter to submit the chat text.
    2. The text is too spread-out so an answer often does not hold in the same view port, requiring to scroll up and down many times.

Solution: 
    1. Inject JavaScript to interpret Enter as submit in narrow screen while differentiating it from the Shift-Enter which is for moving to the next line.
    2. Modify the font, line-height, and other css mods to make the page compact yet comfortably legible.

##### What is included in the add-on?
The add-on files include the following files.

```
chatgpt-mods/
├── manifest.json
├── content.js
├── styles.css
├── popup.html
├── popup.js
├── options.html
├── options.js
├── icon.png
├── icon-large.png   // Optional larger icon
```
Change the version number in manifest.json before zipping for next version.


### Addon Description in Firefox
This add-on customizes how the ChatGPT page appears. (Works on new https://chatgpt.com page)    
    -Changes the font and spacing so it takes less space.    
    -CodeBlock is presented as light theme instead the default dark theme    
    -ChatGPT mentions in the top and in the typing field are removed    
    -In a small width window, enter submits the code; no need to use mouse to submit chat    


### Usage
The add-on can be found in Mozilla Firefox Add-On Page: [ChatGPT-Mods](https://addons.mozilla.org/en-US/firefox/addon/chatgpt-mods/)

##### Contributing
Feel free to fork or submit a PR to improve this add-on.

### License
This project is under Mozilla Public License 2.0