//Store object to hold arrays of questions & answers, as well as the current Question number and the current score.  

const STORE = {
    questions: [
        //Question 1
      {
        question: "Content is the most important part of your site. When writing content, you should:",
        options: [
          "Pretend it’s 1860 and you’re being paid by the word! See how many lengthy descriptive adjectives you can cram in.", 
          "Assume most of your readers are middle-age astrophysicists.", 
          "Use plain language and avoid figures of speech, idioms, and complicated metaphors.", 
          "Are words even necessary?"
        ],
        answer: "Use plain language and avoid figures of speech, idioms, and complicated metaphors."
      },
      //Question 2
      {
        question: "Global code is code that affects your entire website. When writing global code it is important to:",
        options: [
          "Make the title the same for every page.", 
          "Provide a unique title for each page or view.",
          "Only worry about it being eye-catching. Who cares if it’s descriptive of the page it’s on?",
          "Remember that title text just clutters a good website."
        ],
        answer: "Provide a unique title for each page or view."
      },
      //Question 3
      {
        question: "Images are a very common part of most websites. To help make sure they are enjoyable by all, you should:",
        options: [
          "Treat alt text for images as an unnecessary option—that’s why it’s called “alt”.", 
          "Ditch using words to describe pictures... after all, a picture is worth a thousand words.", 
          "Cram every decorative image on your website with alt text. ",
          "Provide a text alternative for complex images such as charts, graphs, and maps." 
        ],
        answer: "Provide a text alternative for complex images such as charts, graphs, and maps."
      },
      //Question 4
      {
        question: "Heading elements (h1, h2, h3, etc.) help break up the content of the page into related 'chunks' of information. When using heading elements, remember to: ", 
        options: [
            "Use only one h1 element per page or view.", 
            "Approach headings like they are purely decorative!", 
            "Write them in whatever order you feel like.", 
            "Pack them with really microscopic, detailed information about a page."
        ],
        answer: "Use only one h1 element per page or view."
      },
      //Question 5
      {
        question: "Controls are interactive elements such as links and buttons that let a person navigate to a destination or perform an action. Well-written code for controls:",
        options: [ 
          "Uses onclick for links, and href as a secondary option.", 
          "Avoids notifying users if a link opens in a new window. ", 
          "Uses the button element for buttons.",
          "Blends links with the rest of your text—you don’t want it to draw attention to itself."
        ],
        answer: "Uses the button element for buttons."
      },
  
    ],
    //Question Count & Score
    currentQuestion: 0,
    score: 0
  };