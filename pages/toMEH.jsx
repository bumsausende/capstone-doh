import {
  FormControl,
  Label,
  Input,
  Form,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Header from "../components/Header";

function ToMEH() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <Header />
      <Body>
      <div className="FormContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="toDOH">ToDOH</label>
            <input placeholder="what" {...register("toDOH")} />
          </div>

          <div>
            <label htmlFor="description"> YOUR IDEA</label>
            <input placeholder="how" {...register("description")} />
          </div>
          <div>
            <label htmlFor="time">ANY CONDITIONS?</label>
            <input
              placeholder="set your mobile timer"
          
              {...register("time")}
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

          <input type="submit" />
        </form>
      </div>
      </Body>
    </>
  );
}
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
export default ToMEH;
