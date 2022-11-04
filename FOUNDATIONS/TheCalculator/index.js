// global object to store memory
let numObj = {
    num1: '',
    sign:'',
    result:[],
}


// wait for DOM to load the button function
window.addEventListener('load', (event) => {
    loadButtons();
  });


  // function to load buttons
const loadButtons =() => {
    const screenDisplay = document.getElementById("screenDisplay")
    const screenDisplayResult = document.getElementById("screenDisplayResult")

    document.getElementById("one").addEventListener("click", () => {
        numObj.num1+=1
        screenDisplayResult.textContent=numObj.num1
    })
    document.getElementById("two").addEventListener("click", () => {
        numObj.num1+=2
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("three").addEventListener("click", () => {
        numObj.num1+=3
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("four").addEventListener("click", () => {
        numObj.num1+=4
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("five").addEventListener("click", () => {
        numObj.num1+=5
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("six").addEventListener("click", () => {
        numObj.num1+=6
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("seven").addEventListener("click", () => {
        numObj.num1+=7
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("eight").addEventListener("click", () => {
        numObj.num1+=8
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("nine").addEventListener("click", () => {
        numObj.num1+=9
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("zero").addEventListener("click", () => {
        numObj.num1+=0
        screenDisplayResult.textContent=numObj.num1
    }) 
    document.getElementById("deleteButton").addEventListener("click", () => {
        numObj.num1=numObj.num1.slice(0, -1); 
        screenDisplayResult.textContent=numObj.num1
    })

    document.getElementById("comma").addEventListener("click", () => {
        if (!numObj.num1.includes('.')) {
            numObj.num1+='.'
        }
        screenDisplayResult.textContent=numObj.num1
    })

    document.getElementById("plus").addEventListener("click", () => {
        if (numObj.result.length<2 && numObj.num1!='') {
            numObj.result.push(numObj.num1)
            numObj.num1=''
            if (numObj.result.length===2) {
               operate()

            }
        }
        numObj.sign="+"
        updateTopScreen()
    })
    document.getElementById("minus").addEventListener("click", () => {
        if (numObj.result.length<2 && numObj.num1!='') {
            numObj.result.push(numObj.num1)
            numObj.num1=''
            if (numObj.result.length===2) {
               operate()

            }
        }
        numObj.sign="-"
        updateTopScreen()
    })
    document.getElementById("multiply").addEventListener("click", () => {
        if (numObj.result.length<2 && numObj.num1!='') {
            numObj.result.push(numObj.num1)
            numObj.num1=''
            if (numObj.result.length===2) {
               operate()

            }
        }
        numObj.sign="*"
        updateTopScreen()
    })
    document.getElementById("divide").addEventListener("click", () => {
        numObj.sign="/"
        if (numObj.result.length<2 && numObj.num1!='') {
            numObj.result.push(numObj.num1)
            numObj.num1=''
            if (numObj.result.length===2) {
               operate()

            }
        }
        numObj.sign="/"
        updateTopScreen()
    })
    document.getElementById("equal").addEventListener("click", () => {
        if (numObj.result.length==1 && numObj.num1!='' && numObj.sign!='') {
            numObj.result.push(numObj.num1)
            operate()
            updateResultScreen()
            numObj.sign=''
            numObj.num1=numObj.result
            numObj.result=[]
        }
    })
    document.getElementById("comma")
    document.getElementById("clearButton").addEventListener("click", () => {
        numObj = {
            num1: '',
            sign:'',
            result:[],
            equal:false,
        }
        screenDisplayResult.textContent=0
        screenDisplay.textContent=''
    })
    document.getElementById("deleteButton")
}



// evaluate sign and calculate the answer
const operate = () => {
    let answer;
    if (numObj.sign) {
        let resultArray = []
        let calculatute = () => {
            if ((String(answer).length-String(answer).split('').indexOf(".")>2) && (String(answer).split('').indexOf(".")!=-1)) {
                numObj.result = [answer.toFixed(2)]
            }
            else {
                numObj.result = [answer]
            }
        }
        resultArray = numObj.result.map(x=>parseFloat(x))
        if (numObj.sign==="+") {
            answer = (resultArray.reduce((total, current)=>(total+current)))
            calculatute()
        }
        else if (numObj.sign==="-") {
            answer = (resultArray.reduce((total, current)=>(total-current)))
            calculatute()
        }
        else if (numObj.sign==="*") {
            answer = (resultArray.reduce((total, current)=>(total*current)))
            calculatute()
        }
        else if (numObj.sign==="/") {
            answer = (resultArray.reduce((total, current)=>(total/current)))
            calculatute()
        }
    }
}

// update top screen
const updateTopScreen=()=> {
    ((numObj.result).length==1)?(screenDisplay.textContent = numObj.result+numObj.sign):(screenDisplay.textContent = numObj.num1+numObj.sign)
}
// update bottom screen with the result
const updateResultScreen=()=> {
    screenDisplay.textContent+=numObj.num1+"="
    screenDisplayResult.textContent = numObj.result
}
