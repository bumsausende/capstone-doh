import { CloseIcon } from "@chakra-ui/icons";
import {
  IconButton,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  
  Checkbox,
  Input,
  Textarea,
  Form,
  Select,
} from "@chakra-ui/react";

import{ useState } from "react";

//Create toDOH =toMEH
export default function CreateToDOH() {
  const [value, setValue] = useState();
  // define values
  //const [isDone, setIsdone] = useState(false);

  const handleSubmitInput = (event) => {
    alert("inside" + value);
    event.preventDefault();
  };

  const handleSubmitToDOH = (event) => {
    // submit
    alert("your toDOH is" + value);
    event.preventDefault();
  };
  // add to db

  //const handleClearTodo = () => { ??

  //inside or outside? or even handlesubmit func?
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <InputGroup
      size="lg"
      justifyContent="space-between"
      alignItems="center"
      py="2"
    >
      <InputLeftAddon
        background="transparent"
        border="none"
        paddingLeft="17px"
        paddingRight="0"
      />
      <Checkbox />

      <Textarea
        //value={}
        width="full"
        placeholder="Create a new todo..."
        variant="outline"
        //onChange={handleChangeTitle}
        onSubmit={handleSubmitToDOH}
        debounceDelay={0}
      />
      <Form onSubmit={handleSubmitInput}>
        <label>
          take a deeep breath:
          <Select value={value} onChange={handleChange}>
            <option value="inside"> wanna stay inside?</option>
            <option value="outside">wanna go outside?</option>
          </Select>
        </label>
        <Input type="submit" value="Submit" />
      </Form>

      <InputRightAddon background="transparent" border="none" />
      <IconButton
        aria-label="Clear Text"
        size="md"
        variant="ghost"
        //onClick={handleClearTodo}
        isRound
        
        icon={<CloseIcon />}
      />
    </InputGroup>
  );
}

/*import {
  FormControl,
  Label,
  Input,
  Form,
  Flex,
  Button,
  IconButton, Textarea
} from "@chakra-ui/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Header from "../components/Header";

function ToMEH() {
  const [input, setInput] =useState({
    name:"",
    content:"",
    description:"",
    IsInside: true, 
    IsDone: false,

  })

 function handleChange(event){
  const{name, value} =event.target;
  setInput(prevInput => {
    return {
      ...prevInput,
      [name]:value
    }
  })
 }
function handleClick(event) {
  event.preventDefault();
  const newToDOH = {
    title: input.title,
    content: input.content
  }
}

const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  
  return (
    <>
      <Header />
      <Body>
      <div className="FormContainer">
        <form >
          <div className="form-group">
            <Input onChange={handleChange} name="title" value={input.title} className="form-control"/>
          </div>

          <div className="form-group">
            <Textarea  onChange={handleChange} name="content" value={input.content} className="form-control"/>
          </div>
        {/* <div>
            
            <input
              
          
              
            />
          </div>

          <div>
            <label htmlFor="inside">IS IT INSIDE?</label>
            <input
              type="checkbox"
             
              value="yes"
              {...register("inside")}
            />
          </div>

          <div>
            <label htmlFor="done">IS IT DONE?</label>
            <input
              type="checkbox"
              
              value="yes"
              {...register("done")}
            />
              </div>

          <Button onClick={handleClick}> ADD ToDOH to MEH! </Button>
        </form>
      </div>
      </Body>
    </>
  );
       };

const Body = styled.section `
  background-color: #5DC8A8;
  margin-top: 100px; 
  padding: 0;
  font-size: 24pt;
  
  


input {
    color: #FFC12C;
background-color: white;
    margin: 1.6rem;
    
  }
div {
  
  border: 4px solid white;
  padding:40px;
  margin: 10px;
  border-radius: 17px;
  box-shadow: 5px 5px 10px 5px #FFC12C;
}
label {
  color: white;
}

`;
export default ToMEH;*/
