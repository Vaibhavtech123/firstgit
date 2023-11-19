export const hello =() =>{
    console.log("Hello Vaibhav")
}
export const Ahello =(name) =>{
    console.log("Hello "+ name)
}

// module.exports = {hello,Ahello};

//without destructuring
const Vaibhav =()=>{
    console.log("hello"+"Ahello")
}

export default Vaibhav;