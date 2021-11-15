import {
    FormControl, Label, Input, Form,
    Flex,
    Button,
    IconButton,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import styled from "styled-components";


 export function ToMEH() {
    const { register, handleSubmit } = useForm({
      defaultValues: {
        ToDOH: "what toDOH",
        description: "how toDOH",
        inside: true,
        done: false,
      }
    });
    // add  DB : 
    const onSubmit = (data) => {alert(JSON.stringify(data));};
  
    return ( <>
    <StyledForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="ToDOH"> ADD YOUR TODOH</Label>
        <Input placeholder="what" {...register("ToDOH")} />
  
        <Label htmlFor="description">HOW toDOH?</Label>
        <Input placeholder="how" {...register("description")} />
  
        
    
  
        <Label>inside?</Label>
        <Input type="checkbox" {...register("inside")} ></Input>
        <Label>done?</Label>
        <Input type="checkbox" {...register("done")} ></Input>
  
        <Input type="submit" ></Input>
      </Form></StyledForm></>
    );
  }
  const StyledForm= styled.section ``;
    
  
