import React from "react";
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';
import "./CreateUser.css"



export const CreateUser = (props) => {
   
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      /* eslint-disable no-template-curly-in-string */
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      /* eslint-enable no-template-curly-in-string */
      
    console.log(props)


    async function onFinish(user) {
        try {
            let response = await fetch("https://dummyapi.io/data/v1/user/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "app-id": '61812ad9523754cd8285f9e7'
                },
                body: JSON.stringify(user.User)
            });
            let result = await response.json();
            props.history.push(`/Profile/${result.id}`);    
        } catch (err) {
            alert("Проблема с сетевым запросом " + err); 
        }
    }
   
    return (

        <div className="create-user">
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['User', 'firstName']}
                    label="firstName"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name={['User', 'lastName']}
                    label="lastName"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name={['User', 'email']}
                    label="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
        
    );
     
    
}