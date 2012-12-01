{
    quizzes: [{
        name: "image",
        questions: [
            {
                question: "What is a subtractive color model that stands for Cyan, Magenta, Yellow, and Black?",
                answer: "CMYK", 
                noise: "RGB", "TWAIN", "CMS"
            },
            {
                question: "What is an additive color model and stands for Red, Green, and Blue?",
                answer: "RGB", 
                noise: "CMYK", "ASCII", "DHTML"
            },
            {            
                question: "The bit depth for four colors is always __ bits.", 
                answer: "3",
                noise: "2", "8", "4"
            },
            {           
                question: "4,000 pixels x 2,000 pixels =  ____ Megapixels.",
                answer: "8", 
                noise: "800", "8000", "6"
            },
            {  
                question: "An 8-bit color depth allows _____ colors.",
                answer: "256",
                noise: "8", "128", "1024"
            },
            {            
                question: "Approximately, what will happen to the file size if the total number of pixels of an image is doubled?",
                answer: "the file size doubles",
                noise: ["the file size triples", "the file size will be half", "the file size will quadruple"]
            },
            {
                question: "What does HSB stand for?",
                answer: "Hue, Saturation, and Brightness",
                noise: ["Hypertext, Sampling, and Bytes", "Hue, Sampling, and Boolean", "Histogram, Saturation, and Bitmap"]
            },
            {            
                question: "The term ________ comes from abridging the words: compressor and decompressor.",
                answer: "codec",
                noise: ["chrominance", "complementary", "compilation"]
            },
            {
                question: "The term pixel stands for picture _________.",
                answer: "element",
                noise: ["extension", "expression", "envelope"]
            },
            {
                question: "A ___________ of an image is a bar chart that shows the relative number of pixels plotted against a color value.",
                answer: "histogram", 
                noise: ["histology", "hierarchy", "pixelation"]
            }
        ]
    },
    {
        name: "audio",
        questions: [
            {
                question: "A ________________ microphone is most sensitive to the sound coming from the front.",
                answer: "unidirectional",
                noise: ["unicorn", "MIDI", "amplitude"]
            },
            {
                question: "A sound with higher _____ is perceived to have a higher pitch.",
                answer: "frequency",
                noise: ["tracks", "bit depth", "fidelity"]
            },
            {
                question: "The number of sample points taken per second is called the _____.",
                answer: "sampling rate",
                noise: ["pressure", "frequency", "bit depth"]
            },
            {
                question: "Reducing the number of channels from stereo (two) to mono (one) will _____.",
                answer:  "decrease the file size by half",
                noise: ["increase the file size by half", "double the file size", "triple the file size"]
            },
            {
                question: "The sound wave can be represented graphically with the changes in air pressure or electrical signals plotted over time---a waveform. The _______________ axis represents time.",
                answer: "horizontal",
                noise: ["vortex", "vertical", "space"]
            },
                question: "Sound intensity is often measured in ________________.",
                answer: "decibels",
                noise: ["decimals", "dynamic beats", "digital bells"]
            },
            {
                question: "__________ is a wave that is generated by vibrating objects in a medium such as air.",
                answer: "Sound",
                noise: ["Envelope", "Polymorphism", "Nyquist"]
            },
            {
                question: "__________  _______ means combining multiple audio tracks with effects.",
                answer: "Mixing Down",
                noise: ["Fourier transforming", "Run-length encoding", "Quick masking"]

            },
                question: "What is the most common sampling rate for CD quality audio?",
                answer: "44,100 Hz",
                noise: ["11,025 Hz", "96,000 Hz", "22,050 Hz"]
            },
            {
                question: "What is not considered a general strategy for reducing digital audio file size?",
                answer: "Increase the sampling rate",
                noise: ["Reduce the bit depth", "Apply Compression", "Reduce the number of channels"]
            }
        ]
    },
    {
        name: "html",
        questions : [
            { 
                question: "HTML stands for:  ", 
                answer: "HyperText Markup Language",
                noise: ["HyperText Music Layer", "HyperText Machine Language", "HyperText Mutator Laser"]
            },
            { 
                question: "URL stands for:  ", 
                answer: "Uniform Resource Locator",
                noise: ["Uniform Relay Link", "Uniform Resolution Layer", "Uniform Raster Listener"] 
            },
            { 
                question: "Dyanmic HTML is not a programming language but a combination of HTML, CSS, and _____________", 
                answer: "JavaScript",
                noise: ["Java", "JPEGs", "Flash"]
            },
            { 
                question: "A Web ___________ is an application that can display HTML documents in the correct format and layout according to the markup tags.", 
                answer: "Browser" 
                noise: ["generator", "raster", "vector"]
            },
            { 
                question: "A file _______ refers to the location of a file on a computer, like an address to a house.", 
                answer: "path",
                noise: [ "track", "trail", "tag"]
            },
            { 
                question: "CSS stands for:  ", 
                answer"Cascading Style Sheets",
                noise: ["Cell Style Sheets", "Common Style Sheets", "Computer Style Sheets"]
            },
            { 
                question: "__________ is a scripting language web pages.", 
                answer: "JavaScript",
                noise: "DOCTYPE", "Dreamweaver", "Web Expression"]
            },
            { 
                question: "WYSIWYG stands for:  ", 
                answer: "What You See Is What You Get",
                noise: ["What You Script Is What You Gamut", "What You Sample Is What You Get", "What You Select Is What You GIF"]
            },
            { 
                question: "The ______ folder is the outermost folder of a website's structure.", 
                answer: "root",
                noise: ["boot", "moot", "loot"]
            },
            { 
                question: "Which one is an example of a valid HTML comment?", 
                answer: "<!--This is a comment-->",
                noise: ["010--This is a comment--010", "[This is a comment]", "$$--This is a comment--$$"]
            }
        ]
    }]
};
