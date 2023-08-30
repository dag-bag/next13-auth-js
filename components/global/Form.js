"use client";
import { useRef } from 'react'

const Form = ({action, ...props}) => {
    const formRef = useRef()
    async function handleAction(formData) {
        await action(formData);
        formRef.current.reset();
    }
  return (
    <>
        <form {...props} ref={ref} action={action} />
    </>
  )
}

export default Form