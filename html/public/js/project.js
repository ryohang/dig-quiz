angular.module('project',[]).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/q/:quizId', {controller:TakeQuiz, templateUrl:'detail.html'}).
      //when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  }).service('quizData', function(){
    return[{
      "label": "image",
      "questions": [{
          "tags": ["Facebook", "Twitter"],
          "articleApiPath": "http://api.usatoday.com/open/articles?tag=Facebook&count=1&api_key=modev2013&encoding=json",
          "stories": [{
              "description": "New York State Police are using social media to seek tips and post information.",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/11/26/troopers-facebook-twitter/1727961/?kjnd=zLEWr6cC410%2BVUDFLwn97mNlH75tlBnVqv9i1qDDHcoVp3UNCxfJIH91WTLQX4%2BX-cff3537c-5270-4b95-85db-8b8c2ab8858d_m32vq8NgqTbTJ35FtkH7eiZm0ze5nu0el26dxcLDg9A2gZ%2Bt1RMK54a3Op1VqVhz"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/nation/2012/11/26/troopers-facebook-twitter/1727961/?kjnd=RoKAy7XOtQUnsyDIdMqHrsD93dU1wYwscd7DrcWrLGk9qfPXnilxly71WAtbUQUy-cff3537c-5270-4b95-85db-8b8c2ab8858d_WBi9qXw%2F%2BM96lyZEw%2F3EfbDmfmT8jppQrqLwpk2wYzCOIWnHI5bYqYkokY2qLmwQ",
              "pubDate": "Mon, 26 Nov 2012 05:37:15 GMT",
              "title": "N.Y. state troopers launch Facebook, Twitter initiatives"
          }],

          "label": "What is a subtractive color model that stands for Cyan, Magenta, Yellow, and Black?",
          "answer": "CMYK", 
          "noise": ["RGB", "TWAIN", "CMS"]
      },
      {
          "tags": ["Barrack Obama"],
          "articleApiPath": "http://api.usatoday.com/open/articles?tag=Barrack+Obama&count=1&api_key=modev2013&encoding=json",
          "stories": [{
              "description": "Pharmacy group signaled it would no longer oppose legislation to clarify FDA authority over compounding.",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/11/15/compounding-pharmacies-laws/1706849/?kjnd=9FaDjeiXZlupJ2ShkixK5T7a4dX1egbVu2XWlYuVKlhc6fWTlYAiuFKZXg%2B3Jdry-f2e70770-ea6e-4905-84ab-c94c90a89df4_DrR7KOYlNjC767ZeKX1JxwD3pQrICssLi6ueKajPZMDbNKfqwTzEZzCDompZg28D"
                  }
              ],

              "link": "http://apidata.usatoday.com/story/news/nation/2012/11/15/compounding-pharmacies-laws/1706849/?kjnd=97LhL72Kqi%2BhE8hGaKHhxVEWFE4ORF1uTMUQuDZpKqTsp5ueITW%2Fc9%2FcUJ1dTzTT-f2e70770-ea6e-4905-84ab-c94c90a89df4_rnq052z%2BbEQYRw3miiEwLFjqIaa2bYxRLeSp5JOq2kknRST%2BxpW%2FeMjmgV7iEHqF",
              "pubDate": "Thu, 15 Nov 2012 12:39:11 GMT",
              "title": "Senators: Tenn. officials more decisive than FDA"
          }],

          "label": "What is an additive color model and stands for Red, Green, and Blue?",
          "answer": "RGB", 
          "noise": ["CMYK", "ASCII", "DHTML"]
      },
      {
          "tags": ["Joe Biden"],
          "articleApiPath": "http://api.usatoday.com/open/articles?tag=Joe+Biden&count=1&api_key=modev2013&encoding=json",
          "stories": [{
              "description": "Vice presidency has historically been a golden ticket to a presidential nomination. Will it work for Joe Biden in 2016?",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/politics/2012/11/11/biden-presidential-bid/1695733/?kjnd=1ET78ZzkoDpKfBLx%2BTS2kOjXXOIfXcabh5JwSrRq7QNIFXb1N%2FW56S325ZrxNyz%2B-3490f134-1785-40af-bd5b-c779d45b6bae_w1OOM11SW%2B3CXBzpV5rNMxVWXiATctr5sduTYvxa9SyCnWXoDBYo4sX%2FLk%2BpOIQF"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/politics/2012/11/11/biden-presidential-bid/1695733/?kjnd=mKW2ZM9xaNzUgjyZOL6HRr4rNhPH5GqcM4w%2B95HLFUJjh2bZSyG8PnvbBqsKEo5C-3490f134-1785-40af-bd5b-c779d45b6bae_WqD9FNuqhKhMMk1db%2B9BhBxHzoPzOFfD5%2FUdbUHyuo4mV2aCk%2FM2IKiVTVnM1mNL",
              "pubDate": "Sun, 11 Nov 2012 03:57:04 GMT",
              "title": "Will new term be Biden's ticket to a presidency bid?"

          }],

          "label": "The bit depth for four colors is always __ bits.", 
          "answer": "3",
          "noise": ["2", "8", "4"]
      },
      {           
          "tags": ["Unemployment"],
          "articleApiPath": "",
          "stories": [{
              "description": "Man lost job because he put cardboard dime in washing machine in 1963.",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/10/10/fired-bank-employee-cleared-to-work-again/1625353/?kjnd=jEtOrhQ9wPybjer1pgVjFuexGYGZ0P1vh5CpykE1zg7sopPzcea32UMtbDW1JHmh-248fd32e-d175-4519-9f52-e4c616719b42_fq0waParqV792I%2B6e5XQ%2FdkvfHXPyFcy%2B1I8D19jGrmPm7DgfjQz6bJpuq2rHWUo"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/nation/2012/10/10/fired-bank-employee-cleared-to-work-again/1625353/?kjnd=sbD7sySwZHSbJrOeiiayk9ulpMNEdCiW7Vz2yx1PBEwWorAYbDV03HaYRb7eG64I-248fd32e-d175-4519-9f52-e4c616719b42_95fbYxguM683hwbXiC1HzaCIxqY%2BB3FcKcQRF01A706Yv8ymENA1YNBwme3u8SGS",
              "pubDate": "Wed, 10 Oct 2012 05:04:25 GMT",
              "title": "Fired bank employee cleared to work again"
          },
          {
              "description": "Lottery winner who continued taking food stamps found dead in her home",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/09/29/lottery-winner-dies/1603257/?kjnd=RnS8eMIMew%2FnyqlyLoK9j8xUcD5DoxaG8wabxokKcb8UJYiz%2FazQNtcipBoQjvEo-248fd32e-d175-4519-9f52-e4c616719b42_rucKH%2B5yQopZFFeo3M6iBcavSwhKmrVp5Pj8ZdZdHgDc5%2FXld%2BLyojHTYu5gYE6D"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/nation/2012/09/29/lottery-winner-dies/1603257/?kjnd=8eJe7JzoLyQlI6gWO9xryCvVN53VWlB%2FLZTVwG4nh88s2WgcCpsAEhKHXP67fGjo-248fd32e-d175-4519-9f52-e4c616719b42_SvRtgUaEdieVBOMKqs%2ByARpVvfXd6db4MPNm2ym6Hhdn0oz8j7365cYYBggqv6g2",
              "pubDate": "Sat, 29 Sep 2012 07:35:45 GMT",
              "title": "Lottery winner who kept taking food stamps found dead"
          }],

          "label": "4,000 pixels x 2,000 pixels =  ____ Megapixels.",
          "answer": "8", 
          "noise": ["800", "8000", "6"]
      },
      {  
          "tags": ["Technology", "Senate"],
          "articleApiPath": "http://api.usatoday.com/open/articles?tag=Technology&count=2&api_key=modev2013&encoding=json",
          "stories": [{
              "description": "GOP lawmakers rip Department of Energy",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/money/2012/11/17/battery-maker-bankruptcy/1711677/?kjnd=GTPT3ujmVdpwy7i%2BsOAIADKJ5eUK67GvP9oV6GVKS1rbKkUzNjYe%2BK9hzint0Fmf-29afe67b-36d8-4a70-a5fb-8a253ae66ed5_HLmeHBZg2%2FPn0ZDFUlEZf2nqOXurFEHIyaGKOJtCnWwg%2FmdyJnJ0wTZiMpH%2B9HTQ"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/money/2012/11/17/battery-maker-bankruptcy/1711677/?kjnd=FOhNk84Zvu8v15pUZ82ap9hL6tcbqbR3DAms%2FhvYpkawNnK5OoaUs1GRuDlVG6cH-29afe67b-36d8-4a70-a5fb-8a253ae66ed5_vk6QFzHWdxW%2FFjjLLWY6Z1WaqdODhcNCqr%2BXJSeslUc0gb6lPWMyKLWtgboFP3Uc",
              "pubDate": "Sat, 17 Nov 2012 08:00:46 GMT",
              "title": "Senators: Firm got U.S. check on day it filed Chapter 11"
          },
          {
              "description": "Updated 'marshmallow test' offers insight on kids' delayed gratification.",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/health/2012/10/16/science-marshmallow-test-delayed-gratification/1636207/?kjnd=gGdgGVJ3yr6nsP63gSYdLEoWas0La3Uq0dlFYdRUT%2BXqVsb6kciRAqUnN0CsZwEe-29afe67b-36d8-4a70-a5fb-8a253ae66ed5_vBOdj1NO%2FjwdKMQHZ63Nm6okrQtBTMf3VLzKNVPdQd3dJGWKAxttxNVtZAv2WzaL"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/health/2012/10/16/science-marshmallow-test-delayed-gratification/1636207/?kjnd=j1Sx8tNKkrr2G%2B84cj45uvSALMR%2BOUkddWWv%2F0v0y%2F5LR%2B%2ByafzJeoDE51pHsPUw-29afe67b-36d8-4a70-a5fb-8a253ae66ed5_Tmxtkq5a9B8GpR%2FIiPYDgAyFImIzcRTZwK77V41VsZKKrp1GF9TqXkWfHRavsTlb",
              "pubDate": "Tue, 16 Oct 2012 11:39:34 GMT",
              "title": "Updated 'marshmallow test' offers insight on kids' delayed gratification"
          }],
          "label": "An 8-bit color depth allows _____ colors.",
          "answer": "256",
          "noise": ["8", "128", "1024"]
      },
      {            
          "label": "Approximately, what will happen to the file size if the total number of pixels of an image is doubled?",
          "answer": "the file size doubles",
          "noise": ["the file size triples", "the file size will be half", "the file size will quadruple"]
      },
      {
          "label": "What does HSB stand for?",
          "answer": "Hue, Saturation, and Brightness",
          "noise": ["Hypertext, Sampling, and Bytes", "Hue, Sampling, and Boolean", "Histogram, Saturation, and Bitmap"]
      },
      {            
          "label": "The term ________ comes from abridging the words: compressor and decompressor.",
          "answer": "codec",
          "noise": ["chrominance", "complementary", "compilation"]
      },
      {
          "label": "The term pixel stands for picture _________.",
          "answer": "element",
          "noise": ["extension", "expression", "envelope"]
      },
      {
          "label": "A ___________ of an image is a bar chart that shows the relative number of pixels plotted against a color value.",
          "answer": "histogram", 
          "noise": ["histology", "hierarchy", "pixelation"]
      }]
  },
  {
      "label": "audio",
      "questions": [{
          "tags": ["Facebook", "Twitter"],
          "articleApiPath": "http://api.usatoday.com/open/articles?tag=Facebook&count=1&api_key=modev2013&encoding=json",
          "articleJson": {
              "description": "New York State Police are using social media to seek tips and post information.",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/11/26/troopers-facebook-twitter/1727961/?kjnd=zLEWr6cC410%2BVUDFLwn97mNlH75tlBnVqv9i1qDDHcoVp3UNCxfJIH91WTLQX4%2BX-cff3537c-5270-4b95-85db-8b8c2ab8858d_m32vq8NgqTbTJ35FtkH7eiZm0ze5nu0el26dxcLDg9A2gZ%2Bt1RMK54a3Op1VqVhz"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/nation/2012/11/26/troopers-facebook-twitter/1727961/?kjnd=RoKAy7XOtQUnsyDIdMqHrsD93dU1wYwscd7DrcWrLGk9qfPXnilxly71WAtbUQUy-cff3537c-5270-4b95-85db-8b8c2ab8858d_WBi9qXw%2F%2BM96lyZEw%2F3EfbDmfmT8jppQrqLwpk2wYzCOIWnHI5bYqYkokY2qLmwQ",
              "pubDate": "Mon, 26 Nov 2012 05:37:15 GMT",
              "title": "N.Y. state troopers launch Facebook, Twitter initiatives"
          },
          "label": "A ________________ microphone is most sensitive to the sound coming from the front.",
          "answer": "unidirectional",
          "noise": ["unicorn", "MIDI", "amplitude"]
      },
      {
          "tags": ["Barrack Obama"],
          "articleApiPath": "http://api.usatoday.com/open/articles?tag=Barrack+Obama&count=1&api_key=modev2013&encoding=json",
          "articleJson": {
              "description": "Pharmacy group signaled it would no longer oppose legislation to clarify FDA authority over compounding.",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/11/15/compounding-pharmacies-laws/1706849/?kjnd=9FaDjeiXZlupJ2ShkixK5T7a4dX1egbVu2XWlYuVKlhc6fWTlYAiuFKZXg%2B3Jdry-f2e70770-ea6e-4905-84ab-c94c90a89df4_DrR7KOYlNjC767ZeKX1JxwD3pQrICssLi6ueKajPZMDbNKfqwTzEZzCDompZg28D"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/nation/2012/11/15/compounding-pharmacies-laws/1706849/?kjnd=97LhL72Kqi%2BhE8hGaKHhxVEWFE4ORF1uTMUQuDZpKqTsp5ueITW%2Fc9%2FcUJ1dTzTT-f2e70770-ea6e-4905-84ab-c94c90a89df4_rnq052z%2BbEQYRw3miiEwLFjqIaa2bYxRLeSp5JOq2kknRST%2BxpW%2FeMjmgV7iEHqF",
              "pubDate": "Thu, 15 Nov 2012 12:39:11 GMT",
              "title": "Senators: Tenn. officials more decisive than FDA"
          },
          "label": "A sound with higher _____ is perceived to have a higher pitch.",
          "answer": "frequency",
          "noise": ["tracks", "bit depth", "fidelity"]
      },
      {
          "label": "The number of sample points taken per second is called the _____.",
          "answer": "sampling rate",
          "noise": ["pressure", "frequency", "bit depth"]
      },
      {
          "label": "Reducing the number of channels from stereo (two) to mono (one) will _____.",
          "answer":  "decrease the file size by half",
          "noise": ["increase the file size by half", "double the file size", "triple the file size"]
      },
      {
          "label": "The sound wave can be represented graphically with the changes in air pressure or electrical signals plotted over time---a waveform. The _______________ axis represents time.",
          "answer": "horizontal",
          "noise": ["vortex", "vertical", "space"]
      },
        {
          "label": "Sound intensity is often measured in ________________.",
          "answer": "decibels",
          "noise": ["decimals", "dynamic beats", "digital bells"]
      },
      {
          "label": "__________ is a wave that is generated by vibrating objects in a medium such as air.",
          "answer": "Sound",
          "noise": ["Envelope", "Polymorphism", "Nyquist"]
      },
      {
          "label": "__________  _______ means combining multiple audio tracks with effects.",
          "answer": "Mixing Down",
          "noise": ["Fourier transforming", "Run-length encoding", "Quick masking"]

      },
        {
          "label": "What is the most common sampling rate for CD quality audio?",
          "answer": "44,100 Hz",
          "noise": ["11,025 Hz", "96,000 Hz", "22,050 Hz"]
      },
      {
          "label": "What is not considered a general strategy for reducing digital audio file size?",
          "answer": "Increase the sampling rate",
          "noise": ["Reduce the bit depth", "Apply Compression", "Reduce the number of channels"]
      }]
  },
  {
      "label": "html",
      "questions": [{
          "tags": ["Unemployment"],
          "articleApiPath": "",
          "stories": [{
              "description": "Man lost job because he put cardboard dime in washing machine in 1963.",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/10/10/fired-bank-employee-cleared-to-work-again/1625353/?kjnd=jEtOrhQ9wPybjer1pgVjFuexGYGZ0P1vh5CpykE1zg7sopPzcea32UMtbDW1JHmh-248fd32e-d175-4519-9f52-e4c616719b42_fq0waParqV792I%2B6e5XQ%2FdkvfHXPyFcy%2B1I8D19jGrmPm7DgfjQz6bJpuq2rHWUo"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/nation/2012/10/10/fired-bank-employee-cleared-to-work-again/1625353/?kjnd=sbD7sySwZHSbJrOeiiayk9ulpMNEdCiW7Vz2yx1PBEwWorAYbDV03HaYRb7eG64I-248fd32e-d175-4519-9f52-e4c616719b42_95fbYxguM683hwbXiC1HzaCIxqY%2BB3FcKcQRF01A706Yv8ymENA1YNBwme3u8SGS",
              "pubDate": "Wed, 10 Oct 2012 05:04:25 GMT",
              "title": "Fired bank employee cleared to work again"
          },
          {
              "description": "Lottery winner who continued taking food stamps found dead in her home",
              "guid": [
                  {
                      "isPermalink": "true",
                      "value": "http://apidata.usatoday.com/story/news/nation/2012/09/29/lottery-winner-dies/1603257/?kjnd=RnS8eMIMew%2FnyqlyLoK9j8xUcD5DoxaG8wabxokKcb8UJYiz%2FazQNtcipBoQjvEo-248fd32e-d175-4519-9f52-e4c616719b42_rucKH%2B5yQopZFFeo3M6iBcavSwhKmrVp5Pj8ZdZdHgDc5%2FXld%2BLyojHTYu5gYE6D"
                  }
              ],
              "link": "http://apidata.usatoday.com/story/news/nation/2012/09/29/lottery-winner-dies/1603257/?kjnd=8eJe7JzoLyQlI6gWO9xryCvVN53VWlB%2FLZTVwG4nh88s2WgcCpsAEhKHXP67fGjo-248fd32e-d175-4519-9f52-e4c616719b42_SvRtgUaEdieVBOMKqs%2ByARpVvfXd6db4MPNm2ym6Hhdn0oz8j7365cYYBggqv6g2",
              "pubDate": "Sat, 29 Sep 2012 07:35:45 GMT",
              "title": "Lottery winner who kept taking food stamps found dead"
          }],

          "label": "HTML stands for:  ", 
          "answer": "HyperText Markup Language",
          "noise": ["HyperText Music Layer", "HyperText Machine Language", "HyperText Mutator Laser"]
      },
      { 
          "label": "URL stands for:  ", 
          "answer": "Uniform Resource Locator",
          "noise": ["Uniform Relay Link", "Uniform Resolution Layer", "Uniform Raster Listener"] 
      },
      { 
          "label": "Dyanmic HTML is not a programming language but a combination of HTML, CSS, and _____________", 
          "answer": "JavaScript",
          "noise": ["Java", "JPEGs", "Flash"]
      },
      { 
          "label": "A Web ___________ is an application that can display HTML documents in the correct format and layout according to the markup tags.", 
          "answer": "Browser" ,
          "noise": ["generator", "raster", "vector"]
      },
      { 
          "label": "A file _______ refers to the location of a file on a computer, like an address to a house.", 
          "answer": "path",
          "noise": [ "track", "trail", "tag"]
      },
      { 
          "label": "CSS stands for:  ", 
          "answer":"Cascading Style Sheets",
          "noise": ["Cell Style Sheets", "Common Style Sheets", "Computer Style Sheets"]
      },
      { 
          "label": "__________ is a scripting language web pages.", 
          "answer": "JavaScript",
          "noise": ["DOCTYPE", "Dreamweaver", "Web Expression"]
      },
      { 
          "label": "WYSIWYG stands for:  ", 
          "answer": "What You See Is What You Get",
          "noise": ["What You Script Is What You Gamut", "What You Sample Is What You Get", "What You Select Is What You GIF"]
      },
      { 
          "label": "The ______ folder is the outermost folder of a website's structure.", 
          "answer": "root",
          "noise": ["boot", "moot", "loot"]
      },
      { 
          "label": "Which one is an example of a valid HTML comment?", 
          "answer": "<!--This is a comment-->",
          "noise": ["010--This is a comment--010", "[This is a comment]", "$$--This is a comment--$$"]
      }]
  }];
});


function ListCtrl($scope , quizData) {
  $scope.quizes = quizData;
}
function TakeQuiz( $scope , quizData, $routeParams , $location){
  console.log( $routeParams );
  $scope.qId = $routeParams.quizId;
  $scope.quizes = quizData;
  $scope.quiz = _.find(quizData, function(quiz){
    console.log(quiz);
    if( quiz.label === $scope.qId )
      return quiz;
  });
  $scope.nextButtonLabel = "Next";
  $scope.currentQuestionIndex = -1;
  $scope.questionChoices = [];
  var getQuestion = function(){
    console.log( $scope.quiz );
    return $scope.quiz.questions[ $scope.currentQuestionIndex ];
  }
  $scope.currentQuestion = getQuestion();
  console.log( $scope.currentQuestion );
  $scope.showLastScreen = false;
  $scope.nextQuestion = function(){
    console.log( $scope.currentQuestionIndex +"   "+ $scope.quiz.questions.length );
    $scope.currentQuestionIndex ++ ;
    if( $scope.currentQuestionIndex == $scope.quiz.questions.length - 1){
      console.log("last screen");
      $scope.showLastScreen = true;
      $scope.nextButtonLabel = "Submit";
      return;
    }
    if( $scope.currentQuestionIndex > $scope.quiz.questions.length -1 ){
      $scope.showLastScreen = true;
      //send email
      /*$http({method: 'GET', url: '/sendEmail'}).
        success(function(data, status, headers, config) {s
        // this callback will be called asynchronously
        // when the response is available
          console.log( data );
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with status
          // code outside of the <200, 400) range
          console.log( data );
        });*/
      console.log("send email");
      $location.path( "/" );
      return;
    }
    $scope.currentQuestion = getQuestion();
    console.log("noise");
    console.log( $scope.currentQuestion.noise );
    console.log("ans");
    console.log( $scope.currentQuestion.answer );
    $scope.questionChoices = _.shuffle( _.union( $scope.currentQuestion.noise , [$scope.currentQuestion.answer] ) );
    console.log( $scope.questionChoices );

  };

  //$scope.nextQuestion();


}