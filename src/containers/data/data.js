const question = [
  {
    id: 1,
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'c',
    category: 'js'
  },
  {
    id: 2,
    question: `
    #Markdown in react-native is so cool! {'\n\n'}
      You can **emphasize** what you want, or just _suggest it_ 😏…{'\n'}
      You can even [**link your website**](https://twitter.com/Charles_Mangwa) or if you prefer: [email somebody](mailto:email@somebody.com){'\n'}
      Spice it up with some GIFs 💃:
      ![Some GIF](https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif){'\n'}
      And even add a cool video 😎!{'\n'}

      [![A cool video from YT](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)

      [![Another one from Vimeo](https://i.vimeocdn.com/video/399486266_640.jpg)](https://vimeo.com/57580368)
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'b',
    category: 'php'
  },
  {
    id: 3,
    question: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry \n
    var foo = function (bar) {
      return bar++;
    };
    
    console.log(foo(5));
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'd',
    category: 'html'
  },
  {
    id: 4,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'a',
    category: 'js'
  },
  {
    id: 5,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'b',
    category: 'php'
  },
  {
    id: 6,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'd',
    category: 'js'
  },
  {
    id: 7,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'c',
    category: 'html'
  },
  {
    id: 8,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'a',
    category: 'js'
  },
  {
    id: 9,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'b',
    category: 'html'
  },
  {
    id: 10,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'b',
    category: 'js'
  },
  {
    id: 11,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'c',
    category: 'js'
  },
  {
    id: 12,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'd',
    category: 'php'
  },
  {
    id: 13,
    question: `
    # h1 Heading 8-)
    ## h2 Heading 8-)
    ### h3 Heading 8-)
    
    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |
    `,
    a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    b: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    c: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    d: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    answer: 'a',
    category: 'js'
  },
]

export default question;