const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
 const question = document.querySelector("#que");
 console.log(question);
 console.log(question.textContent);
 const option_a = document.getElementById("text-option-a");
 const option_b = document.getElementById("text-option-b");
 const option_c = document.getElementById("text-option-c");
 const option_d = document.getElementById("text-option-d");
 const submit = document.querySelector("#submit");
 let answerElement = document.querySelectorAll(".Quiz-ans");

 console.log(option_a);
 console.log(option_b);
 console.log(option_c);
 console.log(option_d);

 console.log(option_a.textContent);
 console.log(option_b.textContent);
 console.log(option_c.textContent);
 console.log(option_d.textContent); 

  let currque = 0;
  let score = 0;


  question.textContent = quiz[currque].question;
  option_a.textContent=quiz[currque].ans1text;
  option_b.textContent=quiz[currque].ans2text;
  option_c.textContent=quiz[currque].ans3text;
  option_d.textContent=quiz[currque].ans4text;

  submit.addEventListener("click",()=>{
    const checkedAns =  document.querySelector('input[type = "radio"]:checked')
    if(checkedAns == null){
        alert("please select the answer")
    }
    else{
        if(checkedAns.nextElementSibling.textContent === quiz[currque].answer){
            score++;
        }
        currque++
        if(currque<quiz.length){
            question.textContent = quiz[currque].question;
            question.option_a=quiz[currque].ans1text;
            question.option_b=quiz[currque].ans2text;
            question.option_c=quiz[currque].ans3text;
            question.option_d=quiz[currque].ans4text;
            checkedAns.checked = false;
        }else{
            alert(`Your score is ${score} out of ${quiz.length}`)
            location.reload();
        }
    }

  })
 